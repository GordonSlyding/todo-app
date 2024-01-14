import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
