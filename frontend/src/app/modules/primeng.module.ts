import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { EditorModule } from 'primeng/editor';
import { StepsModule } from 'primeng/steps';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChipsModule } from 'primeng/chips';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PasswordModule } from 'primeng/password';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TreeTableModule } from 'primeng/treetable';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { SliderModule } from 'primeng/slider';
import { SkeletonModule } from 'primeng/skeleton';
import { ChipModule } from 'primeng/chip';


let modules = [
  ButtonModule,
  SplitButtonModule,
  TabViewModule,
  InputTextModule,
  DropdownModule,
  MultiSelectModule,
  InputMaskModule,
  CalendarModule,
  ToastModule,
  MessagesModule,
  MessageModule,
  ToolbarModule,
  AutoCompleteModule,
  TableModule,
  AccordionModule,
  CardModule,
  PanelModule,
  InputTextareaModule,
  InputSwitchModule,
  CheckboxModule,
  PaginatorModule,
  EditorModule,
  StepsModule,
  DialogModule,
  ListboxModule,
  KeyFilterModule,
  OverlayPanelModule,
  SelectButtonModule,
  ProgressBarModule,
  RadioButtonModule,
  MenuModule,
  TabMenuModule,
  ChipsModule,
  RatingModule,
  VirtualScrollerModule,
  BreadcrumbModule,
  SidebarModule,
  ProgressSpinnerModule,
  ToggleButtonModule,
  PasswordModule,
  AvatarModule,
  AvatarGroupModule,
  FileUploadModule,
  ConfirmDialogModule,
  ChartModule,
  KnobModule,
  ImageModule,
  DividerModule,
  TagModule,
  TimelineModule,
  ColorPickerModule,
  TreeTableModule,
  PanelMenuModule,
  OrganizationChartModule,
  SliderModule,
  SkeletonModule,
  ChipModule
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...modules
  ],
  declarations: [

  ],
  exports: [
    ...modules
  ]
})
export class PrimeNGModule { }