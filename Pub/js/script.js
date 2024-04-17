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
	'man': {
		name: 'Man',
		color: '#8B6914'
	},
	'woman': {
		name: 'Woman',
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
							BlackSilkGloves: 0,
							BlackCloak: 0,
							CurvedStick: 0,
							Rope: 0,
							CalicoMarble: 0,
							CatEars: 0,
							FoxEars: 0,
							PointedNoseMask: 0,
							SerpentTail: 0,
							PetitPumpkin: 0,
							SmallCarvingKnife: 0,
							PumpkoniMarble: 0,
							PumpkinSeeds: 0,
							RawSugarJar: 0,
							CandyRocks: 0,
							BrokenLantern: 0,
							cloakery: 0,
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
							BlackSilkGloves: 0,
							BlackCloak: 0,
							CurvedStick: 0,
							Rope: 0,
							CalicoMarble: 0,
							CatEars: 0,
							FoxEars: 0,
							PointedNoseMask: 0,
							SerpentTail: 0,
							PetitPumpkin: 0,
							SmallCarvingKnife: 0,
							PumpkoniMarble: 0,
							PumpkinSeeds: 0,
							RawSugarJar: 0,
							CandyRocks: 0,
							BrokenLantern: 0,
							cloakery: 0,
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
	{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							treatomancy: 1,
							BlackSilkGloves: 1
						}
					});
				}
		}
	},
	'y Not wanting to upset your mother or be late for the first day of school, you quickly get up and take a moment to tidy before beginning your big day.',
	'y After getting dressed and combing your hair you take one last second to look yourself over in the mirror and make sure that any imperfections are taken care of.',
	'y When you are finally ready, you come downstairs into the main room of your home and make your way over to the kitchen.',
	'y You catch the last moment before your father walks out the front door, and now your mother is the only one there at the moment.',
	"y She invites you to sit with her and eat, then points out how great it has been to enjoy everyone's company during the morning routine.",
	'y Relieved that you came downstairs relatively quickly after being asked, your mother decides to reward you with a little gift.',
	'y She points out the sleek and silk black gloves on the edge of the counter and says:',
	"m You know I was going to wear those to work today with the sudden chill in the air, but why don't you take them with you today instead?",
	"m You're wearing even less than I am and it is starting to get chilly out there!",
	'y You are flattered by the offer from your mother and can hardly wait to put them on.',
	'y In your head you are thinking to yourself what an honor it is to be gifted your mother’s favorite gloves, and you are certain to treasure them.',
	'y Turning back to her after placing them on your hands, you thank her tremendously and come back to the table to finish your breakfast.',
	'<b>(+1 point in Treatomancy)</b>',
	'<b>(+1 pair of Black Silk Gloves)</b>',
	'y You now have {{player.treatomancy}} treatomancy & {{player.BlackSilkGloves}} pair of Black Silk Gloves {{player.name}}.',
	'<b>:: Tutorial Ends ::</b>',
	'y Before you can finish eating and escape from the table for school, your mother starts asking you what your plans are for after class, and if you are expecting to go to the Harvest Festival with friends.',
	{
			'Choice': {
				'Dialog': 'y What do you decide to say?',
				'yes': {
					'Text': 'YES',
				'Do': 'jump page3-1'
				},
				'no': {
					'Text': 'No',
				'Do': 'jump page3-2'
				},
				'ask': {
					'Text': 'Ask Permission',
				'Do': 'jump page3-3'
				}
			}
		}
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
	{
			'Choice': {
				'Dialog': 'y What do you decide to say?',
				'yes': {
					'Text': 'YES',
				'Do': 'jump page3-1'
				},
				'no': {
					'Text': 'No',
				'Do': 'jump page3-2'
				},
				'ask': {
					'Text': 'Ask Permission',
				'Do': 'jump page3-3'
				}
			}
		}
	],
	'page3-1': [
	'me Yes',
	'y you say to your mother,',
	'me I am meeting up with some friends...',
	'y With a bit of a sigh under her breath, your mother responds:',
	"m Well be sure to stay safe out there, I don't know what I would do if something ever happened to you!",
	'y -- She laughs nervously and grabs her things as she heads out the door for work. ',
	'y From here you gather your own things as well and prepare to leave for school.',
	'y As you have done every day for years, you go down to the end of the road and start following the path along the edge of the woods.',
	'y The familiar smells and look of the Harvest Season flood your mind with nostalgia as the cool wind whisks through your hair.',
	"y Approaching closer to the center of the town, you notice people of the village putting together the tents and stands for this evening's celebration.",
	'y You see the fine lanterns, the pumpkin gardeners carving away, and all the costume designers setting up shop with their clothes and masks.',
	'y Despite knowing that you should go to school without distraction, you struggle with the desire to explore the fairgrounds and the harvest season delights of the ancient town...',
	'y The choice is up to you...',
	{
			'Choice': {
				'Dialog': 'y so what do you decide to do?',
				'town': {
					'Text': 'Go to Town',
				'Do': 'jump page4'
				},
				'class': {
					'Text': 'Continue to Class',
				'Do': 'jump page5'
				}
			}
		}
	],
	'page3-2': [
	'me No',
	'y you say to your mother,',
	'me I dont know anyone who wants to go yet, but I would like to go...',
	'y With a subtle grin appearing upon her face, your mother replies:',
	'm Well hurry home from school today, because when you get home we should stop by as a family to check it out!',
	'y  -- She grabs her things and leaves for work.',
	'm Love you, see you later Sweetie!',
	'y From here you gather your own things as well and prepare to leave for school.',
	'y As you have done every day for years, you go down to the end of the road and start following the path along the edge of the woods.',
	'y The familiar smells and look of the Harvest Season flood your mind with nostalgia as the cool wind whisks through your hair.',
	"y Approaching closer to the center of the town, you notice people of the village putting together the tents and stands for this evening's celebration.",
	'y You see the fine lanterns, the pumpkin gardeners carving away, and all the costume designers setting up shop with their clothes and masks.',
	'y Despite knowing that you should go to school without distraction, you struggle with the desire to explore the fairgrounds and the harvest season delights of the ancient town...',
	'y The choice is up to you...',
	{
			'Choice': {
				'Dialog': 'so what do you decide to do?',
				'town': {
					'Text': 'Go to Town',
				'Do': 'jump page4'
				},
				'class': {
					'Text': 'Continue to Class',
				'Do': 'jump page5'
				}
			}
		}
	],
	'page3-3': [
	'me Would it be ok if I went to the festival with some friends mom? I have never gotten to go by myself before...',
	'y A bit taken back by your response here, your mother stops to think for a moment before giving her response:',
	'm I am just sad that you’re getting so grown up now...',
	'm oh how the time flies by.',
	'm Just yesterday we were holding hands and walking the fairgrounds together.',
	"m I can't believe those times have already passed so quickly.",
	"m Just be sure to stay safe out there, I don't know what I would do if something happened!",
	'y -- She grabs her things as she heads out the door for work as well, but decides to hand you one last treat on her way out...',
	'm I Love You Darling, see you after the festival tonight!',
	{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							chocolate: 1
						}
					});
				}
		}
	},
	'y From here you gather your own things as well and prepare to leave for school.',
	'y As you have done every day for years, you go down to the end of the road and start following the path along the edge of the woods.',
	'y The familiar smells and look of the Harvest Season flood your mind with nostalgia as the cool wind whisks through your hair.',
	"y Approaching closer to the center of the town, you notice people of the village putting together the tents and stands for this evening's celebration.",
	'y You see the fine lanterns, the pumpkin gardeners carving away, and all the costume designers setting up shop with their clothes and masks.',
	'y Despite knowing that you should go to school without distraction, you struggle with the desire to explore the fairgrounds and the harvest season delights of the ancient town...',
	'The choice is up to you...',
	{
			'Choice': {
				'Dialog': 'so what do you decide to do?',
				'town': {
					'Text': 'Go to Town',
				'Do': 'jump page4'
				},
				'class': {
					'Text': 'Continue to Class',
				'Do': 'jump page5'
				}
			}
		}
	],
	'page4': [
		'y Completely failing to resist temptation, you put school on hold for a moment to go and investigate the fairgrounds.',
		'y There are a variety of different tents and booths being set up across the main sections of town.',
		'y The edge of town closest to your house is where the Market District starts, and the fairgrounds stretch all along the main gardens of town until the lawn of the Town Librarium.',
		'y Between these two major buildings there are currently five Harvest Festival shops nearly ready for business, whose signs read:',
		't "Cloak and Dagger :: Costumes from all the Lands"',
		't "Costume and Kimera :: Masks and Accessories"',
		't "Jack of all Pumpkins :: Carvers from Every Patch"',
		't "Trick or Treat Sweets :: Candies from Round the World!"',
		't "A Lantern for your Thoughts? :: Bring Light to Life"',
		"y Knowing that you really shouldn't waste too much time, you decide to visit only one of the shops for now and scurry back towards class.",
		'y This way you can hopefully avoid confrontation for being late.',
		{
			'Choice': {
				'Dialog': 'But with so many good options, which of the shops do you choose?',
				'cloak': {
					'Text': 'Cloak & Dagger',
				'Do': 'jump page4-1'
				},
				'costume': {
					'Text': 'Costume & Kimera',
				'Do': 'jump page4-2'
				},
				'jack': {
					'Text': 'Jack of all Pumpkins',
				'Do': 'jump page4-3'
				},
				'trick': {
					'Text': 'Trick or Treat Sweets',
				'Do': 'jump page4-4'
				},
				'lantern': {
					'Text': 'A Lantern for your thoughts?',
				'Do': 'jump page4-5'
				}
			}
		}
	],
	'page4-1': [
		'y You nervously walk up to the tent titled: "Cloak and Dagger" and see the man who appears to be in charge of the business.',
		'y He walks over, gives you the eye for a moment and then says:',
		"man Aren't ye a little young to be walkin' the fairgrounds by yerself? Aren't ye supposed to be in school?",
		"y Feeling bold you look him in the eyes and tell him that you are on your way to school, but that you simply couldn't resist looking at the shops on your way to class.",
		'y You explain that you wanted to be the first of your friends who got something cool from the shops this year.',
		'y The old shopkeep laughs and says:',
		"t Well i'm not quite set up for shop yet mefriend! but why don't you take a peek at these trinkets here and pick somethin' nice out for yerself?",
		't Then make sure to brag about it so that all yer’ friends come to see me again.',
		'y he says with a wink.',
		{
			'Choice': {
				'Dialog': 'Choose One',
				'cloak': {
					'Text': 'Black Cloak',
				'Do': 'jump cloak4-1'
				},
				'costume': {
					'Text': 'Curved Stick',
				'Do': 'jump stick4-1'
				},
				'jack': {
					'Text': 'Rope',
				'Do': 'jump rope4-1'
				},
				'trick': {
					'Text': 'Calico Marble',
				'Do': 'jump marble4-1'
				}
			}
		}
	],
	"cloak4-1": [
		'y +1 Black Cloak',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							BlackCloak: 1
						}
					});
				}
		}
	},
	'jump page4-1b'
	],
	"stick4-1": [
		'y +1 Black Cloak',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							CurvedStick: 1
						}
					});
				}
		}
	},
	'jump page4-1b'
	],
	"rope4-1": [
		'y +1 Black Cloak',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							Rope: 1
						}
					});
				}
		}
	},
	'jump page4-1b'
	],
	"marble4-1": [
		'y +1 Black Cloak',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							CalicoMarble: 1
						}
					});
				}
		}
	},
	'jump page4-1b'
	],
	"page4-1b": [
		'y After selecting your special treat, your heart races with excitement as you remember how late you are for class.',
		'y You thank the kind shop keeper again and run back to the path you were originally on.',
		'jump page6'
	],
	'page4-2': [
		'y You nervously walk up to the tent titled: "Costume and Kimera" and see the woman who seems to be in charge of the business.',
		'y She walks over, gives you the eye for a moment and then says:',
		'woman Well, whats a little scholar like you doing so far from the classroom right now?',
		"y Feeling bold you look her in the eyes and tell her that you are on your way to school, but that you simply couldn't resist looking at the shops on your way to class.",
		'y You explain that you wanted to be the first of your friends who got something cool from the shops this year.',
		'y The old witch laughs and says:',
		"woman Well i'm not quite set up for shop yet my friend! but why don't you take a peek at these trinkets here and pick somethin' nice out for yerself?",
		'woman Don’t go tellin’ anyone that I gave it to ye for free though.',
		'y She says with a crooked smile.',
		{
			'Choice': {
				'Dialog': 'Choose One',
				'cat': {
					'Text': 'Cat Ears',
				'Do': 'jump cat4-2'
				},
				'fox': {
					'Text': 'Fox Ears',
				'Do': 'jump fox4-2'
				},
				'mask': {
					'Text': 'Pointed Nose Mask',
				'Do': 'jump mask4-2'
				},
				'surpent': {
					'Text': 'Serpent Tail',
				'Do': 'jump serpent4-2'
				}
			}
		}
	],
	"cat4-2": [
		'y +1 Cat Ears',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							CatEars: 1
						}
					});
				}
		}
	},
	'jump page4-2b'
	],
	"fox4-2": [
		'y +1 Fox Ears',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							FoxEars: 1
						}
					});
				}
		}
	},
	'jump page4-2b'
	],
	"mask4-2": [
		'y +1 Pointed Nose Mask',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							PointedNoseMask: 1
						}
					});
				}
		}
	},
	'jump page4-2b'
	],
	"serpent4-2": [
		'y +1 Serpent Tail',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							SerpentTail: 1
						}
					});
				}
		}
	},
	'jump page4-2b'
	],
	"page4-2b": [
		'y After selecting your special treat, your heart races with excitement as you remember how late you are for class.',
		'y You thank the kind shopkeeper again and run back to the path you were originally on.',
		'jump page6'
	],
	'page4-3': [
		'y You nervously walk up to the tent titled: "Jack of all Pumpkins" and see the man who seems to overseeing the business carving an exquisite picture onto a pumpkin.',
		'y He walks over, gives you the eye for a moment and then says:',
		'man Well, what brings a child like you across my path right now?',
		"man It's a little early in the day to be excited about pumpkins, they are much more amazing in the dark!",
		"y Feeling bold you look him in the eyes and tell him that you are on your way to school, but that you simply couldn't resist looking at the shops on your way to class.",
		'y You explain that you wanted to be the first of your friends who got something from the shops this year.',
		'y The old man laughs and says:',
		"man Well i'm not quite set up for shop yet my friend! But if you don't tell anyone, I will let you have one of the things in this basket here:",
		{
			'Choice': {
				'Dialog': 'Choose One',
				'petit': {
					'Text': 'Petit Pumpkin',
				'Do': 'jump petit4-3'
				},
				'knife': {
					'Text': 'Small Carving Knife',
				'Do': 'jump knife4-3'
				},
				'marble': {
					'Text': 'Pumpkoni Marble',
				'Do': 'jump marble4-3'
				},
				'seeds': {
					'Text': 'Pumpkin Seeds',
				'Do': 'jump seeds4-3'
				}
			}
		}
	],
	"petit4-3": [
		'y +1 Petit Pumpkin',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							PetitPumpkin: 1
						}
					});
				}
		}
	},
	'jump page4-3b'
	],
	"knife4-3": [
		'y +1 Small Carving Knife',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							SmallCarvingKnife: 1
						}
					});
				}
		}
	},
	'jump page4-3b'
	],
	"marble4-3": [
		'y +1 Pumpkoni Marble',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							PumpkoniMarble: 1
						}
					});
				}
		}
	},
	'jump page4-3b'
	],
	"seeds4-3": [
		'y +1 Pumpkin Seeds',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							PumpkinSeeds: 1
						}
					});
				}
		}
	},
	'jump page4-3b'
	],
	"page4-3b": [
		'y After selecting your special treat, your heart races with excitement as you remember how late you are for class.',
		'y You thank the kind shopkeeper again and run back to the path you were originally on.',
		'jump page6'
	],
	'page4-4': [
		'y You nervously walk up to the tent titled: "Trick or Treat Sweets?" and see the old witch who seems to be in charge of the business.',
		'y She walks over, gives you the eye for a moment and then says:',
		"woman Well well well, if we haven't got yet another student skipping class for sweats eh?",
		"y Feeling bold you look her in the eyes and tell her that you are on your way to school, but that you simply couldn't resist looking at the shops on your way to class.",
		'y You explain that you wanted to be the first of your friends who got something cool from the shops this year.',
		'y The old witch cackles and says:',
		"woman Well I'm certain of one thing, even though I don't typically like children, I like your gumption kid...",
		"woman I wouldn't normally reward your behavior, but I am in a special mood today, so why don't you pick out a little treat for now and be sure to tell all your little friends!",
		"woman Just be ready for their jealousy!",
		'y She winks and offers you a basket with:',
		{
			'Choice': {
				'Dialog': 'Choose One',
				'Chocolate': {
					'Text': 'Chocolate',
				'Do': 'jump Chocolate4-4'
				},
				'sugar': {
					'Text': 'Raw Sugar Jar',
				'Do': 'jump sugar4-4'
				},
				'candy': {
					'Text': 'Bag of Candy Rocks',
				'Do': 'jump candy4-4'
				},
				'seeds': {
					'Text': 'Pumpkin Seeds ',
				'Do': 'jump seeds4-4'
				}
			}
		}
	],
	"Chocolate4-4": [
		'y +1 Chocolate',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							chocolate: 1
						}
					});
				}
		}
	},
	'jump page4-4b'
	],
	"sugar4-4": [
		'y +1 Raw Sugar Jar',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							RawSugarJar: 1
						}
					});
				}
		}
	},
	'jump page4-4b'
	],
	"candy4-4": [
		'y +1 Bag of Candy Rocks',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							CandyRocks: 1
						}
					});
				}
		}
	},
	'jump page4-4b'
	],
	"seeds4-4": [
		'y +1 Pumpkin Seeds',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							PumpkinSeeds: 1
						}
					});
				}
		}
	},
	'jump page4-4b'
	],
	"page4-4b": [
		'y After receiving your special treat, your heart races with excitement as you remember how late you are for class.',
		'y You thank the kind shopkeep again and run back to the path you were originally on.',
		'jump page6'
	],
	"page4-5": [
		'y You nervously walk up to the tent titled: _"A Lantern for your Thoughts?"_ and see the old man who seems to be in charge of the business hanging a variety of lanterns around his shop.',
		'y He walks over, gives you the eye for a moment and then says:',
		'man Well, what brings a child like you across my path right now?',
		"man It's a little early in the day to be excited about lanterns, they are much more amazing in the dark!",
		"y Feeling bold you look him in the eyes and tell him that you are on your way to school, but that you simply couldn't resist taking a look at the shops on your way to class.",
		'y You explain that you wanted to be the first of your friends who got something from the shops this year.',
		'y The old man laughs and says:',
		"man Well I'm not quite set up for shop yet my friend! But if you don't tell anyone, I will teach you a valuable secret:",
		"man There are a variety of lanterns in the world my friend, and they always have a story of their own to tell.",
		"man Every lantern has a piece of it's maker in it, and every maker has a style to their lantern.",
		"man Sometimes the lantern is a signal of welcome: inviting people to your presence in the dark.",
		"man Sometimes, it is a sign of warning alerting friends of predators. In other ways a lantern can be a signal of safety, a guiding light to a better place.",
		"man But no matter where or why a lantern may be, it is always there for a reason.",
		"man Remember this and the lights will always guide your path.",
		"y The lantern crafter smiles at your curious enthusiasm for his story, and he looks around the shop for a moment.",
		"y Grabbing something, he looks back at you and says:",
		"man This lantern is unfortunately broken for now but could be repaired with a little bit of love.",
		"man Why don't you take this and see if you can fix it up, bringing your own lantern to life?",
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							BrokenLantern: 1,
							trickery: 1
						}
					});
				}
			}
		},
		'<b>(+1 Broken Lantern)</b>',
		'<b>(+1 Point in Trickery)</b>',
		'y After receiving your special treat, your heart races with excitement as you remember how late you are for class.',
		'y You thank the kind shopkeep again and run back to the path you were originally on.',
		'jump page6'
	],
	"page5": [
		'y Deciding not to fall to temptation you turn away from the fairgrounds and continue along the path towards the school.',
		'<b>(+1 Point in Treatomancy)</b>',
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
		'y Due to the arrangement of the fairgrounds taking over the town, you end up needing to take a path that loops through the woods.',
		"y While the wooded path is slightly creepier and out of the way, it is not a path you haven't taken before.",
		"y You feel a slight bit of concern in your gut from the creepy story that your father shared with you the night before but decide to push forward anyway.",
		"y As you make your way into the fringe of the Autumna Forest, a mysterious looking man with a large pack on his back comes into view.",
		"y He is walking towards the town, presumably to set up shop at the fairgrounds.",
		"y As he is about to walk by, he changes his stance and looks over to you:",
		"man Excuse me young scholar, perchance is the town with the Autumn Festival up ahead?",
		"man I have been traveling for many days and nights and thought I would have found it by now!",
		"y Feeling a bit more charismatic than usual, you make a joke about the mysterious nature of these woods and how no one can ever find their way.",
		"y But then you do tell him that the place he is looking for is in fact just ahead.",
		"y He thanks you for the advice, and offers you a small trinket from amongst his wares for the assistance.",
		"y When he unfolds a cloth, he says that you should have one of the interesting items he will sell later on during the festivities:",
		'jump page6'
	],
	"page6": [
		'y You continue to walk away from the town into the mysterious wooded detour on your way to class still.',
		'y Though you know that it has only been about five minutes since leaving your home, it feels more and more that you have been on the road for longer than that.',
		'y A small bit of panic sets in as you feel the initial essence of being lost, but you try to push it aside.',
		'y Delving further along brings more anxiety with every bend and turn in the path.',
		'y You quickly begin to lose your calm as fear sets in that you have somehow made a mistake...',
		'y you know these woods; you know how easy it can be to get turned around and lost for days...',
		'y they are thick and intimidating woods.',
		'y Before taking even a moment to concoct a better plan, you begin jogging back towards the way you think you came from.',
		'y Dodging tree after tree, hoping desperately for a familiar landmark or path, your run continues.',
		'y Then finally, a sight for sore eyes: you come around one more wooded glen as a cabin becomes visible in the thicket.',
		"y It does not seem familiar to any house you have encountered in the Autumna Forest before, but there are a great number of places you haven't found in Autumna Village before either, so this isn't much of a surprise.",
		'y With the possibility of getting some guidance back out of the forest and into the right direction you begin to consider the most logical path.',
		'y Not quite sure how to best approach the house though, you consider the following courses of action:',
		{
			'Choice': {
				'Dialog': 'Choose One',
				'Search': {
					'Text': 'Search',
				'Do': 'jump Search6'
				},
				'Sneak': {
					'Text': 'Sneak',
				'Do': 'jump Sneak6'
				},
				'Knock': {
					'Text': 'Knock',
				'Do': 'jump Knock6'
				},
				'Ignore': {
					'Text': 'Ignore',
				'Do': 'jump Ignore6'
				}
			}
		}
	],
	"Search6": [
		'y You walk with some caution up to the edge of the house and approach the window.',
		"y Looking it over, it doesn't seem to be all that different from any other house you have encountered before.",
		"y It is the typical Autumna Log Cabin style build common to the forested areas of town.",
		"y You approach a window and give a glance to the inside.",
		"y It seems likely that someone might be home because there is some light visible from the window, so you make your way over to the door, which to your surprise is already ajar…",
		'y With apprehension, you stare in through the open door to the cabin, which suddenly seems emptier and more abandoned than it did from the outside.',
		'y You offer a weak:',
		'me Hello?',
		'y into the foyer, but no one answers.',
		'y Taking another moment to investigate, you try once more:',
		'me Hellllooo?',
		'y but your attempt once again falls on absent ears.',
		'y Considering your options, you realize that it is the cabin or the woods...',
		'y so you step foot into the cabin, still hopeful that there may be something to help you in here.',
		'y Upon entering, you begin noticing some warmer details of the interior: there are all sorts of interesting paintings lining the walls, a floor sized carpet with antiquated designs, a nice hardwood table, and a small wooden desk.',
		'y The desk captures your attention because it is the only place in the room with stuff scattered on top of it.',
		'y Looking amongst the items on the desk, you see some trinkets, basic jewelry, a few coins, and an ornate hand-carved personal hand mirror.',
		'y For whatever reason, your entire being cannot avoid picking up this mirror, and looking deep into its mysterious glass.',
		'y As anyone would, you inspect your own face, studying all your flaws when suddenly you watch in horror as your face turns into that of a cat’s face.',
		'y You drop the mirror onto the desk and start feeling your face...',
		'y but much to your surprise it still feels like skin, and all the fur you just watched grow seems to be gone... ',
		'<b>(+1 Point in Credenda)</b>',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							credenda: 1
						}
					});
				}
			}
		},
		'y With the panic subsiding a bit, you nervously pick up the mirror hoping for happier news than what you just witnessed.',
		'y Unfortunately, it seems upon further inspection that the mirror was badly cracked upon hitting the table.',
		"y In this moment you remember that you are in someone's house still, and what more, you have broken their things...",
		'y guilt overcoming you, you decide that it is time to leave. '
	],
	"Sneak6": [
		'y You walk with some caution up to the edge of the house and approach the window.',
		"y Looking it over, it doesn't seem to be all that different from any other house you have encountered before.",
		'y It is the typical Autumna Log Cabin style build common to the forested areas of town.',
		'y So you sneakily approach one of the windows, making sure to not let yourself be visible before leaning up to peek inside.',
		'y It seems that there is the shape of a person walking around on the inside, placing something on a table near the fireplace.',
		'y Excited to see life on the inside you make your way over to the door, which is mysteriously already ajar...',
		'<b>(+1 Point in Cloakery)</b>',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							cloakery: 1
						}
					});
				}
			}
		},
		'y With apprehension you stare in through the open door to the cabin, which suddenly seems emptier and more abandoned than it did from the outside.',
		'y You offer a weak:',
		'me Hello?',
		'y into the foyer, but no one answers. Taking another moment to investigate, you try once more:',
		'me Hellllooo?',
		'y but your attempt once again falls on absent ears.',
		"y Considering your options, you realize that it is the cabin or the woods...",
		'y so you step foot into the cabin, still hopeful that there may be something to help you in here.',
		'y Upon entering, you begin noticing some warmer details of the interior:',
		'y there are all sorts of interesting paintings lining the walls, a floor sized carpet with antiquated designs, a nice hardwood table, and a small wooden desk.',
		'y The desk captures your attention because it is the only place in the room with stuff scattered on top of it.',
		'y Looking amongst the items on the desk, you see some trinkets, basic jewelry, a few coins, and an ornate hand-carved personal hand mirror.',
		'y For whatever reason, your entire being cannot avoid picking up this mirror, and looking deep into its mysterious glass.',
		'y  As anyone would, you inspect your own face, studying all your flaws when suddenly you watch in horror as your face turns into that of a cat’s face.',
		'y You drop the mirror onto the desk and start feeling your face...',
		'y but much to your surprise it still feels like skin, and all the fur you just watched grow seems to be gone...',
		'<b>(+1 Point in Credenda)</b>',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							credenda: 1
						}
					});
				}
			}
		},
		'y With the panic subsiding a bit, you nervously pick up the mirror hoping for happier news than what you just witnessed.',
		'y Unfortunately, it seems upon further inspection that the mirror was badly cracked upon hitting the table.',
		"y In this moment you remember that you are in someone's house still, and what more, you have broken their things...",
		'y guilt overcoming you, you decide that it is time to leave.',
	],
	"Knock6": [
		'y You walk with some caution up to the edge of the house and approach the front door.',
		'y As you do so, you glance up toward the sky and feel like it has become much later in the day than seems right for having only recently left for school.',
		'y It suddenly feels like sunset is much closer than it should be, and you wonder what is going on with this strange day.',
		"y Looking over the cabin again, it doesn't seem to be all that different from any other house you have encountered before, yet for some reason you've never come across this particular house...",
		"y So, you give a stereotypical 'Knock' 'Knock' 'Knock' to see if someone will greet you.",
		'y On the third knock no one answers, but the door creaks open with that hair raising creaking sound of wood against wood.',
		'y While it seems as if it might be wrong to enter, you don’t know where else to go, so you try to be brave and find someone to help.',
		'y With apprehension you stare in through the open door to the cabin, which suddenly seems emptier and more abandoned than it did from the outside.',
		'y You offer a weak:',
		'me Hello?',
		'y into the foyer, but no one answers. Taking another moment to investigate, you try once more:',
		'me Hellllooo?',
		'y but your attempt once again falls on absent ears.',
		'y Considering your options, you realize that it is the cabin or the woods...',
		'y so you step foot into the cabin, still hopeful that there may be something to help you in here.',
		'y Upon entering, you begin noticing some warmer details of the interior:',
		'y there are all sorts of interesting paintings lining the walls, a floor sized carpet with antiquated designs, a nice hardwood table, and a small wooden desk.',
		'y The desk captures your attention because it is the only place in the room with stuff scattered on top of it.',
		'y Looking amongst the items on the desk, you see some trinkets, basic jewelry, a few coins, and an ornate hand-carved personal hand mirror.',
		'y For whatever reason, your entire being cannot avoid picking up this mirror, and looking deep into its mysterious glass.',
		'y As anyone would, you inspect your own face, studying all your flaws when suddenly you watch in horror as your face turns into that of a cat’s face.',
		'y You drop the mirror onto the desk and start feeling your face...',
		'y but much to your surprise it still feels like skin, and all the fur you just watched grow seems to be gone...',
		'<b>(+1 Point in Credenda)</b>',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							credenda: 1
						}
					});
				}
			}
		},
		'y With the panic subsiding a bit, you nervously pick up the mirror hoping for happier news than what you just witnessed.',
		'y Unfortunately, it seems upon further inspection that the mirror was badly cracked upon hitting the table.',
		"y In this moment you remember that you are in someone's house still, and what more, you have broken their things...",
		'y guilt overcoming you, you decide that it is time to leave.',
	],
	"Ignore6": [
		"y You decide that it is not polite to be rummaging around in people's business and you attempt to find your way on the wooded path once more...",
		'y After about five minutes of walking around, you feel some reassurance that you have made the right choice in the matter.',
		'me There are only so many paths through these woods',
		'y you think to yourself as you push some more leaves and branches out of the way...',
		"me I can't be lost forever",
		'y ... but then your heart sinks to the bottom of your stomach as you see the exact same cabin appear in the thicket ahead of you once more.',
		'y Horrified at the sight of it, you once again approach and decide to try seeing if someone is home.',
		'y Adding much more to the feeling of horror in your mind, the door is already cracked open...',
		'y With apprehension you stare in through the open door to the cabin, which suddenly seems emptier and more abandoned than it did from the outside.',
		'y You offer a weak:',
		'me Hello?',
		'y into the foyer, but no one answers.',
		'y Taking another moment to investigate, you try once more:',
		'me Hellllooo?',
		'y but your attempt once again falls on absent ears.',
		'y Considering your options, you realize that it is the cabin or the woods...',
		'y so you step foot into the cabin, still hopeful that there may be something to help you in here.',
		'y Upon entering, you begin noticing some warmer details of the interior:',
		'y there are all sorts of interesting paintings lining the walls, a floor sized carpet with antiquated designs, a nice hardwood table, and a small wooden desk.',
		'y The desk captures your attention because it is the only place in the room with stuff scattered on top of it.',
		'y Looking amongst the items on the desk, you see some trinkets, basic jewelry, a few coins, and an ornate hand-carved personal hand mirror.',
		'y For whatever reason, your entire being cannot avoid picking up this mirror, and looking deep into its mysterious glass.',
		'y As anyone would, you inspect your own face, studying all your flaws when suddenly you watch in horror as your face turns into that of a cat’s face.',
		'y You drop the mirror onto the desk and start feeling your face...',
		'y but much to your surprise it still feels like skin, and all the fur you just watched grow seems to be gone... ',
		'<b>(+1 Point in Credenda)</b>',
		{'Function':{
            'Apply': () => {
					monogatari.storage ({
						player: {
							credenda: 1
						}
					});
				}
			}
		},
		'y With the panic subsiding a bit, you nervously pick up the mirror hoping for happier news than what you just witnessed.',
		'y Unfortunately, it seems upon further inspection that the mirror was badly cracked upon hitting the table.',
		"y In this moment you remember that you are in someone's house still, and what more, you have broken their things...",
		'y guilt overcoming you, you decide that it is time to leave.',
	]
});
