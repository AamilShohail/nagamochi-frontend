import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-academic-info',
  templateUrl: './academic-info.component.html',
  styleUrl: './academic-info.component.scss',
})
export class AcademicInfoComponent implements OnInit {
  cardImageUrl: string;
  areasOfInterest: string[] = [
    `සාත්තු සේවිකා`,
    `ඉදිකිරිම`,
    `කෘෂිකාර්මික`,
    `ආහාර සැකසුම්`,
  ];
  cardTitle = 'Nagamochi japanese language Academy';
  info1 = `ජපන් ජාතික විදුහල්පතිනියක ගේ උපදේශනය හා අඨීක්ෂණය යටතේ  *Zoom තාක්ෂණය *හරහා 
**Nagamochi Academy **වෙත එකතු  වන ඔබට JLPT N4 සමත් වීමෙන් පසු 
සාත්තු සේවිකා,ඉදිකිරිම් ,කෘෂිකාර්මික හා ආහාර සැකසුම් යන අංශ තුලින්  රැකියා ලබා දීම අපගේ වගකීමයි`;

  info2 = `Zoom තාක්ෂණය ඔස්සේ පාඨමාලාව සඳහා සහභාගි වීමට දුරකථන ඇමතුමක් ලබා දී ඔබේ අවස්ථාව වෙන්කර ගැනීමට කාරුණික වන්න`;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.cardImageUrl = this.sanitizer.sanitize(
      SecurityContext.RESOURCE_URL,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/info/1.jpeg`)
    );
  }
}
