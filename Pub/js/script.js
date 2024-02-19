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
	},
	'd': {
		name: 'My Dream',
		color: '#5bcaff'
	},
	'f': {
		name: 'Father',
		color: '#00ff00'
	},
	'm': {
		name: 'Mother',
		color: '#800080'
	},
	'me': {
		name: 'Me',
		color: '#FFFF00'
	},
	't': {
		name: 'Text',
		color: '#8B6914'
	},
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
							name: input,
							gender: 'male',
							he: 'he',
							He: 'He',
							his: 'his',
							His: 'His',
							him: 'him',
							Him: 'Him',
							himself: 'himself',
							Himself: 'Himself',
							feel: 'brave',
							item1: 'candle',
							trickery: 0,
							treatomancy: 0,
							ocloak: 0,
							oribbon: 0,
							credenda:0,
							chocolate:0,
							combat: 0,
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: '',
							gender: 'male',
							he: 'he',
							He: 'He',
							his: 'his',
							His: 'His',
							him: 'him',
							Him: 'Him',
							himself: 'himself',
							Himself: 'Himself',
							feel: 'brave',
							item1: 'candle',
							trickery: 0,
							treatomancy: 0,
							ocloak: 0,
							oribbon: 0,
							credenda:0,
							chocolate:0,
							combat: 0,
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}}. Welcome to the Hallowlands!',
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
		//"play voice v1",
		'y Thats awesome!',
		"show scene Wheat",
		//"play voice v2",
		'y All the children of the forest village Autumna had spent the last day of the summer together, playing hide and seek around the wheat fields before they were to be cut down in the weeks to come.',
		'y The warmth and freedom of a completely open schedule was soon coming to an end.',
		//"play voice v3",
		'y There was a subtle chill on the wind of the coming long frost as the sun began to set.',
		'y Tomorrow would begin a new year of studies, and although the kids were sad to know the summer was about to be over, next week would also begin one of the most exciting events of the year: The Autumnfall Harvest Festival. ',
		//"play voice v4",
		'y With twilight taking over as the stars began to poke through the sunset, the distant call of parents ushered their children back home.',
		'y You waved goodbye to your friends as you jogged back up the road to your familiar front steps, where your mother welcomed you back in for the evening.',
		'y Before long, it was time for bed… and so it was that: {{player.name}} laid down for some peaceful rest. ',
		'y Sitting beside you, and wishing you goodnight was your father, who reminded you of an important local legend: ',
		{
			'Choice': {
				'Dialog': 'f “My sweet ..."',
				'boy': {
					'Text': 'Boy',
				'Do': 'jump male'
				},
				'girl': {
					'Text': 'Girl',
				'Do': 'jump female'
				}
			}
		}
	],
	'female': [
		{'Function':{
            'Apply': () => {
				monogatari.storage ({
                    player: {
                        gender: 'female',
                        he: 'she',
						He: 'She',
						his: 'her',
						His: 'Her',
						him: 'her',
						Him: 'Her',
						himself: 'herself',
						Himself: 'Herself',
                    }
                });
				}}},
				'jump male'
	],
	'male': [
		{'Conditional': {
			'Condition': function () {
				return this.storage ('player').gender == 'female';
			},
			'True': 'f My sweet girl, the time for playful summer mischief has once more come to rest, because tomorrow begins a new harvest season.',
			'False': 'f My sweet boy, the time for playful summer mischief has once more come to rest, because tomorrow begins a new harvest season.'
		}},
		'f  In the many years of this little old town, there have been tales of local children lost during this time to the horrid Hallowlands…',
		'f a place for lost little boys and girls who lost their way home and slowly turned to monsters.', 
		'f So now is the most important time for rest!',
		'f Have a good night sleep and get ready for a whole new year.',
		'y He smiled as he tucked you into bed and blew out the candlelight.',
		{
			'Input': {
				'Text': 'As your father closed the door to your room, you were feeling?',
				'Validation': function (input) {
					//return input.trim ().length > 0;
					input = input.trim();
					input = input.toLowerCase();
					if(input == 'brave' || input == 'clever' || input == 'deceptive' || input == 'kindred'){
						return true;
						}
					else{
						return false;
						}
				},
				'Save': function (input) {
					input = input.trim();
					input = input.toLowerCase();
					this.storage ({
						player: {
							feel: input
						}
					});
					return true;
				},
				'Warning': 'You must enter the feeling correctly!'
			}
		},
		'y And though you could barely contain your excitement, you could also feel the weight of your eyelids growing stronger as sleep was trying to take you away once more.',
		'y In the last moments before entering the dream, you noticed an unfamiliar object sitting upon your shelf.',
		{
			'Input': {
				'Text': 'It is a ...',
				'Validation': function (input) {
					//return input.trim ().length > 0;
					input = input.trim();
					input = input.toLowerCase();
					if(input == 'candle' || input == 'mask' || input == 'wand' || input == 'dagger' || input == 'book' || input == 'crystal' || input == 'mirror' || input == 'jar of sugar' || input == 'satchel of silver buttons' || input == 'walking staff' || input == 'slingshot ' || input == 'pocket watch' || input == 'dreamcatcher'){
						return true;
						}
					else{
						return false;
						}
				},
				'Save': function (input) {
					input = input.trim();
					input = input.toLowerCase();
					this.storage ({
						player: {
							item1: input
						}
					});
					return true;
				},
				'Warning': 'You must enter the item correctly!'
			}
		},
		'y You rubbed your eyes to try and focus on it, but then suddenly it was gone.',
		'y You brush the thought of it aside, and turn over on your pillow, then swiftly drifted off.',
		'y You wake with a rush, and beads of sweat scroll down your face! You look back and forth at your familiar childhood room in Autumna Village as the nightmare fades back to reality.',
		'y The dreamworld still feels so vividly real, but everything you knew so well just moments ago is evaporating with every second that goes by.',
		'y Was it even real?',
		'y You wonder, but soon it will be as if it never happened.',
		'y As your senses calm down and you regain control, the irresistible smell of bacon floods your nostrils as you hear your mother calling from below:',
		'm {{player.name}} your breakfast is nearly ready!',
		'm If you don’t come down here soon you are going to be late for school!',
		'm I don’t want your rushing to your morning classes, so hurry up!',
		'y You jump from the bed, ruffle your hair, and look to the closet.',
		'y Draped from the shelf is your school uniform, freshly pressed, and resting upon the floor is your satchel.',
		'y Everything left where you placed it the day before, your satchel should still include:',
		'y x2 Charcoal Pencils',
		'y x3 Pieces of Paper',
		'y x2 Pieces of Candy',
		'y A “History of Autumna” Textbook for class',
		'y A “Folklore” book from the Autumna Librarium',
		'y Shouting down to your mother, you say:',
		'me I’m almost ready, I just need a few more minutes to get dressed and I will be right down!',
		'y You throw on your uniform as quickly as you can, lace up your shoes, and take a moment to double check that everything is in order before you leave.',
		'y But, before you depart your room, you have one more moment to yourself.',
		'y What do you choose to do with this moment of extra time?',
		'::: Tutorial, Lesson 1 ::: ',
		'y Now it is your turn to choose what happens! In this story, you will have many opportunities to change the outcome of the narrative.',
		'y In these important intersections, you will be prompted with a special menu that allows you to: [Use Inventory], [Investigate], [Combat/Magic], or [Interact].',
		'y When these intersections appear, you must choose wisely, because you will typically only get one ‘turn’ to decide before the story continues.',
		'y This leads to different branches of the Hallowland experience for many players to explore!',
		'y Every decision is final and will continue progressing the tale!',
		{
			'Choice': {
				'Dialog': 'y “Since you just spoke to your mother, why don’t you try: Using Inventory, Investigating, or Interacting with something in your room to see what happens!',
				'inventory': {
					'Text': 'Using Inventory',
				'Do': 'jump inventory1'
				},
				'investigate': {
					'Text': 'Investigate',
				'Do': 'jump investigate1'
				},
				'interact': {
					'Text': 'Interact',
				'Do': 'jump interact1'
				}
			}
		}
	],
	'inventory1': [
		{
			'Choice': {
				'Dialog': 'Using Inventory:',
				'folklore': {
					'Text': 'Folklore Book',
				'Do': 'jump folklore'
				},
				'history': {
					'Text': 'History of Autumna Book',
				'Do': 'jump history1'
				}
			}
		}
	],
	'investigate1': [
		{
			'Choice': {
				'Dialog': 'Investigate: ',
				'closet': {
					'Text': 'Search Closet',
				'Do': 'jump closet'
				},
				'bed': {
					'Text': 'Search Under Bed',
				'Do': 'jump bed1'
				}
			}
		}
	],
	'interact1': [
		{
			'Choice': {
				'Dialog': 'Interact:',
				'workout': {
					'Text': 'Work Out',
				'Do': 'jump workout'
				},
				'downstairs': {
					'Text': 'Go Downstairs Right Away',
				'Do': 'jump godown'
				}
			}
		}
	],
	'folklore': [
	 {'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							trickery: 1
						}
					});
				}
		}
	},
	'y Remembering that you had summer reading to do for the first day of class, you grab the library book from your satchel and flip to the table of contents for a quick browse...', 
	"y You notice the tales are separated into different categories, things like 'Tales Old and New' 'Heroes and Legends' 'Adventures from Beyond the Woods' and 'Tales from the Hallowlands'.",
	"y After hearing hints of the horror from your father the night before, you flip to the pages about ‘Tales from the Hallowlands’ to see if there is something more that you can learn…",
	'y To your surprise, the chapter opens with a rhyme and a short story:',
	'y "Tales From the Hallowlands :: Part 1 :: Sarah Porter"',
	'y Silly Sarah Porter, will tell her tale of woe,',
	'y Trick and Treat without a costume?',
	'y Then to the Hallowlands you will go!',
	'y When Sarah woke up, she thought it was a dream...',
	"y 'How did I get here...? ... What is this place...? ...Where did I come from? How do I go back?'",
	"y The questions came quick and scared... ‘Where am I??'",
	"y Her heart dropped with the weight of a rock into her stomach as the nausea set in...", 
	"y 'Why can't I remember?? ... WHY CAN'T I REMEMBER??'",
	'y Sarah sank into her shoes and began to cry.',
	'y She was scared and alone. No one there to comfort her tears, no one there to ease her fears.',
	'y She cried for what felt like days, and still the world was strange.',
	'y The grass was orange, and the trees were black.',
	'y The clouds were aglow like shadow covered snow and two crescent moons rested on the evening horizon.',
	'y She decided to be brave and begin looking around her surroundings.',
	'y Everywhere Sarah went seemed the same though… an infinite expanse of grass and trees in every direction.',
	'y The anxiety set in some more as she wondered whether anyone would ever look for her, ever find her, and ever help her home.',
	'y She considered staying still and waiting for someone to come, but in her heart, she felt the truth that no one ever would.',
	'y This was the first moment in which she noticed something was in her pocket.',
	'y Reaching in, Sarah discovered a small spool of black thread, a small pair of scissors and a peculiar looking crumpled up note on a piece of canvas.',
	'y On one side it seemed like a painting, but on the other there was some elegant writing which read:',
	't Welcome to the Hallowlands.',
	't This world is made of the wonders, horrors and fears from all children kind, and only one door will go home, which is impossible to find.',
	't So now you will live with my monstrous creatures, with one bit of advice:',
	't hide your human features... because each creature of Hallowland has one form of prey:',
	't the cute little children who try to get away!',
	'<b>(+1 point in: Trickery)</b>',
	'y You now have {{player.trickery}} trickery {{player.name}}.',
	'y A voice came calling from the kitchen again:', 
	'm {{player.name}}!',
	'm I said get down here!',
	'm You are running late and it’s your very first day!',
	'm Come eat already and get on off to class!!',
	'y You place the book back into your bag and sling the satchel strap over your shoulder as you head down the stairs.',
	'jump page3'
	],
	'history1': [
	{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							treatomancy: 1
						}
					});
				}
		}
	},
	'y Remembering that you had summer reading to do for the first day of class, you grab the history book from your satchel and flip to the table of contents for a quick browse...',
	'y Your eye catches a title near the top of the index: Origin of the Autumna Village Curse -- pg. 35.',
	'y Thinking back to the warning from your father the night before, you flip to the thirty-fifth page and discover an old looking illustrated page with the following description:',
	't Far to the north and deeply nestled in the woods lives a long-cursed village by the name of Autumna.',
	't No one knows reason behind the curse, but countless tales and fables have been passed from one generation to the next with the hope that one day the curse will end.',
	't The oldest tales describe the nightmare as a mysterious spirit that haunts Autumna each year during the few weeks of the Harvest Season.',
	't It appears unknown and unseen, claiming an unsuspecting child of the village each year.',
	't Yet, as the tale goes... it has been believed and professed that these lost children will one day return.',
	't This theory began decades ago by an old witch from the town who goes by the name of Anna.',
	"t Though most consider Anna's tales to be too fanciful to be true, they are potentially the only evidence that has ever been accounted of in the favor of Autumna's lost children.",
	"t The witch's account has been documented by scholars of Autumna and preserved in the town Librarium.",
	't These ancient texts have come to be referred to as "The Tales of the Hallowlands".',
	't These fairy tales tell legends of a fictional world that Anna describes in great detail.',
	't She refers to this place as The Hallowlands.',
	"t According to her account, Anna has little memory of how Autumna's curse brought her to Hallowland.",
	't However, upon arrival, Anna explored and survived in Hallowland for what she describes as fifty-three years.',
	"t In this time, Anna hid from all sorts of creatures and monstrosities while trying desperately to locate and protect as many of Autumna's lost children as she could.",
	't She says that she did everything imaginable to protect the children, but time and time again her friends fell to the horrors of Hallowlands cruel spirits.',
	"t After all these experiences, Anna's mental state and will to survive slowly dwindled, but one memory of her old life in Autumna kept her going: her best friend Sarah.",
	"t It is rumored that Anna's passion and love of her friend is not only the one thing that kept her alive and motivated; but is the reason why she was eventually able to escape.",
	't Despite her success in escaping though, she seems to have left behind what she describes as her archival research and memories.',
	't No one can say quite what she meant by that... And her riddles would never be solved, for anna unfortunately died before finishing her accounts of the Hallowlands.',
	"t Though these fairy tales inspired the residents of Autumna, giving the town hope, the town's curse still exists to this day...",
	't Once every couple of years, another child disappears forever.',
	"t Autumna's villagers can still to this day only hope that the horrid curse will leave them and their children in peace... or that some other champion will rise above the haunted realm.",
	'<b>(+1 Point in Treatomancy)</b>',
	'y You now have {{player.treatomancy}} treatomancy {{player.name}}.',
	'y A voice came calling from the kitchen again:',
	'm {{player.name}}!',
	'm I said get down here!',
	'm You are running late and it’s your very first day!',
	'm Come eat already and get on off to class!!',
	'y You place the book back into your bag and sling the satchel strap over your shoulder as you head down the stairs.',
	'jump page3'
	],
	'closet': [
	{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							ocloak: 1,
							oribbon: 1
						}
					});
				}
		}
	},
	'y Remembering that the Autumna Harvest Festival gets started today, {{player.name}} excitedly looked around their room for things that they could use as a part of their costume that evening.',
	'y {{player.He}} had been planning to do something special all season long, but the day had snuck up so {{player.he}} was still a bit under prepared.',
	'y Rummaging around in the closet for a moment, different odds and ends of clothing were getting thrown across the room.',
	'y Just when {{player.name}} was going to give up hope on finding something {{player.he}} really liked, a glint of color caught {{player.his}} eye from the back of the closet.',
	'y Reaching in, {{player.he}} pulled out a beautiful Ocher Cloak with fading colored maple leaves stitched into the trim.',
	'y It was a gift that {{player.his}} mother had giver {{player.him}} years ago, and though {{player.he}} had not seen it recently, the second {{player.his}} eyes met with it once again {{player.he}} remembered that it was a treasured item of {{player.his}} past.',
	'y  A few years back, this was {{player.his}} favorite piece of clothing.',
	'y Pinned to the neck piece of the cloak is a matching ocher ribbon that brings the outfit together.',
	'y Without a moment’s thought, {{player.name}} whipped the cape around {{player.his}} shoulders over {{player.his}} school uniform and satchel, then looked at {{player.himself}} in the mirror.',
	'y When worn correctly, the cloak hid all of {{player.his}} other belongings and gave {{player.name}} the appearance of a menacing silhouette from the woods.',
	'y {{player.He}} was getting excited and tied the ribbon up in their hair to match.',
	'y Then {{player.he}} began looking for more interesting objects from the room... when all of a sudden...',
	'y A voice came calling from the kitchen again:',
	'm {{player.name}}!',
	'm I said get down here!',
	'm You are running late and it’s your very first day!',
	'm Come eat already and get on off to class!!',
	'y You take one more look at yourself in the mirror to make sure the cloak is looking good, and you run down the stairs.',
	'<b>(+1 Ocher Cloak)</b>',
	'<b>(+1 Ocher Ribbon)</b>',
	'y You now have {{player.ocloak}} Ocher Cloak & {{player.oribbon}} Ocher Ribbon {{player.name}}.',
	'jump page3'
	],
	'bed1': [
	{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							credenda: 1,
							chocolate: 1
						}
					});
				}
		}
	},
	'y For a few days now, you feel like you’ve been having the same dreams over and over again.',
	'y Though you were losing sight of it as you woke up, something about looking back toward your bed before leaving the room for school stirred up fragmented memories of it again:',
	'd In flickery and incomplete imagery, you find yourself deep in a foreign land, where mountains surround you on all sides.',
	'd There are several incomplete images: A house high up in a tree...',
	'd a broken pair glasses on the ground... a library full of books...',
	'd a girl lost amongst the scarecrows... windmills amongst the graves...',
	'd ghostly children wielding bouquets of flowers... black cats lined amongst a shelf...',
	'd a green light from the edge of a gazebo... an island of black trees... and a man aimlessly walking with a backpack stuffed full of lanterns...',
	'y There is no sense to be had in all of what you see as you flow from image to image in your mind.',
	'y It is an array of nonsensical images… but each captures your attention and imagination.',
	'y In a moment of inspiration, you suddenly recal that before each night in this mysterious dreamworld, you always see {{player.item1}} sitting on the desk in your room.',
	'y For whatever reason though, you sense that it was not actually on your desk, but rather, under the bed...',
	"y Having this moment of memory and curiosity, you superstitiously lift the sheet from your bed... much to your surprise there is a wooden box that you don't remember putting there until now.",
	'y Puling it out cautiously, you gently open the lid. Inside is the {{player.item1}} that you have seen on the desk for the last several nights before falling asleep... as you see it, your heart skips a beat as your mother calls from downstairs again:',
	'm {{player.name}}!',
	'm I said get down here!',
	'm You are running late and it’s your very first day!',
	'm Come eat already and get on off to class!!',
	'y In a panic you decide to put the {{player.item1}} in your bag, and run out of the room.',
	'y You will think about it more later when you have the time....',
	'<b>(+1 point in Credenda)</b>',
	'<b>(+1 Chocolate Bar)</b>',
	'jump page3'
	],
	'workout' : [
	{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							combat: 1
						}
					});
				}
		}
	},
	'y Realizing once again that today is the first day of school, you remind yourself that it is time to get back into your old routines.',
	'y With your extra minute before heading out to class, you decide to get some fitness in.',
	'y You know that there are soon going to be tryouts for the different harvest sports, and you do not want to fall behind by comparison to your friends when the opportunity comes!',
	'y Pulling the carpet out from under your desk a bit, you get on the floor of your bedroom to do a couple of quick stretches and a small variety of workout exercises like sit-ups and push-ups.',
	'y Within the span of a few minutes, you can feel your body harassing you for being so lax during the summer months, but it feels good to get back into it.',
	'y You start concocting some other ideas for excises you can get done this morning when suddenly:',
	'y A voice came calling from the kitchen again:',
	'm {{player.name}}!',
	'm I said get down here!',
	'm You are running late and it’s your very first day!',
	'm Come eat already and get on off to class!!',
	'y You take one last look at yourself in the mirror while wiping off a bit of sweat before leaving the room, and feel confident that this is going to be a good start to the day...',
	'<b>(+1 Point in Combat)</b>',
	'jump page3'
	],
	'godown': [
	'y Not wanting to upset your mother or be late for the first day of school, you quickly get up and take a moment to tidy before beginning your big day.',
	'y After getting dressed and combing your hair you take one last second to look yourself over in the mirror and make sure that any imperfections are taken care of.',
	'y When you are finally ready, you come downstairs into the main room of your home and make your way over to the kitchen.',
	'y You catch the last moment before your father walks out the front door, and now your mother is the only one there at the moment.',
	"y She invites you to sit with her and eat, then points out how great it has been to enjoy everyone's company during the morning routine.",
	'end'
	],
	'page3': [
	'y After taking the time in your room to do what you need to get ready for the day, you come downstairs into the main room of the house.',
	'y It seems that your father has already left for the day, and your mother is the only one who remains in the kitchen.',
	'y Though she is happy to see you, she has almost finished eating her breakfast by the time that you arrive, and you can tell that there is a bit of disappointment in her glance.',
	'y As she finished her meal, she begins cleaning up her dishes and around the kitchen while you continue to eat.',
	'y Making some small talk, she turns to ask you over her shoulder: ',
	'm I’m sure that you know the Autumna Harvest Festival begins later today… ',
	'm Did you have plans to go with anyone?',
	'y You take a moment to finish your bite and contemplate your answer.',
	'end'
	]
});
