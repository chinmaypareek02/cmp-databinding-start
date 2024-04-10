import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent {
  @Output() serverAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  newServerName = '';
  newServerContent = '';

  onAddServer(serverData: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: serverData.value, // since serverData is pointing to html element, it will have 'value'
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverData: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: serverData.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
