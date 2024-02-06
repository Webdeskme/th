/* global monogatari */

/*monogatari.component ('quick-menu').addButton ({
	string: 'Stats',
	icon: 'fas fa-tasks',
	data: {
		action: 'show-stats'
	}
});*/

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Hallowed',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	"Developers": {
		"Programer": "Adam",
		"Artist": "Alex",
		"Scenario Writer": "Alex",
	},
	"Donors": {
		"Top Level Donors": [
			"Tommy", "Scotty", "Lanny", "Robby", "Josie", "Freddy", "Bobby", "Lindsey"
		],
		"Patrons": [
			"Alex", "Shine", "Mika"
		],
	},
	"Special Thanks to": {
		"My parents": ["Mom", "Dad"], 
		"My siblings": ["Brother", "Sister"],
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	"normal": "AutumnaHarvestFestival-Ch.1Music.mp3",
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	"v1": "v1.mp3",
	"v2": "v2.mp3",
	"v3": "v3.mp3",
	"v4": "v4.mp3",
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Forest": "forest.jpg",
	"Wheat": "wheat.jpg",
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Narrator',
		color: '#5bcaff'
	}
});

//monogatari.component ('quick-menu').removeButton ('Hide');

monogatari.script ({
	// The game starts here.
	'Start': [
		//'show scene #f7f6f6 with fadeIn',
		"show scene Forest",
		"play music normal with loop",
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}}. Welcome to the Hallowed!',
		{
			'Choice': {
				'Dialog': 'y Now let our story unfold together.',
				'Yes': {
					'Text': 'I am ready',
					'Do': 'jump init'
				}
			}
		}
	],

	'init': [
		"play voice v1",
		'y Thats awesome!',
		"show scene Wheat",
		"play voice v2",
		'y All the children of the forest village Autumna had spent the last day of the summer together, playing hide and seek around the wheat fields before they were to be cut down in the weeks to come. The warmth and freedom of a completely open schedule was soon coming to an end.',
		"play voice v3",
		'y There was a subtle chill on the wind of the coming long frost as the sun began to set. Tomorrow would begin a new year of studies, and although the kids were sad to know the summer was about to be over, next week would also begin one of the most exciting events of the year: The Autumnfall Harvest Festival.  ',
		"play voice v4",
		'y With twilight taking over as the stars began to poke through the sunset, the distant call of parents ushered their children back home. You waved goodbye to your friends as you jogged back up the road to your familiar front steps, where your mother welcomed you back in for the evening. Before long, it was time for bed… and so it was that: {{player.name}} laid down for some peaceful rest. ',
		'end'
	]
});
