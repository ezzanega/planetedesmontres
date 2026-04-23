import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductManagementService } from 'src/app/shared/services/product/product-management.service';
import { ListProductItemComponent } from './list-product-item/list-product-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ListProductItemComponent, SharedModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
})
export class ListProductsComponent implements OnInit {
  @Input() shop_right = false;
  @Input() shop_4_col = false;
  @Input() shop_3_col = false;

  allProducts: any[] = [];
  filteredProducts: any[] = [];
  displayedProducts: any[] = [];

  availableBrands: string[] = [];
  selectedBrands: string[] = [];
  selectedType: string = '';

  // ✅ NEW - Best Seller / New
  selectedTag: string = '';

  // ✅ NEW - Price slider
  minPrice: number = 0;
  maxPrice: number = 10000;
  priceRange: { min: number; max: number } = { min: 0, max: 10000 };


  // ✅ ADD totalPages and pages here
  paginate = {
    totalItems: 0,
    currentPage: 1,
    itemsPerPage: 12,
    totalPages: 0,
    pages: [] as number[]
  };

  constructor(private productService: ProductManagementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // ✅ Set type BEFORE loadProducts is called
      this.selectedType = params['type'] || '';
      this.selectedTag = params['tag'] || '';
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        const data = res.data.map((p: any) => ({
          ...p,
          img: this.getImageUrl(p.img),
          thumb_img: p.thumb_img ? this.getImageUrl(p.thumb_img) : this.getImageUrl(p.img),
          banner_img: p.banner_img ? this.getImageUrl(p.banner_img) : null,
          related_images: p.related_images?.map((img: string) => this.getImageUrl(img)) || [],
          price: Number(p.price),
          old_price: p.old_price ? Number(p.old_price) : null,
          discount: Number(p.discount),
          rating: p.rating,
          weight: Number(p.weight)
        }));

        this.allProducts = data;
        this.availableBrands = [
          ...new Set(data.map((p: any) => p.brand).filter((b: any) => !!b))
        ].sort() as string[];

        const prices = data.map((p: any) => p.price);
        this.minPrice = Math.floor(Math.min(...prices));
        this.maxPrice = Math.ceil(Math.max(...prices));
        this.priceRange = { min: this.minPrice, max: this.maxPrice };

        this.applyFilters();
      },
      error: (error) => console.error('Error loading products:', error)
    });
  }

  private getImageUrl(path: string): string {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return 'https://ebackendapi.hnam3ak.ma' + path;
  }
  toggleBrand(brand: string) {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) this.selectedBrands.push(brand);
    else this.selectedBrands.splice(index, 1);
    this.paginate.currentPage = 1;
    this.applyFilters();
  }

  selectType(type: string) {
    this.selectedType = this.selectedType === type ? '' : type;
    this.paginate.currentPage = 1;
    this.applyFilters();
  }

  // ✅ NEW - toggle best seller / new
  selectTag(tag: string) {
    this.selectedTag = this.selectedTag === tag ? '' : tag;
    this.paginate.currentPage = 1;
    this.applyFilters();
  }

  // ✅ NEW - price slider min changed
  onMinPriceChange(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (value <= this.priceRange.max) {
      this.priceRange = { ...this.priceRange, min: value };
      this.paginate.currentPage = 1;
      this.applyFilters();
    }
  }

  // ✅ NEW - price slider max changed
  onMaxPriceChange(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (value >= this.priceRange.min) {
      this.priceRange = { ...this.priceRange, max: value };
      this.paginate.currentPage = 1;
      this.applyFilters();
    }
  }

  resetFilters() {
    this.selectedBrands = [];
    this.selectedType = '';
    this.selectedTag = '';
    this.priceRange = { min: this.minPrice, max: this.maxPrice };
    this.paginate.currentPage = 1;
    this.applyFilters();
  }

  applyFilters() {
    let result = [...this.allProducts];

    if (this.selectedBrands.length > 0) {
      result = result.filter(p => this.selectedBrands.includes(p.brand));
    }

    if (this.selectedType) {
      result = result.filter(p => {
        const productCategory = (p.category || '').toLowerCase().trim();
        const selected = this.selectedType.toLowerCase().trim();
        return productCategory === selected;
      });
    }

    // ✅ NEW - filter by tag
    if (this.selectedTag === 'best-seller') {
      result = result.filter(p => p.best_seller === true || p.tag === 'best-seller');
    }

    if (this.selectedTag === 'new') {
      result = result.filter(p => p.new === true || p.tag === 'new');
    }

    // ✅ NEW - filter by price range
    result = result.filter(p =>
      p.price >= this.priceRange.min && p.price <= this.priceRange.max
    );

    this.filteredProducts = result;
    this.paginate.totalItems = result.length;
    this.paginate.currentPage = 1;
    this.applyPagination();
  }

  applyPagination() {
    const totalPages = Math.ceil(this.paginate.totalItems / this.paginate.itemsPerPage);
    this.paginate.totalPages = totalPages;
    this.paginate.pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const start = (this.paginate.currentPage - 1) * this.paginate.itemsPerPage;
    const end = start + this.paginate.itemsPerPage;
    this.displayedProducts = this.filteredProducts.slice(start, end);
  }

  setPage(page: number) {
    if (page < 1 || page > this.paginate.totalPages) return;
    this.paginate.currentPage = page;
    this.applyPagination();
  }
}
