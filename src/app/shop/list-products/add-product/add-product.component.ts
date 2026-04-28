import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductManagementService } from 'src/app/shared/services/product/product-management.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-product',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  productId: number | null = null;


  // Image previews
  mainImagePreview: string | null = null;
  thumbImagePreview: string | null = null;
  bannerImagePreview: string | null = null;
  relatedImagesPreviews: string[] = [];

  // Files to upload
  mainImageFile: File | null = null;
  thumbImageFile: File | null = null;
  bannerImageFile: File | null = null;
  relatedImagesFiles: File[] = [];

  // Arrays for variants
  sizes: string[] = [];
  colors: string[] = [];
  detailsArray: { key: string; value: string }[] = [];

  // Toast messages
  showSuccessMessage = false;
  showErrorMessage = false;
  successMessage = '';
  errorMessage = '';


  constructor(
    private fb: FormBuilder,
    private productService: ProductManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.checkEditMode();
  }


  
  initForm(): void {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      brand: ['', Validators.required],
      parent_category: ['Watches', Validators.required],
      category: ['', Validators.required],
      small_desc: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      old_price: [''],
      discount: [0, [Validators.min(0), Validators.max(100)]],
      rating: [0, [Validators.min(0), Validators.max(5)]],
      weight: [0],
      dimension: [''],
      best_seller: [false],
      new: [false],
      img: ['', Validators.required], // Will be set when file is selected
    });
  }

  checkEditMode(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = +params['id'];
        this.loadProduct(this.productId);
      }
    });
  }

  loadProduct(id: number): void {
    // this.productService.getProductById(id).subscribe({
    //   next: (res) => {
    //     const product = res.data;

    //     // Populate form
    //     this.productForm.patchValue({
    //       title: product.title,
    //       brand: product.brand,
    //       parent_category: product.parent_category,
    //       category: product.category,
    //       small_desc: product.small_desc,
    //       price: product.price,
    //       old_price: product.old_price,
    //       discount: product.discount,
    //       rating: product.rating,
    //       weight: product.weight,
    //       dimension: product.dimension,
    //       best_seller: product.best_seller,
    //       new: product.new,
    //     });

    //     // Set previews for existing images
    //     this.mainImagePreview = product.img;
    //     this.thumbImagePreview = product.thumb_img;
    //     this.bannerImagePreview = product.banner_img;

    //     // Set sizes, colors, details
    //     this.sizes = product.sizes || [];
    //     this.colors = product.colors || [];

    //     if (product.details) {
    //       this.detailsArray = Object.entries(product.details).map(([key, value]) => ({
    //         key,
    //         value: String(value)
    //       }));
    //     }

    //     // Remove required validator for img when editing
    //     this.productForm.get('img')?.clearValidators();
    //     this.productForm.get('img')?.updateValueAndValidity();
    //   },
    //   error: (error) => {
    //     console.error('Error loading product:', error);
    //     this.showError('Failed to load product');
    //   }
    // });
  }

  // ═══════════════════════════════════════════════════════
  // File Upload Handlers
  // ═══════════════════════════════════════════════════════

  onFileSelect(event: Event, fieldName: string): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    if (fieldName === 'related_images') {
      // Handle multiple files
      this.handleMultipleFiles(input.files);
    } else {
      // Handle single file
      this.handleSingleFile(input.files[0], fieldName);
    }
  }

  private handleSingleFile(file: File, fieldName: string): void {
    if (!this.validateFile(file)) {
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e: any) => {
      switch (fieldName) {
        case 'img':
          this.mainImagePreview = e.target.result;
          this.mainImageFile = file;
          this.productForm.patchValue({ img: 'selected' }); // Mark as selected
          break;
        case 'thumb_img':
          this.thumbImagePreview = e.target.result;
          this.thumbImageFile = file;
          break;
        case 'banner_img':
          this.bannerImagePreview = e.target.result;
          this.bannerImageFile = file;
          break;
      }
    };
    reader.readAsDataURL(file);
  }

  private handleMultipleFiles(files: FileList): void {
    Array.from(files).forEach(file => {
      if (this.validateFile(file)) {
        this.relatedImagesFiles.push(file);

        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.relatedImagesPreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  removeRelatedImage(index: number, event: Event): void {
    event.stopPropagation();
    this.relatedImagesPreviews.splice(index, 1);
    this.relatedImagesFiles.splice(index, 1);
  }

  private validateFile(file: File): boolean {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

    if (!allowedTypes.includes(file.type)) {
      this.showError('Invalid file type. Only JPG, PNG, and WEBP are allowed.');
      return false;
    }

    if (file.size > maxSize) {
      this.showError('File size exceeds 5MB limit.');
      return false;
    }

    return true;
  }

  // ═══════════════════════════════════════════════════════
  // Sizes, Colors, Details Management
  // ═══════════════════════════════════════════════════════

  addSize(value: string, event: Event): void {
    event.preventDefault();
    if (value && value.trim() && !this.sizes.includes(value.trim())) {
      this.sizes.push(value.trim());
      (event.target as HTMLInputElement).value = '';
    }
  }

  removeSize(index: number): void {
    this.sizes.splice(index, 1);
  }

  addColor(value: string, event: Event): void {
    event.preventDefault();
    if (value && value.trim() && !this.colors.includes(value.trim())) {
      this.colors.push(value.trim());
      (event.target as HTMLInputElement).value = '';
    }
  }

  removeColor(index: number): void {
    this.colors.splice(index, 1);
  }

  addDetail(): void {
    this.detailsArray.push({ key: '', value: '' });
  }

  removeDetail(index: number): void {
    this.detailsArray.splice(index, 1);
  }

  // ═══════════════════════════════════════════════════════
  // Form Validation
  // ═══════════════════════════════════════════════════════

  isFieldInvalid(fieldName: string): boolean {
    const field = this.productForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.productForm.get(fieldName);

    if (field?.hasError('required')) {
      return 'This field is required';
    }
    if (field?.hasError('minlength')) {
      return `Minimum ${field.errors?.['minlength'].requiredLength} characters required`;
    }
    if (field?.hasError('min')) {
      return 'Value must be greater than or equal to 0';
    }
    if (field?.hasError('max')) {
      return `Maximum value is ${field.errors?.['max'].max}`;
    }

    return 'Invalid input';
  }

  // ═══════════════════════════════════════════════════════
  // Form Submission
  // ═══════════════════════════════════════════════════════

  onSubmit(): void {
    // Mark all fields as touched to show validation errors
    Object.keys(this.productForm.controls).forEach(key => {
      this.productForm.get(key)?.markAsTouched();
    });

    if (this.productForm.invalid) {
      this.showError('Please fill in all required fields correctly.');
      return;
    }

    if (!this.mainImageFile && !this.isEditMode) {
      this.showError('Main image is required.');
      return;
    }

    this.isSubmitting = true;
    const formData = this.prepareFormData();

    if (this.isEditMode && this.productId) {
      this.updateProduct(this.productId, formData);
    } else {
      this.createProduct(formData);
    }
  }

  private prepareFormData(): FormData {
    const formData = new FormData();
    const formValue = this.productForm.value;

    const booleanFields = ['best_seller', 'new'];

    // Append basic fields
    Object.keys(formValue).forEach(key => {
      if (key !== 'img' && formValue[key] !== null && formValue[key] !== '') {

        // 🔥 Handle boolean fields correctly
        if (booleanFields.includes(key)) {
          formData.append(key, formValue[key] ? '1' : '0');
        } else {
          formData.append(key, formValue[key]);
        }

      }
    });


    // Append basic fields
    // Object.keys(formValue).forEach(key => {
    //   if (key !== 'img' && formValue[key] !== null && formValue[key] !== '') {
    //     formData.append(key, formValue[key]);
    //   }
    // });

    // Append images
    if (this.mainImageFile) {
      formData.append('img', this.mainImageFile);
    }
    if (this.thumbImageFile) {
      formData.append('thumb_img', this.thumbImageFile);
    }
    if (this.bannerImageFile) {
      formData.append('banner_img', this.bannerImageFile);
    }

    // Append related images
    this.relatedImagesFiles.forEach((file, index) => {
      formData.append(`related_images[${index}]`, file);
    });

    // Append sizes
    this.sizes.forEach((size, index) => {
      formData.append(`sizes[${index}]`, size);
    });

    // Append colors
    this.colors.forEach((color, index) => {
      formData.append(`colors[${index}]`, color);
    });

    // Append details as JSON object
    const detailsObject: { [key: string]: string } = {};
    this.detailsArray
      .filter(d => d.key.trim() && d.value.trim())
      .forEach(d => {
        detailsObject[d.key] = d.value;
      });

    if (Object.keys(detailsObject).length > 0) {
      formData.append('details', JSON.stringify(detailsObject));
    }

    return formData;
  }

  private createProduct(formData: FormData): void {
    this.productService.createProduct(formData).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.showSuccess('Product created successfully!');
        this.router.navigate(['/shop']);
        // setTimeout(() => {

        // }, 2000);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Error creating product:', error);
        this.showError(error.error?.message || 'Failed to create product');
      }
    });
  }

  private updateProduct(id: number, formData: FormData): void {
    // Add _method for Laravel to handle as PUT
    formData.append('_method', 'PUT');

    // this.productService.updateProduct(id, formData).subscribe({
    //   next: (res) => {
    //     this.isSubmitting = false;
    //     this.showSuccess('Product updated successfully!');
    //     setTimeout(() => {
    //       this.router.navigate(['/shop']);
    //     }, 2000);
    //   },
    //   error: (error) => {
    //     this.isSubmitting = false;
    //     console.error('Error updating product:', error);
    //     this.showError(error.error?.message || 'Failed to update product');
    //   }
    // });
  }

  onCancel(): void {
    this.router.navigate(['/shop']);
  }

  // ═══════════════════════════════════════════════════════
  // Toast Messages
  // ═══════════════════════════════════════════════════════

  private showSuccess(message: string): void {
    this.successMessage = message;
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 4000);
  }

  private showError(message: string): void {
    this.errorMessage = message;
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 4000);
  }
}
