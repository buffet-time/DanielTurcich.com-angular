import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	navigateToGithub() {
		window.open('https://github.com/buffet-time')
	}

	navigateToLinkedin() {
		window.open('https://www.linkedin.com/in/danielturcich/')
	}

	navigateToSoundcloud() {
		window.open('https://soundcloud.com/buffet_time')
	}

	nagivateToResume() {
		window.open(
			'https://drive.google.com/file/d/1UhcfJUs0U3AAuHyZTZbi6bXxEL_QFZR0/view'
		)
	}

	navigateToBandcamp() {
		window.open('https://buffet-time.bandcamp.com/')
	}

	navigateToGooglePlay() {
		window.open(
			'https://play.google.com/store/music/artist/Buffet_Time?id=A5gl7kvih2r3mxniaby7mddfwgq'
		)
	}
}
