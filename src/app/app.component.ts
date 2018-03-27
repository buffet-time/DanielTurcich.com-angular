import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent
{
	navigateToGithub() 
	{
		window.open("https://github.com/buffet-time");
	}
	
	navigateToLinkedin() 
	{
		window.open("https://www.linkedin.com/in/danielturcich/");
	}
	
	navigateToSoundcloud() 
	{
		window.open("https://soundcloud.com/buffet_time");
	}

	nagivateToResume()
	{
		window.open("https://drive.google.com/file/d/1QS_WwXNiwyzgGGRRsq7AeG9OlY0OY_2s/view?usp=sharing");
	}

	navigateToBandcamp()
	{
		window.open("https://buffet-time.bandcamp.com/");
	}

	navigateToGooglePlay()
	{
		window.open("https://play.google.com/store/music/artist/Buffet_Time?id=A5gl7kvih2r3mxniaby7mddfwgq");
	}

	copyEmail()
	{
		var copyTextareaBtn = document.querySelector('.copy-email-button');
		
		copyTextareaBtn.addEventListener('click', function(event) 
		{
			var copyTextarea = document.querySelector('.email-input-field') as HTMLInputElement;
			copyTextarea.select();
			document.execCommand('copy');
		});
	}
}