import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuItemLinkComponent } from './components/menu-item-link/menu-item-link.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataFilterComponent } from './components/data-filter/data-filter.component';
import { ListpageHeaderComponent } from './components/listpage-header/listpage-header.component';
import { ListpageComponent } from './components/listpage/listpage.component';
import { DynamicBreadcrumbComponent } from './components/dynamic-breadcrumb/dynamic-breadcrumb.component';
import { FormInputtextComponent } from './components/form-inputtext/form-inputtext.component';
import { CardpageComponent } from './components/cardpage/cardpage.component';
import { InputLabelComponent } from './components/input-label/input-label.component';
import { DividerComponent } from './components/divider/divider.component';
import { EntityAutoCompleteComponent } from './components/entity-autocomplete/entity-autocomplete.component';
import { ModuleHomePageComponent } from './components/module-home-page/module-home-page.component';
import { ModuleMenuSectionComponent } from './components/module-menu-section/module-menu-section.component';
import { ModulePageLinkComponent } from './components/module-page-link/module-page-link.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { ModuleAccessCardComponent } from './components/module-access-card/module-access-card.component';
import { NumeroFiscalComponent } from './components/numero-fiscal/numero-fiscal.component';
import { FcTotalesComponent } from './components/fc-totales/fc-totales.component';
import { CardPageFreeComponent } from './components/card-page-free/card-page-free.component';
import { AuditInfoCardComponent } from './components/audit-info-card/audit-info-card.component';
import { LinkAccessCardComponent } from './components/link-access-card/link-access-card.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent,
    SidebarComponent,
    MenuItemLinkComponent,
    DataTableComponent,
    DataFilterComponent,
    ListpageHeaderComponent,
    ListpageComponent,
    DynamicBreadcrumbComponent,
    FormInputtextComponent,
    CardpageComponent,
    InputLabelComponent,
    DividerComponent,
    EntityAutoCompleteComponent,
    ModuleHomePageComponent,
    ModuleMenuSectionComponent,
    ModulePageLinkComponent,
    DateFilterComponent,
    ModuleAccessCardComponent,
    NumeroFiscalComponent,
    FcTotalesComponent,
    CardPageFreeComponent,
    AuditInfoCardComponent,
    LinkAccessCardComponent,
    AccessDeniedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    PrimengModule,
    SidebarComponent,
    MenuItemLinkComponent,
    DataTableComponent,
    DataFilterComponent,
    ListpageHeaderComponent,
    ListpageComponent,
    DynamicBreadcrumbComponent,
    FormInputtextComponent,
    CardpageComponent,
    InputLabelComponent,
    DividerComponent,
    EntityAutoCompleteComponent,
    ModuleHomePageComponent,
    ModuleMenuSectionComponent,
    ModulePageLinkComponent,
    NumeroFiscalComponent,
    FcTotalesComponent,
    CardPageFreeComponent,
  ],
})
export class CoreModule {}
