//=============================================================================
// tawin
// NE_KeyboardWindow.js    VERSION 1.0.0
//=============================================================================

var Imported = Imported || {};
Imported.NE_KeyboardWindow = true;

var Nebula = Nebula || {};
Nebula.KeyboardWindow = Nebula.KeyboardWindow || {};

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc This allows to create a keyboard compatible window 
 * @author Tawin
 * @help
 * HOW TO USE:
 * This plugin is really simple to use. You have only to type in a script box of an event this script call: 
 * 
​ * this.create_key_window(); 
 * 
​ * Using the script call this way, the default configuration will be used.
 *
 * However, It's possible to use different options:
 *
 * var options = {
 * // LETTER SOUND: The cursor sound will be played 
 * // when a key is pressed. -- DEFAULT: true; 
 * 
 * letter_sound: false, 
 * 
 * // VARIABLE: The variable that will store the string typed 
 * // inside the window. -- DEFAULT: 1; 
 * 
 * variable: 10,
 * 
 * // LOWER CASE RESULT: You can choose to lower case the whole
 * // typed string. -- DEFAULT: false; 
 * 
 * lower_case_result: true,
 * 
 * // PLACEHOLDER: The string that is shown inside the window
 * // when nothing is till typed -- DEFAULT: ''; 
 * 
 * placeholder: 'A placeholder string...',
 * 
 * // MAX CHARACTERS: The max number of characters that can
 * // be typed -- DEFAULT: 24; 
 * 
 * max_characters: 32,
 * 
 * // POSITION: You can set the [x, y] position manually;
 * // DEFAULT: centered; 
 * 
 * position: [520, 154],
 * 
 * // OPACITY: You can set the opacity of the window
 * // from 0 to 255 -- DEFAULT: 255; 
 * 
 * opacity: 255,
 * 
 * }
 * 
 * this.create_key_window(options);  

 * WARNING! All the properties are CASE SENSITIVE, meaning that they needs to be correctly written.
 *
 * @param Allowed charset
 * @desc Allowed charaset for the window;
 * @type text 
 * @default abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?=()/&%$"!^<>-.,;0123456789+-/*\
 *
 */
 //=============================================================================

 function Window_NEKeyboard() {
 	this.initialize.apply(this, arguments);
 };

(function($) {

	let Parameters = PluginManager.parameters('NE_KeyboardWindow');
	const _allowed_charset = String(Parameters['Allowed charset']).trim() + ' ';

	//###############################################################################
	//
	// GAME INTERPRETER
	//
	//###############################################################################

	Game_Interpreter = class extends Game_Interpreter {

		create_key_window(options = {}) {
			let key_window = new Window_NEKeyboard(options); 
			SceneManager._scene.addChild(key_window); 
			key_window.open(); 
			let letter_sound = options.letter_sound || true;
			let container_variable = options.variable || 1; 
			let lower_case_result = options.lower_case_result || false; 
			var self = this;
			let keyEvent = (e) => {
				var kk = e.key 
				if([37,38,39,40].contains(e.which)) {return;}
				if([8, 46].contains(e.which)) {
					SoundManager.playCancel();
					key_window._typeText = key_window._typeText.slice(0,-1);
					return key_window.refresh();			
				}
				if(e.which === 13) {
					SoundManager.playOk(); 
					key_window.close(); 
					let result = lower_case_result ? key_window._typeText.toLowerCase() : key_window._typeText;
					$gameVariables.setValue(container_variable, result);
					let wait_close = requestAnimationFrame(function exec() {
						if(key_window.openness > 0) {return requestAnimationFrame(exec);}
						key_window.parent.removeChild(key_window); 
						return cancelAnimationFrame(wait_close); 
					})
					this._isKeyboardOpen = false;
					document.body.removeEventListener('keydown', keyEvent);
					return;
				}
				if(!_allowed_charset.contains(kk)) {return;}
				if(key_window._typeText.length >= key_window._maxChar) {return;}
				if(letter_sound) {SoundManager.playCursor();};
				key_window._typeText += kk;
				return key_window.refresh();
			}
			document.body.addEventListener('keydown', keyEvent);
			this._isKeyboardOpen = true; 
			return this.setWaitMode('keyboard_window');
		}

		updateWaitMode() {
			let waiting = null;
			if(this._waitMode === 'keyboard_window') {waiting = this._isKeyboardOpen;}
			if(waiting) {return true;} 
			else if(waiting === false) {
				this._waitMode = '';
				return false;
			}
			return super.updateWaitMode()
		}
	}

	//###############################################################################
	//
	// WINDOW NEBULA KEYBOARD
	//
	//###############################################################################



	Window_NEKeyboard = class extends Window_Base {

		initialize(options) {
			this._typeText = ''; 
			this._placeholder = options.placeholder || ''; 
			this._maxChar = options.max_characters || 24; 
			let x = null; 
			let y = null;
			if(options.position) {
				x = options.position[0] || null; 
				y = options.position[1] || null; 			
			}
			if(Utils.RPGMAKER_NAME === "MZ") {
				super.initialize(new Rectangle(0,0,1,1))
			}
			else {
				super.initialize(0, 0, 1, 1); 
			}
			this.openness = 0; 
			var dummy_string = ''; 
			this.opacity = options.opacity && !isNaN(options.opacity) ? options.opacity : 255; 
			for(var i = 0; i < this._maxChar; i++) {dummy_string += 'a';}
			this.width = this.textWidth(dummy_string); 
			this.height = this.fittingHeight(1); 
			this.createContents();
			this.x = !!x ? x : Graphics.boxWidth / 2 - this.width / 2; 
			this.y = !!y ? y : Graphics.boxHeight / 2 - this.height / 2; 
			this.refresh();
		}

		refresh() {
			this.contents.clear(); 
			if(this._typeText !== '') {
				this.drawText(this._typeText, 0,0,this.contents.width, 'left'); 
				return; 
			}
			if(this._placeholder === '') {return;}
			this.contents.paintOpacity = 192; 
			this.drawText(this._placeholder, 0,0,this.contents.width, 'left'); 
			this.contents.paintOpacity = 255; 
		}
	}

})(Nebula.KeyboardWindow);


