/*:
 * @plugindesc (v.0.8)[BASIC] Multiplayer for RPG Maker
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/alpha-net-z/
 *
 * @help
 *
 * Alpha NET Z plugin is still in development
 *
 * WebPage: https://kdworkshop.net/plugins/alpha-net-z/
 * Documentation: https://github.com/KageDesu/Alpha-NET-Z/wiki
 *
 * Required content:
 *  - file css\anet.css
 *  - file css\anet_chat.css
 *  - folder img\Alpha\*all files*
 *
 *

 * @param ANETZ @text @desc
 * 
 * @param connection:s
 * @text Connection
 * @type struct<LConnectionSettings>
 * @default {"serverIp":"anetzglobal.ru","serverPort":"3034","isHttpsConnection:b":"false"}
 * @desc [PRO] Connection to server configuration
 * 
 * @param isCustomGameId:b
 * @parent connection:s
 * @type boolean
 * @text Use Custom Game ID?
 * @default false
 * @desc You can specify own (unique) GameId for your game. Only players with the games with same gameId can join each other.
 * 
 * @param customGameId
 * @parent isCustomGameId:b
 * @text Custom Game ID
 * @default
 * @desc CAN'T be Empty. Should be UNIQUE for your game. Example: SuperGame1000FromJohnDoe
 * 
 * @param spacer|gamesettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param gameModeSettingsGroup
 * @text Multiplayer Settings
 * 
 * @param onlySameMap:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Wait Map Transfer?
 * @default false
 * @desc When player transferred to the new map he will wait until all players not transfered on same map.
 * 
 * @param singlePlayerAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text New Game Allowed?
 * @default true
 * @desc If false, the menu item "New Game" will not be displayed in title menu
 * 
 * @param isReadyStatusCheck:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Is Check Ready?
 * @default false
 * @desc If true, each player should set Ready status before host can start game room
 * 
 * @param roomFilter:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Rooms Filter?
 * @on ON
 * @off OFF
 * @default false
 * @desc [PRO] If filter is ON, you can see only this (same) game rooms in lobby
 * 
 * @param lobbyChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Lobby Chat
 * @on YES
 * @off NO
 * @default true
 * @desc Show lobby chat? (chat between players on server, in network menu)
 * 
 * @param lobbyChatIsGlobal:b
 * @parent lobbyChat:b
 * @text Is Global?
 * @type boolean
 * @on Global
 * @off Game Only
 * @default false
 * @desc If Global - you can chat with all player on server. Game Only - only with player with EXACT game
 * 
 * @param joinStartedAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Join to Game Allowed?
 * @default false
 * @desc If true, player can join in rooms with already started game
 * 
 * @param joinStartedAndLoadedAllowed:b
 * @parent joinStartedAllowed:b
 * @type boolean
 * @text Join to Loaded Game?
 * @default true
 * @desc If true, player can join in rooms with started and loaded from savefile game
 * 
 * 
 * @param onJoinCE:int
 * @parent joinStartedAllowed:b
 * @text On Player Joined CE
 * @type common_event
 * @default 0
 * @desc That common event will be called when player joined game. CE called ONLY for this player.
 * 
 * @param isJoinRandomOptionExists:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Join Random Room Option
 * @default true
 * @desc Show the Join Random Room option?
 * 
 * @param saveLoadGame:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Save and Load Allowed?
 * @on YES
 * @off NO
 * @default true
 * @desc Can player save and load network game?
 * 
 * @param networkStatusIcons:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Is show network icons?
 * @on YES
 * @off NO
 * @default true
 * @desc Network current state icons above players (menu, event, battle, etc...)
 * 
 * @param isMapEncountersGlobal:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Is Encounters is Global?
 * @on YES, for all
 * @off NO, for player
 * @default false
 * @desc Is Map Encounters are for all players on map?
 * 
 * @param inGameChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text In-Game Chat?
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] In-Game chat on Map Scene? (More chat settings will be in next update...)
 * 
 * @param chatStartMessage
 * @parent inGameChat:b
 * @text Start Message
 * @default \}Welcome to Alpha NET Z, \C[1]'T'\C[6] to chat
 * @desc Message when New Game started. Leave empty if not need any start message.
 * 
 * @param chatOpenCloseKey
 * @parent inGameChat:b
 * @text Chat Key
 * @default t
 * @desc Key to open (close) chat window in game.
 * 
 * @param chatSayKey
 * @parent inGameChat:b
 * @text Say Key
 * @default t
 * @desc Key to open input message scene. Only when chat visible. Can be same with Chat Key.
 * 
 * @param clickOnChatToSay:b
 * @parent inGameChat:b
 * @type boolean
 * @text Is click to Say?
 * @on YES
 * @off NO
 * @default true
 * @desc Click in chat window to open input message scene. Only when chat visible.
 * 
 * @param chatAutoOpen:b
 * @parent inGameChat:b
 * @type boolean
 * @text Is auto open?
 * @on YES
 * @off NO
 * @default false
 * @desc Show (open) chat window if new message is received? (If chat windows is closed)
 * 
 * @param chatMessagesSettings:struct
 * @parent inGameChat:b
 * @text Messages Settings
 * @type struct<str42>
 * @default {"maxlength:i":"32","forbiddenEscapeCodes:str":"V","iconsSize:i":"18","allowEmotions:b":"true"}
 * @desc
 * 
 * @param chatInputSceneVisualSettings:struct
 * @parent inGameChat:b
 * @text Input Text Scene
 * @type struct<str41>
 * @default {"mapChannelButtonPosition:s":"{\"x:e\":\"4\",\"y:e\":\"6\"}","allChannelButtonPosition:s":"{\"x:e\":\"104\",\"y:e\":\"6\"}","inputSceneOkButtonPosition:s":"{\"x:e\":\"356\",\"y:e\":\"284\"}"}
 * @desc Chat message input scene visual settings
 * 
 * @param inGameChatWindowVisualSettings:struct
 * @parent inGameChat:b
 * @text Chat Window
 * @type struct<InGameChatWindowSettings>
 * @default {"size:s":"{\"w:int\":\"312\",\"h:int\":\"192\"}","position:s":"{\"x:e\":\"1\",\"y:e\":\"Graphics.height - 193\"}","notActiveOpacity:i":"140","maxMessages:i":"9","firstChatMessageMargin:s":"{\"x:int\":\"3\",\"y:int\":\"145\"}"}
 * @desc Chat window visual settings
 * 
 * @param inGameChatTextLineSettings:struct
 * @parent inGameChatWindowVisualSettings:struct
 * @text Text Line
 * @type struct<ChatTextLineSettings>
 * @default {"size:s":"{\"w:int\":\"306\",\"h:int\":\"18\"}","backgroundA:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"40\"}","backgroundB:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"70\"}","textLine:s":"{\"visible:bool\":\"true\",\"size:struct\":\"{\\\"w:int\\\":\\\"520\\\",\\\"h:int\\\":\\\"20\\\"}\",\"font:struct\":\"{\\\"face:str\\\":\\\"\\\",\\\"size:int\\\":\\\"14\\\",\\\"italic:bool\\\":\\\"false\\\"}\",\"margins:struct\":\"{\\\"x:int\\\":\\\"4\\\",\\\"y:int\\\":\\\"-3\\\"}\"}","textFormat:str":"\\}\\}\\C[3][ *3","animationSpeedInPx:i":"18","channelAll:str":"ALL","channelMap:str":"MAP"}
 * @desc Chat line (message) visual settings
 * 
 * @param playerMenuSettingsGroup:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text In-Game Player Menu?
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] In-Game player menu? (Right mouse click on another player to open menu)
 * 
 * @param defaultIPLMenuCommands
 * @parent playerMenuSettingsGroup:b
 * @text Default Commands
 * @desc Default menu commands
 * 
 * @param PlayerMenuItem_trade:s
 * @parent defaultIPLMenuCommands
 * @text Trade
 * @type struct<LPlayerMenuOption> 
 * @desc Send trade request for another player
 * @default {"text:str":"Trade","visible:b":"true","switchId:i":"0","minDist:i":"1","value:i":"0"}
 * 
 * @param PlayerMenuItem_status:s
 * @parent defaultIPLMenuCommands
 * @text Status
 * @type struct<LPlayerMenuOption> 
 * @desc Show another player character status screen
 * @default {"text:str":"Status","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param PlayerMenuItem_follow:s
 * @parent defaultIPLMenuCommands
 * @text Follow
 * @type struct<LPlayerMenuOption> 
 * @desc Start following another player character on map
 * @default {"text:str":"Follow","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param userIPLMenuCommands:structA
 * @parent playerMenuSettingsGroup:b
 * @text Custom Commands
 * @type struct<LPlayerMenuOption>[]
 * @desc Your commands for player menu
 * @default []
 * 
 * @param tradeSettingsGroup
 * @parent gameModeSettingsGroup
 * @text Trade Settings
 * @desc [PRO] Trade between players
 * 
 * @param isTradeModalWindowActive:b
 * @parent tradeSettingsGroup
 * @type boolean
 * @text Is need trade confirm window?
 * @on YES
 * @off NO
 * @default true
 * @desc If false - trade will start immedently for paleyr when someone sent trade request for him
 * 
 * @param tradeModalWindow_openSE
 * @parent isTradeModalWindowActive:b
 * @text Confirm window SE
 * @type file
 * @require 1
 * @dir audio/se/
 * @default Bell3
 * @desc SE when trade confirm window is pop up
 * 
 * @param tradeModalWindow_text
 * @parent isTradeModalWindowActive:b
 * @text Trade request text
 * @default Accept \C[1]Trade\C[0] from \C[2]%1\C[0]?
 * @desc Trade confirm window text. %1 - another player name (who requested trade with you).
 * 
 * @param tradeModalWindow_hkYes
 * @parent isTradeModalWindowActive:b
 * @text Hotkey for Yes
 * @default y
 * @desc Hotkey for answer "Yes" (case sensetive)
 * 
 * @param tradeModalWindow_hkNo
 * @parent isTradeModalWindowActive:b
 * @text Hotkey for No
 * @default n
 * @desc Hotkey for answer "No" (case sensetive)
 * 
 * 
 * @param spacer|playerssettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param playersSettingsGroup
 * @text Players Settings
 * 
 * @param actorsForNetwork:intA
 * @parent playersSettingsGroup
 * @type actor[]
 * @text Actors
 * @default ["1","2","3","4"]
 * @desc Available actors for network game players.
 * 
 * @param maxPlayersInRoom:int
 * @text Players per Room
 * @parent playersSettingsGroup
 * @type number
 * @min 2
 * @default 4
 * @desc [PRO] Maximum players in one Room. Should be <= Actors count. Max 2 for BASIC version.
 * 
 * @param isActorSelectionAllowed:b
 * @parent playersSettingsGroup
 * @text Actor selection?
 * @type boolean
 * @default true
 * @desc Can player select actor in lobby?
 * 
 * @param isSinglePlayerStartAllowed:b
 * @parent playersSettingsGroup
 * @text One player start?
 * @type boolean
 * @default true
 * @desc If in room only 1 player (host), he can start game alone?
 * 
 * @param playerActorNameType
 * @parent playersSettingsGroup
 * @text Player Name for Actor
 * @type select
 * @option Not Show
 * @option Instead Name
 * @option Instead Nickname
 * @default Instead Nickname
 * @desc Show network player name instead of his Actor name (or nickname)
 * 
 * @param isUseNameplates:b
 * @parent playersSettingsGroup
 * @text Is show Nameplates?
 * @type boolean
 * @default true
 * @desc Show nameplate with player name above head?
 * 
 * @param isShowActorNameInNameplate:b
 * @parent isUseNameplates:b
 * @text Actor name?
 * @type boolean
 * @on Actor Name
 * @off Player Name
 * @default true
 * @desc Actor or Player name on nameplate
 * 
 * @param isShowMyNameplate:b
 * @parent isUseNameplates:b
 * @text My namaplate?
 * @type boolean
 * @on Show
 * @off No, only for other
 * @default false
 * @desc If TRUE player will see nameplate above own character as well
 * 
 * @param nameplatesDB:structA
 * @parent isUseNameplates:b
 * @text Styles
 * @type struct<NameplateStyle>[]
 * @default ["{\"id:str\":\"default\",\"margins:s\":\"{\\\"x:int\\\":\\\"-27\\\",\\\"y:int\\\":\\\"-20\\\"}\",\"backImage:s\":\"{\\\"visible:b\\\":\\\"false\\\",\\\"image:str\\\":\\\"\\\"}\",\"backImageMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"backRect:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"fillColor:str\\\":\\\"#000000\\\",\\\"fillOpacity:i\\\":\\\"120\\\",\\\"borderColor:str\\\":\\\"#000000\\\",\\\"borderThickness:i\\\":\\\"1\\\",\\\"borderOpacity:i\\\":\\\"255\\\"}\",\"backRectMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"text:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"12\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\"}\"}"]
 * @desc [PRO] Default and custom nameplate styles
 * 
 * @param playerLeaveGameCommonEvent:int
 * @parent playersSettingsGroup
 * @text On Player Disconnect CE
 * @type common_event
 * @default 0
 * @desc That common event will be called when somebody leave (disconnect) game. 0 - nothing
 * 
 * @param globalData:s
 * @text Global Data
 * @type struct<LGlobalData>
 * @default {"globalVariablesIds:intA":"[]","globalSwitchesIds:intA":"[]"}
 * @desc All this data will be automatically synchronized between all players
 * 
 * @param spacer|othersettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param otherSettingsGroup
 * @text Other Settings
 * 
 * @param textInputMaxLength:i
 * @text Input Max Length
 * @parent otherSettingsGroup
 * @type number
 * @min 3
 * @default 12
 * @desc Input field (room or player name) max characters count
 * 
 * @param localeDB:struct
 * @text Localization
 * @parent otherSettingsGroup
 * @type struct<LLocaleDB>
 * @default {"network":"Network","createRoom":"Create Room","joinRoom":"Join Room","joinRandomRoom":"Join Random Room","settings":"Settings","start":"Start","leave":"Leave","joinGame":"Join Game","ready":"Ready","character":"Character","close":"Close","welcome":"Welcome,  *1"}
 * @desc You can translate or change embedded plugin text
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EventStartOptions
 * @text Event Options
 * @desc Event network start options
 * 
 * @arg whoSelector
 * @text Who can start
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @desc Select who can start this event
 * @default All
 * 
 * @arg actorList
 * @text Actors List
 * @type actor[]
 * @default []
 * @desc Actors list for 'Execute For' if you select 'Actor List' or 'Actor List Except'
 * 
 * @arg lockMode
 * @text Lock Event?
 * @type boolean
 * @default false
 * @desc If true - event will be locked while executed. Nobody can't start locked event
 * 
 * @arg sharedMode
 * @text Shared Mode
 * @type select
 * @option No
 * @option Strict
 * @option Optional
 * @desc Shared event - starts for all players simultaneously, synchronized commands execution
 * @default No
 * 
 * 
 * @command EventCommandSelector
 * @text Command Options
 * @desc Next Event Command network start options
 * 
 * @arg whoSelector
 * @text Execute for
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @option Me Except
 * @desc Select for who this event command will be executed
 * @default All
 * 
 * @arg actorList
 * @text Actors List
 * @type actor[]
 * @default []
 * @desc Actors list for 'Execute For' if you select 'Actor List' or 'Actor List Except'
 * 
 * @arg scope
 * @text Scope
 * @type select
 * @option Same map
 * @option All world
 * @default Same map
 * @desc For which players will the virtual command be executed?
 * 
 * @arg executeMode
 * @text Execute Mode
 * @type select
 * @option Auto
 * @option Virtual
 * @option Common Event
 * @default Auto
 * @desc How this command will be exectuted for other players. Read Wiki for more info
 * 
 * @command SharedBattle
 * @text Set Shared Battle
 * @desc Make next Battle Processing command shared between all players
 * 
 * @arg battleId
 * @text ID
 * @default
 * @desc Unique battle ID. Empty - not shared battle (by default)
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 * 
 */
 /*:ru
 * @plugindesc (v.0.8)[BASIC] Мультиплеер для RPG Maker
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/alpha-net-z/
 *
 * @help
 *
 * Alpha NET Z плагин всё ещё находится в активной разработке
 *
 * Сайт: https://kdworkshop.net/plugins/alpha-net-z/
 * Документация: https://github.com/KageDesu/Alpha-NET-Z/wiki
 * (пока только на английском)
 *
 * Необходимые плагину файлы:
 *  - файл css\anet.css
 *  - файл css\anet_chat.css
 *  - папка img\Alpha\*все картинки*
 *
 *


 * @param ANETZ @text @desc
 * 
 * @param connection:s
 * @text Соединение
 * @type struct<LConnectionSettings>
 * @default {"serverIp":"anetzglobal.ru","serverPort":"3034","isHttpsConnection:b":"false"}
 * @desc [PRO] Настройки подключения к серверу
 * 
 * @param isCustomGameId:b
 * @parent connection:s
 * @type boolean
 * @text Свой Game ID ?
 * @default false
 * @desc Использовать свой уникальный ID для игры? Только игроки у которых одинаковый ID игры могут присоединятся друг к другу.
 * 
 * @param customGameId
 * @parent isCustomGameId:b
 * @text Мой ID для игры
 * @default
 * @desc НЕЛЬЗЯ пустой. Должен быть уникальный для Вашей игры. Пример: SuperGame1000FromJohnDoe
 * 
 * @param spacer|gamesettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param gameModeSettingsGroup
 * @text Мультиплеер
 * 
 * @param onlySameMap:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Ждать игроков при смене карты?
 * @default false
 * @desc Когда игрок перемещается на другую карту, он будет ждать пока все остальные не перейдут на данную карту вместе с ним
 * 
 * @param singlePlayerAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Одиночная игра?
 * @default true
 * @desc Если ВЫКЛ., то пункт "Новая игра" (одиночная) не появится в главном меню
 * 
 * @param isReadyStatusCheck:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Проверка готовности?
 * @default false
 * @desc Если ВКЛ., то каждый игрок должен нажать Готов, перед тем как хост сможет запустить игру
 * 
 * @param roomFilter:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Фильтр комнат
 * @on ВКЛ
 * @off ВЫКЛ
 * @default false
 * @desc [PRO] Если фильтр ВКЛ., то игрок будет видеть все комнаты только данной (аналогичной) игры
 * 
 * @param lobbyChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Чат в лобби
 * @on YES
 * @off NO
 * @default true
 * @desc Показывать чат в  лобби? (чат между игроками на сервере, находится в сетевом меню)
 * 
 * @param lobbyChatIsGlobal:b
 * @parent lobbyChat:b
 * @text Режим чата
 * @on Глобальный
 * @off Только игра
 * @default false
 * @desc Если Глобальный - игроки в любой игре с Alpha NET Z могут общаться в чате с другими игроками на данном севрере
 * 
 * @param joinStartedAllowed:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Присоединение к игре
 * @default false
 * @desc Если ВКЛ., игрок сможет подключаться к комнатам с уже запущенной игрой
 * 
 * @param joinStartedAndLoadedAllowed:b
 * @parent joinStartedAllowed:b
 * @type boolean
 * @text Присоединение к загруженной игре
 * @default true
 * @desc Если ВКЛ., игрок сможет подключаться к запущенной игре, которая была загруженная из файла сохранения
 * 
 * 
 * @param onJoinCE:int
 * @parent joinStartedAllowed:b
 * @text Общее событие
 * @type common_event
 * @default 0
 * @desc Общее событие для ТЕКУЩЕГО игрока, когда он присоединился к игре.
 * 
 * @param isJoinRandomOptionExists:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Случайная комната
 * @default true
 * @desc Показывать опцию присоединиться к случайной комнате в сетевом меню?
 * 
 * @param saveLoadGame:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Сохранение и загрузка
 * @on YES
 * @off NO
 * @default true
 * @desc Может ли игрок сохранять и загружать сетевую игру?
 * 
 * @param networkStatusIcons:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Иконки-статусы
 * @on YES
 * @off NO
 * @default true
 * @desc Показывать иконки-статусы над головой другого игрока? (меню, событие, битва, ...)
 * 
 * @param isMapEncountersGlobal:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Нападения на карте общие?
 * @on Да, для всех
 * @off Нет
 * @default false
 * @desc Напандение на карте (Map Encounters) общее для всех игроков на данной карте?
 * 
 * @param inGameChat:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Чат?
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] Включить чат в игре? (Больше настроек чата будет добавлено позже...)
 * 
 * @param chatStartMessage
 * @parent inGameChat:b
 * @text Начальное сообщение
 * @default \}Welcome to Alpha NET Z, \C[1]'T'\C[6] to chat
 * @desc Сообщение приветствие в чате
 * 
 * @param chatOpenCloseKey
 * @parent inGameChat:b
 * @text Открыть чат
 * @default t
 * @desc Кнопка чтобы открыть \ закрыть окно чата в игре
 * 
 * @param chatSayKey
 * @parent inGameChat:b
 * @text Сказать в чат
 * @default t
 * @desc Кнопка чтобы открыть сцену ввода сообщения (только когда чат открыт) Может быть одинаковой с кнопкой открыть чат
 * 
 * @param clickOnChatToSay:b
 * @parent inGameChat:b
 * @type boolean
 * @text Нажать что сказать?
 * @on YES
 * @off NO
 * @default true
 * @desc Можно ли нажать мышкой на оконо чата чтобы открыть сцену ввода? (только когда чат открыт)
 * 
 * @param chatAutoOpen:b
 * @parent inGameChat:b
 * @type boolean
 * @text Авто. показ?
 * @on ДА
 * @off НЕТ
 * @default false
 * @desc Открывать окно чата если пришло новое сообщение? (Если чат был закрыт при этом)
 * 
 * @param chatMessagesSettings:struct
 * @parent inGameChat:b
 * @text Настройки сообщений
 * @type struct<str42>
 * @default {"maxlength:i":"32","forbiddenEscapeCodes:str":"V","iconsSize:i":"18","allowEmotions:b":"true"}
 * @desc
 * 
 * @param chatInputSceneVisualSettings:struct
 * @parent inGameChat:b
 * @text Сцена ввода сообещния
 * @type struct<str41>
 * @default {"mapChannelButtonPosition:s":"{\"x:e\":\"4\",\"y:e\":\"6\"}","allChannelButtonPosition:s":"{\"x:e\":\"104\",\"y:e\":\"6\"}","inputSceneOkButtonPosition:s":"{\"x:e\":\"356\",\"y:e\":\"284\"}"}
 * @desc
 * 
 * @param inGameChatWindowVisualSettings:struct
 * @parent inGameChat:b
 * @text Настройки окна чата
 * @type struct<InGameChatWindowSettings>
 * @default {"size:s":"{\"w:int\":\"312\",\"h:int\":\"192\"}","position:s":"{\"x:e\":\"1\",\"y:e\":\"Graphics.height - 193\"}","notActiveOpacity:i":"140","maxMessages:i":"9","firstChatMessageMargin:s":"{\"x:int\":\"3\",\"y:int\":\"145\"}"}
 * @desc
 * 
 * @param inGameChatTextLineSettings:struct
 * @parent inGameChatWindowVisualSettings:struct
 * @text Сообщение в чате
 * @type struct<ChatTextLineSettings>
 * @default {"size:s":"{\"w:int\":\"306\",\"h:int\":\"18\"}","backgroundA:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"40\"}","backgroundB:s":"{\"color:str\":\"#59a3d9\",\"opacity:i\":\"70\"}","textLine:s":"{\"visible:bool\":\"true\",\"size:struct\":\"{\\\"w:int\\\":\\\"520\\\",\\\"h:int\\\":\\\"20\\\"}\",\"font:struct\":\"{\\\"face:str\\\":\\\"\\\",\\\"size:int\\\":\\\"14\\\",\\\"italic:bool\\\":\\\"false\\\"}\",\"margins:struct\":\"{\\\"x:int\\\":\\\"4\\\",\\\"y:int\\\":\\\"-3\\\"}\"}","textFormat:str":"\\}\\}\\C[3][%1] \\{\\{\\C[2]%2 \\C[0]%3","textFormatForPlayer:str":"\\}\\}\\C[3][%1]\\C[1][ME]\\{\\{ \\C[0]%3","textFormatForSystem:str":"\\}\\}\\C[3][%1]\\{\\{ \\C[6]%3","animationSpeedInPx:i":"18","channelAll:str":"ALL","channelMap:str":"MAP"}
 * @desc Визуальные настройки сообщения в чате
 * 
 * @param playerMenuSettingsGroup:b
 * @parent gameModeSettingsGroup
 * @type boolean
 * @text Меню игрока
 * @on YES
 * @off NO
 * @default true
 * @desc [PRO] Меню игрока будет работать в игре? (Открыть меню - нажать правой кнопкой по другому игроку)
 * 
 * @param defaultIPLMenuCommands
 * @parent playerMenuSettingsGroup:b
 * @text Стандартные пункты меню
 * @desc Default menu commands
 * 
 * @param PlayerMenuItem_trade:s
 * @parent defaultIPLMenuCommands
 * @text Торговать
 * @type struct<LPlayerMenuOption> 
 * @desc Отправить запрос торговли другому игроку
 * @default {"text:str":"Trade","visible:b":"true","switchId:i":"0","minDist:i":"1","value:i":"0"}
 * 
 * @param PlayerMenuItem_status:s
 * @parent defaultIPLMenuCommands
 * @text Статус
 * @type struct<LPlayerMenuOption> 
 * @desc Посмотреть окно статуса другого игрока
 * @default {"text:str":"Status","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param PlayerMenuItem_follow:s
 * @parent defaultIPLMenuCommands
 * @text Следовать
 * @type struct<LPlayerMenuOption> 
 * @desc Начать следовать за другим игроком (только текущая карта)
 * @default {"text:str":"Follow","visible:b":"true","switchId:i":"0","minDist:i":"0","value:i":"0"}
 * 
 * @param userIPLMenuCommands:structA
 * @parent playerMenuSettingsGroup:b
 * @text Пользовательские пункты меню
 * @type struct<LPlayerMenuOption>[]
 * @desc Вы можете добавить в меню свои комманды
 * @default []
 * 
 * @param tradeSettingsGroup
 * @parent gameModeSettingsGroup
 * @text Настройки обмена
 * @desc [PRO] Торговля (обмен) между игроками
 * 
 * @param isTradeModalWindowActive:b
 * @parent tradeSettingsGroup
 * @type boolean
 * @text Потверждение?
 * @on YES
 * @off NO
 * @default true
 * @desc Нужно ли потверждение торговли другим игроком?
 * 
 * @param tradeModalWindow_openSE
 * @parent isTradeModalWindowActive:b
 * @text Звук
 * @type file
 * @require 1
 * @dir audio/se/
 * @default Bell3
 * @desc SE звук когда окно потверждения появляется на экране
 * 
 * @param tradeModalWindow_text
 * @parent isTradeModalWindowActive:b
 * @text Текст
 * @default Accept \C[1]Trade\C[0] from \C[2]%1\C[0]?
 * @desc Текст окна потверждения. %1 - имя другого игрока, который запрашивает обмен с текущим игроком
 * 
 * @param tradeModalWindow_hkYes
 * @parent isTradeModalWindowActive:b
 * @text Кнопка ДА
 * @default y
 * @desc Кнопка на клавиатуре для быстрого ответа Да
 * 
 * @param tradeModalWindow_hkNo
 * @parent isTradeModalWindowActive:b
 * @text Кнопка НЕТ
 * @default n
 * @desc Кнопка на клавиатуре для быстрого ответа Нет
 * 
 * @param spacer|playerssettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param playersSettingsGroup
 * @text Настройки игроков
 * 
 * @param actorsForNetwork:intA
 * @parent playersSettingsGroup
 * @type actor[]
 * @text Персонажи
 * @default ["1","2","3","4"]
 * @desc Персонажи которые будут доступны в сетевой игре
 * 
 * @param maxPlayersInRoom:int
 * @text Кол-во игроков
 * @parent playersSettingsGroup
 * @type number
 * @min 2
 * @default 4
 * @desc [PRO] Макс. кол-во игроков в комнате. 2 - для базовой версии. Число не должно превыщать кол-во персонажей (Персонажи)
 * 
 * @param isActorSelectionAllowed:b
 * @parent playersSettingsGroup
 * @text Выбор персонажа?
 * @type boolean
 * @default true
 * @desc Может ли игрок выбирать персонажа перед началом игры?
 * 
 * @param isSinglePlayerStartAllowed:b
 * @parent playersSettingsGroup
 * @text Один игрок
 * @type boolean
 * @default true
 * @desc Можно ли стартовать сетевую игру если только один игрок в комнате (хост)?
 * 
 * @param playerActorNameType
 * @parent playersSettingsGroup
 * @text Имя игрока
 * @type select
 * @option Not Show
 * @option Instead Name
 * @option Instead Nickname
 * @default Instead Nickname
 * @desc Как будет отображаться имя игрока в игре
 * 
 * 
 * @param isUseNameplates:b
 * @parent playersSettingsGroup
 * @text Имена над игроками?
 * @type boolean
 * @default true
 * @desc Показывать таблички (текст) с именами над сетевыми персонажами?
 * 
 * @param isShowActorNameInNameplate:b
 * @parent isUseNameplates:b
 * @text Какое имя?
 * @type boolean
 * @on Имя персонажа
 * @off Имя игрока
 * @default true
 * @desc Показывать имя персонажа или игрока?
 * 
 * @param isShowMyNameplate:b
 * @parent isUseNameplates:b
 * @text Своё имя
 * @type boolean
 * @on Показывать
 * @off Нет, только других
 * @default false
 * @desc Показывать также имя над своим персонажем? (текущего игрока)
 * 
 * @param nameplatesDB:structA
 * @parent isUseNameplates:b
 * @text Стили
 * @type struct<NameplateStyle>[]
 * @default ["{\"id:str\":\"default\",\"margins:s\":\"{\\\"x:int\\\":\\\"-27\\\",\\\"y:int\\\":\\\"-20\\\"}\",\"backImage:s\":\"{\\\"visible:b\\\":\\\"false\\\",\\\"image:str\\\":\\\"\\\"}\",\"backImageMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"backRect:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"fillColor:str\\\":\\\"#000000\\\",\\\"fillOpacity:i\\\":\\\"120\\\",\\\"borderColor:str\\\":\\\"#000000\\\",\\\"borderThickness:i\\\":\\\"1\\\",\\\"borderOpacity:i\\\":\\\"255\\\"}\",\"backRectMargins:s\":\"{\\\"x:int\\\":\\\"0\\\",\\\"y:int\\\":\\\"0\\\"}\",\"text:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"54\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"18\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"12\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\"}\"}"]
 * @desc [PRO] Настройка различных стилей табличек с именами
 * 
 * @param playerLeaveGameCommonEvent:int
 * @parent playersSettingsGroup
 * @text Покинул игру
 * @type common_event
 * @default 0
 * @desc Общее событие, которое будет вызвано у всех, когда кто-то покидает игру (выходит)
 * 
 * @param globalData:s
 * @text Глобальные данные
 * @type struct<LGlobalData>
 * @default {"globalVariablesIds:intA":"[]","globalSwitchesIds:intA":"[]"}
 * @desc Эти данные будут автоматически синхронизироваться между всеми игроками
 * 
 * @param spacer|othersettings @text‏‏‎ ‎@desc ===============================================
 * 
 * @param otherSettingsGroup
 * @text Другое
 * 
 * @param textInputMaxLength:i
 * @text Макс. длина текста
 * @parent otherSettingsGroup
 * @type number
 * @min 3
 * @default 12
 * @desc Макс. допустимая длина текста для названия комнаты или имени игрока
 * 
 * @param localeDB:struct
 * @text Локализация
 * @parent otherSettingsGroup
 * @type struct<LLocaleDB>
 * @default {"network":"Network","createRoom":"Create Room","joinRoom":"Join Room","joinRandomRoom":"Join Random Room","settings":"Settings","start":"Start","leave":"Leave","joinGame":"Join Game","ready":"Ready","character":"Character","close":"Close","welcome":"Welcome, %1","playersCount":"Players on server: %1"}
 * @desc Изменение и перевод служебного текста плагина
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EventStartOptions
 * @text Правила запуска события
 * @desc Задать правила запуска события
 * 
 * @arg whoSelector
 * @text Кто может запустить?
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @desc Кто может запустить данное событие
 * @default All
 * 
 * @arg actorList
 * @text Персонажи
 * @type actor[]
 * @default []
 * @desc Список персонажей для опции 'Execute For' если вы выбрали 'Actor List' или 'Actor List Except'
 * 
 * @arg lockMode
 * @text Блокировка события?
 * @type boolean
 * @default false
 * @desc Если Да - событие будет заблокировано при запуске. Никто другой не может запустить такое событие.
 * 
 * @arg sharedMode
 * @text Общий режим
 * @type select
 * @option No
 * @option Strict
 * @option Optional
 * @desc Общее событие - запускается для всех игроков на карте сразу, команды будут выполняться синхронизировано одинаково для всех
 * @default No
 * 
 * 
 * @command EventCommandSelector
 * @text Правила запуска команды
 * @desc Задать правила запуска следующей команды события
 * 
 * @arg whoSelector
 * @text Кто может запустить?
 * @type select
 * @option All
 * @option Master
 * @option Master Except
 * @option Actor List
 * @option Actor List Except
 * @option Me Except
 * @desc Кто может запустить следующую команду события
 * @default All
 * 
 * @arg actorList
 * @text Персонажи
 * @type actor[]
 * @default []
 * @desc Список персонажей для опции 'Execute For' если вы выбрали 'Actor List' или 'Actor List Except'
 * 
 * @arg scope
 * @text Область
 * @type select
 * @option Same map
 * @option All world
 * @default Same map
 * @desc Для всех игроков (All world) или только на текущей карте будет выполняться команда?
 * 
 * @arg executeMode
 * @text Режим
 * @type select
 * @option Auto
 * @option Virtual
 * @option Common Event
 * @default Auto
 * @desc Как именно данная команда будет выполнена для других игроков. Читайте документацию.
 * 
 * @command SharedBattle
 * @text Общ. битва
 * @desc Сделать следующую битву общей - другой игрок сможет присоединиться к битве
 * 
 * @arg battleId
 * @text ID
 * @default
 * @desc Уникальный идентификатор битвы. Пусто - битва НЕ будет общей (только локальной)
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 * 
 */
/*~struct~str0:
 * @param w:int
 * @text Width
 * @type number
 * @default 100
 * @min 0
 *
 * @param h:int
 * @text Height
 * @type number
 * @default 100
 * @min 0
*/

/*~struct~str0:ru
 * @param w:int
 * @text Высота
 * @type number
 * @default 100
 * @min 0
 *
 * @param h:int
 * @text Ширина
 * @type number
 * @default 100
 * @min 0
*/

/*~struct~str1:

 * @param face:str
 * @text Face
 * @type string
 * @default
 *
 * @param size:int
 * @text Size
 * @type number
 * @default 24
 * @min 1
 * 
 * @param italic:bool
 * @text IsItalic
 * @type boolean
 * @default false

*/

/*~struct~str1:ru

 * @param face:str
 * @text Название
 * @type string
 * @default
 *
 * @param size:int
 * @text Размер
 * @type number
 * @default 24
 * @min 1
 * 
 * @param italic:bool
 * @text Курсив?
 * @type boolean
 * @default false

*/

/*~struct~str2:

 * @param x:int
 * @text X
 * @type number
 * @default 0
 * @min -1000
 *
 * @param y:int
 * @text Y
 * @type number
 * @default 0
 * @min -1000

*/
/*~struct~str2:ru

 * @param x:int
 * @text X
 * @type number
 * @default 0
 * @min -1000
 *
 * @param y:int
 * @text Y
 * @type number
 * @default 0
 * @min -1000

*/
/*~struct~str3:

 * @param color
 * @text Color
 * @type text
 * @default #000000
 * @desc Outline color in HEX (#000000) or empty "" (black)
 *
 * @param width:int
 * @text Width
 * @type number
 * @default 3
 * @min 0
 * @desc Outline stroke width in px

*/
/*~struct~str3:ru

 * @param color
 * @text Цвет
 * @type text
 * @default #000000
 * @desc Цвет обводки в HEX формате (#000000) или пусто "" (чёрный)
 *
 * @param width:int
 * @text Ширина
 * @type number
 * @default 3
 * @min 0
 * @desc Ширина обводки в пикселях

*/

/*~struct~str4:

 * @param visible:bool
 * @text Is Visible?
 * @type boolean
 * @default true
 * @desc Will be this element visible? 


 * @param size:struct
 * @text Size
 * @type struct<str0>
 * @default
 * @desc Size of element


 * @param alignment:str
 * @text Alignment
 * @type combo
 * @option center
 * @option right
 * @option left
 * @default center
 * @desc Text alignment


 * @param font:struct
 * @type struct<str1>
 * @text Font Settings
 * @default
 * @desc Text font settings


 * @param margins:struct
 * @text Margins
 * @type struct<str2>
 * @default
 * @desc Position of element, relative parent


 * @param outline:struct
 * @text Text Outline
 * @type struct<str3>
 * @default
 * @desc Text outline settings


 * @param textColor:str
 * @type string
 * @text Text Color
 * @default #FFFFFF
 * @desc Text color in HEX format (#000000)

*/

/*~struct~str4:ru

 * @param visible:bool
 * @text Активен?
 * @type boolean
 * @default true
 * @desc Будет ли этот элемент видно в игре?


 * @param size:struct
 * @text Размер
 * @type struct<str0>
 * @default
 * @desc


 * @param alignment:str
 * @text Положение
 * @type combo
 * @option center
 * @option right
 * @option left
 * @default center
 * @desc Положение текста


 * @param font:struct
 * @type struct<str1>
 * @text Шрифт
 * @default
 * @desc Настройки шрифта


 * @param margins:struct
 * @text Отступы
 * @type struct<str2>
 * @default
 * @desc Позиция элемента, относительно элемента родителя


 * @param outline:struct
 * @text Обводка
 * @type struct<str3>
 * @default
 * @desc Настройки обводки текста


 * @param textColor:str
 * @type string
 * @text Цвет
 * @default #FFFFFF
 * @desc Цвет текста в HEX формате (#000000)

*/

/*~struct~str5:

 * @param visible:bool
 * @text Is Visible?
 * @type boolean
 * @default true
 * @desc Will be this element visible? 


 * @param size:struct
 * @text Size
 * @type struct<str0>
 * @default
 * @desc Size of element


 @param fillColor:str
 @text Fill Color
 @type text 
 @desc Color in HEX format (#000000)
 @default #000000 


 @param fillOpacity:i
 @text Fill Opacity
 @type number 
 @min 0
 @max 255
 @desc From 0 to 255, 0 - transparent, 255 - opaque
 @default 220 


 @param borderColor:str
 @text Borders Color
 @type text 
 @desc Color in HEX format (#000000)
 @default #000000 


 @param borderThickness:i
 @text Borders thickness
 @type number 
 @min 0
 @desc Thickness of borders in PX. 0 - no borders
 @default 0 


 @param borderOpacity:i
 @text Borders Opacity
 @type number 
 @min 0
 @max 255
 @desc From 0 to 255, 0 - transparent, 255 - opaque
 @default 255 

*/


/*~struct~str5:ru

 * @param visible:bool
 * @text Активен?
 * @type boolean
 * @default true
 * @desc Будет ли этот элемент видно в игре? 


 * @param size:struct
 * @text Размер
 * @type struct<str0>
 * @default
 * @desc


 @param fillColor:str
 @text Цвет заливки
 @type text 
 @desc Цвет в HEX формате (#000000)
 @default #000000 


 @param fillOpacity:i
 @text Прозрачность
 @type number 
 @min 0
 @max 255
 @desc От 0 (прозрачен) до 255 (виден)
 @default 220 


 @param borderColor:str
 @text Цвет границ
 @type text 
 @desc Цвет в HEX формате (#000000)
 @default #000000 


 @param borderThickness:i
 @text Толщина границ
 @type number 
 @min 0
 @desc Толщина границ в пикселях. 0 - нет границ
 @default 0 


 @param borderOpacity:i
 @text Прозрачность границ
 @type number 
 @min 0
 @max 255
 @desc От 0 (прозрачен) до 255 (виден)
 @default 255 

*/

/*~struct~str9:

 * @param visible:bool
 * @text Is Visible?
 * @type boolean
 * @default true
 * @desc Will be this text visible?


 * @param size:struct
 * @text TextBox Size
 * @type struct<str0>
 * @default
 * @desc Size of the text zone


 * @param font:struct
 * @type struct<str1>
 * @text Font Settings
 * @default
 * @desc Text font settings


 * @param margins:struct
 * @text Margins
 * @type struct<str2>
 * @default
 * @desc Text position relative parent

*/

/*~struct~XY2:

 * @param x:e
 * @text X
 * @default 0
 * @desc Number or script (example: Graphics.width / 2)
 *
 * @param y:e
 * @text Y
 * @default 0
 * @desc Number or script (example: Graphics.width / 2)

*/
/*~struct~XY2:ru

 * @param x:e
 * @text X
 * @default 0
 * @desc Число или скрипт (пример: Graphics.width / 2)
 *
 * @param y:e
 * @text Y
 * @default 0
 * @desc Число или скрипт (пример: Graphics.width / 2)

*/

/*~struct~LConnectionSettings:
    @param serverIp
    @text IP
    @type combo
    @option localhost
    @option anetzglobal.ru
    @desc Server IP address (ip4) or domain name
    @default anetzglobal.ru

    @param serverPort
    @text Port
    @default 3034

    @param isHttpsConnection:b
    @text Is HTTPS (SSL) ?
    @type boolean
    @on Yes, https
    @off No, http
    @default false
    @desc Is use secure connection via https protocol? anetzglobal.ru uses port 3035 for secure connection.
*/

/*~struct~LConnectionSettings:ru
    @param serverIp
    @text IP
    @type combo
    @option localhost
    @option anetzglobal.ru
    @desc Сервер IP адрес (ip4) или имя домена
    @default anetzglobal.ru

    @param serverPort
    @text Порт
    @default 3034

    @param isHttpsConnection:b
    @text Исп. HTTPS (SSL) ?
    @type boolean
    @on Да, https
    @off Нет, http
    @default false
    @desc Использовать защищённое соединение через https протокол? anetzglobal.ru исп. порт 3035 для SSL.
*/

/*~struct~LGlobalData:
    @param globalVariablesIds:intA
    @type variable[]
    @text Variables
    @default []
    @desc Variables for auto synchronizaton

    @param globalSwitchesIds:intA
    @type switch[]
    @text Switches
    @default []
    @desc Switches for auto synchronizaton
*/

/*~struct~LGlobalData:ru
    @param globalVariablesIds:intA
    @type variable[]
    @text Переменные
    @default []
    @desc Список переменных которые будут автоматически синхронизированы между всеми игроками

    @param globalSwitchesIds:intA
    @type switch[]
    @text Переключатели
    @default []
    @desc Список переключателей которые будут автоматически синхронизированы между всеми игроками
*/

/*~struct~LLocaleDB:
    @param network
    @default Network

    @param createRoom
    @default Create Room

    @param joinRoom
    @default Join Room

    @param joinRandomRoom
    @default Join Random Room

    @param settings
    @default Settings

    @param start
    @default Start

    @param leave
    @default Leave

    @param joinGame
    @default Join Game

    @param ready
    @default Ready

    @param character
    @default Character

    @param close
    @default Close

    @param welcome
    @default Welcome, %1
    @desc %1 will be replaced by Player Name

    @param playersCount
    @default Players on server: %1
    @desc %1 will be replaced by players count (number)
*/

/*~struct~LLocaleDB:ru
    @param network
    @default Мультиплеер

    @param createRoom
    @default Создать комнату

    @param joinRoom
    @default Присоединиться

    @param joinRandomRoom
    @default Слуйчайная комната

    @param settings
    @default Настройки

    @param start
    @default Начать

    @param leave
    @default Покинуть

    @param joinGame
    @default Вступить

    @param ready
    @default Готов

    @param character
    @default Персонаж

    @param close
    @default Закрыть

    @param welcome
    @default Привет, %1
    @desc %1 будет заменён на имя игрока

    @param playersCount
    @default Игроков на сервере: %1
    @desc %1 будет заменён на количество игроков (число)
*/

/*~struct~LPlayerMenuOption:
 @param text:str
 @text Title
 @type text 
 @desc Option title. Supports control-characters, like \C[x] for color
 @default Option 

 @param visible:b
 @text Is Visible?
 @type boolean 
 @on Yes
 @off No
 @desc Is this option visible in Player Menu? If false - not appears in menu at all
 @default true 

 @param switchId:i
 @text Switch ID
 @type switch 
 @desc Switch ID for enable this option. 0 - always enabled, no any switch
 @default 0 

 @param minDist:i
 @text Active distance
 @type number 
 @min 0
 @max 100
 @desc Minimum distance between players for enable this option. 0 - any distance, no limit
 @default 0

 @param value:i
 @text Common Event
 @type common_event
 @desc Common event ID for this command
 @default 0
*/

/*~struct~LPlayerMenuOption:ru
 @param text:str
 @text Заголовок
 @type text 
 @desc Заголовок пунтка меню. Поддерживает символы управления как и сообщения, например \C[x] для смены цвета
 @default Моя опция 

 @param visible:b
 @text Видимость
 @type boolean 
 @on Да
 @off Нет
 @desc Эту опцию будет видно в меню игрока? Если НЕТ - вообще не появится в меню
 @default true 

 @param switchId:i
 @text Переключатель
 @type switch 
 @desc Переключатель для активации этой опции. 0 - всегда активна
 @default 0 

 @param minDist:i
 @text Дистанция
 @type number 
 @min 0
 @max 100
 @desc Минимальная дистанция между игроками для активации этой опции. 0 - всегда активна
 @default 0

 @param value:i
 @text Событие
 @type common_event
 @desc Общее событие, которое будет вызвано при выборе этой опции меню
 @default 0
*/

/*~struct~InGameChatWindowSettings:

 @param size:s
 @text Size
 @type struct<str0> 
 @desc Chat Window Size
 @default {} 


 @param position:s
 @text Position
 @type struct<XY2> 
 @desc Default position on screen
 @default {} 


 @param notActiveOpacity:i
 @text Opacity
 @type number 
 @min 0
 @max 255
 @desc Chat window opacity when window not active (not under mouse cursor)
 @default 140 


 @param maxMessages:i
 @text Lines Count
 @type number 
 @min 1
 @desc Max visible messages lines at same time
 @default 9 


 @param firstChatMessageMargin:s
 @text Start Pos
 @type struct<str2> 
 @desc Messages initial position (pos of first chat message) in chat window
 @default {} 

*/

/*~struct~InGameChatWindowSettings:ru

 @param size:s
 @text Размер
 @type struct<str0> 
 @desc Размер окна чата
 @default {} 


 @param position:s
 @text Позиция
 @type struct<XY2> 
 @desc Позиция окна чата на экране (по умолчанию)
 @default {} 


 @param notActiveOpacity:i
 @text Прозрачность
 @type number 
 @min 0
 @max 255
 @desc Прозрачность окна чата, когда оно НЕ активно (курсор мыши вне окна)
 @default 140 


 @param maxMessages:i
 @text Строки
 @type number 
 @min 1
 @desc Макс. количество строк чата (сообщеий) до исчезнования первой
 @default 9 


 @param firstChatMessageMargin:s
 @text Позиция сообщения
 @type struct<str2> 
 @desc Позиция первой строки (сообщения) в чате (остальные будут следовать ниже)
 @default {} 

*/

/*~struct~str39:

 @param color:str
 @text Color
 @type text 
 @desc Color in HEX format (#000000)
 @default #59a3d9 


 @param opacity:i
 @text Opacity
 @type number 
 @min 0
 @max 255
 @desc
 @default 40 

*/

/*~struct~str39:ru

 @param color:str
 @text Цвет
 @type text 
 @desc Цвет в 16 формате (#000000)
 @default #59a3d9 


 @param opacity:i
 @text Прозрачность
 @type number 
 @min 0
 @max 255
 @desc
 @default 40 

*/

/*~struct~ChatTextLineSettings:

 @param size:s
 @text Size
 @type struct<str0> 
 @desc Size per one chat line (one message)
 @default {} 


 @param backgroundA:s
 @text Background A
 @type struct<str39> 
 @desc 
 @default {} 


 @param backgroundB:s
 @text Background B
 @type struct<str39> 
 @desc 
 @default {} 


 @param textLine:s
 @text Text Line
 @type struct<str9> 
 @desc Text line (message text) settings
 @default {} 


 @param textFormat:str
 @text Text Format
 @type text 
 @desc Message format. Where: %1 - Channel, %2 - Actor Name, %3 - Message text, %4 - Player Name
 @default \}\}\C[3][%1] \{\{\C[2]%2 \C[0]%3 


 @param textFormatForPlayer:str
 @text Player TF
 @type text 
 @desc Own message format. Where: %1 - Channel, %2 - Actor Name, %3 - Message text, %4 - Player Name
 @default \}\}\C[3][%1]\C[1][ME]\{\{ \C[0]%3 


 @param textFormatForSystem:str
 @text System TF
 @type text 
 @desc System message format. Where: %1 - Channel, %2 - Actor Name, %3 - Message text, %4 - Player Name
 @default \}\}\C[3][%1]\{\{ \C[6]%3 


 @param animationSpeedInPx:i
 @text Animation Speed
 @type number 
 @min 1
 @desc Message animation slide speed in PX per frame
 @default 18 


 @param channelAll:str
 @text Channel All name
 @type text 
 @desc 
 @default ALL 


 @param channelMap:str
 @text Channel Map name
 @type text 
 @desc 
 @default MAP 

*/

/*~struct~str41:

 @param mapChannelButtonPosition:s
 @text Button MAP
 @type struct<XY2> 
 @desc Position of button for Map channel
 @default {} 


 @param allChannelButtonPosition:s
 @text Button ALL
 @type struct<XY2> 
 @desc Position of button for All channel
 @default {} 


 @param inputSceneOkButtonPosition:s
 @text Button OK
 @type struct<XY2> 
 @desc 
 @default {} 

*/


/*~struct~str42:

 @param maxlength:i
 @text Max Length
 @type number 
 @min 10
 @desc Max chat message text length
 @default 32 


 @param forbiddenEscapeCodes:str
 @text Forbidden CC
 @type text 
 @desc Forbidden control characters (I, V, {, ...) for input. Separated by comma.
 @default V


 @param iconsSize:i
 @text Icon Size
 @type number 
 @min 8
 @desc [MZ only] Default icon size if player use \I control character in message
 @default 18 


 @param allowEmotions:b
 @text Emotions
 @type boolean 
 @on Yes
 @off No
 @desc Allow play balloons animations (emotions)? (like :!, :?, :..., :love, ...)
 @default true 

*/

/*~struct~str42:ru

 @param maxlength:i
 @text Длина
 @type number 
 @min 10
 @desc Максимальная длина (кол-во символов) сообщения в чате
 @default 32 


 @param forbiddenEscapeCodes:str
 @text Фильтр
 @type text 
 @desc Запрещённые для ввода управляющие символы (I, V, {, ...) через запятую
 @default V

 @param iconsSize:i
 @text Иконки
 @type number 
 @min 8
 @desc [MZ только] Стандартный размер иконок для сообщений с символом \I 
 @default 18


 @param allowEmotions:b
 @text Эмоции?
 @type boolean 
 @on Да
 @off Нет
 @desc Вкл. воспр. эмоций над персонажем? (пример :!, :?, :..., :love, ...)
 @default true 

*/

/*~struct~str48:

 @param visible:b
 @text Is Visible?
 @type boolean
 @default false
 @desc Will be this element visible?

 @param image:str
 @text Image
 @type file
 @dir img/Alpha
 @require 1
 @desc
 @default

*/

/*~struct~str48:ru

 @param visible:b
 @text Видимый?
 @type boolean
 @default false
 @desc Будет ли этот элемент видно в игре?

 @param image:str
 @text Изображение
 @type file
 @dir img/Alpha
 @require 1
 @desc
 @default

*/

/*~struct~NameplateStyle:

 @param id:str
 @text Style ID
 @type text
 @desc Unique style ID. Using in script call: nAPI.setNameplateStyle
 @default default

 @param margins:s
 @text Margins
 @type struct<str2> 
 @desc Nameplate offset relative charcter sprite
 @default {} 

 @param backImage:s
 @text Image
 @type struct<str48> 
 @desc Background image
 @default {} 


 @param backImageMargins:s
 @parent backImage:s
 @text Margins
 @type struct<str2> 
 @desc Background image offset relative nameplate
 @default {}


 @param backRect:s
 @text Fill
 @type struct<str5> 
 @desc Background fill and frame
 @default {} 


 @param backRectMargins:s
 @parent backRect:s
 @text Margins
 @type struct<str2> 
 @desc Background fill offset relative nameplate
 @default {} 


 @param text:s
 @text Text
 @type struct<str4>
 @desc Text settings
 @default {} 

*/

/*~struct~NameplateStyle:ru

 @param id:str
 @text Стиль
 @type text
 @desc Уникальное название стиля (ID). Исп. в скрипте: nAPI.setNameplateStyle
 @default default

 @param margins:s
 @text Смещение
 @type struct<str2> 
 @desc Смещение относительно персонажа
 @default {} 

 @param backImage:s
 @text Фон
 @type struct<str48> 
 @desc Картинка для фона
 @default {} 


 @param backImageMargins:s
 @parent backImage:s
 @text Смещение
 @type struct<str2> 
 @desc Смещение картинки фона относительно таблички с имененм
 @default {}


 @param backRect:s
 @text Заливка
 @type struct<str5> 
 @desc Заливка фона цветом (рамкой)
 @default {} 


 @param backRectMargins:s
 @parent backRect:s
 @text Смещение
 @type struct<str2> 
 @desc Смещение заливки фона относительно таблички с имененм
 @default {} 


 @param text:s
 @text Текст
 @type struct<str4> 
 @desc Настройки текстового поля
 @default {} 

*/


// * INITIAL S FILE

var Imported = Imported || {};
Imported.Alpha_NETZ = true;

var ANET = {};
ANET.Version = 80; // 0.8

ANET.MinServerRev = 115; // * Необходимая ревизия сервера

// * Данный символ переопределяется в 1_DevSymbol_TEST как dev
ANET._define = 'build'; // * По умолчанию -> сборка

ANET.link = function (library) {
    this[library.name] = library;
};

ANET.isDEV = function () {
    return ANET._define == 'dev';
};

ANET.w = (e) => KDCore.warning('', e);


/*
# ==========================================================================
# ==========================================================================
#
#   EMBEDDED PHEONIX KAGEDESU PLUGINS CORE LIBRARY
#   (This plugin may not use the entire code of this library)
#
# ==========================================================================
# ==========================================================================
 * 
 * 
 */



// Generated by CoffeeScript 2.6.1
// ==========================================================================
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ KDCore.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
// * LIBRARY WITH MZ AND MZ SUPPORT
//! {OUTER FILE}

//?rev 21.06.22
var KDCore;

window.Imported = window.Imported || {};

Imported.KDCore = true;

KDCore = KDCore || {};

// * Двузначные числа нельзя в версии, сравнение идёт по первой цифре поулчается (3.43 - нельзя, можно 3.4.3)
//%[МЕНЯТЬ ПРИ ИЗМЕНЕНИИ]
KDCore._fileVersion = '2.9.2';

// * Методы и библиотеки данной версии
KDCore._loader = 'loader_' + KDCore._fileVersion;

KDCore[KDCore._loader] = [];

// * Добавить библиотеку на загрузку
KDCore.registerLibraryToLoad = function(lib) {
  return KDCore[KDCore._loader].push(lib);
};

if ((KDCore.Version != null) && KDCore.Version >= KDCore._fileVersion) {
  // * ПРОПУСКАЕМ ЗАГРУЗКУ, так как уже загруженна более новая
  console.log('XDev KDCore ' + KDCore._fileVersion + ' skipped by new or exists version');
  KDCore._requireLoadLibrary = false;
} else {
  KDCore.Version = KDCore._fileVersion;
  KDCore.LIBS = KDCore.LIBS || {};
  KDCore.register = function(library) {
    return this.LIBS[library.name] = library;
  };
  window.KDCore = KDCore;
  // * ТРЕБУЕТСЯ ЗАГРУЗКА БИБЛИОТЕК
  KDCore._requireLoadLibrary = true;
}


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Array.prototype.delete = function() {
    var L, a, ax, what;
    what = void 0;
    a = arguments;
    L = a.length;
    ax = void 0;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  Array.prototype.sample = function() {
    if (this.length === 0) {
      return [];
    }
    return this[KDCore.SDK.rand(0, this.length - 1)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.shuffle = function() {
    var k, n, v;
    n = this.length;
    while (n > 1) {
      n--;
      k = KDCore.SDK.rand(0, n + 1);
      v = this[k];
      this[k] = this[n];
      this[n] = v;
    }
  };
  Array.prototype.count = function() {
    return this.length;
  };
  Array.prototype.isEmpty = function() {
    return this.length === 0;
  };
  // * Ищет элемент, у которого поле ID == id
  Array.prototype.getById = function(id) {
    return this.getByField('id', id);
  };
  // * Ищет элемент, у которого поле FIELD (имя поля) == value
  return Array.prototype.getByField = function(field, value) {
    var e;
    try {
      return this.find(function(item) {
        return item[field] === value;
      });
    } catch (error) {
      e = error;
      console.warn(e);
      return null;
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Number.prototype.do = function(method) {
    return KDCore.SDK.times(this, method);
  };
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
  return Number.prototype.any = function(number) {
    return (number != null) && number > 0;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  String.prototype.toCss = function() {
    return KDCore.Color.FromHex(this).CSS;
  };
  String.prototype.toCSS = function() {
    return this.toCss();
  };
  String.prototype.isEmpty = function() {
    return this.length === 0 || !this.trim();
  };
  String.isNullOrEmpty = function(str) {
    if (str != null) {
      return str.toString().isEmpty();
    } else {
      return true;
    }
  };
  String.any = function(str) {
    return !String.isNullOrEmpty(str);
  };
  return String.prototype.replaceAll = function(search, replacement) {
    var target;
    target = this;
    return target.split(search).join(replacement);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.isMV = function() {
    return Utils.RPGMAKER_NAME.contains("MV");
  };
  KDCore.isMZ = function() {
    return !KDCore.isMV();
  };
  KDCore.warning = function(msg, error) {
    if (msg != null) {
      console.warn(msg);
    }
    if (error != null) {
      console.warn(error);
    }
  };
  KDCore.makeid = function(length) {
    var characters, charactersLength, i, result;
    result = '';
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    charactersLength = characters.length;
    i = 0;
    while (i < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      i++;
    }
    return result;
  };
  return KDCore.makeId = function() {
    return KDCore.makeid(...arguments);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var SDK;
  //?[DEPRECATED]
  // * SDK
  //------------------------------------------------------------------------------
  SDK = function() {
    throw new Error('This is a static class');
  };
  SDK.rand = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  SDK.setConstantToObject = function(object, constantName, constantValue) {
    object[constantName] = constantValue;
    if (typeof object[constantName] === 'object') {
      Object.freeze(object[constantName]);
    }
    Object.defineProperty(object, constantName, {
      writable: false
    });
  };
  SDK.convertBitmapToBase64Data = function(bitmap) {
    return bitmap._canvas.toDataURL('image/png');
  };
  SDK.times = function(times, method) {
    var i, results;
    i = 0;
    results = [];
    while (i < times) {
      method(i);
      results.push(i++);
    }
    return results;
  };
  SDK.toGlobalCoord = function(layer, coordSymbol = 'x') {
    var node, t;
    t = layer[coordSymbol];
    node = layer;
    while (node) {
      t -= node[coordSymbol];
      node = node.parent;
    }
    return (t * -1) + layer[coordSymbol];
  };
  SDK.canvasToLocalX = function(layer, x) {
    while (layer) {
      x -= layer.x;
      layer = layer.parent;
    }
    return x;
  };
  SDK.canvasToLocalY = function(layer, y) {
    while (layer) {
      y -= layer.y;
      layer = layer.parent;
    }
    return y;
  };
  SDK.isInt = function(n) {
    return Number(n) === n && n % 1 === 0;
  };
  SDK.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
  };
  SDK.checkSwitch = function(switchValue) {
    if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
      return true;
    }
    return false;
  };
  SDK.toNumber = function(string, none = 0) {
    var number;
    if (string == null) {
      return none;
    }
    number = Number(string);
    if (isNaN(number)) {
      return none;
    }
    return number;
  };
  SDK.isString = function(value) {
    return typeof value === "string";
  };
  SDK.isArray = function(value) {
    return Array.isArray(value);
  };
  //@[EXTEND]
  return KDCore.SDK = SDK;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var __alias_Bitmap_blt_kdCore, __alias_Bitmap_fillAll_kdCore;
  //@[ALIAS]
  __alias_Bitmap_fillAll_kdCore = Bitmap.prototype.fillAll;
  Bitmap.prototype.fillAll = function(color) {
    if (color instanceof KDCore.Color) {
      return this.fillRect(0, 0, this.width, this.height, color.CSS);
    } else {
      return __alias_Bitmap_fillAll_kdCore.call(this, color);
    }
  };
  //@[ALIAS]
  __alias_Bitmap_blt_kdCore = Bitmap.prototype.blt;
  Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (this._needModBltDWH > 0) {
      dh = dw = this._needModBltDWH;
      __alias_Bitmap_blt_kdCore.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
      this._needModBltDWH = null;
    } else {
      __alias_Bitmap_blt_kdCore.call(this, ...arguments);
    }
  };
  Bitmap.prototype.drawIcon = function(x, y, icon, size = 32) {
    var bitmap;
    bitmap = null;
    if (icon instanceof Bitmap) {
      bitmap = icon;
    } else {
      bitmap = KDCore.BitmapSrc.LoadFromIconIndex(icon).bitmap;
    }
    return this.drawOnMe(bitmap, x, y, size, size);
  };
  Bitmap.prototype.drawOnMe = function(bitmap, x = 0, y = 0, sw = 0, sh = 0) {
    if (sw <= 0) {
      sw = bitmap.width;
    }
    if (sh <= 0) {
      sh = bitmap.height;
    }
    this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
  };
  //TODO: Не работает?
  Bitmap.prototype.drawInMe = function(bitmap) {
    return Bitmap.prototype.drawOnMe(bitmap, 0, 0, this.width, this.height);
  };
  return Bitmap.prototype.drawTextFull = function(text, position = 'center') {
    return this.drawText(text, 0, 0, this.width, this.height, position);
  };
});


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  // * Нахожусь ли Я в точке по диагонале (рядом), относительно char
  _.kdInDiagonalPointRelativeTo = function(char) {
    var e, x, y;
    try {
      if (char == null) {
        return false;
      }
      ({x, y} = char);
      if (x === this.x - 1 && ((y === this.y - 1) || (y === this.y + 1))) {
        return true; // * left up or down
      }
      if (x === this.x + 1 && (y === this.y - 1 || y === this.y + 1)) {
        return true; // * right up or down
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var _input_onKeyDown, _input_onKeyUp, i, j, k, l;
  Input.KeyMapperPKD = {};
//Numbers
  for (i = j = 48; j <= 57; i = ++j) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
//Letters Upper
  for (i = k = 65; k <= 90; i = ++k) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
//Letters Lower (for key code events)
  for (i = l = 97; l <= 122; i = ++l) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
  
  //@[ALIAS]
  _input_onKeyDown = Input._onKeyDown;
  Input._onKeyDown = function(event) {
    _input_onKeyDown.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode);
  };
  //@[ALIAS]
  _input_onKeyUp = Input._onKeyUp;
  Input._onKeyUp = function(event) {
    _input_onKeyUp.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode, false);
  };
  //?NEW
  Input._setStateWithMapperPKD = function(keyCode, state = true) {
    var symbol;
    symbol = Input.KeyMapperPKD[keyCode];
    if (symbol != null) {
      return this._currentState[symbol] = state;
    }
  };
  //?NEW
  Input.isCancel = function() {
    return Input.isTriggered('cancel') || TouchInput.isCancelled();
  };
  //?NEW
  return TouchInput.toPoint = function() {
    return new KDCore.Point(TouchInput.x, TouchInput.y);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  PluginManager.getPluginParametersByRoot = function(rootName) {
    var pluginParameters, property;
    for (property in this._parameters) {
      if (this._parameters.hasOwnProperty(property)) {
        pluginParameters = this._parameters[property];
        if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
          return pluginParameters;
        }
      }
    }
    return PluginManager.parameters(rootName);
  };
  return PluginManager.isPluginParametersContentKey = function(pluginParameters, key) {
    return pluginParameters[key] != null;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ___Sprite_alias_Move_KDCORE_2;
  Sprite.prototype.moveToCenter = function(dx = 0, dy = 0) {
    return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
  };
  Sprite.prototype.setStaticAnchor = function(floatX = 1, floatY = 1) {
    this.x -= Math.round(this.width * floatX);
    this.y -= Math.round(this.height * floatY);
  };
  Sprite.prototype.moveToParentCenter = function() {
    if (!this.parent) {
      return;
    }
    return this.move(this.parent.width / 2, this.parent.height / 2);
  };
  ___Sprite_alias_Move_KDCORE_2 = Sprite.prototype.move;
  Sprite.prototype.move = function(x, y) {
    if (x instanceof Array) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x[0], x[1]);
    } else if (x instanceof KDCore.Point || ((x != null ? x.x : void 0) != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x.x, x.y);
    } else if ((x != null) && (x._x != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x._x, x._y);
    } else {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x, y);
    }
  };
  Sprite.prototype.isContainsPoint = function(point) {
    var rect, rx, ry;
    if (this.width === 0 || this.height === 0) {
      return false;
    }
    rx = KDCore.SDK.toGlobalCoord(this, 'x');
    ry = KDCore.SDK.toGlobalCoord(this, 'y');
    rect = this._getProperFullRect(rx, ry);
    return rect.contains(point.x, point.y);
  };
  // * Возвращает Rect с учётом Scale и Anchor спрайта
  Sprite.prototype._getProperFullRect = function(rx, ry) {
    var height, width, x, y;
    width = this.width * Math.abs(this.scale.x);
    height = this.height * Math.abs(this.scale.y);
    x = rx - this.anchor.x * width;
    y = ry - this.anchor.y * height;
    if (this.anchor.x === 0 && this.scale.x < 0) {
      x += this.width * this.scale.x;
    }
    if (this.anchor.y === 0 && this.scale.y < 0) {
      y += this.height * this.scale.y;
    }
    return new PIXI.Rectangle(x, y, width, height);
  };
  Sprite.prototype.fillAll = function(color) {
    if (color != null) {
      return this.bitmap.fillAll(color);
    } else {
      return this.fillAll(KDCore.Color.WHITE);
    }
  };
  return Sprite.prototype.removeFromParent = function() {
    if (this.parent != null) {
      return this.parent.removeChild(this);
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return TouchInput.toMapPoint = function() {
    return this.toPoint().convertToMap();
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.Utils = KDCore.Utils || {};
  return (function() {
    var _;
    _ = KDCore.Utils;
    _.getJDataById = function(id, source) {
      var d, j, len;
      for (j = 0, len = source.length; j < len; j++) {
        d = source[j];
        if (d.id === id) {
          return d;
        }
      }
      return null;
    };
    _.hasMeta = function(symbol, obj) {
      return (obj.meta != null) && (obj.meta[symbol] != null);
    };
    _.getValueFromMeta = function(symbol, obj) {
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      return obj.meta[symbol];
    };
    _.getNumberFromMeta = function(symbol, obj) {
      var value;
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      if (obj.meta[symbol] === true) {
        return 0;
      } else {
        value = KDCore.SDK.toNumber(obj.meta[symbol], 0);
      }
      return value;
    };
    _.isSceneMap = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Map;
      } catch (error) {
        return false;
      }
    };
    _.isSceneBattle = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Battle;
      } catch (error) {
        return false;
      }
    };
    _.getEventCommentValue = function(commentCode, list) {
      var comment, e, i, item;
      try {
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                return comment;
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return null;
    };
    _.getEventCommentValueArray = function(commentCode, list) {
      var comment, comments, e, i, item;
      try {
        comments = [];
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                comments.push(comment);
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return comments;
    };
    _.getPositionPointFromJSON = function(jsonSettings) {
      return _.convertPositionPointFromJSON(jsonSettings.position);
    };
    _.convertPositionPointFromJSON = function(position) {
      var e, x, y;
      try {
        x = position[0];
        y = position[1];
        if (!KDCore.SDK.isInt(x)) {
          x = eval(x);
        }
        if (!KDCore.SDK.isInt(y)) {
          y = eval(y);
        }
        return new KDCore.Point(x, y);
      } catch (error) {
        e = error;
        console.warn('Utils.getPositionPointFromJSON', e);
        return KDCore.Point.Empty;
      }
    };
    _.jsonPos = function(jsonPosition) {
      return _.convertPositionPointFromJSON(jsonPosition);
    };
    _.jsonPosXY = function(jsonPosition) {
      var e, x, y;
      try {
        ({x, y} = jsonPosition);
        return new KDCore.Point(eval(x), eval(y));
      } catch (error) {
        e = error;
        console.warn('Utils.jsonPosXY', e);
        return KDCore.Point.Empty;
      }
    };
    _.getVar = function(id) {
      return $gameVariables.value(id);
    };
    _.setVar = function(id, value) {
      return $gameVariables.setValue(id, value);
    };
    _.addToVar = function(id, value) {
      var prevVal;
      prevVal = _.getVar(id);
      return _.setVar(id, prevVal + value);
    };
    _.playSE = function(seFileName, pitch = 100, volume = 100) {
      var sound;
      if (seFileName == null) {
        return;
      }
      if (seFileName === "") {
        return;
      }
      sound = {
        name: seFileName,
        pan: 0,
        pitch: pitch,
        volume: volume
      };
      AudioManager.playStaticSe(sound);
    };
    _.getItemTypeId = function(item) {
      if (DataManager.isWeapon(item)) {
        return 1;
      } else if (DataManager.isArmor(item)) {
        return 2;
      }
      return 0;
    };
    _.getItemByType = function(itemId, typeId) {
      var data, e;
      try {
        if ((typeId != null) && !isFinite(typeId) && KDCore.SDK.isString(typeId) && String.any(typeId)) {
          if (typeId[0] === "w") {
            typeId = 1;
          } else if (typeId[0] === "a") {
            typeId = 2;
          } else {
            typeId = 0;
          }
        }
        data = [$dataItems, $dataWeapons, $dataArmors];
        return data[typeId][itemId];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    _.loadFont = function(name) {
      if (!KDCore.isMZ()) {
        return;
      }
      if (String.isNullOrEmpty(name)) {
        return;
      }
      if (FontManager._states[name] != null) {
        return;
      }
      FontManager.load(name, name + ".ttf");
    };
    _.convertTimeShort = function(seconds) {
      var e;
      try {
        if (seconds > 59) {
          return Math.floor(seconds / 60) + 'm';
        } else {
          return seconds;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        return seconds;
      }
    };
    _.isPointInScreen = function(point, margin = 10) {
      var maxH, maxW, screenMargin, x, y;
      ({x, y} = point);
      maxW = Graphics.width;
      maxH = Graphics.height;
      // * Граница от краёв экрана
      screenMargin = margin;
      if (x < screenMargin) {
        return false;
      }
      if (y < screenMargin) {
        return false;
      }
      if (x > (maxW - screenMargin)) {
        return false;
      }
      if (y > (maxH - screenMargin)) {
        return false;
      }
      return true;
    };
    // * Ассинхронная загрузка изображения, возвращает bitmap, когда загружен
    // * Пример использования loadImageAsync(a, b).then(метод)
    // в метод будет передан bitmap первым аргументом
    _.loadImageAsync = async function(folder, filename) {
      var promise;
      promise = new Promise(function(resolve, reject) {
        var b;
        b = ImageManager.loadBitmap("img/" + folder + "/", filename);
        return b.addLoadListener(function() {
          return resolve(b);
        });
      });
      return (await promise);
    };
    // * Преобразовать расширенное значение
    // * Значение может быть X -> X
    // * "X" -> X (цифра)
    // * "X,Y,Z,..." -> [X, Y, Z]
    // * "[X, Y, Z,...]" -> [X, Y, Z]
    // * "X|V" -> из переменной X
    // * [Y] -> случайное число из массива (рекурсивно)
    //@[2.8.1] since
    _.getEValue = function(value) {
      var e, items, randomValue, variableId;
      try {
        if (value == null) {
          return null;
        }
        if (KDCore.SDK.isString(value)) {
          if (isFinite(value)) { // * Число представленно строкой
            return Number(value);
          }
          // * Массив представлен строкой (может быть без квадратных скобок)
          if (value.contains(',') || (value.contains("[") && value.contains("]"))) {
            value = value.replace("[", "");
            value = value.replace("]", "");
            // * Преобразуем в число или строку (например если extended |V)
            items = value.split(",").map(function(item) {
              var itemT;
              itemT = item.trim();
              if (isFinite(itemT)) {
                return Number(itemT);
              } else {
                return itemT;
              }
            });
            // * Вызываем снова эту функцию, но уже с массивом
            return KDCore.Utils.getEValue(items);
          }
          if (value.contains("|V")) {
            variableId = parseInt(value);
            return $gameVariables.value(variableId);
          }
          return value; // * Просто значение в итоге
        } else if (KDCore.SDK.isArray(value)) {
          randomValue = value.sample();
          return KDCore.Utils.getEValue(randomValue);
        } else {
          return value;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return value;
      }
    };
    //@[2.8.2] since
    _.isChanceIsGood = function(chance) {
      var e;
      try {
        if (chance > 1) {
          chance /= 100;
        }
        return chance > Math.random();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    //@[2.8.2] since
    //KEY:w:3:1:50 , KEY:i:10:2:1|V
    //OUTPUT: [GameItem, COUNT]
    _.parseItemFromConditionStr = function(conditionLine) {
      var amount, e, itemChance, itemId, parts, typeId;
      try {
        if (!conditionLine.contains(":")) {
          return null;
        }
        parts = conditionLine.split(":");
        typeId = parts[1];
        itemId = KDCore.Utils.getEValue(parts[2]);
        amount = KDCore.Utils.getEValue(parts[3]);
        if (amount <= 0) {
          return null;
        }
        try {
          itemChance = String.any(parts[4]) ? parts[4] : 100;
          itemChance = KDCore.Utils.getEValue(itemChance) / 100;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          itemChance = 0;
        }
        if (itemChance <= 0) {
          return null;
        }
        if (KDCore.Utils.isChanceIsGood(itemChance)) {
          return [KDCore.Utils.getItemByType(itemId, typeId), amount];
        } else {
          return null;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return Window_Base.prototype.drawFaceWithCustomSize = function(faceName, faceIndex, x, y, finalSize) {
    this.contents._needModBltDWH = finalSize;
    this.drawFace(faceName, faceIndex, x, y);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return (function() {    // * Input Extension: KDGamepad
    //------------------------------------------------------------------------------
    // * Поддержка расширенного управления через геймпад (свой модуль)
    var ALIAS___updateGamepadState, _;
    //@[DEFINES]
    _ = Input;
    // * Активировать работу модуля KDGamepad
    _.activateExtendedKDGamepad = function() {
      return _._kdIsGamepadExtended = true;
    };
    //@[ALIAS]
    ALIAS___updateGamepadState = _._updateGamepadState;
    _._updateGamepadState = function(gamepad) {
      if (Input._kdIsGamepadExtended === true) {
        KDGamepad.update();
      }
      if ((typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__kdgpStopDefaultGamepad : void 0) === true) {
        return;
      }
      // * Режим перемещения без DPad
      // * В оригинале игрок также ходит по DPad клавишам, что может быть не удобно
      // * например при работе с инвентарём
      if (KDGamepad.isNoDPadMoving()) {
        if (KDGamepad.isDPadAny()) {
          Input.clear();
          return;
        }
      }
      ALIAS___updateGamepadState.call(this, gamepad);
    };
    window.KDGamepad = function() {
      return new Error("This is static class");
    };
    window.addEventListener("gamepadconnected", function(event) {
      var e;
      try {
        return KDGamepad.refresh();
      } catch (error) {
        // * Можно напрямую
        //unless KDGamepad.isExists()
        //    if event.gamepad? and event.gamepad.mapping == 'standard'
        //        KDGamepad.init(event.gamepad)
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    window.addEventListener("gamepaddisconnected", function(event) {
      var e;
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        if ((event.gamepad != null) && event.gamepad === KDGamepad.gamepad) {
          return KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    KDGamepad.stopDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = true;
    };
    KDGamepad.resumeDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = null;
    };
    // * Ссылка на геймпад
    KDGamepad.gamepad = null;
    // * Подключён ли Gamepad ?
    KDGamepad.isExists = function() {
      return KDGamepad.gamepad != null;
    };
    // * Инициализация состояния кнопок
    // * Этот метод вызывается автоматически из Refresh или при подключении Gamepad
    KDGamepad.init = function(gamepad) {
      KDGamepad.gamepad = gamepad;
      this._isActive = true;
      this.buttonNames = [
        'A', // 0
        'B', // 1
        'X', // 2
        'Y', // 3
        'LB', // 4
        'RB', // 5
        'LTrigger', // 6
        'RTrigger', // 7
        'Back', // 8
        'Start', // 9
        'LStick', // 10
        'RStick', // 11
        'dUp', // 12
        'dDown', // 13
        'dLeft', // 14
        'dRight' // 15
      ];
      this.reset();
    };
    // * Аналог Input.clear
    KDGamepad.clear = function() {
      return KDGamepad.reset();
    };
    // * Сбросить состояние кнопок
    KDGamepad.reset = function() {
      this.leftStick = {
        x: 0,
        y: 0
      };
      this.rightStick = {
        x: 0,
        y: 0
      };
      this.buttons = {};
      this.buttonsPressed = {};
      this.prevButtons = {};
    };
    
    // * Остановить учёт геймпада
    KDGamepad.stop = function() {
      KDGamepad.reset();
      KDGamepad.gamepad = null;
    };
    // * Функция проверки что нажата кнопка на геймпаде
    KDGamepad._buttonPressed = function(gamepad, index) {
      var b, e;
      try {
        if (!gamepad || !gamepad.buttons || index >= gamepad.buttons.length) {
          return false;
        }
        b = gamepad.buttons[index];
        if (b == null) {
          return false;
        }
        if (typeof b === 'object') {
          // * Можно упростить
          return b.pressed;
        }
        return b === 1.0;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    // * Каждый кадр (обновление состояний)
    KDGamepad.update = function() {
      var e, gp, i, isDown, j, len, name, ref;
      if (!KDGamepad.isActive()) {
        return;
      }
      KDGamepad.refresh();
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        gp = KDGamepad.gamepad;
        ref = this.buttonNames;
        // * Проверка состояний кнопок
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          name = ref[i];
          this.buttons[name] = false;
          isDown = KDGamepad._buttonPressed(gp, i);
          if (isDown === true) {
            this.prevButtons[name] = true;
          } else {
            // * Срабатываение только при нажал - отпустил
            if (this.prevButtons[name] === true) {
              this.buttons[name] = true;
              this.prevButtons[name] = false;
            }
          }
        }
        // * Проверка стиков
        this.leftStick.x = gp.axes[0];
        this.leftStick.y = gp.axes[1];
        this.rightStick.x = gp.axes[2];
        this.rightStick.y = gp.axes[3];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Обновить и проверить состояние Gamepad
    // * Надо каждый раз это вызывать
    KDGamepad.refresh = function() {
      var e, gamepads, gp, i, isGamepadRefreshed, j, ref;
      try {
        isGamepadRefreshed = false;
        if (navigator.getGamepads) {
          gamepads = navigator.getGamepads();
        } else if (navigator.webkitGetGamepads) {
          gamepads = navigator.webkitGetGamepads();
        }
        if (gamepads != null) {
          for (i = j = 0, ref = gamepads.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            gp = gamepads[i];
            if ((gp != null) && gp.mapping === 'standard') {
              isGamepadRefreshed = true;
              if (KDGamepad.buttonNames != null) {
                KDGamepad.gamepad = gp;
              } else {
                KDGamepad.init(gp);
              }
              break;
            }
          }
        }
        if (!isGamepadRefreshed) {
          // * Если не был найден не один gamepad - отключаем систему
          KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Любое нажатие кнопки
    KDGamepad.isKeyAny = function(name) {
      return KDGamepad.isKey(name) || KDGamepad.isKeyPressed(name);
    };
    // * Нажата ли кнопка (trigger нажал - отпустил)
    KDGamepad.isKey = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.buttons[name] === true;
    };
    // * Нажата ли кнопка (continues зажата)
    KDGamepad.isKeyPressed = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.prevButtons[name] === true;
    };
    KDGamepad.isDPadAny = function() {
      return KDGamepad.isKeyAny("dLeft") || KDGamepad.isKeyAny("dRight") || KDGamepad.isKeyAny("dUp") || KDGamepad.isKeyAny("dDown");
    };
    KDGamepad.isActive = function() {
      return this._isActive === true;
    };
    // * Временно отключить обработку KDGamepad
    KDGamepad.setActive = function(_isActive) {
      this._isActive = _isActive;
      if (KDGamepad.isActive()) {
        KDGamepad.refresh();
      } else {
        KDGamepad.stop();
      }
    };
    // * Отключить перемещение игрока на DPad
    KDGamepad.setNoDPadMovingMode = function(_noDpadMoving) {
      this._noDpadMoving = _noDpadMoving;
    };
    return KDGamepad.isNoDPadMoving = function() {
      return this._noDpadMoving === true;
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var BitmapSrc;
  BitmapSrc = (function() {
    //?[DEPRECATED]
    class BitmapSrc {
      constructor() {
        this.bitmap = null;
      }

      static LoadFromIconIndex(iconIndex) {
        var bs, icon_bitmap, iconset, ph, pw, sx, sy;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[iconIndex] == null) {
          iconset = ImageManager.loadSystem('IconSet');
          if (KDCore.isMV()) {
            pw = Window_Base._iconWidth;
            ph = Window_Base._iconHeight;
          } else {
            pw = ImageManager.iconWidth;
            ph = ImageManager.iconHeight;
          }
          sx = iconIndex % 16 * pw;
          sy = Math.floor(iconIndex / 16) * ph;
          icon_bitmap = new Bitmap(pw, ph);
          icon_bitmap.addLoadListener(function() {
            icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          });
          BitmapSrc.CACHE[iconIndex] = icon_bitmap;
        }
        bs.bitmap = BitmapSrc.CACHE[iconIndex];
        return bs;
      }

      static LoadFromImageFolder(filename) {
        var bs;
        bs = new BitmapSrc();
        bs.bitmap = ImageManager.loadPicture(filename);
        return bs;
      }

      static LoadFromBase64(data, name) {
        var bs;
        bs = new BitmapSrc();
        if (name != null) {
          if (BitmapSrc.CACHE[name] != null) {
            bs.bitmap = BitmapSrc.CACHE[name];
          } else {
            BitmapSrc.CACHE[name] = Bitmap.load(data);
            bs.bitmap = BitmapSrc.CACHE[name];
          }
        } else {
          bs.bitmap = Bitmap.load(data);
        }
        return bs;
      }

      static LoadFromMemory(symbol) {
        var bs;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[symbol] != null) {
          bs.bitmap = BitmapSrc.CACHE[symbol];
        } else {
          bs.bitmap = ImageManager.loadEmptyBitmap();
        }
        return bs;
      }

    };

    BitmapSrc.CACHE = {};

    return BitmapSrc;

  }).call(this);
  //@[EXTEND]
  return KDCore.BitmapSrc = BitmapSrc;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Changer;
  // * Класс который может плавно изменять какой-либо параметр
  // * Работает в стиле chain методов

    // * ------------------ ПРИМЕР ----------------------------------

    // * Меняем прозрачность 4 раза, туда-сюда, затем выводим done в консоль

    //@changer = new AA.Changer(someSprite)
  //@changer.change('opacity').from(255)
  //            .to(0).step(5).speed(1).delay(30).repeat(4).reverse()
  //            .start().done(() -> console.log('done'))
  //@changer.update()

    // * -------------------------------------------------------------
  Changer = class Changer {
    constructor(obj) {
      this.obj = obj;
      // * Количество кадров, в которые будет обновление
      this._field = null; // * название поля
      this._speed = 1; // * frames
      this._step = 1; // * шаг изменения значения
      this._from = 0; // * Начальное значение
      this._to = 0; // * Конечное значение
      this._thread = null;
      this._orienation = true; // * Направление + или - step (true = +)
      this._delay = 0; // * Задержка старта
      this._changer = null; // * Ссылка на следующий changer
      this._isRepeat = false; // * Надо ли поторить себя снова
      this._onDoneMethod = null; // * Метод будет выполнен в конце (при завершении)
      this._isPrepared = false; // * Элемента был подготовлен (установлено значение from)
    }

    start() {
      if (this._field == null) {
        return;
      }
      if (this._from === this._to) {
        return;
      }
      if (this._delay > 0) {
        this._delayThread = new KDCore.TimedUpdate(this._delay, this._startThread.bind(this));
        this._delayThread.once();
      } else {
        this._startThread();
      }
      return this;
    }

    isStarted() {
      return (this._thread != null) || (this._delayThread != null);
    }

    from(_from) {
      this._from = _from;
      return this;
    }

    to(_to) {
      this._to = _to;
      return this;
    }

    step(_step) {
      this._step = _step;
      return this;
    }

    speed(_speed) {
      this._speed = _speed;
      return this;
    }

    change(_field) {
      this._field = _field;
      return this;
    }

    // * Снова повторить (не совместим с then)
    // * Если ничего не указать, или <= 0 -> то бескончно
    repeat(_repeatCount = 0) {
      this._repeatCount = _repeatCount;
      if (this._repeatCount <= 0) {
        this._repeatCount = null;
      }
      this._isRepeat = true;
      this._changer = null;
      return this;
    }

    // * Снова повторить, но поменять местами to и from (работает только с repeat >= 2)
    reverse() {
      this._isReverse = true;
      return this;
    }

    isDone() {
      if (!this._isPrepared) {
        // * Чтобы не было выхода пока ждёт Delay
        return false;
      }
      // * Если от 255 до 0 (например)
      if (this._orienation === false) {
        // * То может быть меньше нуля (т.к. @step динамический)
        return this.value() <= this._to;
      } else {
        return this.value() >= this._to;
      }
    }

    value() {
      return this.obj[this._field];
    }

    stop() {
      this._thread = null;
      this._delayThread = null;
      if (this._changer == null) {
        // * Если есть связанный Changer, то не выполняем метод завршения
        return this._callDoneMethod();
      }
    }

    // * При ожидании, значения устанавливаются не сразу
    delay(_delay) {
      this._delay = _delay;
      return this;
    }

    // * Выполнить другой Changer после этого
    // * Не совместим с Repeat
    // * НЕЛЬЗЯ зацикливать, не будет работать
    // * Соединённый не надо обновлять вне, он обновляется в этом
    then(_changer) {
      this._changer = _changer;
      this._isRepeat = false;
      return this;
    }

    // * Этот метод будт выполнене в конце
    done(_onDoneMethod) {
      this._onDoneMethod = _onDoneMethod;
      return this;
    }

    // * Шаг можно выполнить и в ручную
    makeStep() {
      if (!this.isStarted()) {
        this._prepare();
      }
      this._makeStep();
      return this;
    }

    update() {
      var ref;
      if (this.isStarted()) {
        if (this._delay > 0) {
          if ((ref = this._delayThread) != null) {
            ref.update();
          }
        }
        if (this._thread != null) {
          this._updateMainThread();
        }
      } else {
        // * Если хоть раз был запущен
        if (this._isBeenStarted === true) {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
        }
      }
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Changer.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Changer.prototype;
    _._prepare = function() {
      if (this._field == null) {
        return;
      }
      this._orienation = this._from < this._to;
      if (!this._orienation) {
        this._step *= -1;
      }
      // * Устанавливаем начальное значение
      this.obj[this._field] = this._from;
      this._isPrepared = true;
    };
    _._makeStep = function() {
      var value;
      if (this.isDone()) {
        return;
      }
      value = this.value();
      value += this._step;
      this.obj[this._field] = value;
    };
    _._startThread = function() {
      this._prepare();
      if (this.isDone()) {
        return;
      }
      this._thread = new KDCore.TimedUpdate(this._speed, this._makeStep.bind(this));
      return this._isBeenStarted = true;
    };
    _._updateChainedChanger = function() {
      if (this._changer.isStarted()) {
        this._changer.update();
        if (this._changer.isDone()) {
          this._callDoneMethod();
          this._changer.stop();
          return this._changer = null;
        }
      } else {
        return this._changer.start();
      }
    };
    _._restart = function() {
      if (!this._isCanRepeatMore()) {
        return;
      }
      if (this._repeatCount == null) {
        // * Если указано! число повторений, то onDone метод не вызываем
        this._callDoneMethod();
      }
      if (this._isReverse === true) {
        this._swapFromTo();
      }
      this._prepare();
      return this.start();
    };
    _._swapFromTo = function() {
      var t;
      t = this._from;
      this._from = this._to;
      this._to = t;
      // * Инвентируем число step
      this._step *= -1;
    };
    _._callDoneMethod = function() {
      if (this._onDoneMethod != null) {
        return this._onDoneMethod();
      }
    };
    _._isCanRepeatMore = function() {
      if (this._repeatCount == null) {
        return true;
      }
      this._repeatCount--;
      if (this._repeatCount <= 0) {
        this.stop();
        return false;
      }
      return true;
    };
    _._updateMainThread = function() {
      this._thread.update();
      if (this.isDone()) {
        if (this._isRepeat === true) {
          this._restart();
        } else {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
          this.stop();
        }
      }
    };
  })();
  // ■ END Changer.coffee
  //---------------------------------------------------------------------------

  //@[EXTEND]
  return KDCore.Changer = Changer;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color;
  Color = (function() {
    class Color {
      constructor(r1 = 255, g1 = 255, b1 = 255, a1 = 255) {
        this.r = r1;
        this.g = g1;
        this.b = b1;
        this.a = a1;
      }

      getLightestColor(lightLevel) {
        var bf, newColor, p;
        bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
        p = 0;
        newColor = [0, 0, 0, 0];
        if (bf - lightLevel >= 0) {
          if (bf >= 0) {
            p = Math.abs(bf - lightLevel) / lightLevel;
          }
          newColor = this.ARR.map(function(c) {
            return c - (p * c);
          });
        } else {
          if (bf >= 0) {
            p = (lightLevel - bf) / (255 - bf);
          }
          newColor = this.ARR.map(function(c) {
            return [(255 - c) * p + c, 255].min();
          });
        }
        return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
      }

      clone() {
        return this.reAlpha(this.a);
      }

      reAlpha(newAlpha) {
        return new Color(this.r, this.g, this.b, newAlpha || 255);
      }

      static AddConstantColor(name, color) {
        color.toHex();
        color.toArray();
        color.toCSS();
        KDCore.SDK.setConstantToObject(Color, name, color);
      }

      toHex() {
        var b, g, r;
        if (this._colorHex != null) {
          return this._colorHex;
        }
        r = Math.floor(this.r).toString(16).padZero(2);
        g = Math.floor(this.g).toString(16).padZero(2);
        b = Math.floor(this.b).toString(16).padZero(2);
        return this._colorHex = '#' + r + g + b;
      }

      toArray() {
        if (this._colorArray != null) {
          return this._colorArray;
        }
        return this._colorArray = [this.r, this.g, this.b, this.a];
      }

      toCSS() {
        var na, nb, ng, nr;
        if (this._colorCss != null) {
          return this._colorCss;
        }
        nr = Math.round(this.r);
        ng = Math.round(this.g);
        nb = Math.round(this.b);
        na = this.a / 255;
        return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
      }

      toNumber() {
        return Number(this.toHex().replace("#", "0x"));
      }

      static Random() {
        var a, b, c;
        a = KDCore.SDK.rand(1, 254);
        b = KDCore.SDK.rand(1, 254);
        c = KDCore.SDK.rand(1, 254);
        return new Color(a, b, c, 255);
      }

      static FromHex(hexString) {
        var color, result;
        result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
        color = null;
        if (result != null) {
          color = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          };
        }
        if (color != null) {
          return new Color(color.r, color.g, color.b, 255);
        } else {
          return Color.NONE;
        }
      }

    };

    Object.defineProperties(Color.prototype, {
      R: {
        get: function() {
          return this.r;
        },
        configurable: true
      },
      G: {
        get: function() {
          return this.g;
        },
        configurable: true
      },
      B: {
        get: function() {
          return this.b;
        },
        configurable: true
      },
      A: {
        get: function() {
          return this.a;
        },
        configurable: true
      },
      ARR: {
        get: function() {
          return this.toArray();
        },
        configurable: true
      },
      CSS: {
        get: function() {
          return this.toCSS();
        },
        configurable: true
      },
      HEX: {
        get: function() {
          return this.toHex();
        },
        configurable: true
      },
      OX: {
        get: function() {
          return this.toNumber();
        },
        configurable: true
      }
    });

    Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));

    Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));

    Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));

    Color.AddConstantColor('RED', new Color(255, 0, 0, 255));

    Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));

    Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));

    Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));

    Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));

    Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));

    Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));

    return Color;

  }).call(this);
  //@[EXTEND]
  return KDCore.Color = Color;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color, DevLog, __TMP_LOGS__;
  Color = KDCore.Color;
  __TMP_LOGS__ = [];
  DevLog = class DevLog {
    constructor(prefix = "") {
      this.prefix = prefix;
      this._isShow = typeof DEV !== 'undefined';
      this._color = Color.BLACK;
      this._backColor = Color.WHITE;
      __TMP_LOGS__.push(this);
    }

    on() {
      this._isShow = true;
      return this;
    }

    off() {
      this._isShow = false;
      return this;
    }

    applyRandomColors() {
      this.applyRandomWithoutBackgroundColors();
      this.setBackColor(Color.Random());
      return this;
    }

    applyRandomWithoutBackgroundColors() {
      this.setColor(Color.Random());
      return this;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setBackColor(backColor) {
      this._backColor = backColor;
      return this;
    }

    applyLibraryColors() {
      this.setColors(new Color(22, 120, 138, 0), Color.BLACK);
      return this;
    }

    setColors(color, backColor) {
      this.setColor(color);
      this.setBackColor(backColor);
      return this;
    }

    applyExtensionColors() {
      this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
      return this;
    }

    applyWarningColors() {
      this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
      return this;
    }

    p(text) {
      if (!this._isShow) {
        return;
      }
      if (text == null) {
        console.log("");
      }
      this._printText(text);
    }

    _printText(text) {
      text = this.prefix + " : " + text;
      if (this._isUsingColor()) {
        return this._printTextWithColors(text);
      } else {
        return console.log(text);
      }
    }

    _isUsingColor() {
      return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
    }

    _printTextWithColors(text) {
      var args;
      args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
      return window.console.log.apply(console, args);
    }

    static CreateForLib(library) {
      var dlog;
      dlog = new DevLog(library.name);
      dlog.applyLibraryColors();
      return dlog;
    }

    static EnableAllLogs() {
      return __TMP_LOGS__.forEach(function(log) {
        return log.on();
      });
    }

  };
  //@[EXTEND]
  return KDCore.DevLog = DevLog;
});


// Generated by CoffeeScript 2.6.1
// * Класс для глобального события игры (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.GEvent = class GEvent {
    constructor(name) {
      this.name = name;
      this.clear();
    }

    addListener(listener, isSingle = false) {
      if (listener == null) {
        return;
      }
      if (isSingle === true) {
        this.listeners = [listener];
      } else {
        this.listeners.push(listener);
      }
    }

    removeListener(listener) {
      if (listener == null) {
        return;
      }
      return this.listener.delete(listener);
    }

    call() {
      var i, l, len, ref;
      ref = this.listeners;
      for (i = 0, len = ref.length; i < len; i++) {
        l = ref[i];
        l();
      }
    }

    clear() {
      return this.listeners = [];
    }

  };
});


// Generated by CoffeeScript 2.6.1
// * Менеджер для управления глобальными событиями игры (GEvent) (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  var GEventsManager;
  // * Данный менеджер глобальный, т.е. с ним работают ВСЕ плагины, которые его используют!
  GEventsManager = function() {};
  (function() {
    var _;
    _ = GEventsManager;
    // * Существует ли событие с данным именем
    _.isEventExists = function(gEventName) {
      return this._getEventByName(gEventName) != null;
    };
    // * Получить список всех зарегестрированных событий (имён)
    _.getAllEvents = function() {
      if (this.events == null) {
        return [];
      }
      return this.events.map(function(ev) {
        return ev.name;
      });
    };
    // * Зарегестрировать событие (используется только имя события)
    _.register = function(gEventName) {
      if (this.events == null) {
        this.events = [];
      }
      this.events.push(new KDCore.GEvent(gEventName));
    };
    // * Подписаться на событие (имя события) и слушатель
    // * если isSingle == true - то у события может быть только один исполнитель
    _.subscribeFor = function(evName, listener, isSingle = false) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.addListener(listener, isSingle) : void 0;
    };
    // * Подписаться на событие (уникально) для объекта
    // * Т.е. при вызове этого метода ещё раз, если объект
    // * уже подписан на событие, ничего не будет (без дубликатов)
    //? ВНИМАНИЕ ! Если объект подписался через subscribeForX, то
    // выполнив clear по данному evName, он уже не подпишится!
    _.subscribeForX = function(context, evName, listener) {
      var e, key;
      try {
        key = "__kdCoreGEvent_" + evName;
        if (context[key] == null) {
          this.subscribeFor(evName, listener);
          return context[key] = true;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Вызвать событие (по имени)
    _.call = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.call() : void 0;
    };
    _.clear = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.clear() : void 0;
    };
    _._getEventByName = function(name) {
      if (!this.events) {
        return null;
      }
      return this.events.find(function(ev) {
        return ev.name === name;
      });
    };
  })();
  //@[EXTEND]
  return KDCore.GEventsManager = GEventsManager;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  //?[DEPRECATED]
  return KDCore.ParametersManager = class ParametersManager {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this._cache = {};
      this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
    }

    isLoaded() {
      return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
    }

    isHasParameter(name) {
      return this._parameters[name] != null;
    }

    getString(name) {
      return this._parameters[name];
    }

    convertField(object, fieldName) {
      var e;
      try {
        object[fieldName] = JSON.parse(object[fieldName] || 'false');
      } catch (error) {
        e = error;
        console.error('Error while convert field ' + e.name);
        object[fieldName] = false;
      }
      return object;
    }

    convertImage(object, fieldName) {
      return object[fieldName] = this.loadImage(object[fieldName]);
    }

    loadImage(filename, smooth) {
      var e, path;
      try {
        if (filename) {
          path = filename.split('/');
          filename = path.last();
          path = path.first() + '/';
          return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
        } else {
          return ImageManager.loadEmptyBitmap();
        }
      } catch (error) {
        e = error;
        console.error(e);
        return ImageManager.loadEmptyBitmap();
      }
    }

    getFromCacheOrInit(name, func) {
      var object;
      if (!this.isInCache(name)) {
        if (func != null) {
          object = func.call(this);
          this.putInCache(name, object);
        }
      }
      return this.getFromCache(name);
    }

    isInCache(name) {
      return this._cache.hasOwnProperty(name);
    }

    putInCache(name, object) {
      return this._cache[name] = object;
    }

    getFromCache(name) {
      return this._cache[name];
    }

    getNumber(name) {
      var number;
      number = this.getObject(name);
      if (KDCore.SDK.isInt(number)) {
        return number;
      }
      return 0;
    }

    getObject(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || '{}');
      } else {
        return {};
      }
    }

    getBoolean(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || false);
      } else {
        return false;
      }
    }

    getBooleanFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getBooleanFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getNumberFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getNumberFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getStringFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getStringFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getBooleanFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getBoolean(name);
      });
    }

    getNumberFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getNumber(name);
      });
    }

    getStringFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getString(name);
      });
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.ParamLoader = class ParamLoader {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this.paramsRaw = PluginManager.getPluginParametersByRoot(this.pluginName);
      this.params = this.parseParameters(this.paramsRaw);
    }

    parseParameters(paramSet) {
      var clearKey, key, params, typeKey, value;
      params = {};
      for (key in paramSet) {
        value = paramSet[key];
        clearKey = this.parseKey(key);
        typeKey = this.parseKeyType(key);
        params[clearKey] = this.parseParamItem(typeKey, value);
      }
      return params;
    }

    parseKey(keyRaw) {
      return keyRaw.split(":")[0];
    }

    parseKeyType(keyRaw) {
      return keyRaw.split(":")[1];
    }

    // * Проверка, загружены ли параметры плагина
    isLoaded() {
      return (this.paramsRaw != null) && this.paramsRaw.hasOwnProperty(this.pluginName);
    }

    // * Имя параметра без ключа
    isHasParameter(paramName) {
      return this.params[paramName] != null;
    }

    
      // * Возвращает значение параметра (def - по умолчанию, если не найден)
    getParam(paramName, def) {
      if (this.isHasParameter(paramName)) {
        return this.params[paramName];
      } else {
        return def;
      }
    }

    // * Данные ключи должны идти после названия параметра через :
    // * Пример: @param ShowDelay:int, @param TestBool:bool
    // * Текстовые параметры, которые надо вернуть как есть, можно без типа (text, file, combo, ...)
    parseParamItem(type, item) {
      var e;
      if (type == null) {
        return item;
      }
      try {
        switch (type) {
          case "int":
          case "i":
            return Number(item);
          case "intA": // * массив чисел
            if (String.any(item)) {
              return JsonEx.parse(item).map((e) => {
                return this.parseParamItem("int", e);
              });
            } else {
              return [];
            }
            break;
          case "bool":
          case "b":
          case "e":
            return eval(item);
          case "struct":
          case "s":
            if (String.any(item)) {
              return this.parseParameters(JsonEx.parse(item));
            } else {
              return null;
            }
            break;
          case "structA": // * массив структур
            return JsonEx.parse(item).map((e) => {
              return this.parseParameters(JsonEx.parse(e));
            });
          case "str":
            return item;
          case "strA":
            if (String.any(item)) {
              return JsonEx.parse(item).map((e) => {
                return this.parseParamItem("str", e);
              });
            } else {
              return [];
            }
            break;
          case "note": // * если несколько строк в тексте
            try {
              return JsonEx.parse(item);
            } catch (error) {
              e = error;
              KDCore.warning(e);
              return item;
            }
            break;
          case "css":
            return item.toCss();
          case "color":
            return KDCore.Color.FromHex(item);
          default:
            return item;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return item;
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Point;
  Point = (function() {
    class Point {
      constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
      }

      clone() {
        return new Point(this._x, this._y);
      }

      toString() {
        return "[" + this._x + " ; " + this._y + "]";
      }

      isSame(anotherPoint) {
        return this.x === anotherPoint.x && this.y === anotherPoint.y;
      }

      convertToCanvas() {
        return new Point(Graphics.pageToCanvasX(this._x), Graphics.pageToCanvasY(this._y));
      }

      convertToMap() {
        return new Point($gameMap.canvasToMapX(this._x), $gameMap.canvasToMapY(this._y));
      }

      convertToScreen() {
        return new Point(this.screenX(), this.screenY());
      }

      screenX() {
        var t, tw;
        t = $gameMap.adjustX(this._x);
        tw = $gameMap.tileWidth();
        return Math.round(t * tw + tw / 2);
      }

      screenY() {
        var t, th;
        t = $gameMap.adjustY(this._y);
        th = $gameMap.tileHeight();
        return Math.round(t * th + th);
      }

      round() {
        return new Point(Math.round(this._x), Math.round(this._y));
      }

      floor() {
        return new Point(Math.floor(this._x), Math.floor(this._y));
      }

      mapPointOnScreen() {
        var nx, ny;
        nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
        ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
        return new Point(nx, ny);
      }

      multiplyBy(val) {
        return new Point(this._x * val, this._y * val);
      }

      simple() {
        return new PIXI.Point(this.x, this.y);
      }

      delta(point) {
        var dx, dy;
        dx = point.x - this._x;
        dy = point.y - this._y;
        return new KDCore.Point(dx, dy);
      }

      static _getEmpty() {
        if (Point._emptyPoint == null) {
          Point._emptyPoint = new Point(0, 0);
        }
        return Point._emptyPoint;
      }

    };

    Object.defineProperties(Point.prototype, {
      x: {
        get: function() {
          return this._x;
        },
        configurable: true
      },
      y: {
        get: function() {
          return this._y;
        },
        configurable: true
      }
    });

    Object.defineProperties(Point, {
      Empty: {
        get: function() {
          return Point._getEmpty();
        },
        configurable: false
      }
    });

    Array.prototype.toPoint = function() {
      return new Point(this[0], this[1]);
    };

    Sprite.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    Game_CharacterBase.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    return Point;

  }).call(this);
  //@[EXTEND]
  return KDCore.Point = Point;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return KDCore.Sprite = (function(superClass) {
    //@[AUTO EXTEND]
    class Sprite extends superClass {
      constructor() {
        super(...arguments);
      }

      b() {
        return this.bitmap;
      }

      clear() {
        return this.bitmap.clear();
      }

      add(child) {
        return this.addChild(child);
      }

      bNew(w, h) {
        if (h == null) {
          h = w;
        }
        return this.bitmap = new Bitmap(w, h);
      }

      bImg(filename, sourceFolder) {
        var getterFunc;
        getterFunc = function(filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder != null) {
          getterFunc = function(filename) {
            return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
          };
        }
        return this.bitmap = getterFunc(filename);
      }

      onReady(method) {
        if (method != null) {
          return this.bitmap.addLoadListener(method);
        }
      }

      drawText() {
        return this.bitmap.drawText(...arguments);
      }

      drawTextFull(text, position = "center") {
        if (this.textSettingsPosition != null) {
          position = this.textSettingsPosition;
        }
        return this.bitmap.drawTextFull(text, position);
      }

      //?DEPRECATED
      drawTextWithSettings(text) {
        this.clear();
        this.drawTextFull(text, this.textSettingsPosition);
      }

      //? x, y, icon, size
      drawIcon() {
        return this.bitmap.drawIcon(...arguments);
      }

      moveByJson(settings) {
        var pos;
        pos = KDCore.Utils.getPositionPointFromJSON(settings);
        return this.move(pos.x, pos.y);
      }

      applyTextSettingsByJson(sprite, settings) {
        this.applyTextSettingsByExtraSettings(sprite, settings.text);
      }

      applyTextSettingsByExtraSettings(sprite, s) {
        sprite.move(s.marginX, s.marginY);
        sprite.b().fontSize = s.fontSize;
        sprite.b().textColor = KDCore.Color.FromHex(s.textColor).CSS;
        sprite.b().outlineWidth = s.outlineWidth;
        if (s.outlineColor != null) {
          sprite.b().outlineColor = KDCore.Color.FromHex(s.outlineColor).CSS;
        }
        if (s.fontFace != null) {
          sprite.b().fontFace = s.fontFace;
        }
        sprite.b().fontItalic = s.fontItalic;
        sprite.visible = s.visible;
      }

      isReady() {
        var i, j, ref;
        if (this.bitmap != null) {
          if (!this.bitmap.isReady()) {
            return false;
          }
        }
        for (i = j = 0, ref = this.children.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
          if (!this.children[i].bitmap.isReady()) {
            return false;
          }
        }
        return true;
      }

      inPosition(point) {
        return this.isContainsPoint(point);
      }

      isUnderMouse() {
        return this.inPosition(TouchInput);
      }

      // * Из параметров плагина
      applyFontParam(font) {
        var b;
        if (font == null) {
          return;
        }
        b = this.b();
        if (font.size != null) {
          b.fontSize = font.size;
        }
        if (!String.isNullOrEmpty(font.face)) {
          b.fontFace = font.face;
        }
        if (font.italic != null) {
          b.fontItalic = font.italic;
        }
      }

      applyOutlineParam(outline) {
        var b;
        if (outline == null) {
          return;
        }
        b = this.b();
        if (outline.width != null) {
          b.outlineWidth = outline.width;
        }
        if (!String.isNullOrEmpty(outline.color)) {
          b.outlineColor = outline.color;
        }
      }

      static FromImg(filename, sourceFolder) {
        var s;
        s = new KDCore.Sprite();
        s.bImg(filename, sourceFolder);
        return s;
      }

      static FromBitmap(w, h) {
        var s;
        s = new KDCore.Sprite();
        s.bNew(w, h);
        return s;
      }

      static FromTextSettings(settings) {
        var s;
        s = KDCore.Sprite.FromBitmap(settings.textBoxWidth, settings.textBoxHeight);
        s.applyTextSettingsByExtraSettings(s, settings);
        s.textSettingsPosition = settings.position;
        return s;
      }

      // * Загрузчик из параметров плагина (безопасный)
      static FromParams(pluginParams) {
        var e, margins, s, size;
        try {
          size = pluginParams.size;
          s = KDCore.Sprite.FromBitmap(size.w, size.h);
          s.textSettingsPosition = pluginParams.alignment;
          margins = pluginParams.margins;
          if (margins != null) {
            s.move(margins.x, margins.y);
          }
          s.applyFontParam(pluginParams.font);
          s.applyOutlineParam(pluginParams.outline);
          if (!String.isNullOrEmpty(pluginParams.textColor)) {
            s.b().textColor = pluginParams.textColor;
          }
          if (pluginParams.visible != null) {
            s.visible = pluginParams.visible;
          }
          return s;
        } catch (error) {
          e = error;
          console.warn('Something wrong with Text Settings!', e);
          return KDCore.Sprite.FromBitmap(60, 30);
        }
      }

    };

    return Sprite;

  }).call(this, Sprite);
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.TimedUpdate = class TimedUpdate {
    constructor(interval, method) {
      this.interval = interval;
      this.method = method;
      this._timer = 0;
      this._once = false;
    }

    update() {
      if (this.interval == null) {
        return;
      }
      if (this._timer++ >= this.interval) {
        this.call();
        this._timer = 0;
        if (this._once === true) {
          return this.stop();
        }
      }
    }

    once() {
      return this._once = true;
    }

    onUpdate(method) {
      this.method = method;
    }

    stop() {
      return this.interval = null;
    }

    isAlive() {
      return this.interval != null;
    }

    // * Рандомизировать интервал @interval (-min, +max)
    applyTimeRange(min, max) {
      var value;
      if (!this.isAlive()) {
        return;
      }
      value = KDCore.SDK.rand(min, max);
      return this.interval += value;
    }

    call() {
      if (this.method != null) {
        return this.method();
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  
    // * Button (Sprite_XButton)

    //@[AUTO EXTEND]
  //?DEPRECATED
  return KDCore.Button = class Button extends Sprite {
    constructor() {
      super();
      this._mouseIn = false;
      this._touching = false;
      this._slowUpdateActive = false;
      this._localMode = false;
      this._images = [];
      this._checkAlpha = false;
      this._textSprite = null;
      this._textPosition = 0;
      this._override = false; // * TouchClick in game messages not work anymore if TRUE
      this._clickHandlers = [];
      this._manualHided = false;
      this._manualDisabled = false;
      this._condition = null; // * Условие для Visible
      this._condition2 = null; // * Условие для Enable \ Disable
      this._disabled = false;
      this._infoData = null;
      this._isNeedShowText = false;
      return;
    }

    isMouseInButton() {
      return this._mouseIn === true;
    }

    isActive() {
      return this.visible === true;
    }

    activateSlowUpdate() {
      return this._slowUpdateActive = true;
    }

    setLocalMode() {
      this._realX = this.x;
      this._realY = this.y;
      return this._localMode = true;
    }

    setAlphaMode() {
      return this._checkAlpha = true;
    }

    // * above, below
    setTextPosition(position) {
      return this._textPosition = position;
    }

    setHelpText(text, size) {
      return this._createText(text, size);
    }

    setInfoData(data) {
      return this._infoData = data;
    }

    setOverrideMode() {
      return this._override = true;
    }

    isOverride() {
      return this._override === true && this.isActive() && this.touchInButton();
    }

    isDisabled() {
      return this._disabled === true;
    }

    isEnabled() {
      return !this.isDisabled();
    }

    isNeedShowText() {
      return this._isNeedShowText === true;
    }

    addClickHandler(method) {
      return this._clickHandlers.push(method);
    }

    clearClickHandlers() {
      return this._clickHandlers = [];
    }

    isLocalMode() {
      return this._localMode === true;
    }

    setCondition(method) {
      return this._condition = method;
    }

    setConditionForDisable(method) {
      return this._condition2 = method;
    }

    getInfoData() {
      return this._infoData;
    }

    simulateClick() { //?NEW
      return this.applyClickedState();
    }

    simulateClickManual() { //?NEW
      this.simulateClick();
      return setTimeout((() => {
        try {
          return this.applyNormalState();
        } catch (error) {

        }
      }), 50);
    }

    prepare() { //?NEW
      return this.slowUpdate();
    }

    realX() {
      if (this.isLocalMode()) {
        return this._realX;
      } else {
        return this.x;
      }
    }

    realY() {
      if (this.isLocalMode()) {
        return this._realY;
      } else {
        return this.y;
      }
    }

    show() {
      this.visible = true;
      return this._manualHided = false;
    }

    hide() {
      this.visible = false;
      return this._manualHided = true;
    }

    disable() {
      this._disabled = true;
      this._manualDisabled = true;
      this.refreshEnDisState();
      return this._mouseIn = false;
    }

    enable() {
      this._disabled = false;
      this._manualDisabled = false;
      return this.refreshEnDisState();
    }

    update() {
      super.update();
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseClick();
      this.updatePosition();
      if (!this._slowUpdateActive) {
        this.slowUpdate();
      }
      return this.updateComplexTextVisible();
    }

    slowUpdate() {
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseTracking();
      this.updateConditionForVisible();
      return this.updateConditionForEnabling();
    }

    updateMouseTracking() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.cursorInButton()) {
        this._onMouseEnter();
        return this._mouseIn = true;
      } else {
        this._onMouseLeave();
        return this._mouseIn = false;
      }
    }

    // * In MZ TouchInput always have X,Y
    cursorInButton() {
      return this.touchInButton();
    }

    xyInButton(x, y) {
      var inRect, rect, rx, ry;
      rx = KDCore.SDK.toGlobalCoord(this, 'x');
      ry = KDCore.SDK.toGlobalCoord(this, 'y');
      rect = new PIXI.Rectangle(rx, ry, this._realWidth(), this._realHeight());
      inRect = rect.contains(x, y);
      if (inRect === true && this._checkAlpha === true) {
        return this._checkAlphaPixel(x - rx, y - ry);
      } else {
        return inRect;
      }
    }

    _realWidth() {
      if (this._hasImage()) {
        return this._mainImage().width;
      } else {
        return this.width;
      }
    }

    _hasImage() {
      return this._mainImage() != null;
    }

    _mainImage() {
      return this._images[0];
    }

    _realHeight() {
      if (this._hasImage()) {
        return this._mainImage().height;
      } else {
        return this.height;
      }
    }

    _checkAlphaPixel(x, y) {
      var pixel;
      pixel = this._hasImage() ? this._mainImage().bitmap.getAlphaPixel(x, y) : this.bitmap.getAlphaPixel(x, y);
      return pixel >= 200;
    }

    _onMouseEnter() {
      if (this._mouseIn === true) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyCoverState();
      }
      this._showText();
      if (this.getInfoData() != null) {
        return this._startComplexTimer();
      }
    }

    _onMouseLeave() {
      if (this._mouseIn === false) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyNormalState();
      }
      this._hideText();
      return this._stopComplexTimer();
    }

    _showText() {
      if (this._textSprite == null) {
        return;
      }
      this._updateTextPosition();
      return this._textSprite.visible = true;
    }

    _hideText() {
      if (this._textSprite == null) {
        return;
      }
      return this._textSprite.visible = false;
    }

    _startComplexTimer() {
      this._stopComplexTimer();
      return this._cTimer = setTimeout((() => {
        if (this._mouseIn === true) {
          return this._isNeedShowText = true;
        }
      }), 1000);
    }

    _stopComplexTimer() {
      if (this._cTimer != null) {
        clearTimeout(this._cTimer);
      }
      return this._isNeedShowText = false;
    }

    updateMouseClick() {
      if (!this.isActive()) {
        this._unTouch();
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.touchInButton()) {
        this._touching = true;
        this.applyClickedState();
      }
      if (this._touching === true) {
        if (TouchInput.isReleased() || !this.touchInButton()) {
          this._unTouch();
          if (TouchInput.isReleased()) {
            return this.callClickHandler();
          }
        }
      }
    }

    _unTouch() {
      this._touching = false;
      if (this.touchInButton()) {
        return this.applyCoverState();
      } else {
        return this.applyNormalState();
      }
    }

    touchInButton() {
      return this.xyInButton(TouchInput.x, TouchInput.y);
    }

    callClickHandler() {
      if (this._clickHandlers.length > 0) {
        return this._clickHandlers.forEach(function(method) {
          return method();
        });
      }
    }

    updatePosition() {
      var p;
      if (!this._localMode) {
        return;
      }
      p = new KDCore.Point(this._realX, this._realY);
      return this.move(p.screenX(), p.screenY());
    }

    updateConditionForVisible() {
      var result;
      if (this._condition == null) {
        return;
      }
      if (this._manualHided === true) {
        return;
      }
      try {
        result = this._condition();
        return this.visible = !result;
      } catch (error) {
        console.warn('wrong condition in button');
        return this.visible = true;
      }
    }

    updateConditionForEnabling() {
      if (!this._condition2) {
        return;
      }
      if (this._manualDisabled === true) {
        return;
      }
      try {
        this._disabled = this._condition2();
        return this.refreshEnDisState();
      } catch (error) {
        console.warn('wrong condition in button for enable state');
        return this.disable();
      }
    }

    setButtonImages(img1, img2, img3, img4) {
      if (this._images != null) {
        this._images.forEach(function(img) {
          if (img != null) {
            return img.parent.removeChild(img);
          }
        });
      }
      this._images = [new Sprite(img1), img2 != null ? new Sprite(img2) : void 0, img3 != null ? new Sprite(img3) : void 0, img4 != null ? new Sprite(img4) : void 0];
      this._images.forEach((img) => {
        if (img != null) {
          return this.addChild(img);
        }
      });
      return this.applyNormalState();
    }

    applyNormalState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[0]) != null ? ref.visible = true : void 0;
    }

    refreshImages() {
      return this._images.forEach(function(img) {
        return img != null ? img.visible = false : void 0;
      });
    }

    applyCoverState() {
      this.refreshImages();
      if (this._images[1] != null) {
        return this._images[1].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    applyClickedState() {
      this.refreshImages();
      if (this._images[2] != null) {
        return this._images[2].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    _createText(text, size) {
      var h, w;
      if (this._textSprite) {
        this.removeChild(this._textSprite);
      }
      w = Math.round(((size / 10) + 1) * 5 * text.length);
      h = size + 4;
      this._textSprite = new Sprite(new Bitmap(w, h));
      this._textSprite.bitmap.fontSize = size;
      this._textSprite.bitmap.drawText(text, 0, h / 2, w, 1, 'center');
      this._textSprite.visible = false;
      return this.addChild(this._textSprite);
    }

    _updateTextPosition() {
      var nx, ny;
      if (!this._textSprite) {
        return;
      }
      nx = this._realWidth() / 2 - this._textSprite.width / 2;
      if (this._textPosition === 0) {
        ny = -this._textSprite.height;
      } else {
        ny = this._realHeight() + this._textSprite.height / 2;
      }
      return this._textSprite.move(nx, ny);
    }

    applyDisableState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[3]) != null ? ref.visible = true : void 0;
    }

    refreshEnDisState() {
      if (this.isDisabled()) {
        this.applyDisableState();
        return this._hideText();
      } else {
        if (this._mouseIn === false) {
          return this.applyNormalState();
        }
      }
    }

    //else
    //    do @applyCoverState
    updateComplexTextVisible() {}

    applyScale(mod) {
      var i, img, len, ref;
      ref = this._images;
      for (i = 0, len = ref.length; i < len; i++) {
        img = ref[i];
        if (img != null) {
          img.scale.x = mod;
          img.scale.y = mod;
        }
      }
    }

    static FromSet(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img0, img0);
      return button;
    }

    static FromSetFull(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1, img2, img3;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      img2 = getterFunc(imgName + "_02");
      img3 = getterFunc(imgName + "_03");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img2, img3);
      return button;
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ButtonsGroup;
  // * Класс для реализации набора кнопок переключателей (Tabs)
  // * Когда только одна кнопка может быть нажата (выбрана)

    //rev 07.10.21
  Sprite_ButtonsGroup = class Sprite_ButtonsGroup extends KDCore.Sprite {
    // buttonsArray = [
    //       {image: NAME, position: [X,Y]}, ...
    //    ]
    constructor(buttonsArray, activeIndex, clickCallback) {
      var button, i, len;
      super();
      this.clickCallback = clickCallback;
      this._buttons = [];
      for (i = 0, len = buttonsArray.length; i < len; i++) {
        button = buttonsArray[i];
        this._createButton(button);
      }
      this._onButtonClick(activeIndex);
      return;
    }

    getSelectedIndex() {
      return this._buttons.findIndex(function(btn) {
        return !btn.isEnabled();
      });
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ButtonsGroup.prototype;
    _._createButton = function({image, position}) {
      var btn, index, method;
      // * Так как кнопки работают как переключатели, то 03 должен быть всегда
      index = this._buttons.length;
      btn = new KDCore.ButtonM(image, true, "Alpha");
      btn.move(position);
      method = () => {
        return this._onButtonClick(index);
      };
      btn.addClickHandler(method);
      this._buttons.push(btn);
      this.add(btn);
    };
    _._onButtonClick = function(index = 0) {
      var ref;
      this._resetAllButtons();
      if ((ref = this._buttons[index]) != null) {
        ref.disable(); // * Нажата
      }
      if (this.clickCallback != null) {
        this.clickCallback();
      }
    };
    _._resetAllButtons = function() {
      var btn, i, len, ref;
      ref = this._buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        if (btn != null) {
          btn.enable();
        }
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ButtonsGroup = Sprite_ButtonsGroup;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad((function() {
  var Sprite_TilingFrame;
  Sprite_TilingFrame = class Sprite_TilingFrame extends KDCore.Sprite {
    constructor(width, height, skinBitmap) {
      super();
      this.width = width;
      this.height = height;
      this.skinBitmap = skinBitmap;
      this._createParts();
      this._refreshAll();
    }

    _createParts() {
      var i, j;
      this.backSprite = new Sprite();
      this.addChild(this.backSprite);
      this.content = new Sprite();
      this.addChild(this.content);
      this._outFrame = new Sprite();
      for (i = j = 0; j < 8; i = ++j) {
        this._outFrame.addChild(new Sprite());
      }
      return this.addChild(this._outFrame);
    }

    // * Отступ, чтобы за рамку не выходить
    _fillPadding() {
      return 2;
    }

    // * Размер частей на картинке
    _fillImagePartWidth() {
      return 96;
    }

    _fillImagePartHeight() {
      return 96;
    }

    // * Толщина рамки
    _frameThickness() {
      return 12;
    }

    _refreshAll() {
      this._refreshBack();
      return this._refreshTFrame();
    }

    _refreshBack() {
      var fh, fw, h, m, sprite, w;
      m = this._fillPadding();
      w = Math.max(0, this.width - m * 2);
      h = Math.max(0, this.height - m * 2);
      sprite = this.backSprite;
      sprite.bitmap = this.skinBitmap;
      // * Координаты фона из картинки
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      sprite.setFrame(0, 0, fw, fh);
      sprite.move(m, m);
      sprite.scale.x = w / fw;
      return sprite.scale.y = h / fh;
    }

    _refreshTFrame() {
      var drect, fh, fw, j, len, m, ref, spr, srect;
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      // * Положение назначения
      drect = {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      };
      // * Координаты рамки на картинке
      srect = {
        x: fw,
        y: 0,
        width: fw,
        height: fh
      };
      m = this._frameThickness(); // * Толщина
      ref = this._outFrame.children;
      for (j = 0, len = ref.length; j < len; j++) {
        spr = ref[j];
        spr.bitmap = this.skinBitmap;
      }
      if (KDCore.isMZ()) {
        Window.prototype._setRectPartsGeometry.call(this, this._outFrame, srect, drect, m);
      } else {
        this._setRectPartsGeometry(this._outFrame, srect, drect, m);
      }
    }

    // * Этот метод существует в MZ, но нет в MV
    //? From MZ
    _setRectPartsGeometry(sprite, srect, drect, m) {
      var child, children, dh, dmh, dmw, dw, dx, dy, j, len, sh, smh, smw, sw, sx, sy;
      sx = srect.x;
      sy = srect.y;
      sw = srect.width;
      sh = srect.height;
      dx = drect.x;
      dy = drect.y;
      dw = drect.width;
      dh = drect.height;
      smw = sw - m * 2;
      smh = sh - m * 2;
      dmw = dw - m * 2;
      dmh = dh - m * 2;
      children = sprite.children;
      sprite.setFrame(0, 0, dw, dh);
      sprite.move(dx, dy);
      // corner
      children[0].setFrame(sx, sy, m, m);
      children[1].setFrame(sx + sw - m, sy, m, m);
      children[2].setFrame(sx, sy + sw - m, m, m);
      children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
      children[0].move(0, 0);
      children[1].move(dw - m, 0);
      children[2].move(0, dh - m);
      children[3].move(dw - m, dh - m);
      // edge
      children[4].move(m, 0);
      children[5].move(m, dh - m);
      children[6].move(0, m);
      children[7].move(dw - m, m);
      children[4].setFrame(sx + m, sy, smw, m);
      children[5].setFrame(sx + m, sy + sw - m, smw, m);
      children[6].setFrame(sx, sy + m, m, smh);
      children[7].setFrame(sx + sw - m, sy + m, m, smh);
      children[4].scale.x = dmw / smw;
      children[5].scale.x = dmw / smw;
      children[6].scale.y = dmh / smh;
      children[7].scale.y = dmh / smh;
      // center
      if (children[8] != null) {
        children[8].setFrame(sx + m, sy + m, smw, smh);
        children[8].move(m, m);
        children[8].scale.x = dmw / smw;
        children[8].scale.y = dmh / smh;
      }
      for (j = 0, len = children.length; j < len; j++) {
        child = children[j];
        child.visible = dw > 0 && dh > 0;
      }
    }

  };
  return KDCore.Sprite_TilingFrame = Sprite_TilingFrame;
}));


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Window_ExtTextLineBase;
  // * Данное окно используется как основа для Sprite_UITextExt
  //rev 07.10.21
  Window_ExtTextLineBase = class Window_ExtTextLineBase extends Window_Base {
    constructor(rect, fontSettings) {
      super(rect);
      this.fontSettings = fontSettings;
      this.createContents();
      // * Всегда прозрачное окно
      this.setBackgroundType(2);
    }

    // * Нет отступов
    updatePadding() {
      return this.padding = 0;
    }

    // * Нет отступов
    itemPadding() {
      return 0;
    }

    textPadding() {
      return 0;
    }

    standardPadding() {
      return 0;
    }

    contentsWidth() {
      return this.width;
    }

    contentsHeight() {
      return this.height;
    }

    // * Более гибкая настройка размера текста при { }
    makeFontBigger() {
      return this.contents.fontSize += 1;
    }

    makeFontSmaller() {
      if (this.contents.fontSize > 1) {
        return this.contents.fontSize -= 1;
      }
    }

    // * Применение своих шрифта и размера текста
    resetFontSettings() {
      super.resetFontSettings();
      if (this.fontSettings == null) {
        return;
      }
      if (String.any(this.fontSettings.face)) {
        this.contents.fontFace = this.fontSettings.face;
      }
      if (this.fontSettings.size > 0) {
        this.contents.fontSize = this.fontSettings.size;
      }
      if (this.fontSettings.italic != null) {
        this.contents.fontItalic = this.fontSettings.italic;
      }
    }

  };
  return KDCore.Window_ExtTextLineBase = Window_ExtTextLineBase;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button M
  //------------------------------------------------------------------------------
  //@[AUTO EXTEND]
  // * Button Mini - упрощённый класс Sprite_XButton (KDCore.Button)

    // * Принимает название файла изображения кнопки без _00
  // * Названия изображения должны быть в стандартном формате _00, _01, [_03]
  // * _02 - не используются в этом классе

    // * Класс использует глобальную временную переменную для определения находится ли мышь в зоне кнопки

    // * Если isFull - true, значит нужен _03
  KDCore.ButtonM = class ButtonM extends KDCore.Sprite {
    constructor(filename, isFull = false, sourceFolder = null) {
      super();
      this._bitmaps = [];
      this._disabled = false;
      this._isTriggered = false;
      // * Когда произошло нажатие на кнопку
      this._handler = null;
      this._isCanBeClicked = true;
      this._isManualHoverMode = false;
      this._isManualSelected = false;
      this._loadBitmaps(filename, isFull, sourceFolder);
      this._setImageState(0);
      this._createThread();
    }

    setManualHover() {
      return this._isManualHoverMode = true;
    }

    disableManualHover() {
      return this._isManualHoverMode = false;
    }

    setManualSelected(_isManualSelected) {
      this._isManualSelected = _isManualSelected;
    }

    enableClick() {
      return this._isCanBeClicked = true;
    }

    disableClick() {
      return this._isCanBeClicked = false;
    }

    desaturate() {
      this.filters = [new PIXI.filters.ColorMatrixFilter()];
      this.filters[0].desaturate();
    }

    isMouseIn() {
      if (this._isManualHoverMode === true) {
        return this._isManualSelected;
      } else {
        return this.isUnderMouse() && this.visible === true;
      }
    }

    isActive() {
      if (this._isCanBeClicked === false) {
        return false;
      }
      if (this.parent != null) {
        return this.parent.visible === true && this.visible === true;
      } else {
        return this.visible === true;
      }
    }

    isDisabled() {
      return this._disabled === true;
    }

    addClickHandler(_handler) {
      this._handler = _handler;
    }

    clearClickHandler() {
      return this._handler = null;
    }

    // * Воспроизводит визуальный эффект нажатия
    simulateClick() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.isMouseIn()) {
        return;
      }
      this._startSimulation();
    }

    isEnabled() {
      return !this.isDisabled();
    }

    refreshState(isEnable = true) {
      if (isEnable === true) {
        if (this.isDisabled()) {
          this.enable();
        }
      } else {
        if (this.isEnabled()) {
          this.disable();
        }
      }
    }

    disable() {
      this._disabled = true;
      return this._setImageState(2);
    }

    enable() {
      this._disabled = false;
      return this._setImageState(0);
    }

    click() {
      if (this._handler != null) {
        return this._handler();
      }
    }

    update() {
      super.update();
      return this._updateMain();
    }

  };
  return (function() {    
    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ ButtonM Implementation
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _, alias_SM_isAnyButtonPressed, alias_SM_onMapLoaded;
    //@[DEFINES]
    _ = KDCore.ButtonM.prototype;
    _._loadBitmaps = function(filename, isFull = false, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(filename + '_00'));
      this._bitmaps.push(getterFunc(filename + '_01'));
      if (isFull) {
        this._bitmaps.push(getterFunc(filename + '_03'));
      }
    };
    _._getGetter = function(sourceFolder = null) {
      var getterFunc;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder !== null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap('img/' + sourceFolder + '/', filename);
        };
      }
      return getterFunc;
    };
    _._setImageState = function(index = 0) {
      if (this._bitmaps[index] == null) {
        index = 0;
      }
      this.bitmap = this._bitmaps[index];
      this._lastState = index;
    };
    _._createThread = function() {
      this.hoverThread = new KDCore.TimedUpdate(3, this._updateHover.bind(this));
      this.hoverThread.applyTimeRange(-1, 1);
      this.hoverThread.call();
    };
    //?[DYNAMIC]
    _._updateMain = function() {
      this._updateMouseLogic();
      if (!this.isActive()) {
        if (($gameTemp.kdButtonUnderMouse != null) && $gameTemp.kdButtonUnderMouse === this) {
          return $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseLogic = function() {
      this.hoverThread.update();
      return this._updateMouseClick();
    };
    _._updateHover = function() {
      if (!this.isActive()) {
        return;
      }
      // * чтобы эффект нажатия не прекратить
      if (this._isTriggered === true) {
        return;
      }
      if (this.isMouseIn()) {
        if (this._lastState !== 1) {
          if (!this.isDisabled()) {
            this._setImageState(1);
          }
          $gameTemp.kdButtonUnderMouse = this;
        }
      } else {
        if (this._lastState !== 0) {
          if (!this.isDisabled()) {
            this._setImageState(0);
          }
          if ($gameTemp.kdButtonUnderMouse === this) {
            $gameTemp.kdButtonUnderMouse = null;
          }
        } else if ($gameTemp.kdButtonUnderMouse === this) {
          $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseClick = function() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.isMouseIn()) {
        this._isTriggered = true;
        this._setImageState(0);
      }
      if (this._isTriggered === true) {
        if (TouchInput.isReleased()) {
          this._isTriggered = false;
          if (this.isMouseIn()) {
            this.click();
          }
        }
      }
    };
    _._startSimulation = function() {
      this._setImageState(1);
      this._simulateThread = new KDCore.TimedUpdate(10, () => {
        return this._setImageState(0);
      });
      this._simulateThread.once();
      return this._updateMain = this._updateMouseClickSimulated;
    };
    _._updateMouseClickSimulated = function() {
      this._simulateThread.update();
      if (!this._simulateThread.isAlive()) {
        this._simulateThread = null;
        this._updateMain = this._updateMouseLogic;
      }
    };
    // * Теперь при нажатии на любую кнопку, игрок не будет ходить по карте

    //@[ALIAS]
    alias_SM_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
    Scene_Map.prototype.isAnyButtonPressed = function() {
      if ($gameTemp.kdButtonUnderMouse != null) {
        return true;
      } else {
        return alias_SM_isAnyButtonPressed.call(this);
      }
    };
    //TODO: Добавить доп. проверку?
    //@[ALIAS]
    alias_SM_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function() {
      $gameTemp.kdButtonUnderMouse = null;
      setTimeout((function() {
        return $gameTemp.kdButtonUnderMouse = null;
      }), 50);
      return alias_SM_onMapLoaded.call(this);
    };
  })();
});

// ■ END ButtonM Implementation
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button Mini User - класс с определением файла каждого состояния отдельно
  // * Принимает теже аргументы, только заместо имени файла, три изображения (имени)
  // ? states = { main, hover, disabled }
  return KDCore.ButtonMU = class ButtonMU extends KDCore.ButtonM {
    constructor() {
      super(...arguments);
    }

    //$[OVER]
    _loadBitmaps(states, isFull = true, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(states.main));
      this._bitmaps.push(getterFunc(states.hover));
      // * Optional 03
      if (String.any(states.disabled)) {
        this._bitmaps.push(getterFunc(states.disabled));
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_TilingLine;
  Sprite_TilingLine = class Sprite_TilingLine extends KDCore.Sprite_TilingFrame {
    constructor() {
      super(...arguments);
    }

    //$[OVER BASE ALL BELOW]
    _fillPadding() {
      return 0;
    }

    _refreshTFrame() {} // * EMPTY

    _fillImagePartWidth() {
      return 4;
    }

    _fillImagePartHeight() {
      return 26;
    }

  };
  return KDCore.Sprite_TilingLine = Sprite_TilingLine;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Пространство имён для всех UIElements
  KDCore.UI = KDCore.UI || {};
  (function() {    // * Общий класс для всех UI элементов
    //?rev 13.10.20
    var Sprite_UIElement;
    Sprite_UIElement = (function() {
      // * ABSTRACT значит что класс сам по себе ничего не создаёт, не хранит данные
      //@[ABSTRACT]
      class Sprite_UIElement extends KDCore.Sprite {
        constructor(params) {
          super();
          this.params = params;
          this._init();
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true
          };
        }

        // * Общий метод (есть у всех элементов)
        // * По умолчанию вызывает drawText, но потомки могут переопределить
        draw() {
          return this.drawText(...arguments);
        }

        // * Общий метод
        drawText() {} // * EMPTY

        
          // * Если изначально невидимый (из параметров), то не активный вообще
        isActive() {
          return this.params.visible === true;
        }

        rootImageFolder() {
          return Sprite_UIElement.RootImageFolder;
        }

        // * Сделать чёрно белым
        desaturate() {
          this.filters = [new PIXI.filters.ColorMatrixFilter()];
          this.filters[0].desaturate();
        }

        // * Общий метод (можно ли редактировать визуально)
        isCanBeEdited() {
          return false;
        }

        // * Общий метод (надо ли скрывать при игровом сообщнии)
        isHaveHideWithMessageFlag() {
          return false;
        }

        // * Общий метод (находится ли объект под мышкой)
        isUnderMouse() {
          var ref;
          return (ref = this.zeroChild()) != null ? ref.isUnderMouse() : void 0;
        }

        // * Параметры первого элемента (если он есть)
        realWidth() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realWidth();
            } else {
              return child.width;
            }
          }
          return 0;
        }

        realHeight() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realHeight();
            } else {
              return child.height;
            }
          }
          return 0;
        }

        // * Первый "физический" элемент (спрайт)
        zeroChild() {
          return this.children[0];
        }

        // * Метод восстановления значения на стандартные настройки
        reset(property) {
          var e;
          try {
            switch (property) {
              case "position":
                this._resetPosition();
                break;
              default:
                this[property] = this.params[property];
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }

      };

      // * Корневая директория для изображений
      Sprite_UIElement.RootImageFolder = "Alpha";

      return Sprite_UIElement;

    }).call(this);
    KDCore.UI.Sprite_UIElement = Sprite_UIElement;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIElement.prototype;
    _._init = function() {
      var e;
      this._prepare();
      try {
        return this._createContent();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        // * Если при создании произошла ошибка, отключаем элемент
        return this.isActive = function() {
          return false;
        };
      }
    };
    
    // * Подготовка элемента (проверка параметров)
    _._prepare = function() {
      if (this.params == null) {
        this.params = this.defaultParams();
      }
      return this.visible = this.params.visible;
    };
    // * Наследники создают свои элементы в этом методе
    _._createContent = function() {}; // * EMPTY
    
    // * Сброс позиции
    _._resetPosition = function() {
      var e, x, y;
      if (this.params.position == null) {
        return;
      }
      try {
        ({x, y} = this.params.position);
        this.move(x, y);
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIButton;
    // * Кнопка на экране, можно нажимать
    Sprite_UIButton = class Sprite_UIButton extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: "Button_Inventory",
          isHaveDisabled: true,
          click: "console.log('click')" // * число или код
        };
      }

      // * Кнопка не поддерживает перерисовку
      draw() {} // * EMPTY

      disable() {
        var ref;
        return (ref = this.button) != null ? ref.disable() : void 0;
      }

      enable() {
        var ref;
        return (ref = this.button) != null ? ref.enable() : void 0;
      }

      setState(isEnabled) {
        if (isEnabled) {
          return this.enable();
        } else {
          return this.disable();
        }
      }

      
        // * Просто вызов метода
      call() {
        var ref;
        return (ref = this.button) != null ? ref.click() : void 0;
      }

      // * Вызов метода с симуляцией нажатия
      click() {
        var ref, ref1;
        if ((ref = this.button) != null) {
          ref.click();
        }
        return (ref1 = this.button) != null ? ref1.simulateClick() : void 0;
      }

    };
    KDCore.UI.Sprite_UIButton = Sprite_UIButton;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIButton.prototype;
    //$[OVER]
    _._createContent = function() {
      if (this.params.image.isEmpty()) {
        KDCore.warning('You try create Button without image');
        return;
      }
      this.button = new KDCore.ButtonM(this.params.image, this.params.isHaveDisabled, this.rootImageFolder());
      this.add(this.button);
      return this._registerClickMethod();
    };
    _._registerClickMethod = function() {
      var commonEventId, e, method, ref, script;
      if (!String.any(this.params.click)) {
        return;
      }
      method = null;
      try {
        // * Если число, то значит общее событие
        if (isFinite(this.params.click)) {
          commonEventId = parseInt(this.params.click);
          if (commonEventId > 0) {
            method = function() {
              return $gameTemp.reserveCommonEvent(commonEventId);
            };
          }
        } else {
          // * Иначе скрипт
          script = this.params.click;
          method = function() {
            return eval(script);
          };
        }
        return this.button.addClickHandler(method);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return (ref = this.button) != null ? ref.clearClickHandler() : void 0;
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    // * Рисует лицо персонажа (из папки Faces)
    var Sprite_UIFace;
    Sprite_UIFace = class Sprite_UIFace extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          faceName: "Actor1",
          faceIndex: 0,
          mirror: false,
          size: 144
        };
      }

      draw() {
        return this.drawFace(...arguments);
      }

      drawFace(faceName, faceIndex) {
        return this._drawFaceWhenReady(faceName, faceIndex);
      }

    };
    KDCore.UI.Sprite_UIFace = Sprite_UIFace;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIFace.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createFaceSprite();
    };
    _._createFaceSprite = function() {
      this._faceSpr = KDCore.Sprite.FromBitmap(this.params.size);
      if (this.params.mirror === true) {
        this._flipFaceSpr();
      }
      this.add(this._faceSpr);
      this._drawFaceWhenReady(this.params.faceName, this.params.faceIndex);
    };
    _._flipFaceSpr = function() {
      this._faceSpr.scale.x = -1;
      this._faceSpr.x = this.params.size;
    };
    _._drawFaceWhenReady = function(name, index = 0) {
      var ref;
      if ((ref = this._faceSpr) != null) {
        ref.clear();
      }
      if (!String.any(name)) {
        return;
      }
      if (index < 0) {
        return;
      }
      this._drawOnReady = {name, index};
      this._faceSourceBitmap = ImageManager.loadFace(name);
      this._faceSourceBitmap.addLoadListener(this._drawFace.bind(this));
      this._drawFace();
    };
    _._drawFace = function() {
      var fh, fw, size, sx, sy;
      if (this._faceSpr == null) {
        return;
      }
      this._faceSpr.clear();
      if (!String.any(this._drawOnReady.name)) {
        return;
      }
      fw = ImageManager.faceWidth;
      fh = ImageManager.faceHeight;
      size = this.params.size;
      sx = (this._drawOnReady.index % 4) * fw;
      sy = Math.floor(this._drawOnReady.index / 4) * fh;
      this._faceSpr.bitmap.blt(this._faceSourceBitmap, sx, sy, fw, fh, 0, 0, size, size);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIGauge;
    Sprite_UIGauge = class Sprite_UIGauge extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          fill: "",
          foreground: "",
          mask: "",
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false
        };
      }

      draw() {
        return this.drawGauge(...arguments);
      }

      drawGauge(percent = 1) {
        this._lastValue = percent;
        return this._drawGauge(percent);
      }

      isVertical() {
        return this.params.vertical === true;
      }

    };
    KDCore.UI.Sprite_UIGauge = Sprite_UIGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIGauge.prototype;
    //$[OVER]
    _._createContent = function() {
      // * Загружается главное изображение, затем уже все остальные, т.к. нужны размеры
      return this._loadFillImage();
    };
    _._loadFillImage = function() {
      // * Главное изображение, поэтому если не указано, то ничего
      if (this.params.fill.isEmpty()) {
        KDCore.warning('You try create Gauge without fill image');
        return;
      }
      KDCore.Utils.loadImageAsync(this.rootImageFolder(), this.params.fill).then(this._createParts.bind(this));
    };
    // * Получаем изображение заполнения и создаём части (т.к. есть размеры)
    _._createParts = function(fillBitmap) {
      this.fillBitmap = fillBitmap;
      this._createBackground();
      this._createFillLayer();
      this._loadForeground();
      this._loadMask();
      return this._onReady();
    };
    _._createBackground = function() {
      this.background = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      this.background.b().fillAll(this.params.backColor);
      this.background.opacity = this.params.backOpacity;
      return this.add(this.background);
    };
    _._createFillLayer = function() {
      this.fillLayer = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      return this.add(this.fillLayer);
    };
    _._loadForeground = function() {
      var fore;
      if (String.isNullOrEmpty(this.params.foreground)) {
        return;
      }
      fore = KDCore.Sprite.FromImg(this.params.foreground, this.rootImageFolder());
      return this.add(fore);
    };
    _._loadMask = function() {
      var mask;
      if (String.isNullOrEmpty(this.params.mask)) {
        return;
      }
      mask = KDCore.Sprite.FromImg(this.params.mask, this.rootImageFolder());
      this.mask = mask;
      return this.add(mask);
    };
    // * Если что-то было до готовности, нарисовать
    _._onReady = function() {
      this.drawGauge(this._lastValue);
    };
    _._drawGauge = function(percent) {
      if (this.fillLayer == null) {
        return;
      }
      this.fillLayer.clear();
      if (this.isVertical()) {
        return this._drawVerGauge(percent);
      } else {
        return this._drawHorGauge(percent);
      }
    };
    _._drawHorGauge = function(percent) {
      var w;
      w = this.fillBitmap.width * percent;
      return this.fillLayer.b().blt(this.fillBitmap, 0, 0, w, this.fillLayer.height, 0, 0);
    };
    _._drawVerGauge = function(percent) {
      var h, hy;
      h = this.fillBitmap.height * percent;
      hy = this.fillBitmap.height - h;
      this.fillLayer.b().blt(this.fillBitmap, 0, 0, this.fillLayer.width, h, 0, hy);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIIcon;
    Sprite_UIIcon = class Sprite_UIIcon extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          index: 0,
          size: 32
        };
      }

      draw() {
        return this.drawIcon(...arguments);
      }

      drawIcon(index = 0) {
        this._lastValue = index;
        return this._drawIcon(index);
      }

    };
    KDCore.UI.Sprite_UIIcon = Sprite_UIIcon;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIIcon.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createIcon();
      return this._drawIcon(this.params.index);
    };
    _._createIcon = function() {
      this._icon = KDCore.Sprite.FromBitmap(this.params.size, this.params.size);
      this.add(this._icon);
      return this._onReady();
    };
    _._onReady = function() {
      return this.drawIcon(this._lastValue);
    };
    _._drawIcon = function(index) {
      this._icon.clear();
      if (KDCore.SDK.isString(index)) {
        this._drawImageIcon(index);
      } else {
        if (index <= 0) {
          return;
        }
        this._icon.drawIcon(0, 0, index, this.params.size);
      }
    };
    _._drawImageIcon = function(imageName) {
      return KDCore.Utils.loadImageAsync(this.rootImageFolder(), imageName).then((bitmap) => {
        return this._icon.drawIcon(0, 0, bitmap, this.params.size);
      });
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIImage;
    Sprite_UIImage = class Sprite_UIImage extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: ""
        };
      }

      draw() {
        return this.drawImage(...arguments);
      }

      drawImage(image) {
        return this._drawImage(image);
      }

    };
    KDCore.UI.Sprite_UIImage = Sprite_UIImage;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIImage.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._drawImage(this.params.image);
    };
    _._drawImage = function(image) {
      this._clearImage();
      if (!String.isNullOrEmpty(image)) {
        this._image = KDCore.Sprite.FromImg(image, this.rootImageFolder());
        this.add(this._image);
      }
    };
    _._clearImage = function() {
      if (this._image == null) {
        return;
      }
      this._image.visible = false;
      this.removeChild(this._image);
      return this._image = null;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIRect;
    Sprite_UIRect = class Sprite_UIRect extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          fillColor: "#FFFFFF".toCss(),
          fillOpacity: 255,
          borderColor: "#000000".toCss(),
          borderThickness: 1,
          borderOpacity: 255
        };
      }

      draw() {
        return this.fill(...arguments);
      }

      fill(color, opacity = 255) {
        return this._fill(color, opacity);
      }

      drawBorder(color, thickness = 1, opacity = 255) {
        return this._drawBorder(color, thickness, opacity);
      }

    };
    KDCore.UI.Sprite_UIRect = Sprite_UIRect;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIRect.prototype;
    //$[OVER]
    _._createContent = function() {
      if (String.any(this.params.fillColor)) {
        this._createFill();
        this.fill(this.params.fillColor, this.params.fillOpacity);
      }
      if (String.any(this.params.borderColor) && this.params.borderThickness > 0) {
        this._createBorder();
        return this.drawBorder(this.params.borderColor, this.params.borderThickness, this.params.borderOpacity);
      }
    };
    _._createFill = function() {
      this._fillSpr = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._fillSpr);
    };
    _._createBorder = function() {
      this._borderSprite = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._borderSprite);
    };
    _._fill = function(color, opacity) {
      if (this._fillSpr == null) {
        return;
      }
      this._fillSpr.fillAll(color);
      this._fillSpr.opacity = opacity;
    };
    _._drawBorder = function(color, thickness, opacity) {
      var b;
      if (this._borderSprite == null) {
        return;
      }
      this._borderSprite.clear();
      b = this._borderSprite.b();
      // * Top line
      b.fillRect(0, 0, b.width, thickness, color);
      // * Bottom line
      b.fillRect(0, b.height - thickness, b.width, thickness, color);
      // * Left line
      b.fillRect(0, 0, thickness, b.height, color);
      // * Right line
      b.fillRect(b.width - thickness, 0, thickness, b.height, color);
      return this._borderSprite.opacity = opacity;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UIText;
    Sprite_UIText = class Sprite_UIText extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          alignment: "center",
          font: {
            face: null,
            size: 18,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          outline: {
            color: null,
            width: 2
          },
          textColor: "#FFFFFF".toCss()
        };
      }

      //?DYNAMIC
      // * Сперва рисуем по готовности, а как загрузился спрайт, меняем
      drawText(text) {
        return this._drawTextWhenReady(text);
      }

      // * Сборка текста с учётом формата
      drawTextWithFormat(/*format string, arguments parameters... */) {
        var text;
        text = this._convertFormatedString(...arguments);
        this.drawText(text);
      }

      // * Пишет текст с определённым цветом (один раз)
      drawTextColor(text, colorCss) {
        if (this._textSpr == null) {
          return;
        }
        this._textSpr.b().textColor = colorCss;
        this.drawText(text);
        this._textSpr.b().textColor = this.params.textColor;
      }

    };
    KDCore.UI.Sprite_UIText = Sprite_UIText;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIText.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createTextSprite();
    };
    _._createTextSprite = function() {
      this._textSpr = KDCore.Sprite.FromParams(this.params);
      this._textSpr.onReady(this._onReady.bind(this));
      return this.add(this._textSpr);
    };
    // * Выполнить по готовности
    _._onReady = function() {
      // * Переключить метод, так как уже готов
      this.drawText = this._drawText;
      // * Написать то что нужно было до готовности (если есть)
      if (this._drawOnReady == null) {
        return;
      }
      this.drawText(this._drawOnReady);
      this._drawOnReady = null;
    };
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.clear();
      if (text != null) {
        this._textSpr.drawTextFull(text);
      }
    };
    // * Написать текст когда будет готов
    _._drawTextWhenReady = function(text) {
      this._drawOnReady = text;
      return this._drawText(text);
    };
    
    // * Заменить вхождения %1, %2 на значения параметров
    _._convertFormatedString = function(/*text, args...*/) {
      var e, i, j, ref, text;
      try {
        text = arguments[0];
        for (i = j = 1, ref = arguments.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
          try {
            if (arguments[i] == null) {
              continue;
            }
            text = text.replace("%" + i, arguments[i]);
          } catch (error) {
            e = error;
            KDCore.warning(e);
            text = "[wrong format text input]";
          }
        }
        return text;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return "[wrong format text input]";
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UITextExt;
    Sprite_UITextExt = class Sprite_UITextExt extends KDCore.UI.Sprite_UIText {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 200,
            h: 60
          },
          font: {
            face: null,
            size: 14,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          // * новые параметры (KDCore 2.7)
          //?null могут быть
          singleLine: false,
          forceCentered: false
        };
      }

      //$[OVER]
      // * Данный метод не поддерживается, так как тут основа не Sprite, а Window
      drawTextColor() {
        return this.drawText(...arguments);
      }

    };
    KDCore.UI.Sprite_UITextExt = Sprite_UITextExt;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextExt.prototype;
    //$[OVER]
    _._createTextSprite = function() {
      var rect;
      rect = new Rectangle(0, 0, this.params.size.w, this.params.size.h);
      this._textSpr = new KDCore.Window_ExtTextLineBase(rect, this.params.font);
      this._textSpr.x = this.params.margins.x || 0;
      this._textSpr.y = this.params.margins.y || 0;
      this.add(this._textSpr);
      // * На следующий кадр, чтобы не было потери текста (опасно)
      //setTimeout (=> @_onReady() ), 10
      this._onReady(); // * Сразу
    };
    
    //$[OVER]
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.contents.clear();
      if (this.params.forceCentered === true) {
        this._textSpr.drawTextExInCenter(text, 0, 0, this._textSpr.width, this._textSpr.height);
      } else {
        if (this.params.singleLine === true) {
          this._textSpr.drawTextEx(text, 0, 0, this._textSpr.width);
        } else {
          // * По умолчанию
          this._textSpr.drawTextExWithWordWrap(text, 0, 0, this._textSpr.width);
        }
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UITextWithBack;
    Sprite_UITextWithBack = class Sprite_UITextWithBack extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          text: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            alignment: "center",
            font: {
              face: null,
              size: 18,
              italic: false
            },
            margins: {
              x: 0,
              y: 0
            },
            outline: {
              color: null,
              width: 2
            },
            textColor: "#000000".toCss()
          },
          rect: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            fillColor: "#FFFFFF".toCss(),
            fillOpacity: 255,
            borderColor: "#000000".toCss(),
            borderThickness: 1,
            borderOpacity: 255
          },
          textMargins: {
            x: 0,
            y: 0
          }
        };
      }

      draw() {
        return this.drawText(...arguments);
      }

      // * Aргументы смотри в Sprite_UIText
      drawText() {
        return this.text.draw(...arguments);
      }

      drawTextColor() {
        return this.text.drawTextColor(...arguments);
      }

      // * Аргументы смотри в Sprite_UIRect
      fill() {
        return this.rect.fill(...arguments);
      }

      drawBorder() {
        return this.rect.drawBorder(...arguments);
      }

      //$[OVER]
      isUnderMouse() {
        return this.rect.isUnderMouse();
      }

    };
    KDCore.UI.Sprite_UITextWithBack = Sprite_UITextWithBack;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextWithBack.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createRect();
      return this._createText();
    };
    _._createRect = function() {
      this.rect = new KDCore.UI.Sprite_UIRect(this.params.rect);
      return this.addChild(this.rect);
    };
    _._createText = function() {
      var x, y;
      this.text = new KDCore.UI.Sprite_UIText(this.params.text);
      ({x, y} = this.params.textMargins);
      this.text.move(x, y);
      return this.addChild(this.text);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIColorGauge;
    Sprite_UIColorGauge = class Sprite_UIColorGauge extends KDCore.UI.Sprite_UIGauge {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 100,
            h: 40
          },
          fill: "#FFFFFF", // * В отличии от Gauge, тут цвет, а не картинка
          foreground: "", // картинка
          mask: "", // картинка
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false
        };
      }

    };
    KDCore.UI.Sprite_UIColorGauge = Sprite_UIColorGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIColorGauge.prototype;
    //$[OVER]
    // * Заместо изображения используем простой Bitmap с заливкой цвета
    _._loadFillImage = function() {
      var fillBitmap;
      fillBitmap = new Bitmap(this.params.size.w, this.params.size.h);
      fillBitmap.fillAll(this.params.fill);
      this._createParts(fillBitmap);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__processEscapeCharacter, _;
  //@[DEFINES]
  _ = Window_Base.prototype;
  //@[ALIAS]
  ALIAS__processEscapeCharacter = _.processEscapeCharacter;
  _.processEscapeCharacter = function(code, textState) {
    switch (code) {
      case 'CHEX':
        this.pProcessColorChangeHex(this.pObtainEscapeParamHexColor(textState));
        break;
      case 'ISZ':
        this.pProcessDrawIconSized(this.pObtainEscapeParamIconArr(textState), textState);
        break;
      case 'PSZ':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, false);
        break;
      case 'PSB':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, true);
        break;
      default:
        ALIAS__processEscapeCharacter.call(this, code, textState);
    }
  };
  //?NEW
  _.pObtainEscapeParamHexColor = function(textState) {
    var arr, regExp, textPart;
    regExp = /^\[(#?([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      return arr[1];
    } else {
      return "";
    }
  };
  //?NEW
  _.pObtainEscapeParamIconArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          return parseInt(i.trim());
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pObtainEscapeParamImgArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\w+,\s*\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          if (isFinite(i)) {
            return parseInt(i.trim());
          } else {
            return i;
          }
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pProcessColorChangeHex = function(colorHex) {
    var e;
    try {
      this.changeTextColor(colorHex);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.resetTextColor();
    }
  };
  //?NEW
  //?params: [INDEX, SIZE, DX, DY]
  _.pProcessDrawIconSized = function(params, textState) {
    var dx, dy, e, iconIndex, size, staticMargin, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      size = params[1];
      if (params[1] == null) {
        size = ImageManager.iconWidth;
      }
      if (params[2] == null) {
        params[2] = 0;
      }
      if (params[3] == null) {
        params[3] = 0;
      }
      iconIndex = params[0];
      dx = params[2];
      dy = params[3];
      staticMargin = 2;
      x = textState.x + staticMargin + dx;
      y = textState.y + staticMargin + dy;
      // * Только в режиме рисования
      if (textState.drawing === true) {
        this.contents.drawIcon(x, y, iconIndex, size);
      }
      textState.x += size + (staticMargin * 2) + dx;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  //?NEW
  //?params: [NAME, W, H, DX, DY]
  _.pProcessDrawPictureSized = function(params, textState, isUnderText = false) {
    var drawBitmap, drawProcess, e, height, name, source, width, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      name = params[0];
      if (!String.any(name)) {
        return;
      }
      width = params[1];
      height = params[2];
      if (params[3] == null) {
        params[3] = 0;
      }
      if (params[4] == null) {
        params[4] = 0;
      }
      x = textState.x + 2 + params[3];
      y = textState.y + 2 + params[4];
      drawBitmap = this.contents;
      source = this.pGetSourceImageForDrawPictureSized(name);
      if (textState.drawing === true) {
        drawProcess = function() {
          var e;
          try {
            if (drawBitmap == null) {
              return;
            }
            return drawBitmap.drawOnMe(source, x, y, width, height);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        source.addLoadListener(drawProcess);
      }
      if (isUnderText !== true) {
        // * Вариант, что текст не будет "перескакивать" за ширину картинки а пойдёт поверх (т.е. фоновая картинка)
        // * Если картине не preload, то может "вылезти" на текст потом, так как рисоваться будет позже
        textState.x += width + 4 + params[3];
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данный метод вынесен отдельно, чтобы можно было переопределять папки
  return _.pGetSourceImageForDrawPictureSized = function(name) {
    return ImageManager.loadPicture(name);
  };
});


// Generated by CoffeeScript 2.6.1



// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var FloatingWindow;
  
    // * Общий класс для всех окон на карте
  /*parameters
      {
          draggable: true,
          closeButton: true,
          moveToCenter: true,
          alwaysOnTop: true,
          header: true
      }
  */
  FloatingWindow = class FloatingWindow extends KDCore.Sprite {
    constructor(mainParent, windowW, windowH, parameters) {
      super();
      this.mainParent = mainParent;
      this.windowW = windowW;
      this.windowH = windowH;
      this.parameters = parameters;
      this._init();
      return;
    }

    static StaticSettings() {
      return {
        draggable: false,
        closeButton: false,
        moveToCenter: false,
        alwaysOnTop: false,
        header: false
      };
    }

    // * Статическое окно с дочерним
    static StaticWindow(parent, sub) {
      var p, w;
      p = KDCore.FloatingWindow.StaticSettings();
      w = new KDCore.FloatingWindow(parent, sub.width, sub.height, p);
      w.setSubWindow(sub);
      w.open();
      return w;
    }

    isActive() {
      return this.visible === true;
    }

    isReady() {
      return this._isReady === true;
    }

    isMouseIn() {
      return this.inPosition(TouchInput);
    }

    isOpen() {
      return this.isActive();
    }

    // * Дочернее окно (если есть)
    sub() {
      return this._subw;
    }

    setOnReadyHandler(_readyHandler) {
      this._readyHandler = _readyHandler;
      if ((this._readyHandler != null) && this._isReady === true) {
        return this._readyHandler();
      }
    }

    isDraggable() {
      return this._isDraggable === true && (this._headerSpr != null) && this._headerSpr.visible === true && this.isOpen();
    }

    setCloseHandler(_closeHandler) {
      this._closeHandler = _closeHandler;
    }

    callCloseHandler() {
      if (this._closeHandler != null) {
        return this._closeHandler();
      }
    }

    setDraggingHandler(_dragHandler) {
      this._dragHandler = _dragHandler;
    }

    setDragEndHandler(_dragEndHandler) {
      this._dragEndHandler = _dragEndHandler;
    }

    hideHeader() {} //TODO:

    hideCloseButton() {} //TODO:

    
      // * Сдвиг заголовка по X, чтобы рамку не задевал
    headerMarginX() {
      return 2;
    }

    // * Сдвиг заголовка по Y, чтобы рамку не задевал
    headerMarginY() {
      return 0;
    }

    // * Стандартная позиция кнопки "закрыть"
    closeButtonPosition() {
      return {
        x: this.width - 24,
        y: 4
      };
    }

    open() {
      if (this.isOpen()) {
        return;
      }
      this._open();
      this._afterOpen();
    }

    close() {
      if (!this.isOpen()) {
        return;
      }
      this._close();
      this._afterClose();
    }

    rootImageFolder() {
      return "Alpha/Windows";
    }

    update() {
      super.update();
      this._updateMouseCheckThread();
      this._updateDragging();
    }

    // * Добавить спрайт на специальный слой контента
    addContent(sprite) {
      return this._contentLayer.addChild(sprite);
    }

    // * Добавить дочернее окно
    setSubWindow(w) {
      this._subw = w;
      this.addContent(w);
    }

    destroy() {
      this._close();
      return Sprite.prototype.destroy.call(this);
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = FloatingWindow.prototype;
    _._init = function() {
      var ref;
      // * Окно всегда закрыто
      this.visible = false;
      // * Контент прогрузился?
      this._isReady = false;
      this._applyParameters();
      if (this._isAlwaysOnTop === false) {
        // * Если не всегда поверх окон, то добавляем сразу к родителю (один раз)
        if ((ref = this.mainParent) != null) {
          ref.addChild(this);
        }
      }
      this._initFloatingSystem();
      this._createLayers();
      this._loadWindowFrame();
    };
    // * Тут ничего не создавать, не двигать, так как
    // * конент создаётся Async, см. метод _createCustomElements
    _._applyParameters = function() {
      var p;
      this._applyDefaults();
      if (this.parameters == null) {
        return;
      }
      p = this.parameters;
      if (p.draggable != null) {
        this._isDraggable = p.draggable;
      }
      if (p.moveToCenter != null) {
        this._isMoveToCenter = p.moveToCenter;
      }
      if (p.header != null) {
        this._isHeaderVisible = p.header;
      }
      if (p.closeButton != null) {
        this._isHaveCloseButton = p.closeButton;
      }
      if (p.alwaysOnTop != null) {
        this._isAlwaysOnTop = p.alwaysOnTop;
      }
    };
    _._applyDefaults = function() {
      // * Окно можно перетаскивать мышкой (по умолчанию - да)
      this._isDraggable = true;
      this._isMoveToCenter = true;
      this._isHeaderVisible = true;
      this._isHaveCloseButton = true;
      this._isAlwaysOnTop = true;
    };
    _._initFloatingSystem = function() {
      if ($gameTemp._floatingWindows == null) {
        // * Создаём массив окон, он нужен для правильного
        // закрытия окон (по очереди) и перемещения drag and drop
        // с учётом верхнего окна
        $gameTemp._floatingWindows = [];
      }
      // * Вспомогательная переменная, чтобы не вызывать методы каждый кадр
      this._mouseIn = false;
      // * Тоже вспомогательная переменная
      this._dragging = false;
    };
    _._moveToStartPosition = function() {
      if (this._isMoveToCenter === true) {
        return this.moveToCenter(Graphics.width / 2, Graphics.height / 2);
      }
    };
    _._closeButtonClick = function() {
      // * При исчезании, кнопка не успевает себя "удалить"
      $gameTemp.kdButtonUnderMouse = null;
      this.callCloseHandler();
      return this.close();
    };
    (function() {      // * DRAGGING
      // -----------------------------------------------------------------------
      _._updateDragging = function() {
        if (!this.isDraggable()) {
          return;
        }
        // * Если мы уже двигаем окно, но мышка вышла за границы, то можно дальше двигать
        // * Только если мышка не в окне и не двигали ранее, то не проверяем
        if (this._mouseIn === false && this._dragging === false) {
          return;
        }
        // * Если существует объект который сейчас dragging
        if ($gameTemp.pkdDraggableInstance != null) {
          // * Если этот объект не этот объект, то выходим из метода
          if ($gameTemp.pkdDraggableInstance !== this) {
            return;
          }
        }
        if (TouchInput.isLongPressed()) {
          if (this._dragging === false) {
            this._onDragStart();
          } else {
            this._onDragging();
          }
        } else {
          this._stopDragging();
        }
      };
      _._onDragStart = function() {
        // * Проверка, в области Header или нет
        if (!this._isMouseInHeader()) {
          return;
        }
        // * Разница в координатах курсора и объекта, чтобы убрать эффект "прыжка"
        this.opacity = 200;
        this._deltaXY = this.getDeltaXY();
        this._dragging = true;
        // * Устанавливаем глобальную ссылку на объект перемещения
        $gameTemp.pkdDraggableInstance = this;
      };
      _.getDeltaXY = function() {
        var p;
        p = new KDCore.Point(this.x, this.y);
        return p.delta(TouchInput);
      };
      _._onDragging = function() {
        // * Защита от перетаскивания за края экрана
        if (!this._isNewMousePositionOnScreen()) {
          return;
        }
        this.move(TouchInput.x - this._deltaXY.x, TouchInput.y - this._deltaXY.y);
        if (this._dragHandler != null) {
          return this._dragHandler();
        }
      };
      _._stopDragging = function() {
        if (this._dragging === true) {
          this._dragging = false;
          this.opacity = 255;
          this._clearDraggableGlocalInstance();
          if (this._dragEndHandler != null) {
            this._dragEndHandler();
          }
        }
      };
      // * Освобождаем глобальную ссылку
      _._clearDraggableGlocalInstance = function() {
        if ($gameTemp.pkdDraggableInstance === this) {
          return $gameTemp.pkdDraggableInstance = null;
        }
      };
      _._isMouseInHeader = function() {
        if (this._headerSpr == null) {
          return false;
        }
        return this._headerSpr.isContainsPoint(TouchInput);
      };
      _._isNewMousePositionOnScreen = function() {
        return KDCore.Utils.isPointInScreen(TouchInput, 10);
      };
    })();
    (function() {      // -----------------------------------------------------------------------

      // * CREATE ELEMENTS
      // -----------------------------------------------------------------------
      
      // * Слои нужны, так как изображения загружаються асинхронно
      _._createLayers = function() {
        this._mainLayer = new Sprite();
        this._contentLayer = new Sprite();
        this._headerLayer = new Sprite();
        this._closeButtonLayer = new Sprite();
        this.addChild(this._mainLayer);
        this.addChild(this._contentLayer);
        this.addChild(this._headerLayer);
        this.addChild(this._closeButtonLayer);
      };
      _._loadWindowFrame = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "windowFrame").then(this._createWindow.bind(this));
      };
      _._createWindow = function(frameImage) {
        this.bitmap = new Bitmap(this.windowW, this.windowH);
        this.wFrame = new KDCore.Sprite_TilingFrame(this.windowW, this.windowH, frameImage);
        this._mainLayer.addChild(this.wFrame);
        this._createParts();
      };
      _._createParts = function() {
        this._loadHeader();
        if (this._isHaveCloseButton === true) {
          this._createCloseButton();
        }
        this._moveToStartPosition();
        this._createCustomElements();
        // * Окно готово
        this._isReady = true;
        if (this._readyHandler != null) {
          this._readyHandler();
        }
      };
      _._loadHeader = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "headerLine").then(this._createHeader.bind(this));
      };
      _._createHeader = function(headerLineImage) {
        var w;
        w = this.windowW - (this.headerMarginX() * 2);
        this._headerSpr = new KDCore.Sprite_TilingLine(w, headerLineImage.height, headerLineImage);
        this._headerSpr.x = this.headerMarginX();
        this._headerSpr.y = this.headerMarginY();
        this._headerLayer.addChild(this._headerSpr);
        if (this._isHeaderVisible === true) {
          // * Сдвигаем контент, чтобы было начало под заголовком
          this._contentLayer.y += headerLineImage.height + this.headerMarginY();
        } else {
          this._headerSpr.visible = false;
        }
      };
      _._createCloseButton = function() {
        this._closeButton = new KDCore.ButtonM("windowCloseButton", false, this.rootImageFolder());
        this._closeButtonLayer.addChild(this._closeButton);
        this._closeButton.move(this.closeButtonPosition());
        this._closeButton.addClickHandler(this._closeButtonClick.bind(this));
      };
      // * Наследники создают свои элементы в этом методе
      // * Есть специальный метод addContent()
      _._createCustomElements = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * MOUSE
      // -----------------------------------------------------------------------
      
      // * Определение если мышка в области окна
      //TODO: Есть проблема при открытии окна сразу под курсором
      _._registerMouseInOut = function() {
        if (!this.isOpen()) {
          return;
        }
        if (this.isMouseIn()) {
          if (this._mouseIn === false) {
            this._mouseIn = true;
            this._onMouseIn();
          }
        } else {
          if (this._mouseIn === true) {
            this._mouseIn = false;
            this._onMouseOut();
          }
        }
      };
      // * Используется похожая система что и в KDCore.ButtonM
      _._onMouseIn = function() {
        return $gameTemp.floatingWindowUnderMouse = this;
      };
      _._onMouseOut = function() {
        if ($gameTemp.floatingWindowUnderMouse === this) {
          return $gameTemp.floatingWindowUnderMouse = null;
        }
      };
      // * Будем проверять мышка ли в окне только при открытом окне
      _._createMouseCheckThread = function() {
        this._mouseCheckThread = new KDCore.TimedUpdate(1, this._registerMouseInOut.bind(this));
        this._updateMouseCheckThread = () => {
          return this._mouseCheckThread.update();
        };
        return this._mouseCheckThread.call();
      };
      // * Когда окно закрывается, никаких проверок, обнуляем метод
      _._destroyMouseCheckThread = function() {
        this._mouseCheckThread = null;
        return this._updateMouseCheckThread = function() {};
      };
      //?DYNAMIC
      _._updateMouseCheckThread = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * OPEN OR CLOSE
      // -----------------------------------------------------------------------
      _._open = function() {
        var ref;
        this.visible = true;
        $gameTemp._floatingWindows.push(this);
        if (this._isAlwaysOnTop === true) {
          // * Окно, которое открывается, всегда снова выше остальных (опция)
          if ((ref = this.mainParent) != null) {
            ref.addChild(this);
          }
        }
        return this._createMouseCheckThread();
      };
      _._afterOpen = function() {}; // * EMPTY
      _._close = function() {
        this.visible = false;
        if (this._isAlwaysOnTop === true) {
          this.removeFromParent();
        }
        this._clearDraggableGlocalInstance();
        $gameTemp._floatingWindows.delete(this);
        this._onMouseOut();
        return this._destroyMouseCheckThread();
      };
      _._afterClose = function() {}; // * EMPTY
    })();
  })();
  (function() {    // ■ END PRIVATE.coffee
    //---------------------------------------------------------------------------

    // * Если окно под курсором, нельзя нажимать на карте для движения игрока
    // -----------------------------------------------------------------------
    (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Scene_Map.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__isAnyButtonPressed, ALIAS__processMapTouch, _;
      
      //@[DEFINES]
      _ = Scene_Map.prototype;
      if (KDCore.isMZ()) {
        //@[ALIAS]
        ALIAS__isAnyButtonPressed = _.isAnyButtonPressed;
        _.isAnyButtonPressed = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return true;
          } else {
            return ALIAS__isAnyButtonPressed.call(this);
          }
        };
      } else {
        //@[ALIAS]
        ALIAS__processMapTouch = _.processMapTouch;
        _.processMapTouch = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return;
          }
          return ALIAS__processMapTouch.call(this);
        };
      }
    })();
  })();
  //@[EXTEND]
  // ■ END Scene_Map.coffee
  //---------------------------------------------------------------------------
  return KDCore.FloatingWindow = FloatingWindow;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var HUI;
  // * Html UI Manager
  // * Набор инструментов для работы с HTML элементами интерфейса
  HUI = function() {};
  (function() {
    var _;
    //@[DEFINES]
    _ = HUI;
    _.init = function() {
      // * Данный набор инструментов могут использовать многие плагины, поэтому проверка
      if (this.isInited()) {
        return;
      }
      this._createMainParentInHtml();
      this._extendGraphicsClass();
      this.refresh();
    };
    // * Был ли создан (инициализирован) основной элемент
    _.isInited = function() {
      return this.parent() != null;
    };
    // * Основной элемент родитель для всех элементов UI
    _.parent = function() {
      return this._parent;
    };
    _.refresh = function() {
      if (!this.isInited()) {
        return;
      }
      Graphics._centerElement(this._parent);
      this._parent.style.zIndex = 2;
      this._parent.style.width = Graphics._canvas.style.width;
      this._parent.style.height = Graphics._canvas.style.height;
    };
    _.addCSS = function(name, folder = "css") {
      var head;
      if (!this.isInited()) {
        this.init();
      }
      head = document.getElementsByTagName("head")[0];
      if (head != null) {
        head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"$0/$1.css\" />".replace("$0", folder).replace("$1", name));
      }
    };
    _.addElement = function(id, html, classes = null) {
      var cls, element, i, len;
      if (!this.isInited()) {
        this.init();
      }
      element = document.createElement("div");
      element.id = id;
      element.innerHTML = html;
      if (classes != null) {
        for (i = 0, len = classes.length; i < len; i++) {
          cls = classes[i];
          element.classList.add(cls);
        }
      }
      this._parent.appendChild(element);
      return element;
    };
    // * Может быть NULL
    _.getElement = function(id) {
      return document.getElementById(id);
    };
    _.removeElement = function(element) {
      if (element == null) {
        return;
      }
      if (KDCore.SDK.isString(element)) {
        this.removeElementById(element);
      } else {
        this.removeElementById(element.id);
      }
    };
    _.removeElementById = function(elementId) {
      var element;
      if (!this.isInited()) {
        return;
      }
      element = this.getElement(elementId);
      if (element != null) {
        this._parent.removeChild(element);
      }
    };
    // * PRIVATE ------------------------------------------------------------------
    _._createMainParentInHtml = function() {
      this._parent = document.createElement("div");
      this._parent.id = "KDCoreMain";
      document.body.appendChild(this._parent);
    };
    _._extendGraphicsClass = function() {
      var ALIAS___updateCanvas;
      //@[ALIAS]
      ALIAS___updateCanvas = Graphics._updateCanvas;
      Graphics._updateCanvas = function() {
        ALIAS___updateCanvas.call(this);
        return KDCore.HUI.refresh();
      };
    };
  })();
  //@[EXTEND]
  return KDCore.HUI = HUI;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___onMouseUp, ALIAS___onRightButtonDown, ALIAS__clear, ALIAS__update, _;
  // * Right mouse pressed
  // * Определение когда правая (вторая) кнопка мыши зажата и удерживается

  //@[DEFINES]
  _ = TouchInput;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    this._kdMousePressed2 = false;
    this._kdPressedTime2 = 0;
  };
  //@[ALIAS]
  ALIAS___onRightButtonDown = _._onRightButtonDown;
  _._onRightButtonDown = function(event) {
    var check;
    ALIAS___onRightButtonDown.call(this, event);
    // * Это значит что ALIAS метод прошёл (верные X и Y в Canvas)
    if (KDCore.isMZ()) {
      check = this._newState.cancelled === true;
    } else {
      check = this._events.cancelled === true;
    }
    if (check === true) {
      this._kdMousePressed2 = true;
      this._kdPressedTime2 = 0;
    }
  };
  //@[ALIAS]
  ALIAS___onMouseUp = _._onMouseUp;
  _._onMouseUp = function(event) {
    ALIAS___onMouseUp.call(this, event);
    if (event.button === 2) {
      this._kdMousePressed2 = false;
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.kdIsPressed2()) {
      return this._kdPressedTime2++;
    }
  };
  //?[NEW]
  return _.kdIsPressed2 = function() {
    return this._kdMousePressed2 === true;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Методы из RPG Maker MZ которых нет в RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Scene_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Scene_Base.prototype;
    _.calcWindowHeight = function(numLines, selectable) {
      if (selectable === true) {
        return Window_Selectable.prototype.fittingHeight(numLines);
      } else {
        return Window_Base.prototype.fittingHeight(numLines);
      }
    };
  })();
  (function() {    // ■ END Scene_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Selectable.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Window_Selectable.prototype;
    _.itemLineRect = function(index) {
      return this.itemRect(index);
    };
  })();
  (function() {    // ■ END Window_Selectable.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var ALIAS__initialize, ALIAS__processEscapeCharacter, _;
    //@[DEFINES]
    _ = Window_Base.prototype;
    // * Чтоб можно было Rectangle принимать в конструктор
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(x, y, w, h) {
      if (x instanceof PIXI.Rectangle || x instanceof Rectangle) {
        return ALIAS__initialize.call(this, x.x, x.y, x.width, x.height);
      } else {
        return ALIAS__initialize.call(this, ...arguments);
      }
    };
    
    // * В MZ используется FS для изменения размера шрифта в тексте
    //@[ALIAS]
    ALIAS__processEscapeCharacter = _.processEscapeCharacter;
    _.processEscapeCharacter = function(code, textState) {
      if (code === "FS") {
        this.contents.fontSize = this.obtainEscapeParam(textState);
      } else {
        ALIAS__processEscapeCharacter.call(this, code, textState);
      }
    };
  })();
  (function() {    // ■ END Window_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Spriteset_Map.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Spriteset_Map.prototype;
    _.findTargetSprite = function(target) {
      return this._characterSprites.find(function(sprite) {
        return sprite.checkCharacter(target);
      });
    };
  })();
  return (function() {    // ■ END Spriteset_Map.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Sprite_Character.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Sprite_Character.prototype;
    _.checkCharacter = function(character) {
      return this._character === character;
    };
  })();
});

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_SM_processMapTouch, alias_TIOMM;
  //?SMouse better alternative
  if (KDCore.isMZ()) {
    return;
  }
  // * Для ButtonM
  //@[ALIAS]
  alias_SM_processMapTouch = Scene_Map.prototype.processMapTouch;
  Scene_Map.prototype.processMapTouch = function() {
    if ($gameTemp.kdButtonUnderMouse != null) {
      if ($gameTemp.kdButtonUnderMouse.parent == null) {
        return $gameTemp.kdButtonUnderMouse = null;
      } else {

      }
    } else {
      return alias_SM_processMapTouch.call(this);
    }
  };
  //@[ALIAS]
  alias_TIOMM = TouchInput._onMouseMove;
  TouchInput._onMouseMove = function(event) {
    var x, y;
    alias_TIOMM.call(this, event);
    x = Graphics.pageToCanvasX(event.pageX);
    y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
      return this._onHover(x, y);
    }
  };
  
  //?NEW, from MZ
  return TouchInput._onHover = function(_x, _y) {
    this._x = _x;
    this._y = _y;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__clear, ALIAS__update, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Input;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    return this._virtualButton = null;
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this._virtualButton == null) {
      return;
    }
    this._latestButton = this._virtualButton;
    this._pressedTime = 0;
    return this._virtualButton = null;
  };
  return _.virtualClick = function(buttonName) {
    return this._virtualButton = buttonName;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___startLoading, _;
  // * В версии RPG Maker MZ 1.5.0 появился баг что картинки не успевают прогрузится
  // * Данный фикс, возвращает старое поведение
  if (!KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Bitmap.prototype;
  //@[ALIAS]
  ALIAS___startLoading = _._startLoading;
  return _._startLoading = function() {
    if (Utils.hasEncryptedImages()) {
      ALIAS___startLoading.call(this, ...arguments);
    } else {
      // * Это из RPG Maker MZ до версии 1.5
      this._image = new Image();
      this._image.onload = this._onLoad.bind(this);
      this._image.onerror = this._onError.bind(this);
      this._destroyCanvas();
      this._loadingState = "loading";
      this._image.src = this._url;
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_WBDTEX_KDCore29122021;
  // * <center>, для RPG Maker MZ и если нету Visu Message Core
  if (KDCore.isMZ()) {
    alias_WBDTEX_KDCore29122021 = Window_Base.prototype.drawTextEx;
    Window_Base.prototype.drawTextEx = function(text, x, y, width) {
      var e, newText;
      try {
        if (Imported.VisuMZ_1_MessageCore !== true) { // * В Visu уже есть <center>
          if (String.any(text) && text.contains("<center>")) {
            if (text[0] === "<" && text[1] === "c") { // * Должен быть в начале строки
              newText = text.replace("<center>", "");
              this.drawTextExInCenter(newText, x, y, width);
              return;
            }
          }
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      alias_WBDTEX_KDCore29122021.call(this, ...arguments);
    };
  }
  //?NEW
  Window_Base.prototype.drawTextExInCenter = function(text, x, y, width, height) {
    var e, newX, newY, textSize;
    try {
      if (KDCore.isMV()) { // * В MV нет поддержки данного метода
        this.drawTextEx(...arguments);
        return;
      }
      textSize = this.textSizeEx(text);
      newX = x + width / 2 - textSize.width / 2;
      if ((height != null) && height > 0) {
        newY = y + height / 2 - textSize.height / 2;
      } else {
        newY = y;
      }
      this.drawTextEx(text, newX, newY, width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.drawTextEx(text, x, y, width);
    }
  };
  //?NEW
  Window_Base.prototype.drawTextExWithWordWrap = function(text, x, y, width, maxLines) {
    var maxWidth, wrappedText;
    maxWidth = this.contentsWidth();
    wrappedText = Window_Message.prototype.pWordWrap.call(this, text, width || maxWidth, maxLines);
    this.drawTextEx(wrappedText, x, y, width);
  };
  //?NEW
  return Window_Message.prototype.pWordWrap = function(text, maxWidth, maxLines) {
    var i, j, k, l, line, lines, newLines, ref, ref1, result, spaceLeft, spaceWidth, wordWidth, wordWidthWithSpace, words;
    lines = text.split('\n');
    maxWidth = maxWidth;
    spaceWidth = this.contents.measureTextWidth(' ');
    result = '';
    newLines = 1;
    for (i = k = 0, ref = lines.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
      spaceLeft = maxWidth;
      line = lines[i];
      words = line.split(' ');
      for (j = l = 0, ref1 = words.length; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
        wordWidth = this.contents.measureTextWidth(words[j]);
        wordWidthWithSpace = wordWidth + spaceWidth;
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            if (maxLines === newLines) {
              return result;
            }
            result += '\n';
            newLines++;
          }
          result += words[j];
          spaceLeft = maxWidth - wordWidth;
          if (j === 0 && line.match(/\\n\w*\s*<\s*\\n\[\w*\s*\]\s*>*/gi)) {
            spaceLeft += 200;
          }
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += ' ' + words[j];
        }
      }
      if (i < lines.length - 1) {
        result += '\n';
      }
    }
    return result;
  };
});


// Generated by CoffeeScript 2.6.1
// * Последний файл (после всех классов)
// * Загружает библиотеки
var i, len, lib, ref, text;

if (KDCore._requireLoadLibrary === true) {
  ref = KDCore[KDCore._loader];
  for (i = 0, len = ref.length; i < len; i++) {
    lib = ref[i];
    lib();
  }
  KDCore[KDCore._loader] = [];
  text = "%c  KDCore is loaded " + KDCore.Version;
  console.log(text, 'background: #222; color: #82b2ff');
}

// ==========================================================================
// ==========================================================================

//   END OF PLUGINS CORE LIBRARY
//   (Next code is this plugin code)

// ==========================================================================
// ==========================================================================

//Plugin KDCore builded by PKD PluginBuilder 2.1 - 21.06.2022

(function () {

    ANET.getNetChatTimeNow = function() {
        date = new Date();

        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();

        return `${h.slice(-2)}:${m.slice(-2)}`;
    };
    

    ANET.getNetLobbyChatNewMessageCode = function (who, text, time, side) {
        return `
            <div class="msg ${side}-msg">
            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">${who}</div>
                <div class="msg-info-time">${time}</div>
                </div>
                <div class="msg-text">${text}</div>
            </div>
            </div>
        `;
    };

})();

(function(){
    
    ANET.registerMVPluginCommands = function() {
        //@[ALIAS]
        var _Game_Interpreter_pluginCommand_ANET = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand_ANET.call(this, command, args);
            if (command === 'SetSharedBattle') {
                try {
                    this.nSetSharedBattle(args[0]);
                } catch (e) {
                    console.warn(e);
                }
            }
        };
    };

})();

ANET.isPro = function() {
    return false;
};

var Notyf = function () {
    "use strict";
    var n, t, o = function () {
            return (o = Object.assign || function (t) {
                for (var i, e = 1, n = arguments.length; e < n; e++)
                    for (var o in i = arguments[e]) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
                return t
            }).apply(this, arguments)
        },
        s = (i.prototype.on = function (t, i) {
            var e = this.listeners[t] || [];
            this.listeners[t] = e.concat([i])
        }, i.prototype.triggerEvent = function (t, i) {
            var e = this;
            (this.listeners[t] || []).forEach(function (t) {
                return t({
                    target: e,
                    event: i
                })
            })
        }, i);

    function i(t) {
        this.options = t, this.listeners = {}
    }(t = n = n || {})[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove";
    var v, e, a = (r.prototype.push = function (t) {
        this.notifications.push(t), this.updateFn(t, n.Add, this.notifications)
    }, r.prototype.splice = function (t, i) {
        var e = this.notifications.splice(t, i)[0];
        return this.updateFn(e, n.Remove, this.notifications), e
    }, r.prototype.indexOf = function (t) {
        return this.notifications.indexOf(t)
    }, r.prototype.onUpdate = function (t) {
        this.updateFn = t
    }, r);

    function r() {
        this.notifications = []
    }(e = v = v || {}).Dismiss = "dismiss";
    var c = {
            types: [{
                type: "success",
                className: "notyf__toast--success",
                backgroundColor: "#3dc763",
                icon: {
                    className: "notyf__icon--success",
                    tagName: "i"
                }
            }, {
                type: "error",
                className: "notyf__toast--error",
                backgroundColor: "#ed3d3d",
                icon: {
                    className: "notyf__icon--error",
                    tagName: "i"
                }
            }],
            duration: 2e3,
            ripple: !0,
            position: {
                x: "right",
                y: "bottom"
            },
            dismissible: !(e.Click = "click")
        },
        p = (d.prototype.on = function (t, i) {
            var e;
            this.events = o(o({}, this.events), ((e = {})[t] = i, e))
        }, d.prototype.update = function (t, i) {
            i === n.Add ? this.addNotification(t) : i === n.Remove && this.removeNotification(t)
        }, d.prototype.removeNotification = function (t) {
            var i, e, n = this,
                o = this._popRenderedNotification(t);
            o && ((e = o.node).classList.add("notyf__toast--disappear"), e.addEventListener(this.animationEndEventName, i = function (t) {
                t.target === e && (e.removeEventListener(n.animationEndEventName, i), n.container.removeChild(e))
            }))
        }, d.prototype.addNotification = function (t) {
            var i = this._renderNotification(t);
            this.notifications.push({
                notification: t,
                node: i
            }), this._announce(t.options.message || "Notification")
        }, d.prototype._renderNotification = function (t) {
            var i, e = this._buildNotificationCard(t),
                n = t.options.className;
            return n && (i = e.classList).add.apply(i, n.split(" ")), this.container.appendChild(e), e
        }, d.prototype._popRenderedNotification = function (t) {
            for (var i = -1, e = 0; e < this.notifications.length && i < 0; e++) this.notifications[e].notification === t && (i = e);
            if (-1 !== i) return this.notifications.splice(i, 1)[0]
        }, d.prototype.getXPosition = function (t) {
            var i;
            return (null === (i = null == t ? void 0 : t.position) || void 0 === i ? void 0 : i.x) || "right"
        }, d.prototype.getYPosition = function (t) {
            var i;
            return (null === (i = null == t ? void 0 : t.position) || void 0 === i ? void 0 : i.y) || "bottom"
        }, d.prototype.adjustContainerAlignment = function (t) {
            var i = this.X_POSITION_FLEX_MAP[this.getXPosition(t)],
                e = this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],
                n = this.container.style;
            n.setProperty("justify-content", e), n.setProperty("align-items", i)
        }, d.prototype._buildNotificationCard = function (n) {
            var t, o = this,
                i = n.options,
                e = i.icon;
            this.adjustContainerAlignment(i);
            var s = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__toast"
                }),
                a = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__ripple"
                }),
                r = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__wrapper"
                }),
                c = this._createHTLMElement({
                    tagName: "div",
                    className: "notyf__message"
                });
            c.innerHTML = i.message || "";
            var p, d, l, u, f, h = i.background || i.backgroundColor;
            e && "object" == typeof e && (p = this._createHTLMElement({
                tagName: "div",
                className: "notyf__icon"
            }), d = this._createHTLMElement({
                tagName: e.tagName || "i",
                className: e.className,
                text: e.text
            }), (l = null !== (t = e.color) && void 0 !== t ? t : h) && (d.style.color = l), p.appendChild(d), r.appendChild(p)), r.appendChild(c), s.appendChild(r), h && (i.ripple ? (a.style.background = h, s.appendChild(a)) : s.style.background = h), i.dismissible && (u = this._createHTLMElement({
                tagName: "div",
                className: "notyf__dismiss"
            }), f = this._createHTLMElement({
                tagName: "button",
                className: "notyf__dismiss-btn"
            }), u.appendChild(f), r.appendChild(u), s.classList.add("notyf__toast--dismissible"), f.addEventListener("click", function (t) {
                var i, e;
                null !== (e = (i = o.events)[v.Dismiss]) && void 0 !== e && e.call(i, {
                    target: n,
                    event: t
                }), t.stopPropagation()
            })), s.addEventListener("click", function (t) {
                var i, e;
                return null === (e = (i = o.events)[v.Click]) || void 0 === e ? void 0 : e.call(i, {
                    target: n,
                    event: t
                })
            });
            var m = "top" === this.getYPosition(i) ? "upper" : "lower";
            return s.classList.add("notyf__toast--" + m), s
        }, d.prototype._createHTLMElement = function (t) {
            var i = t.tagName,
                e = t.className,
                n = t.text,
                o = document.createElement(i);
            return e && (o.className = e), o.textContent = n || null, o
        }, d.prototype._createA11yContainer = function () {
            var t = this._createHTLMElement({
                tagName: "div",
                className: "notyf-announcer"
            });
            t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-live", "polite"), t.style.border = "0", t.style.clip = "rect(0 0 0 0)", t.style.height = "1px", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.padding = "0", t.style.position = "absolute", t.style.width = "1px", t.style.outline = "0", document.body.appendChild(t), this.a11yContainer = t
        }, d.prototype._announce = function (t) {
            var i = this;
            this.a11yContainer.textContent = "", setTimeout(function () {
                i.a11yContainer.textContent = t
            }, 100)
        }, d.prototype._getAnimationEndEventName = function () {
            var t, i = document.createElement("_fake"),
                e = {
                    MozTransition: "animationend",
                    OTransition: "oAnimationEnd",
                    WebkitTransition: "webkitAnimationEnd",
                    transition: "animationend"
                };
            for (t in e)
                if (void 0 !== i.style[t]) return e[t];
            return "animationend"
        }, d);

    function d() {
        this.notifications = [], this.events = {}, this.X_POSITION_FLEX_MAP = {
            left: "flex-start",
            center: "center",
            right: "flex-end"
        }, this.Y_POSITION_FLEX_MAP = {
            top: "flex-start",
            center: "center",
            bottom: "flex-end"
        };
        var t = document.createDocumentFragment(),
            i = this._createHTLMElement({
                tagName: "div",
                className: "notyf"
            });
        t.appendChild(i), document.body.appendChild(t), this.container = i, this.animationEndEventName = this._getAnimationEndEventName(), this._createA11yContainer()
    }

    function l(t) {
        var n = this;
        this.dismiss = this._removeNotification, this.notifications = new a, this.view = new p;
        var i = this.registerTypes(t);
        this.options = o(o({}, c), t), this.options.types = i, this.notifications.onUpdate(function (t, i) {
            return n.view.update(t, i)
        }), this.view.on(v.Dismiss, function (t) {
            var i = t.target,
                e = t.event;
            n._removeNotification(i), i.triggerEvent(v.Dismiss, e)
        }), this.view.on(v.Click, function (t) {
            var i = t.target,
                e = t.event;
            return i.triggerEvent(v.Click, e)
        })
    }
    return l.prototype.error = function (t) {
        var i = this.normalizeOptions("error", t);
        return this.open(i)
    }, l.prototype.success = function (t) {
        var i = this.normalizeOptions("success", t);
        return this.open(i)
    }, l.prototype.open = function (i) {
        var t = this.options.types.find(function (t) {
                return t.type === i.type
            }) || {},
            e = o(o({}, t), i);
        this.assignProps(["ripple", "position", "dismissible"], e);
        var n = new s(e);
        return this._pushNotification(n), n
    }, l.prototype.dismissAll = function () {
        for (; this.notifications.splice(0, 1););
    }, l.prototype.assignProps = function (t, i) {
        var e = this;
        t.forEach(function (t) {
            i[t] = null == i[t] ? e.options[t] : i[t]
        })
    }, l.prototype._pushNotification = function (t) {
        var i = this;
        this.notifications.push(t);
        var e = void 0 !== t.options.duration ? t.options.duration : this.options.duration;
        e && setTimeout(function () {
            return i._removeNotification(t)
        }, e)
    }, l.prototype._removeNotification = function (t) {
        var i = this.notifications.indexOf(t); - 1 !== i && this.notifications.splice(i, 1)
    }, l.prototype.normalizeOptions = function (t, i) {
        var e = {
            type: t
        };
        return "string" == typeof i ? e.message = i : "object" == typeof i && (e = o(o({}, e), i)), e
    }, l.prototype.registerTypes = function (t) {
        var i = (t && t.types || []).slice();
        return c.types.map(function (e) {
            var n = -1;
            i.forEach(function (t, i) {
                t.type === e.type && (n = i)
            });
            var t = -1 !== n ? i.splice(n, 1)[0] : {};
            return o(o({}, e), t)
        }).concat(i)
    }, l
}();







// ============================================================================
/*!
 * Socket.IO v2.3.0
 * (c) 2014-2019 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var r,n=i(t),s=n.source,p=n.id,h=n.path,u=c[p]&&h in c[p].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||u;return f?r=a(s,e):(c[p]||(c[p]=a(s,e)),r=c[p]),n.query&&!e.query&&(e.query=n.query),r.socket(n.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1),s=r(4),a=r(9);r(3)("socket.io-client");t.exports=e=n;var c=e.managers={};e.protocol=s.protocol,e.connect=n,e.Manager=r(9),e.Socket=r(33)},function(t,e,r){"use strict";function n(t,e){var r=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var n=r.host.indexOf(":")!==-1,i=n?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port,r.href=r.protocol+"://"+i+(e&&e.port===r.port?"":":"+r.port),r}var o=r(2);r(3)("socket.io-client:url");t.exports=n},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){"use strict";t.exports=function(){return function(){}}},function(t,e,r){function n(){}function o(t){var r=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(r+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(r+=t.nsp+","),null!=t.id&&(r+=t.id),null!=t.data){var n=i(t.data);if(n===!1)return m;r+=n}return r}function i(t){try{return JSON.stringify(t)}catch(t){return!1}}function s(t,e){function r(t){var r=l.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}l.removeBlobs(t,r)}function a(){this.reconstructor=null}function c(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u("unknown packet type "+n.type);if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o="";"-"!==t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!==t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}if(t.charAt(++r)){var a=p(t.substr(r)),c=a!==!1&&(n.type===e.ERROR||d(a));if(!c)return u("invalid payload");n.data=a}return n}function p(t){try{return JSON.parse(t)}catch(t){return!1}}function h(t){this.reconPack=t,this.buffers=[]}function u(t){return{type:e.ERROR,data:"parser error: "+t}}var f=(r(3)("socket.io-parser"),r(5)),l=r(6),d=r(7),y=r(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=a;var m=e.ERROR+'"encode error"';n.prototype.encode=function(t,r){if(e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,r);else{var n=o(t);r([n])}},f(a.prototype),a.prototype.add=function(t){var r;if("string"==typeof t)r=c(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new h(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},h.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},h.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=n(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var r=0;r<t.length;r++)t[r]=o(t[r],e);else if("object"==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(7),s=r(8),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),p="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,h){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){n++;var u=new FileReader;u.onload=function(){h?h[a]=this.result:o=this.result,--n||e(o)},u.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)r(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){function r(t){return n&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=r;var n="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(10),s=r(33),a=r(5),c=r(4),p=r(35),h=r(36),u=(r(3)("socket.io-client:manager"),r(32)),f=r(37),l=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(~this.readyState.indexOf("open"))return this;this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=p(r,"open",function(){n.onopen(),t&&t()}),s=p(r,"error",function(e){if(n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout,c=setTimeout(function(){o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",h(this,"ondata"))),this.subs.push(p(t,"ping",h(this,"onping"))),this.subs.push(p(t,"pong",h(this,"onpong"))),this.subs.push(p(t,"error",h(this,"onerror"))),this.subs.push(p(t,"close",h(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~u(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=u(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):t.onreconnect()}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(11),t.exports.parser=r(18)},function(t,e,r){function n(t,e){return this instanceof n?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new n(t,e)}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(12),s=r(5),a=(r(3)("engine.io-client:socket"),r(32)),c=r(18),p=r(2),h=r(26);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=c.protocol,n.Socket=n,n.Transport=r(17),n.transports=r(12),n.parser=r(18),n.prototype.createTransport=function(t){var e=o(this.query);e.EIO=c.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,withCredentials:r.withCredentials||this.withCredentials,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0,isReactNative:this.isReactNative});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(u.onlyBinaryUpgrades){var t=!this.supportsBinary&&u.transport.supportsBinary;h=h||t}h||(p.send([{type:"ping",data:"probe"}]),p.once("packet",function(t){if(!h)if("pong"===t.type&&"probe"===t.data){if(u.upgrading=!0,u.emit("upgrading",p),!p)return;n.priorWebsocketSuccess="websocket"===p.name,u.transport.pause(function(){h||"closed"!==u.readyState&&(c(),u.setTransport(p),p.send([{type:"upgrade"}]),u.emit("upgrade",p),p=null,u.upgrading=!1,u.flush())})}else{var e=new Error("probe error");e.transport=p.name,u.emit("upgradeError",e)}}))}function r(){h||(h=!0,c(),p.close(),p=null)}function o(t){var e=new Error("probe error: "+t);e.transport=p.name,r(),u.emit("upgradeError",e)}function i(){o("transport closed")}function s(){o("socket closed")}function a(t){p&&t.name!==p.name&&r()}function c(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),u.removeListener("close",s),u.removeListener("upgrading",a)}var p=this.createTransport(t,{probe:1}),h=!1,u=this;n.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",a),p.open()},n.prototype.onOpen=function(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~a(this.transports,t[r])&&e.push(t[r]);return e}},function(t,e,r){function n(t){var e,r=!1,n=!1,a=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,p=location.port;p||(p=c?443:80),r=t.hostname!==location.hostname||p!==t.port,n=t.secure!==c}if(t.xdomain=r,t.xscheme=n,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=r(13),i=r(15),s=r(29),a=r(30);e.polling=n,e.websocket=a},function(t,e,r){var n=r(14);t.exports=function(t){var e=t.xdomain,r=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!r&&o)return new XDomainRequest}catch(t){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,r=location.port;r||(r=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||r!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(13),c=r(16),p=r(5),h=r(27);r(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),r=this;try{e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var n in this.extraHeaders)this.extraHeaders.hasOwnProperty(n)&&e.setRequestHeader(n,this.extraHeaders[n])}}catch(t){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){r.onLoad()},e.onerror=function(){r.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(r.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(t){}4===e.readyState&&(200===e.status||1223===e.status?r.onLoad():setTimeout(function(){r.onError("number"==typeof e.status?e.status:0)},0))},e.send(this.data)}catch(t){return void setTimeout(function(){r.onError(t)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var u="onpagehide"in self?"pagehide":"unload";addEventListener(u,s,!1)}},function(t,e,r){function n(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(17),i=r(26),s=r(18),a=r(27),c=r(28);r(3)("engine.io-client:polling");t.exports=n;var p=function(){var t=r(13),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()},n.prototype.poll=function(){this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this,r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())},n.prototype.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(18),i=r(5);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");
this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,h=r(19),u=r(20),f=r(21),l=r(22),d=r(23);"undefined"!=typeof ArrayBuffer&&(p=r(24));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),k={type:"error",data:"parser error"},w=r(25);e.encodePacket=function(t,e,r,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof r&&(i=r,r=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof w&&a instanceof w)return s(t,e,i);if(a&&a.base64)return n(t,i);var c=v[t.type];return void 0!==t.data&&(c+=r?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,r){var n="b"+e.packets[t.type];if("undefined"!=typeof w&&t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];r(n+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];i=String.fromCharCode.apply(null,a)}return n+=btoa(i),r(n)},e.decodePacket=function(t,r,n){if(void 0===t)return k;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return k;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:k}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===r&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!p)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=p.decode(t.substr(1));return"blob"===e&&w&&(n=new w([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!1,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=u(t);return r&&s?w&&!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""===t)return n(k,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var h=t.charAt(c);if(":"===h){if(""===a||a!=(i=Number(a)))return n(k,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(k,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),k.type===o.type&&k.data===o.data)return n(k,0,1);var u=n(o,c+i,p);if(!1===u)return}c+=i,a=""}else a+=h}return""!==a?n(k,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new w(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return n(k,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var h=f(o,0,c);if(a)try{h=String.fromCharCode.apply(null,new Uint8Array(h))}catch(t){var u=new Uint8Array(h);h="";for(var p=0;p<u.length;p++)h+=String.fromCharCode(u[p])}i.push(h),o=f(o,c)}var l=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,l)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){function n(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,r=t.length;e<r;e++)if(n(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return n(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&n(t[i]))return!0;return!1}var o=r(7),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=n},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e){function r(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function n(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var r="";return 0==(4294965248&t)?r=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),r=d(t>>12&15|224),r+=i(t,6)):0==(4292870144&t)&&(r=d(t>>18&7|240),r+=i(t,12),r+=i(t,6)),r+=d(63&t|128)}function a(t,e){e=e||{};for(var n,o=!1!==e.strict,i=r(t),a=i.length,c=-1,p="";++c<a;)n=i[c],p+=s(n,o);return p}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&u[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(t){var e,r,n,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&u[l],l++,0==(128&e))return e;if(192==(224&e)){if(r=c(),s=(31&e)<<6|r,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(r=c(),n=c(),s=(15&e)<<12|r<<6|n,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=c(),n=c(),i=c(),s=(7&e)<<18|r<<12|n<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function h(t,e){e=e||{};var o=!1!==e.strict;u=r(t),f=u.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return n(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var u,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:h}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),u=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],u[p++]=n<<2|o>>4,u[p++]=(15&o)<<4|i>>2,u[p++]=(3&i)<<6|63&s;return h}}()},function(t,e){function r(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var r=new Uint8Array(t.byteLength);r.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=r.buffer}return e}return t})}function n(t,e){e=e||{};var n=new i;return r(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return new Blob(r(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(n.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?n:void 0}()},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(p=0,i=t):t+"."+r(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var r=this;c.push(function(t){r.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var s=r(16),a=r(27);t.exports=i;var c,p=/\n/g,h=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(h,"\\\n"),this.area.value=t.replace(p,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=i),s.call(this,t)}var o,i,s=r(17),a=r(18),c=r(26),p=r(27),h=r(28);r(3)("engine.io-client:websocket");if("undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),"undefined"==typeof window)try{i=r(31)}catch(t){}var u=o||i;t.exports=n,p(n,s),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new u(t,e):new u(t):new u(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function e(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var n=t.length,o=0,i=n;o<i;o++)!function(t){a.encodePacket(t,r.supportsBinary,function(o){if(!r.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),r.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<r.perMessageDeflate.threshold&&(i.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(o):r.ws.send(o,i)}catch(t){}--n||e()})}(t[o])},n.prototype.onClose=function(){s.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(4),s=r(5),a=r(34),c=r(35),p=r(36),h=(r(3)("socket.io-client:socket"),r(26)),u=r(20);t.exports=e=n;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),r={type:(void 0!==this.flags.binary?this.flags.binary:u(e))?i.BINARY_EVENT:i.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this.flags={},this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){if("/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},n.prototype.onclose=function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){var e=t.nsp===this.nsp,r=t.type===i.ERROR&&"/"===t.nsp;if(e||r)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=a(arguments);e.packet({type:u(n)?i.BINARY_ACK:i.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&this.packet({type:i.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags.compress=t,this},n.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.slim.js.map

text = "%c  Socket.io is loaded 2.3.0";
console.log(text, 'background: #3b3b3b; color: #22ab3b');

// Generated by CoffeeScript 2.6.1
// * Глабольный менеджер расширений (кода совместимости)

//?Данный класс заимствован из AABSZ (ревизия 26.02.2022)

//╒═════════════════════════════════════════════════════════════════════════╛
// ■ IMPLEMENTATION.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ANET;
  // * Добавить метод расширения
  _.extend = function(method) {
    if (ANET.__extenders == null) {
      ANET.__extenders = [];
    }
    ANET.__extenders.push(method);
  };
  // * Загрузить (выполнить) все методы расширения
  _.loadExtensions = function() {
    var i, len, method, ref;
    if (ANET.__extenders == null) {
      return;
    }
    ref = ANET.__extenders;
    for (i = 0, len = ref.length; i < len; i++) {
      method = ref[i];
      method();
    }
    // * Освобождение памяти
    ANET.__extenders = null;
  };
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


function _0x21d2(_0x2d5ff8, _0x1a0a22) {
    var _0x2baf35 = _0x2baf();
    return _0x21d2 = function (_0x21d2ac, _0x3e9f94) {
        _0x21d2ac = _0x21d2ac - 0x18d;
        var _0xe2e8e8 = _0x2baf35[_0x21d2ac];
        return _0xe2e8e8;
    }, _0x21d2(_0x2d5ff8, _0x1a0a22);
}
var _0x472fd9 = _0x21d2;
function _0x2baf() {
    var _0x2587ef = [
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x55\x73\x69\x6e\x67\x20\x48\x54\x54\x50\x53\x20\x73\x65\x63\x75\x72\x65\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x72\x65\x71\x75\x65\x73\x74\x52\x6f\x6f\x6d\x52\x65\x66\x72\x65\x73\x68',
        '\x54\x69\x6d\x65\x6f\x75\x74\x20\x66\x6f\x72\x3a\x20',
        '\x77\x68\x6d\x74\x64',
        '\x33\x30\x33\x34',
        '\x41\x75\x4e\x53\x6a',
        '\x76\x71\x73\x5a\x57',
        '\x69\x73\x48\x54\x54\x50\x53\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73\x49\x6e\x52\x6f\x6f\x6d',
        '\x67\x65\x74',
        '\x42\x4c\x41\x43\x4b',
        '\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x74\x72\x61\x63\x65',
        '\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x4e\x45\x54',
        '\x44\x4a\x62\x47\x6a',
        '\x31\x33\x31\x39\x39\x35\x36\x51\x74\x4e\x55\x59\x69',
        '\x4c\x6f\x62\x62\x79',
        '\x6f\x6e\x4c\x65\x61\x76\x65\x52\x6f\x6f\x6d',
        '\x35\x37\x32\x37\x35\x35\x4a\x51\x6f\x70\x56\x4d',
        '\x72\x65\x73\x65\x74',
        '\x50\x4d\x6d\x71\x4b',
        '\x4d\x50\x6c\x73\x55',
        '\x73\x6f\x63\x6b\x65\x74',
        '\x73\x65\x6e\x64',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x54\x6f\x4d\x61\x73\x74\x65\x72\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x72\x6f\x6f\x6d',
        '\x61\x70\x70\x6c\x79',
        '\x65\x6b\x6e\x72\x72',
        '\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x4f\x4e\x44\x62\x66',
        '\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x5f\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x72\x48\x63\x54\x4b',
        '\x31\x39\x34\x37\x34\x37\x34\x50\x50\x76\x43\x64\x41',
        '\x5a\x41\x4b\x43\x79',
        '\x39\x38\x39\x31\x43\x6b\x73\x6d\x59\x78',
        '\x69\x6e\x69\x74\x53\x79\x73\x74\x65\x6d',
        '\x4f\x67\x62\x71\x63',
        '\x47\x52\x45\x45\x4e',
        '\x32\x38\x37\x34\x73\x72\x67\x66\x74\x45',
        '\x32\x39\x32\x32\x38\x31\x31\x30\x4f\x4e\x62\x6f\x55\x5a',
        '\x6c\x65\x61\x76\x65\x52\x6f\x6f\x6d',
        '\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x68\x6f\x66\x4e\x42',
        '\x31\x39\x35\x2e\x31\x36\x31\x2e\x34\x31\x2e\x32\x30',
        '\x73\x74\x61\x72\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x73\x65\x74\x52\x6f\x6f\x6d\x4d\x61\x73\x74\x65\x72',
        '\x41\x62\x59\x79\x75',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x32\x34\x30\x31\x32\x32\x37\x4e\x62\x44\x6d\x55\x47',
        '\x53\x65\x6e\x64\x2c\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3a\x20',
        '\x53\x65\x6e\x64\x3a\x20',
        '\x6f\x6e\x52\x6f\x6f\x6d\x43\x6c\x6f\x73\x65\x64',
        '\x74\x6b\x4e\x41\x58',
        '\x58\x66\x6b\x70\x5a',
        '\x59\x6f\x75\x20\x74\x72\x79\x20\x73\x65\x6e\x64\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x6d\x65\x73\x73\x61\x67\x65\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21',
        '\x50\x6f\x72\x74\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20\x33\x30\x33\x35\x2e\x20\x43\x68\x65\x63\x6b\x20\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x70\x6c\x75\x67\x69\x6e\x20\x70\x61\x72\x61\x6d\x65\x74\x65\x72',
        '\x75\x4f\x61\x67\x66',
        '\x66\x76\x65\x73\x64',
        '\x41\x4e\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x61\x6e\x65\x74\x7a\x67\x6c\x6f\x62\x61\x6c\x2e\x72\x75',
        '\x67\x65\x74\x52\x6f\x6f\x6d\x44\x61\x74\x61',
        '\x59\x6f\x75\x20\x61\x72\x65\x20\x4d\x61\x73\x74\x65\x72\x20\x28\x68\x6f\x73\x74\x29\x20\x6f\x66\x20\x72\x6f\x6f\x6d\x3a\x20',
        '\x77\x61\x72\x6e',
        '\x6f\x6e\x52\x6f\x6f\x6d\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x32\x30\x36\x33\x36\x39\x35\x53\x5a\x58\x74\x68\x7a',
        '\x43\x6f\x6c\x6f\x72',
        '\x46\x4e\x52\x4a\x54',
        '\x69\x73\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65',
        '\x73\x65\x72\x76\x65\x72\x49\x70',
        '\x52\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x67\x65\x74\x29\x20\x66\x6f\x72\x3a\x20',
        '\x67\x65\x74\x47\x61\x6d\x65\x56\x65\x72\x73\x69\x6f\x6e',
        '\x43\x61\x6c\x6c\x62\x61\x63\x6b\x20\x66\x6f\x72\x3a\x20',
        '\x69\x73\x4d\x5a',
        '\x6e\x61\x6d\x65',
        '\x68\x74\x74\x70\x3a\x2f\x2f',
        '\x4b\x74\x54\x5a\x58',
        '\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x73\x65\x74\x46\x72\x6f\x6d',
        '\x6d\x79\x49\x64',
        '\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x44\x41\x51\x78\x57',
        '\x38\x73\x4e\x6f\x56\x4c\x73',
        '\x66\x75\x6c\x6c\x4e\x61\x6d\x65',
        '\x59\x6f\x75\x20\x74\x72\x79\x20\x73\x65\x6e\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21',
        '\x79\x4a\x6f\x6b\x50',
        '\x63\x6c\x6f\x73\x65\x52\x6f\x6f\x6d',
        '\x6c\x79\x46\x67\x52',
        '\x6c\x6f\x67',
        '\x73\x65\x74\x52\x6f\x6f\x6d\x4a\x6f\x69\x6e',
        '\x59\x6f\x75\x20\x74\x72\x79\x20\x67\x65\x74\x20\x64\x61\x74\x61\x20\x66\x72\x6f\x6d\x20\x53\x65\x72\x76\x65\x72\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21',
        '\x5f\x69\x73\x48\x6f\x73\x74',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x74\x69\x74\x53\x5a',
        '\x63\x6c\x69\x65\x6e\x74',
        '\x73\x65\x72\x76\x65\x72\x50\x6f\x72\x74',
        '\x34\x50\x4d\x77\x73\x5a\x61',
        '\x4e\x64\x59\x65\x56',
        '\x69\x73\x42\x75\x73\x79'
    ];
    _0x2baf = function () {
        return _0x2587ef;
    };
    return _0x2baf();
}
(function (_0xd2b6b, _0x319c2b) {
    var _0x36344 = _0x21d2, _0x668c6a = _0xd2b6b();
    while (!![]) {
        try {
            var _0x2c776f = -parseInt(_0x36344(0x194)) / 0x1 + -parseInt(_0x36344(0x191)) / 0x2 + -parseInt(_0x36344(0x1a5)) / 0x3 + -parseInt(_0x36344(0x1e5)) / 0x4 * (-parseInt(_0x36344(0x1c6)) / 0x5) + -parseInt(_0x36344(0x1ab)) / 0x6 * (parseInt(_0x36344(0x1a7)) / 0x7) + parseInt(_0x36344(0x1d7)) / 0x8 * (-parseInt(_0x36344(0x1b6)) / 0x9) + parseInt(_0x36344(0x1ac)) / 0xa;
            if (_0x2c776f === _0x319c2b)
                break;
            else
                _0x668c6a['push'](_0x668c6a['shift']());
        } catch (_0x13fdca) {
            _0x668c6a['push'](_0x668c6a['shift']());
        }
    }
}(_0x2baf, 0x7c84d), window[_0x472fd9(0x1c0)] = function () {
}, window[_0x472fd9(0x18f)] = window['\x41\x4e\x4e\x65\x74\x77\x6f\x72\x6b'], (function () {
    var _0x79c5a9 = _0x472fd9, _0x1133d8, _0x324592;
    _0x1133d8 = new KDCore[(_0x79c5a9(0x1b5))](_0x79c5a9(0x19f)), _0x1133d8[_0x79c5a9(0x18e)](KDCore[_0x79c5a9(0x1c7)][_0x79c5a9(0x1aa)], KDCore[_0x79c5a9(0x1c7)][_0x79c5a9(0x1f3)][_0x79c5a9(0x1e8)](0x23)), _0x1133d8['\x6f\x6e'](), _0x324592 = window[_0x79c5a9(0x1c0)], _0x324592['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64'] = function () {
        var _0x253df2 = _0x79c5a9;
        if (_0x253df2(0x1dc) === _0x253df2(0x1a9))
            !this[_0x253df2(0x1f4)]() ? _0x200ebb['\x70'](_0x253df2(0x1d9)) : (!_0x56b2fd && _0x86d0e3['\x70'](_0x253df2(0x1b8) + _0x138081[_0x253df2(0x1d8)]()), _0x39e7c5[_0x253df2(0x1d3)](this[_0x253df2(0x198)]['\x69\x64'])[_0x253df2(0x199)]());
        else
            return this[_0x253df2(0x198)] != null;
    }, _0x324592[_0x79c5a9(0x1d4)] = function () {
        var _0x1ccc75 = _0x79c5a9, _0x3ff144;
        return (_0x3ff144 = this[_0x1ccc75(0x198)]) != null ? _0x3ff144['\x69\x64'] : void 0x0;
    }, _0x324592['\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74'] = function () {
        var _0x277701 = _0x79c5a9;
        return this[_0x277701(0x1e0)] === !![];
    }, _0x324592[_0x79c5a9(0x1c9)] = function () {
        return ANET['\x50\x50']['\x69\x73\x4f\x6e\x6c\x79\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65']();
    }, _0x324592[_0x79c5a9(0x1e7)] = function () {
        var _0x1efcee = _0x79c5a9;
        return this[_0x1efcee(0x1f4)]() && (this[_0x1efcee(0x1d2)]() || ANGameManager[_0x1efcee(0x1d5)]());
    }, _0x324592[_0x79c5a9(0x1d2)] = function () {
        var _0x43913c = _0x79c5a9;
        return this['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']() && this[_0x43913c(0x1a3)] === !![];
    }, _0x324592['\x73\x65\x74\x57\x61\x69\x74'] = function () {
        return this['\x5f\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72'] = !![];
    }, _0x324592[_0x79c5a9(0x19a)] = function () {
        var _0x8a9c1a = _0x79c5a9;
        if ('\x4e\x48\x6b\x51\x4a' !== '\x4e\x48\x6b\x51\x4a') {
            var _0x14a945;
            _0xf21b95[_0x8a9c1a(0x19b)](null), (_0x14a945 = this[_0x8a9c1a(0x1e3)]) != null && _0x14a945['\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74'](), this[_0x8a9c1a(0x19a)](), this[_0x8a9c1a(0x198)] = null, _0x30fc71[_0x8a9c1a(0x195)]();
        } else
            return this['\x5f\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72'] = ![];
    }, (function () {
        var _0x3b4e39 = _0x79c5a9;
        if ('\x46\x4e\x52\x4a\x54' !== _0x3b4e39(0x1c8))
            _0x20d186[_0x3b4e39(0x19d)](this, _0x3b74a4);
        else
            return _0x324592[_0x3b4e39(0x1a8)] = function () {
                var _0x56625c = _0x3b4e39;
                if (_0x56625c(0x1d1) === _0x56625c(0x197))
                    return this[_0x56625c(0x1e0)] === !![];
                else
                    this['\x73\x6f\x63\x6b\x65\x74'] = null, this[_0x56625c(0x1e3)] = null, this[_0x56625c(0x19a)](), this[_0x56625c(0x1e0)] = ![], '\x4e\x65\x74\x77\x6f\x72\x6b\x20\x69\x6e\x69\x74\x65\x64'['\x70']();
            }, _0x324592['\x73\x74\x6f\x70'] = function () {
                var _0x286f2e = _0x3b4e39;
                if (_0x286f2e(0x1a4) === '\x6f\x55\x4d\x66\x46')
                    return this[_0x286f2e(0x1a3)] = !![];
                else {
                    var _0x446c64;
                    NetClientMethodsManager[_0x286f2e(0x19b)](null), (_0x446c64 = this[_0x286f2e(0x1e3)]) != null && (_0x286f2e(0x1da) !== _0x286f2e(0x1da) ? (_0x520784[_0x286f2e(0x1dd)](_0x286f2e(0x1e9)), _0x207f91 = '\x68\x74\x74\x70\x73\x3a\x2f\x2f', _0x518ad6 = {
                        '\x73\x65\x63\x75\x72\x65': !![],
                        '\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74': !![],
                        '\x72\x65\x6a\x65\x63\x74\x55\x6e\x61\x75\x74\x68\x6f\x72\x69\x7a\x65\x64': ![]
                    }, _0x5d9b1 === _0x286f2e(0x1ed) && (_0x4907f8 === _0x286f2e(0x1c1) || _0x286f2e(0x1b1)) && (_0x591e86[_0x286f2e(0x1c4)]('\x59\x6f\x75\x20\x74\x72\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x76\x69\x61\x20\x48\x54\x54\x50\x53\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x77\x69\x74\x68\x20\x70\x6f\x72\x74\x20\x33\x30\x33\x34\x20\x28\x68\x74\x74\x70\x29'), _0xba2a00[_0x286f2e(0x1c4)](_0x286f2e(0x1bd)), _0x276846 = 0xbdb)) : _0x446c64[_0x286f2e(0x1ae)]()), this[_0x286f2e(0x19a)](), this[_0x286f2e(0x198)] = null, ANGameManager[_0x286f2e(0x195)]();
                }
            }, _0x324592['\x73\x74\x61\x72\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e'] = function () {
                var _0x5d3b75 = _0x3b4e39, _0x4140d7, _0xece29d, _0x2bc9de, _0x2b2f62, _0x5005fc;
                _0xece29d = ANET['\x50\x50'][_0x5d3b75(0x1ca)](), _0x2b2f62 = ANET['\x50\x50'][_0x5d3b75(0x1e4)]();
                if (ANET['\x50\x50'][_0x5d3b75(0x1f0)]() === !![]) {
                    if (_0x5d3b75(0x1ef) === '\x62\x52\x54\x43\x6b')
                        return;
                    else
                        console[_0x5d3b75(0x1dd)](_0x5d3b75(0x1e9)), _0x5005fc = '\x68\x74\x74\x70\x73\x3a\x2f\x2f', _0x2bc9de = {
                            '\x73\x65\x63\x75\x72\x65': !![],
                            '\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74': !![],
                            '\x72\x65\x6a\x65\x63\x74\x55\x6e\x61\x75\x74\x68\x6f\x72\x69\x7a\x65\x64': ![]
                        }, _0x2b2f62 === _0x5d3b75(0x1ed) && (_0xece29d === '\x61\x6e\x65\x74\x7a\x67\x6c\x6f\x62\x61\x6c\x2e\x72\x75' || _0x5d3b75(0x1b1)) && ('\x44\x4a\x62\x47\x6a' !== _0x5d3b75(0x190) ? (_0x20971d['\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x54\x6f\x4d\x61\x73\x74\x65\x72\x43\x61\x6c\x6c\x62\x61\x63\x6b'](_0x5dbebe), this[_0x5d3b75(0x1b2)]()) : (console[_0x5d3b75(0x1c4)]('\x59\x6f\x75\x20\x74\x72\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x76\x69\x61\x20\x48\x54\x54\x50\x53\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x77\x69\x74\x68\x20\x70\x6f\x72\x74\x20\x33\x30\x33\x34\x20\x28\x68\x74\x74\x70\x29'), console['\x77\x61\x72\x6e'](_0x5d3b75(0x1bd)), _0x2b2f62 = 0xbdb));
                } else
                    _0x5005fc = _0x5d3b75(0x1d0), _0x2bc9de = {};
                _0x4140d7 = _0x5005fc + _0xece29d + '\x3a' + _0x2b2f62, console[_0x5d3b75(0x1dd)]('\x43\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20' + _0x4140d7), this['\x73\x6f\x63\x6b\x65\x74'] = io(_0x4140d7, _0x2bc9de), this[_0x5d3b75(0x1e3)] = new NetworkClientHandler(this['\x73\x6f\x63\x6b\x65\x74']);
            }, _0x324592[_0x3b4e39(0x1a2)] = function (_0x4f221e) {
                var _0x179a08 = _0x3b4e39;
                if (_0x179a08(0x1bb) === '\x58\x66\x6b\x70\x5a')
                    NetClientMethodsManager['\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x54\x6f\x4d\x61\x73\x74\x65\x72\x43\x61\x6c\x6c\x62\x61\x63\x6b'](_0x4f221e), this['\x73\x74\x61\x72\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e']();
                else {
                    var _0xb83e2c, _0x1520f4;
                    !this['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']() ? _0x24f3ee['\x70'](_0x179a08(0x1bc)) : (_0x1520f4 = _0x3f411a[_0x179a08(0x1d8)](), _0xb83e2c = function (..._0x1743b4) {
                        var _0x48ba50 = _0x179a08;
                        return _0x353074['\x70'](_0x48ba50(0x1cd) + _0x1520f4), _0x2d0187['\x61\x70\x70\x6c\x79'](this, _0x1743b4);
                    }, _0x358b7c['\x70']('\x53\x65\x6e\x64\x2c\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3a\x20' + _0x1520f4), _0x257946[_0x179a08(0x1d3)](this['\x73\x6f\x63\x6b\x65\x74']['\x69\x64'])[_0x179a08(0x1af)](_0xb83e2c));
                }
            }, _0x324592[_0x3b4e39(0x199)] = function (_0x4d2235, _0x56d0f0 = ![]) {
                var _0x4fdd64 = _0x3b4e39;
                if (_0x4fdd64(0x1b4) === _0x4fdd64(0x1b4)) {
                    if (!this['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']()) {
                        if (_0x4fdd64(0x1ee) !== _0x4fdd64(0x1ee))
                            return {
                                '\x69\x64': _0x1351cf['\x56\x44'][_0x4fdd64(0x1cc)](),
                                '\x74\x69\x74\x6c\x65': _0x54bde5['\x67\x61\x6d\x65\x54\x69\x74\x6c\x65'],
                                '\x76\x65\x72\x73\x69\x6f\x6e': _0x53696e[_0x4fdd64(0x1ce)]() ? 0x0 : 0x1,
                                '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73': _0x23f102['\x50\x50'][_0x4fdd64(0x1f1)](),
                                '\x6d\x6f\x64\x65': 0x0
                            };
                        else
                            _0x1133d8['\x70']('\x59\x6f\x75\x20\x74\x72\x79\x20\x73\x65\x6e\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x2c\x20\x62\x75\x74\x20\x4e\x4f\x54\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x21');
                    } else
                        !_0x56d0f0 && _0x1133d8['\x70'](_0x4fdd64(0x1b8) + _0x4d2235[_0x4fdd64(0x1d8)]()), _0x4d2235[_0x4fdd64(0x1d3)](this[_0x4fdd64(0x198)]['\x69\x64'])['\x73\x65\x6e\x64']();
                } else {
                    if (!this[_0x4fdd64(0x1f4)]())
                        return;
                    this['\x73\x65\x6e\x64'](_0x33fc56[_0x4fdd64(0x192)](_0x4fdd64(0x1c2)));
                }
            }, _0x324592[_0x3b4e39(0x1f2)] = function (_0x4f26bd, _0x13286f, _0x2ac5d3, _0x995820 = 0x7d0) {
                var _0x1b32a0 = _0x3b4e39, _0x435e19, _0x15d5b7, _0x539751;
                if (!this['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']())
                    '\x65\x6b\x6e\x72\x72' !== _0x1b32a0(0x19e) ? _0x338091['\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74']() : _0x1133d8['\x70'](_0x1b32a0(0x1df));
                else {
                    if (_0x1b32a0(0x1ec) !== '\x77\x68\x6d\x74\x64')
                        return;
                    else
                        _0x539751 = _0x4f26bd[_0x1b32a0(0x1d8)](), this[_0x1b32a0(0x1a0)](), HUIManager['\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72'](), _0x15d5b7 = function (..._0x19b6d9) {
                            var _0x1d3b17 = _0x1b32a0;
                            return _0x1133d8['\x70'](_0x1d3b17(0x1eb) + _0x539751), _0x2ac5d3 != null && _0x2ac5d3['\x61\x70\x70\x6c\x79'](this, _0x19b6d9), ANNetwork[_0x1d3b17(0x19a)](), HUIManager['\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72']();
                        }, _0x435e19 = function (..._0xd45394) {
                            var _0x1c468e = _0x1b32a0;
                            return _0x1133d8['\x70'](_0x1c468e(0x1cb) + _0x539751), _0x13286f != null && _0x13286f['\x61\x70\x70\x6c\x79'](this, _0xd45394), ANNetwork['\x72\x65\x73\x65\x74\x57\x61\x69\x74'](), HUIManager[_0x1c468e(0x1e1)]();
                        }, _0x1133d8['\x70']('\x53\x65\x6e\x64\x2c\x20\x67\x65\x74\x21\x3a\x20' + _0x539751), _0x4f26bd[_0x1b32a0(0x1d3)](this[_0x1b32a0(0x198)]['\x69\x64'])['\x67\x65\x74'](_0x435e19, _0x15d5b7, _0x995820);
                }
            }, _0x324592[_0x3b4e39(0x1af)] = function (_0x2fb992, _0x501348) {
                var _0x342a49 = _0x3b4e39, _0x36a5a4, _0x193164;
                if (!this[_0x342a49(0x1f4)]()) {
                    if (_0x342a49(0x1ba) === _0x342a49(0x1ba))
                        _0x1133d8['\x70'](_0x342a49(0x1bc));
                    else
                        return;
                } else
                    _0x193164 = _0x2fb992['\x66\x75\x6c\x6c\x4e\x61\x6d\x65'](), _0x36a5a4 = function (..._0x189546) {
                        var _0x23ea41 = _0x342a49;
                        return '\x74\x69\x74\x53\x5a' === _0x23ea41(0x1e2) ? (_0x1133d8['\x70']('\x43\x61\x6c\x6c\x62\x61\x63\x6b\x20\x66\x6f\x72\x3a\x20' + _0x193164), _0x501348['\x61\x70\x70\x6c\x79'](this, _0x189546)) : this['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']() && this['\x5f\x69\x73\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72'] === !![];
                    }, _0x1133d8['\x70'](_0x342a49(0x1b7) + _0x193164), _0x2fb992[_0x342a49(0x1d3)](this['\x73\x6f\x63\x6b\x65\x74']['\x69\x64'])[_0x342a49(0x1af)](_0x36a5a4);
            }, _0x324592[_0x3b4e39(0x1f5)] = function (_0x47de57) {
                var _0x4a4b12 = _0x3b4e39;
                return this[_0x4a4b12(0x199)](NMS['\x54\x72\x61\x63\x65'](_0x47de57));
            };
    }()), (function () {
        var _0x49c979 = _0x79c5a9;
        if ('\x6a\x55\x64\x69\x65' === _0x49c979(0x1bf)) {
            if (this['\x72\x6f\x6f\x6d'] == null)
                return;
            _0x3ec804[_0x49c979(0x193)](), this[_0x49c979(0x199)](_0x3d331c[_0x49c979(0x192)](_0x49c979(0x1ad), this['\x72\x6f\x6f\x6d']['\x6e\x61\x6d\x65']));
        } else
            return _0x324592[_0x49c979(0x1b3)] = function (_0x58143b) {
                var _0x31a38c = _0x49c979;
                return this[_0x31a38c(0x19c)] = _0x58143b, this[_0x31a38c(0x1e0)] = !![], _0x1133d8['\x70'](_0x31a38c(0x1c3) + this[_0x31a38c(0x19c)][_0x31a38c(0x1cf)]);
            }, _0x324592[_0x49c979(0x1de)] = function (_0x4d9537) {
                var _0x22b7cc = _0x49c979;
                return this[_0x22b7cc(0x19c)] = _0x4d9537, this['\x5f\x69\x73\x48\x6f\x73\x74'] = ![], _0x1133d8['\x70']('\x59\x6f\x75\x20\x61\x72\x65\x20\x6a\x6f\x69\x6e\x65\x64\x20\x74\x6f\x20\x72\x6f\x6f\x6d\x3a\x20' + this['\x72\x6f\x6f\x6d']['\x6e\x61\x6d\x65']);
            }, _0x324592[_0x49c979(0x1c5)] = function (_0x36275d) {
                this['\x72\x6f\x6f\x6d'] = _0x36275d;
            }, _0x324592[_0x49c979(0x1b9)] = function () {
                var _0x189076 = _0x49c979;
                if ('\x74\x4d\x45\x55\x42' === _0x189076(0x1be))
                    return;
                else {
                    if (!this['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']()) {
                        if (_0x189076(0x1a6) === _0x189076(0x1b0))
                            _0x33a4c8['\x70'](_0x189076(0x1df));
                        else
                            return;
                    }
                    if (this[_0x189076(0x19c)] == null)
                        return;
                    this[_0x189076(0x1ad)](), this[_0x189076(0x1e0)] = ![], this[_0x189076(0x19c)] = null;
                }
            }, _0x324592[_0x49c979(0x1db)] = function () {
                var _0xe87ebf = _0x49c979;
                if (_0xe87ebf(0x196) === _0xe87ebf(0x1a1))
                    _0x22c086['\x70'](_0xe87ebf(0x1bc));
                else {
                    if (!this[_0xe87ebf(0x18d)]()) {
                        if ('\x4e\x64\x59\x65\x56' !== _0xe87ebf(0x1e6))
                            return _0x2f7ee8['\x70']('\x52\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x67\x65\x74\x29\x20\x66\x6f\x72\x3a\x20' + _0x279f80), _0x2c1972 != null && _0x39db99[_0xe87ebf(0x19d)](this, _0x1f632d), _0x4904c7[_0xe87ebf(0x19a)](), _0x580d94['\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72']();
                        else
                            return;
                    }
                    if (this[_0xe87ebf(0x19c)] == null)
                        return;
                    this[_0xe87ebf(0x199)](NMS[_0xe87ebf(0x192)](_0xe87ebf(0x1db)));
                }
            }, _0x324592['\x6c\x65\x61\x76\x65\x52\x6f\x6f\x6d'] = function () {
                var _0x4d2dcf = _0x49c979;
                if (_0x4d2dcf(0x1d6) === '\x68\x41\x61\x61\x53')
                    _0x34199e['\x70'](_0x4d2dcf(0x1b8) + _0x13a284[_0x4d2dcf(0x1d8)]());
                else {
                    if (this[_0x4d2dcf(0x19c)] == null)
                        return;
                    ANGameManager['\x6f\x6e\x4c\x65\x61\x76\x65\x52\x6f\x6f\x6d'](), this[_0x4d2dcf(0x199)](NMS['\x4c\x6f\x62\x62\x79']('\x6c\x65\x61\x76\x65\x52\x6f\x6f\x6d', this[_0x4d2dcf(0x19c)][_0x4d2dcf(0x1cf)]));
                }
            }, _0x324592[_0x49c979(0x1ea)] = function () {
                var _0x41bad8 = _0x49c979;
                if (!this[_0x41bad8(0x1f4)]())
                    return;
                this['\x73\x65\x6e\x64'](NMS[_0x41bad8(0x192)](_0x41bad8(0x1c2)));
            };
    }()), _0x324592['\x67\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65\x49\x6e\x66\x6f\x44\x61\x74\x61'] = function () {
        var _0x52c73f = _0x79c5a9;
        return {
            '\x69\x64': ANET['\x56\x44'][_0x52c73f(0x1cc)](),
            '\x74\x69\x74\x6c\x65': $dataSystem['\x67\x61\x6d\x65\x54\x69\x74\x6c\x65'],
            '\x76\x65\x72\x73\x69\x6f\x6e': KDCore[_0x52c73f(0x1ce)]() ? 0x0 : 0x1,
            '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73': ANET['\x50\x50'][_0x52c73f(0x1f1)](),
            '\x6d\x6f\x64\x65': 0x0
        };
    };
}()));

// Generated by CoffeeScript 2.6.1
// * Глабольный менеджер с основными методами системы
ANET.System = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.System;
  (function() {    // * Начальная загрузка компонентов
    // -----------------------------------------------------------------------
    //TODO: * Лог свой для сообщений версий
    _.initSystem = function() {
      "INIT ANET SYSTEM".p();
      this.registerGEvents();
      this.loadParameters();
      this.applyParameters();
      ANET.loadPluginCommands();
      ANET.loadExtensions(); // 1_ANExtensions.coffee
      HUIManager.init();
    };
    // * Регистрация всех глобальных событий
    _.registerGEvents = function() {
      var i, item, len, list;
      list = ['netzRefreshNameplate'];
      for (i = 0, len = list.length; i < len; i++) {
        item = list[i];
        KDCore.GEventsManager.register(item);
      }
    };
    _.loadParameters = function() {
      return ANET.PP = new ANET.ParamsManager();
    };
    _.applyParameters = function() {};
    //TODO: Например конфигурация классов (dinamyc методов)

    // * Очищает из памяти все события которые существуют только на карте
    _.clearSceneMapGEvents = function() {
      return KDCore.GEventsManager.clear('netzRefreshNameplate');
    };
  })();
  // -----------------------------------------------------------------------

  // * Все эти команды нельзя запускать через опции (виртуально), но
  // * их теоретически можно вызывать через общее событие у другого игрока
  _.ForbiddenVirtualCommandsList = [
    // * Message
    101,
    102,
    103,
    104,
    105,
    // * Flow Control
    111,
    112,
    113,
    115,
    118,
    119,
    108,
    // * Party
    129,
    // * Movement
    201,
    202,
    204,
    206,
    // * Character
    216,
    217,
    // * Timing
    230,
    // * Scene Control
    302,
    303,
    351,
    352,
    // * System Settings
    137,
    // * Meta
    0,
    401,
    402,
    403,
    411,
    413,
    657
  ];
  // * Список комманд которые запускаются через общее событие, а не виртуально
  _.NonVirtualCommandsList = [
    // * Flow Control
    117,
    // * Scene Control
    301
  ];
  // * Дополнительные полня для синхронизации в битве
  _.BattlerObserverFields = [
    "_tpbChargeTime",
    //"_tpbCastTime"
    //"_tpbIdleTime"
    //"_tpbTurnCount"
    //"_tpbTurnEnd"
    //"_speed"
    //"_actionState"
    //"_damagePopup"
    //"_effectType"
    //"_motionType"
    //"_weaponImageId"
    //"_motionRefresh"
    //"_selected"
    "_tpbState"
  ];
  _.ActorObserverFields = ["_name", "_nickname", "_classId", "_level", "_characterName", "_characterIndex", "_faceName", "_faceIndex", "_battlerName", "_exp", "_equips"];
  return _.EnemyObserverFields = [
    "_enemyId",
    //"_letter"
    //"_plural"
    "_screenX",
    "_screenY"
  ];
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный менедреж отвечает за различие в версиях плагина для MZ и MV
ANET.VD = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.VD;
  _.getGameVersion = function() {
    if (ANET.PP.isUseCustomGameId()) {
      return ANET.PP.getCustomGameId();
    } else {
      if (KDCore.isMZ()) {
        return $dataSystem.advanced.gameId;
      } else {
        return $dataSystem.versionId;
      }
    }
  };
  return _.getWindowBackgroundType = function() {
    if (KDCore.isMZ()) {
      return 2;
    } else {
      return 0;
    }
  };
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------


function _0x36f1(_0x520dab, _0x12176a) {
    var _0x274820 = _0x2748();
    return _0x36f1 = function (_0x36f10c, _0x4767e5) {
        _0x36f10c = _0x36f10c - 0xad;
        var _0xb65126 = _0x274820[_0x36f10c];
        return _0xb65126;
    }, _0x36f1(_0x520dab, _0x12176a);
}
(function (_0xc5fa57, _0x541924) {
    var _0x5265c2 = _0x36f1, _0x325b07 = _0xc5fa57();
    while (!![]) {
        try {
            var _0x17a0b4 = -parseInt(_0x5265c2(0xed)) / 0x1 * (parseInt(_0x5265c2(0x104)) / 0x2) + -parseInt(_0x5265c2(0x138)) / 0x3 + -parseInt(_0x5265c2(0xc7)) / 0x4 + parseInt(_0x5265c2(0x12c)) / 0x5 + parseInt(_0x5265c2(0xaf)) / 0x6 + parseInt(_0x5265c2(0x106)) / 0x7 * (-parseInt(_0x5265c2(0xfd)) / 0x8) + parseInt(_0x5265c2(0x130)) / 0x9 * (parseInt(_0x5265c2(0xe9)) / 0xa);
            if (_0x17a0b4 === _0x541924)
                break;
            else
                _0x325b07['push'](_0x325b07['shift']());
        } catch (_0x25a1cd) {
            _0x325b07['push'](_0x325b07['shift']());
        }
    }
}(_0x2748, 0x6fb3e), window['\x48\x55\x49\x4d\x61\x6e\x61\x67\x65\x72'] = function () {
}, (function () {
    var _0x5634f9 = _0x36f1, _0x114e35;
    _0x114e35 = window[_0x5634f9(0x117)], _0x114e35[_0x5634f9(0xf3)] = function () {
        var _0x125986 = _0x5634f9;
        if (_0x125986(0x13f) !== _0x125986(0xd9))
            this['\x5f\x69\x73\x4d\x6f\x75\x73\x65\x48\x6f\x76\x65\x72\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74'] = ![], this[_0x125986(0xe4)](), this[_0x125986(0x10c)](), this[_0x125986(0x135)](), this[_0x125986(0xb3)](), Graphics[_0x125986(0xd5)]();
        else
            return;
    }, _0x114e35[_0x5634f9(0x11b)] = function () {
        var _0x24e4cd = _0x5634f9;
        return _0x24e4cd(0x133) !== _0x24e4cd(0x118) ? this[_0x24e4cd(0x13a)] === !![] : (_0x1de9e2 = _0x54a289, _0x154116['\x77'](_0x24fc78));
    }, _0x114e35['\x6f\x6e\x47\x61\x6d\x65\x53\x63\x65\x6e\x65\x43\x68\x61\x6e\x67\x65\x64'] = function () {
        var _0x158430 = _0x5634f9;
        if (_0x158430(0x129) === _0x158430(0xc3))
            _0xec5bbe = _0x1f6883, _0x18211c[_0x158430(0xc0)](_0x25f4f6);
        else
            return this['\x68\x69\x64\x65\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f']();
    }, _0x114e35[_0x5634f9(0x127)] = function (_0x1e7e66 = 0xc8) {
        var _0x4d8861 = _0x5634f9, _0x2cac15;
        try {
            if (this[_0x4d8861(0xe5)]()) {
                if (_0x4d8861(0xc6) !== _0x4d8861(0xc6)) {
                    if (this['\x5f\x72\x43\x68\x61\x74'] == null)
                        return;
                    return (_0x506f7b = this[_0x4d8861(0x10a)]) != null ? _0x14cbd8[_0x4d8861(0x121)]() : void 0x0;
                } else
                    return;
            }
            this[_0x4d8861(0xbb)] = setTimeout(function () {
                var _0x199427 = _0x4d8861;
                if (!document[_0x199427(0xb9)](_0x199427(0xb5)))
                    return document['\x62\x6f\x64\x79'][_0x199427(0xd4)](HUIManager['\x5f\x6c\x6f\x61\x64\x65\x72']);
            }, _0x1e7e66);
        } catch (_0x30aaee) {
            if (_0x4d8861(0x110) !== _0x4d8861(0x145))
                _0x2cac15 = _0x30aaee, console['\x77\x61\x72\x6e'](_0x2cac15);
            else {
                if (_0x56aa0b['\x6b\x65\x79\x43\x6f\x64\x65'] === 0x5a || _0x3d8ee6[_0x4d8861(0x141)] === 0x58 || _0x322973[_0x4d8861(0x141)] === 0x20) {
                    this[_0x4d8861(0xfe)]();
                    return;
                }
            }
        }
    }, _0x114e35[_0x5634f9(0xe6)] = function () {
        var _0x5e9c20 = _0x5634f9, _0xff39e7;
        try {
            if (_0x5e9c20(0xe1) !== _0x5e9c20(0xc2)) {
                if (!this[_0x5e9c20(0xe5)]())
                    return;
                clearTimeout(this['\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64']), this[_0x5e9c20(0xbb)] = null, document[_0x5e9c20(0xb9)](_0x5e9c20(0xb5)) && document[_0x5e9c20(0xe7)][_0x5e9c20(0xf7)](this[_0x5e9c20(0x134)]);
            } else
                _0x2b85df['\x66\x6f\x63\x75\x73']();
        } catch (_0x37cc27) {
            _0xff39e7 = _0x37cc27, console[_0x5e9c20(0x113)](_0xff39e7);
        }
    }, _0x114e35[_0x5634f9(0xe5)] = function () {
        return this['\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64'] != null;
    }, _0x114e35['\x73\x68\x6f\x77\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f'] = function (_0x22d551, _0x2963b3, _0x1155e7 = 0xc8) {
        var _0x29baac = _0x5634f9, _0x2d0f97;
        try {
            if (this[_0x29baac(0xd1)]()) {
                if (_0x29baac(0xad) === _0x29baac(0xcf))
                    return _0x2019f5[_0x29baac(0x13a)] = !![];
                else
                    return;
            }
            this[_0x29baac(0xbc)] = setTimeout(function () {
                return HUIManager['\x5f\x63\x72\x65\x61\x74\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x41\x6c\x65\x72\x74'](_0x22d551, _0x2963b3);
            }, _0x1155e7);
        } catch (_0x50e2bc) {
            if ('\x45\x4c\x74\x47\x4b' !== _0x29baac(0x12b)) {
                var _0x1981ed;
                if (this[_0x29baac(0x122)] == null)
                    return;
                (_0x1981ed = _0x128155[_0x29baac(0xb9)](_0x29baac(0x12a))) != null && _0x1981ed['\x66\x6f\x63\x75\x73']();
            } else
                _0x2d0f97 = _0x50e2bc, console[_0x29baac(0xc0)](_0x2d0f97);
        }
    }, _0x114e35[_0x5634f9(0xb6)] = function () {
        var _0x571485 = _0x5634f9, _0x4860b0;
        try {
            if (!this[_0x571485(0xd1)]()) {
                if (_0x571485(0xbd) === _0x571485(0xbd))
                    return;
                else
                    return _0x598431[_0x571485(0xe7)]['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](_0x90ae04[_0x571485(0x134)]);
            }
            clearTimeout(this[_0x571485(0xbc)]), this[_0x571485(0xbc)] = null, this[_0x571485(0x120)] != null && (document[_0x571485(0xb9)]('\x61\x6e\x65\x74\x43\x61\x6e\x76\x61\x73\x45\x6c\x65\x6d\x65\x6e\x74\x73')[_0x571485(0xf7)](this[_0x571485(0x120)]), this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73'] = null);
        } catch (_0x218701) {
            if ('\x62\x79\x4e\x43\x4c' !== _0x571485(0x13c))
                return this[_0x571485(0xf5)][_0x571485(0x111)](_0x25ef42);
            else
                _0x4860b0 = _0x218701, console[_0x571485(0xc0)](_0x4860b0);
        }
    }, _0x114e35[_0x5634f9(0xd1)] = function () {
        var _0x348dd2 = _0x5634f9;
        return this[_0x348dd2(0xbc)] != null;
    }, _0x114e35[_0x5634f9(0xf2)] = function (_0x1550db) {
        var _0x16aa8c = _0x5634f9, _0x11a23a;
        try {
            return this[_0x16aa8c(0xf5)][_0x16aa8c(0x111)](_0x1550db);
        } catch (_0x2b6372) {
            return _0x11a23a = _0x2b6372, console['\x77\x61\x72\x6e'](_0x11a23a);
        }
    }, _0x114e35['\x6e\x6f\x74\x69\x66\x79\x53\x75\x63\x65\x73\x73'] = function (_0x475a60) {
        var _0x4e56d2 = _0x5634f9, _0x10b126;
        try {
            return this['\x5f\x6e\x6f\x74\x69\x66\x79'][_0x4e56d2(0x108)](_0x475a60);
        } catch (_0xbf1f79) {
            return _0x10b126 = _0xbf1f79, console[_0x4e56d2(0xc0)](_0x10b126);
        }
    }, _0x114e35[_0x5634f9(0x116)] = function () {
        return this['\x5f\x69\x6e\x70\x75\x74'] != null;
    }, _0x114e35[_0x5634f9(0xcd)] = function (_0xae80de, _0x125fed) {
        var _0xfe1704 = _0x5634f9;
        if (this['\x5f\x69\x6e\x70\x75\x74'] != null) {
            if (_0xfe1704(0x13d) !== '\x4f\x7a\x78\x77\x6d')
                this[_0xfe1704(0x112)]();
            else {
                var _0x255af5;
                _0x255af5 = _0xfe1704(0x12f), this[_0xfe1704(0x128)] = _0xa31378[_0xfe1704(0x10e)](_0xfe1704(0x103)), this[_0xfe1704(0x128)]['\x69\x64'] = '\x61\x6e\x65\x74\x52\x6f\x6f\x6d\x43\x68\x61\x74', this[_0xfe1704(0x128)]['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74'][_0xfe1704(0xde)](_0xfe1704(0xd2)), this['\x5f\x72\x43\x68\x61\x74'][_0xfe1704(0x10d)](_0xfe1704(0xb4), function () {
                    return _0x2dfe5c['\x5f\x69\x73\x4d\x6f\x75\x73\x65\x48\x6f\x76\x65\x72\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74'] = !![];
                }), this['\x5f\x72\x43\x68\x61\x74'][_0xfe1704(0x10d)]('\x6d\x6f\x75\x73\x65\x6c\x65\x61\x76\x65', function () {
                    return _0xe0c9f1['\x5f\x69\x73\x4d\x6f\x75\x73\x65\x48\x6f\x76\x65\x72\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74'] = ![];
                }), this[_0xfe1704(0x128)][_0xfe1704(0xee)](_0xfe1704(0x115), _0x255af5), this[_0xfe1704(0x128)][_0xfe1704(0x13b)] = ![], this[_0xfe1704(0xd7)][_0xfe1704(0xd4)](this[_0xfe1704(0x128)]);
            }
        }
        this['\x5f\x63\x72\x65\x61\x74\x65\x49\x6e\x70\x75\x74\x46\x69\x65\x6c\x64'](_0xae80de, _0x125fed);
    }, _0x114e35[_0x5634f9(0x112)] = function () {
        var _0x3c85c8 = _0x5634f9;
        if (_0x3c85c8(0x114) !== _0x3c85c8(0x144)) {
            var _0x28811a, _0x230f78;
            if (this[_0x3c85c8(0x122)] == null)
                return;
            HUIManager[_0x3c85c8(0x13a)] = ![];
            try {
                if (_0x3c85c8(0xc4) !== _0x3c85c8(0xc4))
                    return _0x397935[_0x3c85c8(0xda)](_0x2eeefa, _0x373d7f);
                else
                    _0x230f78 = document[_0x3c85c8(0xb9)](_0x3c85c8(0xdc)), this[_0x3c85c8(0x122)][_0x3c85c8(0x102)][_0x3c85c8(0x123)] = _0x3c85c8(0x119), this[_0x3c85c8(0x122)]['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65'] != null && this[_0x3c85c8(0x122)]['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65'][_0x3c85c8(0xf7)](this['\x5f\x69\x6e\x70\x75\x74']);
            } catch (_0x5d6703) {
                '\x69\x76\x58\x50\x4a' !== _0x3c85c8(0xef) ? (_0x4db122 = _0x494da5, _0x4b416b[_0x3c85c8(0xc0)](_0xcfc44c)) : (_0x28811a = _0x5d6703, ANET['\x77'](_0x28811a));
            }
            this[_0x3c85c8(0x122)] = null;
        } else {
            var _0x3cdd9b;
            if (this[_0x3c85c8(0x122)] == null)
                return;
            (_0x3cdd9b = _0x2eb5ce[_0x3c85c8(0xb9)]('\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65')) != null && (_0x3cdd9b['\x76\x61\x6c\x75\x65'] = _0x31f95a);
        }
    }, _0x114e35[_0x5634f9(0xdf)] = function () {
        var _0x170346 = _0x5634f9, _0x3e49ae;
        if (this[_0x170346(0x122)] == null)
            return;
        if ((_0x3e49ae = document[_0x170346(0xb9)](_0x170346(0x12a))) != null) {
            if ('\x50\x47\x50\x63\x6e' !== _0x170346(0xc8))
                return this[_0x170346(0xbb)] != null;
            else
                _0x3e49ae[_0x170346(0xec)]();
        }
    }, _0x114e35[_0x5634f9(0xf6)] = function () {
        var _0x53e5e4 = _0x5634f9;
        if (_0x53e5e4(0xae) !== _0x53e5e4(0x10b)) {
            var _0x304850;
            if (this[_0x53e5e4(0x122)] == null) {
                if (_0x53e5e4(0x12e) === _0x53e5e4(0x12e))
                    return '';
                else {
                    if (!this[_0x53e5e4(0xe5)]())
                        return;
                    _0x265d4b(this[_0x53e5e4(0xbb)]), this[_0x53e5e4(0xbb)] = null, _0x290162['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x53e5e4(0xb5)) && _0x3f361e['\x62\x6f\x64\x79'][_0x53e5e4(0xf7)](this[_0x53e5e4(0x134)]);
                }
            }
            return (_0x304850 = document[_0x53e5e4(0xb9)](_0x53e5e4(0x12a))) != null ? _0x304850['\x76\x61\x6c\x75\x65'] : void 0x0;
        } else
            return '';
    }, _0x114e35['\x73\x65\x74\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'] = function (_0x783f3) {
        var _0x247165 = _0x5634f9;
        if (_0x247165(0xbf) !== _0x247165(0xbf))
            _0x1f165c = _0x5c1de8, _0x31a38d['\x77\x61\x72\x6e'](_0x15acb5);
        else {
            var _0x3e2d3a;
            if (this['\x5f\x69\x6e\x70\x75\x74'] == null) {
                if (_0x247165(0xd8) !== _0x247165(0xd8))
                    this[_0x247165(0xe2)](), this[_0x247165(0x10a)] = new _0x1681d5();
                else
                    return;
            }
            (_0x3e2d3a = document[_0x247165(0xb9)](_0x247165(0x12a))) != null && (_0x3e2d3a['\x76\x61\x6c\x75\x65'] = _0x783f3);
        }
    }, _0x114e35[_0x5634f9(0xc9)] = function () {
        var _0x879d75 = _0x5634f9;
        if (this[_0x879d75(0xd7)] == null) {
            if (_0x879d75(0xc5) !== '\x75\x58\x49\x62\x58')
                return _0x3e6114[_0x879d75(0x13a)] = ![];
            else
                return;
        }
        Graphics[_0x879d75(0xba)](this[_0x879d75(0xd7)]), this[_0x879d75(0xd7)][_0x879d75(0x102)]['\x7a\x49\x6e\x64\x65\x78'] = 0x4, this[_0x879d75(0xd7)][_0x879d75(0x102)][_0x879d75(0x126)] = Graphics['\x5f\x63\x61\x6e\x76\x61\x73'][_0x879d75(0x102)][_0x879d75(0x126)], this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73'][_0x879d75(0x102)][_0x879d75(0x11c)] = Graphics[_0x879d75(0x124)]['\x73\x74\x79\x6c\x65'][_0x879d75(0x11c)];
    }, _0x114e35[_0x5634f9(0x143)] = function (_0x5b4403) {
        var _0x402712 = _0x5634f9, _0x1f360b;
        try {
            if (!ANET['\x50\x50'][_0x402712(0xdb)]()) {
                if ('\x6e\x43\x50\x51\x73' !== _0x402712(0x149)) {
                    if (_0x35845a['\x69\x73\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x76\x65']()) {
                        if (_0x105671['\x6b\x65\x79\x43\x6f\x64\x65'] === 0x5a || _0x5a8934['\x6b\x65\x79\x43\x6f\x64\x65'] === 0x58 || _0x4868fd[_0x402712(0x141)] === 0x20) {
                            this[_0x402712(0xfe)]();
                            return;
                        }
                    }
                    return _0x5c2089[_0x402712(0x11a)](this, _0x294a21);
                } else
                    return;
            }
            return this['\x5f\x63\x68\x61\x74'] != null ? this[_0x402712(0x10a)][_0x402712(0xea)](_0x5b4403) : _0x402712(0x140) !== '\x65\x58\x47\x6f\x50' ? (_0x1c4cd9 = _0x5500ab, _0x1dceda['\x77'](_0x2a2548)) : NETLobbyChat[_0x402712(0x109)](_0x5b4403);
        } catch (_0x487e3a) {
            return _0x1f360b = _0x487e3a, ANET['\x77'](_0x1f360b);
        }
    }, _0x114e35['\x6c\x6f\x62\x62\x79\x43\x68\x61\x74\x53\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x43\x6c\x69\x63\x6b'] = function () {
        var _0x8cbfc9 = _0x5634f9, _0x1cafdb, _0x1ed7ac;
        try {
            if (_0x8cbfc9(0x105) !== '\x65\x74\x4e\x63\x71')
                return _0x45c06a[_0x8cbfc9(0x11a)](this);
            else {
                if (this[_0x8cbfc9(0x128)] == null) {
                    if (_0x8cbfc9(0xc1) === '\x68\x4b\x64\x72\x48')
                        return;
                    else
                        return this[_0x8cbfc9(0xbc)] != null;
                }
                return (_0x1ed7ac = this[_0x8cbfc9(0x10a)]) != null ? _0x1ed7ac[_0x8cbfc9(0x121)]() : void 0x0;
            }
        } catch (_0x7dbf30) {
            return _0x1cafdb = _0x7dbf30, ANET['\x77'](_0x1cafdb);
        }
    }, _0x114e35[_0x5634f9(0x132)] = function () {
        var _0x34ce92 = _0x5634f9;
        this[_0x34ce92(0xe2)](), this[_0x34ce92(0x10a)] = new NETLobbyChat();
    }, _0x114e35['\x72\x65\x6d\x6f\x76\x65\x4c\x6f\x62\x62\x79\x43\x68\x61\x74'] = function () {
        var _0x586250 = _0x5634f9;
        if (_0x586250(0x125) === _0x586250(0x125)) {
            var _0x1e40b7, _0x7e8e26;
            try {
                if (this[_0x586250(0x128)] == null)
                    return;
                return _0x7e8e26 = document[_0x586250(0xb9)](_0x586250(0xdc)), this['\x5f\x72\x43\x68\x61\x74']['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79'] = _0x586250(0x119), this[_0x586250(0x128)][_0x586250(0xe8)] != null && this[_0x586250(0x128)]['\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65'][_0x586250(0xf7)](this[_0x586250(0x128)]), this[_0x586250(0x128)] = null, this[_0x586250(0x10a)] = null;
            } catch (_0x2dde9f) {
                return _0x1e40b7 = _0x2dde9f, ANET['\x77'](_0x1e40b7);
            }
        } else
            _0x50539b = _0x136f3b, _0x3e295c['\x77'](_0x2746f9);
    }, _0x114e35[_0x5634f9(0xe4)] = function () {
        var _0x9e8787 = _0x5634f9, _0x373ee4;
        _0x373ee4 = document[_0x9e8787(0x148)](_0x9e8787(0xe3))[0x0], _0x373ee4[_0x9e8787(0xee)]('\x62\x65\x66\x6f\x72\x65\x65\x6e\x64', _0x9e8787(0x139)), _0x373ee4[_0x9e8787(0xee)](_0x9e8787(0x115), _0x9e8787(0xfb));
    }, _0x114e35['\x5f\x63\x72\x65\x61\x74\x65\x4c\x6f\x61\x64\x53\x70\x69\x6e\x6e\x65\x72'] = function () {
        var _0x365456 = _0x5634f9;
        this[_0x365456(0x134)] = document[_0x365456(0x10e)](_0x365456(0x103)), this[_0x365456(0x134)]['\x69\x64'] = _0x365456(0xb5), this[_0x365456(0xbb)] = null;
    }, _0x114e35['\x5f\x63\x72\x65\x61\x74\x65\x4e\x6f\x74\x69\x66\x79'] = function () {
        var _0x1015de = _0x5634f9;
        if (_0x1015de(0xce) !== '\x52\x55\x50\x78\x4a')
            this['\x5f\x6e\x6f\x74\x69\x66\x79'] = new Notyf({
                '\x64\x75\x72\x61\x74\x69\x6f\x6e': 0x578,
                '\x70\x6f\x73\x69\x74\x69\x6f\x6e': {
                    '\x78': '\x63\x65\x6e\x74\x65\x72',
                    '\x79': _0x1015de(0xb7)
                },
                '\x72\x69\x70\x70\x6c\x65': ![]
            });
        else {
            this[_0x1015de(0xfe)]();
            return;
        }
    }, _0x114e35['\x5f\x63\x72\x65\x61\x74\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x41\x6c\x65\x72\x74'] = function (_0x500bae, _0x3fa26b) {
        var _0x5be41d = _0x5634f9;
        if ('\x62\x6d\x4c\x77\x42' !== _0x5be41d(0x10f))
            return this[_0x5be41d(0x13a)] === !![];
        else {
            var _0x1110e6;
            this['\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73'] = document[_0x5be41d(0x10e)](_0x5be41d(0xcb)), this[_0x5be41d(0x120)]['\x69\x64'] = _0x5be41d(0xb0), this[_0x5be41d(0x120)]['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74'][_0x5be41d(0xde)]('\x73\x70\x65\x65\x63\x68\x2d\x62\x75\x62\x62\x6c\x65'), _0x1110e6 = _0x5be41d(0xd3) + _0x500bae + _0x5be41d(0x11f) + _0x5be41d(0xcc) + _0x3fa26b + _0x5be41d(0x147), this[_0x5be41d(0x120)][_0x5be41d(0xee)](_0x5be41d(0x115), _0x1110e6), this[_0x5be41d(0xd7)][_0x5be41d(0xd4)](this[_0x5be41d(0x120)]);
        }
    }, _0x114e35[_0x5634f9(0x10c)] = function () {
        var _0x1d95ec = _0x5634f9;
        this[_0x1d95ec(0xd7)] = document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74'](_0x1d95ec(0x103)), this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73']['\x69\x64'] = '\x61\x6e\x65\x74\x43\x61\x6e\x76\x61\x73\x45\x6c\x65\x6d\x65\x6e\x74\x73', this[_0x1d95ec(0xd7)][_0x1d95ec(0x102)][_0x1d95ec(0xf1)] = 0x4, this['\x75\x70\x64\x61\x74\x65\x43\x61\x6e\x76\x61\x73\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73'](), document[_0x1d95ec(0xe7)]['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](this['\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73']);
    }, _0x114e35[_0x5634f9(0xdd)] = function (_0x2dbdba, _0x5dd054) {
        var _0x197e06 = _0x5634f9;
        if (_0x197e06(0xff) !== '\x77\x45\x6c\x4e\x58') {
            if (!_0x5e0dc8['\x50\x50'][_0x197e06(0xdb)]())
                return;
            return this[_0x197e06(0x10a)] != null ? this[_0x197e06(0x10a)]['\x6f\x6e\x4d\x65\x73\x73\x61\x67\x65\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'](_0xb956cf) : _0x468d4b[_0x197e06(0x109)](_0x589c87);
        } else {
            var _0x411695;
            this[_0x197e06(0x122)] = document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74'](_0x197e06(0x103)), this['\x5f\x69\x6e\x70\x75\x74']['\x69\x64'] = _0x197e06(0x136), this['\x5f\x69\x6e\x70\x75\x74']['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']('\x6d\x6f\x75\x73\x65\x65\x6e\x74\x65\x72', function () {
                var _0x273997 = _0x197e06;
                if (_0x273997(0x11d) === _0x273997(0xb1))
                    return;
                else
                    return HUIManager[_0x273997(0x13a)] = !![];
            }), this[_0x197e06(0x122)][_0x197e06(0x10d)](_0x197e06(0xe0), function () {
                return HUIManager['\x5f\x69\x73\x4d\x6f\x75\x73\x65\x48\x6f\x76\x65\x72\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74'] = ![];
            }), this[_0x197e06(0x122)]['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74'][_0x197e06(0xde)]('\x66\x6f\x72\x6d\x5f\x5f\x67\x72\x6f\x75\x70'), this[_0x197e06(0x122)][_0x197e06(0xca)][_0x197e06(0xde)](_0x197e06(0x107)), _0x5dd054 == null && (_0x5dd054 = ANET['\x50\x50']['\x67\x65\x74\x54\x65\x78\x74\x49\x6e\x70\x75\x74\x4d\x61\x78\x4c\x65\x6e\x67\x74\x68']()), _0x411695 = '\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x22\x69\x6e\x70\x75\x74\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x66\x6f\x72\x6d\x5f\x5f\x66\x69\x65\x6c\x64\x22\x20\x70\x6c\x61\x63\x65\x68\x6f\x6c\x64\x65\x72\x3d\x22' + _0x2dbdba + _0x197e06(0x11e) + _0x5dd054 + '\x22\x20\x6e\x61\x6d\x65\x3d\x22\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65\x22\x20\x69\x64\x3d\x27\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65\x27\x20\x72\x65\x71\x75\x69\x72\x65\x64\x20\x2f\x3e\x20\x3c\x6c\x61\x62\x65\x6c\x20\x66\x6f\x72\x3d\x22\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x66\x6f\x72\x6d\x5f\x5f\x6c\x61\x62\x65\x6c\x22\x3e' + _0x2dbdba + '\x3c\x2f\x6c\x61\x62\x65\x6c\x3e', this[_0x197e06(0x122)][_0x197e06(0xee)](_0x197e06(0x115), _0x411695), this[_0x197e06(0xd7)][_0x197e06(0xd4)](this['\x5f\x69\x6e\x70\x75\x74']);
        }
    }, _0x114e35['\x5f\x63\x72\x65\x61\x74\x65\x4c\x6f\x62\x62\x79\x43\x68\x61\x74'] = function () {
        var _0x2510e3 = _0x5634f9;
        if (_0x2510e3(0xf9) === _0x2510e3(0xd6)) {
            if (this['\x69\x73\x4c\x6f\x61\x64\x65\x72\x41\x63\x74\x69\x76\x65']())
                return;
            this['\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64'] = _0x385fbe(function () {
                var _0x528acf = _0x2510e3;
                if (!_0x41d0a7['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x528acf(0xb5)))
                    return _0x302187[_0x528acf(0xe7)]['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](_0xa03220[_0x528acf(0x134)]);
            }, _0x580add);
        } else {
            var _0x5acfc9;
            _0x5acfc9 = _0x2510e3(0x12f), this[_0x2510e3(0x128)] = document[_0x2510e3(0x10e)]('\x64\x69\x76'), this[_0x2510e3(0x128)]['\x69\x64'] = _0x2510e3(0xf4), this[_0x2510e3(0x128)][_0x2510e3(0xca)][_0x2510e3(0xde)]('\x6d\x73\x67\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72'), this[_0x2510e3(0x128)]['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72'](_0x2510e3(0xb4), function () {
                var _0xe564ef = _0x2510e3;
                return _0xe564ef(0xf0) !== '\x55\x47\x62\x66\x74' ? _0x2e4e9e[_0xe564ef(0x13a)] = ![] : HUIManager[_0xe564ef(0x13a)] = !![];
            }), this[_0x2510e3(0x128)][_0x2510e3(0x10d)](_0x2510e3(0xe0), function () {
                var _0x4cca2b = _0x2510e3;
                return HUIManager[_0x4cca2b(0x13a)] = ![];
            }), this[_0x2510e3(0x128)][_0x2510e3(0xee)]('\x62\x65\x66\x6f\x72\x65\x65\x6e\x64', _0x5acfc9), this[_0x2510e3(0x128)][_0x2510e3(0x13b)] = ![], this[_0x2510e3(0xd7)]['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](this[_0x2510e3(0x128)]);
        }
    }, _0x114e35['\x5f\x73\x77\x69\x74\x63\x68\x43\x68\x61\x74\x53\x74\x61\x74\x65'] = function () {
        var _0x55812e = _0x5634f9, _0x4e2fd3, _0x1cf828, _0x3a4832, _0x46b6a7;
        if (this[_0x55812e(0x128)] == null)
            return;
        try {
            _0x1cf828 = SceneManager['\x5f\x73\x63\x65\x6e\x65'], _0x3a4832 = document[_0x55812e(0xb9)](_0x55812e(0xeb)), _0x46b6a7 = document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x55812e(0xf8));
            if (this[_0x55812e(0x128)][_0x55812e(0x13b)] === !![])
                _0x3a4832['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74'][_0x55812e(0xfc)]('\x6d\x73\x67\x65\x72\x2d\x6e\x6f\x6e\x65'), _0x46b6a7[_0x55812e(0xca)][_0x55812e(0xde)](_0x55812e(0xb2)), this[_0x55812e(0x128)]['\x5f\x5f\x69\x73\x56\x69\x73\x69\x62\x6c\x65'] = ![], this[_0x55812e(0xcd)]('\x52\x6f\x6f\x6d\x20\x4e\x61\x6d\x65\x2e\x2e\x2e'), this[_0x55812e(0xd0)]($gameTemp[_0x55812e(0x13e)]);
            else {
                if (_0x55812e(0x137) !== _0x55812e(0x137))
                    return this[_0x55812e(0x10a)][_0x55812e(0xea)](_0xaf4a0e);
                else
                    _0x3a4832[_0x55812e(0xca)][_0x55812e(0xde)]('\x6d\x73\x67\x65\x72\x2d\x6e\x6f\x6e\x65'), _0x46b6a7['\x63\x6c\x61\x73\x73\x4c\x69\x73\x74']['\x72\x65\x6d\x6f\x76\x65'](_0x55812e(0xb2)), $gameTemp[_0x55812e(0x13e)] = this['\x67\x65\x74\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'](), this[_0x55812e(0x112)](), this[_0x55812e(0x128)][_0x55812e(0x13b)] = !![];
            }
            _0x1cf828[_0x55812e(0x142)] != null && ('\x4f\x6f\x6a\x52\x61' !== _0x55812e(0x100) ? (this[_0x55812e(0x134)] = _0x316037[_0x55812e(0x10e)](_0x55812e(0x103)), this[_0x55812e(0x134)]['\x69\x64'] = _0x55812e(0xb5), this[_0x55812e(0xbb)] = null) : _0x1cf828[_0x55812e(0x142)](!this['\x5f\x72\x43\x68\x61\x74'][_0x55812e(0x13b)]));
        } catch (_0x393647) {
            _0x4e2fd3 = _0x393647, ANET['\x77'](_0x4e2fd3);
        }
    };
}()), (function () {
    var _0x50167c = _0x36f1, _0x11a049;
    _0x11a049 = Scene_Map[_0x50167c(0xfa)];
}()), (function () {
    var _0x5c5f76 = _0x36f1, _0x33b1cd, _0x5d8dd6, _0x4416b5;
    _0x4416b5 = Input, _0x5d8dd6 = _0x4416b5[_0x5c5f76(0x131)], _0x4416b5[_0x5c5f76(0x131)] = function () {
        var _0x593747 = _0x5c5f76;
        return HUIManager['\x69\x73\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x76\x65']() ? ![] : _0x5d8dd6[_0x593747(0x11a)](this);
    }, _0x33b1cd = _0x4416b5[_0x5c5f76(0x101)], _0x4416b5[_0x5c5f76(0x101)] = function (_0x13037f) {
        var _0x4a53cf = _0x5c5f76;
        if (HUIManager[_0x4a53cf(0x116)]()) {
            if (_0x13037f[_0x4a53cf(0x141)] === 0x5a || _0x13037f['\x6b\x65\x79\x43\x6f\x64\x65'] === 0x58 || _0x13037f['\x6b\x65\x79\x43\x6f\x64\x65'] === 0x20) {
                if (_0x4a53cf(0x146) === _0x4a53cf(0xb8))
                    _0x162883[_0x4a53cf(0xe7)][_0x4a53cf(0xf7)](this[_0x4a53cf(0x134)]);
                else {
                    this['\x63\x6c\x65\x61\x72']();
                    return;
                }
            }
        }
        return _0x33b1cd[_0x4a53cf(0x11a)](this, _0x13037f);
    };
}()), (function () {
    var _0x4caeb8 = _0x36f1, _0x171ee0, _0x3772c3;
    _0x3772c3 = Graphics, _0x171ee0 = _0x3772c3[_0x4caeb8(0xbe)], _0x3772c3['\x5f\x75\x70\x64\x61\x74\x65\x43\x61\x6e\x76\x61\x73'] = function () {
        var _0x37de10 = _0x4caeb8;
        if (_0x37de10(0x12d) === '\x67\x53\x49\x41\x6e')
            return _0x171ee0[_0x37de10(0x11a)](this), HUIManager[_0x37de10(0xc9)]();
        else
            return;
    };
}()));
function _0x2748() {
    var _0x4de269 = [
        '\x7a\x49\x6e\x64\x65\x78',
        '\x6e\x6f\x74\x69\x66\x79\x45\x72\x72\x6f\x72',
        '\x69\x6e\x69\x74',
        '\x61\x6e\x65\x74\x52\x6f\x6f\x6d\x43\x68\x61\x74',
        '\x5f\x6e\x6f\x74\x69\x66\x79',
        '\x67\x65\x74\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65',
        '\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64',
        '\x61\x6e\x65\x74\x2d\x63\x68\x61\x74\x2d\x73\x65\x63\x74\x69\x6f\x6e\x42',
        '\x72\x6d\x68\x65\x77',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x3c\x6c\x69\x6e\x6b\x20\x72\x65\x6c\x3d\x22\x73\x74\x79\x6c\x65\x73\x68\x65\x65\x74\x22\x20\x68\x72\x65\x66\x3d\x22\x63\x73\x73\x2f\x61\x6e\x65\x74\x2e\x63\x73\x73\x22\x20\x2f\x3e\x20\x3c\x6c\x69\x6e\x6b\x20\x72\x65\x6c\x3d\x22\x73\x74\x79\x6c\x65\x73\x68\x65\x65\x74\x22\x20\x68\x72\x65\x66\x3d\x22\x63\x73\x73\x2f\x61\x6e\x65\x74\x5f\x63\x68\x61\x74\x2e\x63\x73\x73\x22\x20\x2f\x3e',
        '\x72\x65\x6d\x6f\x76\x65',
        '\x31\x31\x31\x30\x34\x36\x34\x41\x6d\x6b\x50\x76\x70',
        '\x63\x6c\x65\x61\x72',
        '\x77\x45\x6c\x4e\x58',
        '\x4f\x6f\x6a\x52\x61',
        '\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e',
        '\x73\x74\x79\x6c\x65',
        '\x64\x69\x76',
        '\x31\x32\x32\x35\x34\x74\x58\x74\x6c\x63\x4f',
        '\x65\x74\x4e\x63\x71',
        '\x32\x31\x4d\x6d\x4c\x63\x52\x4e',
        '\x66\x69\x65\x6c\x64',
        '\x73\x75\x63\x63\x65\x73\x73',
        '\x41\x64\x64\x54\x6f\x48\x69\x73\x74\x6f\x72\x79',
        '\x5f\x63\x68\x61\x74',
        '\x56\x55\x4a\x67\x6f',
        '\x5f\x63\x72\x65\x61\x74\x65\x52\x65\x6c\x61\x74\x69\x76\x65\x50\x61\x72\x65\x6e\x74',
        '\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72',
        '\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74',
        '\x62\x6d\x4c\x77\x42',
        '\x4b\x76\x76\x4b\x56',
        '\x65\x72\x72\x6f\x72',
        '\x72\x65\x6d\x6f\x76\x65\x49\x6e\x70\x75\x74',
        '\x6c\x6f\x67',
        '\x74\x75\x45\x69\x55',
        '\x62\x65\x66\x6f\x72\x65\x65\x6e\x64',
        '\x69\x73\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x76\x65',
        '\x48\x55\x49\x4d\x61\x6e\x61\x67\x65\x72',
        '\x62\x4d\x63\x79\x55',
        '\x6e\x6f\x6e\x65',
        '\x63\x61\x6c\x6c',
        '\x69\x73\x55\x6e\x64\x65\x72\x4d\x6f\x75\x73\x65',
        '\x68\x65\x69\x67\x68\x74',
        '\x4b\x46\x55\x50\x41',
        '\x22\x20\x61\x75\x74\x6f\x63\x6f\x6d\x70\x6c\x65\x74\x65\x3d\x22\x6f\x66\x66\x22\x20\x6d\x61\x78\x6c\x65\x6e\x67\x74\x68\x3d\x22',
        '\x3c\x2f\x70\x3e',
        '\x5f\x77\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73',
        '\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65',
        '\x5f\x69\x6e\x70\x75\x74',
        '\x64\x69\x73\x70\x6c\x61\x79',
        '\x5f\x63\x61\x6e\x76\x61\x73',
        '\x53\x61\x6d\x41\x50',
        '\x77\x69\x64\x74\x68',
        '\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72',
        '\x5f\x72\x43\x68\x61\x74',
        '\x45\x6a\x6a\x77\x43',
        '\x61\x6e\x65\x74\x49\x6e\x70\x75\x74\x4e\x61\x6d\x65',
        '\x45\x4c\x74\x47\x4b',
        '\x33\x34\x30\x38\x31\x32\x35\x65\x71\x4c\x74\x6a\x76',
        '\x67\x53\x49\x41\x6e',
        '\x74\x70\x43\x54\x77',
        '\x3c\x73\x65\x63\x74\x69\x6f\x6e\x20\x69\x64\x3d\x22\x61\x6e\x65\x74\x2d\x63\x68\x61\x74\x2d\x73\x65\x63\x74\x69\x6f\x6e\x41\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x63\x6c\x6f\x73\x65\x64\x22\x3e\x20\x3c\x68\x65\x61\x64\x65\x72\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x68\x65\x61\x64\x65\x72\x22\x20\x6f\x6e\x43\x6c\x69\x63\x6b\x3d\x22\x48\x55\x49\x4d\x61\x6e\x61\x67\x65\x72\x2e\x5f\x73\x77\x69\x74\x63\x68\x43\x68\x61\x74\x53\x74\x61\x74\x65\x28\x29\x22\x3e\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x68\x65\x61\x64\x65\x72\x2d\x74\x69\x74\x6c\x65\x22\x3e\x20\x3c\x73\x74\x72\x6f\x6e\x67\x3e\x43\x48\x41\x54\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x20\x3c\x2f\x64\x69\x76\x3e\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x68\x65\x61\x64\x65\x72\x2d\x6f\x70\x74\x69\x6f\x6e\x73\x22\x3e\x20\x3c\x73\x70\x61\x6e\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x66\x61\x73\x20\x66\x61\x2d\x63\x61\x72\x65\x74\x2d\x73\x71\x75\x61\x72\x65\x2d\x75\x70\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x20\x3c\x2f\x64\x69\x76\x3e\x20\x3c\x2f\x68\x65\x61\x64\x65\x72\x3e\x20\x3c\x2f\x73\x65\x63\x74\x69\x6f\x6e\x3e\x20\x3c\x73\x65\x63\x74\x69\x6f\x6e\x20\x69\x64\x3d\x22\x61\x6e\x65\x74\x2d\x63\x68\x61\x74\x2d\x73\x65\x63\x74\x69\x6f\x6e\x42\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x20\x6d\x73\x67\x65\x72\x2d\x6e\x6f\x6e\x65\x22\x3e\x20\x3c\x68\x65\x61\x64\x65\x72\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x68\x65\x61\x64\x65\x72\x22\x20\x6f\x6e\x43\x6c\x69\x63\x6b\x3d\x22\x48\x55\x49\x4d\x61\x6e\x61\x67\x65\x72\x2e\x5f\x73\x77\x69\x74\x63\x68\x43\x68\x61\x74\x53\x74\x61\x74\x65\x28\x29\x22\x3e\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x68\x65\x61\x64\x65\x72\x2d\x74\x69\x74\x6c\x65\x22\x3e\x20\x3c\x73\x74\x72\x6f\x6e\x67\x3e\x43\x48\x41\x54\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x20\x3c\x2f\x64\x69\x76\x3e\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x68\x65\x61\x64\x65\x72\x2d\x6f\x70\x74\x69\x6f\x6e\x73\x22\x3e\x20\x3c\x73\x70\x61\x6e\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x66\x61\x73\x20\x66\x61\x2d\x63\x61\x72\x65\x74\x2d\x73\x71\x75\x61\x72\x65\x2d\x64\x6f\x77\x6e\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x20\x3c\x2f\x64\x69\x76\x3e\x20\x3c\x2f\x68\x65\x61\x64\x65\x72\x3e\x20\x3c\x6d\x61\x69\x6e\x20\x69\x64\x3d\x22\x61\x6e\x65\x74\x2d\x63\x68\x61\x74\x2d\x6d\x61\x69\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x63\x68\x61\x74\x22\x3e\x20\x3c\x2f\x6d\x61\x69\x6e\x3e\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x69\x6e\x70\x75\x74\x61\x72\x65\x61\x22\x3e\x20\x3c\x69\x6e\x70\x75\x74\x20\x69\x64\x3d\x22\x61\x6e\x65\x74\x2d\x63\x68\x61\x74\x2d\x69\x6e\x70\x75\x74\x22\x20\x74\x79\x70\x65\x3d\x22\x74\x65\x78\x74\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x69\x6e\x70\x75\x74\x22\x20\x70\x6c\x61\x63\x65\x68\x6f\x6c\x64\x65\x72\x3d\x22\x45\x6e\x74\x65\x72\x20\x79\x6f\x75\x72\x20\x6d\x65\x73\x73\x61\x67\x65\x2e\x2e\x2e\x22\x3e\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x6f\x6e\x43\x6c\x69\x63\x6b\x3d\x22\x48\x55\x49\x4d\x61\x6e\x61\x67\x65\x72\x2e\x6c\x6f\x62\x62\x79\x43\x68\x61\x74\x53\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x43\x6c\x69\x63\x6b\x28\x29\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x73\x67\x65\x72\x2d\x73\x65\x6e\x64\x2d\x62\x74\x6e\x22\x3e\x53\x65\x6e\x64\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x20\x3c\x2f\x64\x69\x76\x3e\x20\x3c\x2f\x73\x65\x63\x74\x69\x6f\x6e\x3e',
        '\x39\x63\x6a\x53\x46\x44\x6e',
        '\x5f\x73\x68\x6f\x75\x6c\x64\x50\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74',
        '\x73\x68\x6f\x77\x4c\x6f\x62\x62\x79\x43\x68\x61\x74',
        '\x77\x62\x77\x79\x7a',
        '\x5f\x6c\x6f\x61\x64\x65\x72',
        '\x5f\x63\x72\x65\x61\x74\x65\x4c\x6f\x61\x64\x53\x70\x69\x6e\x6e\x65\x72',
        '\x61\x6e\x65\x74\x49\x6e\x70\x75\x74',
        '\x75\x59\x65\x4c\x50',
        '\x38\x35\x35\x37\x38\x39\x48\x70\x49\x4b\x6c\x61',
        '\x3c\x6c\x69\x6e\x6b\x20\x72\x65\x6c\x3d\x22\x73\x74\x79\x6c\x65\x73\x68\x65\x65\x74\x22\x20\x68\x72\x65\x66\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x75\x73\x65\x2e\x66\x6f\x6e\x74\x61\x77\x65\x73\x6f\x6d\x65\x2e\x63\x6f\x6d\x2f\x72\x65\x6c\x65\x61\x73\x65\x73\x2f\x76\x35\x2e\x31\x35\x2e\x34\x2f\x63\x73\x73\x2f\x61\x6c\x6c\x2e\x63\x73\x73\x22\x20\x69\x6e\x74\x65\x67\x72\x69\x74\x79\x3d\x22\x73\x68\x61\x33\x38\x34\x2d\x44\x79\x5a\x38\x38\x6d\x43\x36\x55\x70\x32\x75\x71\x53\x34\x68\x2f\x4b\x52\x67\x48\x75\x6f\x65\x47\x77\x42\x63\x44\x34\x4e\x67\x39\x53\x69\x50\x34\x64\x49\x52\x79\x30\x45\x58\x54\x6c\x6e\x75\x7a\x34\x37\x76\x41\x77\x6d\x65\x47\x77\x56\x43\x68\x69\x67\x6d\x22\x20\x63\x72\x6f\x73\x73\x6f\x72\x69\x67\x69\x6e\x3d\x22\x61\x6e\x6f\x6e\x79\x6d\x6f\x75\x73\x22\x2f\x3e',
        '\x5f\x69\x73\x4d\x6f\x75\x73\x65\x48\x6f\x76\x65\x72\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74',
        '\x5f\x5f\x69\x73\x56\x69\x73\x69\x62\x6c\x65',
        '\x62\x79\x4e\x43\x4c',
        '\x68\x53\x62\x65\x4a',
        '\x6e\x4c\x61\x73\x74\x4e\x65\x74\x77\x6f\x72\x6b\x53\x63\x65\x6e\x65\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65',
        '\x42\x70\x4e\x51\x54',
        '\x65\x58\x47\x6f\x50',
        '\x6b\x65\x79\x43\x6f\x64\x65',
        '\x73\x65\x74\x49\x6e\x70\x75\x74\x41\x6c\x6c\x6f\x77\x65\x64',
        '\x6f\x6e\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x64\x46\x77\x4c\x56',
        '\x76\x78\x6a\x59\x6f',
        '\x6d\x52\x42\x48\x72',
        '\x3c\x2f\x63\x69\x74\x65\x3e',
        '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65',
        '\x6e\x43\x50\x51\x73',
        '\x55\x6a\x6d\x75\x74',
        '\x58\x72\x77\x47\x6e',
        '\x34\x37\x35\x30\x31\x34\x36\x71\x65\x43\x6a\x41\x44',
        '\x61\x6e\x65\x74\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x41\x6c\x65\x72\x74',
        '\x6e\x44\x65\x53\x6f',
        '\x6d\x73\x67\x65\x72\x2d\x6e\x6f\x6e\x65',
        '\x5f\x63\x72\x65\x61\x74\x65\x4e\x6f\x74\x69\x66\x79',
        '\x6d\x6f\x75\x73\x65\x65\x6e\x74\x65\x72',
        '\x61\x6e\x65\x74\x4c\x6f\x61\x64\x65\x72',
        '\x68\x69\x64\x65\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f',
        '\x62\x6f\x74\x74\x6f\x6d',
        '\x57\x69\x4f\x4d\x63',
        '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64',
        '\x5f\x63\x65\x6e\x74\x65\x72\x45\x6c\x65\x6d\x65\x6e\x74',
        '\x5f\x6c\x6f\x61\x64\x65\x72\x54\x68\x72\x65\x61\x64',
        '\x5f\x77\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f\x54\x68\x72\x65\x61\x64',
        '\x73\x79\x4f\x6c\x49',
        '\x5f\x75\x70\x64\x61\x74\x65\x43\x61\x6e\x76\x61\x73',
        '\x6c\x52\x74\x58\x75',
        '\x77\x61\x72\x6e',
        '\x68\x4b\x64\x72\x48',
        '\x4e\x6b\x6c\x66\x53',
        '\x79\x72\x51\x55\x57',
        '\x7a\x4b\x67\x46\x52',
        '\x75\x58\x49\x62\x58',
        '\x62\x48\x56\x63\x53',
        '\x31\x31\x35\x38\x30\x6a\x62\x6d\x6a\x67\x6d',
        '\x50\x47\x50\x63\x6e',
        '\x75\x70\x64\x61\x74\x65\x43\x61\x6e\x76\x61\x73\x48\x74\x6d\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73',
        '\x63\x6c\x61\x73\x73\x4c\x69\x73\x74',
        '\x62\x6c\x6f\x63\x6b\x71\x75\x6f\x74\x65',
        '\x3c\x63\x69\x74\x65\x3e',
        '\x73\x68\x6f\x77\x49\x6e\x70\x75\x74',
        '\x50\x70\x4d\x4a\x57',
        '\x45\x4a\x50\x46\x58',
        '\x73\x65\x74\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65',
        '\x69\x73\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f\x41\x63\x74\x69\x76\x65',
        '\x6d\x73\x67\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72',
        '\x3c\x70\x3e',
        '\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64',
        '\x5f\x64\x69\x73\x61\x62\x6c\x65\x43\x6f\x6e\x74\x65\x78\x74\x4d\x65\x6e\x75',
        '\x56\x64\x72\x61\x51',
        '\x5f\x63\x61\x6e\x76\x61\x73\x52\x65\x6c\x61\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74\x73',
        '\x51\x63\x6b\x58\x51',
        '\x62\x57\x6d\x66\x7a',
        '\x5f\x63\x72\x65\x61\x74\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x41\x6c\x65\x72\x74',
        '\x69\x73\x53\x68\x6f\x77\x4c\x6f\x62\x62\x79\x43\x68\x61\x74',
        '\x61\x6e\x65\x74\x43\x61\x6e\x76\x61\x73\x45\x6c\x65\x6d\x65\x6e\x74\x73',
        '\x5f\x63\x72\x65\x61\x74\x65\x49\x6e\x70\x75\x74\x46\x69\x65\x6c\x64',
        '\x61\x64\x64',
        '\x66\x6f\x63\x75\x73\x49\x6e\x70\x75\x74',
        '\x6d\x6f\x75\x73\x65\x6c\x65\x61\x76\x65',
        '\x47\x53\x47\x5a\x57',
        '\x5f\x63\x72\x65\x61\x74\x65\x4c\x6f\x62\x62\x79\x43\x68\x61\x74',
        '\x68\x65\x61\x64',
        '\x5f\x6c\x6f\x61\x64\x43\x53\x53',
        '\x69\x73\x4c\x6f\x61\x64\x65\x72\x41\x63\x74\x69\x76\x65',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x62\x6f\x64\x79',
        '\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65',
        '\x32\x30\x39\x35\x39\x35\x30\x65\x56\x46\x4f\x50\x43',
        '\x6f\x6e\x4d\x65\x73\x73\x61\x67\x65\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x61\x6e\x65\x74\x2d\x63\x68\x61\x74\x2d\x73\x65\x63\x74\x69\x6f\x6e\x41',
        '\x66\x6f\x63\x75\x73',
        '\x38\x35\x4d\x68\x76\x79\x6b\x67',
        '\x69\x6e\x73\x65\x72\x74\x41\x64\x6a\x61\x63\x65\x6e\x74\x48\x54\x4d\x4c',
        '\x69\x76\x58\x50\x4a',
        '\x55\x47\x62\x66\x74'
    ];
    _0x2748 = function () {
        return _0x4de269;
    };
    return _0x2748();
}

// Generated by CoffeeScript 2.6.1
// * Дополнительные расширения для KDCore

// * Расширение, чтобы без XDev работал плагин
(function() {
  var __STR_P;
  __STR_P = String.prototype.p;
  String.prototype.p = function(anotherText) {
    if (ANET.isDEV()) {
      __STR_P.call(this, anotherText);
    } else {

    }
  };
})();

// * NOTHING


var _0x1d61ae = _0x13c3;
function _0x4d53() {
    var _0x42a042 = [
        '\x57\x69\x74\x68\x54\x69\x6d\x65\x6f\x75\x74',
        '\x32\x39\x30\x36\x30\x6b\x53\x4a\x47\x67\x76',
        '\x45\x6d\x70\x74\x79\x4d\x65\x73\x73\x61\x67\x65',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x65\x6d\x69\x74',
        '\x77\x61\x69\x74\x65\x64',
        '\x36\x51\x52\x6d\x50\x69\x4f',
        '\x33\x32\x5a\x50\x49\x4f\x52\x63',
        '\x73\x65\x74\x46\x72\x6f\x6d',
        '\x61\x70\x70\x6c\x79',
        '\x54\x48\x52\x54\x4c',
        '\x4f\x74\x4d\x6a\x74',
        '\x73\x65\x74\x44\x61\x74\x61',
        '\x36\x31\x37\x30\x35\x36\x32\x42\x45\x6e\x77\x44\x4a',
        '\x41\x52\x44\x4d\x65',
        '\x5f\x6d\x61\x6b\x65\x44\x61\x74\x61',
        '\x31\x30\x39\x35\x37\x32\x4e\x48\x4f\x6d\x65\x50',
        '\x38\x37\x36\x32\x31\x39\x52\x53\x55\x74\x62\x77',
        '\x33\x33\x30\x30\x36\x31\x30\x6e\x4c\x62\x6c\x6c\x48',
        '\x50\x72\x62\x50\x78',
        '\x73\x65\x6e\x64',
        '\x45\x6d\x70\x74\x79\x4d\x65\x73\x73\x61\x67\x65\x57\x69\x74\x68\x46\x6c\x61\x67',
        '\x37\x44\x7a\x44\x56\x41\x6d',
        '\x70\x76\x65\x52\x45',
        '\x53\x6f\x63\x6b\x65\x74',
        '\x73\x65\x74\x54\x6f',
        '\x53\x65\x74\x4f\x77\x6e\x53\x6f\x63\x6b\x65\x74',
        '\x54\x72\x61\x63\x65',
        '\x33\x37\x34\x6a\x49\x74\x5a\x76\x67',
        '\x63\x61\x6c\x6c',
        '\x73\x65\x74\x4e\x61\x6d\x65',
        '\x73\x6f\x63\x6b\x65\x74',
        '\x32\x6d\x77\x57\x70\x53\x4f',
        '\x4f\x53\x78\x76\x45',
        '\x71\x49\x79\x44\x51',
        '\x66\x75\x6c\x6c\x4e\x61\x6d\x65',
        '\x34\x37\x33\x38\x35\x34\x38\x4c\x76\x54\x79\x74\x6f',
        '\x62\x72\x6f\x61\x64\x63\x61\x73\x74',
        '\x36\x30\x32\x32\x32\x31\x36\x68\x69\x6c\x4f\x41\x48',
        '\x4e\x4d\x53',
        '\x4b\x58\x52\x70\x44',
        '\x73\x55\x51\x5a\x58',
        '\x4c\x74\x47\x57\x6a',
        '\x6e\x61\x6d\x65',
        '\x64\x61\x74\x61',
        '\x66\x72\x6f\x6d'
    ];
    _0x4d53 = function () {
        return _0x42a042;
    };
    return _0x4d53();
}
function _0x13c3(_0x5240d3, _0x2581d7) {
    var _0x4d5309 = _0x4d53();
    return _0x13c3 = function (_0x13c32c, _0x21b9c6) {
        _0x13c32c = _0x13c32c - 0x1e0;
        var _0x532c4b = _0x4d5309[_0x13c32c];
        return _0x532c4b;
    }, _0x13c3(_0x5240d3, _0x2581d7);
}
(function (_0x241ae1, _0x2dbe1d) {
    var _0x157bbf = _0x13c3, _0x124957 = _0x241ae1();
    while (!![]) {
        try {
            var _0x381c7b = -parseInt(_0x157bbf(0x209)) / 0x1 * (-parseInt(_0x157bbf(0x1ea)) / 0x2) + -parseInt(_0x157bbf(0x208)) / 0x3 * (parseInt(_0x157bbf(0x1ff)) / 0x4) + parseInt(_0x157bbf(0x20a)) / 0x5 * (-parseInt(_0x157bbf(0x1fe)) / 0x6) + parseInt(_0x157bbf(0x1e0)) / 0x7 * (parseInt(_0x157bbf(0x1f0)) / 0x8) + -parseInt(_0x157bbf(0x205)) / 0x9 + -parseInt(_0x157bbf(0x1f9)) / 0xa * (-parseInt(_0x157bbf(0x1e6)) / 0xb) + parseInt(_0x157bbf(0x1ee)) / 0xc;
            if (_0x381c7b === _0x2dbe1d)
                break;
            else
                _0x124957['push'](_0x124957['shift']());
        } catch (_0x3771b5) {
            _0x124957['push'](_0x124957['shift']());
        }
    }
}(_0x4d53, 0x7658b));
var NetMessage;
NetMessage = function () {
    var _0x2b0e1b = _0x13c3;
    class _0x5dac58 {
        constructor(_0x21364e) {
            var _0x37908d = _0x13c3;
            if (_0x37908d(0x1ec) !== _0x37908d(0x1eb))
                this[_0x37908d(0x1e9)] = _0x21364e, this[_0x37908d(0x1f5)] = '\x74\x72\x61\x63\x65', this[_0x37908d(0x1f7)] = '', this['\x74\x6f'] = '', this[_0x37908d(0x1f6)] = '', this[_0x37908d(0x1fd)] = ![];
            else
                return this[_0x37908d(0x1fa)](_0x1528d8)[_0x37908d(0x1e8)]('\x74\x72\x61\x63\x65')[_0x37908d(0x204)](_0x520267);
        }
        ['\x73\x65\x74\x4e\x61\x6d\x65'](_0x445b18) {
            var _0x35a3d7 = _0x13c3;
            return this[_0x35a3d7(0x1f5)] = _0x445b18, this;
        }
        [_0x2b0e1b(0x1e3)](_0x44260d) {
            return this['\x74\x6f'] = _0x44260d, this;
        }
        [_0x2b0e1b(0x200)](_0x2a6f40) {
            var _0x272025 = _0x2b0e1b;
            return _0x272025(0x1f4) !== _0x272025(0x1f3) ? (this['\x66\x72\x6f\x6d'] = _0x2a6f40, this) : this[_0x272025(0x1f5)] + '\x5f' + this[_0x272025(0x1f6)]['\x69\x64'];
        }
        [_0x2b0e1b(0x204)](_0x225cb3) {
            var _0x76decf = _0x2b0e1b;
            return this[_0x76decf(0x1f6)] = _0x225cb3, this;
        }
        [_0x2b0e1b(0x1ed)]() {
            var _0x5e6823 = _0x2b0e1b;
            return _0x5e6823(0x1f2) === _0x5e6823(0x1e1) ? this[_0x5e6823(0x1f6)] != null && this[_0x5e6823(0x1f6)]['\x69\x64'] ? this[_0x5e6823(0x1f5)] + '\x5f' + this['\x64\x61\x74\x61']['\x69\x64'] : this[_0x5e6823(0x1f5)] : this[_0x5e6823(0x1f6)] != null && this[_0x5e6823(0x1f6)]['\x69\x64'] ? this[_0x5e6823(0x1f5)] + '\x5f' + this[_0x5e6823(0x1f6)]['\x69\x64'] : this[_0x5e6823(0x1f5)];
        }
        [_0x2b0e1b(0x20c)](_0x4bc181) {
            var _0x4112e0 = _0x2b0e1b;
            return this['\x73\x6f\x63\x6b\x65\x74']['\x65\x6d\x69\x74'](this['\x6e\x61\x6d\x65'], this[_0x4112e0(0x207)](_0x4bc181)), this;
        }
        [_0x2b0e1b(0x1fb)](_0x21509d, _0x474cfc) {
            var _0x1bb4cf = _0x2b0e1b;
            return this[_0x1bb4cf(0x1e9)]['\x65\x6d\x69\x74'](this[_0x1bb4cf(0x1f5)], this[_0x1bb4cf(0x207)](_0x474cfc), _0x21509d), this;
        }
        ['\x67\x65\x74'](_0x24beb6, _0x71420, _0x4bd554, _0x471b15) {
            var _0x4ef006 = _0x2b0e1b;
            if (_0x4ef006(0x206) === _0x4ef006(0x206)) {
                var _0x261b2e;
                return _0x261b2e = _0x5dac58['\x57\x69\x74\x68\x54\x69\x6d\x65\x6f\x75\x74'], this[_0x4ef006(0x1e9)][_0x4ef006(0x1fc)](this['\x6e\x61\x6d\x65'], this['\x5f\x6d\x61\x6b\x65\x44\x61\x74\x61'](_0x471b15), _0x261b2e(_0x24beb6, _0x71420, _0x4bd554)), this;
            } else {
                var _0x15de57;
                return _0x15de57 = _0x5ee59e['\x57\x69\x74\x68\x54\x69\x6d\x65\x6f\x75\x74'], this[_0x4ef006(0x1e9)]['\x65\x6d\x69\x74'](this['\x6e\x61\x6d\x65'], this[_0x4ef006(0x207)](_0x420e4a), _0x15de57(_0x4ff98a, _0x43d11f, _0x1aeac7)), this;
            }
        }
        [_0x2b0e1b(0x1ef)](_0x410f74) {
            var _0x39d3ce = _0x2b0e1b;
            if (_0x39d3ce(0x20b) === _0x39d3ce(0x203)) {
                if (_0x4940ad)
                    return;
                return _0x40580e = !![], _0x509bbb(_0x6ce5f4), _0x652311[_0x39d3ce(0x201)](this, _0x1897d1);
            } else
                return this[_0x39d3ce(0x1e9)]['\x62\x72\x6f\x61\x64\x63\x61\x73\x74'][_0x39d3ce(0x1fc)](this[_0x39d3ce(0x1f5)], this[_0x39d3ce(0x207)](_0x410f74));
        }
        [_0x2b0e1b(0x207)](_0x7d30c2 = null) {
            var _0x54c182 = _0x2b0e1b, _0x45a4e9;
            return _0x45a4e9 = {}, _0x7d30c2 == null ? _0x7d30c2 = this[_0x54c182(0x1f6)] : this[_0x54c182(0x1f6)] = _0x7d30c2, _0x45a4e9[_0x54c182(0x1f6)] = _0x7d30c2, _0x45a4e9[_0x54c182(0x1f7)] = this[_0x54c182(0x1f7)], _0x45a4e9['\x74\x6f'] = this['\x74\x6f'], _0x45a4e9[_0x54c182(0x1fd)] = this[_0x54c182(0x1fd)], _0x45a4e9;
        }
        static [_0x2b0e1b(0x1e4)](_0x5df53d) {
            return _0x5dac58['\x53\x6f\x63\x6b\x65\x74'] = _0x5df53d;
        }
        static [_0x2b0e1b(0x1e5)](_0x3eb61b, _0x457ef5) {
            var _0xa68b92 = _0x2b0e1b;
            return this[_0xa68b92(0x1fa)](_0x457ef5)[_0xa68b92(0x1e8)]('\x74\x72\x61\x63\x65')[_0xa68b92(0x204)](_0x3eb61b);
        }
        static ['\x45\x6d\x70\x74\x79\x4d\x65\x73\x73\x61\x67\x65'](_0x92f50e = null) {
            var _0x3c4c47 = _0x2b0e1b, _0xd6e023, _0x44c2c0;
            return _0x44c2c0 = _0x92f50e, _0x92f50e == null && (_0x44c2c0 = this[_0x3c4c47(0x1e2)]), _0xd6e023 = new _0x5dac58(_0x44c2c0), _0x44c2c0 != null && _0xd6e023['\x73\x65\x74\x46\x72\x6f\x6d'](_0x44c2c0['\x69\x64']), _0xd6e023;
        }
        static [_0x2b0e1b(0x20d)](_0x4d7dc0, _0xe5284, _0x3db304 = null) {
            var _0x52e7f1 = _0x2b0e1b, _0x2f6f8e;
            return _0x2f6f8e = this['\x45\x6d\x70\x74\x79\x4d\x65\x73\x73\x61\x67\x65'](_0x3db304), _0x2f6f8e[_0x52e7f1(0x204)]({
                '\x69\x64': _0x4d7dc0,
                '\x63\x6f\x6e\x74\x65\x6e\x74': _0xe5284
            }), _0x2f6f8e;
        }
        static [_0x2b0e1b(0x1f8)](_0x392ee5, _0x4309ed, _0x4e949e) {
            var _0x4dd21d = _0x2b0e1b;
            if (_0x4dd21d(0x202) === _0x4dd21d(0x202)) {
                var _0x24055e, _0x3f7062;
                return _0x24055e = ![], _0x3f7062 = setTimeout(function () {
                    if (_0x24055e)
                        return;
                    return _0x24055e = !![], _0x4309ed();
                }, _0x4e949e), function (..._0x153e7a) {
                    var _0x588548 = _0x4dd21d;
                    if (_0x24055e)
                        return;
                    return _0x24055e = !![], clearTimeout(_0x3f7062), _0x392ee5[_0x588548(0x201)](this, _0x153e7a);
                };
            } else
                _0x138b56[_0x4dd21d(0x200)](_0x4c2c5d['\x69\x64']);
        }
    }
    ;
    return _0x5dac58['\x53\x6f\x63\x6b\x65\x74'] = null, _0x5dac58;
}[_0x1d61ae(0x1e7)](this), window[_0x1d61ae(0x1f1)] = NetMessage, window['\x4e\x65\x74\x4d\x65\x73\x73\x61\x67\x65'] = NetMessage;

// Generated by CoffeeScript 2.6.1
//@[GLOBAL]

// * Статический класс для работы со структурой сетевых данных игрока
var NetPlayerDataWrapper;

NetPlayerDataWrapper = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetPlayerDataWrapper.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NetPlayerDataWrapper;
  //! НЕ ЗАБЫВАТЬ обновить PlayerData.js на сервере, если добавляется поле!
  // * Все поля структуры
  _.createLocal = function() {
    var plName;
    // * Загружаем с настроек, если нету, то случайное
    if (String.any(ConfigManager.netPlayerName)) {
      plName = ConfigManager.netPlayerName;
    } else {
      if ($gameTemp._tempPlayerNetworkName == null) {
        $gameTemp._tempPlayerNetworkName = "Player " + Math.randomInt(1000);
      }
      plName = $gameTemp._tempPlayerNetworkName;
    }
    return {
      id: ANNetwork.myId(),
      name: plName,
      mapId: 0,
      actorId: 0,
      index: 0,
      scene: "",
      characterReady: false,
      isMapMaster: false,
      onEvent: 0,
      onCommonEvent: 0,
      isReadyInRoom: false
    };
  };
  _.isHaveCharacterInGame = function(p) {
    return p.characterReady === true && p.actorId > 0;
  };
  _.isOnMapScene = function(p) {
    return this.isCharOnMap(p) && p.scene === "map";
  };
  _.isOnBattleScene = function(p) {
    return this.getRequestedNetworkState(p) === 5;
  };
  _.isFreeOnMap = function(p) {
    return !this.isOnAnyEvent(p) && this.isOnMapScene(p);
  };
  _.isCharOnMap = function(p) {
    return (p != null) && p.mapId === $gameMap.mapId() && p.characterReady === true;
  };
  _.isCurrentPlayerActor = function(actor, p) {
    return (p != null) && actor.actorId() === p.actorId;
  };
  _.isOnEvent = function(p, eventId) {
    return (p != null) && p.onEvent === eventId;
  };
  _.getRequestedNetworkState = function(p) {
    if (p.scene === "menu") {
      return 2;
    }
    if (p.scene === "trade") {
      return 3;
    }
    if (p.scene === "battle") {
      return 5;
    }
    if (p.scene === "chat") {
      return 6;
    }
    if (_.isOnAnyEvent(p)) {
      return 1;
    }
    return -1;
  };
  _.getNetCharacterForPlayer = function(p) {
    if (p == null) {
      return null;
    }
    return $gameMap.networkCharacterById(p.id);
  };
  _.getActorForPlayer = function(p) {
    if (p == null) {
      return null;
    }
    return $gameActors.actor(p.actorId);
  };
  _.isOnAnyEvent = function(p) {
    if (p == null) {
      return false;
    }
    return (p.onEvent > 0 || p.onCommonEvent > 0) && _.isCharOnMap(p);
  };
})();

// ■ END NetPlayerDataWrapper.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]

// * Статический класс для работы со структурой сетевых данных комнаты
var NetRoomDataWrapper;

NetRoomDataWrapper = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetRoomDataWrapper.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NetRoomDataWrapper;
  // * Все поля структуры
  _.createLocal = function() {
    return {
      name: "Room " + Math.randomInt(100),
      masterId: "",
      masterName: "",
      inGame: false,
      playersIds: [],
      readyPlayersIds: [],
      gameId: 0,
      gameTitle: "",
      rpgVersion: 0,
      maxPlayers: 0,
      gameMode: 0,
      canConnect: true,
      uniqueSaveID: null
    };
  };
  _.isRoomFull = function(r) {
    if (r == null) {
      return true;
    }
    return r.playersIds.length >= r.maxPlayers;
  };
  _.isRoomProperToJoin = function(r) {
    var e;
    if (r == null) {
      return false;
    }
    try {
      if (r.gameId !== ANET.VD.getGameVersion()) {
        // --- Общие проверки ---

        // * Нельзя подключиться если разные игры
        return false;
      }
      if (_.isRoomFull(r)) {
        // * Нельзя подключаться, если комната полная
        return false;
      }
      if (!_.isMyRPGVersion(r)) {
        // * Если разные движки
        return false;
      }
      // --- Проверки режима ---

      // * Если ЗАПРЕЩЕНО подключаться к запущенной игре
      if (ANET.PP.isJoinStartedRoomAllowed() === false) {
        if (_.isStartedGameRoom(r)) {
          // * Нельзя подключаться к уже запущенной игре
          return false;
        }
        // * Если комната загрузки сетевого сохранения
        if (_.isLoadGameRoom(r)) {
          if (!DataManager.nIsHaveNetworkSaveWithId(r.uniqueSaveID)) {
            // * То клиент должен иметь файл данного сохранения
            return false;
          }
        }
      } else {
        // * Если комната загрузки сетевого сохранения
        if (_.isLoadGameRoom(r)) {
          if (!ANET.PP.isJoinStartedAndLoadedRoom()) {
            // * Нельзя подключиться к загруженной игре (уже запущенной) если ОТКЛЮЧЁН соответсвующий параметр
            return false;
          }
        }
      }
    } catch (error) {
      
      // * Если специальный флаг
      //TODO: Пока не обрабатывается
      //if r.canConnect is false
      //    return false
      e = error;
      ANET.w(e);
    }
    return true;
  };
  _.isMyRPGVersion = function(r) {
    if (r == null) {
      return false;
    }
    if (r.rpgVersion === 0) {
      return KDCore.isMZ();
    } else {
      return KDCore.isMV();
    }
  };
  _.isLoadGameRoom = function(r) {
    return r.uniqueSaveID != null;
  };
  _.isStartedGameRoom = function(r) {
    return r.inGame === true;
  };
})();

// ■ END NetRoomDataWrapper.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var NetworkClientHandler;

NetworkClientHandler = class NetworkClientHandler {
  constructor(socket) {
    this.socket = socket;
    this._init();
  }

  disconnect() {
    var ref;
    return (ref = this.socket) != null ? ref.disconnect() : void 0;
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NetworkClientHandler.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _, _C;
  //@[DEFINES]
  _C = null; //? ClientManager
  _ = NetworkClientHandler.prototype;
  _._init = function() {
    _C = NetClientMethodsManager;
    // * Задаём ссылку на собственный сокет в класс сообщений
    // Чтобы можно было отправлять сообщения каждый раз не передавая сокет
    NetMessage.SetOwnSocket(this.socket);
    return this._handleCommands();
  };
  _._handleCommands = function() {
    this._handleBaseSocketEvents();
    this._handleDebugEvents();
    return this._handleANETServerEvents();
  };
  _._handleBaseSocketEvents = function() {
    this.socket.on('disconnect', function() {
      return _C.onDisconnect();
    });
    this.socket.on('connect', function() {
      return _C.onConnect();
    });
    return this.socket.on('connect_error', function() {
      return _C.onConnectionError();
    });
  };
  _._handleDebugEvents = function() {
    return this.socket.on('trace', function(n) {
      return console.log("Trace: " + n);
    });
  };
  _._handleANETServerEvents = function() {
    return this.socket.on('serverPrc', (n) => {
      return this._handleServerPrcEvent(n);
    });
  };
  _._handleServerPrcEvent = function(n) {
    var content, eventHandlerMethodName, flag, id;
    ({id, flag, content} = n);
    eventHandlerMethodName = id + "_" + flag;
    if (_C.isExistPrcEvent(eventHandlerMethodName)) {
      return _C.handlePrcEvent(eventHandlerMethodName, content);
    } else {
      return console.log("Unknown Event from server " + eventHandlerMethodName);
    }
  };
})();

// ■ END NetworkClientHandler.coffee
//---------------------------------------------------------------------------


var _0x363259 = _0x59c4;
function _0x59c4(_0x5c4c95, _0x4fdbfa) {
    var _0x3f62e1 = _0x3f62();
    return _0x59c4 = function (_0x59c42f, _0x3ee90e) {
        _0x59c42f = _0x59c42f - 0xb2;
        var _0x50df23 = _0x3f62e1[_0x59c42f];
        return _0x50df23;
    }, _0x59c4(_0x5c4c95, _0x4fdbfa);
}
(function (_0x126efe, _0x5be257) {
    var _0x3334e2 = _0x59c4, _0x2c99b4 = _0x126efe();
    while (!![]) {
        try {
            var _0xd3e28f = -parseInt(_0x3334e2(0xd1)) / 0x1 + -parseInt(_0x3334e2(0xb7)) / 0x2 * (-parseInt(_0x3334e2(0xb9)) / 0x3) + -parseInt(_0x3334e2(0xb5)) / 0x4 * (parseInt(_0x3334e2(0xca)) / 0x5) + -parseInt(_0x3334e2(0xd3)) / 0x6 * (-parseInt(_0x3334e2(0xbe)) / 0x7) + parseInt(_0x3334e2(0xcb)) / 0x8 + -parseInt(_0x3334e2(0xcc)) / 0x9 * (parseInt(_0x3334e2(0xc7)) / 0xa) + parseInt(_0x3334e2(0xc0)) / 0xb;
            if (_0xd3e28f === _0x5be257)
                break;
            else
                _0x2c99b4['push'](_0x2c99b4['shift']());
        } catch (_0x4a49be) {
            _0x2c99b4['push'](_0x2c99b4['shift']());
        }
    }
}(_0x3f62, 0xbf183), window[_0x363259(0xcf)] = function () {
}, (function () {
    var _0xdbbb0 = _0x363259, _0x1563b8, _0x474613;
    _0x1563b8 = new KDCore[(_0xdbbb0(0xd2))](_0xdbbb0(0xb8)), _0x1563b8[_0xdbbb0(0xc3)](KDCore[_0xdbbb0(0xb3)]['\x42\x4c\x55\x45'][_0xdbbb0(0xc1)](0x41), KDCore[_0xdbbb0(0xb3)]['\x42\x4c\x41\x43\x4b'][_0xdbbb0(0xc1)](0x41)), _0x1563b8['\x6f\x6e'](), _0x474613 = window[_0xdbbb0(0xcf)], _0x474613[_0xdbbb0(0xc8)] = function (_0x1cce21, _0x5bddde, _0x4bf762, _0x596ead, _0x906e04) {
        var _0x512996 = _0xdbbb0;
        if (_0x512996(0xce) === _0x512996(0xce)) {
            var _0x20cdf1;
            try {
                if (!ANNetwork[_0x512996(0xb2)]()) {
                    if ('\x67\x43\x61\x64\x52' === _0x512996(0xc5))
                        _0x2818c1(function () {
                            var _0xaec190 = _0x512996;
                            if (_0x21809e['\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65'] != null)
                                return _0x56ce17[_0xaec190(0xbc)](_0xc6a504);
                        }, 0x190);
                    else
                        return;
                }
                return ANNetwork['\x73\x65\x74\x57\x61\x69\x74'](), String['\x61\x6e\x79'](_0x906e04) && setTimeout(function () {
                    var _0x15189a = _0x512996;
                    if ('\x62\x75\x49\x71\x6c' !== _0x15189a(0xb6)) {
                        if (ANClientResponceManager['\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65'] != null)
                            return nAPI[_0x15189a(0xbc)](_0x906e04);
                    } else
                        return _0x150f13 = _0x5776c3, _0x42da68['\x77'](_0x124945);
                }, 0x190), ANClientResponceManager['\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65'] = {
                    '\x69\x64': _0x1cce21[_0x512996(0xc2)](),
                    '\x74\x69\x6d\x65\x6f\x75\x74': setTimeout(function () {
                        var _0x21dd63 = _0x512996;
                        return ANClientResponceManager[_0x21dd63(0xbb)](), _0x4bf762();
                    }, _0x596ead),
                    '\x63\x61\x6c\x6c\x62\x61\x63\x6b': _0x5bddde
                }, console[_0x512996(0xcd)](ANClientResponceManager[_0x512996(0xb4)]['\x69\x64']), ANNetwork[_0x512996(0xc6)](_0x1cce21);
            } catch (_0x5a1fa4) {
                return _0x20cdf1 = _0x5a1fa4, ANET['\x77'](_0x20cdf1);
            }
        } else {
            if (_0x175292[_0x512996(0xb4)] == null)
                return;
            _0x2cad2f['\x72\x65\x73\x65\x74\x57\x61\x69\x74'](), _0x547459['\x68\x69\x64\x65\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65'](), _0x10c5f1(_0x1fcfe7[_0x512996(0xb4)]['\x74\x69\x6d\x65\x6f\x75\x74']), _0x1b918a[_0x512996(0xb4)] = null;
        }
    }, _0x474613[_0xdbbb0(0xba)] = function (_0x1246f3, _0x50f98a) {
        var _0x24d299 = _0xdbbb0;
        if (_0x24d299(0xd0) === _0x24d299(0xbf))
            return;
        else {
            var _0x36360c;
            if (ANClientResponceManager['\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65'] == null)
                return;
            _0x36360c = ANClientResponceManager[_0x24d299(0xb4)], _0x36360c['\x69\x64'] === _0x1246f3 && ('\x4a\x5a\x6b\x79\x52' === '\x44\x72\x61\x6e\x6f' ? (this['\x5f\x63\x6f\x6e\x74\x69\x6e\x75\x65\x47\x61\x6d\x65\x50\x72\x6f\x63\x65\x73\x73'](), _0x276881[_0x24d299(0xd4)](_0x286453)) : (this[_0x24d299(0xbb)](), _0x36360c[_0x24d299(0xd4)](_0x50f98a)));
        }
    }, _0x474613[_0xdbbb0(0xbb)] = function () {
        var _0x22bf93 = _0xdbbb0;
        if ('\x61\x6d\x56\x6f\x61' !== _0x22bf93(0xbd)) {
            if (ANClientResponceManager[_0x22bf93(0xb4)] == null)
                return;
            ANNetwork[_0x22bf93(0xd5)](), nAPI[_0x22bf93(0xc4)](), clearTimeout(ANClientResponceManager['\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65'][_0x22bf93(0xc9)]), ANClientResponceManager[_0x22bf93(0xb4)] = null;
        } else
            return _0x5b3f64['\x5f\x63\x6f\x6e\x74\x69\x6e\x75\x65\x47\x61\x6d\x65\x50\x72\x6f\x63\x65\x73\x73'](), _0x793368();
    };
}()));
function _0x3f62() {
    var _0x16533b = [
        '\x41\x4e\x43\x6c\x69\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x48\x55\x7a\x46\x78',
        '\x31\x32\x30\x35\x33\x35\x39\x7a\x72\x6d\x73\x4c\x4e',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x31\x33\x38\x6d\x77\x5a\x4e\x48\x48',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x43\x6f\x6c\x6f\x72',
        '\x63\x75\x72\x72\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x63\x65',
        '\x34\x31\x30\x38\x38\x32\x38\x48\x7a\x6c\x79\x4b\x56',
        '\x57\x73\x6c\x68\x67',
        '\x36\x35\x32\x30\x72\x6e\x50\x72\x4e\x49',
        '\x43\x6c\x69\x65\x6e\x74\x52\x65\x73\x70',
        '\x36\x39\x49\x48\x68\x4a\x67\x61',
        '\x6f\x6e\x52\x65\x73\x70\x6f\x6e\x63\x65\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x5f\x63\x6f\x6e\x74\x69\x6e\x75\x65\x47\x61\x6d\x65\x50\x72\x6f\x63\x65\x73\x73',
        '\x73\x68\x6f\x77\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65',
        '\x69\x4a\x58\x51\x66',
        '\x32\x32\x36\x36\x34\x36\x74\x66\x73\x63\x51\x71',
        '\x4f\x6e\x72\x62\x42',
        '\x32\x31\x38\x38\x39\x39\x38\x39\x43\x59\x65\x7a\x58\x74',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x66\x75\x6c\x6c\x4e\x61\x6d\x65',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x68\x69\x64\x65\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65',
        '\x74\x59\x58\x65\x48',
        '\x73\x65\x6e\x64',
        '\x36\x37\x31\x30\x43\x6a\x51\x47\x67\x69',
        '\x73\x65\x6e\x64\x52\x65\x73\x70\x6f\x6e\x63\x65',
        '\x74\x69\x6d\x65\x6f\x75\x74',
        '\x35\x45\x50\x6f\x64\x65\x64',
        '\x38\x38\x31\x31\x32\x30\x38\x56\x6b\x6d\x47\x70\x69',
        '\x31\x32\x30\x31\x35\x61\x73\x61\x5a\x58\x57',
        '\x6c\x6f\x67',
        '\x62\x79\x57\x50\x42'
    ];
    _0x3f62 = function () {
        return _0x16533b;
    };
    return _0x3f62();
}

var _0x257403 = _0x25c5;
function _0x25c5(_0x50553d, _0x2b67ff) {
    var _0x36e26c = _0x36e2();
    return _0x25c5 = function (_0x25c54d, _0x81d81e) {
        _0x25c54d = _0x25c54d - 0x139;
        var _0x350dbc = _0x36e26c[_0x25c54d];
        return _0x350dbc;
    }, _0x25c5(_0x50553d, _0x2b67ff);
}
(function (_0x9f7f02, _0x532111) {
    var _0x1575e7 = _0x25c5, _0x3aa9f1 = _0x9f7f02();
    while (!![]) {
        try {
            var _0x345fdf = parseInt(_0x1575e7(0x190)) / 0x1 + -parseInt(_0x1575e7(0x1b5)) / 0x2 * (parseInt(_0x1575e7(0x1c2)) / 0x3) + -parseInt(_0x1575e7(0x159)) / 0x4 + parseInt(_0x1575e7(0x18d)) / 0x5 + parseInt(_0x1575e7(0x1bb)) / 0x6 * (parseInt(_0x1575e7(0x18b)) / 0x7) + parseInt(_0x1575e7(0x19b)) / 0x8 * (-parseInt(_0x1575e7(0x1e5)) / 0x9) + parseInt(_0x1575e7(0x15b)) / 0xa;
            if (_0x345fdf === _0x532111)
                break;
            else
                _0x3aa9f1['push'](_0x3aa9f1['shift']());
        } catch (_0x3e57d6) {
            _0x3aa9f1['push'](_0x3aa9f1['shift']());
        }
    }
}(_0x36e2, 0xa1e03), window[_0x257403(0x179)] = function () {
}, (function () {
    var _0x32552d = _0x257403, _0x16df94, _0x3c147a;
    _0x16df94 = new KDCore[(_0x32552d(0x1cf))](_0x32552d(0x19e)), _0x16df94['\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73'](KDCore[_0x32552d(0x172)]['\x41\x51\x55\x41'], KDCore[_0x32552d(0x172)][_0x32552d(0x165)][_0x32552d(0x1e4)](0x23)), _0x16df94['\x6f\x6e'](), _0x3c147a = window[_0x32552d(0x179)], _0x3c147a[_0x32552d(0x1ff)] = function () {
        var _0xc938ce = _0x32552d;
        return this[_0xc938ce(0x1e3)] != null;
    }, _0x3c147a[_0x32552d(0x1ab)] = function () {
        var _0x9a68c4 = _0x32552d;
        return this['\x72\x65\x73\x65\x74'](), this[_0x9a68c4(0x16d)](), ANPlayersManager[_0x9a68c4(0x181)]();
    }, _0x3c147a[_0x32552d(0x13c)] = function () {
        var _0x2568da = _0x32552d;
        this[_0x2568da(0x1cd)] = ![], this[_0x2568da(0x1e3)] = null, this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'] = null, ANBattleManager[_0x2568da(0x206)] = null;
    }, _0x3c147a[_0x32552d(0x16d)] = function () {
        var _0x5613f7 = _0x32552d;
        this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'] = [], this[_0x5613f7(0x205)][_0x5613f7(0x161)](NetPlayerDataWrapper[_0x5613f7(0x1ef)]());
    }, _0x3c147a['\x69\x73\x49\x6e\x69\x74\x65\x64'] = function () {
        var _0x50c807 = _0x32552d;
        return this[_0x50c807(0x205)] != null;
    }, _0x3c147a[_0x32552d(0x1a3)] = function () {
        var _0x319061 = _0x32552d;
        return _0x319061(0x17c) === '\x49\x66\x6d\x6c\x75' ? this[_0x319061(0x1f2)](ANNetwork['\x6d\x79\x49\x64']()) : _0x2acb71['\x73\x61\x76\x65\x4f\x62\x6a\x65\x63\x74\x46\x6f\x72\x4e\x65\x74'](_0x195a50)[_0x319061(0x180)](function () {
            var _0x18860a = _0x319061;
            return _0x82a4e1[_0x18860a(0x17d)](_0x21271f['\x47\x61\x6d\x65'](_0x18860a(0x204), {
                '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0x35c43c,
                '\x67\x61\x6d\x65\x44\x61\x74\x61': _0x48abf8[_0x18860a(0x1c6)]
            })), _0x5c2bc7[_0x18860a(0x1c6)] = null;
        });
    }, _0x3c147a['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64'] = function () {
        var _0xad6335 = _0x32552d;
        if ('\x46\x51\x4b\x7a\x73' === '\x6a\x6a\x45\x57\x56')
            _0x58ed3f = _0xad6335(0x1f3);
        else
            return this['\x6d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61']()[_0xad6335(0x1b7)];
    }, _0x3c147a['\x6d\x79\x49\x6e\x64\x65\x78'] = function () {
        var _0x18d7de = _0x32552d;
        if (_0x18d7de(0x191) !== _0x18d7de(0x191))
            _0x59dab5['\x5f\x61\x63\x74\x6f\x72\x73'][_0x18d7de(0x161)](_0xa04279[_0x18d7de(0x1b7)]);
        else
            return this[_0x18d7de(0x1a3)]()[_0x18d7de(0x1e2)];
    }, _0x3c147a['\x69\x73\x4d\x61\x70\x4d\x61\x73\x74\x65\x72'] = function () {
        var _0x186dd1 = _0x32552d;
        return this[_0x186dd1(0x1a3)]()[_0x186dd1(0x1fb)] === !![];
    }, _0x3c147a[_0x32552d(0x1f5)] = function () {
        var _0x21353b = _0x32552d;
        if (_0x21353b(0x19a) === _0x21353b(0x18a)) {
            var _0x4013bd;
            return _0x4013bd = this[_0x21353b(0x1f6)](), this[_0x21353b(0x205)][_0x21353b(0x1e1)](function (_0x1745f9) {
                var _0x23d7ea = _0x21353b;
                return _0x1745f9[_0x23d7ea(0x1e2)] !== _0x4013bd;
            });
        } else
            return ANBattleManager['\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72']();
    }, _0x3c147a[_0x32552d(0x139)] = function (_0x1bec28) {
        var _0x4f4b7a = _0x32552d, _0xfdb1dc;
        return _0xfdb1dc = this[_0x4f4b7a(0x205)][_0x4f4b7a(0x156)](function (_0x230d5e) {
            return _0x230d5e['\x69\x64'] === _0x1bec28;
        }), _0xfdb1dc != null;
    }, _0x3c147a['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'] = function (_0x267613) {
        var _0xa609cd = _0x32552d, _0x442480;
        _0x442480 = this[_0xa609cd(0x205)][_0xa609cd(0x156)](function (_0x3ffc0d) {
            return _0x3ffc0d['\x69\x64'] === _0x267613;
        });
        if (_0x442480 != null)
            return _0x442480;
        else
            ANET['\x77'](_0xa609cd(0x1d7) + _0x267613 + '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x21');
        return null;
    }, _0x3c147a[_0x32552d(0x13e)] = function (_0x1b0743) {
        var _0x559175 = _0x32552d;
        if (_0x559175(0x1cb) !== '\x66\x63\x73\x54\x69')
            this['\x73\x74\x61\x74\x69\x63\x41\x63\x74\x6f\x72\x42\x69\x6e\x67\x69\x6e\x67']();
        else {
            var _0x1de374;
            _0x1de374 = this[_0x559175(0x205)]['\x66\x69\x6e\x64'](function (_0xcf125b) {
                var _0x21c191 = _0x559175;
                return _0xcf125b[_0x21c191(0x1b7)] === _0x1b0743;
            });
            if (_0x1de374 != null)
                return _0x1de374;
            else
                _0x559175(0x169) === _0x559175(0x169) ? ANET['\x77']('\x50\x6c\x61\x79\x65\x72\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20\x41\x63\x74\x6f\x72\x20\x77\x69\x74\x68\x20\x49\x44\x20' + _0x1b0743 + _0x559175(0x194)) : (this['\x6f\x6e\x52\x6f\x6f\x6d\x50\x6c\x61\x79\x65\x72\x73'](_0x149f92), this['\x72\x65\x66\x72\x65\x73\x68\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65\x73'](), _0x42b50c[_0x559175(0x14b)]());
            return null;
        }
    }, _0x3c147a[_0x32552d(0x210)] = function (_0x2d6310, _0x90b503, _0x474242) {
        var _0x13cbf2 = _0x32552d;
        if (_0x13cbf2(0x199) === _0x13cbf2(0x1d6))
            this[_0x13cbf2(0x1e8)]();
        else {
            var _0x35ec2b, _0x2f9e95, _0x3d2630, _0x2f3fda;
            if (_0x2d6310 === _0x90b503)
                return _0x474242;
            if (_0x474242 == null) {
                if (_0x13cbf2(0x171) !== '\x69\x44\x68\x63\x4c')
                    _0x43e0df[_0x13cbf2(0x184)](_0x32178d);
                else
                    return null;
            }
            _0x2f3fda = null;
            try {
                if (_0x13cbf2(0x1d3) === _0x13cbf2(0x158))
                    return this[_0x13cbf2(0x205)][_0x13cbf2(0x1df)](function (_0x3e7987) {
                        return _0x3e7987['\x63\x68\x61\x72\x61\x63\x74\x65\x72\x52\x65\x61\x64\x79'] === !![];
                    });
                else {
                    switch (_0x90b503) {
                    case _0x13cbf2(0x1b7):
                        _0x2f3fda = this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x41\x63\x74\x6f\x72\x49\x64'](_0x474242);
                        break;
                    case _0x13cbf2(0x182):
                        _0x2f3fda = this[_0x13cbf2(0x1f2)](_0x474242);
                        break;
                    case _0x13cbf2(0x16c):
                        _0x2f3fda = this[_0x13cbf2(0x13e)](_0x474242[_0x13cbf2(0x1b7)]());
                        break;
                    case _0x13cbf2(0x1c0):
                        _0x2f9e95 = this[_0x13cbf2(0x205)][_0x13cbf2(0x13b)](function (_0x110005) {
                            var _0x29a728 = _0x13cbf2;
                            return $gameActors[_0x29a728(0x16c)](_0x110005[_0x29a728(0x1b7)]);
                        }), _0x35ec2b = _0x2f9e95[_0x13cbf2(0x156)](function (_0x461b7b) {
                            return _0x461b7b['\x6e\x61\x6d\x65']() === _0x474242;
                        });
                        _0x35ec2b != null && (_0x2f3fda = this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x41\x63\x74\x6f\x72\x49\x64'](_0x35ec2b[_0x13cbf2(0x1b7)]()));
                        break;
                    case _0x13cbf2(0x145):
                        _0x2f3fda = this[_0x13cbf2(0x205)][_0x13cbf2(0x173)](_0x13cbf2(0x1b3), _0x474242);
                        break;
                    case _0x13cbf2(0x19f):
                        _0x2f3fda = this[_0x13cbf2(0x205)]['\x67\x65\x74\x42\x79\x46\x69\x65\x6c\x64'](_0x13cbf2(0x1e2), _0x474242);
                        break;
                    case _0x13cbf2(0x1f7):
                        _0x2f3fda = _0x474242;
                        break;
                    default:
                        ANET['\x77']('\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x66\x69\x65\x6c\x64\x3a\x20' + _0x90b503 + _0x13cbf2(0x193));
                    }
                    if (_0x2f3fda == null)
                        return null;
                    switch (_0x2d6310) {
                    case '\x61\x63\x74\x6f\x72\x49\x64':
                        return _0x2f3fda[_0x13cbf2(0x1b7)];
                    case _0x13cbf2(0x182):
                        return _0x2f3fda['\x69\x64'];
                    case _0x13cbf2(0x1c0):
                        _0x35ec2b = $gameActors[_0x13cbf2(0x16c)](_0x2f3fda['\x61\x63\x74\x6f\x72\x49\x64']);
                        return _0x35ec2b != null ? _0x13cbf2(0x186) === _0x13cbf2(0x186) ? _0x35ec2b['\x6e\x61\x6d\x65']() : (_0x4d2f78 = _0x19cbc1[_0x13cbf2(0x198)](), _0x1ab716[_0x13cbf2(0x1b1)]() ? _0x48b7c1[_0x13cbf2(0x20e)](_0x14be87)['\x74\x68\x65\x6e'](function () {
                            var _0x31f93d = _0x13cbf2;
                            return _0x32729d[_0x31f93d(0x17d)](_0x18a19e['\x47\x61\x6d\x65'](_0x31f93d(0x204), {
                                '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0xc4d7cf,
                                '\x67\x61\x6d\x65\x44\x61\x74\x61': _0x3136b4[_0x31f93d(0x1c6)]
                            })), _0x24445a['\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x73\x65'] = null;
                        }) : (_0x36e025 = _0xdb5b5a['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x599ee8[_0x13cbf2(0x198)]()), _0x3c082b[_0x13cbf2(0x17d)](_0x5d8dee['\x47\x61\x6d\x65']('\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61', {
                            '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0x4e54b5,
                            '\x67\x61\x6d\x65\x44\x61\x74\x61': _0x485b2a
                        })))) : '';
                        break;
                    case '\x70\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65':
                        return _0x2f3fda[_0x13cbf2(0x1b3)];
                    case _0x13cbf2(0x19f):
                        return _0x2f3fda[_0x13cbf2(0x1e2)];
                    case _0x13cbf2(0x16c):
                        return $gameActors[_0x13cbf2(0x16c)](_0x2f3fda[_0x13cbf2(0x1b7)]);
                    default:
                        return _0x2f3fda;
                    }
                    return null;
                }
            } catch (_0x30ae9a) {
                if ('\x78\x73\x46\x68\x6f' === _0x13cbf2(0x1de))
                    this[_0x13cbf2(0x1e8)]();
                else
                    return _0x3d2630 = _0x30ae9a, ANET['\x77'](_0x3d2630), null;
            }
        }
    }, _0x3c147a[_0x32552d(0x170)] = function () {
        var _0xa75f9a = _0x32552d;
        if ('\x59\x48\x45\x50\x6a' !== '\x59\x48\x45\x50\x6a')
            this[_0xa75f9a(0x1d1)]();
        else
            return this[_0xa75f9a(0x1cd)] = !![], $gameParty['\x73\x65\x74\x75\x70\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65']();
    }, _0x3c147a['\x6f\x6e\x4e\x65\x77\x47\x61\x6d\x65\x4d\x61\x70\x53\x65\x74\x75\x70'] = function () {
        var _0x29bf9c = _0x32552d;
        '\x44\x59\x4b\x7a\x6c' === _0x29bf9c(0x14d) ? ($gameTemp[_0x29bf9c(0x148)] = ![], this[_0x29bf9c(0x163)] = ANNetwork[_0x29bf9c(0x17b)]()) : this[_0x29bf9c(0x1ba)](_0x52de9c, this['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64'](), _0x35efea);
    }, _0x3c147a[_0x32552d(0x13d)] = function () {
        var _0x48f1b4 = _0x32552d;
        if (_0x48f1b4(0x14f) === _0x48f1b4(0x167))
            return this[_0x48f1b4(0x1cd)] = !![], _0x2f3765[_0x48f1b4(0x146)]();
        else {
            ANMapManager['\x73\x65\x6e\x64\x4d\x61\x70\x4c\x6f\x61\x64\x65\x64'](), ANMapManager[_0x48f1b4(0x1c5)](), ANTradeManager[_0x48f1b4(0x1a4)]();
            if (ANET[_0x48f1b4(0x1fc)][_0x48f1b4(0x155)]()) {
                if ('\x6e\x72\x4b\x62\x65' === _0x48f1b4(0x16e))
                    this[_0x48f1b4(0x1c7)](_0x48f1b4(0x1e9));
                else {
                    if (this['\x5f\x73\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70'] === !![])
                        this[_0x48f1b4(0x1c7)]('\x70\x6c\x61\x79\x65\x72\x73\x4f\x6e\x4d\x61\x70');
                    else {
                        if (_0x48f1b4(0x200) === _0x48f1b4(0x200))
                            this[_0x48f1b4(0x1e8)]();
                        else {
                            var _0x8b5bb0;
                            _0x8b5bb0 = this[_0x48f1b4(0x1a3)](), this[_0x48f1b4(0x205)] = _0x448856, !this[_0x48f1b4(0x1f2)](_0xd2a65b['\x6d\x79\x49\x64']()) && this[_0x48f1b4(0x205)][_0x48f1b4(0x161)](_0x8b5bb0);
                        }
                    }
                }
            } else {
                if (this[_0x48f1b4(0x163)] === !![] || this[_0x48f1b4(0x1cd)] === !![]) {
                    if ('\x62\x72\x51\x58\x5a' === _0x48f1b4(0x176))
                        this[_0x48f1b4(0x1c7)](_0x48f1b4(0x1e9));
                    else
                        return _0x5a9b6d[_0x48f1b4(0x1f5)]();
                } else {
                    if (_0x48f1b4(0x14e) !== _0x48f1b4(0x17e))
                        this[_0x48f1b4(0x1e7)]();
                    else
                        return _0x4950c2['\x55\x49'][_0x48f1b4(0x175)](_0x597664), _0x5040c9['\x55\x49'][_0x48f1b4(0x162)](_0x445b6b);
                }
            }
        }
    }, _0x3c147a[_0x32552d(0x1c7)] = function (_0x38e7cc) {
        var _0x246971 = _0x32552d;
        return this[_0x246971(0x1e3)] = _0x38e7cc, HUIManager['\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72'](0x1f4);
    }, _0x3c147a[_0x32552d(0x1f4)] = function () {
        var _0x607742 = _0x32552d;
        return '\x48\x49\x6d\x69\x51' === _0x607742(0x13f) ? (this['\x73\x65\x74\x57\x61\x69\x74'](null), HUIManager[_0x607742(0x1a6)]()) : null;
    }, _0x3c147a[_0x32552d(0x1eb)] = function () {
        var _0x71224b = _0x32552d;
        return this[_0x71224b(0x205)][_0x71224b(0x1df)](function (_0x4545d2) {
            var _0x4bf99 = _0x71224b;
            return _0x4545d2['\x6d\x61\x70\x49\x64'] === $gameMap[_0x4bf99(0x1dc)]();
        });
    }, _0x3c147a[_0x32552d(0x1fe)] = function () {
        var _0x34d183 = _0x32552d, _0x5d37cb;
        return _0x5d37cb = this['\x6d\x79\x49\x6e\x64\x65\x78'](), this['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61'][_0x34d183(0x1e1)](function (_0x3964de) {
            var _0x1b5593 = _0x34d183;
            return _0x1b5593(0x20a) === _0x1b5593(0x20a) ? _0x3964de['\x69\x6e\x64\x65\x78'] !== _0x5d37cb : this[_0x1b5593(0x16d)]();
        });
    }, _0x3c147a[_0x32552d(0x1ec)] = function () {
        var _0x384485 = _0x32552d;
        return this['\x61\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x73']()[_0x384485(0x1e1)](function (_0x378305) {
            var _0x486399 = _0x384485;
            if ('\x57\x64\x77\x54\x41' !== _0x486399(0x1b9))
                return NetPlayerDataWrapper[_0x486399(0x20c)](_0x378305);
            else
                _0x1aeca9 = _0x486399(0x1b2);
        });
    }, _0x3c147a[_0x32552d(0x197)] = function () {
        var _0x289c6e = _0x32552d;
        return this[_0x289c6e(0x205)][_0x289c6e(0x1df)](function (_0x1e22d3) {
            return _0x1e22d3['\x63\x68\x61\x72\x61\x63\x74\x65\x72\x52\x65\x61\x64\x79'] === !![];
        });
    }, _0x3c147a[_0x32552d(0x1ca)] = function () {
        var _0x4cefd6 = _0x32552d, _0x5624b9, _0x3f90ed, _0x43f01, _0x5e862d, _0x2104f6, _0x2a9b95;
        if (!ANET['\x50\x50'][_0x4cefd6(0x1d2)]()) {
            if ('\x70\x6f\x66\x58\x6e' !== '\x70\x6f\x66\x58\x6e')
                _0x3548bb['\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65'] = ![], this[_0x4cefd6(0x163)] = _0x377993[_0x4cefd6(0x17b)]();
            else
                return;
        }
        _0x2104f6 = this[_0x4cefd6(0x1ec)]();
        for (_0x3f90ed = 0x0, _0x43f01 = _0x2104f6[_0x4cefd6(0x201)]; _0x3f90ed < _0x43f01; _0x3f90ed++) {
            if ('\x6e\x64\x53\x43\x71' !== '\x6e\x64\x53\x43\x71')
                this[_0x4cefd6(0x1cd)] = ![], this[_0x4cefd6(0x1e3)] = null, this[_0x4cefd6(0x205)] = null, _0x55fdcc[_0x4cefd6(0x206)] = null;
            else {
                _0x5e862d = _0x2104f6[_0x3f90ed], _0x2a9b95 = NetPlayerDataWrapper[_0x4cefd6(0x1e0)](_0x5e862d), _0x5624b9 = NetPlayerDataWrapper[_0x4cefd6(0x150)](_0x5e862d);
                if (_0x5624b9 != null) {
                    if (_0x4cefd6(0x1d8) === '\x75\x68\x6c\x67\x43')
                        return _0x47f88c = _0x2fcca4, _0x215280['\x77'](_0x578cdb), null;
                    else
                        _0x5624b9[_0x4cefd6(0x184)](_0x2a9b95);
                }
            }
        }
    }, _0x3c147a[_0x32552d(0x1e8)] = function () {
        var _0x80ca44 = _0x32552d;
        if (_0x80ca44(0x18f) === _0x80ca44(0x15a))
            return _0x2a3ead[_0x80ca44(0x20c)](_0x45d0f3);
        else {
            '\x53\x54\x41\x52\x54\x20\x42\x49\x4e\x44\x49\x4e\x47\x20\x41\x43\x54\x4f\x52\x53'['\x70'](), this[_0x80ca44(0x1cd)] = ![];
            if (ANET['\x50\x50'][_0x80ca44(0x1b8)]() || ANET[_0x80ca44(0x1fc)][_0x80ca44(0x155)]()) {
                if ('\x62\x6c\x65\x6a\x6e' !== '\x44\x4f\x56\x77\x4e')
                    this['\x61\x63\x74\x6f\x72\x42\x69\x6e\x67\x69\x6e\x67\x46\x72\x6f\x6d\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e']();
                else {
                    var _0x3018d6;
                    return _0x3018d6 = this[_0x80ca44(0x205)][_0x80ca44(0x156)](function (_0x5a8267) {
                        return _0x5a8267['\x69\x64'] === _0x448b9e;
                    }), _0x3018d6 != null;
                }
            } else
                this['\x73\x74\x61\x74\x69\x63\x41\x63\x74\x6f\x72\x42\x69\x6e\x67\x69\x6e\x67']();
        }
    }, _0x3c147a[_0x32552d(0x1d1)] = function () {
        var _0x115990 = _0x32552d;
        if (_0x115990(0x1ac) === _0x115990(0x1ac))
            ANPlayersManager[_0x115990(0x185)]();
        else
            return _0x37dca7[_0x115990(0x1b3)]() === _0x2468cc;
    }, _0x3c147a[_0x32552d(0x140)] = function () {
        var _0x3828b4 = _0x32552d;
        if (_0x3828b4(0x208) !== _0x3828b4(0x208))
            this['\x5f\x73\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70'] === !![] ? this[_0x3828b4(0x1c7)](_0x3828b4(0x1e9)) : this[_0x3828b4(0x1e8)]();
        else {
            var _0x5031f7;
            _0x5031f7 = ANET['\x50\x50'][_0x3828b4(0x142)]()[this[_0x3828b4(0x1f6)]() - 0x1], ANPlayersManager['\x73\x65\x6e\x64\x42\x69\x6e\x64\x41\x63\x74\x6f\x72\x46\x72\x6f\x6d\x47\x61\x6d\x65'](_0x5031f7);
        }
    }, _0x3c147a['\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x69\x6e\x67'] = function () {
        var _0x3857c7 = _0x32552d;
        if (!this['\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72']())
            return;
        switch (this[_0x3857c7(0x1e3)]) {
        case _0x3857c7(0x1e9):
            if (this['\x69\x73\x41\x6c\x6c\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70']()) {
                this['\x72\x65\x73\x65\x74\x57\x61\x69\x74'](), this[_0x3857c7(0x163)] = ![];
                if (this[_0x3857c7(0x1cd)] === !![]) {
                    if (_0x3857c7(0x15f) === '\x46\x6b\x68\x41\x4e')
                        this[_0x3857c7(0x1e8)]();
                    else {
                        var _0x53d0f9;
                        _0x53d0f9 = {
                            '\x75\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44': _0x29bc2a[_0x3857c7(0x1b6)],
                            '\x73\x61\x76\x65\x66\x69\x6c\x65\x49\x64': _0x221939
                        }, _0xe19d3b[_0x3857c7(0x17d)](_0x48dfc5['\x47\x61\x6d\x65'](_0x3857c7(0x1ce), _0x53d0f9));
                    }
                }
            }
            break;
        case '\x70\x6c\x61\x79\x65\x72\x73\x41\x63\x74\x6f\x72\x73':
            this[_0x3857c7(0x197)]() && (_0x3857c7(0x1a5) !== _0x3857c7(0x1a5) ? _0x589e02[_0x3857c7(0x1f1)](_0x13860f[_0x3857c7(0x203)]('\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74'), _0x23b0c5, _0x2566db, 0x1388, '\x4a\x6f\x69\x6e\x69\x6e\x67\x20\x74\x6f\x20\x74\x68\x65\x20\x67\x61\x6d\x65\x2e\x2e\x2e') : (this['\x72\x65\x73\x65\x74\x57\x61\x69\x74'](), this[_0x3857c7(0x17f)]()));
            break;
        }
    }, _0x3c147a[_0x32552d(0x17f)] = function () {
        var _0x4661d5 = _0x32552d;
        if (_0x4661d5(0x160) === '\x43\x75\x59\x59\x4b')
            _0x4661d5(0x18c)['\x70'](), ANMapManager[_0x4661d5(0x1c5)](), !ANET[_0x4661d5(0x1fc)][_0x4661d5(0x155)]() && this[_0x4661d5(0x154)]();
        else
            return null;
    }, _0x3c147a['\x73\x68\x6f\x77\x53\x74\x61\x72\x74\x47\x61\x6d\x65\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65'] = function () {
        var _0x5c0e1e = _0x32552d, _0xd5030f;
        if (!ANET['\x50\x50'][_0x5c0e1e(0x1f8)]()) {
            if (_0x5c0e1e(0x15c) !== _0x5c0e1e(0x19c))
                return;
            else
                return _0x2d21f8['\x63\x68\x61\x72\x61\x63\x74\x65\x72\x52\x65\x61\x64\x79'] === !![];
        }
        _0xd5030f = ANET['\x50\x50'][_0x5c0e1e(0x13a)]();
        if (!String[_0x5c0e1e(0x189)](_0xd5030f)) {
            if (_0x5c0e1e(0x153) !== _0x5c0e1e(0x1aa))
                return;
            else
                return this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65'] = _0xd7158b, _0x2fc566[_0x5c0e1e(0x1f9)](0x1f4);
        }
        ANET['\x55\x49']['\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74'](ANET[_0x5c0e1e(0x1fc)][_0x5c0e1e(0x16a)](0x0, 0x0, _0xd5030f));
    }, _0x3c147a[_0x32552d(0x20b)] = function (_0x230715) {
        var _0x4155a7 = _0x32552d;
        if (_0x4155a7(0x166) !== _0x4155a7(0x177)) {
            var _0x2a3a37;
            _0x16df94['\x70'](_0x4155a7(0x1d5)), _0x2a3a37 = ANET['\x50\x50'][_0x4155a7(0x183)](), _0x2a3a37 > 0x0 && $gameTemp[_0x4155a7(0x1b4)](_0x2a3a37);
        } else
            this[_0x4155a7(0x205)] = [], this[_0x4155a7(0x205)][_0x4155a7(0x161)](_0x2211c3[_0x4155a7(0x1ef)]());
    }, _0x3c147a[_0x32552d(0x1c4)] = function () {
        var _0x54c1e1 = _0x32552d, _0x568b08, _0x225fbe, _0x179e74, _0x4a00e5, _0x1028a1, _0x2c15f1;
        try {
            $gameMap[_0x54c1e1(0x1a2)] = new Game_Interpreter(), $gameParty[_0x54c1e1(0x164)] = 0x0, $gameParty[_0x54c1e1(0x1dd)] = {}, $gameParty['\x5f\x61\x72\x6d\x6f\x72\x73'] = {}, $gameParty['\x5f\x69\x74\x65\x6d\x73'] = {}, $gameParty[_0x54c1e1(0x178)] = ![], _0x1028a1 = $gameMap[_0x54c1e1(0x1b0)], _0x2c15f1 = [];
            for (_0x179e74 = 0x0, _0x4a00e5 = _0x1028a1['\x6c\x65\x6e\x67\x74\x68']; _0x179e74 < _0x4a00e5; _0x179e74++) {
                _0x225fbe = _0x1028a1[_0x179e74];
                if (_0x225fbe == null) {
                    if (_0x54c1e1(0x16b) === '\x63\x44\x56\x51\x4e')
                        continue;
                    else
                        return '';
                }
                _0x2c15f1[_0x54c1e1(0x161)](_0x225fbe[_0x54c1e1(0x1d0)] = ![]);
            }
            return _0x2c15f1;
        } catch (_0x5ae15d) {
            if (_0x54c1e1(0x1c8) !== _0x54c1e1(0x1c8))
                _0x962bad[_0x54c1e1(0x1b3)] = _0x2f846b;
            else
                return _0x568b08 = _0x5ae15d, ANET['\x77'](_0x568b08);
        }
    }, _0x3c147a['\x73\x65\x6e\x64\x53\x63\x65\x6e\x65\x43\x68\x61\x6e\x67\x69\x6e\x67'] = function () {
        var _0x2904c4 = _0x32552d, _0x41cdb8;
        _0x41cdb8 = '\x75\x6e\x6b\x6e\x6f\x77\x6e';
        if (!SceneManager[_0x2904c4(0x211)](Scene_Map)) {
            if (_0x2904c4(0x192) !== _0x2904c4(0x192))
                return _0x47cfbf = _0x112d25, _0x51c730[_0x2904c4(0x1a9)](_0x331ae0);
            else
                _0x41cdb8 = _0x2904c4(0x1b2);
        }
        if (SceneManager['\x69\x73\x4e\x65\x78\x74\x53\x63\x65\x6e\x65'](Scene_Battle)) {
            if ('\x4b\x45\x58\x69\x6e' === _0x2904c4(0x16f))
                return _0x54da3d = _0x281c57, _0xf60fe5['\x77\x61\x72\x6e\x69\x6e\x67'](_0x57ca23);
            else
                _0x41cdb8 = _0x2904c4(0x20d);
        }
        SceneManager['\x69\x73\x4e\x65\x78\x74\x53\x63\x65\x6e\x65'](Scene_NetChatInput) && (_0x41cdb8 = '\x63\x68\x61\x74');
        if (SceneManager[_0x2904c4(0x211)](Scene_NetworkInGameTrade)) {
            if (_0x2904c4(0x1ea) === _0x2904c4(0x1ae))
                return _0x10dc26;
            else
                _0x41cdb8 = '\x74\x72\x61\x64\x65';
        }
        ANNetwork['\x73\x65\x6e\x64'](NMS[_0x2904c4(0x203)](_0x2904c4(0x1d9), _0x41cdb8));
    }, _0x3c147a[_0x32552d(0x1c1)] = function (_0x5eb263) {
        var _0xcd2112 = _0x32552d;
        if (_0xcd2112(0x1a1) !== _0xcd2112(0x188)) {
            var _0x3a6f00;
            _0x3a6f00 = {
                '\x75\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44': $gameTemp[_0xcd2112(0x1b6)],
                '\x73\x61\x76\x65\x66\x69\x6c\x65\x49\x64': _0x5eb263
            }, ANNetwork['\x73\x65\x6e\x64'](NMS[_0xcd2112(0x203)](_0xcd2112(0x1ce), _0x3a6f00));
        } else
            this[_0xcd2112(0x205)][_0xcd2112(0x161)](_0x250066);
    }, _0x3c147a[_0x32552d(0x1f0)] = function () {
        var _0x3ae10b = _0x32552d;
        ANNetwork[_0x3ae10b(0x17d)](NMS[_0x3ae10b(0x203)](_0x3ae10b(0x20f), this[_0x3ae10b(0x1ad)]()));
    }, _0x3c147a[_0x32552d(0x1ed)] = function (_0x346e07, _0x324977) {
        var _0x448475 = _0x32552d;
        _0x448475(0x1af) === _0x448475(0x1af) ? this['\x73\x65\x6e\x64\x52\x61\x77\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65'](_0x346e07, this['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64'](), _0x324977) : _0x10088e['\x77'](_0x448475(0x144) + _0x25f263 + _0x448475(0x194));
    }, _0x3c147a[_0x32552d(0x1ba)] = function (_0x989869, _0x524d8d, _0x2c728a) {
        var _0x1c1178 = _0x32552d;
        if (_0x1c1178(0x196) !== '\x58\x53\x69\x4a\x6d') {
            var _0x305f7d;
            _0x305f7d = ANET['\x55\x74\x69\x6c\x73'][_0x1c1178(0x16a)](_0x989869, _0x524d8d, _0x2c728a), ANNetwork[_0x1c1178(0x17a)](NMS[_0x1c1178(0x203)](_0x1c1178(0x1a8), _0x305f7d), function () {
                var _0x387e0a = _0x1c1178;
                if (_0x387e0a(0x195) === _0x387e0a(0x195))
                    return ANET['\x55\x49'][_0x387e0a(0x175)](_0x305f7d), ANET['\x55\x49'][_0x387e0a(0x162)](_0x305f7d);
                else {
                    var _0x14d5e6;
                    if (this[_0x387e0a(0x139)]())
                        _0x14d5e6 = this[_0x387e0a(0x1f2)](_0x1d8e23), _0x14d5e6 != null && (_0x14d5e6[_0x387e0a(0x1b3)] = _0x407e88);
                    else {
                    }
                }
            });
        } else
            return this[_0x1c1178(0x1a3)]()['\x69\x73\x4d\x61\x70\x4d\x61\x73\x74\x65\x72'] === !![];
    }, _0x3c147a[_0x32552d(0x1da)] = function (_0x59db9d, _0x32d9b9) {
        var _0x297c1c = _0x32552d;
        ANClientResponceManager['\x73\x65\x6e\x64\x52\x65\x73\x70\x6f\x6e\x63\x65'](NMS['\x47\x61\x6d\x65'](_0x297c1c(0x1c3)), _0x59db9d, _0x32d9b9, 0x1388, '\x4a\x6f\x69\x6e\x69\x6e\x67\x20\x74\x6f\x20\x74\x68\x65\x20\x67\x61\x6d\x65\x2e\x2e\x2e');
    }, _0x3c147a[_0x32552d(0x15e)] = function (_0x40c41c) {
        var _0x5a827f = _0x32552d, _0x1bae67, _0x20b0e5;
        try {
            return _0x20b0e5 = DataManager[_0x5a827f(0x198)](), KDCore[_0x5a827f(0x1b1)]() ? StorageManager[_0x5a827f(0x20e)](_0x20b0e5)[_0x5a827f(0x180)](function () {
                var _0x5ab779 = _0x5a827f;
                return ANNetwork[_0x5ab779(0x17d)](NMS[_0x5ab779(0x203)](_0x5ab779(0x204), {
                    '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0x40c41c,
                    '\x67\x61\x6d\x65\x44\x61\x74\x61': $gameTemp[_0x5ab779(0x1c6)]
                })), $gameTemp[_0x5ab779(0x1c6)] = null;
            }) : (_0x20b0e5 = JsonEx[_0x5a827f(0x1bd)](DataManager[_0x5a827f(0x198)]()), ANNetwork[_0x5a827f(0x17d)](NMS[_0x5a827f(0x203)](_0x5a827f(0x204), {
                '\x77\x68\x6f\x52\x65\x71\x75\x65\x73\x74\x49\x64': _0x40c41c,
                '\x67\x61\x6d\x65\x44\x61\x74\x61': _0x20b0e5
            })));
        } catch (_0x191d64) {
            return _0x1bae67 = _0x191d64, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x1bae67);
        }
    }, _0x3c147a[_0x32552d(0x1a0)] = function () {
        var _0x16859c = _0x32552d, _0x984ded;
        try {
            return ANNetwork[_0x16859c(0x17d)](NMS[_0x16859c(0x203)](_0x16859c(0x168)));
        } catch (_0x2372b6) {
            return _0x984ded = _0x2372b6, KDCore[_0x16859c(0x1a9)](_0x984ded);
        }
    }, _0x3c147a['\x73\x65\x6e\x64\x55\x73\x65\x49\x74\x65\x6d\x46\x72\x6f\x6d\x4d\x65\x6e\x75\x41\x63\x74\x69\x6f\x6e'] = function (_0xa827cb, _0x4837a4) {
        var _0x270441 = _0x32552d;
        if (_0x270441(0x143) !== _0x270441(0x152)) {
            var _0x4198f9, _0x3d0ba5;
            try {
                return '\x4b\x7a\x58\x69\x77' === _0x270441(0x1be) ? (_0x4198f9 = {
                    '\x61\x63\x74\x69\x6f\x6e': _0xa827cb,
                    '\x74\x61\x72\x67\x65\x74': ANET['\x55\x74\x69\x6c\x73'][_0x270441(0x174)](_0x4837a4)
                }, ANNetwork[_0x270441(0x17d)](NMS[_0x270441(0x1c9)](_0x270441(0x1e6), _0x4198f9))) : _0x171520['\x69\x64'] === _0x14fc0e;
            } catch (_0xc3c12d) {
                return _0x270441(0x207) === _0x270441(0x149) ? this[_0x270441(0x205)] != null : (_0x3d0ba5 = _0xc3c12d, KDCore[_0x270441(0x1a9)](_0x3d0ba5));
            }
        } else
            return _0x1b8060[_0x270441(0x17d)](_0x496bb0[_0x270441(0x203)](_0x270441(0x168)));
    }, _0x3c147a[_0x32552d(0x14a)] = function (_0x145246, _0x468b16) {
        var _0x10c252 = _0x32552d;
        if ('\x48\x56\x43\x71\x4f' === _0x10c252(0x187)) {
            var _0x2c0ed4;
            if (this['\x69\x73\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x45\x78\x69\x73\x74\x73']()) {
                if (_0x10c252(0x14c) === '\x48\x59\x56\x74\x42')
                    _0x2c0ed4 = this['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'](_0x145246), _0x2c0ed4 != null && (_0x2c0ed4[_0x10c252(0x1b3)] = _0x468b16);
                else {
                    var _0x185dc6;
                    if (!_0x198b19['\x50\x50'][_0x10c252(0x1f8)]())
                        return;
                    _0x185dc6 = _0x1c202c['\x50\x50'][_0x10c252(0x13a)]();
                    if (!_0x2b30d1['\x61\x6e\x79'](_0x185dc6))
                        return;
                    _0x2cb683['\x55\x49'][_0x10c252(0x175)](_0x1fd964[_0x10c252(0x1fc)][_0x10c252(0x16a)](0x0, 0x0, _0x185dc6));
                }
            } else {
            }
        } else
            return;
    }, _0x3c147a['\x6f\x6e\x52\x6f\x6f\x6d\x50\x6c\x61\x79\x65\x72\x73'] = function (_0x42e12c) {
        var _0x573653 = _0x32552d, _0x4b3d72;
        _0x4b3d72 = this[_0x573653(0x1a3)](), this[_0x573653(0x205)] = _0x42e12c;
        if (!this[_0x573653(0x1f2)](ANNetwork['\x6d\x79\x49\x64']())) {
            if (_0x573653(0x147) === '\x6e\x64\x72\x63\x42')
                this[_0x573653(0x205)]['\x70\x75\x73\x68'](_0x4b3d72);
            else
                return;
        }
    }, _0x3c147a[_0x32552d(0x1bc)] = function (_0xc3db1b) {
        var _0x47818c = _0x32552d;
        this[_0x47818c(0x209)](_0xc3db1b), this['\x72\x65\x66\x72\x65\x73\x68\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65\x73'](), $gameMap[_0x47818c(0x14b)]();
    }, _0x3c147a[_0x32552d(0x1e7)] = function () {
        var _0x4fffd6 = _0x32552d;
        if ('\x57\x46\x6f\x6e\x6e' === '\x78\x48\x47\x5a\x4b') {
            var _0x3045b4;
            _0x3a1fc2['\x70']('\x50\x6c\x61\x79\x65\x72\x20\x6c\x65\x61\x76\x65\x20\x67\x61\x6d\x65'), _0x3045b4 = _0x29421f['\x50\x50']['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x4c\x65\x61\x76\x65\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x49\x64'](), _0x3045b4 > 0x0 && _0x30cbb5[_0x4fffd6(0x1b4)](_0x3045b4);
        } else {
            var _0x71d8bf, _0x298aa, _0xd185cb, _0x5828da;
            $gameParty[_0x4fffd6(0x19d)](), _0x5828da = this[_0x4fffd6(0x205)];
            for (_0x71d8bf = 0x0, _0x298aa = _0x5828da[_0x4fffd6(0x201)]; _0x71d8bf < _0x298aa; _0x71d8bf++) {
                _0xd185cb = _0x5828da[_0x71d8bf], NetPlayerDataWrapper['\x69\x73\x48\x61\x76\x65\x43\x68\x61\x72\x61\x63\x74\x65\x72\x49\x6e\x47\x61\x6d\x65'](_0xd185cb) && (_0x4fffd6(0x157) !== _0x4fffd6(0x1ee) ? $gameParty['\x5f\x61\x63\x74\x6f\x72\x73']['\x70\x75\x73\x68'](_0xd185cb[_0x4fffd6(0x1b7)]) : _0xdb628e['\x77']('\x50\x6c\x61\x79\x65\x72\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20' + _0x41151e + _0x4fffd6(0x194)));
            }
            $gameParty[_0x4fffd6(0x1fa)](), $gamePlayer['\x72\x65\x66\x72\x65\x73\x68'](), $gameMap['\x6e\x53\x61\x66\x65\x52\x65\x66\x72\x65\x73\x68'](), KDCore['\x47\x45\x76\x65\x6e\x74\x73\x4d\x61\x6e\x61\x67\x65\x72'][_0x4fffd6(0x1fd)](_0x4fffd6(0x141));
        }
    }, _0x3c147a[_0x32552d(0x202)] = function () {
        var _0x559913 = _0x32552d;
        return this[_0x559913(0x16d)]();
    }, _0x3c147a[_0x32552d(0x1a7)] = function (_0x914aa6) {
        var _0x4ea112 = _0x32552d;
        if (_0x4ea112(0x1bf) === '\x41\x56\x5a\x55\x70')
            return _0x42fba4;
        else {
            var _0x456458;
            _0x4ea112(0x15d)['\x70'](_0x914aa6);
            if (_0x914aa6 !== ANNetwork[_0x4ea112(0x1db)]())
                return;
            ANET['\x50\x50'][_0x4ea112(0x1b8)]() ? _0x4ea112(0x151) === _0x4ea112(0x18e) ? (_0x1b0130 = this[_0x4ea112(0x1f2)](_0x1fd865), _0x5ad9b8 != null && (_0x278696[_0x4ea112(0x1b3)] = _0x240652)) : this[_0x4ea112(0x1d1)]() : this[_0x4ea112(0x140)](), _0x456458 = ANET['\x50\x50'][_0x4ea112(0x1cc)](), _0x456458 > 0x0 && $gameTemp[_0x4ea112(0x1b4)](_0x456458);
        }
    };
}()), window[_0x257403(0x1d4)] = ANGameManager);
function _0x36e2() {
    var _0x1dbffe = [
        '\x4b\x7a\x58\x69\x77',
        '\x49\x57\x46\x4b\x68',
        '\x61\x63\x74\x6f\x72\x4e\x61\x6d\x65',
        '\x73\x65\x6e\x64\x53\x61\x76\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x33\x33\x4e\x70\x58\x5a\x55\x59',
        '\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x61\x70\x70\x6c\x79\x4a\x6f\x69\x6e\x65\x64\x44\x61\x74\x61\x43\x6f\x72\x72\x65\x63\x74\x73',
        '\x73\x65\x6e\x64\x49\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x44\x61\x74\x61',
        '\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x44\x78\x66\x78\x78',
        '\x43\x6f\x6d\x6d\x6f\x6e',
        '\x72\x65\x66\x72\x65\x73\x68\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65\x73',
        '\x66\x63\x73\x54\x69',
        '\x67\x65\x74\x4a\x6f\x69\x6e\x65\x64\x52\x6f\x6f\x6d\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74',
        '\x6e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65\x53\x74\x61\x72\x74\x65\x64',
        '\x73\x61\x76\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x5f\x73\x74\x61\x72\x74\x69\x6e\x67',
        '\x61\x63\x74\x6f\x72\x42\x69\x6e\x67\x69\x6e\x67\x46\x72\x6f\x6d\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e',
        '\x69\x73\x53\x68\x6f\x77\x4e\x65\x74\x77\x6f\x72\x6b\x49\x63\x6f\x6e\x73',
        '\x66\x79\x52\x67\x4f',
        '\x4e\x47\x41\x4d\x45',
        '\x50\x6c\x61\x79\x65\x72\x20\x6c\x65\x61\x76\x65\x20\x67\x61\x6d\x65',
        '\x46\x42\x64\x6b\x72',
        '\x50\x6c\x61\x79\x65\x72\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20',
        '\x4c\x48\x63\x54\x59',
        '\x73\x63\x65\x6e\x65\x43\x68\x61\x6e\x67\x65',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x6d\x79\x49\x64',
        '\x6d\x61\x70\x49\x64',
        '\x5f\x77\x65\x61\x70\x6f\x6e\x73',
        '\x45\x5a\x50\x50\x4d',
        '\x65\x76\x65\x72\x79',
        '\x67\x65\x74\x52\x65\x71\x75\x65\x73\x74\x65\x64\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65',
        '\x66\x69\x6c\x74\x65\x72',
        '\x69\x6e\x64\x65\x78',
        '\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x36\x30\x39\x33\x65\x79\x44\x62\x46\x4c',
        '\x63\x75\x73\x74\x6f\x6d\x5f\x61\x70\x70\x6c\x79\x49\x74\x65\x6d\x46\x72\x6f\x6d\x4d\x65\x6e\x75',
        '\x6f\x6e\x52\x65\x66\x72\x65\x73\x68\x47\x61\x6d\x65\x50\x61\x72\x74\x79',
        '\x62\x69\x6e\x64\x69\x6e\x67\x41\x63\x74\x6f\x72\x73',
        '\x70\x6c\x61\x79\x65\x72\x73\x4f\x6e\x4d\x61\x70',
        '\x75\x75\x62\x4b\x41',
        '\x69\x73\x41\x6c\x6c\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70',
        '\x61\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x4d\x61\x70',
        '\x73\x65\x6e\x64\x4d\x79\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x67\x7a\x6b\x56\x5a',
        '\x63\x72\x65\x61\x74\x65\x4c\x6f\x63\x61\x6c',
        '\x73\x65\x6e\x64\x53\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65\x46\x6c\x61\x67',
        '\x73\x65\x6e\x64\x52\x65\x73\x70\x6f\x6e\x63\x65',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64',
        '\x74\x72\x61\x64\x65',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72',
        '\x6d\x79\x49\x6e\x64\x65\x78',
        '\x69\x6e\x66\x6f',
        '\x69\x73\x47\x61\x6d\x65\x43\x68\x61\x74\x41\x6c\x6c\x6f\x77\x65\x64',
        '\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72',
        '\x6e\x52\x65\x66\x72\x65\x73\x68\x53\x68\x61\x72\x65\x64\x4d\x65\x6d\x62\x65\x72\x73',
        '\x69\x73\x4d\x61\x70\x4d\x61\x73\x74\x65\x72',
        '\x55\x74\x69\x6c\x73',
        '\x63\x61\x6c\x6c',
        '\x61\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x73',
        '\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x6c\x6b\x44\x50\x52',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x6f\x6e\x4c\x65\x61\x76\x65\x52\x6f\x6f\x6d',
        '\x47\x61\x6d\x65',
        '\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61',
        '\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61',
        '\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61',
        '\x43\x56\x6f\x43\x44',
        '\x58\x56\x4d\x75\x41',
        '\x6f\x6e\x52\x6f\x6f\x6d\x50\x6c\x61\x79\x65\x72\x73',
        '\x53\x50\x4a\x74\x7a',
        '\x61\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x4c\x65\x61\x76\x65\x47\x61\x6d\x65',
        '\x69\x73\x43\x68\x61\x72\x4f\x6e\x4d\x61\x70',
        '\x62\x61\x74\x74\x6c\x65',
        '\x73\x61\x76\x65\x4f\x62\x6a\x65\x63\x74\x46\x6f\x72\x4e\x65\x74',
        '\x73\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x49\x6e\x66\x6f',
        '\x69\x73\x4e\x65\x78\x74\x53\x63\x65\x6e\x65',
        '\x69\x73\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x45\x78\x69\x73\x74\x73',
        '\x67\x65\x74\x43\x68\x61\x74\x53\x74\x61\x72\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x6d\x61\x70',
        '\x72\x65\x73\x65\x74',
        '\x6f\x6e\x4d\x61\x70\x4c\x6f\x61\x64\x65\x64',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x48\x49\x6d\x69\x51',
        '\x73\x74\x61\x74\x69\x63\x41\x63\x74\x6f\x72\x42\x69\x6e\x67\x69\x6e\x67',
        '\x6e\x65\x74\x7a\x52\x65\x66\x72\x65\x73\x68\x4e\x61\x6d\x65\x70\x6c\x61\x74\x65',
        '\x61\x63\x74\x6f\x72\x73\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x41\x59\x4d\x6c\x74',
        '\x50\x6c\x61\x79\x65\x72\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20\x41\x63\x74\x6f\x72\x20\x77\x69\x74\x68\x20\x49\x44\x20',
        '\x70\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x73\x65\x74\x75\x70\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65',
        '\x6e\x64\x72\x63\x42',
        '\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65',
        '\x46\x7a\x69\x55\x54',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x6e\x53\x61\x66\x65\x52\x65\x66\x72\x65\x73\x68',
        '\x48\x59\x56\x74\x42',
        '\x44\x59\x4b\x7a\x6c',
        '\x44\x50\x54\x59\x4f',
        '\x50\x78\x79\x56\x74',
        '\x67\x65\x74\x4e\x65\x74\x43\x68\x61\x72\x61\x63\x74\x65\x72\x46\x6f\x72\x50\x6c\x61\x79\x65\x72',
        '\x78\x58\x43\x79\x43',
        '\x44\x65\x59\x73\x4c',
        '\x59\x62\x73\x45\x47',
        '\x73\x68\x6f\x77\x53\x74\x61\x72\x74\x47\x61\x6d\x65\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x69\x73\x4c\x6f\x61\x64\x47\x61\x6d\x65\x52\x6f\x6f\x6d',
        '\x66\x69\x6e\x64',
        '\x4c\x4b\x6a\x6a\x66',
        '\x76\x65\x6a\x6e\x56',
        '\x32\x32\x32\x31\x34\x31\x32\x6e\x65\x6e\x4b\x63\x4b',
        '\x5a\x72\x7a\x65\x53',
        '\x36\x37\x38\x37\x35\x38\x30\x44\x57\x43\x5a\x6e\x77',
        '\x4a\x64\x50\x4d\x4d',
        '\x4a\x4f\x49\x4e\x45\x44\x20\x54\x4f\x20\x47\x41\x4d\x45',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x65',
        '\x46\x6b\x68\x41\x4e',
        '\x43\x75\x59\x59\x4b',
        '\x70\x75\x73\x68',
        '\x61\x64\x64\x45\x6d\x6f\x74\x69\x6f\x6e\x54\x6f\x43\x68\x61\x74',
        '\x5f\x73\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x4f\x6e\x53\x61\x6d\x65\x4d\x61\x70',
        '\x5f\x67\x6f\x6c\x64',
        '\x42\x4c\x41\x43\x4b',
        '\x76\x4c\x76\x49\x56',
        '\x41\x51\x62\x42\x54',
        '\x73\x6f\x6d\x65\x6f\x6e\x65\x4a\x6f\x69\x6e\x65\x64\x54\x6f\x53\x74\x61\x72\x74\x65\x64\x47\x61\x6d\x65',
        '\x64\x6d\x6f\x50\x73',
        '\x62\x75\x69\x6c\x64\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x63\x44\x56\x51\x4e',
        '\x61\x63\x74\x6f\x72',
        '\x63\x72\x65\x61\x74\x65\x4d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61',
        '\x55\x64\x54\x74\x56',
        '\x4d\x6e\x76\x58\x51',
        '\x73\x65\x74\x75\x70\x4e\x65\x77\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65',
        '\x69\x44\x68\x63\x4c',
        '\x43\x6f\x6c\x6f\x72',
        '\x67\x65\x74\x42\x79\x46\x69\x65\x6c\x64',
        '\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74',
        '\x62\x72\x51\x58\x5a',
        '\x4f\x46\x46\x55\x4d',
        '\x5f\x69\x6e\x42\x61\x74\x74\x6c\x65',
        '\x41\x4e\x47\x61\x6d\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x69\x73\x53\x61\x6d\x65\x4d\x61\x70\x4d\x6f\x64\x65',
        '\x49\x66\x6d\x6c\x75',
        '\x73\x65\x6e\x64',
        '\x53\x67\x66\x67\x72',
        '\x73\x74\x61\x72\x74\x47\x61\x6d\x65',
        '\x74\x68\x65\x6e',
        '\x73\x65\x6e\x64\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x6e\x65\x74\x49\x64',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x4c\x65\x61\x76\x65\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x49\x64',
        '\x72\x65\x71\x75\x65\x73\x74\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x74\x65\x49\x63\x6f\x6e',
        '\x73\x65\x6e\x64\x41\x63\x74\x6f\x72\x52\x65\x61\x64\x79',
        '\x4e\x75\x6a\x4b\x50',
        '\x48\x56\x43\x71\x4f',
        '\x55\x53\x4e\x4d\x75',
        '\x61\x6e\x79',
        '\x55\x6c\x48\x51\x73',
        '\x38\x32\x36\x34\x32\x47\x55\x62\x56\x6e\x51',
        '\x52\x45\x41\x44\x59\x20\x54\x4f\x20\x53\x54\x41\x52\x54\x20\x47\x41\x4d\x45',
        '\x34\x34\x33\x35\x32\x32\x35\x64\x65\x77\x4b\x47\x51',
        '\x4a\x4d\x52\x52\x65',
        '\x41\x41\x4c\x6f\x58',
        '\x31\x39\x34\x32\x30\x35\x54\x69\x4c\x74\x6a\x43',
        '\x4a\x6c\x74\x70\x4f',
        '\x62\x78\x41\x58\x41',
        '\x2c\x20\x69\x6e\x66\x6f\x20\x6e\x6f\x74\x20\x66\x69\x6e\x64\x65\x64',
        '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x21',
        '\x42\x65\x4d\x42\x77',
        '\x57\x70\x53\x51\x6c',
        '\x69\x73\x41\x6c\x6c\x50\x6c\x61\x79\x65\x72\x73\x41\x63\x74\x6f\x72\x73\x52\x65\x61\x64\x79',
        '\x6d\x61\x6b\x65\x53\x61\x76\x65\x43\x6f\x6e\x74\x65\x6e\x74\x73',
        '\x42\x41\x75\x6f\x6b',
        '\x7a\x48\x42\x51\x4d',
        '\x32\x33\x32\x6b\x59\x4c\x48\x45\x54',
        '\x4b\x76\x79\x61\x66',
        '\x6e\x43\x6c\x65\x61\x72\x42\x65\x66\x6f\x72\x65\x52\x65\x66\x72\x65\x73\x68',
        '\x4e\x65\x74\x47\x61\x6d\x65',
        '\x70\x6c\x61\x79\x65\x72\x49\x6e\x64\x65\x78',
        '\x73\x65\x6e\x64\x4a\x6f\x69\x6e\x65\x64\x54\x6f\x53\x74\x61\x72\x74\x65\x64\x47\x61\x6d\x65',
        '\x7a\x77\x5a\x41\x6a',
        '\x5f\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x6d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61',
        '\x6f\x6e\x54\x72\x61\x64\x65\x53\x63\x65\x6e\x65\x45\x6e\x64',
        '\x57\x72\x66\x70\x42',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4a\x6f\x69\x6e\x65\x64\x54\x68\x69\x73\x47\x61\x6d\x65',
        '\x63\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x77\x61\x72\x6e\x69\x6e\x67',
        '\x42\x69\x69\x77\x69',
        '\x69\x6e\x69\x74',
        '\x4d\x48\x43\x59\x55',
        '\x6d\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x48\x4d\x76\x75\x51',
        '\x76\x51\x68\x75\x57',
        '\x5f\x65\x76\x65\x6e\x74\x73',
        '\x69\x73\x4d\x5a',
        '\x6d\x65\x6e\x75',
        '\x6e\x61\x6d\x65',
        '\x72\x65\x73\x65\x72\x76\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74',
        '\x32\x30\x30\x30\x38\x36\x77\x5a\x6b\x5a\x4c\x49',
        '\x6e\x55\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44',
        '\x61\x63\x74\x6f\x72\x49\x64',
        '\x69\x73\x41\x63\x74\x6f\x72\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x41\x6c\x6c\x6f\x77\x65\x64',
        '\x6a\x70\x41\x41\x7a',
        '\x73\x65\x6e\x64\x52\x61\x77\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x32\x39\x34\x66\x43\x7a\x62\x51\x45',
        '\x6f\x6e\x47\x61\x6d\x65\x50\x6c\x61\x79\x65\x72\x73',
        '\x73\x74\x72\x69\x6e\x67\x69\x66\x79'
    ];
    _0x36e2 = function () {
        return _0x1dbffe;
    };
    return _0x36e2();
}

// Generated by CoffeeScript 2.6.1
// * Специальные методы передачи данных для патчей совместимости
ANET.CFIX = function() {};

(function() {
  var _;
  //@[DEFINES]
  _ = ANET.CFIX;
  _.onCustomCommand = function(name, data) {
    var e;
    try {
      if (!name.contains("CFIX")) {
        return;
      }
      return this.processCustomCommand(name, data);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.send = function(name, data) {
    var e;
    if (!ANNetwork.isConnected()) {
      return;
    }
    // * Внешняя команда была, т.е. не отправляем снова, чтобы не было stackOverflow
    if ($gameTemp._netzCfixLocalOnly === true) {
      $gameTemp._netzCfixLocalOnly = false;
      return;
    }
    try {
      console.log("NETZ CFIX: SEND CUSTOM COMMAND: " + name);
      name = "CFIX_" + name;
      data.myId = ANNetwork.myId();
      nAPI.sendCustomCommand(name, data);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.isCommandFromThisClient = function(data) {
    if (data == null) {
      // * true в случае ошибок, чтобы не выполнять комманду
      return true;
    }
    if (data.myId == null) {
      return true;
    }
    return data.myId === ANNetwork.myId();
  };
  _.processCustomCommand = function(name, data) {
    var cmd, e;
    try {
      // * Только другие участники получают команду
      if (this.isCommandFromThisClient(data)) {
        return;
      }
      name = name.replace("CFIX_", "");
      console.log("NETZ CFIX: ON CUSTOM COMMAND: " + name);
      cmd = "on_" + name;
      if (ANET.CFIX[cmd] != null) {
        console.log("...execute...");
        ANET.CFIX[cmd](data);
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.callLocalOnly = function(method) {
    var e;
    try {
      $gameTemp._netzCfixLocalOnly = true;
      if (method == null) {
        return;
      }
      method();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]
var DataObserver;

DataObserver = class DataObserver {
  constructor(_checkTime = 0, _instante = false) {
    this._checkTime = _checkTime;
    this._instante = _instante;
    this._fields = {};
    this._isDataChanged = false;
    this._isShouldSkipCheck = false;
    this._timer = 0;
    return;
  }

  // * отправка без проверки изменений (по таймеру, если задан)
  setInstanteMode() {
    return this._instante = true;
  }

  // * проверка изменений (по таймеру, если задан)
  setCheckMode() {
    return this._instante = false;
  }

  // * не проверять изменения, устанавливать флаг _isDataChanged сразу (по истечению таймера)
  setCheckInterval(_checkTime) {
    this._checkTime = _checkTime;
  }

  // * Пропустить проверку данных, например когда данные пришли от сервера
  skip() {
    return this._isShouldSkipCheck = true;
  }

  addFields(obj, fieldsList) {
    var f, i, len;
    for (i = 0, len = fieldsList.length; i < len; i++) {
      f = fieldsList[i];
      this.readField(obj, f);
    }
  }

  removeFields(fieldsList) {
    var f, i, len, results;
    results = [];
    for (i = 0, len = fieldsList.length; i < len; i++) {
      f = fieldsList[i];
      results.push(delete this._fields[f]);
    }
    return results;
  }

  // * Прочитать все значения с объекта
  refreshAll(obj) {
    var f;
    for (f in this._fields) {
      this.readField(obj, f);
    }
    return this._isDataChanged = false;
  }

  readField(obj, field) {
    return this._fields[field] = obj[field];
  }

  check(obj) {
    var f;
    // * Если данные изменены, но зачем снова проверять?
    // * Всё равно не отслеживается какое именно поле было изменнено
    if (this.isDataChanged()) {
      return;
    }
    this._timer--;
    // * Если таймер, то ждём, не проверяем
    if (this._timer > 0) {
      return;
    }
    this._timer = this._checkTime;
    // * Если надо пропустить проверку, то пропускаем
    if (this._isShouldSkipCheck === true) {
      this._isShouldSkipCheck = false;
      return;
    }
    // * Если постоянное обновление, то сразу флаг и пропускаем проверку
    if (this._instante === true) {
      this._isDataChanged = true;
      return;
    }
    for (f in this._fields) {
      if (obj[f] !== this._fields[f]) {
        this._isDataChanged = true;
        break;
      }
    }
  }

  isDataChanged() {
    return this._isDataChanged === true;
  }

  // * Получить данные всех полей для отправки на сервер
  getDataForNetwork(obj) {
    this.refreshAll(obj);
    return this._fields;
  }

  // * Установить данные всех полей, когда пришли с сервера
  setDataFromNetwork(obj, observerData) {
    var f;
    for (f in this._fields) {
      obj[f] = observerData[f];
    }
    this.refreshAll(obj);
  }

};


function _0x2759(_0x27db1b, _0x1a88c5) {
    var _0x46abb6 = _0x46ab();
    return _0x2759 = function (_0x275906, _0x104287) {
        _0x275906 = _0x275906 - 0xea;
        var _0x3e15e5 = _0x46abb6[_0x275906];
        return _0x3e15e5;
    }, _0x2759(_0x27db1b, _0x1a88c5);
}
function _0x46ab() {
    var _0x262b83 = [
        '\x6d\x50\x72\x67\x57',
        '\x6e\x59\x6b\x64\x4a',
        '\x53\x65\x72\x76\x65\x72\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74\x65\x64\x2c\x20\x72\x65\x71\x75\x69\x72\x65\x20\x72\x65\x76\x2e\x20',
        '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x63\x6f\x6d\x6d\x6f\x6e\x20\x73\x75\x62\x43\x6f\x6d\x6d\x61\x6e\x64\x20',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x6f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x65\x76\x65\x6e\x74\x5f\x61\x61\x62\x7a',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61',
        '\x31\x32\x50\x42\x4a\x6a\x48\x55',
        '\x32\x31\x30\x37\x32\x37\x6f\x66\x76\x52\x70\x4a',
        '\x75\x52\x5a\x4a\x51',
        '\x46\x49\x71\x79\x69',
        '\x31\x39\x38\x37\x30\x37\x30\x46\x4b\x77\x79\x6b\x67',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x65\x78\x65\x63\x75\x74\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72',
        '\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x20\x6f\x72\x20\x68\x69\x67\x68\x65\x72',
        '\x63\x61\x6c\x6c\x53\x63\x65\x6e\x65\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x55\x6d\x76\x62\x4a',
        '\x6b\x49\x73\x69\x5a',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x74\x79\x70\x65',
        '\x73\x61\x76\x65\x66\x69\x6c\x65\x49\x64',
        '\x45\x6a\x69\x55\x57',
        '\x47\x41\x4d\x45\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x44\x41\x54\x41\x20\x52\x45\x46\x52\x45\x53\x48\x45\x44',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x73\x74\x61\x72\x74\x47\x61\x6d\x65',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65',
        '\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x4d\x68\x49\x78\x42',
        '\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x58\x6d\x74\x57\x47',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x63\x75\x73\x74\x6f\x6d\x43\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x6e\x6b',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x63\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4d\x6f\x76\x65',
        '\x6e\x61\x6d\x65',
        '\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74',
        '\x54\x61\x77\x44\x49',
        '\x43\x55\x53\x54\x4f\x4d\x20\x4c\x49\x4e\x4b\x20\x49\x4e',
        '\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61',
        '\x46\x61\x58\x55\x54',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x6f\x6d\x65\x6f\x6e\x65\x4a\x6f\x69\x6e\x65\x64\x54\x6f\x53\x74\x61\x72\x74\x65\x64\x47\x61\x6d\x65',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x44\x61\x74\x61\x52\x65\x73\x70\x6f\x6e\x65',
        '\x67\x46\x6d\x4c\x6c',
        '\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x68\x6f\x69\x63\x65\x41\x63\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x33\x66\x73\x74\x71\x64\x5a',
        '\x6e\x53\x61\x76\x65\x44\x61\x74\x61',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x44\x6f\x6e\x65',
        '\x78\x6d\x48\x44\x59',
        '\x33\x52\x4d\x6c\x57\x78\x48',
        '\x79\x64\x6f\x73\x79',
        '\x4f\x4b\x4c\x55\x4f',
        '\x6f\x6e\x47\x61\x6d\x65\x50\x6c\x61\x79\x65\x72\x73',
        '\x4e\x65\x74\x43\x6c\x69\x65\x6e\x74\x4d\x65\x74\x68\x6f\x64\x73\x4d\x61\x6e\x61\x67\x65\x72',
        '\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x6f\x6e\x53\x65\x72\x76\x65\x72\x45\x76\x65\x6e\x74',
        '\x59\x55\x46\x48\x46',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x69\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x53\x79\x6e\x63\x68\x72\x6f\x6e\x69\x7a\x61\x74\x69\x6f\x6e',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4c\x6f\x63\x61\x74\x69\x6f\x6e',
        '\x45\x56\x45\x4e\x54\x5f\x41\x41\x42\x53\x5a',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x43\x68\x6f\x69\x63\x65',
        '\x6e\x61\x6d\x65\x70\x6c\x61\x74\x65\x73',
        '\x55\x67\x76\x4f\x4c',
        '\x54\x4a\x66\x6d\x47',
        '\x58\x44\x4c\x52\x57',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x72\x6f\x6f\x6d\x43\x6c\x6f\x73\x65\x64',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x67\x61\x6d\x65\x5f\x6f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x56\x41\x68\x70\x62',
        '\x6f\x6e\x52\x65\x73\x70\x6f\x6e\x63\x65\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x6e\x6f\x74\x69\x66\x79\x45\x72\x72\x6f\x72',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x73\x4e\x61\x6d\x65\x70\x6c\x61\x74\x65\x73\x53\x74\x79\x6c\x65\x73',
        '\x33\x30\x6c\x4c\x55\x75\x53\x65',
        '\x45\x67\x62\x68\x6a',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x4f\x6f\x41\x64\x6d',
        '\x4d\x41\x47\x45\x4e\x54\x41',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x75\x73\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x39\x36\x44\x4e\x46\x52\x58\x6c',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x73\x65\x72\x76\x65\x72\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x63\x68\x61\x6e\x67\x65\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65',
        '\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64',
        '\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74',
        '\x6f\x6e\x52\x6f\x6f\x6d\x43\x6c\x6f\x73\x65\x64',
        '\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x43\x75\x73\x74\x6f\x6d\x43\x6f\x6d\x6d\x61\x6e\x64\x43\x45',
        '\x75\x4f\x78\x56\x6f',
        '\x6f\x6e\x45\x76\x65\x6e\x74\x4d\x6f\x76\x65',
        '\x65\x76\x65\x6e\x74\x5f\x63\x6f\x6d\x6d\x6f\x6e\x5f\x61\x62\x73\x7a',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4c\x6f\x63\x61\x74\x69\x6f\x6e',
        '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x49\x4e',
        '\x4d\x69\x4c\x63\x78',
        '\x6f\x6e\x45\x78\x65\x63\x75\x74\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x42\x61\x74\x74\x6c\x65',
        '\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74',
        '\x52\x45\x46\x52\x45\x53\x48\x20\x50\x41\x52\x54\x59',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4d\x6f\x76\x65',
        '\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x76\x69\x72\x74\x75\x61\x6c\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x6c\x56\x51\x65\x71',
        '\x64\x61\x74\x61',
        '\x4c\x6f\x62\x62\x79',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x63\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65',
        '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x53\x74\x61\x74\x65',
        '\x65\x53\x41\x44\x45',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x65\x76\x65\x6e\x74\x5f\x6c\x6f\x62\x62\x79\x5f\x72\x65\x66\x72\x65\x73\x68\x52\x6f\x6f\x6d\x44\x61\x74\x61',
        '\x73\x61\x76\x65\x47\x61\x6d\x65',
        '\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4a\x6f\x69\x6e\x65\x64\x54\x68\x69\x73\x47\x61\x6d\x65',
        '\x64\x4f\x65\x71\x6d',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x61\x63\x74\x69\x6f\x6e',
        '\x6f\x6e\x42\x65\x66\x6f\x72\x65\x53\x61\x76\x65',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x41\x4e\x20\x43\x4f\x4e\x54\x49\x4e\x55\x45',
        '\x4e\x41\x70\x70\x6c\x79\x46\x72\x6f\x6d\x4d\x65\x6e\x75\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x6f\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x71\x75\x65\x73\x74',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x43\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65',
        '\x6f\x6e\x43\x75\x73\x74\x6f\x6d\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x78\x59\x52\x43\x58',
        '\x49\x6c\x4f\x6a\x6c',
        '\x45\x76\x65\x6e\x74\x20\x45\x6e\x64\x3a\x20',
        '\x77\x79\x57\x70\x53',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x69\x6e\x70\x75\x74',
        '\x68\x52\x65\x75\x48',
        '\x43\x55\x53\x54\x4f\x4d\x20\x43\x4f\x4d\x4d\x41\x4e\x44\x20\x49\x4e',
        '\x79\x5a\x4e\x6c\x4e',
        '\x74\x4c\x68\x76\x51',
        '\x6d\x45\x49\x51\x42',
        '\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x54\x63\x62\x62\x6b',
        '\x6f\x6e\x4c\x6f\x67\x57\x69\x6e\x64\x6f\x77\x4d\x65\x73\x73\x61\x67\x65',
        '\x61\x6e\x79',
        '\x61\x6c\x65\x72\x74',
        '\x73\x74\x6f\x70',
        '\x6f\x6e\x52\x65\x66\x72\x65\x73\x68\x47\x61\x6d\x65\x50\x61\x72\x74\x79',
        '\x42\x4c\x41\x43\x4b',
        '\x73\x65\x6e\x64\x53\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65\x46\x6c\x61\x67',
        '\x63\x68\x61\x6e\x6e\x65\x6c\x49\x64',
        '\x76\x56\x68\x4c\x64',
        '\x6b\x62\x56\x4d\x49',
        '\x6d\x46\x57\x50\x7a',
        '\x53\x65\x72\x76\x65\x72\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74\x65\x64\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x41\x6c\x70\x68\x61\x20\x4e\x45\x54\x20\x5a\x20\x76\x65\x72\x73\x69\x6f\x6e\x20',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x74\x61\x72\x74\x65\x64\x52\x6f\x6f\x6d\x47\x61\x6d\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x77\x61\x72\x6e',
        '\x63\x6d\x64',
        '\x6f\x6e\x41\x6e\x73\x77\x65\x72',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c',
        '\x53\x45\x58\x68\x76',
        '\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x65\x76\x65\x6e\x74\x4d\x6f\x76\x65',
        '\x55\x41\x72\x6d\x65',
        '\x6f\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x76\x61\x72\x69\x61\x62\x6c\x65',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x72\x6f\x6f\x6d',
        '\x4c\x63\x51\x71\x78',
        '\x65\x76\x65\x6e\x74\x5f',
        '\x52\x6c\x49\x68\x56',
        '\x65\x76\x65\x6e\x74\x5f\x63\x6f\x6d\x6d\x6f\x6e\x5f\x66\x6f\x72\x43\x6c\x69\x65\x6e\x74\x73',
        '\x35\x36\x39\x33\x31\x59\x45\x48\x55\x4c\x45',
        '\x58\x48\x51\x4b\x4b',
        '\x62\x4a\x59\x4f\x66',
        '\x31\x36\x39\x39\x30\x38\x64\x43\x70\x6f\x57\x41',
        '\x32\x32\x38\x38\x34\x45\x68\x6a\x69\x66\x6a',
        '\x5f\x73\x63\x65\x6e\x65',
        '\x74\x59\x43\x6f\x6f',
        '\x74\x72\x61\x64\x65',
        '\x6d\x65\x74\x68\x6f\x64',
        '\x31\x37\x38\x34\x36\x33\x37\x77\x53\x54\x44\x51\x43',
        '\x6f\x6e\x53\x77\x69\x74\x63\x68\x56\x61\x6c\x75\x65',
        '\x69\x73\x42\x75\x73\x79\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b\x44\x61\x74\x61',
        '\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x69\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x76\x6e\x71\x58\x6c',
        '\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x71\x70\x73\x6b\x6f',
        '\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x56\x61\x6c\x75\x65',
        '\x45\x4e\x43\x4f\x55\x4e\x54\x45\x52\x20\x4d\x41\x50\x20\x42\x41\x54\x54\x4c\x45\x20\x49\x4e',
        '\x65\x70\x53\x67\x78',
        '\x6e\x55\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44',
        '\x6f\x6e\x49\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x53\x79\x6e\x63',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x61\x76\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64',
        '\x4d\x69\x6e\x53\x65\x72\x76\x65\x72\x52\x65\x76',
        '\x6d\x61\x70\x5f\x70\x6c\x61\x79\x65\x72\x4d\x6f\x76\x65',
        '\x45\x58\x4d\x46\x73',
        '\x6f\x6e\x4c\x6f\x73\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e',
        '\x55\x71\x66\x57\x68',
        '\x73\x65\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x54\x6f\x4d\x61\x73\x74\x65\x72\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x74\x65\x78\x74',
        '\x6d\x61\x70\x49\x64',
        '\x56\x65\x72\x73\x69\x6f\x6e',
        '\x36\x30\x33\x39\x34\x68\x78\x46\x4d\x74\x77',
        '\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x77\x69\x74\x63\x68',
        '\x46\x53\x4c\x4b\x4f',
        '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x41\x4e\x53\x57\x45\x52',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x43\x6f\x6c\x6f\x72'
    ];
    _0x46ab = function () {
        return _0x262b83;
    };
    return _0x46ab();
}
(function (_0xec6122, _0xf17f27) {
    var _0x315a25 = _0x2759, _0x466488 = _0xec6122();
    while (!![]) {
        try {
            var _0x367cfc = parseInt(_0x315a25(0x1ad)) / 0x1 * (-parseInt(_0x315a25(0x176)) / 0x2) + -parseInt(_0x315a25(0x1a9)) / 0x3 * (parseInt(_0x315a25(0x159)) / 0x4) + parseInt(_0x315a25(0xfb)) / 0x5 * (parseInt(_0x315a25(0x158)) / 0x6) + -parseInt(_0x315a25(0x155)) / 0x7 * (-parseInt(_0x315a25(0x101)) / 0x8) + -parseInt(_0x315a25(0x15e)) / 0x9 + parseInt(_0x315a25(0x187)) / 0xa + parseInt(_0x315a25(0x184)) / 0xb * (-parseInt(_0x315a25(0x183)) / 0xc);
            if (_0x367cfc === _0xf17f27)
                break;
            else
                _0x466488['push'](_0x466488['shift']());
        } catch (_0x195d73) {
            _0x466488['push'](_0x466488['shift']());
        }
    }
}(_0x46ab, 0x25381), window['\x4e\x65\x74\x43\x6c\x69\x65\x6e\x74\x4d\x65\x74\x68\x6f\x64\x73\x4d\x61\x6e\x61\x67\x65\x72'] = function () {
}, (function () {
    var _0x4cd058 = _0x2759, _0x571cee, _0x3d383d;
    _0x571cee = new KDCore[(_0x4cd058(0x14f))]('\x4e\x45\x54\x20\x43\x6c\x69\x65\x6e\x74'), _0x571cee['\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73'](KDCore[_0x4cd058(0x17b)][_0x4cd058(0xff)]['\x72\x65\x41\x6c\x70\x68\x61'](0xc8), KDCore[_0x4cd058(0x17b)][_0x4cd058(0x13c)][_0x4cd058(0x16b)](0xc8)), _0x571cee['\x6f\x6e'](), _0x3d383d = window[_0x4cd058(0x1b1)], _0x3d383d[_0x4cd058(0x172)] = function (_0x4b5252) {
        this['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'] = _0x4b5252;
    }, _0x3d383d[_0x4cd058(0x1a0)] = function () {
        var _0x26796b = _0x4cd058;
        _0x571cee['\x70']('\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64'), ANNetwork[_0x26796b(0x124)](NMS[_0x26796b(0x117)]('\x73\x65\x72\x76\x65\x72\x56\x65\x72\x43\x68\x65\x63\x6b', ANET['\x4d\x69\x6e\x53\x65\x72\x76\x65\x72\x52\x65\x76']), function (_0x369068) {
            var _0x995ee5 = _0x26796b;
            if (!_0x369068) {
                if (_0x995ee5(0x133) !== _0x995ee5(0x133)) {
                    var _0xc0ba25;
                    try {
                        return '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x48\x4f\x49\x43\x45\x20\x41\x43\x54\x49\x4f\x4e'['\x70'](), _0x4584d2[_0x995ee5(0x1a8)](_0x16980b);
                    } catch (_0x54f98b) {
                        return _0xc0ba25 = _0x54f98b, _0x3ca1ac[_0x995ee5(0x144)](_0x995ee5(0x147), _0xc0ba25);
                    }
                } else
                    return _0x571cee['\x70']('\x53\x65\x72\x76\x65\x72\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74\x65\x64\x2c\x20\x72\x65\x71\x75\x69\x72\x65\x20\x72\x65\x76\x2e\x20' + ANET['\x4d\x69\x6e\x53\x65\x72\x76\x65\x72\x52\x65\x76'] + _0x995ee5(0x18a)), window['\x61\x6c\x65\x72\x74'](_0x995ee5(0x142) + ANET[_0x995ee5(0x175)] / 0x64), ANNetwork[_0x995ee5(0x13a)]();
            }
        });
        if (this['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'] != null)
            return _0x26796b(0x157) !== _0x26796b(0xf6) ? this[_0x26796b(0x1b2)](0x1) : (_0x428f27 = _0xe29b15, _0x3d4adc['\x77\x61\x72\x6e'](_0x26796b(0x149), _0x42f5c1));
    }, _0x3d383d['\x6f\x6e\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74'] = function () {
        var _0x25aeea = _0x4cd058, _0x221c8b;
        return _0x571cee['\x70'](_0x25aeea(0x104)), (_0x221c8b = SceneManager[_0x25aeea(0x15a)]) != null && _0x221c8b['\x6f\x6e\x4c\x6f\x73\x74\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e'](), HUIManager[_0x25aeea(0xf8)](_0x25aeea(0x14d)), ANNetwork[_0x25aeea(0x13a)]();
    }, _0x3d383d['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x45\x72\x72\x6f\x72'] = function () {
        var _0x10fa33 = _0x4cd058;
        if (_0x10fa33(0x130) !== _0x10fa33(0x130)) {
            var _0x100a63;
            try {
                return _0x126a5d[_0x10fa33(0x14b)](_0x5eca91);
            } catch (_0x4b2546) {
                return _0x100a63 = _0x4b2546, _0x3c9e04[_0x10fa33(0x144)](_0x10fa33(0x114), _0x100a63);
            }
        } else
            return _0x571cee['\x70']('\x43\x61\x6e\x27\x74\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x73\x65\x72\x76\x65\x72\x21'), this[_0x10fa33(0x1b2)] != null && (_0x10fa33(0x151) !== _0x10fa33(0x1ac) ? this[_0x10fa33(0x1b2)](0x0) : _0x269e0b['\x70'](_0x10fa33(0x12d) + _0x564822)), ANNetwork[_0x10fa33(0x13a)]();
    }, _0x3d383d['\x69\x73\x45\x78\x69\x73\x74\x50\x72\x63\x45\x76\x65\x6e\x74'] = function (_0x2c4a20) {
        var _0x229dc7 = _0x4cd058;
        if (_0x229dc7(0x19a) === _0x229dc7(0x15b)) {
            var _0x84f861;
            return _0x5a2683['\x70'](_0x229dc7(0x104)), (_0x84f861 = _0x5aa8c6['\x5f\x73\x63\x65\x6e\x65']) != null && _0x84f861[_0x229dc7(0x170)](), _0x239e17['\x6e\x6f\x74\x69\x66\x79\x45\x72\x72\x6f\x72']('\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72'), _0x49768c[_0x229dc7(0x13a)]();
        } else
            return NetClientMethodsManager[_0x229dc7(0x152) + _0x2c4a20] != null;
    }, _0x3d383d['\x68\x61\x6e\x64\x6c\x65\x50\x72\x63\x45\x76\x65\x6e\x74'] = function (_0x16bf40, _0x40b937) {
        var _0x50d6c1 = _0x4cd058, _0x14690d;
        _0x14690d = [
            _0x50d6c1(0xf5),
            '\x6d\x61\x70\x5f\x65\x76\x65\x6e\x74\x4d\x6f\x76\x65',
            _0x50d6c1(0x16e),
            _0x50d6c1(0x190),
            _0x50d6c1(0x189)
        ][_0x50d6c1(0x121)](_0x16bf40);
        !_0x14690d && _0x571cee['\x70']('\x48\x61\x6e\x64\x6c\x65\x20\x45\x76\x65\x6e\x74\x3a\x20' + _0x16bf40);
        NetClientMethodsManager['\x65\x76\x65\x6e\x74\x5f' + _0x16bf40](_0x40b937);
        if (_0x16bf40 === '\x63\x6f\x6d\x6d\x6f\x6e\x5f\x66\x6f\x72\x43\x6c\x69\x65\x6e\x74\x73' && _0x40b937 != null && String[_0x50d6c1(0x138)](_0x40b937[_0x50d6c1(0x145)]))
            this[_0x50d6c1(0x18b)](_0x16bf40 + '\x5f' + _0x40b937[_0x50d6c1(0x145)]);
        else {
            if (_0x50d6c1(0x1a1) !== _0x50d6c1(0x164))
                this[_0x50d6c1(0x18b)](_0x16bf40);
            else {
                var _0x3dabe7;
                try {
                    return _0x3c5801[_0x50d6c1(0x109)](_0x1dcb26[_0x50d6c1(0x174)], _0xde672f['\x69\x64'], _0x47735c[_0x50d6c1(0x116)]);
                } catch (_0x1634cc) {
                    return _0x3dabe7 = _0x1634cc, _0x42a14d['\x77\x61\x72\x6e']('\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x65\x76\x65\x6e\x74\x4d\x6f\x76\x65', _0x3dabe7);
                }
            }
        }
        !_0x14690d && ('\x52\x6c\x49\x68\x56' !== _0x50d6c1(0x153) ? this[_0x50d6c1(0x1b2)](0x0) : _0x571cee['\x70'](_0x50d6c1(0x12d) + _0x16bf40));
    }, _0x3d383d[_0x4cd058(0x18b)] = function (_0x276838) {
        var _0x343a71 = _0x4cd058;
        if (_0x343a71(0x148) !== _0x343a71(0x156)) {
            var _0x2658f3;
            return (_0x2658f3 = SceneManager['\x5f\x73\x63\x65\x6e\x65']) != null ? _0x2658f3[_0x343a71(0x1b3)](_0x276838) : void 0x0;
        } else
            return;
    }, _0x3d383d[_0x4cd058(0x103)] = function (_0x41d08b) {
        var _0xf71abc = _0x4cd058;
        return _0xf71abc(0x1af) === _0xf71abc(0x1af) ? ANGameManager['\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4e\x61\x6d\x65'](_0x41d08b['\x77\x68\x6f'], _0x41d08b[_0xf71abc(0x19f)]) : (_0x5e2831 = _0x19a072, _0x3f8066['\x77\x61\x72\x6e'](_0xf71abc(0x196), _0x1f55e9));
    }, _0x3d383d[_0x4cd058(0x11d)] = function (_0x36e43f) {
        var _0x23688e = _0x4cd058;
        if (_0x23688e(0x115) !== '\x6c\x56\x51\x65\x71')
            return _0x55c8a2[_0x23688e(0xec)](_0x1907cb['\x69\x64'], _0x9916ed['\x64\x61\x74\x61']);
        else {
            if (SceneManager['\x69\x73\x42\x75\x73\x79\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b\x44\x61\x74\x61']()) {
                if ('\x53\x67\x52\x6a\x42' !== '\x5a\x43\x64\x42\x47')
                    return;
                else
                    return _0x23688e(0x131)['\x70'](), {
                        name: _0x16d558,
                        data: _0x5129d5
                    } = _0xdf19d, _0x41c6dc[_0x23688e(0x12a)](_0x5b82e7, _0x33dd34);
            }
            return ANGameManager['\x6f\x6e\x52\x6f\x6f\x6d\x50\x6c\x61\x79\x65\x72\x73'](_0x36e43f['\x70\x6c\x61\x79\x65\x72\x73\x44\x61\x74\x61']), ANNetwork['\x6f\x6e\x52\x6f\x6f\x6d\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'](_0x36e43f[_0x23688e(0x150)]);
        }
    }, _0x3d383d[_0x4cd058(0xf3)] = function (_0x4af139) {
        var _0x2cb390 = _0x4cd058;
        return _0x2cb390(0x1a7) === _0x2cb390(0x1a7) ? ANNetwork['\x6f\x6e\x52\x6f\x6f\x6d\x43\x6c\x6f\x73\x65\x64']() : _0x7e0ad0[_0x2cb390(0xf9)](_0x21f81['\x69\x64'], _0x1fbeea[_0x2cb390(0x15d)], _0x172a20[_0x2cb390(0x116)]);
    }, _0x3d383d[_0x4cd058(0x195)] = function () {
        return ANGameManager['\x73\x65\x74\x75\x70\x4e\x65\x77\x4e\x65\x74\x77\x6f\x72\x6b\x47\x61\x6d\x65'](), '\x53\x54\x41\x52\x54\x49\x4e\x47\x20\x47\x41\x4d\x45'['\x70']();
    }, _0x3d383d[_0x4cd058(0x19d)] = function (_0x2f7407) {
        var _0x26691d;
        try {
            return HUIManager['\x6f\x6e\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'](_0x2f7407);
        } catch (_0x1aee0e) {
            return _0x26691d = _0x1aee0e, ANET['\x77'](_0x26691d);
        }
    }, _0x3d383d[_0x4cd058(0x182)] = function (_0x2ca4ee) {
        var _0x1a7d35 = _0x4cd058;
        return _0x1a7d35(0x140) !== _0x1a7d35(0x198) ? (ANGameManager[_0x1a7d35(0x1b0)](_0x2ca4ee), _0x1a7d35(0x194)['\x70']()) : (_0x3bb8d1 = _0x32d4c8, _0x1d0119[_0x1a7d35(0x144)](_0x1a7d35(0x111), _0x524b06));
    }, _0x3d383d['\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x72\x65\x66\x72\x65\x73\x68\x50\x61\x72\x74\x79'] = function () {
        var _0x51edae = _0x4cd058;
        if ('\x72\x51\x7a\x44\x6b' !== '\x50\x6b\x6c\x4d\x71')
            return ANGameManager[_0x51edae(0x13b)](), _0x51edae(0x110)['\x70']();
        else {
            var _0x540424;
            try {
                return '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x41\x4e\x20\x43\x4f\x4e\x54\x49\x4e\x55\x45'['\x70'](), _0x5548f1[_0x51edae(0x127)](_0x193da4);
            } catch (_0x14a12c) {
                return _0x540424 = _0x14a12c, _0x194ff8['\x77\x61\x72\x6e'](_0x51edae(0x129), _0x540424);
            }
        }
    }, _0x3d383d[_0x4cd058(0x180)] = function (_0x19976a) {
        var _0x320d5a = _0x4cd058, _0x1e52e8;
        try {
            return ANSyncDataManager[_0x320d5a(0x135)](_0x19976a['\x69\x64'], _0x19976a[_0x320d5a(0x191)], _0x19976a[_0x320d5a(0x116)]);
        } catch (_0x18e8d3) {
            if (_0x320d5a(0x108) !== _0x320d5a(0x178))
                return _0x1e52e8 = _0x18e8d3, console[_0x320d5a(0x144)](_0x320d5a(0x180), _0x1e52e8);
            else {
                var _0xd38265;
                try {
                    if (_0x2ac03f['\x6d\x61\x70\x49\x64']() === _0x14c520)
                        return _0x560f90['\x6f\x6e\x49\x6e\x69\x74\x69\x61\x6c\x4d\x61\x70\x53\x79\x6e\x63']();
                } catch (_0x1fa43d) {
                    return _0xd38265 = _0x1fa43d, _0x3d1203['\x77\x61\x72\x6e'](_0x320d5a(0x149), _0xd38265);
                }
            }
        }
    }, _0x3d383d[_0x4cd058(0x14e)] = function (_0x379238) {
        var _0x570a54 = _0x4cd058, _0x559c9a;
        try {
            return ANSyncDataManager[_0x570a54(0x165)](_0x379238['\x69\x64'], _0x379238['\x64\x61\x74\x61']);
        } catch (_0x56f553) {
            return _0x559c9a = _0x56f553, console[_0x570a54(0x144)](_0x570a54(0x14e), _0x559c9a);
        }
    }, _0x3d383d[_0x4cd058(0x177)] = function (_0x3b7ba2) {
        var _0x95867b = _0x4cd058;
        if ('\x58\x44\x4c\x52\x57' === _0x95867b(0xf2)) {
            var _0x1af265;
            try {
                if (_0x95867b(0x12b) !== _0x95867b(0x12b)) {
                    var _0x20e3f7;
                    try {
                        return _0x58a276[_0x95867b(0xfd)](_0xd4cc81);
                    } catch (_0x5e3d04) {
                        return _0x20e3f7 = _0x5e3d04, _0x460535[_0x95867b(0x144)](_0x95867b(0x19b), _0x20e3f7);
                    }
                } else
                    return ANSyncDataManager[_0x95867b(0x15f)](_0x3b7ba2['\x69\x64'], _0x3b7ba2[_0x95867b(0x116)]);
            } catch (_0x41f2ba) {
                return _0x1af265 = _0x41f2ba, console[_0x95867b(0x144)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x77\x69\x74\x63\x68', _0x1af265);
            }
        } else
            return _0x1eef8a = _0x3dd470, _0x5653d3[_0x95867b(0x144)](_0x95867b(0x100), _0x5976ff);
    }, _0x3d383d['\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x61\x76\x65\x44\x61\x74\x61\x52\x65\x71\x75\x65\x73\x74'] = function (_0x40048d) {
        var _0x230979 = _0x4cd058;
        if (_0x230979(0x17d) !== _0x230979(0x17d))
            return _0x35f5ea = _0x2bc5bd, _0x140236['\x77'](_0x18425e);
        else {
            var _0x3e165e;
            try {
                return $gameTemp[_0x230979(0x168)] = _0x40048d['\x75\x6e\x69\x71\x75\x65\x53\x61\x76\x65\x49\x44'], $gameSystem[_0x230979(0x123)](), DataManager[_0x230979(0x11e)](_0x40048d[_0x230979(0x192)]), ANGameManager[_0x230979(0x13d)]();
            } catch (_0x1508c8) {
                return _0x3e165e = _0x1508c8, console['\x77\x61\x72\x6e'](_0x230979(0x16a), _0x3e165e);
            }
        }
    }, _0x3d383d['\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65'] = function (_0x2e3d3e) {
        var _0x37dc64 = _0x4cd058, _0xbef2fc, _0x34a0c7;
        try {
            if ($gameTemp[_0x37dc64(0x1aa)] == null) {
                if ('\x79\x64\x6f\x73\x79' === _0x37dc64(0x1ae))
                    return;
                else
                    return _0x39ab47[_0x37dc64(0x106)]();
            }
            return _0x34a0c7 = _0x2e3d3e, $gameTemp[_0x37dc64(0x1aa)][_0x37dc64(0x146)](_0x34a0c7, !![]);
        } catch (_0x1ee07d) {
            return _0x37dc64(0x18d) === _0x37dc64(0x18d) ? (_0xbef2fc = _0x1ee07d, console[_0x37dc64(0x144)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x73\x61\x76\x65\x44\x61\x74\x61\x43\x6f\x6d\x70\x6c\x65\x74\x65', _0xbef2fc)) : (_0x22ed46 = _0x95b04e, _0x454460[_0x37dc64(0x144)](_0x37dc64(0x154), _0x4e8833));
        }
    }, _0x3d383d[_0x4cd058(0x118)] = function (_0xf0165d) {
        var _0x17a3b5 = _0x4cd058;
        if (_0x17a3b5(0x193) === _0x17a3b5(0x193)) {
            var _0x1f32b0, _0x1c4905, _0xb110da;
            try {
                if (_0x17a3b5(0x10d) === _0x17a3b5(0x10d)) {
                    _0xb110da = _0xf0165d['\x6d\x61\x70\x49\x64'], _0x1f32b0 = _0xf0165d[_0x17a3b5(0x13e)];
                    if (_0x1f32b0 > 0x0) {
                        if (_0xb110da != null && _0xb110da === $gameMap[_0x17a3b5(0x174)]())
                            return ANET['\x55\x49']['\x61\x64\x64\x4d\x65\x73\x73\x61\x67\x65\x54\x6f\x43\x68\x61\x74'](_0xf0165d);
                    } else
                        return _0x17a3b5(0x185) === '\x72\x53\x6a\x76\x52' ? (_0x5c63f3 = _0x39fa3f, _0x10a2bf[_0x17a3b5(0x144)](_0x17a3b5(0x16c), _0x154a6c)) : ANET['\x55\x49'][_0x17a3b5(0x105)](_0xf0165d);
                } else {
                    if (_0x5e0e17[_0x17a3b5(0x160)]())
                        return;
                    return _0x1a4d3f['\x6f\x6e\x52\x6f\x6f\x6d\x50\x6c\x61\x79\x65\x72\x73'](_0x13e536[_0x17a3b5(0x1a3)]), _0x13b957['\x6f\x6e\x52\x6f\x6f\x6d\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'](_0x37c4cc[_0x17a3b5(0x150)]);
                }
            } catch (_0x589fec) {
                return _0x1c4905 = _0x589fec, console[_0x17a3b5(0x144)](_0x17a3b5(0x118), _0x1c4905);
            }
        } else
            return _0x54b7a8[_0x17a3b5(0x15f)](_0x623a9['\x69\x64'], _0x3225b4[_0x17a3b5(0x116)]);
    }, _0x3d383d[_0x4cd058(0x143)] = function (_0x443aa6) {
        var _0x32dc39 = _0x4cd058, _0x2f4409;
        try {
            if (!ANNetwork[_0x32dc39(0x10f)]())
                return;
            return ANGameManager[_0x32dc39(0x1a6)](_0x443aa6);
        } catch (_0x3e835c) {
            return _0x2f4409 = _0x3e835c, console[_0x32dc39(0x144)](_0x32dc39(0x143), _0x2f4409);
        }
    }, _0x3d383d[_0x4cd058(0x18e)] = function (_0x36326f) {
        var _0x20cded = _0x4cd058, _0x37a6f8, _0x271140;
        try {
            return _0x271140 = _0x20cded(0x199), ANClientResponceManager[_0x20cded(0xf7)](_0x271140, _0x36326f);
        } catch (_0x12e97e) {
            if (_0x20cded(0x171) !== _0x20cded(0x171)) {
                var _0x58e4b2;
                try {
                    return _0x265da4['\x6f\x6e\x50\x6c\x61\x79\x65\x72\x4a\x6f\x69\x6e\x65\x64\x54\x68\x69\x73\x47\x61\x6d\x65'](_0x4ee3e9);
                } catch (_0x5ec407) {
                    return _0x58e4b2 = _0x5ec407, _0x2bb622['\x77\x61\x72\x6e'](_0x20cded(0x1a5), _0x58e4b2);
                }
            } else
                return _0x37a6f8 = _0x12e97e, console[_0x20cded(0x144)](_0x20cded(0x143), _0x37a6f8);
        }
    }, _0x3d383d[_0x4cd058(0x1a5)] = function (_0x22e887) {
        var _0x28e361 = _0x4cd058;
        if (_0x28e361(0x17c) !== _0x28e361(0x17c))
            return _0x4815a5['\x70'](_0x28e361(0x17e) + _0x42801c[_0x28e361(0x16d)] + _0x28e361(0x18a)), _0x50895f[_0x28e361(0x139)](_0x28e361(0x142) + _0x43cf30[_0x28e361(0x175)] / 0x64), _0x4a3652[_0x28e361(0x13a)]();
        else {
            var _0x1b035b;
            try {
                return ANGameManager[_0x28e361(0x11f)](_0x22e887);
            } catch (_0x53d95c) {
                return _0x1b035b = _0x53d95c, console[_0x28e361(0x144)](_0x28e361(0x1a5), _0x1b035b);
            }
        }
    }, _0x3d383d[_0x4cd058(0x112)] = function (_0x4b87c9) {
        var _0x4b7aa0 = _0x4cd058;
        if (_0x4b7aa0(0x136) !== '\x70\x7a\x53\x54\x79') {
            var _0x9b0383;
            try {
                return ANPlayersManager[_0x4b7aa0(0x19e)](_0x4b87c9['\x69\x64'], _0x4b87c9['\x64\x61\x74\x61']);
            } catch (_0x550cf1) {
                return _0x9b0383 = _0x550cf1, console[_0x4b7aa0(0x144)](_0x4b7aa0(0x112), _0x9b0383);
            }
        } else
            return _0x20b140[_0x4b7aa0(0x14b)](_0x56bba8);
    }, _0x3d383d[_0x4cd058(0x10b)] = function (_0x1a84aa) {
        var _0x2966cb = _0x4cd058;
        if (_0x2966cb(0x13f) === '\x76\x56\x68\x4c\x64') {
            var _0x5da9de;
            try {
                return ANPlayersManager[_0x2966cb(0xec)](_0x1a84aa['\x69\x64'], _0x1a84aa['\x64\x61\x74\x61']);
            } catch (_0x4364cb) {
                return _0x5da9de = _0x4364cb, console['\x77\x61\x72\x6e'](_0x2966cb(0x10b), _0x5da9de);
            }
        } else {
            _0x3e95d5['\x70'](_0x2966cb(0x197)), _0x576253['\x63\x61\x6c\x6c\x62\x61\x63\x6b'](_0x1464fa[_0x2966cb(0x117)]('\x73\x65\x72\x76\x65\x72\x56\x65\x72\x43\x68\x65\x63\x6b', _0x36c2dd[_0x2966cb(0x16d)]), function (_0x44f204) {
                var _0x1e6b8e = _0x2966cb;
                if (!_0x44f204)
                    return _0xc5b1c6['\x70']('\x53\x65\x72\x76\x65\x72\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74\x65\x64\x2c\x20\x72\x65\x71\x75\x69\x72\x65\x20\x72\x65\x76\x2e\x20' + _0x22fa7f[_0x1e6b8e(0x16d)] + _0x1e6b8e(0x18a)), _0x1cbf5d['\x61\x6c\x65\x72\x74']('\x53\x65\x72\x76\x65\x72\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74\x65\x64\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x41\x6c\x70\x68\x61\x20\x4e\x45\x54\x20\x5a\x20\x76\x65\x72\x73\x69\x6f\x6e\x20' + _0x307ad5['\x56\x65\x72\x73\x69\x6f\x6e'] / 0x64), _0x1c56ab['\x73\x74\x6f\x70']();
            });
            if (this[_0x2966cb(0x1b2)] != null)
                return this[_0x2966cb(0x1b2)](0x1);
        }
    }, _0x3d383d['\x65\x76\x65\x6e\x74\x5f\x6d\x61\x70\x5f\x65\x76\x65\x6e\x74\x4d\x6f\x76\x65'] = function (_0x4a1571) {
        var _0x9b2686 = _0x4cd058, _0x12e7bf;
        try {
            return ANMapManager[_0x9b2686(0x109)](_0x4a1571[_0x9b2686(0x174)], _0x4a1571['\x69\x64'], _0x4a1571[_0x9b2686(0x116)]);
        } catch (_0x50d844) {
            return _0x12e7bf = _0x50d844, console['\x77\x61\x72\x6e'](_0x9b2686(0x149), _0x12e7bf);
        }
    }, _0x3d383d[_0x4cd058(0xeb)] = function (_0x21b98f) {
        var _0x52c5ba = _0x4cd058;
        if (_0x52c5ba(0x12c) !== _0x52c5ba(0x12c))
            return _0x1e8a89[_0x52c5ba(0x11f)](_0x3e931b);
        else {
            var _0x11ad69;
            try {
                if ('\x48\x4d\x45\x73\x53' !== _0x52c5ba(0x16f)) {
                    if ($gameMap['\x6d\x61\x70\x49\x64']() === _0x21b98f)
                        return ANMapManager[_0x52c5ba(0x169)]();
                } else
                    return _0x4ce928['\x6f\x6e\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'](_0x21d8ff);
            } catch (_0x1477ac) {
                return _0x52c5ba(0xea) !== _0x52c5ba(0xea) ? (_0x530af7 = _0x4e5ca2, _0x5b7784[_0x52c5ba(0x144)]('\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x73\x68\x61\x72\x65\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c', _0x5bbd46)) : (_0x11ad69 = _0x1477ac, console['\x77\x61\x72\x6e'](_0x52c5ba(0x149), _0x11ad69));
            }
        }
    }, _0x3d383d[_0x4cd058(0x114)] = function (_0x27fde5) {
        var _0x59bfb8 = _0x4cd058, _0x35406c;
        try {
            return ANInterpreterManager['\x6f\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x27fde5);
        } catch (_0x41a35f) {
            return _0x35406c = _0x41a35f, console[_0x59bfb8(0x144)]('\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x76\x69\x72\x74\x75\x61\x6c\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64', _0x35406c);
        }
    }, _0x3d383d[_0x4cd058(0xf4)] = function (_0x6960d8) {
        var _0x4f95f6 = _0x4cd058;
        if ('\x52\x4b\x69\x4a\x54' !== '\x52\x4b\x69\x4a\x54')
            return _0x1cc44f = _0x4910ef, _0x5aab9a[_0x4f95f6(0x144)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x63\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65', _0x10841e);
        else {
            var _0x363239;
            try {
                return ANBattleManager[_0x4f95f6(0xf9)](_0x6960d8['\x69\x64'], _0x6960d8[_0x4f95f6(0x15d)], _0x6960d8['\x64\x61\x74\x61']);
            } catch (_0x197392) {
                return _0x363239 = _0x197392, console['\x77\x61\x72\x6e']('\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64', _0x363239);
            }
        }
    }, _0x3d383d[_0x4cd058(0x19b)] = function (_0x2f5d5b) {
        var _0xcbbe20 = _0x4cd058, _0x108f2d;
        try {
            return ANBattleManager['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x2f5d5b);
        } catch (_0x4b2fd2) {
            return _0x108f2d = _0x4b2fd2, console[_0xcbbe20(0x144)]('\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e', _0x108f2d);
        }
    }, _0x3d383d['\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64'] = function (_0x10e99d) {
        var _0x5b4af8 = _0x4cd058;
        if (_0x5b4af8(0x132) === _0x5b4af8(0x132)) {
            var _0x57ff68;
            try {
                return ANBattleManager[_0x5b4af8(0x18f)]();
            } catch (_0x156b14) {
                if (_0x5b4af8(0x1a4) !== _0x5b4af8(0x1a4))
                    this['\x63\x61\x6c\x6c\x53\x63\x65\x6e\x65\x43\x61\x6c\x6c\x62\x61\x63\x6b'](_0x28e1a4);
                else
                    return _0x57ff68 = _0x156b14, console['\x77\x61\x72\x6e'](_0x5b4af8(0x111), _0x57ff68);
            }
        } else {
            var _0x287f54;
            try {
                if (!_0x42d8c5[_0x5b4af8(0x10f)]())
                    return;
                return _0xbe38c9[_0x5b4af8(0x1a6)](_0x54ae82);
            } catch (_0x101e19) {
                return _0x287f54 = _0x101e19, _0x3be810['\x77\x61\x72\x6e'](_0x5b4af8(0x143), _0x287f54);
            }
        }
    }, _0x3d383d[_0x4cd058(0x196)] = function (_0x57e792) {
        var _0x8bbd13 = _0x4cd058;
        if (_0x8bbd13(0x11b) !== _0x8bbd13(0x11b))
            return _0x9b2ca1[_0x8bbd13(0x152) + _0x4af576] != null;
        else {
            var _0x430f40;
            try {
                return ANBattleManager[_0x8bbd13(0x137)](_0x57e792[_0x8bbd13(0x145)], _0x57e792[_0x8bbd13(0x173)]);
            } catch (_0x4fe717) {
                return _0x430f40 = _0x4fe717, console['\x77\x61\x72\x6e']('\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65', _0x430f40);
            }
        }
    }, _0x3d383d[_0x4cd058(0x12f)] = function (_0x543eb3) {
        var _0x3ac8b9 = _0x4cd058;
        if ('\x55\x6d\x76\x62\x4a' !== _0x3ac8b9(0x18c)) {
            var _0x4291bb;
            try {
                return _0x49e424[_0x3ac8b9(0xf9)](_0x798b08['\x69\x64'], _0x19bf83[_0x3ac8b9(0x15d)], _0x5cc153[_0x3ac8b9(0x116)]);
            } catch (_0x12a184) {
                return _0x4291bb = _0x12a184, _0x3ce3f0[_0x3ac8b9(0x144)]('\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64', _0x4291bb);
            }
        } else {
            var _0x32c938;
            try {
                return _0x3ac8b9(0x134) === _0x3ac8b9(0x134) ? ANBattleManager[_0x3ac8b9(0x11a)](_0x543eb3['\x69\x6e\x70\x75\x74\x53\x74\x61\x74\x65'], _0x543eb3[_0x3ac8b9(0x113)]) : _0x36aafc[_0x3ac8b9(0x19e)](_0x286e22['\x69\x64'], _0x52cf27[_0x3ac8b9(0x116)]);
            } catch (_0x6f87c7) {
                return _0x32c938 = _0x6f87c7, console[_0x3ac8b9(0x144)](_0x3ac8b9(0x12f), _0x32c938);
            }
        }
    }, _0x3d383d['\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x69\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e'] = function (_0x3e2d2f) {
        var _0x2975bf = _0x4cd058, _0x22b407;
        try {
            return ANBattleManager[_0x2975bf(0x14c)](_0x3e2d2f[_0x2975bf(0x113)], _0x3e2d2f[_0x2975bf(0x122)]);
        } catch (_0x1b7b2c) {
            if (_0x2975bf(0xfe) === _0x2975bf(0xfe))
                return _0x22b407 = _0x1b7b2c, console[_0x2975bf(0x144)](_0x2975bf(0x161), _0x22b407);
            else {
                var _0x333946, _0x283c7d;
                try {
                    return _0x283c7d = _0x2975bf(0x199), _0x52fc80['\x6f\x6e\x52\x65\x73\x70\x6f\x6e\x63\x65\x52\x65\x63\x65\x69\x76\x65\x64'](_0x283c7d, _0x28a4ce);
                } catch (_0x2dddf1) {
                    return _0x333946 = _0x2dddf1, _0x332949[_0x2975bf(0x144)](_0x2975bf(0x143), _0x333946);
                }
            }
        }
    }, _0x3d383d['\x65\x76\x65\x6e\x74\x5f\x62\x61\x74\x74\x6c\x65\x5f\x73\x65\x72\x76\x65\x72\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = function (_0x5ef9a6) {
        var _0x29d64d = _0x4cd058, _0x2a8809;
        try {
            return ANBattleManager[_0x29d64d(0x17a)](_0x5ef9a6);
        } catch (_0x4174bf) {
            return _0x29d64d(0x167) === '\x4e\x4d\x41\x4e\x42' ? (_0x29d64d(0x125)['\x70'](), _0x5cfed1[_0x29d64d(0x127)](_0x134292)) : (_0x2a8809 = _0x4174bf, console[_0x29d64d(0x144)](_0x29d64d(0x102), _0x2a8809));
        }
    }, _0x3d383d[_0x4cd058(0x188)] = function (_0x462319) {
        var _0x3845c0 = _0x4cd058;
        if (_0x3845c0(0x120) === '\x64\x4f\x65\x71\x6d') {
            var _0x56745f;
            try {
                return _0x3845c0(0x162) !== _0x3845c0(0x162) ? _0x215ec0[_0x3845c0(0x165)](_0x533061['\x69\x64'], _0x3bd7bd[_0x3845c0(0x116)]) : (_0x3845c0(0x166)['\x70'](), ANBattleManager[_0x3845c0(0x10e)](_0x462319));
            } catch (_0x42e863) {
                return _0x56745f = _0x42e863, console['\x77\x61\x72\x6e'](_0x3845c0(0x188), _0x56745f);
            }
        } else {
            var _0x184c91;
            try {
                return _0x21401f['\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x56\x61\x6c\x75\x65'](_0x3e2732['\x69\x64'], _0xf2a7e8[_0x3845c0(0x116)]);
            } catch (_0x255964) {
                return _0x184c91 = _0x255964, _0x505c77[_0x3845c0(0x144)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x76\x61\x72\x69\x61\x62\x6c\x65', _0x184c91);
            }
        }
    }, _0x3d383d[_0x4cd058(0x16c)] = function (_0x5bc6d2) {
        var _0xd07b04 = _0x4cd058, _0x17bb7c;
        try {
            return _0xd07b04(0x10c)['\x70'](), ANInterpreterManager[_0xd07b04(0x128)](_0x5bc6d2);
        } catch (_0x1a604f) {
            return _0x17bb7c = _0x1a604f, console[_0xd07b04(0x144)]('\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64', _0x17bb7c);
        }
    }, _0x3d383d[_0x4cd058(0x1ab)] = function (_0x2de7c3) {
        var _0x36b7bf = _0x4cd058, _0x11bf60;
        try {
            return _0x36b7bf(0x179)['\x70'](), ANInterpreterManager[_0x36b7bf(0x11c)](_0x2de7c3);
        } catch (_0x506402) {
            return _0x11bf60 = _0x506402, console[_0x36b7bf(0x144)]('\x65\x76\x65\x6e\x74\x5f\x65\x76\x65\x6e\x74\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x44\x6f\x6e\x65', _0x11bf60);
        }
    }, _0x3d383d[_0x4cd058(0x129)] = function (_0x30fce1) {
        var _0x2837dc = _0x4cd058;
        if ('\x56\x78\x68\x6b\x4a' !== _0x2837dc(0x12e)) {
            var _0x2556d7;
            try {
                return '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x41\x4e\x20\x43\x4f\x4e\x54\x49\x4e\x55\x45'['\x70'](), ANInterpreterManager[_0x2837dc(0x127)](_0x30fce1);
            } catch (_0x2e5fd0) {
                return _0x2556d7 = _0x2e5fd0, console[_0x2837dc(0x144)](_0x2837dc(0x129), _0x2556d7);
            }
        } else {
            if (!_0x4b3655[_0x2837dc(0x10f)]())
                return;
            return _0x310578[_0x2837dc(0x1a6)](_0x592773);
        }
    }, _0x3d383d[_0x4cd058(0x147)] = function (_0x3c0ab0) {
        var _0x22276d = _0x4cd058;
        if (_0x22276d(0x14a) === _0x22276d(0xf1))
            return _0x214c03['\x55\x49'][_0x22276d(0x105)](_0x5ac444);
        else {
            var _0x5491c5;
            try {
                return '\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x46\x4f\x52\x43\x45\x20\x43\x41\x4e\x43\x45\x4c\x4c\x45\x44'['\x70'](), ANInterpreterManager[_0x22276d(0x163)](_0x3c0ab0);
            } catch (_0x7d6509) {
                return _0x5491c5 = _0x7d6509, console['\x77\x61\x72\x6e'](_0x22276d(0x147), _0x5491c5);
            }
        }
    }, _0x3d383d[_0x4cd058(0xee)] = function (_0x554246) {
        var _0x321b94 = _0x4cd058, _0x463cdc;
        try {
            return _0x321b94(0xfc) !== _0x321b94(0xfc) ? (_0x510e = _0x36405f, _0x3e6bbd[_0x321b94(0x144)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x75\x73\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64', _0x1faa68)) : ('\x53\x48\x41\x52\x45\x44\x20\x45\x56\x45\x4e\x54\x20\x43\x48\x4f\x49\x43\x45\x20\x41\x43\x54\x49\x4f\x4e'['\x70'](), ANInterpreterManager[_0x321b94(0x1a8)](_0x554246));
        } catch (_0x43b8b5) {
            return _0x463cdc = _0x43b8b5, console[_0x321b94(0x144)](_0x321b94(0x147), _0x463cdc);
        }
    }, _0x3d383d[_0x4cd058(0x100)] = function (_0x335308) {
        var _0x1101f1 = _0x4cd058, _0x3cf2db, _0x3eb5cc, _0x196031;
        try {
            return _0x1101f1(0x141) === '\x6d\x46\x57\x50\x7a' ? (_0x1101f1(0x131)['\x70'](), {
                name: _0x196031,
                data: _0x3cf2db
            } = _0x335308, nAPI['\x6f\x6e\x43\x75\x73\x74\x6f\x6d\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x196031, _0x3cf2db)) : (_0x1f110c[_0x1101f1(0x13b)](), _0x1101f1(0x110)['\x70']());
        } catch (_0x400c8f) {
            return _0x3eb5cc = _0x400c8f, console['\x77\x61\x72\x6e'](_0x1101f1(0x100), _0x3eb5cc);
        }
    }, _0x3d383d[_0x4cd058(0x19c)] = function (_0xf1664b) {
        var _0x23e087 = _0x4cd058;
        if ('\x6e\x52\x55\x7a\x57' !== '\x62\x44\x65\x44\x77') {
            var _0x364a41, _0x329d83, _0x35a685;
            try {
                return _0x23e087(0x1a2)['\x70'](), {
                    name: _0x35a685,
                    commonEventId: _0x364a41
                } = _0xf1664b, typeof $gameSystem !== _0x23e087(0x119) && $gameSystem !== null ? $gameSystem[_0x23e087(0x107)](_0x35a685, _0x364a41) : void 0x0;
            } catch (_0x49dc90) {
                return _0x329d83 = _0x49dc90, console[_0x23e087(0x144)]('\x65\x76\x65\x6e\x74\x5f\x67\x61\x6d\x65\x5f\x75\x73\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64', _0x329d83);
            }
        } else
            return _0x430b15 = _0x2ce3a9, _0x267c52[_0x23e087(0x144)](_0x23e087(0x10a), _0xf30de0);
    }, _0x3d383d[_0x4cd058(0x154)] = function (_0xb26802) {
        var _0x56499e = _0x4cd058, _0x2b7bbe, _0x100b3e, _0x42612e;
        try {
            ({
                cmd: _0x2b7bbe,
                data: _0x100b3e
            } = _0xb26802);
            if (_0x2b7bbe[_0x56499e(0x121)](_0x56499e(0x15c)))
                return ANTradeManager['\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'](_0x2b7bbe, _0x100b3e);
            else {
                if (_0x2b7bbe[_0x56499e(0x121)]('\x61\x70\x70\x6c\x79\x49\x74\x65\x6d\x46\x72\x6f\x6d\x4d\x65\x6e\x75'))
                    return Game_Action[_0x56499e(0x126)](_0x100b3e);
                else
                    return _0x2b7bbe[_0x56499e(0x121)](_0x56499e(0xef)) ? ANPlayersManager[_0x56499e(0xfa)](_0x100b3e) : console[_0x56499e(0x144)](_0x56499e(0x17f) + _0x2b7bbe);
            }
        } catch (_0xd8b483) {
            return _0x56499e(0xf0) === _0x56499e(0xf0) ? (_0x42612e = _0xd8b483, console[_0x56499e(0x144)]('\x65\x76\x65\x6e\x74\x5f\x63\x6f\x6d\x6d\x6f\x6e\x5f\x66\x6f\x72\x43\x6c\x69\x65\x6e\x74\x73', _0x42612e)) : this['\x6f\x6e\x43\x6f\x6e\x6e\x65\x63\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b'](0x1);
        }
    }, _0x3d383d[_0x4cd058(0x10a)] = function (_0x936392) {
        var _0x58f3f6 = _0x4cd058;
        if ('\x46\x49\x71\x79\x69' !== _0x58f3f6(0x186))
            return _0x684e59['\x6f\x6e\x45\x76\x65\x6e\x74\x4d\x6f\x76\x65'](_0x5d352b['\x6d\x61\x70\x49\x64'], _0x16f5c3['\x69\x64'], _0x377e17[_0x58f3f6(0x116)]);
        else {
            var _0x459bd0, _0x950faf, _0x59a4e8;
            try {
                return '\x6c\x63\x50\x73\x47' !== '\x6c\x63\x50\x73\x47' ? (_0x58f3f6(0x179)['\x70'](), _0x45b942['\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x73\x65'](_0x3b5315)) : ({
                    cmd: _0x459bd0,
                    data: _0x950faf
                } = _0x936392, NetClientMethodsManager[_0x58f3f6(0x181)](_0x459bd0, _0x950faf));
            } catch (_0x224068) {
                if ('\x63\x74\x68\x42\x6a' !== '\x63\x74\x68\x42\x6a') {
                    var _0x5ceb2f;
                    return (_0x5ceb2f = _0x355a88[_0x58f3f6(0x15a)]) != null ? _0x5ceb2f['\x6f\x6e\x53\x65\x72\x76\x65\x72\x45\x76\x65\x6e\x74'](_0x29735d) : void 0x0;
                } else
                    return _0x59a4e8 = _0x224068, console[_0x58f3f6(0x144)](_0x58f3f6(0x10a), _0x59a4e8);
            }
        }
    }, _0x3d383d[_0x4cd058(0x181)] = function (_0x296424, _0x5b8064) {
        var _0x57eb2f = _0x4cd058;
        return _0x57eb2f(0xed)['\x70'](_0x296424);
    };
}()));

function _0x4aaf() {
    var _0x525326 = [
        '\x6c\x65\x61\x64\x65\x72',
        '\x64\x78\x56\x56\x6b',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x4c\x6f\x63\x61\x6c\x42\x61\x74\x74\x6c\x65',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x73\x65\x6c\x65\x63\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x75\x70\x64\x61\x74\x65',
        '\x73\x65\x74\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x5f\x77\x61\x69\x74\x54\x69\x6d\x65\x6f\x75\x74',
        '\x53\x45\x54\x55\x50',
        '\x74\x61\x72\x67\x65\x74\x73',
        '\x63\x64\x4e\x6c\x70',
        '\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x69\x6e\x67',
        '\x41\x4e\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x73\x65\x6e\x64\x57\x69\x6e\x64\x6f\x77\x4c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65',
        '\x5f\x77\x61\x69\x74\x50\x6f\x6f\x6c',
        '\x70\x61\x63\x6b\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x6d\x57\x73\x47\x76',
        '\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x54\x6f\x45\x78\x69\x73\x74\x73\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65',
        '\x6f\x61\x77\x42\x4b',
        '\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72',
        '\x73\x65\x6e\x64\x49\x6e\x70\x75\x74\x53\x74\x61\x74\x65',
        '\x6d\x61\x6b\x65\x49\x64',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x42\x61\x74\x74\x6c\x65',
        '\x70\x78\x68\x72\x78',
        '\x73\x65\x74\x45\x76\x65\x6e\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x57\x77\x68\x45\x4c',
        '\x52\x55\x4d\x74\x71',
        '\x31\x30\x37\x39\x31\x38\x39\x33\x6e\x62\x52\x76\x58\x7a',
        '\x67\x74\x4c\x59\x58',
        '\x4e\x4a\x72\x44\x53',
        '\x45\x68\x73\x42\x71',
        '\x69\x73\x46\x6f\x72\x63\x65\x42\x61\x74\x74\x6c\x65\x53\x79\x6e\x63\x4d\x6f\x64\x65',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x45\x6e\x64\x65\x64',
        '\x69\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x63\x42\x7a\x52\x65',
        '\x61\x63\x74\x6f\x72\x73',
        '\x69\x73\x4c\x6f\x61\x64\x65\x72\x41\x63\x74\x69\x76\x65',
        '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64',
        '\x62\x61\x74\x74\x6c\x65\x4d\x65\x6d\x62\x65\x72\x73',
        '\x76\x79\x4a\x4b\x49',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x73\x65\x74\x75\x70',
        '\x65\x6e\x64\x65\x64',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x4f\x64\x48\x71\x49',
        '\x4e\x65\x74\x42\x61\x74\x74\x6c\x65',
        '\x6f\x70\x74\x69\x6f\x6e\x73',
        '\x69\x66\x45\x52\x77',
        '\x63\x4c\x51\x43\x66',
        '\x79\x43\x72\x48\x45',
        '\x4e\x6b\x56\x52\x63',
        '\x56\x58\x6c\x58\x53',
        '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x42\x69\x66\x53\x5a',
        '\x75\x53\x72\x64\x72',
        '\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x41\x63\x74\x6f\x72',
        '\x72\x61\x6e\x64\x6f\x6d',
        '\x35\x34\x39\x35\x39\x30\x34\x52\x48\x55\x48\x7a\x4d',
        '\x79\x64\x56\x4d\x47',
        '\x63\x6c\x65\x61\x72',
        '\x52\x45\x44',
        '\x38\x74\x79\x62\x6d\x71\x69',
        '\x69\x73\x4f\x6e\x65\x42\x61\x74\x74\x6c\x65\x72',
        '\x6e\x55\x68\x4e\x6e',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x61\x63\x74\x6f\x72',
        '\x64\x73\x4d\x57\x66',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x50\x4e\x45\x78\x6c',
        '\x32\x33\x38\x35\x30\x32\x34\x46\x4e\x48\x41\x67\x56',
        '\x51\x52\x41\x55\x69',
        '\x42\x4c\x41\x43\x4b',
        '\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65',
        '\x65\x78\x65\x63\x75\x74\x65\x4d\x61\x70\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x42\x61\x74\x74\x6c\x65',
        '\x50\x6e\x46\x54\x5a',
        '\x6f\x72\x4a\x73\x75',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x72\x74\x65\x64',
        '\x33\x34\x32\x35\x39\x32\x32\x6a\x63\x62\x54\x59\x46',
        '\x5a\x75\x6c\x6f\x68',
        '\x4e\x6d\x73\x6d\x57',
        '\x69\x73\x42\x61\x74\x74\x6c\x65\x4c\x6f\x63\x61\x6c',
        '\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x44\x61\x74\x61\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x5a\x4d\x76\x75\x57',
        '\x62\x43\x61\x4d\x53',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x72\x74\x65\x64',
        '\x5f\x65\x76\x65\x6e\x74\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x69\x6e\x66\x6f',
        '\x62\x61\x74\x74\x6c\x65\x49\x64',
        '\x42\x61\x74\x74\x6c\x65',
        '\x73\x45\x66\x71\x47',
        '\x6d\x61\x6b\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x43\x6f\x75\x6e\x74',
        '\x69\x6e\x70\x75\x74',
        '\x4e\x6f\x72\x68\x57',
        '\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61',
        '\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x62\x44\x5a\x74\x4a',
        '\x69\x73\x4c\x6f\x63\x61\x6c',
        '\x32\x31\x31\x31\x32\x32\x31\x32\x59\x6d\x62\x53\x63\x76',
        '\x61\x64\x64',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x53\x74\x61\x74\x65',
        '\x72\x6e\x66\x63\x6f',
        '\x69\x6e\x42\x61\x74\x74\x6c\x65',
        '\x43\x41\x4c\x4c\x20\x42\x41\x54\x54\x4c\x45\x20\x4d\x45\x54\x48\x4f\x44',
        '\x54\x61\x6c\x73\x67',
        '\x55\x74\x69\x6c\x73',
        '\x4e\x48\x4f\x67\x47',
        '\x61\x63\x74\x6f\x72\x49\x64',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x72\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x6b\x75\x76\x6b\x46',
        '\x73\x65\x6e\x64\x45\x78\x65\x63\x75\x74\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x42\x61\x74\x74\x6c\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x61\x64\x64\x54\x65\x78\x74',
        '\x4d\x53\x63\x4e\x79',
        '\x6f\x6e\x4c\x6f\x67\x57\x69\x6e\x64\x6f\x77\x4d\x65\x73\x73\x61\x67\x65',
        '\x70\x74\x58\x70\x53',
        '\x69\x73\x53\x68\x6f\x75\x6c\x64\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72',
        '\x73\x74\x61\x72\x74\x65\x64',
        '\x69\x73\x42\x61\x74\x74\x6c\x65\x52\x65\x67\x69\x73\x74\x72\x65\x64',
        '\x43\x62\x4b\x47\x70',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x52\x65\x67\x69\x73\x74\x65\x72\x52\x65\x73\x75\x6c\x74',
        '\x6d\x61\x70',
        '\x77\x42\x70\x4e\x44',
        '\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65',
        '\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x5f\x70\x72\x65\x76\x69\x6f\x75\x73\x4e\x65\x74\x42\x61\x74\x74\x6c\x65\x41\x63\x74\x6f\x72\x73',
        '\x54\x49\x4d\x45\x20\x4f\x55\x54',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e',
        '\x72\x65\x67\x69\x73\x74\x65\x72',
        '\x75\x53\x63\x4a\x75',
        '\x6d\x67\x55\x53\x50',
        '\x56\x45\x6b\x64\x7a',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64',
        '\x4e\x61\x66\x63\x57',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x68\x69\x64\x65\x4c\x6f\x61\x64\x65\x72',
        '\x62\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e\x44\x6f\x6e\x65',
        '\x5f\x69\x6e\x70\x75\x74\x74\x69\x6e\x67',
        '\x5f\x63\x61\x6c\x6c\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x4f\x6e\x53\x65\x72\x76\x65\x72',
        '\x63\x61\x6c\x6c\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x43\x6f\x6c\x6f\x72',
        '\x52\x45\x47\x49\x53\x54\x45\x52\x20\x53\x55\x43\x43\x45\x53\x53',
        '\x75\x61\x63\x6f\x7a',
        '\x53\x54\x41\x52\x54\x45\x44\x20\x4c\x4f\x43\x41\x4c\x20\x42\x41\x54\x54\x4c\x45',
        '\x32\x30\x67\x7a\x41\x68\x62\x66',
        '\x73\x65\x6e\x64',
        '\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64',
        '\x5f\x6c\x6f\x67\x57\x69\x6e\x64\x6f\x77',
        '\x4e\x7a\x62\x76\x4c',
        '\x6d\x61\x70\x49\x64',
        '\x5f\x69\x73\x44\x61\x74\x61\x43\x68\x61\x6e\x67\x65\x64',
        '\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65',
        '\x31\x30\x36\x36\x38\x38\x32\x55\x52\x53\x52\x4f\x45',
        '\x65\x78\x65\x63\x75\x74\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72',
        '\x31\x30\x72\x4f\x70\x62\x46\x64',
        '\x51\x48\x68\x65\x65',
        '\x69\x73\x4d\x56',
        '\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x73\x50\x6f\x6f\x6c',
        '\x59\x4e\x68\x59\x53',
        '\x76\x46\x6b\x6a\x78',
        '\x46\x6c\x69\x78\x4a',
        '\x5f\x72\x65\x71\x75\x65\x73\x74\x49\x6e\x69\x74\x69\x61\x6c\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x52\x65\x66\x72\x65\x73\x68',
        '\x6d\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x5f\x63\x75\x72\x72\x65\x6e\x74\x41\x63\x74\x6f\x72',
        '\x73\x65\x6e\x64\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x42\x61\x74\x74\x6c\x65',
        '\x32\x4f\x44\x42\x44\x44\x50',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x69\x6e\x70\x75\x74\x74\x69\x6e\x67\x41\x63\x74\x69\x6f\x6e',
        '\x4a\x6f\x69\x6e\x20\x53\x68\x61\x72\x65\x64\x20\x62\x61\x74\x74\x6c\x65',
        '\x6e\x43\x6c\x65\x61\x72\x43\x6c\x69\x65\x6e\x74\x49\x6e\x70\x75\x74',
        '\x77\x61\x72\x6e\x69\x6e\x67',
        '\x43\x6e\x6a\x45\x59',
        '\x73\x68\x69\x66\x74',
        '\x33\x37\x32\x39\x34\x31\x31\x6b\x47\x71\x4a\x6f\x67',
        '\x6f\x57\x54\x43\x56',
        '\x70\x75\x73\x68',
        '\x65\x79\x76\x64\x6e',
        '\x67\x65\x74',
        '\x73\x68\x6f\x77\x4c\x6f\x61\x64\x65\x72',
        '\x6c\x6f\x67\x4d\x65\x73\x73\x61\x67\x65',
        '\x75\x70\x64\x61\x74\x65\x49\x6e\x70\x75\x74\x43\x68\x61\x6e\x67\x65',
        '\x6e\x53\x65\x74\x43\x75\x72\x72\x65\x6e\x74\x43\x6c\x69\x65\x6e\x74\x49\x6e\x70\x75\x74',
        '\x73\x4e\x69\x5a\x51',
        '\x54\x72\x79\x20\x72\x65\x67\x69\x73\x74\x65\x72\x20\x62\x61\x74\x74\x6c\x65\x3a\x20',
        '\x65\x68\x78\x51\x6d',
        '\x61\x50\x64\x42\x73'
    ];
    _0x4aaf = function () {
        return _0x525326;
    };
    return _0x4aaf();
}
function _0x1649(_0x208c92, _0x258a73) {
    var _0x4aaf21 = _0x4aaf();
    return _0x1649 = function (_0x16491f, _0x51778a) {
        _0x16491f = _0x16491f - 0x1be;
        var _0x2bacfa = _0x4aaf21[_0x16491f];
        return _0x2bacfa;
    }, _0x1649(_0x208c92, _0x258a73);
}
var _0x429283 = _0x1649;
(function (_0x332b3d, _0x402dfe) {
    var _0x2db483 = _0x1649, _0x12d673 = _0x332b3d();
    while (!![]) {
        try {
            var _0x697996 = -parseInt(_0x2db483(0x1ce)) / 0x1 + parseInt(_0x2db483(0x1db)) / 0x2 * (-parseInt(_0x2db483(0x23e)) / 0x3) + -parseInt(_0x2db483(0x236)) / 0x4 * (-parseInt(_0x2db483(0x1d0)) / 0x5) + -parseInt(_0x2db483(0x22a)) / 0x6 + -parseInt(_0x2db483(0x20c)) / 0x7 * (parseInt(_0x2db483(0x22e)) / 0x8) + parseInt(_0x2db483(0x1e4)) / 0x9 + parseInt(_0x2db483(0x1c6)) / 0xa * (parseInt(_0x2db483(0x253)) / 0xb);
            if (_0x697996 === _0x402dfe)
                break;
            else
                _0x12d673['push'](_0x12d673['shift']());
        } catch (_0x338f28) {
            _0x12d673['push'](_0x12d673['shift']());
        }
    }
}(_0x4aaf, 0xbe2b8), window[_0x429283(0x1fd)] = function () {
}, (function () {
    var _0x1fe615 = _0x429283, _0x3005ac, _0x1c00ea;
    _0x3005ac = new KDCore[(_0x1fe615(0x21c))](_0x1fe615(0x21e)), _0x3005ac[_0x1fe615(0x1f4)](KDCore[_0x1fe615(0x1c2)][_0x1fe615(0x22d)], KDCore[_0x1fe615(0x1c2)][_0x1fe615(0x238)]['\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72'](0x87)), _0x3005ac['\x6f\x6e'](), _0x1c00ea = window['\x41\x4e\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72'], _0x1c00ea[_0x1fe615(0x204)] = function () {
        var _0x3098ad = _0x1fe615;
        return _0x3098ad(0x1e5) === '\x6f\x57\x54\x43\x56' ? this[_0x3098ad(0x24f)] != null ? this[_0x3098ad(0x24f)][_0x3098ad(0x214)][0x0] === ANGameManager[_0x3098ad(0x1d8)]() : '\x6d\x6b\x45\x6e\x46' === _0x3098ad(0x23b) ? _0x522e79[_0x3098ad(0x257)]() : $gameParty[_0x3098ad(0x257)]() : _0x58fde9[_0x3098ad(0x1c7)](_0x1d3f4c[_0x3098ad(0x24a)](_0x3098ad(0x1cf), _0x2886d4));
    }, _0x1c00ea['\x69\x73\x42\x61\x74\x74\x6c\x65\x52\x65\x67\x69\x73\x74\x72\x65\x64'] = function () {
        var _0x680f4c = _0x1fe615;
        if (_0x680f4c(0x1d5) !== _0x680f4c(0x1d5))
            _0x2e2174 = _0x16e125[_0x680f4c(0x1fa)][_0x680f4c(0x26a)](function (_0x546c9f) {
                var _0x36cd9d = _0x680f4c;
                return _0x115368[_0x36cd9d(0x25a)][_0x36cd9d(0x250)](_0x546c9f);
            }), _0x16e484[_0x680f4c(0x25e)](_0x3da808, _0x5e1c2d[_0x680f4c(0x216)], _0x71a3f6['\x6d\x69\x72\x72\x6f\x72']);
        else
            return this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] != null;
    }, _0x1c00ea[_0x1fe615(0x241)] = function () {
        var _0x28dd4a = _0x1fe615;
        if (_0x28dd4a(0x237) !== _0x28dd4a(0x274))
            return this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] != null ? this[_0x28dd4a(0x24f)]['\x69\x73\x4c\x6f\x63\x61\x6c'] : !![];
        else
            _0x168593 = _0x26c21c, _0x5b1320['\x77'](_0x348dcd);
    }, _0x1c00ea[_0x1fe615(0x265)] = function () {
        var _0x3e52a5 = _0x1fe615;
        return this[_0x3e52a5(0x26c)] != null;
    }, _0x1c00ea[_0x1fe615(0x217)] = function () {
        var _0x5a4b0d = _0x1fe615;
        if (_0x5a4b0d(0x273) !== _0x5a4b0d(0x273))
            this['\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x73\x50\x6f\x6f\x6c'] == null && (this['\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x73\x50\x6f\x6f\x6c'] = []), this['\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x73\x50\x6f\x6f\x6c']['\x70\x75\x73\x68']([
                _0x4fa539,
                _0x146a36,
                _0x518242
            ]);
        else
            return this[_0x5a4b0d(0x267)]() ? _0x5a4b0d(0x25b) === _0x5a4b0d(0x25b) ? this[_0x5a4b0d(0x24f)][_0x5a4b0d(0x214)][_0x5a4b0d(0x26a)](function (_0x1be6b9) {
                var _0x240784 = _0x5a4b0d;
                return _0x240784(0x1d1) !== '\x51\x48\x68\x65\x65' ? this[_0x240784(0x24f)] != null ? this[_0x240784(0x24f)][_0x240784(0x214)][0x0] === _0x299b7e[_0x240784(0x1d8)]() : _0x291669[_0x240784(0x257)]() : $gameActors[_0x240784(0x232)](_0x1be6b9);
            }) : (_0x2d00bd['\x70'](_0x5a4b0d(0x1ee) + _0x1cd1aa[_0x5a4b0d(0x249)]), this[_0x5a4b0d(0x1da)](_0x35bde0)) : [$gameParty[_0x5a4b0d(0x1f1)]()];
    }, _0x1c00ea[_0x1fe615(0x1dc)] = function (_0x46b2de) {
        var _0x112fdd = _0x1fe615;
        return _0x112fdd(0x1e7) !== _0x112fdd(0x1e7) ? (this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65'] = _0x3e9f09, this[_0x112fdd(0x1ff)] = 0x0, this[_0x112fdd(0x1f8)] = 0x168, _0x4e9b94[_0x112fdd(0x1e9)](0x3e8)) : (this[_0x112fdd(0x26c)] = _0x46b2de, this[_0x112fdd(0x1ff)] = 0x0, this['\x5f\x77\x61\x69\x74\x54\x69\x6d\x65\x6f\x75\x74'] = 0x168, HUIManager[_0x112fdd(0x1e9)](0x3e8));
    }, _0x1c00ea[_0x1fe615(0x219)] = function () {
        var _0x324e33 = _0x1fe615;
        return this['\x73\x65\x74\x57\x61\x69\x74'](null), HUIManager[_0x324e33(0x278)]();
    }, _0x1c00ea[_0x1fe615(0x1f6)] = function () {
        var _0xd594a2 = _0x1fe615;
        if (this[_0xd594a2(0x265)]()) {
            if ('\x63\x64\x4e\x6c\x70' === _0xd594a2(0x1fb)) {
                if (this['\x5f\x77\x61\x69\x74\x54\x69\x6d\x65\x6f\x75\x74'] <= 0x0)
                    _0x3005ac['\x70'](_0xd594a2(0x26f)), this[_0xd594a2(0x219)]();
                else {
                    if (_0xd594a2(0x20e) !== _0xd594a2(0x272))
                        this[_0xd594a2(0x1f8)]--, this[_0xd594a2(0x1fc)]();
                    else
                        return;
                }
            } else
                return this[_0xd594a2(0x267)]() ? this[_0xd594a2(0x24f)][_0xd594a2(0x214)][_0xd594a2(0x26a)](function (_0x5e8bde) {
                    var _0x4f06b3 = _0xd594a2;
                    return _0x58d34c[_0x4f06b3(0x232)](_0x5e8bde);
                }) : [_0x54b7a2['\x6c\x65\x61\x64\x65\x72']()];
        } else {
            if ('\x59\x43\x59\x4d\x69' !== _0xd594a2(0x203))
                this[_0xd594a2(0x1d3)][_0xd594a2(0x231)] > 0x0 && this[_0xd594a2(0x1c0)](...this[_0xd594a2(0x1d3)][_0xd594a2(0x1e3)]()), HUIManager[_0xd594a2(0x215)]() && HUIManager[_0xd594a2(0x278)]();
            else
                return;
        }
    }, _0x1c00ea['\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x69\x6e\x67'] = function () {
        var _0x4e0cda = _0x1fe615;
        if (_0x4e0cda(0x240) === _0x4e0cda(0x240)) {
            if (!this[_0x4e0cda(0x265)]())
                return;
            '\x57\x41\x49\x54'['\x70'](this[_0x4e0cda(0x1ff)]);
            switch (this[_0x4e0cda(0x26c)]) {
            case '\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64':
                if (this[_0x4e0cda(0x1ff)] === $gameParty[_0x4e0cda(0x217)]()[_0x4e0cda(0x231)]) {
                    if (_0x4e0cda(0x259) === _0x4e0cda(0x1d4))
                        return this[_0x4e0cda(0x24f)] != null ? this[_0x4e0cda(0x24f)][_0x4e0cda(0x252)] : !![];
                    else
                        this[_0x4e0cda(0x219)]();
                }
            }
        } else
            this[_0x4e0cda(0x202)]();
    }, _0x1c00ea[_0x1fe615(0x1eb)] = function () {
        var _0x27499d = _0x1fe615;
        if ($gameParty['\x69\x73\x4f\x6e\x65\x42\x61\x74\x74\x6c\x65\x72']())
            return;
        if (this[_0x27499d(0x228)] !== BattleManager[_0x27499d(0x1d9)]) {
            if ('\x4d\x53\x63\x4e\x79' === _0x27499d(0x262))
                this[_0x27499d(0x228)] = BattleManager['\x5f\x63\x75\x72\x72\x65\x6e\x74\x41\x63\x74\x6f\x72'], this[_0x27499d(0x205)]();
            else
                return _0x21359c['\x55\x74\x69\x6c\x73'][_0x27499d(0x250)](_0x2b5381);
        } else
            this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'] !== BattleManager['\x5f\x69\x6e\x70\x75\x74\x74\x69\x6e\x67'] && (this[_0x27499d(0x239)] = BattleManager[_0x27499d(0x1bf)], this[_0x27499d(0x205)]());
    }, _0x1c00ea[_0x1fe615(0x1f3)] = function () {
        var _0x4cfc0f = _0x1fe615;
        if ('\x63\x55\x5a\x62\x6e' === _0x4cfc0f(0x20a)) {
            var _0x227bdd, _0x5331bd;
            try {
                _0x5331bd = _0x13f7ed['\x74\x61\x72\x67\x65\x74\x73'][_0x4cfc0f(0x26a)](function (_0x16a745) {
                    var _0x4ee858 = _0x4cfc0f;
                    return _0x2e4b05['\x55\x74\x69\x6c\x73'][_0x4ee858(0x250)](_0x16a745);
                }), _0x55749a[_0x4cfc0f(0x25e)](_0x5331bd, _0x266abb[_0x4cfc0f(0x216)], _0x112d58['\x6d\x69\x72\x72\x6f\x72']);
            } catch (_0x5348c0) {
                _0x227bdd = _0x5348c0, _0x226d3b['\x77'](_0x227bdd);
            }
        } else
            this[_0x4cfc0f(0x24f)] = {
                '\x69\x73\x4c\x6f\x63\x61\x6c': !![],
                '\x62\x61\x74\x74\x6c\x65\x49\x64': '\x6c\x6f\x63\x61\x6c',
                '\x61\x63\x74\x6f\x72\x73': [ANGameManager[_0x4cfc0f(0x1d8)]()]
            }, _0x3005ac['\x70'](_0x4cfc0f(0x1c5));
    }, _0x1c00ea[_0x1fe615(0x246)] = function () {
        var _0x456d45 = _0x1fe615;
        _0x456d45(0x1f0) === _0x456d45(0x1f0) ? (this[_0x456d45(0x1d3)] = [], this[_0x456d45(0x239)] = ![], this[_0x456d45(0x228)] = null, this[_0x456d45(0x23d)]()) : (_0xd80dee = _0x53dbf4, _0x446320['\x77'](_0xb6f67f));
    }, _0x1c00ea['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x45\x6e\x64'] = function () {
        var _0x2d8b0 = _0x1fe615;
        if ('\x6b\x75\x76\x6b\x46' === _0x2d8b0(0x25f))
            !this['\x69\x73\x42\x61\x74\x74\x6c\x65\x4c\x6f\x63\x61\x6c']() && this[_0x2d8b0(0x211)](), this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = null;
        else {
            if (_0xd44f8b[_0x2d8b0(0x22f)]())
                return;
            if (this[_0x2d8b0(0x228)] !== _0x41068e[_0x2d8b0(0x1d9)])
                this[_0x2d8b0(0x228)] = _0x4e000a[_0x2d8b0(0x1d9)], this[_0x2d8b0(0x205)]();
            else
                this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'] !== _0x5ea65f[_0x2d8b0(0x1bf)] && (this['\x5f\x6c\x61\x73\x74\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x49\x6e\x70\x75\x74\x56\x61\x6c\x75\x65'] = _0x4fc94b[_0x2d8b0(0x1bf)], this['\x73\x65\x6e\x64\x49\x6e\x70\x75\x74\x53\x74\x61\x74\x65']());
        }
    }, _0x1c00ea[_0x1fe615(0x1c1)] = function (_0x31e0cc, _0x40d75f, _0x36eed1) {
        var _0x5ca5e4 = _0x1fe615;
        if (_0x5ca5e4(0x221) === _0x5ca5e4(0x208))
            return this[_0x5ca5e4(0x1dc)](null), _0xc1a2d6[_0x5ca5e4(0x278)]();
        else {
            if ($gameParty[_0x5ca5e4(0x22f)]()) {
                if ('\x75\x61\x63\x6f\x7a' === _0x5ca5e4(0x1c4))
                    return;
                else
                    this[_0x5ca5e4(0x1dc)]('\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64'), this['\x5f\x77\x61\x69\x74\x50\x6f\x6f\x6c'] += 0x1;
            }
            ANET['\x50\x50']['\x69\x73\x46\x6f\x72\x63\x65\x42\x61\x74\x74\x6c\x65\x53\x79\x6e\x63\x4d\x6f\x64\x65']() ? (this[_0x5ca5e4(0x1d3)] == null && (this['\x5f\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x73\x50\x6f\x6f\x6c'] = []), this[_0x5ca5e4(0x1d3)][_0x5ca5e4(0x1e6)]([
                _0x31e0cc,
                _0x40d75f,
                _0x36eed1
            ])) : this[_0x5ca5e4(0x1c0)](_0x31e0cc, _0x40d75f, _0x36eed1);
        }
    }, _0x1c00ea['\x5f\x63\x61\x6c\x6c\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x4f\x6e\x53\x65\x72\x76\x65\x72'] = function (_0x3bb9cb, _0x1e7604, _0x3d8e15) {
        var _0x287e6a = _0x1fe615;
        '\x43\x41\x4c\x4c\x20\x42\x41\x54\x54\x4c\x45\x20\x4d\x45\x54\x48\x4f\x44'['\x70'](), ANSyncDataManager[_0x287e6a(0x277)](_0x3bb9cb), _0x3bb9cb['\x6e\x65\x74\x44\x61\x74\x61\x4f\x62\x73\x65\x72\x76\x65\x72'][_0x287e6a(0x1cc)] = !![], this['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64'](_0x1e7604, _0x3bb9cb[_0x287e6a(0x200)](), _0x3d8e15), ANET['\x50\x50']['\x69\x73\x46\x6f\x72\x63\x65\x42\x61\x74\x74\x6c\x65\x53\x79\x6e\x63\x4d\x6f\x64\x65']() && (_0x287e6a(0x23c) !== '\x77\x73\x69\x4f\x70' ? (this['\x73\x65\x74\x57\x61\x69\x74']('\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64'), this[_0x287e6a(0x1ff)] += 0x1) : (_0x555be9 = _0xc3d256, _0x5b7d51['\x77'](_0x315b27)));
    }, _0x1c00ea[_0x1fe615(0x25e)] = function (_0x3f2b87, _0x420595, _0x4d6891 = ![]) {
        var _0x45ad45 = _0x1fe615, _0xd738f0, _0x52f386;
        if ($gameParty[_0x45ad45(0x22f)]()) {
            if (_0x45ad45(0x24e) !== _0x45ad45(0x24e))
                return this[_0x45ad45(0x24f)] != null;
            else
                return;
        }
        _0xd738f0 = _0x3f2b87[_0x45ad45(0x26a)](function (_0x1653e4) {
            var _0x6c3c6a = _0x45ad45;
            return _0x1653e4[_0x6c3c6a(0x200)]();
        }), _0x52f386 = {
            '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64': _0x420595,
            '\x6d\x69\x72\x72\x6f\x72': _0x4d6891,
            '\x74\x61\x72\x67\x65\x74\x73': _0xd738f0
        }, this[_0x45ad45(0x1dd)](_0x52f386);
    }, _0x1c00ea[_0x1fe615(0x1be)] = function () {
        var _0x360b54 = _0x1fe615;
        if (_0x360b54(0x244) === _0x360b54(0x244)) {
            var _0xa9aa9b;
            _0xa9aa9b = BattleManager[_0x360b54(0x1de)]();
            if (KDCore[_0x360b54(0x1d2)]()) {
                if ('\x54\x54\x4a\x4e\x49' !== _0x360b54(0x233)) {
                    if (_0xa9aa9b == null) {
                        if (_0x360b54(0x1f2) === _0x360b54(0x213)) {
                            var _0x44fe19;
                            _0x44fe19 = {
                                '\x6d\x65\x74\x68\x6f\x64': _0x49308e,
                                '\x69\x64': _0x1f14d6,
                                '\x64\x61\x74\x61': _0x310a45
                            }, _0x33e0e9[_0x360b54(0x1c7)](_0x475016[_0x360b54(0x24a)](_0x360b54(0x242), _0x44fe19), !![]);
                        } else
                            return;
                    }
                } else
                    _0x115051 = _0x564a8b[_0x360b54(0x1d9)][_0x360b54(0x25c)]();
            }
            this[_0x360b54(0x270)](ANGameManager[_0x360b54(0x1d8)](), _0xa9aa9b);
        } else
            return;
    }, _0x1c00ea[_0x1fe615(0x207)] = function (_0x585d0f) {
        var _0x309a89 = _0x1fe615;
        if ('\x4b\x75\x72\x79\x73' === _0x309a89(0x24b)) {
            if (!_0x843c92[_0x309a89(0x257)]())
                return;
            return _0x24097e[_0x309a89(0x1bf)] = _0x55e7d9, _0x501d0e === _0x446577['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64']() ? _0x20f980[_0x309a89(0x1ec)]() : _0x13c722['\x6e\x43\x6c\x65\x61\x72\x43\x6c\x69\x65\x6e\x74\x49\x6e\x70\x75\x74']();
        } else
            return _0x3005ac['\x70'](_0x309a89(0x1ee) + _0x585d0f[_0x309a89(0x249)]), this['\x73\x65\x6e\x64\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x42\x61\x74\x74\x6c\x65'](_0x585d0f);
    }, _0x1c00ea[_0x1fe615(0x202)] = function () {
        var _0x5400c2 = _0x1fe615;
        _0x3005ac['\x70'](_0x5400c2(0x1df)), $gameTemp['\x5f\x72\x65\x71\x75\x65\x73\x74\x49\x6e\x69\x74\x69\x61\x6c\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x52\x65\x66\x72\x65\x73\x68'] = !![];
    }, _0x1c00ea[_0x1fe615(0x23a)] = function (_0x525358) {
        var _0xaca118 = _0x1fe615;
        if (_0xaca118(0x227) === _0xaca118(0x227)) {
            var _0x268ab6, _0x388097;
            try {
                if ('\x43\x62\x4b\x47\x70' === _0xaca118(0x268))
                    return _0x268ab6 = KDCore['\x6d\x61\x6b\x65\x49\x64'](0x4), BattleManager[_0xaca118(0x1cd)](_0x268ab6), this[_0xaca118(0x260)]({
                        '\x62\x61\x74\x74\x6c\x65\x49\x64': _0x268ab6,
                        '\x6d\x61\x70\x49\x64': $gameMap[_0xaca118(0x1cb)](),
                        '\x74\x72\x6f\x6f\x70\x49\x64': _0x525358
                    });
                else {
                    if (!this[_0xaca118(0x265)]())
                        return;
                    '\x57\x41\x49\x54'['\x70'](this[_0xaca118(0x1ff)]);
                    switch (this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65']) {
                    case '\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64':
                        this['\x5f\x77\x61\x69\x74\x50\x6f\x6f\x6c'] === _0x1d0c71[_0xaca118(0x217)]()[_0xaca118(0x231)] && this[_0xaca118(0x219)]();
                    }
                }
            } catch (_0x1da5dd) {
                return _0x388097 = _0x1da5dd, KDCore[_0xaca118(0x1e1)](_0x388097);
            }
        } else
            return _0x50f795[_0xaca118(0x1e0)]();
    }, _0x1c00ea[_0x1fe615(0x270)] = function (_0x18b449, _0x4318da) {
        var _0x2fda72 = _0x1fe615;
        ANNetwork[_0x2fda72(0x1c7)](NMS[_0x2fda72(0x24a)](_0x2fda72(0x212), {
            '\x61\x63\x74\x69\x6f\x6e': _0x4318da,
            '\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64': _0x18b449
        }));
    }, _0x1c00ea[_0x1fe615(0x205)] = function () {
        var _0x437314 = _0x1fe615, _0x23fd61, _0xa119ea;
        _0xa119ea = BattleManager[_0x437314(0x1bf)];
        if (BattleManager['\x5f\x63\x75\x72\x72\x65\x6e\x74\x41\x63\x74\x6f\x72'] != null) {
            if (_0x437314(0x220) === _0x437314(0x264)) {
                if (!this['\x69\x73\x42\x61\x74\x74\x6c\x65\x52\x65\x67\x69\x73\x74\x72\x65\x64']())
                    return;
                if (this[_0x437314(0x241)]())
                    return;
                this[_0x437314(0x24f)][_0x437314(0x249)] === _0x14e78f['\x62\x61\x74\x74\x6c\x65\x49\x64'] && (_0x52fab0[_0x437314(0x26e)] = [...this[_0x437314(0x24f)][_0x437314(0x214)]], this[_0x437314(0x24f)] = _0x377341);
            } else
                _0x23fd61 = BattleManager[_0x437314(0x1d9)][_0x437314(0x25c)]();
        } else
            _0x23fd61 = null;
        ANNetwork[_0x437314(0x1c7)](NMS[_0x437314(0x24a)](_0x437314(0x24d), {
            '\x69\x6e\x70\x75\x74\x53\x74\x61\x74\x65': _0xa119ea,
            '\x69\x6e\x70\x75\x74\x41\x63\x74\x6f\x72\x49\x64': _0x23fd61
        }));
    }, _0x1c00ea[_0x1fe615(0x1fe)] = function (_0x309d97, _0x4d9ad4) {
        var _0xd977f7 = _0x1fe615;
        if (_0xd977f7(0x21d) !== _0xd977f7(0x21d))
            return;
        else
            ANNetwork[_0xd977f7(0x1c7)](NMS[_0xd977f7(0x24a)](_0xd977f7(0x1ea), {
                '\x63\x6d\x64': _0x309d97,
                '\x74\x65\x78\x74': _0x4d9ad4
            }));
    }, _0x1c00ea[_0x1fe615(0x23d)] = function () {
        var _0x3b8aa3 = _0x1fe615;
        if (_0x3b8aa3(0x201) === _0x3b8aa3(0x201))
            return ANNetwork[_0x3b8aa3(0x1c7)](NMS[_0x3b8aa3(0x24a)](_0x3b8aa3(0x266)));
        else
            return;
    }, _0x1c00ea[_0x1fe615(0x211)] = function () {
        var _0x573963 = _0x1fe615;
        if (_0x573963(0x226) === _0x573963(0x226))
            return ANNetwork[_0x573963(0x1c7)](NMS[_0x573963(0x24a)](_0x573963(0x21b)));
        else
            _0x573963(0x258)['\x70'](), _0x5613ea['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72'](_0x2c4a2d), _0x512636['\x6e\x65\x74\x44\x61\x74\x61\x4f\x62\x73\x65\x72\x76\x65\x72']['\x5f\x69\x73\x44\x61\x74\x61\x43\x68\x61\x6e\x67\x65\x64'] = !![], this[_0x573963(0x234)](_0x437622, _0x286ddb[_0x573963(0x200)](), _0x1e40bf), _0x660652['\x50\x50'][_0x573963(0x210)]() && (this['\x73\x65\x74\x57\x61\x69\x74']('\x62\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64'), this[_0x573963(0x1ff)] += 0x1);
    }, _0x1c00ea[_0x1fe615(0x234)] = function (_0x1c66fd, _0x1929af, _0x53b87d) {
        var _0x2a6199 = _0x1fe615;
        if ('\x4e\x61\x66\x63\x57' !== _0x2a6199(0x276))
            this[_0x2a6199(0x1ff)] += 0x1;
        else {
            var _0x33b663;
            _0x33b663 = {
                '\x6d\x65\x74\x68\x6f\x64': _0x1c66fd,
                '\x69\x64': _0x1929af,
                '\x64\x61\x74\x61': _0x53b87d
            }, ANNetwork[_0x2a6199(0x1c7)](NMS[_0x2a6199(0x24a)](_0x2a6199(0x242), _0x33b663), !![]);
        }
    }, _0x1c00ea[_0x1fe615(0x1dd)] = function (_0xd9dd03) {
        var _0x4b90c1 = _0x1fe615;
        if (_0x4b90c1(0x1ef) !== '\x65\x68\x78\x51\x6d') {
            var _0x25c650, _0x3c1c8a;
            try {
                return _0x25c650 = _0x3920a5[_0x4b90c1(0x206)](0x4), _0x5795b6['\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65'](_0x25c650), this['\x73\x65\x6e\x64\x45\x78\x65\x63\x75\x74\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x42\x61\x74\x74\x6c\x65\x52\x65\x71\x75\x65\x73\x74']({
                    '\x62\x61\x74\x74\x6c\x65\x49\x64': _0x25c650,
                    '\x6d\x61\x70\x49\x64': _0x25c829[_0x4b90c1(0x1cb)](),
                    '\x74\x72\x6f\x6f\x70\x49\x64': _0x4e8525
                });
            } catch (_0x1828ca) {
                return _0x3c1c8a = _0x1828ca, _0x1c2ab8['\x77\x61\x72\x6e\x69\x6e\x67'](_0x3c1c8a);
            }
        } else
            ANNetwork['\x73\x65\x6e\x64'](NMS[_0x4b90c1(0x24a)](_0x4b90c1(0x225), _0xd9dd03));
    }, _0x1c00ea[_0x1fe615(0x275)] = function () {
        var _0xf47883 = _0x1fe615;
        if (_0xf47883(0x20d) !== _0xf47883(0x20d))
            return;
        else
            ANNetwork[_0xf47883(0x1c7)](NMS[_0xf47883(0x24a)](_0xf47883(0x26d)));
    }, _0x1c00ea[_0x1fe615(0x1da)] = function (_0x49acf3) {
        var _0x5128e9 = _0x1fe615;
        if (_0x5128e9(0x223) !== _0x5128e9(0x230))
            ANNetwork[_0x5128e9(0x1e8)](NMS[_0x5128e9(0x24a)](_0x5128e9(0x271), _0x49acf3), function (_0x4e6483) {
                var _0x56052c = _0x5128e9;
                return ANBattleManager[_0x56052c(0x269)](_0x4e6483);
            }, function () {
                var _0x18e172 = _0x5128e9;
                if (_0x18e172(0x20f) !== _0x18e172(0x256))
                    return BattleManager[_0x18e172(0x1cd)](null), ANBattleManager[_0x18e172(0x1f3)]();
                else
                    !this[_0x18e172(0x241)]() && this[_0x18e172(0x211)](), this[_0x18e172(0x24f)] = null;
            });
        else
            return _0x4396e1 = _0x276404, _0x4019c8[_0x5128e9(0x1e1)](_0x1062d9);
    }, _0x1c00ea[_0x1fe615(0x260)] = function (_0x1365d9) {
        var _0x5cf61d = _0x1fe615;
        return ANNetwork[_0x5cf61d(0x1c7)](NMS[_0x5cf61d(0x24a)](_0x5cf61d(0x1cf), _0x1365d9));
    }, _0x1c00ea[_0x1fe615(0x243)] = function (_0x343d59) {
        var _0x4581bd = _0x1fe615;
        if (_0x4581bd(0x218) === '\x65\x49\x6f\x43\x65') {
            var _0x46c1b2;
            try {
                return _0x2de10c['\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65'](_0x118b3e), _0x44015a['\x73\x65\x74\x75\x70'](_0x101fb3, !![], ![]), _0x47b225[_0x4581bd(0x1e6)](_0x5a0d02);
            } catch (_0x4a2f2c) {
                return _0x46c1b2 = _0x4a2f2c, _0xd66e80[_0x4581bd(0x1e1)](_0x46c1b2);
            }
        } else {
            if (!this[_0x4581bd(0x267)]())
                return;
            if (this[_0x4581bd(0x241)]())
                return;
            this[_0x4581bd(0x24f)]['\x62\x61\x74\x74\x6c\x65\x49\x64'] === _0x343d59['\x62\x61\x74\x74\x6c\x65\x49\x64'] && (_0x4581bd(0x1e2) === _0x4581bd(0x1e2) ? ($gameTemp[_0x4581bd(0x26e)] = [...this[_0x4581bd(0x24f)][_0x4581bd(0x214)]], this[_0x4581bd(0x24f)] = _0x343d59) : _0x260fe4 = null);
        }
    }, _0x1c00ea[_0x1fe615(0x269)] = function (_0x5ddb65) {
        var _0x9129a7 = _0x1fe615, _0x454a49;
        '\x52\x45\x47\x49\x53\x54\x45\x52\x20\x53\x55\x43\x43\x45\x53\x53'['\x70'](), this[_0x9129a7(0x24f)] = _0x5ddb65, _0x454a49 = BattleManager[_0x9129a7(0x247)], BattleManager[_0x9129a7(0x21a)](..._0x5ddb65['\x6f\x70\x74\x69\x6f\x6e\x73']), _0x454a49 != null && BattleManager[_0x9129a7(0x209)](_0x454a49), _0x9129a7(0x1f9)['\x70'](_0x5ddb65['\x6f\x70\x74\x69\x6f\x6e\x73']), console['\x69\x6e\x66\x6f'](_0x5ddb65), !this[_0x9129a7(0x204)]() && ('\x46\x6c\x69\x78\x4a' !== _0x9129a7(0x1d6) ? _0x5d5786[_0x9129a7(0x1c7)](_0x2cb8b5[_0x9129a7(0x24a)](_0x9129a7(0x1ea), {
            '\x63\x6d\x64': _0x2e195a,
            '\x74\x65\x78\x74': _0x18dd06
        })) : this[_0x9129a7(0x202)]());
    }, _0x1c00ea[_0x1fe615(0x25d)] = function (_0x5f15c1) {
        var _0x507cc6 = _0x1fe615, _0x33975f, _0x421ff9;
        try {
            if (_0x507cc6(0x1ca) !== '\x4d\x6b\x51\x45\x74')
                _0x421ff9 = _0x5f15c1[_0x507cc6(0x1fa)][_0x507cc6(0x26a)](function (_0x2f6c5c) {
                    var _0x37f8ca = _0x507cc6;
                    if (_0x37f8ca(0x222) === _0x37f8ca(0x222))
                        return ANET[_0x37f8ca(0x25a)][_0x37f8ca(0x250)](_0x2f6c5c);
                    else
                        _0x4effc1['\x70'](_0x37f8ca(0x1df)), _0x322c8b[_0x37f8ca(0x1d7)] = !![];
                }), $gameTemp[_0x507cc6(0x25e)](_0x421ff9, _0x5f15c1['\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64'], _0x5f15c1['\x6d\x69\x72\x72\x6f\x72']);
            else
                return _0x18e501 = _0x2254cc, _0x3aa0d4['\x77\x61\x72\x6e\x69\x6e\x67'](_0xd4c563);
        } catch (_0x279ad8) {
            _0x33975f = _0x279ad8, ANET['\x77'](_0x33975f);
        }
    }, _0x1c00ea[_0x1fe615(0x1c8)] = function (_0x1d2b22, _0x5050b9, _0x1204ae) {
        var _0x38af9a = _0x1fe615, _0x57514e, _0x328efd;
        try {
            ANET['\x50\x50'][_0x38af9a(0x210)]() && this[_0x38af9a(0x275)](), _0x57514e = ANET[_0x38af9a(0x25a)][_0x38af9a(0x250)](_0x1d2b22), _0x57514e[_0x5050b9] != null && (_0x38af9a(0x235) === _0x38af9a(0x1ed) ? this['\x5f\x63\x61\x6c\x6c\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x4f\x6e\x53\x65\x72\x76\x65\x72'](_0x1a501c, _0x1f028d, _0x3abe56) : _0x57514e[_0x5050b9](_0x1204ae));
        } catch (_0x118be1) {
            _0x328efd = _0x118be1, ANET['\x77'](_0x328efd);
        }
    }, _0x1c00ea['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x4d\x65\x74\x68\x6f\x64\x52\x65\x63\x65\x69\x76\x65\x64'] = function () {
        var _0x463541 = _0x1fe615;
        if ('\x43\x67\x44\x55\x4c' === _0x463541(0x20b))
            _0xa4ce9f[_0x463541(0x26e)] = [...this[_0x463541(0x24f)][_0x463541(0x214)]], this['\x62\x61\x74\x74\x6c\x65\x44\x61\x74\x61'] = _0x5b78d1;
        else {
            var _0x980985;
            try {
                this[_0x463541(0x1ff)] += 0x1;
            } catch (_0x2df179) {
                _0x980985 = _0x2df179, ANET['\x77'](_0x980985);
            }
        }
    }, _0x1c00ea[_0x1fe615(0x255)] = function (_0x483614, _0x5546c2) {
        var _0x25b4cb = _0x1fe615;
        if (_0x25b4cb(0x26b) !== '\x77\x42\x70\x4e\x44')
            _0x4924af = _0x39b29c, _0x17607d['\x77'](_0x28a335);
        else {
            var _0x37e6dd;
            try {
                if (!$gameParty[_0x25b4cb(0x257)]()) {
                    if ('\x4c\x70\x6e\x4e\x59' !== _0x25b4cb(0x22b))
                        return;
                    else
                        return _0x561e0f[_0x25b4cb(0x232)](_0x5ec8c0);
                }
                BattleManager[_0x25b4cb(0x1bf)] = _0x483614;
                if (_0x5546c2 === ANGameManager[_0x25b4cb(0x1d8)]()) {
                    if ('\x78\x71\x44\x46\x70' === _0x25b4cb(0x23f))
                        return;
                    else
                        return BattleManager[_0x25b4cb(0x1ec)]();
                } else
                    return BattleManager[_0x25b4cb(0x1e0)]();
            } catch (_0x2b1078) {
                _0x37e6dd = _0x2b1078, ANET['\x77'](_0x37e6dd);
            }
        }
    }, _0x1c00ea['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x49\x6e\x70\x75\x74\x41\x63\x74\x69\x6f\x6e'] = function (_0x1cb5a1, _0x47909f) {
        var _0x9c1119 = _0x1fe615, _0x36332c;
        try {
            if (!ANGameManager[_0x9c1119(0x204)]())
                return;
            return BattleManager[_0x9c1119(0x1de)]()[_0x9c1119(0x1f7)](_0x47909f), BattleManager[_0x9c1119(0x1f5)]();
        } catch (_0x3c3fef) {
            _0x36332c = _0x3c3fef, ANET['\x77'](_0x36332c);
        }
    }, _0x1c00ea[_0x1fe615(0x263)] = function (_0x557fcb, _0x408fa3) {
        var _0x129bc0 = _0x1fe615, _0x4a3366, _0x59eb59, _0x2c9469;
        try {
            if (!$gameParty[_0x129bc0(0x257)]())
                return;
            switch (_0x557fcb) {
            case _0x129bc0(0x254):
                (_0x59eb59 = BattleManager['\x5f\x6c\x6f\x67\x57\x69\x6e\x64\x6f\x77']) != null && _0x59eb59[_0x129bc0(0x261)](_0x408fa3);
                break;
            default:
                (_0x2c9469 = BattleManager[_0x129bc0(0x1c9)]) != null && _0x2c9469[_0x129bc0(0x22c)]();
            }
        } catch (_0x193e91) {
            _0x4a3366 = _0x193e91, ANET['\x77'](_0x4a3366);
        }
    }, _0x1c00ea['\x6f\x6e\x45\x78\x65\x63\x75\x74\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x42\x61\x74\x74\x6c\x65'] = function (_0x4a3959) {
        var _0xec233d = _0x1fe615, _0xa75ba8, _0x2b4387, _0x1eb41f, _0x5a948a, _0x1d36c2;
        try {
            if (_0xec233d(0x251) === '\x62\x44\x5a\x74\x4a') {
                if ($gameMap['\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67']())
                    return;
                if (KDCore[_0xec233d(0x25a)]['\x69\x73\x53\x63\x65\x6e\x65\x42\x61\x74\x74\x6c\x65']())
                    return;
                if (_0x4a3959 == null)
                    return;
                ({
                    battleId: _0xa75ba8,
                    mapId: _0x1eb41f,
                    troopId: _0x1d36c2
                } = _0x4a3959);
                if ($gameMap[_0xec233d(0x1cb)]() !== _0x1eb41f) {
                    if ('\x46\x47\x65\x69\x4e' !== _0xec233d(0x245))
                        return;
                    else
                        return !![];
                }
                return $gamePlayer[_0xec233d(0x24c)](), _0x5a948a = Math[_0xec233d(0x229)]() * 0xc8, setTimeout(function () {
                    var _0x4ff677 = _0xec233d, _0x25d407;
                    try {
                        if (_0x4ff677(0x224) !== _0x4ff677(0x224))
                            return;
                        else
                            return BattleManager[_0x4ff677(0x1cd)](_0xa75ba8), BattleManager['\x73\x65\x74\x75\x70'](_0x1d36c2, !![], ![]), SceneManager['\x70\x75\x73\x68'](Scene_Battle);
                    } catch (_0x3a40aa) {
                        return _0x25d407 = _0x3a40aa, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x25d407);
                    }
                }, _0x5a948a);
            } else {
                var _0x252c10;
                _0xec233d(0x1c3)['\x70'](), this[_0xec233d(0x24f)] = _0xee4720, _0x252c10 = _0x68962c[_0xec233d(0x247)], _0x112076[_0xec233d(0x21a)](..._0x213bd7[_0xec233d(0x21f)]), _0x252c10 != null && _0x4b1886[_0xec233d(0x209)](_0x252c10), _0xec233d(0x1f9)['\x70'](_0x405c3b[_0xec233d(0x21f)]), _0x49a7b0[_0xec233d(0x248)](_0x47a8fa), !this['\x69\x73\x42\x61\x74\x74\x6c\x65\x4d\x61\x73\x74\x65\x72']() && this[_0xec233d(0x202)]();
            }
        } catch (_0x108fd0) {
            return _0x2b4387 = _0x108fd0, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x2b4387);
        }
    };
}()));

function _0xc641(_0x528f60, _0x359b70) {
    var _0x5a332f = _0x5a33();
    return _0xc641 = function (_0xc641d9, _0x397fb8) {
        _0xc641d9 = _0xc641d9 - 0xda;
        var _0x1ff200 = _0x5a332f[_0xc641d9];
        return _0x1ff200;
    }, _0xc641(_0x528f60, _0x359b70);
}
function _0x5a33() {
    var _0x5742eb = [
        '\x37\x34\x39\x35\x32\x30\x32\x4a\x79\x41\x47\x46\x57',
        '\x54\x6e\x4d\x50\x6b',
        '\x66\x76\x77\x48\x56',
        '\x61\x6a\x72\x4b\x6e',
        '\x43\x6f\x6c\x6f\x72',
        '\x5a\x46\x4c\x6c\x78',
        '\x34\x48\x68\x58\x64\x50\x68',
        '\x69\x6e\x64\x65\x78',
        '\x6b\x6c\x48\x54\x6b',
        '\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x54\x56\x6e\x65\x75',
        '\x4e\x65\x74\x49\x6e\x74\x72',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x6c\x69\x73\x74',
        '\x50\x72\x65\x73\x73\x20\x45\x53\x43\x20\x74\x6f\x20\x63\x61\x6e\x63\x65\x6c',
        '\x65\x78\x65\x63\x75\x74\x65\x4d\x6f\x64\x65',
        '\x4e\x71\x59\x57\x52',
        '\x31\x30\x4a\x73\x66\x45\x59\x41',
        '\x6d\x79\x41\x63\x74\x6f\x72\x49\x64',
        '\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x4e\x48\x7a\x53\x52',
        '\x45\x71\x65\x65\x74',
        '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73',
        '\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x72\x65\x73\x65\x72\x76\x65\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74',
        '\x31\x30\x30\x33\x33\x36\x30\x77\x4a\x6b\x77\x43\x48',
        '\x53\x68\x61\x72\x65\x64\x20\x65\x76\x65\x6e\x74\x20\x72\x65\x67\x69\x73\x74\x72\x65\x64\x20',
        '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64',
        '\x56\x69\x72\x74\x75\x61\x6c',
        '\x65\x76\x65\x6e\x74\x49\x64',
        '\x35\x35\x32\x37\x32\x37\x48\x75\x4c\x54\x4b\x44',
        '\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x67\x69\x73\x74\x65\x72\x65\x64\x44\x6f\x6e\x65',
        '\x73\x65\x6e\x64',
        '\x79\x56\x5a\x6e\x7a',
        '\x5f\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x42\x42\x4b\x54\x64',
        '\x69\x73\x4f\x6e\x41\x6e\x79\x45\x76\x65\x6e\x74',
        '\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x37\x36\x38\x30\x32\x34\x39\x52\x79\x5a\x65\x47\x65',
        '\x65\x76\x65\x6e\x74',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x71\x75\x65\x73\x74',
        '\x67\x76\x58\x59\x4e',
        '\x73\x65\x6e\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x45\x6e\x64\x65\x64',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x49\x73\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x69\x73\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x44\x72\x67\x52\x52',
        '\x41\x79\x42\x5a\x61',
        '\x53\x68\x61\x72\x65\x64\x20\x65\x76\x65\x6e\x74\x20\x66\x6f\x72\x63\x65\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64',
        '\x4e\x6f\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64\x73\x4c\x69\x73\x74',
        '\x73\x68\x6f\x77\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f',
        '\x76\x69\x72\x74\x75\x61\x6c\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x78\x51\x69\x76\x52',
        '\x6f\x70\x74\x69\x6f\x6e\x73',
        '\x55\x74\x69\x6c\x73',
        '\x45\x76\x65\x6e\x74',
        '\x61\x4e\x7a\x49\x6e',
        '\x76\x6f\x75\x74\x7a',
        '\x5f\x73\x68\x6f\x75\x6c\x64\x46\x6f\x72\x63\x65\x45\x78\x69\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x73\x65\x6e\x64\x43\x68\x6f\x69\x63\x65\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e',
        '\x72\x65\x73\x65\x72\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x64\x51\x64\x6f\x74',
        '\x53\x45\x4e\x44\x20\x41\x4c\x4c\x20\x43\x41\x4e\x43\x45\x4c\x20\x45\x56\x45\x4e\x54',
        '\x69\x6e\x64\x65\x6e\x74',
        '\x72\x65\x74\x72\x69\x65\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x75\x6b\x6e\x44\x6d',
        '\x6a\x6d\x53\x72\x56',
        '\x48\x54\x72\x6c\x74',
        '\x36\x31\x32\x31\x31\x37\x6b\x6a\x45\x53\x50\x48',
        '\x54\x74\x65\x58\x42',
        '\x6d\x79\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61',
        '\x73\x65\x74\x56\x61\x6c\x75\x65',
        '\x6b\x43\x51\x6f\x44',
        '\x6d\x4b\x72\x6e\x4d',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x44\x6f\x6e\x65',
        '\x6e\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\x41\x63\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x6f\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x73\x65\x74\x75\x70\x53\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x69\x73\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x65\x72\x76\x65\x64',
        '\x46\x65\x66\x72\x67',
        '\x68\x69\x64\x65\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f',
        '\x69\x73\x50\x61\x73\x73\x45\x76\x65\x6e\x74\x46\x69\x6c\x74\x65\x72\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x53\x61\x6d\x65\x20\x6d\x61\x70',
        '\x38\x55\x74\x6e\x5a\x50\x71',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x69\x73\x42\x75\x73\x79',
        '\x42\x4c\x41\x43\x4b',
        '\x65\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x65\x64',
        '\x6d\x61\x70\x49\x64',
        '\x53\x68\x61\x72\x65\x64\x20\x43\x68\x6f\x69\x63\x65\x20\x61\x63\x63\x65\x70\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72',
        '\x77\x63\x59\x41\x44',
        '\x72\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64',
        '\x35\x36\x36\x34\x30\x30\x6f\x4b\x53\x71\x48\x71',
        '\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61',
        '\x53\x79\x73\x74\x65\x6d',
        '\x65\x76\x65\x6e\x74\x50\x72\x6f\x63\x65\x73\x73\x45\x78\x69\x74',
        '\x6f\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x54\x73\x62\x67\x77',
        '\x48\x5a\x63\x64\x6e',
        '\x39\x34\x37\x31\x31\x32\x77\x78\x68\x72\x79\x70',
        '\x32\x30\x63\x4a\x56\x4e\x5a\x63',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x78\x57\x63\x41\x45',
        '\x6f\x6e\x52\x65\x67\x69\x73\x74\x65\x72\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x73\x68\x61\x72\x65\x64\x43\x68\x6f\x69\x63\x65',
        '\x5f\x72\x65\x73\x65\x72\x76\x65\x64\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x45\x56\x57\x72\x79',
        '\x66\x6f\x47\x41\x6d',
        '\x63\x68\x65\x63\x6b\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x5f\x73\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72',
        '\x73\x74\x61\x72\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x63\x6f\x64\x65',
        '\x59\x45\x4c\x4c\x4f\x57',
        '\x6a\x65\x71\x4c\x4e',
        '\x73\x77\x52\x4a\x6d',
        '\x4b\x5a\x66\x49\x73',
        '\x65\x76\x65\x6e\x74\x45\x6e\x64\x65\x64',
        '\x6e\x4f\x6e\x53\x79\x6e\x63\x65\x64\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x73\x65\x74\x75\x70',
        '\x4b\x6c\x53\x45\x50',
        '\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x6e\x53\x65\x74\x45\x6e\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x65\x64',
        '\x61\x64\x47\x76\x56',
        '\x4b\x65\x58\x6b\x43',
        '\x6d\x6a\x70\x58\x4f',
        '\x43\x6f\x6d\x6d\x6f\x6e\x20\x45\x76\x65\x6e\x74',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72'
    ];
    _0x5a33 = function () {
        return _0x5742eb;
    };
    return _0x5a33();
}
(function (_0x10dceb, _0x624244) {
    var _0x109044 = _0xc641, _0x5c3831 = _0x10dceb();
    while (!![]) {
        try {
            var _0xeed5fa = -parseInt(_0x109044(0x124)) / 0x1 + parseInt(_0x109044(0xf8)) / 0x2 + -parseInt(_0x109044(0x144)) / 0x3 * (-parseInt(_0x109044(0xe5)) / 0x4) + -parseInt(_0x109044(0x145)) / 0x5 * (-parseInt(_0x109044(0x13c)) / 0x6) + -parseInt(_0x109044(0xfd)) / 0x7 * (-parseInt(_0x109044(0x133)) / 0x8) + -parseInt(_0x109044(0x105)) / 0x9 * (parseInt(_0x109044(0xf0)) / 0xa) + parseInt(_0x109044(0xdf)) / 0xb;
            if (_0xeed5fa === _0x624244)
                break;
            else
                _0x5c3831['push'](_0x5c3831['shift']());
        } catch (_0x27877e) {
            _0x5c3831['push'](_0x5c3831['shift']());
        }
    }
}(_0x5a33, 0x77979), window['\x41\x4e\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x4d\x61\x6e\x61\x67\x65\x72'] = function () {
}, (function () {
    var _0x555067 = _0xc641, _0x2f172b, _0x1afc92;
    _0x2f172b = new KDCore[(_0x555067(0x147))](_0x555067(0xea)), _0x2f172b[_0x555067(0xeb)](KDCore[_0x555067(0xe3)][_0x555067(0x152)], KDCore[_0x555067(0xe3)][_0x555067(0x136)][_0x555067(0x146)](0xf)), _0x2f172b['\x6f\x6e'](), _0x1afc92 = window['\x41\x4e\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x4d\x61\x6e\x61\x67\x65\x72'], _0x1afc92[_0x555067(0x140)] = function () {
        var _0x331cac = _0x555067;
        $gameMessage[_0x331cac(0x135)]() ? $gameMessage['\x6e\x53\x65\x74\x45\x6e\x64\x43\x61\x6c\x6c\x62\x61\x63\x6b'](_0x1afc92[_0x331cac(0x140)]) : !$gameMap[_0x331cac(0xf2)]() && (_0x331cac(0x12f) === '\x53\x50\x44\x69\x4b' ? (_0x2ff8ee = _0x178991, _0x383ad8['\x77'](_0x458f20)) : (_0x1afc92[_0x331cac(0x10a)](), _0x1afc92[_0x331cac(0x104)]()));
    }, _0x1afc92[_0x555067(0x14e)] = function () {
        var _0x5390ea = _0x555067, _0x13e04d;
        if (NetPlayerDataWrapper[_0x5390ea(0x103)](ANGameManager[_0x5390ea(0x126)]()))
            _0x5390ea(0x148) !== _0x5390ea(0x148) ? _0x478ae1[_0x5390ea(0x11f)]() : !$gameMap['\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67']() && (!$gameMessage[_0x5390ea(0x135)]() && (_0x5390ea(0x122) === _0x5390ea(0x100) ? _0x10090f[_0x5390ea(0x150)](_0x42c67a, _0x2bff88['\x65\x76\x65\x6e\x74\x49\x64'], _0x546ed1[_0x5390ea(0x138)]) : this[_0x5390ea(0x10a)]()));
        else {
            if (_0x5390ea(0xdc) === '\x6d\x6a\x70\x58\x4f') {
                if ($gameMap[_0x5390ea(0xf2)]()) {
                    if (_0x5390ea(0x10e) === _0x5390ea(0x10e))
                        _0x13e04d = $gameMap['\x5f\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'][_0x5390ea(0xfc)](), this[_0x5390ea(0x15c)](_0x13e04d);
                    else {
                        if (_0x24ba4d[_0x5390ea(0x138)]() !== _0x2a44dc['\x6d\x61\x70\x49\x64'])
                            return;
                    }
                }
            } else
                return;
        }
    }, _0x1afc92['\x73\x74\x61\x72\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'] = function (_0x5ed524, _0x24076d, _0x39fb4d) {
        var _0x253914 = _0x555067, _0x26fd02, _0x46df75, _0xabb895;
        try {
            if (_0x5ed524[0x0][_0x253914(0x151)] === 0x7b && _0x24076d > 0x0) {
                if (_0x253914(0x102) === '\x63\x44\x75\x70\x6c') {
                    ({
                        mapId: _0x36d27c,
                        eventId: _0x3c3517,
                        action: _0x110f35,
                        index: _0x4add8f
                    } = _0x4b4563);
                    if (_0x20823[_0x253914(0x138)]() !== _0xa108cb)
                        return;
                    if (!_0x54afec[_0x253914(0x10b)]())
                        return;
                    if (_0x41f931[_0x253914(0x15a)]['\x65\x76\x65\x6e\x74\x49\x64']() !== _0x1d25b0)
                        return;
                    return _0x155307[_0x253914(0x12b)] = {
                        '\x61\x63\x74\x69\x6f\x6e': _0x2aa860,
                        '\x69\x6e\x64\x65\x78': _0x70cbe6
                    }, _0x1ec63d['\x70']('\x53\x68\x61\x72\x65\x64\x20\x43\x68\x6f\x69\x63\x65\x20\x61\x63\x63\x65\x70\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72');
                } else
                    _0x46df75 = [
                        _0x39fb4d,
                        _0x24076d,
                        _0x5ed524[0x0]['\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73'][0x0]
                    ], $gameSelfSwitches[_0x253914(0x127)](_0x46df75, _0x5ed524[0x0][_0x253914(0xf5)][0x1] === 0x0);
            } else
                _0xabb895 = new Game_Interpreter(), _0xabb895['\x73\x65\x74\x75\x70'](_0x5ed524, _0x24076d), _0xabb895[_0x253914(0x120)]();
        } catch (_0x1b169e) {
            _0x26fd02 = _0x1b169e, ANET['\x77'](_0x26fd02);
        }
    }, _0x1afc92[_0x555067(0x10c)] = function (_0x36add0) {
        var _0x208ba7 = _0x555067;
        return !ANET[_0x208ba7(0x13f)][_0x208ba7(0x110)][_0x208ba7(0x134)](_0x36add0);
    }, _0x1afc92['\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = function () {
        var _0x341da7 = _0x555067;
        this[_0x341da7(0x15a)] = null, this[_0x341da7(0x14f)] = ![], this[_0x341da7(0xf6)]();
    }, _0x1afc92[_0x555067(0x12d)] = function (_0x301168, _0x3e0354) {
        var _0x3de009 = _0x555067;
        this[_0x3de009(0x15a)] = _0x301168, this[_0x3de009(0x14f)] = _0x3e0354, $gameTemp[_0x3de009(0x119)] = ![];
        if ($gameTemp[_0x3de009(0x12e)]())
            return;
        if (this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'] == null) {
            if ('\x6f\x43\x57\x73\x75' !== _0x3de009(0x113))
                return;
            else
                _0x42f1f9[0x0][_0x3de009(0x151)] === 0x7b && _0x211995 > 0x0 ? (_0x1bd353 = [
                    _0x17b396,
                    _0x519fa2,
                    _0x2285fd[0x0][_0x3de009(0xf5)][0x0]
                ], _0x5b775c['\x73\x65\x74\x56\x61\x6c\x75\x65'](_0x387443, _0x5997a7[0x0][_0x3de009(0xf5)][0x1] === 0x0)) : (_0x33836a = new _0x678ff7(), _0x1102fe[_0x3de009(0x158)](_0x359639, _0x3a4a93), _0x19fc68[_0x3de009(0x120)]());
        }
        _0x2f172b['\x70'](_0x3de009(0xf9) + this[_0x3de009(0x15a)][_0x3de009(0xfc)]());
    }, _0x1afc92[_0x555067(0xde)] = function () {
        var _0x585a04 = _0x555067;
        return this[_0x585a04(0x10b)]() && this[_0x585a04(0x14f)] === !![];
    }, _0x1afc92[_0x555067(0x10b)] = function () {
        var _0x3adb74 = _0x555067;
        if ('\x77\x63\x59\x41\x44' !== _0x3adb74(0x13a))
            _0x278a38 = new _0x575d1e(), _0x40886f[_0x3adb74(0x158)](_0x180880, _0xac580), _0x33e675[_0x3adb74(0x120)]();
        else
            return this[_0x3adb74(0x15a)] != null && $gameMap[_0x3adb74(0xf2)]();
    }, _0x1afc92['\x66\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = function () {
        var _0x47c40b = _0x555067;
        if (!this[_0x47c40b(0xde)]())
            return;
        _0x2f172b['\x70'](_0x47c40b(0x10f)), _0x47c40b(0x11d)['\x70'](), this[_0x47c40b(0x109)](), this[_0x47c40b(0xf6)]();
    }, _0x1afc92['\x73\x68\x6f\x77\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = function () {
        var _0xfcd3de = _0x555067, _0x4e637f, _0xa87ebd;
        this[_0xfcd3de(0xf6)](), _0x4e637f = '\x57\x61\x69\x74\x69\x6e\x67\x20\x70\x6c\x61\x79\x65\x72\x73', _0xa87ebd = '';
        this[_0xfcd3de(0xde)]() && this[_0xfcd3de(0x15a)]['\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x61\x6e\x42\x65\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64']() && ('\x44\x72\x67\x52\x52' !== _0xfcd3de(0x10d) ? (_0xc6d0a9 = _0x2e89fb, _0x6436d0['\x77'](_0xb2fd56)) : _0xa87ebd = _0xfcd3de(0xed));
        if (typeof HUIManager !== _0xfcd3de(0xfa) && HUIManager !== null) {
            if (_0xfcd3de(0x129) === _0xfcd3de(0x153)) {
                ({
                    mapId: _0x3850b4,
                    eventId: _0x2d54ca,
                    index: _0xeab575,
                    indent: _0xdffddc
                } = _0x5f805c);
                if (_0xcbd601[_0xfcd3de(0x138)]() !== _0x466a2f)
                    return;
                if (_0x29c634[_0xfcd3de(0x10b)]())
                    return;
                if (_0x6f4099 !== 0x0)
                    return;
                _0x243107[_0xfcd3de(0x11b)](_0x523059);
                return;
            } else
                HUIManager['\x73\x68\x6f\x77\x57\x61\x69\x74\x69\x6e\x67\x49\x6e\x66\x6f'](_0x4e637f, _0xa87ebd, 0x3e8);
        }
    }, _0x1afc92['\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = function () {
        var _0x2b2f1d = _0x555067;
        return typeof HUIManager !== _0x2b2f1d(0xfa) && HUIManager !== null ? HUIManager[_0x2b2f1d(0x130)]() : void 0x0;
    }, _0x1afc92['\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x65\x64'] = function (_0x58620c) {
        var _0x32c47f = _0x555067;
        if ('\x61\x6a\x72\x4b\x6e' === _0x32c47f(0xe2))
            return ANNetwork['\x73\x65\x6e\x64'](NMS[_0x32c47f(0x116)](_0x32c47f(0x137), _0x58620c));
        else
            !_0x488190['\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67']() && (!_0x7bb1e3[_0x32c47f(0x135)]() && this[_0x32c47f(0x10a)]());
    }, _0x1afc92[_0x555067(0x10a)] = function () {
        var _0x506721 = _0x555067;
        return ANNetwork[_0x506721(0xff)](NMS['\x45\x76\x65\x6e\x74'](_0x506721(0x156)));
    }, _0x1afc92[_0x555067(0xe8)] = function (_0x385cae, _0x521d41, _0x117bf9) {
        var _0x34ac4d = _0x555067, _0x35e82b, _0x267813, _0x22591f;
        _0x267813 = {
            '\x63\x6f\x64\x65': 0x0,
            '\x69\x6e\x64\x65\x6e\x74': 0x0,
            '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73': []
        }, _0x22591f = {
            '\x6c\x69\x73\x74': [
                _0x385cae,
                _0x267813
            ]
        }, _0x35e82b = {
            '\x6d\x61\x70\x49\x64': $gameMap[_0x34ac4d(0x138)](),
            '\x65\x76\x65\x6e\x74\x49\x64': _0x117bf9,
            '\x65\x76\x65\x6e\x74': _0x22591f,
            '\x6f\x70\x74\x69\x6f\x6e\x73': _0x521d41
        }, ANNetwork[_0x34ac4d(0xff)](NMS[_0x34ac4d(0x116)](_0x34ac4d(0x112), _0x35e82b));
    }, _0x1afc92['\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x71\x75\x69\x72\x65\x52\x65\x67\x69\x73\x74\x65\x72'] = function () {
        var _0x1928cb = _0x555067;
        if (_0x1928cb(0xf3) !== '\x4e\x48\x7a\x53\x52')
            return;
        else {
            var _0x1d81bc;
            if (!this['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72']())
                return;
            _0x1d81bc = {
                '\x6d\x61\x70\x49\x64': $gameMap[_0x1928cb(0x138)](),
                '\x65\x76\x65\x6e\x74\x49\x64': this[_0x1928cb(0x15a)][_0x1928cb(0xfc)](),
                '\x69\x6e\x64\x65\x78': this[_0x1928cb(0x15a)][_0x1928cb(0x13e)][_0x1928cb(0xe6)],
                '\x69\x6e\x64\x65\x6e\x74': this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'][_0x1928cb(0x13e)][_0x1928cb(0x11e)]
            }, ANNetwork[_0x1928cb(0xff)](NMS[_0x1928cb(0x116)](_0x1928cb(0x13b), _0x1d81bc));
        }
    }, _0x1afc92[_0x555067(0xfe)] = function () {
        var _0x25b820 = _0x555067, _0x2196c1;
        if (this[_0x25b820(0xde)]())
            return;
        _0x2196c1 = {
            '\x6d\x61\x70\x49\x64': $gameMap[_0x25b820(0x138)](),
            '\x65\x76\x65\x6e\x74\x49\x64': this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'][_0x25b820(0xfc)](),
            '\x61\x63\x74\x6f\x72\x49\x64': ANGameManager[_0x25b820(0xf1)](),
            '\x69\x6e\x64\x65\x78': this[_0x25b820(0x15a)][_0x25b820(0x13e)][_0x25b820(0xe6)],
            '\x69\x6e\x64\x65\x6e\x74': this['\x5f\x73\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'][_0x25b820(0x13e)][_0x25b820(0x11e)]
        }, ANNetwork[_0x25b820(0xff)](NMS[_0x25b820(0x116)](_0x25b820(0x12a), _0x2196c1));
    }, _0x1afc92['\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x61\x64\x79\x54\x6f\x43\x6f\x6e\x74\x69\x6e\x75\x65'] = function () {
        var _0x42a9a9 = _0x555067;
        if (_0x42a9a9(0xe9) !== '\x45\x63\x61\x4e\x73') {
            var _0x2744da;
            if (!this[_0x42a9a9(0xde)]()) {
                if ('\x48\x5a\x63\x64\x6e' === _0x42a9a9(0x143))
                    return;
                else
                    return;
            }
            _0x2744da = {
                '\x6d\x61\x70\x49\x64': $gameMap[_0x42a9a9(0x138)](),
                '\x65\x76\x65\x6e\x74\x49\x64': this[_0x42a9a9(0x15a)][_0x42a9a9(0xfc)]()
            }, ANNetwork[_0x42a9a9(0xff)](NMS[_0x42a9a9(0x116)]('\x73\x68\x61\x72\x65\x64\x43\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65', _0x2744da));
        } else
            return this[_0x42a9a9(0x10b)]() && this[_0x42a9a9(0x14f)] === !![];
    }, _0x1afc92['\x73\x65\x6e\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = function () {
        var _0x53fdf2 = _0x555067;
        if (_0x53fdf2(0x154) !== _0x53fdf2(0xe7)) {
            var _0x18452e;
            if (!this['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72']()) {
                if (_0x53fdf2(0xe0) !== _0x53fdf2(0xe0))
                    _0x4df65e[_0x53fdf2(0x15b)](_0x5847dd[_0x53fdf2(0x140)]);
                else
                    return;
            }
            _0x18452e = {
                '\x6d\x61\x70\x49\x64': $gameMap[_0x53fdf2(0x138)](),
                '\x65\x76\x65\x6e\x74\x49\x64': this[_0x53fdf2(0x15a)][_0x53fdf2(0xfc)]()
            }, ANNetwork['\x73\x65\x6e\x64'](NMS['\x45\x76\x65\x6e\x74']('\x73\x68\x61\x72\x65\x64\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c', _0x18452e));
        } else
            return;
    }, _0x1afc92[_0x555067(0x11a)] = function (_0x259f37, _0x2ee1b3) {
        var _0x454220 = _0x555067, _0x2b5007;
        if (!this[_0x454220(0xde)]())
            return;
        _0x2b5007 = {
            '\x6d\x61\x70\x49\x64': $gameMap[_0x454220(0x138)](),
            '\x65\x76\x65\x6e\x74\x49\x64': this[_0x454220(0x15a)][_0x454220(0xfc)](),
            '\x69\x6e\x64\x65\x78': _0x259f37,
            '\x61\x63\x74\x69\x6f\x6e': _0x2ee1b3
        }, ANNetwork[_0x454220(0xff)](NMS[_0x454220(0x116)](_0x454220(0x14a), _0x2b5007));
    }, _0x1afc92[_0x555067(0x12c)] = function (_0x539136) {
        var _0x2599e1 = _0x555067, _0x8e7b43, _0x637496, _0x2b3dd2;
        try {
            if (_0x2599e1(0xef) !== '\x61\x53\x63\x4a\x49') {
                if (_0x539136['\x6f\x70\x74\x69\x6f\x6e\x73']['\x73\x63\x6f\x70\x65'] === _0x2599e1(0x132)) {
                    if (_0x2599e1(0x159) !== _0x2599e1(0xf4)) {
                        if ($gameMap['\x6d\x61\x70\x49\x64']() !== _0x539136[_0x2599e1(0x138)]) {
                            if ('\x66\x76\x77\x48\x56' !== _0x2599e1(0xe1))
                                _0x1bb756 = _0x2599e1(0xed);
                            else
                                return;
                        }
                    } else
                        !_0x520269[_0x2599e1(0xf2)]() && (_0x5229d2['\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x45\x6e\x64\x65\x64'](), _0xbd5772['\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']());
                }
                if (!ANET[_0x2599e1(0x115)][_0x2599e1(0x131)](_0x539136[_0x2599e1(0x114)]))
                    return;
                _0x637496 = _0x539136[_0x2599e1(0x106)], _0x2b3dd2 = _0x637496[_0x2599e1(0xec)];
                switch (_0x539136[_0x2599e1(0x114)][_0x2599e1(0xee)]) {
                case _0x2599e1(0xfb):
                    _0x1afc92[_0x2599e1(0x150)](_0x2b3dd2, _0x539136[_0x2599e1(0xfc)], _0x539136[_0x2599e1(0x138)]);
                    break;
                case _0x2599e1(0xdd):
                    $gameTemp[_0x2599e1(0xf7)](_0x637496);
                    break;
                default:
                    if (_0x1afc92[_0x2599e1(0x10c)](_0x2b3dd2[0x0][_0x2599e1(0x151)]))
                        _0x1afc92[_0x2599e1(0x150)](_0x2b3dd2, _0x539136[_0x2599e1(0xfc)], _0x539136[_0x2599e1(0x138)]);
                    else {
                        if ('\x67\x76\x58\x59\x4e' === _0x2599e1(0x108))
                            $gameTemp[_0x2599e1(0xf7)](_0x637496);
                        else
                            return typeof _0x1ed273 !== _0x2599e1(0xfa) && _0x706cb !== null ? _0x1ff057[_0x2599e1(0x130)]() : void 0x0;
                    }
                }
            } else
                _0x9fe18b[_0x2599e1(0x12e)]() && (_0x5db027 === _0x4e4e4f[_0x2599e1(0x14b)] && _0x1c2b7c[_0x2599e1(0x11f)]());
        } catch (_0x579fc7) {
            _0x8e7b43 = _0x579fc7, ANET['\x77'](_0x8e7b43);
        }
    }, _0x1afc92[_0x555067(0x107)] = function (_0x2c9b7f) {
        var _0x81f783 = _0x555067;
        if ('\x4f\x6c\x4c\x4a\x46' === _0x81f783(0x118))
            return;
        else {
            var _0x8c88fe, _0xc3b76, _0x59aa1d, _0x16c2df, _0x1e7b8c;
            try {
                ({
                    mapId: _0x1e7b8c,
                    eventId: _0xc3b76,
                    index: _0x16c2df,
                    indent: _0x59aa1d
                } = _0x2c9b7f);
                if ($gameMap[_0x81f783(0x138)]() !== _0x1e7b8c) {
                    if ('\x66\x61\x56\x57\x53' !== _0x81f783(0xda))
                        return;
                    else {
                        var _0x158fe9, _0x230611;
                        this['\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'](), _0x158fe9 = '\x57\x61\x69\x74\x69\x6e\x67\x20\x70\x6c\x61\x79\x65\x72\x73', _0x230611 = '', this[_0x81f783(0xde)]() && this[_0x81f783(0x15a)]['\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x61\x6e\x42\x65\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64']() && (_0x230611 = _0x81f783(0xed)), typeof _0x2e9495 !== _0x81f783(0xfa) && _0x5c0a16 !== null && _0x5c9183[_0x81f783(0x111)](_0x158fe9, _0x230611, 0x3e8);
                    }
                }
                if (_0x1afc92[_0x81f783(0x10b)]())
                    return;
                if (_0x16c2df !== 0x0)
                    return;
                $gameTemp[_0x81f783(0x11b)](_0xc3b76);
                return;
            } catch (_0x5e9860) {
                if ('\x74\x47\x78\x59\x4b' === _0x81f783(0x121))
                    return;
                else
                    _0x8c88fe = _0x5e9860, ANET['\x77'](_0x8c88fe);
            }
        }
    }, _0x1afc92[_0x555067(0x149)] = function (_0x2eeee3) {
        var _0x3fe93f = _0x555067, _0x33e453, _0x29e519, _0x400068, _0x3a31ed, _0x38ba23, _0x420860;
        try {
            if (_0x3fe93f(0x123) !== '\x48\x54\x72\x6c\x74')
                _0x53cee1[_0x3fe93f(0x135)]() ? _0x472806[_0x3fe93f(0x15b)](_0x3e4701[_0x3fe93f(0x140)]) : !_0x2359ef[_0x3fe93f(0xf2)]() && (_0x34ebed[_0x3fe93f(0x10a)](), _0xbd40e7[_0x3fe93f(0x104)]());
            else {
                ({
                    mapId: _0x420860,
                    eventId: _0x400068,
                    actorId: _0x33e453,
                    index: _0x38ba23,
                    indent: _0x3a31ed
                } = _0x2eeee3);
                if ($gameMap[_0x3fe93f(0x138)]() !== _0x420860)
                    return;
                if (!_0x1afc92[_0x3fe93f(0xde)]()) {
                    if ('\x6f\x41\x64\x4e\x62' !== '\x4b\x4d\x4a\x41\x64')
                        return;
                    else
                        return;
                }
                if (_0x1afc92[_0x3fe93f(0x15a)][_0x3fe93f(0xfc)]() !== _0x400068)
                    return;
                _0x1afc92[_0x3fe93f(0x15a)][_0x3fe93f(0x157)](_0x38ba23, _0x3a31ed, _0x33e453);
            }
        } catch (_0x3cb9cc) {
            _0x29e519 = _0x3cb9cc, ANET['\x77'](_0x29e519);
        }
    }, _0x1afc92[_0x555067(0x141)] = function (_0x4d692b) {
        var _0x58a260 = _0x555067;
        if (_0x58a260(0x128) !== _0x58a260(0x128))
            _0x217bbd[_0x58a260(0xf7)](_0x355d06);
        else {
            var _0x10d0a8, _0x177bed, _0x5a7f72;
            try {
                ({
                    mapId: _0x5a7f72,
                    eventId: _0x177bed
                } = _0x4d692b);
                if ($gameMap[_0x58a260(0x138)]() !== _0x5a7f72)
                    return;
                if (!_0x1afc92['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x49\x73\x52\x75\x6e\x6e\x69\x6e\x67']())
                    return;
                if (_0x1afc92[_0x58a260(0xde)]()) {
                    if (_0x58a260(0x11c) !== _0x58a260(0x142))
                        return;
                    else {
                        var _0x8e3b98, _0x137658, _0x551c8f;
                        _0x137658 = {
                            '\x63\x6f\x64\x65': 0x0,
                            '\x69\x6e\x64\x65\x6e\x74': 0x0,
                            '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73': []
                        }, _0x551c8f = {
                            '\x6c\x69\x73\x74': [
                                _0x389934,
                                _0x137658
                            ]
                        }, _0x8e3b98 = {
                            '\x6d\x61\x70\x49\x64': _0x384839[_0x58a260(0x138)](),
                            '\x65\x76\x65\x6e\x74\x49\x64': _0x42f801,
                            '\x65\x76\x65\x6e\x74': _0x551c8f,
                            '\x6f\x70\x74\x69\x6f\x6e\x73': _0x1a2f9f
                        }, _0x30ebd1[_0x58a260(0xff)](_0x387712[_0x58a260(0x116)](_0x58a260(0x112), _0x8e3b98));
                    }
                }
                if (_0x1afc92[_0x58a260(0x15a)]['\x65\x76\x65\x6e\x74\x49\x64']() !== _0x177bed)
                    return;
                return _0x1afc92[_0x58a260(0x15a)]['\x6e\x41\x6c\x6c\x6f\x77\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']();
            } catch (_0x39fb92) {
                if (_0x58a260(0x155) !== _0x58a260(0x155))
                    _0x192bdc = _0x4cd315[_0x58a260(0x101)]['\x65\x76\x65\x6e\x74\x49\x64'](), this[_0x58a260(0x15c)](_0xfeaadd);
                else
                    return _0x10d0a8 = _0x39fb92, ANET['\x77'](_0x10d0a8);
            }
        }
    }, _0x1afc92[_0x555067(0x13d)] = function (_0x25d39f) {
        var _0x5ee472 = _0x555067, _0x1530f8, _0x271d80, _0x401729;
        try {
            ({
                mapId: _0x401729,
                eventId: _0x271d80
            } = _0x25d39f);
            if ($gameMap[_0x5ee472(0x138)]() !== _0x401729)
                return;
            if (_0x1afc92[_0x5ee472(0xde)]()) {
                if (_0x5ee472(0x117) !== _0x5ee472(0x117)) {
                    var _0x21f46a;
                    if (!this[_0x5ee472(0xde)]())
                        return;
                    _0x21f46a = {
                        '\x6d\x61\x70\x49\x64': _0x189a3e[_0x5ee472(0x138)](),
                        '\x65\x76\x65\x6e\x74\x49\x64': this[_0x5ee472(0x15a)][_0x5ee472(0xfc)](),
                        '\x69\x6e\x64\x65\x78': this[_0x5ee472(0x15a)]['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61']['\x69\x6e\x64\x65\x78'],
                        '\x69\x6e\x64\x65\x6e\x74': this[_0x5ee472(0x15a)][_0x5ee472(0x13e)]['\x69\x6e\x64\x65\x6e\x74']
                    }, _0x3dcf40[_0x5ee472(0xff)](_0x2d0aca[_0x5ee472(0x116)](_0x5ee472(0x13b), _0x21f46a));
                } else
                    return;
            }
            if (_0x1afc92[_0x5ee472(0x10b)]()) {
                if (_0x1afc92[_0x5ee472(0x15a)][_0x5ee472(0xfc)]() !== _0x271d80)
                    return;
                return $gameTemp['\x5f\x73\x68\x6f\x75\x6c\x64\x46\x6f\x72\x63\x65\x45\x78\x69\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = !![];
            } else {
                if ($gameTemp[_0x5ee472(0x12e)]()) {
                    if (_0x271d80 === $gameTemp['\x5f\x72\x65\x73\x65\x72\x76\x65\x64\x4e\x65\x74\x77\x6f\x72\x6b\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']) {
                        if ('\x6d\x50\x56\x46\x76' !== _0x5ee472(0x14d))
                            $gameTemp[_0x5ee472(0x11f)]();
                        else
                            return;
                    }
                }
            }
        } catch (_0x39f433) {
            if (_0x5ee472(0x125) === _0x5ee472(0x14c))
                return;
            else
                return _0x1530f8 = _0x39f433, ANET['\x77'](_0x1530f8);
        }
    }, _0x1afc92['\x6f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x68\x6f\x69\x63\x65\x41\x63\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72'] = function (_0x48bf9f) {
        var _0x3ec09d = _0x555067;
        if ('\x5a\x46\x4c\x6c\x78' !== _0x3ec09d(0xe4)) {
            var _0x3c0ac2;
            if (this[_0x3ec09d(0xde)]())
                return;
            _0x3c0ac2 = {
                '\x6d\x61\x70\x49\x64': _0x1ca6dd[_0x3ec09d(0x138)](),
                '\x65\x76\x65\x6e\x74\x49\x64': this[_0x3ec09d(0x15a)][_0x3ec09d(0xfc)](),
                '\x61\x63\x74\x6f\x72\x49\x64': _0x4210dc['\x6d\x79\x41\x63\x74\x6f\x72\x49\x64'](),
                '\x69\x6e\x64\x65\x78': this[_0x3ec09d(0x15a)][_0x3ec09d(0x13e)]['\x69\x6e\x64\x65\x78'],
                '\x69\x6e\x64\x65\x6e\x74': this[_0x3ec09d(0x15a)]['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61']['\x69\x6e\x64\x65\x6e\x74']
            }, _0x5f3077['\x73\x65\x6e\x64'](_0x407e6a['\x45\x76\x65\x6e\x74'](_0x3ec09d(0x12a), _0x3c0ac2));
        } else {
            var _0x1e9b8a, _0x1e63d5, _0x23b5a7, _0x34dea4, _0x5c3451;
            try {
                ({
                    mapId: _0x5c3451,
                    eventId: _0x23b5a7,
                    action: _0x1e9b8a,
                    index: _0x34dea4
                } = _0x48bf9f);
                if ($gameMap[_0x3ec09d(0x138)]() !== _0x5c3451)
                    return;
                if (!_0x1afc92['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x49\x73\x52\x75\x6e\x6e\x69\x6e\x67']()) {
                    if ('\x4b\x65\x58\x6b\x43' === _0x3ec09d(0xdb))
                        return;
                    else
                        return this[_0x3ec09d(0x15a)] != null && _0x3184c7[_0x3ec09d(0xf2)]();
                }
                if (_0x1afc92[_0x3ec09d(0x15a)][_0x3ec09d(0xfc)]() !== _0x23b5a7)
                    return;
                return $gameTemp[_0x3ec09d(0x12b)] = {
                    '\x61\x63\x74\x69\x6f\x6e': _0x1e9b8a,
                    '\x69\x6e\x64\x65\x78': _0x34dea4
                }, _0x2f172b['\x70'](_0x3ec09d(0x139));
            } catch (_0x5ed2b6) {
                return _0x1e63d5 = _0x5ed2b6, ANET['\x77'](_0x1e63d5);
            }
        }
    };
}()));

// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку игровых карт

//@[GLOBAL]
window.ANMapManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetMap");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = window.ANMapManager;
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendMapLoaded = function() {
    return ANNetwork.send(NMS.Map("loaded", $gameMap.mapId()));
  };
  _.sendInitialMapData = function() {
    // * Отправляем принудительно свои данные всем игрокам на карте
    ANSyncDataManager.sendPlayerObserver();
    ANPlayersManager.sendPlayerLocation();
    if (ANGameManager.isMapMaster()) {
      this.sendMapEventsInitialPositions();
    }
  };
  _.sendEventMove = function(eventId) {
    var data, e, event;
    try {
      event = $gameMap.event(eventId);
      if (event == null) {
        return;
      }
      data = {
        id: eventId,
        mapId: $gameMap.mapId(),
        data: event.getMoveDataForNetwork()
      };
      ANNetwork.send(NMS.Map("eventMove", data), true);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данную команду выполняет только мастер карты, когда кто-то подключается к карте
  _.sendMapEventsInitialPositions = function() {
    var ev, eventId, i, len, ref;
    ref = $gameMap.events();
    for (i = 0, len = ref.length; i < len; i++) {
      ev = ref[i];
      if (ev == null) {
        continue;
      }
      eventId = ev.eventId();
      setTimeout((function() {
        return ANMapManager.sendEventMove(eventId);
      }), 50); //TODO: Надо ли эту задержку?
    }
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.onEventMove = function(mapId, eventId, moveData) {
    var e, event;
    try {
      if ($gameMap.mapId() !== mapId) {
        return;
      }
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      event = $gameMap.event(eventId);
      if (event != null) {
        event.moveStraightFromServer(moveData);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onInitialMapSync = function() {
    var e;
    try {
      this.sendInitialMapData();
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
// * Данный класс отвечает за синхронизацию и обработку данных игроков и их персонажей

//@[GLOBAL]
var ANPlayersManager;

ANPlayersManager = function() {};

(function() {
  var LOG, _;
  //@[LOG]
  LOG = new KDCore.DevLog("NetPlayer");
  LOG.setColors(KDCore.Color.AQUA, KDCore.Color.BLACK.getLightestColor(35));
  LOG.on();
  //@[DEFINES]
  _ = ANPlayersManager;
  //? КОМАНДЫ ЗАПРОСЫ (посылаются на сервер)
  // * ===============================================================
  _.sendBindActorFromGame = function(actorId) {
    return ANNetwork.callback(NMS.Game("bindActor", actorId), this.bindActorResult.bind(this));
  };
  _.sendBindActorFromLobby = function(actorId, callback) {
    return ANNetwork.callback(NMS.Game("bindActor", actorId), callback);
  };
  _.sendPlayerName = function() {
    return ANNetwork.send(NMS.Lobby("setPlayerName", ANGameManager.myPlayerData().name));
  };
  _.sendPlayerInRoomReady = function(isReady) {
    return ANNetwork.send(NMS.Lobby("playerReady", isReady));
  };
  _.sendActorReady = function() {
    var actorData;
    actorData = $gameActors.actor(ANGameManager.myPlayerData().actorId);
    ANNetwork.send(NMS.Game("actorReady", actorData));
    return ANGameManager.setWait('playersActors');
  };
  _.sendPlayerMove = function() {
    var data;
    data = {
      id: ANNetwork.myId(),
      data: $gamePlayer.getMoveDataForNetwork()
    };
    return ANNetwork.send(NMS.Map("playerMove", data), true);
  };
  _.sendPlayerLocation = function() {
    var data;
    data = {
      id: ANNetwork.myId(),
      data: [$gamePlayer.x, $gamePlayer.y]
    };
    return ANNetwork.send(NMS.Map("playerLocation", data));
  };
  _.sendNameplatesStyles = function() {
    var data;
    data = $gameSystem.nActorsNameplatesStyles || {};
    ANNetwork.send(NMS.Common("custom_nameplates", data));
  };
  //? CALLBACKS ОТ ЗАПРОСОВ НА СЕРВЕР
  // * ===============================================================
  _.bindActorResult = function(result) {
    //TODO: Если true - зарезервировали,  дальше либо кастомизация, либо отправка
    // клиент готов начинать игру (и ожидание игроков включается)
    // false - значит данный персонаж занят, надо обрабатыватЬ!
    if (result === true) {
      "BINDING GOOD, send ActorReady".p();
      //TODO: Сейчас без кастомизации
      this.sendActorReady();
    }
  };
  _.onPlayerMove = function(id, moveData) {
    var char, e;
    try {
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      char = $gameMap.networkCharacterById(id);
      if (char != null) {
        char.moveStraightFromServer(moveData);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onPlayerLocation = function(id, positionData) {
    var char, e;
    try {
      char = $gameMap.networkCharacterById(id);
      if (char != null) {
        char.setPosition(positionData[0], positionData[1]);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.onPlayersNameplatesStyles = function(styles) {
    var e;
    try {
      $gameSystem.nActorsNameplatesStyles = styles;
      // * Обновляем таблички
      return KDCore.GEventsManager.call("netzRefreshNameplate");
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();


var _0x3d67cd = _0x4d10;
function _0x1456() {
    var _0x46fed9 = [
        '\x4c\x68\x61\x52\x6b',
        '\x71\x65\x4f\x6f\x44',
        '\x6d\x61\x70\x49\x64',
        '\x67\x65\x74\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x32\x35\x37\x38\x33\x34\x38\x42\x4f\x73\x55\x56\x58',
        '\x37\x78\x61\x4c\x6a\x73\x6e',
        '\x70\x61\x56\x53\x6c',
        '\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x4b\x6d\x50\x50\x6b',
        '\x45\x54\x79\x67\x76',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x6f\x6e\x53\x77\x69\x74\x63\x68\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x5f\x64\x61\x74\x61\x43\x6c\x61\x73\x73',
        '\x6f\x6e\x53\x77\x69\x74\x63\x68\x56\x61\x6c\x75\x65',
        '\x31\x36\x32\x39\x35\x39\x30\x6f\x43\x42\x75\x44\x76',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x35\x38\x34\x33\x31\x34\x58\x67\x76\x41\x41\x41',
        '\x76\x6e\x6b\x46\x7a',
        '\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x56\x61\x6c\x75\x65',
        '\x66\x78\x76\x51\x78',
        '\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x62\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74',
        '\x6d\x79\x49\x64',
        '\x53\x45\x4e\x44\x20\x42\x41\x54\x54\x4c\x45\x52\x20\x52\x45\x53\x55\x4c\x54',
        '\x70\x61\x63\x6b\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x65\x4d\x47\x4b\x7a',
        '\x58\x51\x6c\x70\x4e',
        '\x73\x65\x6e\x64\x50\x6c\x61\x79\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x65\x76\x65\x6e\x74\x43\x68\x61\x72',
        '\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65',
        '\x73\x65\x6e\x64\x41\x63\x74\x6f\x72\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x73\x65\x6e\x64\x53\x79\x6e\x63\x47\x6c\x6f\x62\x61\x6c\x56\x61\x72\x69\x61\x62\x6c\x65\x73',
        '\x73\x65\x6e\x64\x47\x6c\x6f\x62\x61\x6c\x56\x61\x72\x69\x61\x62\x6c\x65\x43\x68\x61\x6e\x67\x65',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x59\x6b\x66\x52\x67',
        '\x5f\x6f\x6e\x50\x6c\x61\x79\x65\x72\x41\x63\x74\x6f\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x34\x35\x31\x31\x32\x37\x34\x52\x69\x61\x65\x45\x52',
        '\x43\x6f\x6c\x6f\x72',
        '\x65\x52\x61\x43\x75',
        '\x4a\x6a\x76\x74\x56',
        '\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x55\x6e\x69\x74\x73\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x73\x65\x6e\x64\x47\x6c\x6f\x62\x61\x6c\x53\x77\x69\x74\x63\x68\x43\x68\x61\x6e\x67\x65',
        '\x67\x65\x74\x41\x63\x74\x6f\x72\x46\x6f\x72\x50\x6c\x61\x79\x65\x72',
        '\x4b\x6c\x44\x4d\x67',
        '\x41\x4e\x53\x79\x6e\x63\x44\x61\x74\x61\x4d\x61\x6e\x61\x67\x65\x72',
        '\x31\x35\x38\x36\x32\x32\x75\x4c\x66\x7a\x50\x6c',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64',
        '\x6d\x61\x70',
        '\x46\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72\x3a\x20\x75\x6e\x6b\x6e\x6f\x77\x6e\x20\x6f\x62\x73\x65\x72\x76\x65\x72\x20\x64\x61\x74\x61\x20\x74\x79\x70\x65\x3a\x20',
        '\x5f\x72\x65\x71\x75\x65\x73\x74\x49\x6e\x69\x74\x69\x61\x6c\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x52\x65\x66\x72\x65\x73\x68',
        '\x70\x6c\x61\x79\x65\x72\x41\x63\x74\x6f\x72',
        '\x73\x65\x6e\x64',
        '\x31\x34\x30\x39\x36\x33\x31\x42\x4e\x77\x77\x6e\x69',
        '\x4c\x46\x69\x69\x4c',
        '\x78\x49\x65\x6b\x51',
        '\x53\x45\x4e\x44\x20\x42\x41\x54\x54\x4c\x45\x52\x20\x4f\x42\x53\x45\x52\x56\x45\x52',
        '\x78\x52\x74\x68\x56',
        '\x47\x61\x6d\x65',
        '\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x5f\x65\x71\x75\x69\x70\x73',
        '\x72\x65\x73\x75\x6c\x74',
        '\x73\x77\x69\x74\x63\x68',
        '\x41\x51\x55\x41',
        '\x5f\x63\x6f\x6e\x76\x65\x72\x74\x41\x63\x74\x6f\x72\x45\x71\x75\x69\x70\x6d\x65\x6e\x73',
        '\x70\x6c\x61\x79\x65\x72\x43\x68\x61\x72',
        '\x62\x61\x74\x74\x6c\x65\x55\x6e\x69\x74\x73',
        '\x62\x61\x74\x74\x6c\x65\x72',
        '\x35\x33\x34\x32\x30\x34\x30\x4f\x5a\x46\x57\x43\x7a',
        '\x5a\x62\x67\x61\x55',
        '\x61\x50\x56\x59\x6d',
        '\x51\x4f\x5a\x65\x4a',
        '\x55\x74\x69\x6c\x73',
        '\x6e\x72\x4b\x43\x70',
        '\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72',
        '\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x71\x67\x66\x61\x79',
        '\x53\x4e\x6c\x6c\x48',
        '\x76\x72\x50\x77\x4d',
        '\x62\x57\x6d\x50\x75',
        '\x69\x6e\x42\x61\x74\x74\x6c\x65',
        '\x5f\x6f\x6e\x50\x6c\x61\x79\x65\x72\x43\x68\x61\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x5f\x6e\x4e\x65\x74\x77\x6f\x72\x6b\x41\x63\x74\x6f\x72\x50\x69\x63\x6b\x52\x65\x71\x75\x65\x73\x74',
        '\x6e\x52\x65\x66\x72\x65\x73\x68\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x74\x65',
        '\x6f\x6e\x56\x61\x72\x69\x61\x62\x6c\x65\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x6b\x57\x4f\x55\x59',
        '\x65\x76\x65\x6e\x74',
        '\x5f\x69\x74\x65\x6d\x49\x64',
        '\x5f\x73\x65\x6e\x64\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x5f\x6f\x6e\x45\x76\x65\x6e\x74\x43\x68\x61\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x6e\x65\x74\x77\x6f\x72\x6b\x43\x68\x61\x72\x61\x63\x74\x65\x72\x42\x79\x49\x64',
        '\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61',
        '\x69\x73\x4f\x6e\x65\x42\x61\x74\x74\x6c\x65\x72',
        '\x57\x68\x43\x53\x41',
        '\x6f\x52\x71\x63\x55'
    ];
    _0x1456 = function () {
        return _0x46fed9;
    };
    return _0x1456();
}
function _0x4d10(_0x42e954, _0x258034) {
    var _0x1456e4 = _0x1456();
    return _0x4d10 = function (_0x4d1022, _0x2fa4c3) {
        _0x4d1022 = _0x4d1022 - 0x107;
        var _0x374df4 = _0x1456e4[_0x4d1022];
        return _0x374df4;
    }, _0x4d10(_0x42e954, _0x258034);
}
(function (_0xcdec40, _0x16a0d5) {
    var _0x580370 = _0x4d10, _0x135697 = _0xcdec40();
    while (!![]) {
        try {
            var _0x2a078c = parseInt(_0x580370(0x14e)) / 0x1 + -parseInt(_0x580370(0x10c)) / 0x2 + -parseInt(_0x580370(0x113)) / 0x3 + -parseInt(_0x580370(0x141)) / 0x4 + -parseInt(_0x580370(0x14c)) / 0x5 + -parseInt(_0x580370(0x162)) / 0x6 * (-parseInt(_0x580370(0x142)) / 0x7) + parseInt(_0x580370(0x122)) / 0x8;
            if (_0x2a078c === _0x16a0d5)
                break;
            else
                _0x135697['push'](_0x135697['shift']());
        } catch (_0x285c93) {
            _0x135697['push'](_0x135697['shift']());
        }
    }
}(_0x1456, 0x7639f), window[_0x3d67cd(0x10b)] = function () {
}, (function () {
    var _0x47742d = _0x3d67cd, _0x276db8, _0x609d46;
    _0x276db8 = new KDCore[(_0x47742d(0x14d))]('\x44\x61\x74\x61\x53\x79\x6e\x63'), _0x276db8[_0x47742d(0x148)](KDCore['\x43\x6f\x6c\x6f\x72'][_0x47742d(0x11d)], KDCore[_0x47742d(0x163)]['\x42\x4c\x41\x43\x4b']['\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72'](0x23)), _0x276db8['\x6f\x6e'](), _0x609d46 = window[_0x47742d(0x10b)], _0x609d46[_0x47742d(0x159)] = function () {
        var _0x21de7f = _0x47742d;
        if (_0x21de7f(0x12b) === _0x21de7f(0x10a))
            _0x1d51d0 = _0x343948, _0x538717['\x77'](_0x56e0f0);
        else
            return this[_0x21de7f(0x136)](_0x21de7f(0x11f), ANNetwork[_0x21de7f(0x154)](), $gamePlayer[_0x21de7f(0x140)]());
    }, _0x609d46['\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x4f\x62\x73\x65\x72\x76\x65\x72'] = function (_0x22b613) {
        var _0x345763 = _0x47742d;
        this[_0x345763(0x136)](_0x345763(0x15a), {
            '\x6d\x61\x70\x49\x64': $gameMap['\x6d\x61\x70\x49\x64'](),
            '\x65\x76\x65\x6e\x74\x49\x64': _0x22b613
        }, $gameMap[_0x345763(0x134)](_0x22b613)['\x67\x65\x74\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b']());
    }, _0x609d46[_0x47742d(0x15c)] = function () {
        var _0x3fef04 = _0x47742d;
        return this[_0x3fef04(0x136)](_0x3fef04(0x111), ANNetwork[_0x3fef04(0x154)](), $gameParty['\x6c\x65\x61\x64\x65\x72']()[_0x3fef04(0x140)]());
    }, _0x609d46['\x73\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x55\x6e\x69\x74\x73\x4f\x62\x73\x65\x72\x76\x65\x72'] = function (_0x45fb1e) {
        var _0x3b33bf = _0x47742d;
        if (_0x3b33bf(0x146) === _0x3b33bf(0x13c))
            return;
        else {
            var _0x3ee1c5;
            if ($gameParty[_0x3b33bf(0x13a)]())
                return;
            _0x3ee1c5 = _0x45fb1e[_0x3b33bf(0x10e)](function (_0x24d941) {
                var _0x348b95 = _0x3b33bf;
                if ('\x71\x65\x4f\x6f\x44' !== _0x348b95(0x13e)) {
                    _0x5a915b[_0x348b95(0x15b)] === !![] && (_0x76c9de[_0x348b95(0x130)] = !![]);
                    _0x44b5fc = _0x37e478[_0x348b95(0x10d)](_0x4244bf), _0x3aca44 = _0x559338[_0x348b95(0x109)](_0x545102), _0x505408[_0x348b95(0x130)] = ![];
                    if (_0x5f44a0 == null)
                        return;
                    this[_0x348b95(0x11e)](_0xaec2c), _0x4e6466['\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x3befb6);
                } else
                    return [
                        _0x24d941['\x70\x61\x63\x6b\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b'](),
                        _0x24d941[_0x348b95(0x140)]()
                    ];
            }), this[_0x3b33bf(0x136)](_0x3b33bf(0x120), null, _0x3ee1c5);
        }
    }, _0x609d46[_0x47742d(0x128)] = function (_0x15c46e) {
        var _0x2443d2 = _0x47742d;
        return _0x2443d2(0x116)['\x70'](), this[_0x2443d2(0x136)](_0x2443d2(0x121), _0x15c46e['\x70\x61\x63\x6b\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b'](), _0x15c46e[_0x2443d2(0x140)]());
    }, _0x609d46[_0x47742d(0x147)] = function (_0x112c92) {
        var _0x162afa = _0x47742d;
        '\x53\x45\x4e\x44\x20\x42\x41\x54\x54\x4c\x45\x52\x20\x52\x45\x53\x55\x4c\x54'['\x70']();
        if ($gameParty[_0x162afa(0x13a)]())
            return;
        return this[_0x162afa(0x136)](_0x162afa(0x153), _0x112c92[_0x162afa(0x156)](), _0x112c92[_0x162afa(0x11b)]()[_0x162afa(0x140)]());
    }, _0x609d46[_0x47742d(0x136)] = function (_0x120fe3, _0x33a16f, _0x41da8e) {
        var _0x1fa824 = _0x47742d, _0xeb93b4;
        _0xeb93b4 = {
            '\x74\x79\x70\x65': _0x120fe3,
            '\x69\x64': _0x33a16f,
            '\x64\x61\x74\x61': _0x41da8e
        }, ANNetwork[_0x1fa824(0x112)](NMS[_0x1fa824(0x118)]('\x6f\x62\x73\x65\x72\x76\x65\x72', _0xeb93b4), !![]);
    }, _0x609d46[_0x47742d(0x15e)] = function (_0x509eec, _0x2b10cc) {
        var _0x535e49;
        _0x535e49 = {
            '\x69\x64': _0x509eec,
            '\x64\x61\x74\x61': _0x2b10cc
        }, ANNetwork['\x73\x65\x6e\x64'](NMS['\x47\x61\x6d\x65']('\x76\x61\x72\x69\x61\x62\x6c\x65', _0x535e49));
    }, _0x609d46[_0x47742d(0x108)] = function (_0x13f2a3, _0x3fa922) {
        var _0x372e94 = _0x47742d;
        if (_0x372e94(0x14f) !== _0x372e94(0x143)) {
            var _0x3a30a3;
            _0x3a30a3 = {
                '\x69\x64': _0x13f2a3,
                '\x64\x61\x74\x61': _0x3fa922
            }, ANNetwork[_0x372e94(0x112)](NMS[_0x372e94(0x118)](_0x372e94(0x11c), _0x3a30a3));
        } else
            _0x5d26b3[_0x372e94(0x119)](_0x3c1ac2);
    }, _0x609d46[_0x47742d(0x15d)] = function () {
    }, _0x609d46[_0x47742d(0x129)] = function (_0x4fa41a, _0x27c10c, _0x449032) {
        var _0xd7f753 = _0x47742d;
        switch (_0x27c10c) {
        case '\x70\x6c\x61\x79\x65\x72\x43\x68\x61\x72':
            return this[_0xd7f753(0x12f)](_0x4fa41a, _0x449032);
        case _0xd7f753(0x15a):
            return this[_0xd7f753(0x137)](_0x4fa41a, _0x449032);
        case _0xd7f753(0x111):
            return this['\x5f\x6f\x6e\x50\x6c\x61\x79\x65\x72\x41\x63\x74\x6f\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x4fa41a, _0x449032);
        case _0xd7f753(0x121):
            return this[_0xd7f753(0x139)](_0x4fa41a, _0x449032);
        case _0xd7f753(0x153):
            return this[_0xd7f753(0x144)](_0x4fa41a, _0x449032);
        case '\x62\x61\x74\x74\x6c\x65\x55\x6e\x69\x74\x73':
            return this[_0xd7f753(0x107)](_0x449032);
        default:
            _0x276db8['\x70'](_0xd7f753(0x10f) + _0x27c10c);
        }
    }, _0x609d46[_0x47742d(0x12f)] = function (_0xab1198, _0x16bc37) {
        var _0x42084a = _0x47742d, _0x5305e0, _0x2ee24c;
        try {
            _0x5305e0 = $gameMap[_0x42084a(0x138)](_0xab1198), _0x5305e0 != null && ('\x4b\x58\x4e\x6f\x41' !== '\x4b\x58\x4e\x6f\x41' ? (_0x57f9cf = _0x1640eb, _0x1f41d2['\x77'](_0x491cd8)) : _0x5305e0[_0x42084a(0x119)](_0x16bc37));
        } catch (_0x35f8f4) {
            if (_0x42084a(0x164) === _0x42084a(0x164))
                _0x2ee24c = _0x35f8f4, ANET['\x77'](_0x2ee24c);
            else {
                var _0x437a4e;
                _0x437a4e = {
                    '\x69\x64': _0x51ad34,
                    '\x64\x61\x74\x61': _0x22b10a
                }, _0x108f44[_0x42084a(0x112)](_0x3f9601[_0x42084a(0x118)]('\x76\x61\x72\x69\x61\x62\x6c\x65', _0x437a4e));
            }
        }
    }, _0x609d46['\x5f\x6f\x6e\x45\x76\x65\x6e\x74\x43\x68\x61\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'] = function (_0x56cb67, _0x342cca) {
        var _0x196a17 = _0x47742d;
        if (_0x196a17(0x145) !== '\x63\x4a\x7a\x4e\x49') {
            var _0x484a0e, _0x34df32, _0x318189, _0x4def39;
            try {
                if ('\x4c\x68\x61\x52\x6b' !== _0x196a17(0x13d))
                    _0x5e21d2[_0x196a17(0x130)] = !![];
                else {
                    ({
                        mapId: _0x4def39,
                        eventId: _0x318189
                    } = _0x56cb67);
                    if ($gameMap[_0x196a17(0x13f)]() !== _0x4def39)
                        return;
                    _0x34df32 = $gameMap[_0x196a17(0x134)](_0x318189);
                    if (_0x34df32 != null) {
                        if (_0x196a17(0x115) === '\x6c\x7a\x4c\x69\x68') {
                            var _0x1ea9ac, _0x17f427, _0x4f71cb, _0x2822f9;
                            if (_0x50a595[_0x196a17(0x11a)] == null)
                                return;
                            for (_0x1ea9ac = _0x4f71cb = 0x0, _0x2822f9 = _0x407a63['\x5f\x65\x71\x75\x69\x70\x73']['\x6c\x65\x6e\x67\x74\x68']; 0x0 <= _0x2822f9 ? _0x4f71cb < _0x2822f9 : _0x4f71cb > _0x2822f9; _0x1ea9ac = 0x0 <= _0x2822f9 ? ++_0x4f71cb : --_0x4f71cb) {
                                _0x17f427 = _0x53ea96[_0x196a17(0x11a)][_0x1ea9ac], _0x2011a7[_0x196a17(0x11a)][_0x1ea9ac] = new _0x11d1ea(), _0x265770['\x5f\x65\x71\x75\x69\x70\x73'][_0x1ea9ac][_0x196a17(0x14a)] = _0x17f427['\x5f\x64\x61\x74\x61\x43\x6c\x61\x73\x73'], _0x350715[_0x196a17(0x11a)][_0x1ea9ac][_0x196a17(0x135)] = _0x17f427['\x5f\x69\x74\x65\x6d\x49\x64'];
                            }
                        } else
                            _0x34df32['\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x342cca);
                    }
                }
            } catch (_0x4f60f0) {
                _0x484a0e = _0x4f60f0, ANET['\x77'](_0x484a0e);
            }
        } else
            return;
    }, _0x609d46[_0x47742d(0x161)] = function (_0x4d11d3, _0x203504) {
        var _0x2bfbf7 = _0x47742d, _0x1bd44d, _0x7df1cc, _0x6c6e3e;
        try {
            if ($gameTemp[_0x2bfbf7(0x15b)] === !![]) {
                if (_0x2bfbf7(0x12a) !== _0x2bfbf7(0x12a))
                    return '\x53\x45\x4e\x44\x20\x42\x41\x54\x54\x4c\x45\x52\x20\x4f\x42\x53\x45\x52\x56\x45\x52'['\x70'](), this[_0x2bfbf7(0x136)]('\x62\x61\x74\x74\x6c\x65\x72', _0x4f87ab[_0x2bfbf7(0x156)](), _0x567506[_0x2bfbf7(0x140)]());
                else
                    $gameTemp[_0x2bfbf7(0x130)] = !![];
            }
            _0x6c6e3e = ANGameManager[_0x2bfbf7(0x10d)](_0x4d11d3), _0x1bd44d = NetPlayerDataWrapper['\x67\x65\x74\x41\x63\x74\x6f\x72\x46\x6f\x72\x50\x6c\x61\x79\x65\x72'](_0x6c6e3e), $gameTemp[_0x2bfbf7(0x130)] = ![];
            if (_0x1bd44d == null)
                return;
            this['\x5f\x63\x6f\x6e\x76\x65\x72\x74\x41\x63\x74\x6f\x72\x45\x71\x75\x69\x70\x6d\x65\x6e\x73'](_0x203504), _0x1bd44d[_0x2bfbf7(0x119)](_0x203504);
        } catch (_0x4783c1) {
            _0x7df1cc = _0x4783c1, ANET['\x77'](_0x7df1cc);
        }
    }, _0x609d46['\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x72\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'] = function (_0x6a14ef, _0x2bcf94) {
        var _0x3866b6 = _0x47742d;
        if (_0x3866b6(0x127) === _0x3866b6(0x151)) {
            var _0xa22a92;
            try {
                _0x2cd29e[_0x3866b6(0x132)](_0x3ce24c, _0x49b308);
            } catch (_0x3f1aee) {
                _0xa22a92 = _0x3f1aee, _0x361c12['\x77'](_0xa22a92);
            }
        } else {
            var _0x1ff86c, _0x90b25b;
            try {
                if (!$gameParty[_0x3866b6(0x12e)]()) {
                    if ('\x6e\x77\x6d\x7a\x50' !== _0x3866b6(0x123))
                        return;
                    else
                        _0x4b367b = _0x9d8715, _0x71b69c['\x77'](_0x1e2016);
                }
                _0x1ff86c = ANET[_0x3866b6(0x126)][_0x3866b6(0x152)](_0x6a14ef);
                if (_0x1ff86c == null)
                    return;
                this[_0x3866b6(0x11e)](_0x2bcf94), _0x1ff86c[_0x3866b6(0x119)](_0x2bcf94);
            } catch (_0x459509) {
                if ('\x76\x46\x71\x73\x63' === _0x3866b6(0x157))
                    return;
                else
                    _0x90b25b = _0x459509, ANET['\x77'](_0x90b25b);
            }
        }
    }, _0x609d46[_0x47742d(0x11e)] = function (_0x15cffd) {
        var _0x2a0b56 = _0x47742d;
        if (_0x2a0b56(0x124) === _0x2a0b56(0x165))
            return;
        else {
            var _0x2281dd, _0x495e2f, _0x12ca66, _0x6bcab3;
            if (_0x15cffd[_0x2a0b56(0x11a)] == null)
                return;
            for (_0x2281dd = _0x12ca66 = 0x0, _0x6bcab3 = _0x15cffd[_0x2a0b56(0x11a)][_0x2a0b56(0x15f)]; 0x0 <= _0x6bcab3 ? _0x12ca66 < _0x6bcab3 : _0x12ca66 > _0x6bcab3; _0x2281dd = 0x0 <= _0x6bcab3 ? ++_0x12ca66 : --_0x12ca66) {
                if ('\x6f\x77\x55\x6d\x68' === '\x6f\x77\x55\x6d\x68')
                    _0x495e2f = _0x15cffd['\x5f\x65\x71\x75\x69\x70\x73'][_0x2281dd], _0x15cffd['\x5f\x65\x71\x75\x69\x70\x73'][_0x2281dd] = new Game_Item(), _0x15cffd[_0x2a0b56(0x11a)][_0x2281dd][_0x2a0b56(0x14a)] = _0x495e2f[_0x2a0b56(0x14a)], _0x15cffd['\x5f\x65\x71\x75\x69\x70\x73'][_0x2281dd][_0x2a0b56(0x135)] = _0x495e2f[_0x2a0b56(0x135)];
                else
                    return;
            }
        }
    }, _0x609d46[_0x47742d(0x144)] = function (_0x1c4632, _0x5ad7f7) {
        var _0x39982f = _0x47742d, _0x34fc59, _0x514bf8, _0x3a9b63;
        try {
            if (!$gameParty[_0x39982f(0x12e)]()) {
                if (_0x39982f(0x160) === _0x39982f(0x12c)) {
                    _0x39982f(0x155)['\x70']();
                    if (_0x149974['\x69\x73\x4f\x6e\x65\x42\x61\x74\x74\x6c\x65\x72']())
                        return;
                    return this[_0x39982f(0x136)]('\x62\x61\x74\x74\x6c\x65\x72\x52\x65\x73\x75\x6c\x74', _0x117f62[_0x39982f(0x156)](), _0x2e63bd[_0x39982f(0x11b)]()[_0x39982f(0x140)]());
                } else
                    return;
            }
            _0x34fc59 = ANET[_0x39982f(0x126)]['\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b'](_0x1c4632);
            if (_0x34fc59 == null)
                return;
            (_0x3a9b63 = _0x34fc59[_0x39982f(0x11b)]()) != null && _0x3a9b63[_0x39982f(0x119)](_0x5ad7f7);
        } catch (_0x28e362) {
            _0x514bf8 = _0x28e362, ANET['\x77'](_0x514bf8);
        }
    }, _0x609d46[_0x47742d(0x107)] = function (_0xb52128) {
        var _0x4e95bf = _0x47742d, _0x16b5f0, _0x8555d2, _0x589b9a, _0x46b960, _0x39cc3f;
        try {
            if (_0x4e95bf(0x125) === _0x4e95bf(0x125)) {
                if (!$gameParty['\x69\x6e\x42\x61\x74\x74\x6c\x65']()) {
                    if ('\x62\x57\x6d\x50\x75' !== _0x4e95bf(0x12d))
                        _0x456959 = _0x4afc36[_0x42dfa5], _0x569532 = _0x1fe629[_0x4e95bf(0x126)][_0x4e95bf(0x152)](_0x3ca473[0x0]), _0x18deb4 != null && (this[_0x4e95bf(0x11e)](_0x5edeac[0x1]), _0x2e3b25[_0x4e95bf(0x119)](_0x27d474[0x1]));
                    else
                        return;
                }
                for (_0x589b9a = 0x0, _0x46b960 = _0xb52128[_0x4e95bf(0x15f)]; _0x589b9a < _0x46b960; _0x589b9a++) {
                    _0x39cc3f = _0xb52128[_0x589b9a], _0x16b5f0 = ANET[_0x4e95bf(0x126)]['\x75\x6e\x70\x61\x63\x6b\x42\x61\x74\x74\x6c\x65\x72\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b'](_0x39cc3f[0x0]), _0x16b5f0 != null && (_0x4e95bf(0x13b) === '\x57\x68\x43\x53\x41' ? (this['\x5f\x63\x6f\x6e\x76\x65\x72\x74\x41\x63\x74\x6f\x72\x45\x71\x75\x69\x70\x6d\x65\x6e\x73'](_0x39cc3f[0x1]), _0x16b5f0['\x61\x70\x70\x6c\x79\x4f\x62\x73\x65\x72\x76\x65\x72\x44\x61\x74\x61'](_0x39cc3f[0x1])) : (_0x58650b = _0x3c1797, _0x239b7e['\x77'](_0x2579d9)));
                }
                $gameTemp[_0x4e95bf(0x110)] === !![] && (BattleManager[_0x4e95bf(0x131)](), $gameTemp['\x5f\x72\x65\x71\x75\x65\x73\x74\x49\x6e\x69\x74\x69\x61\x6c\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65\x52\x65\x66\x72\x65\x73\x68'] = ![]);
            } else
                _0x158176[_0x4e95bf(0x149)](_0x2759d7, _0x390602);
        } catch (_0x430693) {
            if (_0x4e95bf(0x133) !== _0x4e95bf(0x117))
                _0x8555d2 = _0x430693, ANET['\x77'](_0x8555d2);
            else
                return this[_0x4e95bf(0x136)](_0x4e95bf(0x11f), _0x5ada75[_0x4e95bf(0x154)](), _0x2aec28[_0x4e95bf(0x140)]());
        }
    }, _0x609d46[_0x47742d(0x150)] = function (_0x581839, _0x5d942c) {
        var _0x5867f9 = _0x47742d, _0x3e31bf;
        try {
            $gameVariables[_0x5867f9(0x132)](_0x581839, _0x5d942c);
        } catch (_0x41bf3f) {
            _0x3e31bf = _0x41bf3f, ANET['\x77'](_0x3e31bf);
        }
    }, _0x609d46[_0x47742d(0x14b)] = function (_0x1b6f4a, _0x2d343a) {
        var _0x544df6 = _0x47742d;
        if (_0x544df6(0x114) !== _0x544df6(0x158)) {
            var _0x26e40b;
            try {
                $gameSwitches[_0x544df6(0x149)](_0x1b6f4a, _0x2d343a);
            } catch (_0x56a9ea) {
                _0x26e40b = _0x56a9ea, ANET['\x77'](_0x26e40b);
            }
        } else
            return;
    };
}()));

// Generated by CoffeeScript 2.6.1
//? Методы для улучшения совместимости с плагинами Yanfly и VisuMZ

//@[EXTENSION]
ANET.extend(function() {
  if (Imported.YEP_BattleEngineCore === true || Imported.VisuMZ_1_BattleCore === true) {
    // * Force передача Sprite_Battler:startMove
    console.log("Load extension: YEP_BattleEngineCore | VisuMZ_1_BattleCore");
    ANET.CFIX.on_startMove = function(data) {
      var battler, duration, e, sprite, x, y;
      try {
        if (!$gameParty.inBattle()) {
          return;
        }
        if (!KDCore.Utils.isSceneBattle()) {
          return;
        }
        battler = ANET.Utils.unpackBattlerFromNetwork(data.packed);
        sprite = ANET.Utils.getBattlerSprite(battler);
        if (sprite == null) {
          return;
        }
        ({x, y, duration} = data);
        return ANET.CFIX.callLocalOnly(function() {
          return sprite.startMove(x, y, duration);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    ANET.CFIX.on_startJump = function(data) {
      var a, b, battler, e, sprite;
      try {
        if (!$gameParty.inBattle()) {
          return;
        }
        if (!KDCore.Utils.isSceneBattle()) {
          return;
        }
        battler = ANET.Utils.unpackBattlerFromNetwork(data.packed);
        sprite = ANET.Utils.getBattlerSprite(battler);
        if (sprite == null) {
          return;
        }
        ({a, b} = data);
        return ANET.CFIX.callLocalOnly(function() {
          return sprite.startJump(a, b);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    return (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Sprite_Battler.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__startJump, ALIAS__startMove, _;
      //@[DEFINES]
      _ = Sprite_Battler.prototype;
      //@[ALIAS]
      ALIAS__startMove = _.startMove;
      _.startMove = function(x, y, duration) {
        var e, packed;
        ALIAS__startMove.call(this, x, y, duration);
        try {
          if (this._battler == null) {
            return;
          }
          if (!ANGameManager.isBattleMaster()) {
            return;
          }
          packed = ANET.Utils.packBattlerForNetwork(this._battler);
          return ANET.CFIX.send("startMove", {packed, x, y, duration});
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      };
      if (_.startJump != null) {
        ALIAS__startJump = _.startJump;
        _.startJump = function(a, b) {
          var e, packed;
          ALIAS__startJump.call(this, a, b);
          try {
            if (this._battler == null) {
              return;
            }
            if (!ANGameManager.isBattleMaster()) {
              return;
            }
            packed = ANET.Utils.packBattlerForNetwork(this._battler);
            return ANET.CFIX.send("startJump", {packed, a, b});
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }; // * Если определён метод startJump
      }
    })();
  }
});

// ■ END Sprite_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ANBattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onLogWindowMessage, _;
  
  // * Эти методы (переопределения) только для RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = ANBattleManager;
  // * В MV нету _currentActor и _inputting
  //$[OVER]
  _.updateInputChange = function() {
    if ($gameParty.isOneBattler()) {
      return;
    }
    if (this._lastBattleManagerInputActor !== BattleManager._actorIndex) {
      this._lastBattleManagerInputActor = BattleManager._actorIndex;
      this.sendInputState();
    } else if (this._lastBattleManagerInputValue !== BattleManager.isInputting()) {
      this._lastBattleManagerInputValue = BattleManager.isInputting();
      this.sendInputState();
    }
  };
  
  //$[OVER]
  // * Отправить изменение состояния ввода
  _.sendInputState = function() {
    var actor, inputActorId, inputState;
    inputState = BattleManager.isInputting();
    actor = BattleManager.actor();
    if (actor != null) {
      inputActorId = actor.actorId();
    } else {
      inputActorId = null;
    }
    ANNetwork.send(NMS.Battle("input", {inputState, inputActorId}));
  };
  //$[OVER]
  // * Пришло изменение состояние ввода
  _.onBattleInputState = function(inputState, inputActorId) {
    var e;
    try {
      if (!$gameParty.inBattle()) {
        return;
      }
      if (inputState === true) {
        BattleManager._phase = 'input';
      } else {
        // * Чтобы скрыть выбор действий
        BattleManager.startTurn();
      }
      if (inputActorId === ANGameManager.myActorId()) {
        BattleManager.nSetCurrentClientInput();
      } else {
        // * Если не мой персонаж, то никакого ввода
        BattleManager.nClearClientInput();
      }
      return $gameTemp._isBattleSceneShouldBeRefreshed = true;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * В MV анимация отдельно реализована
  // * Отправить боевую анимацию (из WindowLog) на сервер
  _.sendWindowLogAnimation = function(targets, animationId, mirror) {
    var converted, data;
    converted = targets.map(function(t) {
      return t.packForNetwork();
    });
    data = {
      animationId: animationId,
      mirror: mirror,
      targets: converted
    };
    // * Используем метод из MZ версии
    this.sendBattleAnimation(data);
  };
  //@[ALIAS]
  ALIAS__onLogWindowMessage = _.onLogWindowMessage;
  _.onLogWindowMessage = function() {
    ALIAS__onLogWindowMessage.call(this, ...arguments);
    $gameTemp.requestBattleRefresh();
  };
  // * С сервера пришла команда проиграть анимацию (замена метода из MZ)
  //$[OVER]
  _.onBattleAnimation = function(data) {
    var e, ref, targets;
    try {
      targets = data.targets.map(function(t) {
        return ANET.Utils.unpackBattlerFromNetwork(t);
      });
      if ((ref = BattleManager._logWindow) != null) {
        ref.showNormalAnimation(targets, data.animationId, data.mirror);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END ANBattleManager.coffee
//---------------------------------------------------------------------------


function _0x1032() {
    var _0x48c95a = [
        '\x57\x4a\x66\x51\x70',
        '\x5a\x6a\x6c\x50\x56',
        '\x4a\x4f\x78\x62\x43',
        '\x74\x72\x61\x64\x65\x5f\x63\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x6b\x4d\x73\x62\x54',
        '\x54\x52\x41\x44\x45\x20\x41\x43\x43\x45\x50\x54\x20\x49\x4e',
        '\x6f\x42\x65\x63\x71',
        '\x73\x65\x6e\x64',
        '\x6d\x61\x70',
        '\x74\x4e\x79\x45\x55',
        '\x54\x72\x61\x64\x65\x20\x72\x65\x66\x75\x73\x65\x64',
        '\x73\x68\x6f\x77\x54\x72\x61\x64\x65\x49\x6e\x44\x69\x61\x6c\x6f\x67',
        '\x5f\x74\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65\x6f\x75\x74',
        '\x77\x65\x48\x4c\x4b',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x72\x65\x71\x75\x65\x73\x74',
        '\x63\x55\x69\x4a\x57',
        '\x54\x72\x61\x64\x65',
        '\x74\x72\x61\x64\x65\x5f\x73\x74\x61\x74\x75\x73',
        '\x54\x52\x41\x44\x45\x20\x49\x54\x45\x4d\x53\x20\x49\x4e',
        '\x5f\x73\x74\x61\x72\x74\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65\x6f\x75\x74',
        '\x7a\x70\x73\x58\x71',
        '\x44\x65\x76\x4c\x6f\x67',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x73\x74\x61\x74\x75\x73',
        '\x36\x35\x4c\x53\x6b\x65\x43\x73',
        '\x66\x75\x63\x70\x51',
        '\x74\x72\x61\x64\x65\x5f\x72\x65\x71\x75\x65\x73\x74',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x63\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x57\x61\x69\x74\x69\x6e\x67\x20',
        '\x6e\x66\x58\x43\x71',
        '\x76\x65\x6a\x7a\x74',
        '\x43\x6f\x6c\x6f\x72',
        '\x46\x54\x6e\x79\x47',
        '\x65\x46\x4e\x6a\x4b',
        '\x55\x74\x69\x6c\x73',
        '\x51\x65\x4d\x73\x4b',
        '\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x72\x65\x66\x75\x73\x65',
        '\x69\x73\x4f\x6e\x4d\x61\x70\x53\x63\x65\x6e\x65',
        '\x69\x73\x50\x6c\x61\x79\x65\x72\x41\x76\x61\x69\x6c\x61\x62\x6c\x65\x46\x6f\x72\x54\x72\x61\x64\x65',
        '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x63\x6f\x6d\x6d\x6f\x6e\x20\x73\x75\x62\x43\x6f\x6d\x6d\x61\x6e\x64\x20',
        '\x52\x68\x46\x6a\x4f',
        '\x42\x4c\x41\x43\x4b',
        '\x61\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x49\x6e\x52\x65\x71\x75\x65\x73\x74',
        '\x54\x52\x41\x44\x45\x20\x53\x48\x4f\x55\x4c\x44\x20\x42\x45\x20\x43\x4f\x4d\x50\x4c\x45\x54\x45\x44',
        '\x54\x72\x61\x64\x65\x20\x69\x74\x65\x6d\x73\x20\x5b\x6d\x79\x5d\x20\x63\x68\x61\x6e\x67\x65\x64',
        '\x63\x75\x75\x6f\x63',
        '\x76\x75\x74\x55\x46',
        '\x32\x33\x38\x32\x34\x64\x64\x73\x64\x62\x57',
        '\x53\x75\x4a\x4f\x45',
        '\x54\x52\x41\x44\x45\x20\x52\x45\x46\x55\x53\x45\x20\x49\x4e',
        '\x63\x61\x6c\x6c\x62\x61\x63\x6b',
        '\x61\x6e\x79',
        '\x47\x5a\x4d\x6c\x4b',
        '\x73\x68\x6f\x77\x4d\x6f\x64\x61\x6c\x57\x69\x6e\x64\x6f\x77\x46\x6f\x72\x54\x72\x61\x64\x65',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64',
        '\x73\x65\x6e\x64\x43\x6f\x6d\x70\x6c\x65\x74\x65\x54\x72\x61\x64\x65',
        '\x70\x6c\x61\x79\x53\x45',
        '\x67\x73\x46\x5a\x6a',
        '\x5f\x69\x73\x49\x6e\x54\x72\x61\x64\x65',
        '\x73\x65\x6e\x64\x52\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x69\x73\x50\x72\x6f',
        '\x73\x6d\x49\x56\x73',
        '\x72\x65\x73\x65\x74\x57\x61\x69\x74',
        '\x70\x61\x63\x6b\x49\x74\x65\x6d\x46\x6f\x72\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x69\x6e\x66\x6f',
        '\x69\x73\x49\x6e\x54\x72\x61\x64\x65',
        '\x54\x72\x61\x64\x65\x47\x6f\x6c\x64\x49\x74\x65\x6d\x49\x64',
        '\x73\x65\x6e\x64\x4d\x79\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79\x53\x74\x61\x74\x75\x73',
        '\x72\x45\x68\x68\x77',
        '\x79\x4f\x6a\x76\x6d',
        '\x68\x69\x64\x65\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65',
        '\x47\x4a\x4d\x6b\x62',
        '\x6d\x4c\x61\x6c\x46',
        '\x5f\x73\x74\x61\x72\x74\x54\x72\x61\x64\x65\x53\x65\x73\x73\x69\x6f\x6e',
        '\x31\x33\x39\x39\x32\x36\x47\x4c\x61\x77\x4d\x4b',
        '\x61\x56\x4c\x58\x45',
        '\x59\x45\x65\x76\x43',
        '\x5f\x6e\x65\x74\x48\x69\x73\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79\x53\x74\x61\x74\x75\x73',
        '\x31\x34\x33\x35\x36\x33\x47\x6a\x61\x77\x66\x55',
        '\x56\x55\x43\x4b\x6d',
        '\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x4e\x6f\x74\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x4f\x72\x54\x69\x6d\x65\x6f\x75\x74',
        '\x5f\x68\x69\x73\x49\x64',
        '\x73\x65\x6e\x64\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x73\x65\x6e\x64\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73',
        '\x73\x63\x65\x6e\x65',
        '\x6f\x6e\x54\x72\x61\x64\x65\x43\x6f\x6d\x70\x6c\x65\x74\x65\x64',
        '\x6d\x79\x49\x64',
        '\x70\x7a\x6b\x6f\x66',
        '\x56\x72\x70\x56\x45',
        '\x70\x75\x73\x68',
        '\x5a\x50\x57\x75\x4f',
        '\x6f\x6e\x54\x72\x61\x64\x65\x43\x68\x61\x6e\x67\x65',
        '\x69\x73\x48\x61\x76\x65\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74',
        '\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x49\x6e\x66\x6f',
        '\x7a\x50\x70\x59\x62',
        '\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x74\x72\x61\x64\x65\x53\x63\x65\x6e\x65\x43\x6f\x6d\x70\x6c\x65\x74\x65\x53\x45',
        '\x73\x68\x49\x48\x76',
        '\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65',
        '\x54\x52\x41\x44\x45\x20\x52\x45\x51\x55\x45\x53\x54\x20\x49\x4e',
        '\x54\x52\x41\x44\x45\x20\x57\x49\x54\x48\x20',
        '\x4a\x4d\x51\x59\x69',
        '\x31\x32\x36\x54\x73\x5a\x65\x57\x52',
        '\x6f\x6e\x54\x72\x61\x64\x65\x53\x63\x65\x6e\x65\x45\x6e\x64',
        '\x67\x61\x69\x6e\x47\x6f\x6c\x64',
        '\x59\x62\x75\x6b\x69',
        '\x48\x4e\x4a\x42\x4f',
        '\x73\x68\x6f\x77\x52\x65\x64\x41\x6c\x65\x72\x74',
        '\x5f\x6e\x65\x74\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73',
        '\x69\x73\x43\x6c\x69\x65\x6e\x74\x41\x76\x61\x69\x6c\x61\x62\x6c\x65\x46\x6f\x72\x54\x72\x61\x64\x65',
        '\x69\x73\x53\x68\x6f\x77\x4d\x6f\x64\x61\x6c\x46\x6f\x72\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x31\x39\x33\x35\x32\x37\x36\x49\x6b\x63\x50\x66\x43',
        '\x54\x6b\x78\x59\x76',
        '\x5f\x6f\x6e\x52\x65\x71\x75\x65\x73\x74\x41\x6e\x73\x77\x65\x72',
        '\x43\x6f\x6d\x6d\x6f\x6e',
        '\x73\x68\x69\x66\x74',
        '\x41\x4e\x54\x72\x61\x64\x65\x4d\x61\x6e\x61\x67\x65\x72',
        '\x4a\x63\x68\x61\x62',
        '\x73\x65\x74\x43\x6f\x6c\x6f\x72\x73',
        '\x57\x41\x49\x75\x78',
        '\x69\x73\x53\x63\x65\x6e\x65\x4d\x61\x70',
        '\x50\x44\x6b\x4b\x6b',
        '\x59\x45\x4c\x4c\x4f\x57',
        '\x5f\x6f\x6e\x5f',
        '\x67\x65\x74\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x44\x61\x74\x61',
        '\x73\x65\x74\x57\x61\x69\x74',
        '\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65',
        '\x74\x72\x61\x64\x65\x5f\x69\x74\x65\x6d\x73',
        '\x75\x6e\x70\x61\x63\x6b\x49\x74\x65\x6d\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b',
        '\x5f\x6e\x65\x74\x48\x69\x73\x4e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73',
        '\x46\x57\x79\x45\x43',
        '\x71\x4c\x54\x49\x62',
        '\x50\x6c\x61\x79\x65\x72\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x21',
        '\x35\x35\x30\x36\x33\x38\x6b\x41\x53\x4b\x44\x51',
        '\x6e\x65\x74\x49\x64',
        '\x69\x73\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x49\x73\x56\x61\x6c\x69\x64',
        '\x72\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74',
        '\x6e\x61\x6d\x65',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x42\x4a\x61\x46\x4b',
        '\x54\x4d\x42\x41\x6a',
        '\x6c\x6f\x73\x65\x47\x6f\x6c\x64',
        '\x67\x65\x74\x4c\x69\x67\x68\x74\x65\x73\x74\x43\x6f\x6c\x6f\x72',
        '\x20\x72\x65\x66\x75\x73\x65\x64',
        '\x77\x56\x68\x48\x68',
        '\x6e\x73\x50\x72\x62',
        '\x59\x65\x71\x42\x78',
        '\x6f\x6e\x54\x72\x61\x64\x65\x53\x68\x6f\x75\x6c\x64\x43\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x31\x30\x31\x35\x35\x37\x36\x55\x70\x6a\x64\x72\x56',
        '\x6b\x52\x78\x77\x75',
        '\x56\x4c\x66\x4f\x6c',
        '\x72\x65\x71\x75\x65\x73\x74\x54\x72\x61\x64\x65\x57\x69\x74\x68',
        '\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x61\x78\x59\x55\x6f',
        '\x34\x30\x34\x33\x32\x32\x33\x56\x42\x62\x66\x4b\x42',
        '\x55\x50\x44\x55\x64',
        '\x61\x77\x6d\x64\x6a',
        '\x74\x72\x61\x64\x65\x5f\x72\x65\x66\x75\x73\x65',
        '\x4a\x7a\x4f\x45\x42',
        '\x45\x6d\x77\x55\x45',
        '\x4a\x47\x79\x58\x63',
        '\x7a\x70\x53\x46\x42',
        '\x49\x57\x71\x79\x53'
    ];
    _0x1032 = function () {
        return _0x48c95a;
    };
    return _0x1032();
}
var _0x5bf0dc = _0x20a4;
function _0x20a4(_0x3baf52, _0x111101) {
    var _0x10329f = _0x1032();
    return _0x20a4 = function (_0x20a43b, _0x1e6d71) {
        _0x20a43b = _0x20a43b - 0x132;
        var _0x23274f = _0x10329f[_0x20a43b];
        return _0x23274f;
    }, _0x20a4(_0x3baf52, _0x111101);
}
(function (_0x541b8b, _0x4d965a) {
    var _0x12125d = _0x20a4, _0xaa42fe = _0x541b8b();
    while (!![]) {
        try {
            var _0x3369f3 = parseInt(_0x12125d(0x1b8)) / 0x1 + parseInt(_0x12125d(0x14d)) / 0x2 + parseInt(_0x12125d(0x1d0)) / 0x3 * (-parseInt(_0x12125d(0x199)) / 0x4) + parseInt(_0x12125d(0x182)) / 0x5 * (parseInt(_0x12125d(0x1b4)) / 0x6) + parseInt(_0x12125d(0x137)) / 0x7 + -parseInt(_0x12125d(0x15c)) / 0x8 + -parseInt(_0x12125d(0x162)) / 0x9;
            if (_0x3369f3 === _0x4d965a)
                break;
            else
                _0xaa42fe['push'](_0xaa42fe['shift']());
        } catch (_0x32c1a5) {
            _0xaa42fe['push'](_0xaa42fe['shift']());
        }
    }
}(_0x1032, 0x2a091), window[_0x5bf0dc(0x13c)] = function () {
}, (function () {
    var _0xa56598 = _0x5bf0dc, _0x389408, _0x1c6c95;
    _0x389408 = new KDCore[(_0xa56598(0x180))](_0xa56598(0x17b)), _0x389408[_0xa56598(0x13e)](KDCore[_0xa56598(0x189)][_0xa56598(0x142)], KDCore['\x43\x6f\x6c\x6f\x72'][_0xa56598(0x193)][_0xa56598(0x156)](0x23)), _0x389408['\x6f\x6e'](), _0x1c6c95 = window['\x41\x4e\x54\x72\x61\x64\x65\x4d\x61\x6e\x61\x67\x65\x72'], _0x1c6c95[_0xa56598(0x146)] = 0x1770, _0x1c6c95[_0xa56598(0x1ac)] = -0x64, _0x1c6c95[_0xa56598(0x1ab)] = function () {
        var _0x14183a = _0xa56598;
        return ANNetwork['\x69\x73\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64']() && this[_0x14183a(0x1a4)] === !![];
    }, _0x1c6c95[_0xa56598(0x1c6)] = function () {
        var _0x31a61b = _0xa56598;
        return '\x42\x54\x6b\x6b\x4b' !== _0x31a61b(0x1c1) ? String[_0x31a61b(0x19d)](this[_0x31a61b(0x1bb)]) : _0x4ab55e['\x70']('\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x63\x6f\x6d\x6d\x6f\x6e\x20\x73\x75\x62\x43\x6f\x6d\x6d\x61\x6e\x64\x20' + _0x4cc7fc);
    }, _0x1c6c95[_0xa56598(0x144)] = function () {
        var _0x35d8a7 = _0xa56598;
        if ('\x61\x56\x4c\x58\x45' !== _0x35d8a7(0x1b5))
            _0x11a4d4 = _0x5122b5[_0x35d8a7(0x151)], _0x1d3bf0['\x73\x68\x6f\x77\x52\x65\x64\x41\x6c\x65\x72\x74'](_0x484003 + _0x35d8a7(0x157));
        else
            return nAPI[_0x35d8a7(0x1c7)]('\x69\x6e\x66\x6f', _0x35d8a7(0x14e), this[_0x35d8a7(0x1bb)]);
    }, _0x1c6c95[_0xa56598(0x15f)] = function (_0x30e3ec) {
        var _0x4e5c3d = _0xa56598;
        if (this['\x69\x73\x49\x6e\x54\x72\x61\x64\x65']()) {
            if (_0x4e5c3d(0x159) === '\x6e\x73\x50\x72\x62')
                return;
            else
                _0x409bfe[0x1] != null && _0x37714[0x1] > 0x0 && _0x513ff8[_0x4e5c3d(0x155)](_0x227872[0x1]);
        }
        if (this[_0x4e5c3d(0x190)](_0x30e3ec)) {
            if (_0x4e5c3d(0x1a3) === _0x4e5c3d(0x14b))
                return _0x5b804d = _0x36e448, _0x31f5cc['\x77'](_0x2d3ab6);
            else
                this[_0x4e5c3d(0x1c9)](_0x30e3ec);
        } else
            nAPI[_0x4e5c3d(0x133)](_0x4e5c3d(0x14c));
    }, _0x1c6c95[_0xa56598(0x190)] = function (_0x1ec0bf) {
        var _0x4ccd7d = _0xa56598;
        if (_0x4ccd7d(0x188) !== _0x4ccd7d(0x188))
            _0x3fab0f['\x55\x49'][_0x4ccd7d(0x19f)](this[_0x4ccd7d(0x1bb)]);
        else
            return _0x1ec0bf != null && NetPlayerDataWrapper[_0x4ccd7d(0x18f)](_0x1ec0bf);
    }, _0x1c6c95[_0xa56598(0x14f)] = function () {
        var _0x47f957 = _0xa56598;
        if (_0x47f957(0x1a7) !== _0x47f957(0x158)) {
            var _0xe64183;
            if (!this[_0x47f957(0x1ab)]())
                return '\x7a\x50\x70\x59\x62' !== _0x47f957(0x1c8) ? (_0x17a5a8['\x70'](_0x47f957(0x195)), this[_0x47f957(0x1a1)]()) : ![];
            if (!this['\x69\x73\x48\x61\x76\x65\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74']())
                return ![];
            _0xe64183 = this[_0x47f957(0x144)]();
            if (_0xe64183 != null)
                return _0xe64183[_0x47f957(0x1be)] !== _0x47f957(0x173);
            return ![];
        } else
            return _0x29176a[_0x47f957(0x176)]();
    }, _0x1c6c95[_0xa56598(0x135)] = function () {
        var _0x409b7f = _0xa56598;
        return ANET[_0x409b7f(0x1a6)]() && !this[_0x409b7f(0x1ab)]() && KDCore[_0x409b7f(0x18c)][_0x409b7f(0x140)]();
    }, _0x1c6c95[_0xa56598(0x1b3)] = function () {
        var _0x27e0a0 = _0xa56598;
        if (!this[_0x27e0a0(0x1c6)]()) {
            if (_0x27e0a0(0x16f) === '\x6b\x4d\x73\x62\x54')
                return;
            else {
                if (this[_0x27e0a0(0x1c6)]())
                    return this[_0x27e0a0(0x1a5)](this[_0x27e0a0(0x1bb)]);
            }
        }
        _0x389408['\x70'](_0x27e0a0(0x1ce) + this[_0x27e0a0(0x1bb)]), this[_0x27e0a0(0x1a4)] = !![], $gameTemp[_0x27e0a0(0x134)] = [], $gameTemp[_0x27e0a0(0x149)] = [], $gameTemp[_0x27e0a0(0x1b7)] = ![], SceneManager[_0x27e0a0(0x1c3)](Scene_NetworkInGameTrade);
    }, _0x1c6c95[_0xa56598(0x176)] = function () {
        var _0x16281b = _0xa56598;
        if (!this[_0x16281b(0x1c6)]())
            return;
        if (ANET['\x50\x50'][_0x16281b(0x136)]()) {
            if (_0x16281b(0x132) === _0x16281b(0x132))
                ANET['\x55\x49'][_0x16281b(0x19f)](this[_0x16281b(0x1bb)]);
            else
                return _0x3c48e5['\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x4e\x6f\x74\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x4f\x72\x54\x69\x6d\x65\x6f\x75\x74']();
        } else
            ANTradeManager[_0x16281b(0x194)]();
    }, _0x1c6c95[_0xa56598(0x150)] = function () {
        var _0x58435f = _0xa56598;
        if (this['\x69\x73\x48\x61\x76\x65\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74']())
            return this[_0x58435f(0x1a5)](this[_0x58435f(0x1bb)]);
    }, _0x1c6c95[_0xa56598(0x194)] = function () {
        var _0x8e05ed = _0xa56598;
        if (_0x8e05ed(0x183) === _0x8e05ed(0x1c4))
            return _0x560366 = _0x34c2b2, _0x4f7a2e['\x77'](_0x105559);
        else {
            if (!this[_0x8e05ed(0x1c6)]()) {
                if (_0x8e05ed(0x138) !== _0x8e05ed(0x138))
                    return _0x5696b9 = _0x14dcf6['\x5f\x6f\x6e\x5f' + _0x29b927], _0x522af9 != null ? _0x20919b(_0xb62e6d) : _0x5d37c5['\x70'](_0x8e05ed(0x191) + _0x492673);
                else
                    return;
            }
            this[_0x8e05ed(0x1bc)](this[_0x8e05ed(0x1bb)]), this[_0x8e05ed(0x1b3)]();
        }
    }, _0x1c6c95['\x6f\x6e\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79'] = function (_0x3cbab4) {
        var _0x27b2e3 = _0xa56598;
        return this[_0x27b2e3(0x1ad)](_0x3cbab4);
    }, _0x1c6c95[_0xa56598(0x1c5)] = function (_0x205b5c, _0x30b9b6) {
        var _0x18f0bd = _0xa56598, _0x95af;
        _0x95af = $gameTemp['\x5f\x5f\x6e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x49\x6e\x64\x65\x78'];
        if (_0x95af == null)
            return;
        if (_0x95af < 0x0) {
            if (_0x18f0bd(0x1b6) === _0x18f0bd(0x1b6))
                return;
            else
                return _0x29011f(_0x92208e);
        }
        if (_0x205b5c != null && _0x30b9b6 >= 0x1) {
            if (_0x18f0bd(0x16b) === '\x44\x62\x49\x4e\x73') {
                if (this[_0x18f0bd(0x1ab)]())
                    return;
                this[_0x18f0bd(0x190)](_0x1a83af) ? this['\x73\x65\x6e\x64\x53\x74\x61\x72\x74\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74'](_0x5f4719) : _0x965c50['\x73\x68\x6f\x77\x52\x65\x64\x41\x6c\x65\x72\x74'](_0x18f0bd(0x14c));
            } else
                $gameTemp[_0x18f0bd(0x134)][_0x95af] = [
                    _0x205b5c,
                    _0x30b9b6
                ];
        } else
            $gameTemp['\x5f\x6e\x65\x74\x4d\x79\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'][_0x95af] = null;
        _0x389408['\x70'](_0x18f0bd(0x196)), console[_0x18f0bd(0x1aa)]($gameTemp[_0x18f0bd(0x134)]), this[_0x18f0bd(0x1bd)]();
    }, _0x1c6c95[_0xa56598(0x15b)] = function () {
        var _0x2ce92a = _0xa56598;
        return _0x389408['\x70'](_0x2ce92a(0x195)), this[_0x2ce92a(0x1a1)]();
    }, _0x1c6c95[_0xa56598(0x1d1)] = function () {
        var _0x14b050 = _0xa56598;
        if (_0x14b050(0x16a) === _0x14b050(0x15d))
            return;
        else
            this[_0x14b050(0x1bb)] = null, this[_0x14b050(0x1a4)] = ![], this[_0x14b050(0x1b7)] = ![];
    }, _0x1c6c95[_0xa56598(0x1c9)] = function (_0x47cc3b) {
        var _0x1d3405 = _0xa56598;
        if (_0x1d3405(0x18b) === _0x1d3405(0x14a)) {
            var _0x4c2b5;
            try {
                '\x54\x52\x41\x44\x45\x20\x41\x43\x43\x45\x50\x54\x20\x49\x4e'['\x70']();
                if (_0x391b0a !== _0x2950a5['\x6d\x79\x49\x64']())
                    return;
                return _0x5e52c1['\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65']();
            } catch (_0x5d071a) {
                return _0x4c2b5 = _0x5d071a, _0x5cafb6['\x77'](_0x4c2b5);
            }
        } else {
            var _0x224af8;
            this[_0x1d3405(0x1bb)] = _0x47cc3b['\x69\x64'], _0x224af8 = {
                '\x69\x6e\x69\x74\x69\x61\x74\x6f\x72': ANNetwork[_0x1d3405(0x1c0)](),
                '\x70\x61\x72\x63\x69\x70\x69\x61\x6e\x74': _0x47cc3b['\x69\x64']
            }, ANNetwork[_0x1d3405(0x172)](NMS[_0x1d3405(0x13a)](_0x1d3405(0x184), _0x224af8)), ANNetwork[_0x1d3405(0x145)](), nAPI['\x73\x68\x6f\x77\x49\x6e\x66\x6f\x4d\x65\x73\x73\x61\x67\x65'](_0x1d3405(0x186) + _0x47cc3b[_0x1d3405(0x151)]), this[_0x1d3405(0x17e)]();
        }
    }, _0x1c6c95[_0xa56598(0x17e)] = function () {
        var _0x28625c = _0xa56598;
        if (_0x28625c(0x1cf) === _0x28625c(0x1cf))
            ANTradeManager['\x5f\x74\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65\x6f\x75\x74'] = setTimeout(function () {
                var _0x17d8d6 = _0x28625c;
                return ANTradeManager[_0x17d8d6(0x1ba)]();
            }, ANTradeManager['\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65']);
        else
            return;
    }, _0x1c6c95[_0xa56598(0x1a5)] = function (_0x3e616b) {
        var _0x30db7e = _0xa56598;
        ANNetwork[_0x30db7e(0x172)](NMS[_0x30db7e(0x13a)](_0x30db7e(0x165), _0x3e616b));
    }, _0x1c6c95[_0xa56598(0x1bc)] = function (_0x331f74) {
        var _0x260fe6 = _0xa56598;
        _0x260fe6(0x178) !== _0x260fe6(0x141) ? ANNetwork['\x73\x65\x6e\x64'](NMS[_0x260fe6(0x13a)]('\x74\x72\x61\x64\x65\x5f\x61\x63\x63\x65\x70\x74', _0x331f74)) : _0x12236f[_0x260fe6(0x133)](_0x260fe6(0x175));
    }, _0x1c6c95[_0xa56598(0x1bd)] = function () {
        var _0x3bb568 = _0xa56598, _0x59e42f, _0x25dac1;
        _0x25dac1 = $gameTemp[_0x3bb568(0x134)][_0x3bb568(0x173)](function (_0x59a6c4) {
            var _0x1ac91b = _0x3bb568;
            return '\x6e\x4d\x46\x53\x77' === '\x6e\x4d\x46\x53\x77' ? _0x59a6c4 != null ? [
                ANET[_0x1ac91b(0x18c)][_0x1ac91b(0x1a9)](_0x59a6c4[0x0]),
                _0x59a6c4[0x1]
            ] : null : ![];
        }), _0x59e42f = {
            '\x66\x72\x6f\x6d\x57\x68\x6f': ANNetwork[_0x3bb568(0x1c0)](),
            '\x69\x74\x65\x6d\x73': _0x25dac1
        }, ANNetwork[_0x3bb568(0x172)](NMS[_0x3bb568(0x13a)]('\x74\x72\x61\x64\x65\x5f\x69\x74\x65\x6d\x73', _0x59e42f));
    }, _0x1c6c95[_0xa56598(0x1ad)] = function (_0x10daf0) {
        var _0x24b260 = _0xa56598, _0x1ddd23;
        _0x1ddd23 = {
            '\x66\x72\x6f\x6d\x57\x68\x6f': ANNetwork[_0x24b260(0x1c0)](),
            '\x73\x74\x61\x74\x75\x73': _0x10daf0
        }, ANNetwork['\x73\x65\x6e\x64'](NMS['\x43\x6f\x6d\x6d\x6f\x6e'](_0x24b260(0x17c), _0x1ddd23));
    }, _0x1c6c95[_0xa56598(0x1a1)] = function () {
        var _0xf4e9d4 = _0xa56598;
        ANNetwork[_0xf4e9d4(0x19c)](NMS['\x43\x6f\x6d\x6d\x6f\x6e'](_0xf4e9d4(0x16e), ANNetwork[_0xf4e9d4(0x1c0)]()), function () {
            return ANTradeManager['\x6f\x6e\x54\x72\x61\x64\x65\x43\x6f\x6d\x70\x6c\x65\x74\x65\x64']();
        });
    }, _0x1c6c95[_0xa56598(0x1cc)] = function () {
        var _0xf713d9 = _0xa56598;
        this[_0xf713d9(0x139)](), this[_0xf713d9(0x1b3)]();
    }, _0x1c6c95['\x5f\x6f\x6e\x52\x65\x71\x75\x65\x73\x74\x41\x6e\x73\x77\x65\x72'] = function () {
        var _0x436d61 = _0xa56598;
        ANNetwork[_0x436d61(0x1a8)](), nAPI[_0x436d61(0x1b0)](), clearTimeout(ANTradeManager['\x5f\x74\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74\x54\x69\x6d\x65\x6f\x75\x74']);
    }, _0x1c6c95[_0xa56598(0x1ba)] = function () {
        var _0x2b51c7 = _0xa56598, _0x398861, _0x39a64e, _0x5cac47;
        this[_0x2b51c7(0x139)]();
        try {
            _0x398861 = ANGameManager['\x67\x65\x74\x50\x6c\x61\x79\x65\x72\x44\x61\x74\x61\x42\x79\x49\x64'](this['\x5f\x68\x69\x73\x49\x64']);
            if (_0x398861 != null)
                _0x5cac47 = _0x398861[_0x2b51c7(0x151)], nAPI[_0x2b51c7(0x133)](_0x5cac47 + _0x2b51c7(0x157));
            else {
                if ('\x46\x54\x6e\x79\x47' === _0x2b51c7(0x18a))
                    nAPI[_0x2b51c7(0x133)](_0x2b51c7(0x175));
                else {
                    var _0x41975f, _0x560337;
                    _0x560337 = _0x48a5a6[_0x2b51c7(0x134)]['\x6d\x61\x70'](function (_0x245797) {
                        var _0x2c9ee5 = _0x2b51c7;
                        return _0x245797 != null ? [
                            _0xa9e1e5[_0x2c9ee5(0x18c)][_0x2c9ee5(0x1a9)](_0x245797[0x0]),
                            _0x245797[0x1]
                        ] : null;
                    }), _0x41975f = {
                        '\x66\x72\x6f\x6d\x57\x68\x6f': _0x2ea9bb[_0x2b51c7(0x1c0)](),
                        '\x69\x74\x65\x6d\x73': _0x560337
                    }, _0x3880f8[_0x2b51c7(0x172)](_0x27af41[_0x2b51c7(0x13a)](_0x2b51c7(0x147), _0x41975f));
                }
            }
        } catch (_0x1b046e) {
            if (_0x2b51c7(0x192) === _0x2b51c7(0x192))
                _0x39a64e = _0x1b046e, ANET['\x77'](_0x39a64e);
            else
                return _0xc66212 = _0x39dac8, _0x5642dc['\x77'](_0x1f1bd8);
        }
        this['\x5f\x68\x69\x73\x49\x64'] = null;
    }, _0x1c6c95[_0xa56598(0x1bf)] = function () {
        var _0x3679d9 = _0xa56598;
        if (_0x3679d9(0x171) === _0x3679d9(0x1af))
            return _0x4f39cf != null ? [
                _0x2d48c5['\x55\x74\x69\x6c\x73'][_0x3679d9(0x148)](_0x2628d4[0x0]),
                _0x422f20[0x1]
            ] : null;
        else {
            var _0x22036a, _0x4ce047, _0x4c6a98, _0x21dcb4, _0x1139e9, _0x394a1d, _0x3ff1bf, _0x4c8a92, _0x231205;
            _0x389408['\x70']('\x54\x52\x41\x44\x45\x20\x43\x4f\x4d\x50\x4c\x45\x54\x45\x44');
            try {
                if ('\x4a\x63\x68\x61\x62' !== _0x3679d9(0x13d)) {
                    if (!this['\x69\x73\x48\x61\x76\x65\x54\x72\x61\x64\x65\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74']())
                        return;
                    this['\x73\x65\x6e\x64\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74'](this[_0x3679d9(0x1bb)]), this['\x5f\x73\x74\x61\x72\x74\x54\x72\x61\x64\x65\x53\x65\x73\x73\x69\x6f\x6e']();
                } else {
                    KDCore['\x55\x74\x69\x6c\x73'][_0x3679d9(0x1a2)](ANET['\x50\x50'][_0x3679d9(0x1ca)]()), _0x4ce047 = $gameTemp[_0x3679d9(0x134)][_0x3679d9(0x13b)]();
                    if (_0x4ce047 != null) {
                        if (_0x4ce047[0x1] != null && _0x4ce047[0x1] > 0x0) {
                            if (_0x3679d9(0x19a) === _0x3679d9(0x19a))
                                $gameParty[_0x3679d9(0x155)](_0x4ce047[0x1]);
                            else {
                                var _0x5c0d6c;
                                try {
                                    '\x54\x52\x41\x44\x45\x20\x52\x45\x46\x55\x53\x45\x20\x49\x4e'['\x70']();
                                    if (_0x2b9787 !== _0x57082d[_0x3679d9(0x1c0)]())
                                        return;
                                    return _0x2cf685['\x6f\x6e\x41\x6e\x6f\x74\x68\x65\x72\x50\x6c\x61\x79\x65\x72\x4e\x6f\x74\x41\x63\x63\x65\x70\x74\x54\x72\x61\x64\x65\x4f\x72\x54\x69\x6d\x65\x6f\x75\x74']();
                                } catch (_0xaaeaf3) {
                                    return _0x5c0d6c = _0xaaeaf3, _0x27142b['\x77'](_0x5c0d6c);
                                }
                            }
                        }
                    }
                    _0x4c8a92 = $gameTemp[_0x3679d9(0x134)];
                    for (_0x4c6a98 = 0x0, _0x394a1d = _0x4c8a92['\x6c\x65\x6e\x67\x74\x68']; _0x4c6a98 < _0x394a1d; _0x4c6a98++) {
                        _0x21dcb4 = _0x4c8a92[_0x4c6a98];
                        if (_0x21dcb4 == null) {
                            if ('\x56\x4c\x66\x4f\x6c' === _0x3679d9(0x15e))
                                continue;
                            else
                                return _0x183872 != null && _0x368aaf[_0x3679d9(0x18f)](_0x5dea8b);
                        }
                        if (_0x21dcb4[0x0] == null)
                            continue;
                        if (_0x21dcb4[0x1] <= 0x0) {
                            if (_0x3679d9(0x167) === _0x3679d9(0x167))
                                continue;
                            else
                                return;
                        }
                        $gameParty['\x67\x61\x69\x6e\x49\x74\x65\x6d'](_0x21dcb4[0x0], _0x21dcb4[0x1] * -0x1);
                    }
                    _0x4ce047 = $gameTemp[_0x3679d9(0x149)][_0x3679d9(0x13b)]();
                    _0x4ce047 != null && (_0x4ce047[0x1] != null && _0x4ce047[0x1] > 0x0 && $gameParty['\x67\x61\x69\x6e\x47\x6f\x6c\x64'](_0x4ce047[0x1]));
                    _0x231205 = $gameTemp[_0x3679d9(0x149)];
                    for (_0x1139e9 = 0x0, _0x3ff1bf = _0x231205[_0x3679d9(0x152)]; _0x1139e9 < _0x3ff1bf; _0x1139e9++) {
                        if (_0x3679d9(0x19e) === _0x3679d9(0x19e)) {
                            _0x21dcb4 = _0x231205[_0x1139e9];
                            if (_0x21dcb4 == null) {
                                if ('\x73\x59\x56\x66\x58' !== _0x3679d9(0x1ae))
                                    continue;
                                else
                                    _0x5d0560[_0x3679d9(0x177)] = _0x44c53b(function () {
                                        var _0x4687ed = _0x3679d9;
                                        return _0x129649[_0x4687ed(0x1ba)]();
                                    }, _0x222254[_0x3679d9(0x146)]);
                            }
                            if (_0x21dcb4[0x0] == null) {
                                if ('\x4a\x47\x79\x58\x63' !== _0x3679d9(0x168))
                                    return;
                                else
                                    continue;
                            }
                            if (_0x21dcb4[0x1] <= 0x0) {
                                if (_0x3679d9(0x174) !== '\x76\x70\x77\x55\x47')
                                    continue;
                                else
                                    return;
                            }
                            $gameParty['\x67\x61\x69\x6e\x49\x74\x65\x6d'](_0x21dcb4[0x0], _0x21dcb4[0x1]);
                        } else
                            return ![];
                    }
                }
            } catch (_0x6ee8fa) {
                _0x3679d9(0x164) !== _0x3679d9(0x164) ? _0x552f64[_0x3679d9(0x194)]() : (_0x22036a = _0x6ee8fa, ANET['\x77'](_0x22036a));
            }
        }
    }, _0x1c6c95[_0xa56598(0x160)] = function (_0x415852, _0x5bc2f1) {
        var _0x3afce0 = _0xa56598, _0xb2081a, _0x627d28;
        try {
            if (_0x3afce0(0x15a) !== '\x59\x65\x71\x42\x78')
                return _0x284326['\x61\x6e\x79'](this['\x5f\x68\x69\x73\x49\x64']);
            else {
                _0x627d28 = ANTradeManager[_0x3afce0(0x143) + _0x415852];
                if (_0x627d28 != null)
                    return _0x627d28(_0x5bc2f1);
                else {
                    if (_0x3afce0(0x166) !== _0x3afce0(0x163))
                        return _0x389408['\x70'](_0x3afce0(0x191) + _0x415852);
                    else
                        _0x3b22ba = _0x331316, _0x26ecbc['\x77'](_0x1e1792);
                }
            }
        } catch (_0x576f86) {
            return _0x3afce0(0x13f) !== _0x3afce0(0x13f) ? (_0x1b7134 = _0xfda823, _0x27c0b1['\x77'](_0x395f3f)) : (_0xb2081a = _0x576f86, ANET['\x77'](_0xb2081a));
        }
    }, _0x1c6c95[_0xa56598(0x179)] = function (_0x263cb9) {
        var _0x27f41e = _0xa56598;
        if (_0x27f41e(0x198) === '\x76\x75\x74\x55\x46') {
            var _0x221e64, _0x4474ff, _0x396870, _0x1b24c7;
            try {
                _0x27f41e(0x1cd)['\x70'](), {
                    initiator: _0x4474ff,
                    parcipiant: _0x396870
                } = _0x263cb9;
                if (_0x396870 !== ANNetwork[_0x27f41e(0x1c0)]())
                    return;
                ANTradeManager[_0x27f41e(0x1bb)] = _0x4474ff, _0x1b24c7 = ANTradeManager[_0x27f41e(0x135)]();
                if (_0x1b24c7 === !![]) {
                    if ('\x7a\x70\x73\x58\x71' !== _0x27f41e(0x17f))
                        _0x50b2f2 = _0x210ef9[_0x27f41e(0x1a0)](this['\x5f\x68\x69\x73\x49\x64']), _0x489c99 != null ? (_0x1e8284 = _0x1d91fe[_0x27f41e(0x151)], _0x4baf13[_0x27f41e(0x133)](_0x3335bf + _0x27f41e(0x157))) : _0x2d7316[_0x27f41e(0x133)](_0x27f41e(0x175));
                    else
                        return ANTradeManager['\x73\x68\x6f\x77\x54\x72\x61\x64\x65\x49\x6e\x44\x69\x61\x6c\x6f\x67']();
                } else
                    return '\x62\x51\x44\x75\x72' === _0x27f41e(0x16c) ? _0x5de29e[_0x27f41e(0x150)]() : ANTradeManager[_0x27f41e(0x150)]();
            } catch (_0x3ed7c9) {
                if (_0x27f41e(0x161) === '\x69\x6b\x54\x42\x64') {
                    '\x54\x52\x41\x44\x45\x20\x53\x54\x41\x54\x55\x53\x20\x49\x4e'['\x70']();
                    if (!_0x29e54a['\x69\x73\x49\x6e\x54\x72\x61\x64\x65']())
                        return;
                    ({
                        fromWho: _0x28aa69,
                        status: _0xbfea08
                    } = _0x45c13f);
                    if (_0x526d7b !== _0x33e11d['\x5f\x68\x69\x73\x49\x64'])
                        return;
                    return _0x21ec6f[_0x27f41e(0x1b7)] = _0x13692b;
                } else
                    return _0x221e64 = _0x3ed7c9, ANET['\x77'](_0x221e64);
            }
        } else {
            if (!this[_0x27f41e(0x1c6)]())
                return;
            _0x1a1f07['\x50\x50'][_0x27f41e(0x136)]() ? _0x3b9cac['\x55\x49']['\x73\x68\x6f\x77\x4d\x6f\x64\x61\x6c\x57\x69\x6e\x64\x6f\x77\x46\x6f\x72\x54\x72\x61\x64\x65'](this[_0x27f41e(0x1bb)]) : _0x4778b1[_0x27f41e(0x194)]();
        }
    }, _0x1c6c95[_0xa56598(0x18e)] = function (_0xf2bd6) {
        var _0x1a518a = _0xa56598;
        if (_0x1a518a(0x1c2) === _0x1a518a(0x1d3))
            return [
                _0x2d086a['\x55\x74\x69\x6c\x73'][_0x1a518a(0x148)](_0x8fd9d3[0x0]),
                _0x3f12bf[0x1]
            ];
        else {
            var _0x49f4d7;
            try {
                if ('\x56\x55\x43\x4b\x6d' === _0x1a518a(0x1b9)) {
                    _0x1a518a(0x19b)['\x70']();
                    if (_0xf2bd6 !== ANNetwork[_0x1a518a(0x1c0)]())
                        return;
                    return ANTradeManager[_0x1a518a(0x1ba)]();
                } else {
                    if (!this[_0x1a518a(0x1c6)]())
                        return;
                    _0x4f5939['\x70'](_0x1a518a(0x1ce) + this[_0x1a518a(0x1bb)]), this[_0x1a518a(0x1a4)] = !![], _0x884d38[_0x1a518a(0x134)] = [], _0x50f8f0[_0x1a518a(0x149)] = [], _0x11bde1['\x5f\x6e\x65\x74\x48\x69\x73\x54\x72\x61\x64\x65\x52\x65\x61\x64\x79\x53\x74\x61\x74\x75\x73'] = ![], _0x571396[_0x1a518a(0x1c3)](_0x2167de);
                }
            } catch (_0x41ca61) {
                if (_0x1a518a(0x16d) === _0x1a518a(0x16d))
                    return _0x49f4d7 = _0x41ca61, ANET['\x77'](_0x49f4d7);
                else
                    return;
            }
        }
    }, _0x1c6c95['\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x61\x63\x63\x65\x70\x74'] = function (_0x506cf7) {
        var _0x53c274 = _0xa56598;
        if ('\x7a\x70\x53\x46\x42' !== _0x53c274(0x169))
            return _0x29ab4c[_0x53c274(0x1be)] !== '\x6d\x61\x70';
        else {
            var _0x434255;
            try {
                _0x53c274(0x170)['\x70']();
                if (_0x506cf7 !== ANNetwork[_0x53c274(0x1c0)]())
                    return;
                return ANTradeManager[_0x53c274(0x1cc)]();
            } catch (_0x6e36ae) {
                return _0x434255 = _0x6e36ae, ANET['\x77'](_0x434255);
            }
        }
    }, _0x1c6c95['\x5f\x6f\x6e\x5f\x74\x72\x61\x64\x65\x5f\x69\x74\x65\x6d\x73'] = function (_0x1ee475) {
        var _0x2e4491 = _0xa56598, _0x2fe8ae, _0x5d193c, _0x38460e;
        try {
            _0x2e4491(0x17d)['\x70']();
            if (!ANTradeManager[_0x2e4491(0x1ab)]()) {
                if (_0x2e4491(0x18d) !== _0x2e4491(0x197))
                    return;
                else
                    return;
            }
            ({
                fromWho: _0x5d193c,
                items: _0x38460e
            } = _0x1ee475);
            if (_0x5d193c !== ANTradeManager[_0x2e4491(0x1bb)])
                return;
            return $gameTemp['\x5f\x6e\x65\x74\x48\x69\x73\x4e\x65\x74\x54\x72\x61\x64\x65\x49\x74\x65\x6d\x73'] = _0x38460e[_0x2e4491(0x173)](function (_0x303577) {
                var _0x2f5a15 = _0x2e4491;
                if (_0x2f5a15(0x187) === _0x2f5a15(0x187))
                    return _0x303577 != null ? [
                        ANET['\x55\x74\x69\x6c\x73']['\x75\x6e\x70\x61\x63\x6b\x49\x74\x65\x6d\x46\x72\x6f\x6d\x4e\x65\x74\x77\x6f\x72\x6b'](_0x303577[0x0]),
                        _0x303577[0x1]
                    ] : _0x2f5a15(0x1cb) !== '\x73\x68\x49\x48\x76' ? this['\x73\x65\x6e\x64\x52\x65\x66\x75\x73\x65\x54\x72\x61\x64\x65\x52\x65\x71\x75\x65\x73\x74'](this['\x5f\x68\x69\x73\x49\x64']) : null;
                else {
                    '\x54\x52\x41\x44\x45\x20\x52\x45\x46\x55\x53\x45\x20\x49\x4e'['\x70']();
                    if (_0x4ca9a8 !== _0x313265[_0x2f5a15(0x1c0)]())
                        return;
                    return _0x3b4c0a[_0x2f5a15(0x1ba)]();
                }
            });
        } catch (_0x308b8e) {
            return _0x2fe8ae = _0x308b8e, ANET['\x77'](_0x2fe8ae);
        }
    }, _0x1c6c95[_0xa56598(0x181)] = function (_0x44c2bc) {
        var _0x3f4c09 = _0xa56598, _0x157188, _0x238423, _0x4a4335;
        try {
            '\x54\x52\x41\x44\x45\x20\x53\x54\x41\x54\x55\x53\x20\x49\x4e'['\x70']();
            if (!ANTradeManager[_0x3f4c09(0x1ab)]()) {
                if (_0x3f4c09(0x17a) === '\x63\x55\x69\x4a\x57')
                    return;
                else
                    return [
                        _0x4ca04f[_0x3f4c09(0x18c)][_0x3f4c09(0x1a9)](_0x2709eb[0x0]),
                        _0x3e5f4c[0x1]
                    ];
            }
            ({
                fromWho: _0x238423,
                status: _0x4a4335
            } = _0x44c2bc);
            if (_0x238423 !== ANTradeManager[_0x3f4c09(0x1bb)])
                return;
            return $gameTemp[_0x3f4c09(0x1b7)] = _0x4a4335;
        } catch (_0x4985b3) {
            return _0x157188 = _0x4985b3, ANET['\x77'](_0x157188);
        }
    }, _0x1c6c95[_0xa56598(0x185)] = function (_0x23450c) {
        var _0x491f93 = _0xa56598;
        if (_0x491f93(0x1b1) !== '\x47\x4a\x4d\x6b\x62')
            return null;
        else {
            var _0x939564;
            try {
                if (_0x491f93(0x154) !== _0x491f93(0x154))
                    return;
                else {
                    '\x54\x52\x41\x44\x45\x20\x43\x4f\x4d\x50\x4c\x45\x54\x45\x20\x49\x4e'['\x70']();
                    if (!ANTradeManager[_0x491f93(0x1ab)]()) {
                        if (_0x491f93(0x1b2) !== _0x491f93(0x1b2))
                            _0x3d3ea8[_0x491f93(0x134)][_0x47583d] = [
                                _0x2c7234,
                                _0x96a442
                            ];
                        else
                            return;
                    }
                    if (_0x23450c !== ANTradeManager[_0x491f93(0x1bb)])
                        return;
                    if ($gameTemp[_0x491f93(0x1b7)] !== !![])
                        return;
                    return ANTradeManager[_0x491f93(0x1bf)]();
                }
            } catch (_0x4d7fbb) {
                if (_0x491f93(0x153) === _0x491f93(0x153))
                    return _0x939564 = _0x4d7fbb, ANET['\x77'](_0x939564);
                else
                    _0x315341[_0x491f93(0x1d2)](_0x4c21d2[0x1]);
            }
        }
    };
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ANET Common Utils Methods.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Набор вспомогательных функций для ANET
KDCore.Utils.ANET = {};

//?shortcut
ANET.Utils = KDCore.Utils.ANET;

(function() {
  var _;
  //@[DEFINES]
  _ = KDCore.Utils.ANET;
  // * Проверка, что комментарий является NET командой
  _.isNetCommentCommand = function(commentLine) {
    if (!String.any(commentLine)) {
      return false;
    }
    // * Все команды начинаются с буквы заглавной N, затем пробел и команда
    return /N\s.+/.exec(commentLine);
  };
  _.getNetCommentCommand = function(commentLine) {
    var command;
    if (!this.isNetCommentCommand(commentLine)) {
      return "";
    }
    // * Возвращает первое слово после N
    command = /N\s(!*\w+)/.exec(commentLine)[1];
    if (!String.any(command)) {
      return "";
    }
    return command;
  };
  //TODO: Можно все все данные для сети через метод аналогичный передавать для безопасности
  // * Сохраняет Battler в определённый формат для отправки по сети
  _.packBattlerForNetwork = function(battler) {
    if (battler instanceof Game_Actor) {
      return {
        type: "actor",
        id: battler.actorId()
      };
    } else {
      return {
        type: "enemy",
        id: battler.index()
      };
    }
  };
  // * Возвращяет конкретный Battler из данных сети
  _.unpackBattlerFromNetwork = function(data) {
    if (data.type === "actor") {
      return $gameActors.actor(data.id);
    } else {
      return $gameTroop.members()[data.id];
    }
  };
  // * Сохраняем предмет в определённый формат для оптавки по сети (используется в торговле)
  _.packItemForNetwork = function(item) {
    var e, id, typeId;
    try {
      if (item == null) {
        return null;
      }
      id = item.id;
      if (id === ANTradeManager.TradeGoldItemId) {
        typeId = 0;
      } else {
        typeId = KDCore.Utils.getItemTypeId(item);
      }
      return {id, typeId};
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  // * Возвращяет конкретный Item из данных сети
  _.unpackItemFromNetwork = function(data) {
    var e, id, typeId;
    try {
      if (data == null) {
        return null;
      }
      ({id, typeId} = data);
      if (id === ANTradeManager.TradeGoldItemId) {
        return {id};
      } else {
        return KDCore.Utils.getItemByType(id, typeId);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  _.getBattlerSprite = function(battler) {
    var container, e, sprite, sprites;
    if (!KDCore.Utils.isSceneBattle()) {
      return null;
    }
    try {
      container = SceneManager._scene._spriteset;
      sprites = container._enemySprites.concat(container._actorSprites);
      sprite = sprites.find(function(spr) {
        return (spr != null) && spr._battler === battler;
      });
      return sprite;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return sprite;
  };
  _.isMyActorInValidListToStart = function(list, isInclude) {
    var e;
    try {
      list = JsonEx.parse(list).map(function(i) {
        return parseInt(i);
      });
      return list.contains(ANGameManager.myActorId()) === isInclude;
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  _.isPassEventFilterOptions = function(options) {
    var e;
    try {
      switch (options.whoSelector) {
        case "All":
          return true;
        case "Master":
          return ANNetwork.isMasterClient();
        case "Master Except":
          return !ANNetwork.isMasterClient();
        case "Actor List":
          return ANET.Utils.isMyActorInValidListToStart(options.actorList, true);
        case "Actor List Except":
          return ANET.Utils.isMyActorInValidListToStart(options.actorList, false);
        case "Me Except":
          // * Если команда пришла с сервера, то явно эта проверка не касается этого клиента
          // * В опциях запуска события - не используется
          return true;
        default:
          return false;
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  };
  // * Событие запущенно каким-либо игроком?
  _.isEventStartedByAny = function(eventId) {
    var e;
    try {
      return ANGameManager.anotherPlayersOnMap().some(function(p) {
        return NetPlayerDataWrapper.isOnEvent(p, eventId);
      });
    } catch (error) {
      e = error;
      ANET.w(e);
      // * В случае ошибки безопаснее вернуть true
      return true;
    }
  };
  // * Собрать опции для команды события по параметрам из комменатрия (аналог опций из команды плагина)
  // * Список должен быть строкой! [1, 2, 3]
  _.buildEventCommandOptions = function(selector, list, scope, mode) {
    return {
      "actorList": list,
      "executeMode": mode,
      "scope": scope,
      "whoSelector": selector
    };
  };
  // * Конвертировать из команды комменатрия в параметр команды плагина
  _.convertEventCommandScopeAndMode = function(commentLine) {
    var mode, scope;
    // * SCOPE
    if (commentLine.contains("world")) {
      scope = "All world";
    } else {
      scope = "Same map";
    }
    // * MODE
    if (commentLine.contains("virtual")) {
      mode = "Virtual";
    } else if (commentLine.contains("common")) {
      mode = "Common Event";
    } else {
      mode = "Auto";
    }
    return {scope, mode};
  };
  // * Изъять список персонажей из комментария
  // * Формат выходной [1, 2, 3....]
  _.extractActorsListFromComment = function(commentLine) {
    var list, regex, resultList;
    regex = /forActors\s+([\d,\s*]*)/gm;
    resultList = regex.exec(commentLine);
    if (resultList == null) {
      return "[]";
    }
    if (resultList[1] == null) {
      return "[]";
    }
    list = "[" + resultList[1] + "]";
    return list;
  };
  _.parseEventStartOptionsFromCommentLine = function(commentLine) {
    var e, nStartOptions;
    try {
      // * Стандартный набор
      nStartOptions = {
        lockMode: "false",
        sharedMode: "No",
        whoSelector: "All",
        actorList: "[]"
      };
      if (commentLine.contains("lock")) {
        nStartOptions.lockMode = "true";
      }
      if (commentLine.contains("shared")) {
        nStartOptions.sharedMode = "Strict";
        // * Только если есть флаг sharedMode
        if (commentLine.contains("optional")) {
          nStartOptions.sharedMode = "Optional";
        }
      }
      if (commentLine.contains("master")) {
        if (commentLine.contains("!")) {
          nStartOptions.whoSelector = "Master Except";
        } else {
          nStartOptions.whoSelector = "Master";
        }
      } else if (commentLine.contains("forActors")) {
        if (commentLine.contains("!")) {
          nStartOptions.whoSelector = "Actor List Except";
        } else {
          nStartOptions.whoSelector = "Actor List";
        }
        nStartOptions.actorList = ANET.Utils.extractActorsListFromComment(commentLine);
      }
      return nStartOptions;
    } catch (error) {
      e = error;
      ANET.w(e);
      return null;
    }
  };
  _.generateSaveUniqueId = function() {
    var savefileId, versionId;
    versionId = ANET.VD.getGameVersion();
    savefileId = versionId + "" + Math.randomInt(versionId);
    // * Вероятность крайне крайне мала, но нельзя чтобы были повторы
    if (DataManager.nIsHaveNetworkSaveWithId(savefileId)) {
      return this.generateSaveUniqueId();
    } else {
      return savefileId;
    }
  };
  // * Текущая комната - загрузка сохранённой игры?
  _.isLoadGameRoom = function() {
    if (!ANNetwork.isConnected()) {
      return false;
    }
    if (ANNetwork.room == null) {
      return false;
    }
    return NetRoomDataWrapper.isLoadGameRoom(ANNetwork.room);
  };
  // * Текущая комната - уже запущенная игра
  _.isStartedRoom = function() {
    if (!ANNetwork.isConnected()) {
      return false;
    }
    if (ANNetwork.room == null) {
      return false;
    }
    return NetRoomDataWrapper.isStartedGameRoom(ANNetwork.room);
  };
  // * Построить Chat Message
  _.buildChatMessage = function(channelId, actorId, message) {
    return {
      channelId: channelId,
      actorId: actorId,
      text: message,
      mapId: $gameMap.mapId()
    };
  };
  _.getEmotionCodeFromText = function(text) {
    if (!text.contains(":")) {
      return 0;
    }
    if (text.contains(":!")) {
      return 1;
    }
    if (text.contains(":?")) {
      return 2;
    }
    if (text.contains(":song")) {
      return 3;
    }
    if (text.contains(":love")) {
      return 4;
    }
    if (text.contains(":angry")) {
      return 5;
    }
    if (text.contains(":drop")) {
      return 6;
    }
    if (text.contains(":conf")) {
      return 7;
    }
    if (text.contains(":...")) {
      return 8;
    }
    if (text.contains(":idea")) {
      return 9;
    }
    if (text.contains(":zzz")) {
      return 10;
    }
    return 0;
  };
})();

// ■ END ANET Common Utils Methods.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__displayStartMessages, ALIAS__endBattle, ALIAS__processEscape, ALIAS__selectNextActor, ALIAS__selectPreviousActor, ALIAS__setup, ALIAS__update, _;
  //@[DEFINES]
  _ = BattleManager;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function() {
    // * Если флаг что необходима Map Encounter битва
    if ($gameTemp.nNextBattleIsEncounter === true) {
      ANBattleManager.executeMapEncounterBattle(...arguments);
      // * Снимаем флаг, чтобы не мешал другим битвам
      $gameTemp.nNextBattleIsEncounter = false;
    }
    ALIAS__setup.call(this, ...arguments);
    if (ANNetwork.isConnected()) {
      if (!ANBattleManager.isBattleRegistred()) {
        // * Только если данные боя не установлены, но проверка сетевой битвы
        this.nSetupNetworkBattle();
      }
    }
  };
  //@[ALIAS]
  ALIAS__endBattle = _.endBattle;
  _.endBattle = function(result) {
    ALIAS__endBattle.call(this, result);
    if (ANNetwork.isConnected()) {
      // * Убрать флаг сетевой битвы
      this.nSetNetworkBattle(null);
    }
  };
  //@[ALIAS]
  ALIAS__selectNextActor = _.selectNextActor;
  _.selectNextActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectNextActorOnClient();
    } else {
      ALIAS__selectNextActor.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__selectPreviousActor = _.selectPreviousActor;
  _.selectPreviousActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectPreviousActorOnClient();
    } else {
      ALIAS__selectPreviousActor.call(this);
    }
  };
  //@[ALIAS]
  // * В сетевом режиме Update вызывается только на мастере боя!
  ALIAS__update = _.update;
  _.update = function(activeTime) {
    ALIAS__update.call(this, activeTime);
    if (!ANNetwork.isConnected()) {
      return;
    }
    this.nUpdateNetwork();
  };
  //TEMP
  //TODO: Временно отключено начальное сообщение в бою
  //@[ALIAS]
  ALIAS__displayStartMessages = _.displayStartMessages;
  _.displayStartMessages = function() {
    if (ANNetwork.isConnected()) {

    } else {
      // * EMPTY
      return ALIAS__displayStartMessages.call(this);
    }
  };
  
  //TEMP
  //TODO: Если шанс побега не сработал, будет баг
  // * Временно шанс побега 100%
  //@[ALIAS]
  ALIAS__processEscape = _.processEscape;
  _.processEscape = function() {
    if (ANNetwork.isConnected()) {
      this._escapeRatio = 101;
    }
    return ALIAS__processEscape.call(this);
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeActor, ALIAS__update, _;
  //@[DEFINES]
  _ = BattleManager;
  if (KDCore.isMZ()) {
    return;
  }
  // * Заместо selectNextActor (нету в MV такой команды)
  //@[ALIAS]
  ALIAS__changeActor = _.changeActor;
  _.changeActor = function() {
    if (ANNetwork.isConnected() && !ANGameManager.isBattleMaster()) {
      this.nSelectNextActorOnClient();
      $gameTemp._isBattleSceneShouldBeRefreshed = true;
    } else {
      ALIAS__changeActor.call(this, ...arguments);
    }
  };
  _.myNetworkActorIndex = function() {
    return $gameParty.members().indexOf($gameParty.leader());
  };
  
  // * В MV логика боя отличается от MZ, не происходит многих автоматических обновлений
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    if (this.__oldPhase !== this._phase) {
      this.__oldPhase = this._phase;
      $gameTemp._isBattleSceneShouldBeRefreshed = true;
      $gameTemp.requestBattleRefresh();
    }
    ALIAS__update.call(this);
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ BattleManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = BattleManager;
  _.nSetNetworkBattle = function(netBattleId) {
    this.netBattleId = netBattleId;
  };
  _.nIsNetworkBattle = function() {
    return this.netBattleId != null;
  };
  _.nSetupNetworkBattle = function() {
    var battleData;
    if (this.nIsNetworkBattle()) {
      battleData = {
        battleId: this.netBattleId,
        options: [$gameTroop._troopId, this._canEscape, this._canLose]
      };
      ANBattleManager.registerOnBattle(battleData);
    } else {
      ANBattleManager.registerOnLocalBattle();
    }
  };
  _.nSelectNextActorOnClient = function() {
    // * Если данный флаг == true, то игрок переключает меню ввод с группы на персонажа своего
    // * (Это если нажать Escape и появилось Party Commands, а затем снова на Fight)
    if (this._isShouldWaitMyNetworkAction === true) {
      // * Выбираем только своего персонажа снова (а не первого)
      this._currentActor = $gameParty.leader();
      if (KDCore.isMV()) {
        this._actorIndex = this.myNetworkActorIndex();
        $gameTemp._isBattleSceneShouldBeRefreshed = true;
      }
      return this._isShouldWaitMyNetworkAction = false;
    } else {
      ANBattleManager.battleInputActionDone();
      return this._inputting = false;
    }
  };
  
  // * В стандартном тактическом режиме боя если нажать "отмена" (назад)
  // * То мы можем поменять выбор предыдущего персонажа, но в сети,
  // * мы не можем это сделать, поэтому просто "выходим" на меню группы
  _.nSelectPreviousActorOnClient = function() {
    return this._currentActor = null;
  };
  _.nUpdateNetwork = function() {
    ANBattleManager.updateInputChange();
    $gameTroop.nUpdateBattleDataSync();
    $gameParty.nUpdateBattleDataSync();
  };
  _.nClearClientInput = function() {
    this._inputting = false;
    this._currentActor = null;
    this._isShouldWaitMyNetworkAction = true;
    if (KDCore.isMV()) {
      this.startTurn();
    }
  };
  _.nSetCurrentClientInput = function() {
    $gameParty.makeActions(); // * Чтобы был inputting action
    this._currentActor = $gameParty.leader();
    if (KDCore.isMV()) {
      this._actorIndex = this.myNetworkActorIndex();
    }
    // * Готов к отправке действия сразу (по умолчанию)
    // * Команда 'Fight' делает false (см nSelectNextActorOnClient)
    return this._isShouldWaitMyNetworkAction = false;
  };
  _.nRefreshSharedBattleState = function() {
    var e;
    try {
      if (SceneManager._scene.nRefreshSharedBattle != null) {
        SceneManager._scene.nRefreshSharedBattle();
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Если во время боя был удалён (вышел) сетевой игрок
  // * Без этого метода, игра переключает (или зависат) ввод другого игрока (который вышел)
  _.nSafeRemoveActor = function() {
    var e;
    if (this._phase !== "input") {
      return;
    }
    try {
      if (this._currentActor !== $gameParty.leader()) {
        return this.selectNextActor();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  // * Можно ли клиенту (не BattleMaster) самостоятельно обновлять BattleManager
  _.nIsLocalForceUpdatePhase = function() {
    return this.isAborting() || this.isBattleEnd();
  };
})();

// ■ END BattleManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ConfigManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__applyData, ALIAS__makeData, _;
  //@[DEFINES]
  _ = ConfigManager;
  // * Сохранение и загрузка сетевого имени игрока

  //@[ALIAS]
  ALIAS__makeData = _.makeData;
  _.makeData = function() {
    var config;
    config = ALIAS__makeData.call(this);
    config.netPlayerName = this.netPlayerName;
    return config;
  };
  
  //@[ALIAS]
  ALIAS__applyData = _.applyData;
  _.applyData = function(config) {
    ALIAS__applyData.call(this, config);
    this.netPlayerName = config.netPlayerName;
  };
})();

// ■ END ConfigManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__makeSavefileInfo, _;
  //@[DEFINES]
  _ = DataManager;
  //@[ALIAS]
  ALIAS__makeSavefileInfo = _.makeSavefileInfo;
  _.makeSavefileInfo = function() {
    var info;
    info = ALIAS__makeSavefileInfo.call(this);
    if (ANNetwork.isConnected() && ($gameTemp.nUniqueSaveID != null)) {
      this.nWriteNetworkSaveFileInfo(info);
      // * Сбросим флаг
      $gameTemp.nUniqueSaveID = null;
    }
    return info;
  };
})();

// ■ END DataManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ DataManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = DataManager;
  // * Записать информацию о сетевом сохранении (что в этом файле сетевое сохранение)
  _.nWriteNetworkSaveFileInfo = function(info) {
    // * Для определения подходящих файлов у других клиентов
    info.nUniqueSaveID = $gameTemp.nUniqueSaveID;
    // * Для определения своего персонажа
    info.nMyActorId = ANGameManager.myActorId();
  };
  
  // * Является ли файл сохранения сетевым (созданным по сети)
  _.nIsNetworkSaveFile = function(savefileId) {
    var info;
    info = this.nGetInfoForSavefileId(savefileId);
    if ((info != null) && (info.nUniqueSaveID != null) && (info.nMyActorId != null)) {
      return true;
    }
    return false;
  };
  // * Есть ли файл сетевого сохранения с уникальным ID
  _.nIsHaveNetworkSaveWithId = function(uniqueSaveID) {
    return this.nGetNetworkSaveInfoWithId(uniqueSaveID) != null;
  };
  // * Получить данные сетвого сохранения по уникальному ID
  _.nGetNetworkSaveInfoWithId = function(uniqueSaveID) {
    var file, i, index, len, ref;
    ref = this.nGetGlobalInfo();
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      file = ref[index];
      if (file == null) {
        continue;
      }
      if (this.nIsNetworkSaveFile(index)) {
        if (file.nUniqueSaveID === uniqueSaveID) {
          return file;
        }
      }
    }
    return null;
  };
  // * Получить индекс файла сохранения по уникальнмоу ID
  // * Это нужно для загрузки правильного файла
  _.nGetNetworkSaveFileIdByUniqueId = function(uniqueSaveID) {
    var file, i, index, len, ref;
    ref = this.nGetGlobalInfo();
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      file = ref[index];
      if (file == null) {
        continue;
      }
      if (this.nIsNetworkSaveFile(index) && file.nUniqueSaveID === uniqueSaveID) {
        return index;
      }
    }
    return -1;
  };
  // * Методы различаются в MV и MZ
  _.nGetGlobalInfo = function() {
    if (KDCore.isMZ()) {
      return this._globalInfo;
    } else {
      return this.loadGlobalInfo();
    }
  };
  // * Методы различаются в MV и MZ
  _.nGetInfoForSavefileId = function(savefileId) {
    var info;
    if (KDCore.isMZ()) {
      info = DataManager.savefileInfo(savefileId);
    } else {
      info = DataManager.loadSavefileInfo(savefileId);
    }
    return info;
  };
})();

// ■ END DataManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ FWindow_InGameModalDialog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var FWindow_InGameModalDialog;

FWindow_InGameModalDialog = class FWindow_InGameModalDialog extends KDCore.FloatingWindow {
  constructor() {
    super(...arguments);
  }

  _init() {
    this.parameters = {
      draggable: false,
      closeButton: false,
      moveToCenter: true,
      alwaysOnTop: true,
      header: false
    };
    KDCore.FloatingWindow.prototype._init.call(this);
  }

  //@[DUMMY]
  okHandler() {}

  //@[DUMMY]
  cancelHandler() {}

  // * Закрыть и при этом "нет" (отмена)
  forceCancel() {
    this.close();
    this.cancelHandler();
  }

  //%[Для запроса торговли]
  openForTradeRequest(initiatorName) {
    KDCore.Utils.playSE(ANET.PP.getModalWindowOpenSE());
    //%[I] Может добавить некий Shake эффект при открытии для привлечения внимания?
    //TODO: Параметры (текст и разные настройки)
    this.drawDialogMessage(ANET.PP.getTradeModalWindowText(), initiatorName);
    this.okHandler = function() {
      return ANTradeManager.acceptTradeInRequest();
    };
    this.cancelHandler = function() {
      return ANTradeManager.refuseTradeRequest();
    };
    this.setTimer(5); // * в секундах
    this.open();
  }

  // * Text (formatted %), arguments...
  drawDialogMessage() {
    this.textSpr.drawTextWithFormat(...arguments);
  }

  setTimer(seconds) {
    if (seconds <= 0) {
      this.timeGauge.visible = false;
      this._timerThread = null;
    } else {
      this.timeGauge.visible = true;
      this.timeGauge.draw(1);
      this._allTime = seconds * 60;
      this._timeLeft = this._allTime;
      this._timerThread = new KDCore.TimedUpdate(1, this._tick.bind(this));
    }
  }

  _moveToStartPosition() {
    super._moveToStartPosition();
    return this.y = 0;
  }

  update() {
    var ref;
    super.update();
    if (this.isOpen()) {
      if ((ref = this._timerThread) != null) {
        ref.update();
      }
      this._updateHotkeys();
    }
  }

  close() {
    super.close();
    return this._timerThread = null;
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = FWindow_InGameModalDialog.prototype;
  _._tick = function() {
    this._timeLeft--;
    this.timeGauge.draw(this._timeLeft / this._allTime);
    if (this._timeLeft <= 0) {
      return this._onBtnNoClick();
    }
  };
  _._createCustomElements = function() {
    this._createDialogText();
    this._createDialogButtons();
    return this._createTimeGauge();
  };
  _._createDialogText = function() {
    var p;
    p = {
      visible: true,
      size: {
        w: this.width,
        h: 60
      },
      font: {
        face: null,
        size: 20,
        italic: false
      },
      margins: {
        x: 0,
        y: 0
      },
      forceCentered: true,
      singleLine: true
    };
    this.textSpr = new KDCore.UI.Sprite_UITextExt(p);
    return this.addContent(this.textSpr);
  };
  _._createDialogButtons = function() {
    var margin;
    margin = 16;
    this.btnYes = new KDCore.ButtonM("nzModalYesButton", false, "Alpha");
    this.btnYes.addClickHandler(this._onBtnYesClick.bind(this));
    this.btnYes.move(margin, 62);
    this.addContent(this.btnYes);
    this.btnNo = new KDCore.ButtonM("nzModalNoButton", false, "Alpha");
    this.btnNo.addClickHandler(this._onBtnNoClick.bind(this));
    this.btnNo.move(this.width - 120 - margin, this.btnYes.y);
    this.addContent(this.btnNo);
  };
  _._onBtnYesClick = function() {
    this._onBtnClick();
    return this.okHandler();
  };
  _._onBtnClick = function() {
    SoundManager.playCursor();
    return this.close();
  };
  _._onBtnNoClick = function() {
    this._onBtnClick();
    return this.cancelHandler();
  };
  _._createTimeGauge = function() {
    var p;
    p = {
      visible: true,
      size: {
        w: this.width - 4,
        h: 4
      },
      fill: "#eb9534",
      foreground: "",
      mask: "",
      backColor: "#000000".toCss(),
      backOpacity: 255,
      vertical: false
    };
    this.timeGauge = new KDCore.UI.Sprite_UIColorGauge(p);
    this.timeGauge.x = 2;
    this.timeGauge.y = this.height - p.size.h - 2;
    return this.addContent(this.timeGauge);
  };
  _._updateHotkeys = function() {
    if (Input.isTriggered(ANET.PP.getModalWindowYesHotkey())) {
      this._onBtnYesClick();
    } else if (Input.isTriggered(ANET.PP.getModalWindowNoHotKey())) {
      this._onBtnNoClick();
    }
  };
})();

// ■ END FWindow_InGameModalDialog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Action.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__apply, _;
  //@[DEFINES]
  _ = Game_Action.prototype;
  //@[ALIAS]
  ALIAS__apply = _.apply;
  _.apply = function(target) {
    if (ANNetwork.isConnected()) {
      if (this.nIsApplyItemFromMenu(target)) {
        this.nSendNetworkActionFromMenu(target);
        return;
      }
    }
    return ALIAS__apply.call(this, ...arguments);
  };
})();

// ■ END Game_Action.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Action.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  // * Глобальный метод класса Game_Action
  Game_Action.NApplyFromMenuFromNetwork = function(data) {
    var action, e, target;
    try {
      if (data == null) {
        return;
      }
      if (data.target == null) {
        return;
      }
      target = ANET.Utils.unpackBattlerFromNetwork(data.target);
      // * Только для своего персонажа, т.к. Observer
      if (target !== $gameParty.leader()) {
        return;
      }
      // * Тут используется $gameParty.leader() как заглушка, т.к. должен быть Subject
      action = new Game_Action($gameParty.leader(), true);
      action.setFromNetwork(data.action);
      return action.apply($gameParty.leader());
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  //@[DEFINES]
  _ = Game_Action.prototype;
  // * Задать действие из сети (т.е. из действия другого игрока)
  _.setFromNetwork = function(action) {
    var f;
    this.clear();
    this._nParseActionItem(action._item);
    for (f in action) {
      if (f === "_item") {
        // * пропускаем Game_Item, он уже сконвертирован
        continue;
      }
      this[f] = action[f];
    }
  };
  // * Класс Game_Item отдельно
  _._nParseActionItem = function(item) {
    var f;
    if (item == null) {
      return;
    }
    for (f in item) {
      this._item[f] = item[f];
    }
  };
  // * Применяется предмет из меню?
  _.nIsApplyItemFromMenu = function(target) {
    return !$gameParty.inBattle() && target !== $gameParty.leader() && ($gameTemp.netApplyItemUser != null);
  };
  _.nSendNetworkActionFromMenu = function(target) {
    var e;
    try {
      return ANGameManager.sendUseItemFromMenuAction(this, target);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END Game_Action.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_ActionResult.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, _;
  //@[DEFINES]
  _ = Game_ActionResult.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this.nCreateObserver();
    }
  };
})();

// ■ END Game_ActionResult.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_ActionResult.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_ActionResult.prototype;
  _.nCreateObserver = function() {
    this.netDataObserver = new DataObserver();
    this.nFillObserver();
    // * Создаём после nFillObserver, чтобы не было в списке полей Observer
    this.isDataObserverHaveChanges = false;
    this.netDataObserver.refreshAll(this);
  };
  // * Тут применён автоматический сбор всех полей
  _.nFillObserver = function() {
    var entries, fields, i, len, value;
    fields = [];
    entries = Object.entries(this);
    for (i = 0, len = entries.length; i < len; i++) {
      value = entries[i];
      if (value[0] === 'netDataObserver') {
        // * Так как сбор полей идёт после создания netDataObserver, то его надо исключить
        continue;
      }
      fields.push(value[0]);
    }
    this.netDataObserver.addFields(this, fields);
  };
  _.nUpdateObserver = function() {
    if (this.netDataObserver == null) {
      return;
    }
    this.netDataObserver.check(this);
    if (this.netDataObserver.isDataChanged()) {
      this.nDataObserverHaveChanges();
      this.netDataObserver.refreshAll(this);
    }
  };
  // * Тут мы напрямую не отправляем данные, так как мы не знаем кому (Battler) мы принадлежим
  // * Ставится флаг в TRUE, и Battler сам отправить данные
  _.nDataObserverHaveChanges = function() {
    return this.isDataObserverHaveChanges = true;
  };
  _.getObserverDataForNetwork = function() {
    this.isDataObserverHaveChanges = false;
    return this.netDataObserver.getDataForNetwork(this);
  };
  _.applyObserverData = function(data) {
    if (this.netDataObserver == null) {
      return;
    }
    this.netDataObserver.setDataFromNetwork(this, data);
  };
})();

// ■ END Game_ActionResult.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__refresh, ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Actor.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(actorId) {
    ALIAS__setup.call(this, actorId);
    // * Чтобы refreshNetwork не вызывался когда ещё Actor не создан
    if (ANNetwork.isConnected()) {
      this.refreshNetworkDummy = this.refreshNetwork;
      if (ANET.PP.playerActorNameType() > 0) {
        this.nSetupPlayerActorName();
      }
    }
  };
  //@[ALIAS]
  ALIAS__refresh = _.refresh;
  _.refresh = function() {
    ALIAS__refresh.call(this);
    return this.refreshNetworkDummy();
  };
})();

// ■ END Game_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Actor.prototype;
  // * Данный персонаж - мой сетевой персонаж (текущего игрока)
  _.isMyNetworkActor = function() {
    if ($gameTemp._nLocalActorMode === true) {
      // * Тут сделано разделение специально, чтобы уменьшить проблемы с LocalActor
      // * Суть в том, что при LocalActor могут отправляться данные всех персонажей,
      // * так как проверка через leader() обращается в Game_Actors, а ID всегда на
      // * своего персонажа (стоит Instance Mode, в этом ещё дело)
      // * Пока отключил передачу СВОИХ данных в режиме Local
      return false;
    }
    if ($gameParty.inBattle()) {
      return this.isMyNetworkBattler();
    } else {
      return this.actorId() === ANGameManager.myActorId();
    }
  };
  _.updateDataObserver = function() {
    // * Если в бою, то вся синхронизация идёт от мастера битвы
    if ($gameParty.inBattle()) {
      if (ANGameManager.isBattleMaster()) {
        this._updateDataObserver();
      } else {

      }
    } else {
      if (this.isMyNetworkActor()) {
        // * Если НЕ в бою, то проверка observer только свого персонажа
        // * Только приём данных
        this._updateDataObserver();
      }
    }
  };
  // * Отправка Observer только своего персонажа
  _.dataObserverHaveChanges = function() {
    // * Если в бою, то вся синхронизация идёт от мастера битвы
    if ($gameParty.inBattle()) {
      if (ANGameManager.isBattleMaster()) {
        this.requestNetBattleDataPush();
        // * Если только я в бою, то отправляю обычные данные
        // * Чтобы другие игроки видели HP и MP
        // TODO: Опция?
        if ($gameParty.isOneBattler()) {
          ANSyncDataManager.sendActorObserver();
        }
      }
    } else {
      // * Если не в бою, то только свои данные
      if (this.isMyNetworkActor()) {
        ANSyncDataManager.sendActorObserver();
      }
    }
  };
  
  //TODO: Может просто все все свойства передавать?
  // собрать их автоматически
  _._fillNetworkObserver = function() {
    Game_Battler.prototype._fillNetworkObserver.call(this);
    this.netDataObserver.addFields(this, ANET.System.ActorObserverFields);
  };
  //?{DYNAMIC}
  _.refreshNetworkDummy = function() {}; // * EMPTY
  _.refreshNetwork = function() {
    // * Тут нельзя делать проверку на текущих Actor или нет, так как вызывает Stack Overflow
    // * Метод refresh вызывается ещё до того как Actor создан (класс)
    // * Принудительная отправка
    if (!$gameParty.inBattle()) {
      this.dataObserverHaveChanges();
    }
  };
  // * Установить заместо имени (никнейма) персонажа имя сетевого игрока
  _.nSetupPlayerActorName = function() {
    var playerData;
    // * Устанавливаем только своему персонажу, так как myPlayerData есть в начале игры
    // * Данные других персонажей прийдут сами с Observer сразу
    if (this.actorId() !== ANGameManager.myActorId()) {
      return;
    }
    playerData = ANGameManager.myPlayerData();
    if (playerData == null) {
      return;
    }
    if (ANET.PP.playerActorNameType() === 1) {
      this._name = playerData.name;
    } else if (ANET.PP.playerActorNameType() === 2) {
      this._nickname = playerData.name;
    }
  };
  // * Данные для Nameplate
  // * Данный метод вызывается из Game_Character (Game_Player), а не напрямую
  _.nGetNameplate = function() {
    var e, name, playerData;
    try {
      if (ANET.PP.isShowActorNameInNameplate()) {
        name = this.name();
      } else {
        playerData = ANGameManager.getPlayerDataByActorId(this.actorId());
        if (playerData != null) {
          name = playerData.name;
        } else {
          name = this.name();
        }
      }
      return {
        text: name,
        style: $gameSystem.nGetNameplateStyleForActor(this.actorId())
      };
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return null;
    }
  };
})();

// ■ END Game_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actors.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__actor, _;
  //@[DEFINES]
  _ = Game_Actors.prototype;
  //TODO: Есть проблемы у этого способа! Надо больше тестов
  //TODO: Добавить дополнительные проверки, так как слишком опасно
  //@[ALIAS]
  ALIAS__actor = _.actor;
  _.actor = function(actorId) {
    // * Возвращять текущего персонажа для выборки в событии
    // * Выборка LOCAL ACTOR работает только если указан Actor с ID = 1 (ОТМЕНА!)
    //TODO: Может это и не надо, но сделал для меньших проблем, так как метод опасно переопределять
    //TODO: Временно убрал выборку только 1 актора
    if (ANNetwork.isConnected() && $gameTemp._nLocalActorMode === true) { //&& actorId == 1
      if ($gameTemp._nNetworkActorPickRequest === true) {
        $gameTemp._nNetworkActorPickRequest = false;
        return ALIAS__actor.call(this, actorId);
      } else {
        return this._data[ANGameManager.myActorId()];
      }
    } else {
      return ALIAS__actor.call(this, actorId);
    }
  };
})();

// ■ END Game_Actors.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__onBattleEnd, ALIAS__onBattleStart, ALIAS__startDamagePopup, _;
  //@[DEFINES]
  _ = Game_Battler.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this.nInitializeNetwork();
    }
  };
  //@[ALIAS]
  ALIAS__onBattleStart = _.onBattleStart;
  _.onBattleStart = function() {
    if (ANNetwork.isConnected()) {
      this._nStartBattleObserver();
    }
    return ALIAS__onBattleStart.call(this, ...arguments);
  };
  
  //@[ALIAS]
  ALIAS__onBattleEnd = _.onBattleEnd;
  _.onBattleEnd = function() {
    ALIAS__onBattleEnd.call(this);
    if (ANNetwork.isConnected()) {
      this._nEndBattleObserver();
    }
  };
  // * Отдельная реализация, чтобы передавать battleResult
  //@[ALIAS]
  ALIAS__startDamagePopup = _.startDamagePopup;
  _.startDamagePopup = function() {
    if (ANNetwork.isConnected() && ANGameManager.isBattleMaster() && !$gameParty.isOneBattler()) {
      ANSyncDataManager.sendBattlerResultObserver(this);
      ANBattleManager.callBattleMethod(this, "startDamagePopup", null);
    }
    return ALIAS__startDamagePopup.call(this);
  };
})();

// ■ END Game_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Battler.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Battler.prototype;
  _.nInitializeNetwork = function() {
    this._nRegisterSyncBattleMethod("requestEffect");
    this._nRegisterSyncBattleMethod("requestMotion");
    this._nRegisterSyncBattleMethod("startWeaponAnimation");
    this._nRegisterSyncBattleMethod("setActionState");
    // * Sound effects
    this._nRegisterSyncBattleMethod("performDamage");
    this._nRegisterSyncBattleMethod("performCollapse");
    this._nRegisterSyncBattleMethod("performMiss");
    this._nRegisterSyncBattleMethod("performRecovery");
    this._nRegisterSyncBattleMethod("performEvasion");
    this._nRegisterSyncBattleMethod("performMagicEvasion");
    this._nRegisterSyncBattleMethod("performCounter");
    this._nRegisterSyncBattleMethod("performReflection");
  };
  // * Данный баттлер является моим (этого сетевого игрока)
  _.isMyNetworkBattler = function() {
    if (ANNetwork.isConnected()) {
      return this === $gameParty.leader();
    } else {
      return true;
    }
  };
  // * Подписать метод на синхронизацию через сервер
  _._nRegisterSyncBattleMethod = function(methodName) {
    var alias;
    alias = this[methodName];
    this[methodName] = function() {
      if (ANNetwork.isConnected() && ANGameManager.isBattleMaster()) {
        // * В данной реализации передаётся только один аргумент, так как ... перед arguments
        ANBattleManager.callBattleMethod(this, methodName, ...arguments);
      }
      return alias.call(this, ...arguments);
    };
  };
  _.isNeedNetPushBattleData = function() {
    return this._netBattleObserverNeedToPush === true;
  };
  _.onNetBattleDataPushed = function() {
    return this._netBattleObserverNeedToPush = null;
  };
  _.requestNetBattleDataPush = function() {
    return this._netBattleObserverNeedToPush = true;
  };
  (function() {    // * Специальный Data Observer для боя
    // -----------------------------------------------------------------------
    // * Данные только для боя (эти данные передаёт только Battle Master)
    _._nStartBattleObserver = function() {
      // * Включаем Instance режим
      //@netDataObserver.setInstanteMode()
      this.netDataObserver.setCheckInterval(ANET.PP.battleDataRefreshRate());
      this._addBattleFieldsToNetowrkDataObserver();
    };
    // * Добавляем дополнительные поля в Observer
    _._addBattleFieldsToNetowrkDataObserver = function() {
      this.netDataObserver.addFields(this, ANET.System.BattlerObserverFields);
    };
    // * После битвы нет необходимости хранить observer
    return _._nEndBattleObserver = function() {
      // * Возвращаем режим проверки
      this._applyDataObserverInitialParameters();
      // * Убираем добавленные для боя поля
      this.netDataObserver.removeFields(this, ANET.System.BattlerObserverFields);
    };
  })();
})();

// ■ END Game_Battler.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_BattlerBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initMembers, ALIAS__meetsItemConditions, ALIAS__onBattleEnd, ALIAS__onBattleStart, _;
  //@[DEFINES]
  _ = Game_BattlerBase.prototype;
  //@[ALIAS]
  ALIAS__initMembers = _.initMembers;
  _.initMembers = function() {
    ALIAS__initMembers.call(this);
    return this._createNetworkObserver();
  };
  
  //@[ALIAS]
  ALIAS__onBattleStart = _.onBattleStart;
  _.onBattleStart = function() {
    ALIAS__onBattleStart.call(this);
    if (ANNetwork.isConnected()) {
      this.netDataObserver.setCheckMode();
    }
  };
  //@[ALIAS]
  ALIAS__onBattleEnd = _.onBattleEnd;
  _.onBattleEnd = function() {
    ALIAS__onBattleEnd.call(this);
    if (ANNetwork.isConnected()) {
      this.netDataObserver.setInstanteMode();
    }
  };
  //TEMP
  //TODO: Временное решение, так как нет проверки кто именно
  // * Так как вещи другого игрока нет в инвентаре мастера боя, то
  // * мы пропускаем проверку на наличие вещи в инвентаре $gameParty.hasItem(item)
  //@[ALIAS]
  ALIAS__meetsItemConditions = _.meetsItemConditions;
  _.meetsItemConditions = function(item) {
    if (ANNetwork.isConnected()) {
      return this.meetsUsableItemConditions(item);
    } else {
      return ALIAS__meetsItemConditions.call(this, item);
    }
  };
})();

// ■ END Game_BattlerBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_BattlerBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_BattlerBase.prototype;
  // * Специальное представление данных для сети
  _.packForNetwork = function() {
    return ANET.Utils.packBattlerForNetwork(this);
  };
  (function() {    // * OBSERVER
    _._createNetworkObserver = function() {
      this.netDataObserver = new DataObserver();
      this._applyDataObserverInitialParameters();
      this._fillNetworkObserver();
      return this.netDataObserver.refreshAll(this);
    };
    _._applyDataObserverInitialParameters = function() {
      // * Тут нужен Instante, чтобы данные на карте всегда были актуальны
      // * Если CheckMode, то при помощи событий можно менять параметры ХП
      // * всей группы и ХП других игроков будут отображаться не правильно
      this.netDataObserver.setInstanteMode();
      this.netDataObserver.setCheckInterval(ANET.PP.playerDataRefreshRate());
    };
    //TODO: Можно автоматически и удалять лишнее (см. Game_ActionResult)
    _._fillNetworkObserver = function() {
      this.netDataObserver.addFields(this, ["_hp", "_mp", "_tp", "_paramPlus", "_states", "_stateTurns", "_buffs", "_buffTurns"]);
    };
    //TODO: updateStateTurns и баффы не должны выполняться на фантоме (???)

    // * Этот метод должны вызывать потомки верхнего уровня, так как нету Update в этом классе
    _._updateDataObserver = function() {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.check(this);
      if (this.netDataObserver.isDataChanged()) {
        this.dataObserverHaveChanges();
        this.netDataObserver.refreshAll(this);
      }
    };
    // * Этот метод вызывается, когда изменились сихнронизируеммые данные
    _.dataObserverHaveChanges = function() {}; // * EMPTY (for childrens)
    _.getObserverDataForNetwork = function() {
      return this.netDataObserver.getDataForNetwork(this);
    };
    _.applyObserverData = function(data) {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.setDataFromNetwork(this, data);
    };
  })();
})();

// ■ END Game_BattlerBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initMembers, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  //@[ALIAS]
  ALIAS__initMembers = _.initMembers;
  _.initMembers = function() {
    ALIAS__initMembers.call(this);
    return this._createNetworkObserver();
  };
  
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (ANNetwork.isConnected()) {
      return this._updateDataObserver();
    }
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  // * Получить данные о табличке с именем персонажа
  _.nGetNameplate = function() {
    return null;
  };
  (function() {    // * OBSERVER
    _._createNetworkObserver = function() {
      this.netDataObserver = new DataObserver();
      this.netDataObserver.setCheckInterval(ANET.PP.playerDataRefreshRate());
      this._fillNetworkObserver();
      return this.netDataObserver.refreshAll(this);
    };
    //TODO: Добавить API для разработчиков плагинов вносить свои поля (и так со всем Observers)
    // * Движение передаётся отдельным методом для достижения плавности
    _._fillNetworkObserver = function() {
      return this.netDataObserver.addFields(this, ["_opacity", "_blendMode", "_walkAnime", "_stepAnime", "_directionFix", "_transparent", "_direction"]);
    };
    _._updateDataObserver = function() {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.check(this);
      if (this.netDataObserver.isDataChanged()) {
        this.dataObserverHaveChanges();
        this.netDataObserver.refreshAll(this);
      }
    };
    // * Этот метод вызывается, когда изменились сихнронизируеммые данные
    _.dataObserverHaveChanges = function() {}; // * EMPTY (for childrens)
    _.getObserverDataForNetwork = function() {
      return this.netDataObserver.getDataForNetwork(this);
    };
    _.applyObserverData = function(data) {
      if (this.netDataObserver == null) {
        return;
      }
      this.netDataObserver.setDataFromNetwork(this, data);
    };
  })();
  _.moveStraightFromServer = function(moveData) {
    // * Всегда успех, так как если нет, то данные и не прийдут от другого игрока
    this.setMovementSuccess(true);
    this.setDirection(moveData.direction);
    this._x = moveData.x;
    this._y = moveData.y;
    this._realX = moveData.realX;
    this._realY = moveData.realY;
    // * Чтобы синхронизировать правильно бег
    this._moveSpeed = moveData.moveSpeed;
    this.increaseSteps();
  };
  _.getMoveDataForNetwork = function() {
    return {
      direction: this._direction,
      moveSpeed: this.realMoveSpeed(),
      x: this.x,
      y: this.y,
      realX: this._realX,
      realY: this._realY
    };
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Enemy.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Enemy.prototype;
})();

// ■ END Game_Enemy.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Enemy.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Enemy.prototype;
  //TODO: Есть проблема, dead enemies не исчезают у второго игрока

  // * Дополнительные найстройки Observer для врагов
  _._addBattleFieldsToNetowrkDataObserver = function() {
    Game_Battler.prototype._addBattleFieldsToNetowrkDataObserver.call(this);
    // * Данные поля не нужны (наверное) врагам, так как не видно их полосу
    this.netDataObserver.removeFields(this, ["_tpbChargeTime"]);
  };
  // * Только мастер битвы может отправлять данные (вызывается из Scene_Battle)
  _.updateDataObserver = function() {
    if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
      this._updateDataObserver();
    }
  };
  _.dataObserverHaveChanges = function() {
    if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
      this.requestNetBattleDataPush();
    }
  };
  // * Добавляем свои поля
  _._fillNetworkObserver = function() {
    Game_Battler.prototype._fillNetworkObserver.call(this);
    this.netDataObserver.addFields(this, ANET.System.EnemyObserverFields);
  };
})();

// ■ END Game_Enemy.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  (function() {    // * Синхронизация движения
    // -----------------------------------------------------------------------
    var ALIAS__moveDiagonally, ALIAS__moveStraight, ALIAS__updateSelfMovement;
    //@[ALIAS]
    ALIAS__moveStraight = _.moveStraight;
    _.moveStraight = function(d) {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          // * Запоминаем предыдующие координаты (перед движением)
          this.___x = this.x;
          this.___y = this.y;
          // * Движение
          ALIAS__moveStraight.call(this, d);
          // * Если координаты сменились, значит персонаж
          // совершил движение, можно отправить на сервер
          if (this.___x !== this.x || this.___y !== this.y) {
            return ANMapManager.sendEventMove(this.eventId());
          }
        } else {

        }
      } else {
        // * SKIP MOVEMENT
        // * Движение событий выполняется только на мастере карты
        return ALIAS__moveStraight.call(this, d);
      }
    };
    
    //@[ALIAS]
    ALIAS__moveDiagonally = _.moveDiagonally;
    _.moveDiagonally = function(horz, vert) {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          // * Запоминаем предыдующие координаты (перед движением)
          this.___x = this.x;
          this.___y = this.y;
          // * Движение
          ALIAS__moveDiagonally.call(this, horz, vert);
          // * Если координаты сменились, значит персонаж
          // совершил движение, можно отправить на сервер
          if (this.___x !== this.x || this.___y !== this.y) {
            ANMapManager.sendEventMove(this.eventId());
          }
        } else {

        }
      } else {
        // * SKIP MOVEMENT
        // * Движение событий выполняется только на мастере карты
        ALIAS__moveDiagonally.call(this, horz, vert);
      }
    };
    //@[ALIAS]
    ALIAS__updateSelfMovement = _.updateSelfMovement;
    return _.updateSelfMovement = function() {
      if (ANNetwork.isConnected()) {
        if (ANGameManager.isMapMaster()) {
          return ALIAS__updateSelfMovement.call(this);
        } else {

        }
      } else {
        // * NOTHING
        // * Обновление движения события только на мастере карты
        return ALIAS__updateSelfMovement.call(this);
      }
    };
  })();
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  _.dataObserverHaveChanges = function() {
    if (ANGameManager.isMapMaster()) {
      ANSyncDataManager.sendEventObserver(this.eventId());
    }
  };
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------
// * Если мы не отправляем данные Observer,
// * то check не будет работать, пока не сбросить флаг


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Followers.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isSomeoneCollided, ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Followers.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function() {
    if (ANNetwork.isConnected()) {
      return this._data = [];
    } else {
      // * Нет последователей! Используется другой класс
      return ALIAS__setup.call(this);
    }
  };
  
  // * Учёт коллизий с сетевыми игроками при движении событий
  // * В этом методе, а не в NETCharactersGroup, чтобы было больше совместимости
  //@[ALIAS]
  ALIAS__isSomeoneCollided = _.isSomeoneCollided;
  _.isSomeoneCollided = function(x, y) {
    if (ANNetwork.isConnected()) {
      return $gameMap.netCharsIsSomeoneCollided(x, y);
    } else {
      return ALIAS__isSomeoneCollided.call(this, x, y);
    }
  };
})();

// ■ END Game_Followers.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  (function() {    // * Статус запуска события
    // -----------------------------------------------------------------------
    var ALIAS__clear, ALIAS__initialize, ALIAS__setup, ALIAS__update, ALIAS__updateWaitMode;
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(depth) {
      ALIAS__initialize.call(this, depth);
      this._nRunningCheckTimer = 0;
      // * Отключаем некоторые команды
      if (ANNetwork.isConnected()) {
        this.nDisableNotNetCommands();
      }
    };
    //@[ALIAS]
    ALIAS__setup = _.setup;
    _.setup = function(list, eventId) {
      var ref;
      ALIAS__setup.call(this, list, eventId);
      if (ANNetwork.isConnected()) {
        // * Сброс сетевой битвы, если началось другое событие
        BattleManager.nSetNetworkBattle(null);
        this.nCheckEventStartOptions();
        if (!this.isPassStartOptions()) { // * Проверка опций запуска события
          if (this.nIsAutorunEvent()) {
            // * Turn off Auto trigger for Event
            if ((ref = $gameMap.event(eventId)) != null) {
              ref._trigger = 0;
            }
          }
          // * Выключаем Auto триггер, чтобы игра не циклилась
          // * игра зацикливается, т.к. нет EraseEvent или
          // * переключения страницы, ведь мы подменяем на
          // * пустой лист команд
          this._list = []; // * Не будет выполняться
        } else {
          ANInterpreterManager.sendEventStarted(eventId);
          if (this.nIsEventIsShared()) {
            this.nPrepareSharedEvent();
          }
          this.nClearFlags();
        }
      }
    };
    
    //@[ALIAS]
    ALIAS__clear = _.clear;
    _.clear = function() {
      ALIAS__clear.call(this);
      if (ANNetwork.isConnected()) {
        ANInterpreterManager.eventProcessExit();
        this.nClearFlags();
      }
    };
    //@[ALIAS]
    ALIAS__update = _.update;
    _.update = function() {
      ALIAS__update.call(this);
      if (ANNetwork.isConnected()) {
        this._nRunningCheckTimer++;
        if (this._nRunningCheckTimer >= 60) {
          ANInterpreterManager.checkEventRunning();
          this._nRunningCheckTimer = 0;
        }
      }
    };
    //@[ALIAS]
    ALIAS__updateWaitMode = _.updateWaitMode;
    return _.updateWaitMode = function() {
      if (this._waitMode === 'netPlayersPool') {
        return this.nUpdateWaitPlayersPool();
      } else if (this._waitMode === 'netNextCommand') {
        return this.nUpdateWaitServerNextCommandPermission();
      } else {
        return ALIAS__updateWaitMode.call(this);
      }
    };
  })();
  (function() {    // * Выполнение команд в сети
    // -----------------------------------------------------------------------
    var ALIAS__command108;
    //@[ALIAS, STORED]
    _.ALIAS__executeCommand = _.executeCommand;
    _.executeCommand = function() {
      if (ANNetwork.isConnected()) {
        if (this.nIsOptionsForCurrentCommand()) {
          return this.nProcessCommandWithOptions();
        }
      }
      return _.ALIAS__executeCommand.call(this);
    };
    //TODO: MV
    //@[ALIAS]
    ALIAS__command108 = _.command108;
    return _.command108 = function(params) {
      if (ANNetwork.isConnected()) {
        if (KDCore.isMV()) {
          params = this._params;
        }
        // * Проверить комментарий на наличие NET команд
        this._nCheckNetComment(params[0]);
      }
      return ALIAS__command108.call(this, params);
    };
  })();
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


function _0x8fd4() {
    var _0x257527 = [
        '\x6c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72',
        '\x55\x71\x57\x59\x4e',
        '\x5f\x6c\x69\x73\x74',
        '\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73',
        '\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x48\x78\x45\x47\x6b',
        '\x69\x73\x50\x61\x73\x73\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x64\x41\x46\x59\x67',
        '\x6e\x53\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x41\x6c\x6c',
        '\x41\x63\x74\x6f\x72\x20\x4c\x69\x73\x74',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x4d\x61\x73\x74\x65\x72',
        '\x55\x74\x69\x6c\x73',
        '\x6e\x49\x73\x48\x61\x76\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x5f\x74\x72\x69\x67\x67\x65\x72',
        '\x4d\x61\x73\x74\x65\x72\x20\x45\x78\x63\x65\x70\x74',
        '\x5f\x6e\x53\x65\x6e\x64\x43\x6f\x6d\x6d\x61\x6e\x64\x54\x6f\x53\x65\x72\x76\x65\x72',
        '\x32\x35\x31\x31\x34\x35\x30\x73\x52\x70\x55\x59\x4b',
        '\x6e\x49\x73\x41\x75\x74\x6f\x72\x75\x6e\x45\x76\x65\x6e\x74',
        '\x41\x63\x74\x6f\x72\x20\x4c\x69\x73\x74\x20\x45\x78\x63\x65\x70\x74',
        '\x6e\x43\x68\x65\x63\x6b\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x66\x67\x41\x63\x41',
        '\x63\x61\x6c\x6c',
        '\x69\x57\x63\x4f\x57',
        '\x4d\x61\x73\x74\x65\x72',
        '\x6d\x61\x73\x74\x65\x72',
        '\x43\x6f\x74\x42\x6e',
        '\x61\x6e\x79',
        '\x36\x38\x51\x64\x52\x52\x79\x4b',
        '\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x35\x31\x32\x70\x7a\x47\x71\x66\x56',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x48\x6a\x51\x4b\x53',
        '\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x4e\x45\x54\x20\x43\x6f\x6d\x6d\x65\x6e\x74\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x4d\x61\x73\x74\x65\x72\x4f\x6e\x6c\x79\x43\x68\x6f\x69\x63\x65\x73\x4d\x6f\x64\x65\x46\x6f\x72\x4e\x65\x78\x74\x43\x68\x6f\x69\x63\x65',
        '\x6e\x44\x69\x73\x61\x62\x6c\x65\x4e\x6f\x74\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x73',
        '\x77\x73\x6a\x4b\x45',
        '\x37\x37\x35\x30\x32\x6b\x6b\x49\x74\x43\x44',
        '\x65\x4b\x51\x75\x79',
        '\x6e\x63\x73\x61\x61',
        '\x6e\x49\x73\x4f\x70\x74\x69\x6f\x6e\x73\x46\x6f\x72\x43\x75\x72\x72\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x69\x73\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x65\x64\x42\x79\x41\x6e\x79',
        '\x5f\x6e\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72\x4d\x6f\x64\x65',
        '\x4d\x65\x20\x45\x78\x63\x65\x70\x74',
        '\x36\x31\x31\x38\x32\x30\x70\x4e\x42\x42\x67\x42',
        '\x21\x66\x6f\x72\x41\x63\x74\x6f\x72\x73',
        '\x6c\x6c\x46\x51\x67',
        '\x46\x6f\x72\x62\x69\x64\x64\x65\x6e\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64\x73\x4c\x69\x73\x74',
        '\x4e\x20\x63\x68\x6f\x69\x63\x65\x73\x46\x6f\x72\x4d\x61\x73\x74\x65\x72\x20\x63\x61\x6e\x20\x62\x65\x20\x75\x73\x65\x64\x20\x6f\x6e\x6c\x79\x20\x69\x6e\x20\x53\x68\x61\x72\x65\x64\x20\x45\x76\x65\x6e\x74\x73',
        '\x76\x6d\x78\x49\x62',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x4e\x6f\x74\x4d\x65',
        '\x63\x68\x6f\x69\x63\x65\x73\x46\x6f\x72\x4d\x61\x73\x74\x65\x72',
        '\x53\x6c\x6f\x4d\x65',
        '\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x74\x68\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x31\x39\x6e\x7a\x53\x4a\x45\x4f',
        '\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x41\x63\x74\x6f\x72\x4c\x69\x73\x74\x53\x65\x6c\x65\x63\x74\x6f\x72\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x65\x58\x6f\x57\x6f',
        '\x5f\x6e\x43\x68\x65\x63\x6b\x4e\x65\x74\x43\x6f\x6d\x6d\x65\x6e\x74',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x49\x73\x52\x75\x6e\x6e\x69\x6e\x67',
        '\x63\x6f\x6d\x6d\x61\x6e\x64',
        '\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x41\x63\x74\x6f\x72\x73\x4c\x69\x73\x74',
        '\x69\x73\x48\x61\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x70\x77\x46\x71\x5a',
        '\x32\x33\x38\x37\x38\x75\x43\x59\x65\x6a\x44',
        '\x5f\x6e\x52\x75\x6e\x6e\x69\x6e\x67\x43\x68\x65\x63\x6b\x54\x69\x6d\x65\x72',
        '\x69\x48\x6c\x54\x6a',
        '\x36\x62\x4d\x5a\x5a\x52\x64',
        '\x69\x4d\x6d\x48\x4f',
        '\x31\x30\x30\x67\x73\x75\x64\x78\x6d',
        '\x34\x30\x35\x33\x35\x65\x6f\x70\x4a\x4b\x65',
        '\x65\x76\x65\x6e\x74',
        '\x41\x4c\x49\x41\x53\x5f\x5f\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x5f\x6e\x53\x6b\x69\x70\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x4c\x6f\x63\x61\x6c\x41\x63\x74\x6f\x72',
        '\x61\x63\x74\x6f\x72\x4c\x69\x73\x74',
        '\x79\x74\x4f\x63\x61',
        '\x71\x68\x6a\x73\x53',
        '\x53\x79\x73\x74\x65\x6d',
        '\x54\x61\x6e\x4d\x57',
        '\x59\x79\x53\x7a\x47',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x53\x79\x6e\x63\x65\x64\x4e\x65\x78\x74\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x61\x6c\x6c',
        '\x65\x76\x65\x6e\x74\x49\x64',
        '\x33\x36\x31\x34\x38\x35\x36\x70\x50\x55\x42\x58\x6b',
        '\x77\x68\x6f\x53\x65\x6c\x65\x63\x74\x6f\x72',
        '\x21\x6d\x65',
        '\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x62\x6d\x67\x55\x6a',
        '\x77\x61\x72\x6e',
        '\x73\x74\x61\x72\x74',
        '\x31\x31\x37\x32\x37\x38\x56\x63\x65\x4f\x51\x69',
        '\x6e\x43\x6c\x65\x61\x72\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x5f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73\x52\x65\x71\x75\x65\x73\x74\x65\x64',
        '\x69\x73\x50\x61\x73\x73\x45\x76\x65\x6e\x74\x46\x69\x6c\x74\x65\x72\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x58\x52\x76\x6e\x4b',
        '\x63\x6f\x64\x65',
        '\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x53\x69\x6e\x67\x6c\x65\x53\x65\x6c\x65\x63\x74\x6f\x72\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x5f\x69\x6e\x64\x65\x78',
        '\x41\x6c\x6c',
        '\x6e\x53\x65\x74\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x74\x74\x6c\x65'
    ];
    _0x8fd4 = function () {
        return _0x257527;
    };
    return _0x8fd4();
}
function _0x2a04(_0x2dae37, _0x2a797f) {
    var _0x8fd4c2 = _0x8fd4();
    return _0x2a04 = function (_0x2a042e, _0x957705) {
        _0x2a042e = _0x2a042e - 0x182;
        var _0x488064 = _0x8fd4c2[_0x2a042e];
        return _0x488064;
    }, _0x2a04(_0x2dae37, _0x2a797f);
}
(function (_0x34d138, _0x443fab) {
    var _0x5bbb48 = _0x2a04, _0xaf96f9 = _0x34d138();
    while (!![]) {
        try {
            var _0x3c79ab = parseInt(_0x5bbb48(0x1a4)) / 0x1 * (-parseInt(_0x5bbb48(0x1ad)) / 0x2) + parseInt(_0x5bbb48(0x192)) / 0x3 * (parseInt(_0x5bbb48(0x189)) / 0x4) + parseInt(_0x5bbb48(0x1e4)) / 0x5 * (parseInt(_0x5bbb48(0x1b0)) / 0x6) + parseInt(_0x5bbb48(0x1c8)) / 0x7 * (-parseInt(_0x5bbb48(0x18b)) / 0x8) + parseInt(_0x5bbb48(0x199)) / 0x9 * (parseInt(_0x5bbb48(0x1b2)) / 0xa) + -parseInt(_0x5bbb48(0x1b3)) / 0xb + parseInt(_0x5bbb48(0x1c1)) / 0xc;
            if (_0x3c79ab === _0x443fab)
                break;
            else
                _0xaf96f9['push'](_0xaf96f9['shift']());
        } catch (_0xdd2439) {
            _0xaf96f9['push'](_0xaf96f9['shift']());
        }
    }
}(_0x8fd4, 0x974cc), (function () {
    var _0x43d7c2 = _0x2a04, _0x6feeaa;
    _0x6feeaa = Game_Interpreter[_0x43d7c2(0x18c)], _0x6feeaa[_0x43d7c2(0x190)] = function () {
        var _0x35b79f = _0x43d7c2;
        if ('\x59\x79\x53\x7a\x47' === _0x35b79f(0x1bd)) {
            var _0x145202, _0x1a543e, _0x380634, _0x3de1c9, _0x40b78b;
            _0x1a543e = function () {
                return _0x6feeaa['\x63\x6f\x6d\x6d\x61\x6e\x64' + _0x145202] = function () {
                    return !![];
                };
            }, _0x40b78b = [
                0x81,
                0xca,
                0xce,
                0xd8,
                0xd9,
                0x89
            ];
            for (_0x380634 = 0x0, _0x3de1c9 = _0x40b78b['\x6c\x65\x6e\x67\x74\x68']; _0x380634 < _0x3de1c9; _0x380634++) {
                _0x145202 = _0x40b78b[_0x380634], _0x1a543e(_0x145202);
            }
        } else
            return ![];
    }, _0x6feeaa[_0x43d7c2(0x1e0)] = function () {
        var _0x38ef3f = _0x43d7c2;
        return '\x4a\x74\x55\x6e\x53' === _0x38ef3f(0x1af) ? this[_0x38ef3f(0x1ca)] === !![] && this[_0x38ef3f(0x1d7)] != null : this['\x5f\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73\x52\x65\x71\x75\x65\x73\x74\x65\x64'] === !![] && this['\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'] != null;
    }, _0x6feeaa['\x6e\x43\x6c\x65\x61\x72\x43\x6f\x6d\x6d\x61\x6e\x64\x4f\x70\x74\x69\x6f\x6e\x73'] = function () {
        var _0x45bc66 = _0x43d7c2;
        if (_0x45bc66(0x1c5) !== '\x58\x4f\x75\x54\x71')
            return this[_0x45bc66(0x1ca)] = ![], this[_0x45bc66(0x1d7)] = null;
        else
            _0x395f70[_0x45bc66(0x197)] = ![], this[_0x45bc66(0x1ae)] = 0x0, this[_0x45bc66(0x1c9)]();
    }, _0x6feeaa[_0x43d7c2(0x1db)] = function (_0x1b440b) {
        var _0x5c5291 = _0x43d7c2;
        if (_0x5c5291(0x1b9) !== '\x58\x68\x66\x65\x4c')
            return this[_0x5c5291(0x1d7)] = _0x1b440b, this[_0x5c5291(0x1ca)] = !![];
        else
            _0x45eb60 = _0x5a5887, _0x2d7214['\x77'](_0x5962bf);
    }, _0x6feeaa[_0x43d7c2(0x195)] = function () {
        var _0x42edd1 = _0x43d7c2;
        if ('\x43\x58\x71\x4c\x6f' !== _0x42edd1(0x193)) {
            if (!this[_0x42edd1(0x1e0)]())
                return ![];
            if (ANET[_0x42edd1(0x1bb)][_0x42edd1(0x19c)][_0x42edd1(0x1cc)](this[_0x42edd1(0x1c4)]()[_0x42edd1(0x1ce)]))
                return ![];
            return !![];
        } else
            _0x1d8472['\x77\x61\x72\x6e'](_0x42edd1(0x19d));
    }, _0x6feeaa[_0x43d7c2(0x1a3)] = function () {
        var _0xdb9d1 = _0x43d7c2, _0x302140;
        try {
            this[_0xdb9d1(0x1ca)] = ![];
            switch (this[_0xdb9d1(0x1d7)][_0xdb9d1(0x1c2)]) {
            case _0xdb9d1(0x1d1):
                return this[_0xdb9d1(0x1dc)]();
            case _0xdb9d1(0x185):
                return this[_0xdb9d1(0x1de)](!![]);
            case _0xdb9d1(0x1e2):
                return this['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x4d\x61\x73\x74\x65\x72'](![]);
            case _0xdb9d1(0x1dd):
                return this[_0xdb9d1(0x1aa)](!![]);
            case _0xdb9d1(0x1e6):
                return this[_0xdb9d1(0x1aa)](![]);
            case _0xdb9d1(0x198):
                return this[_0xdb9d1(0x19f)]();
            }
        } catch (_0x2f5847) {
            if (_0xdb9d1(0x19e) === _0xdb9d1(0x19e))
                _0x302140 = _0x2f5847, ANET['\x77'](_0x302140);
            else
                return this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'] != null;
        }
        return _0x6feeaa[_0xdb9d1(0x1b5)][_0xdb9d1(0x183)](this);
    }, _0x6feeaa['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x41\x6c\x6c'] = function () {
        var _0x3b558e = _0x43d7c2;
        return this[_0x3b558e(0x1e3)](), _0x6feeaa[_0x3b558e(0x1b5)][_0x3b558e(0x183)](this);
    }, _0x6feeaa[_0x43d7c2(0x1de)] = function (_0x4cdeca) {
        var _0x8bcb2b = _0x43d7c2;
        return _0x8bcb2b(0x1bc) !== _0x8bcb2b(0x1bc) ? (this[_0x8bcb2b(0x1d7)] = _0x30973d, this[_0x8bcb2b(0x1ca)] = !![]) : ANNetwork['\x69\x73\x4d\x61\x73\x74\x65\x72\x43\x6c\x69\x65\x6e\x74']() === _0x4cdeca ? _0x6feeaa[_0x8bcb2b(0x1b5)][_0x8bcb2b(0x183)](this) : (this[_0x8bcb2b(0x1e3)](), this[_0x8bcb2b(0x1b6)]());
    }, _0x6feeaa[_0x43d7c2(0x1aa)] = function (_0x3054ef) {
        var _0x190034 = _0x43d7c2;
        if (_0x190034(0x1ac) !== _0x190034(0x1b1)) {
            this[_0x190034(0x1e3)]();
            if (ANET[_0x190034(0x1df)]['\x69\x73\x4d\x79\x41\x63\x74\x6f\x72\x49\x6e\x56\x61\x6c\x69\x64\x4c\x69\x73\x74\x54\x6f\x53\x74\x61\x72\x74'](this[_0x190034(0x1d7)][_0x190034(0x1b8)], _0x3054ef)) {
                if (_0x190034(0x182) === '\x66\x67\x41\x63\x41')
                    return _0x6feeaa['\x41\x4c\x49\x41\x53\x5f\x5f\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64'][_0x190034(0x183)](this);
                else
                    _0x1f0c84 = null;
            } else
                return '\x73\x46\x74\x66\x68' === _0x190034(0x19b) ? !![] : this[_0x190034(0x1b6)]();
        } else
            _0xcb0dee = _0x1d8fad, _0x1c0b63['\x77'](_0x5bb6d9), this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'] = null;
    }, _0x6feeaa['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x4e\x6f\x74\x4d\x65'] = function () {
        var _0x1b05ee = _0x43d7c2;
        return this[_0x1b05ee(0x1e3)](), this[_0x1b05ee(0x1b6)]();
    }, _0x6feeaa[_0x43d7c2(0x1b6)] = function () {
        var _0x5435a8 = _0x43d7c2;
        return this['\x5f\x69\x6e\x64\x65\x78']++, this[_0x5435a8(0x1c9)](), !![];
    }, _0x6feeaa[_0x43d7c2(0x1e3)] = function () {
        var _0x27b01e = _0x43d7c2;
        if (_0x27b01e(0x1cd) === '\x6f\x73\x47\x4a\x6d')
            return this[_0x27b01e(0x1e3)](), _0x404437['\x41\x4c\x49\x41\x53\x5f\x5f\x65\x78\x65\x63\x75\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64']['\x63\x61\x6c\x6c'](this);
        else
            ANInterpreterManager['\x73\x65\x6e\x64\x45\x76\x65\x6e\x74\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6d\x6d\x61\x6e\x64'](this['\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64'](), this['\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'], this[_0x27b01e(0x1c0)]());
    }, _0x6feeaa[_0x43d7c2(0x1a7)] = function (_0x438931) {
        var _0x1f1603 = _0x43d7c2;
        if (_0x1f1603(0x18d) !== _0x1f1603(0x1d8)) {
            var _0x26860f;
            _0x26860f = ANET[_0x1f1603(0x1df)]['\x67\x65\x74\x4e\x65\x74\x43\x6f\x6d\x6d\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64'](_0x438931);
            if (!String['\x61\x6e\x79'](_0x26860f)) {
                if ('\x69\x57\x63\x4f\x57' !== _0x1f1603(0x184))
                    this['\x6e\x52\x65\x71\x75\x65\x73\x74\x53\x79\x6e\x63\x65\x64\x4e\x65\x78\x74\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64']();
                else
                    return;
            }
            switch (_0x26860f) {
            case _0x1f1603(0x1d3):
                this[_0x1f1603(0x1b7)](_0x438931);
                break;
            case _0x1f1603(0x1bf):
                this[_0x1f1603(0x1cf)](_0x1f1603(0x1d1), _0x438931);
                break;
            case _0x1f1603(0x1c3):
                this['\x5f\x6e\x4f\x6e\x4e\x65\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x53\x69\x6e\x67\x6c\x65\x53\x65\x6c\x65\x63\x74\x6f\x72\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64']('\x4d\x65\x20\x45\x78\x63\x65\x70\x74', _0x438931);
                break;
            case _0x1f1603(0x186):
                this[_0x1f1603(0x1cf)](_0x1f1603(0x185), _0x438931);
                break;
            case '\x21\x6d\x61\x73\x74\x65\x72':
                this[_0x1f1603(0x1cf)](_0x1f1603(0x1e2), _0x438931);
                break;
            case '\x66\x6f\x72\x41\x63\x74\x6f\x72\x73':
                this[_0x1f1603(0x1a5)](_0x438931, !![]);
                break;
            case _0x1f1603(0x19a):
                this[_0x1f1603(0x1a5)](_0x438931, ![]);
                break;
            case '\x77\x61\x69\x74':
                if (ANInterpreterManager[_0x1f1603(0x1a8)]()) {
                    if ('\x5a\x6f\x4f\x62\x6c' !== '\x5a\x6f\x4f\x62\x6c') {
                        var _0x299a59;
                        return _0x54b6f9[_0x1f1603(0x1ce)] === 0x165 && ((_0x299a59 = _0x2e10ae[_0x1f1603(0x1d6)]) != null ? _0x299a59[0x1] : void 0x0) === '\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73';
                    } else
                        this[_0x1f1603(0x1be)]();
                } else
                    console[_0x1f1603(0x1c6)]('\x4e\x20\x77\x61\x69\x74\x20\x63\x61\x6e\x20\x62\x65\x20\x75\x73\x65\x64\x20\x6f\x6e\x6c\x79\x20\x69\x6e\x20\x53\x68\x61\x72\x65\x64\x20\x45\x76\x65\x6e\x74\x73');
                break;
            case _0x1f1603(0x1a0):
                ANInterpreterManager[_0x1f1603(0x1a8)]() ? this[_0x1f1603(0x18f)]() : console['\x77\x61\x72\x6e'](_0x1f1603(0x19d));
                break;
            case _0x1f1603(0x1c7):
                break;
            default:
                console['\x77\x61\x72\x6e'](_0x1f1603(0x18e) + _0x26860f);
            }
        } else
            return _0x325636[_0x1f1603(0x1a9) + _0x2ba142] = function () {
                return !![];
            };
    }, _0x6feeaa['\x6e\x53\x65\x74\x53\x68\x61\x72\x65\x64\x42\x61\x74\x74\x6c\x65'] = function (_0x1e01a8) {
        var _0x555d3c = _0x43d7c2;
        if (!String['\x61\x6e\x79'](_0x1e01a8)) {
            if (_0x555d3c(0x191) !== _0x555d3c(0x191))
                return this[_0x555d3c(0x1d0)]++, this[_0x555d3c(0x1c9)](), !![];
            else
                _0x1e01a8 = null;
        }
        BattleManager[_0x555d3c(0x1d2)](_0x1e01a8);
    }, _0x6feeaa['\x6e\x43\x6c\x65\x61\x72\x46\x6c\x61\x67\x73'] = function () {
        var _0x493e22 = _0x43d7c2;
        $gameTemp[_0x493e22(0x197)] = ![], this['\x5f\x6e\x52\x75\x6e\x6e\x69\x6e\x67\x43\x68\x65\x63\x6b\x54\x69\x6d\x65\x72'] = 0x0, this[_0x493e22(0x1c9)]();
    }, (function () {
        var _0x3e4956 = _0x43d7c2;
        return _0x6feeaa[_0x3e4956(0x1ab)] = function () {
            var _0x2918f7 = _0x3e4956;
            return this[_0x2918f7(0x18a)] != null;
        }, _0x6feeaa[_0x3e4956(0x1d9)] = function () {
            var _0x24baea = _0x3e4956;
            if (this['\x6e\x49\x73\x45\x76\x65\x6e\x74\x49\x73\x53\x68\x61\x72\x65\x64']() && $gameTemp['\x5f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4f\x75\x74\x65\x72\x53\x74\x61\x72\x74\x46\x6c\x61\x67'] === !![])
                return !![];
            else {
                if (!this['\x69\x73\x48\x61\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73']())
                    return !![];
                if (this['\x6e\x49\x73\x4c\x6f\x63\x6b\x65\x64\x45\x76\x65\x6e\x74']()) {
                    if (_0x24baea(0x194) === _0x24baea(0x1da))
                        !_0x49a5dc[_0x24baea(0x188)](_0x33209f) && (_0x1e7935 = null), _0x4116a0[_0x24baea(0x1d2)](_0x47f154);
                    else {
                        if (ANET[_0x24baea(0x1df)][_0x24baea(0x196)](this[_0x24baea(0x1c0)]()))
                            return ![];
                    }
                }
                return ANET[_0x24baea(0x1df)][_0x24baea(0x1cb)](this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73']);
            }
        }, _0x6feeaa['\x6e\x49\x73\x4c\x6f\x63\x6b\x65\x64\x45\x76\x65\x6e\x74'] = function () {
            var _0x526212;
            return this['\x65\x76\x65\x6e\x74\x49\x64']() > 0x0 && ((_0x526212 = this['\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73']) != null ? _0x526212['\x6c\x6f\x63\x6b\x4d\x6f\x64\x65'] : void 0x0) === '\x74\x72\x75\x65';
        }, _0x6feeaa[_0x3e4956(0x1e7)] = function () {
            var _0x2e1ce5 = _0x3e4956;
            if ('\x6d\x79\x6b\x73\x47' !== _0x2e1ce5(0x1a6)) {
                var _0x10a1a0, _0x4c3dea, _0x17cd9f;
                this[_0x2e1ce5(0x18a)] = null;
                try {
                    if (_0x2e1ce5(0x1a1) !== _0x2e1ce5(0x1ba))
                        _0x4c3dea = (_0x17cd9f = this[_0x2e1ce5(0x1d5)]) != null ? _0x17cd9f['\x66\x69\x6e\x64'](function (_0x5592c5) {
                            var _0x2869da = _0x2e1ce5, _0x20b02e;
                            return _0x5592c5[_0x2869da(0x1ce)] === 0x165 && ((_0x20b02e = _0x5592c5[_0x2869da(0x1d6)]) != null ? _0x20b02e[0x1] : void 0x0) === _0x2869da(0x1a2);
                        }) : void 0x0, _0x4c3dea != null ? this[_0x2e1ce5(0x18a)] = _0x4c3dea[_0x2e1ce5(0x1d6)][0x3] : this['\x6e\x43\x68\x65\x63\x6b\x45\x76\x65\x6e\x74\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73\x46\x72\x6f\x6d\x43\x6f\x6d\x6d\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64']();
                    else
                        return !![];
                } catch (_0x18e27b) {
                    _0x10a1a0 = _0x18e27b, ANET['\x77'](_0x10a1a0), this[_0x2e1ce5(0x18a)] = null;
                }
            } else
                return;
        }, _0x6feeaa[_0x3e4956(0x1e5)] = function () {
            var _0x390cd1 = _0x3e4956, _0x565197, _0x4cddba;
            try {
                if (_0x390cd1(0x187) === _0x390cd1(0x1d4)) {
                    this[_0x390cd1(0x1ca)] = ![];
                    switch (this['\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73'][_0x390cd1(0x1c2)]) {
                    case _0x390cd1(0x1d1):
                        return this[_0x390cd1(0x1dc)]();
                    case _0x390cd1(0x185):
                        return this['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x4d\x61\x73\x74\x65\x72'](!![]);
                    case _0x390cd1(0x1e2):
                        return this['\x5f\x6e\x50\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x6f\x72\x4d\x61\x73\x74\x65\x72'](![]);
                    case _0x390cd1(0x1dd):
                        return this[_0x390cd1(0x1aa)](!![]);
                    case _0x390cd1(0x1e6):
                        return this[_0x390cd1(0x1aa)](![]);
                    case _0x390cd1(0x198):
                        return this[_0x390cd1(0x19f)]();
                    }
                } else
                    return _0x4cddba = $gameMap[_0x390cd1(0x1b4)](this[_0x390cd1(0x1c0)]()), (_0x4cddba != null ? _0x4cddba[_0x390cd1(0x1e1)] : void 0x0) === 0x3;
            } catch (_0x1d1196) {
                _0x565197 = _0x1d1196, ANET['\x77'](_0x565197);
            }
            return !![];
        };
    }());
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  // * Обработка комманд из комментариев (алтернатива командам плагинов)

  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  //input: "N localActor" | "N localActor end"
  _._nOnNetCommand_LocalActor = function(commentLine) {
    if (commentLine.contains("end")) {
      $gameTemp._nLocalActorMode = false;
    } else {
      $gameTemp._nLocalActorMode = true;
    }
  };
  
  //input: "N (selector)" | "N (selector) [scope]" | "N (selector) [scope] [mode]"
  //selcetor: all, !me, master, !master
  //scope: world, mode: virtual
  _._nOnNetCommand_SingleSelectorEventCommand = function(selector, commentLine) {
    var mode, scope;
    ({scope, mode} = ANET.Utils.convertEventCommandScopeAndMode(commentLine));
    this._nSetAnyEventCommandOptions(selector, "[]", scope, mode);
  };
  // * Установить опции команды события для следующей комманды
  _._nSetAnyEventCommandOptions = function(selector, list, scope, mode) {
    var options;
    if (!String.any(scope)) {
      // * Стандартные значения из команды плагина
      scope = "Same map";
    }
    if (!String.any(mode)) {
      mode = "Auto";
    }
    options = ANET.Utils.buildEventCommandOptions(selector, list, scope, mode);
    this.nSetCommandOptions(options);
  };
  _._nOnNetCommand_ActorListSelectorEventCommand = function(commentLine, isInclude) {
    var list, mode, scope, selector;
    ({scope, mode} = ANET.Utils.convertEventCommandScopeAndMode(commentLine));
    list = ANET.Utils.extractActorsListFromComment(commentLine);
    selector = "Actor List";
    if (!isInclude) {
      selector += " Except";
    }
    this._nSetAnyEventCommandOptions(selector, list, scope, mode);
  };
  // * Есть ли опции (условия) запуска события для сети (проверка команды - комментария)
  _.nCheckEventStartOptionsFromCommentCommand = function() {
    var commentLine;
    if (this._list == null) {
      return;
    }
    commentLine = KDCore.Utils.getEventCommentValue("N start", this._list);
    if (commentLine == null) {
      return;
    }
    this.nStartOptions = ANET.Utils.parseEventStartOptionsFromCommentLine(commentLine);
  };
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


function _0x35b9() {
    var _0x3f7316 = [
        '\x46\x6d\x76\x62\x6f',
        '\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x61\x64\x79\x54\x6f\x43\x6f\x6e\x74\x69\x6e\x75\x65',
        '\x31\x30\x32\x68\x71\x4c\x70\x4c\x4e',
        '\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72',
        '\x57\x47\x61\x72\x58',
        '\x68\x6e\x4c\x73\x74',
        '\x4f\x55\x55\x54\x45\x52\x20\x53\x54\x41\x52\x54',
        '\x32\x30\x38\x75\x49\x53\x45\x5a\x6a',
        '\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x57\x61\x69\x74\x50\x6f\x6f\x6c\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64',
        '\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c',
        '\x5f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4f\x75\x74\x65\x72\x53\x74\x61\x72\x74\x46\x6c\x61\x67',
        '\x5f\x63\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x41\x61\x5a\x58\x4b',
        '\x46\x54\x4b\x66\x51',
        '\x69\x73\x48\x61\x76\x65\x4e\x65\x74\x77\x6f\x72\x6b\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x50\x52\x45\x50\x41\x52\x45\x20\x53\x48\x41\x52\x45\x44\x20\x4d\x4f\x44',
        '\x31\x35\x38\x38\x33\x71\x74\x66\x4e\x70\x63',
        '\x6e\x55\x70\x64\x61\x74\x65\x57\x61\x69\x74\x53\x65\x72\x76\x65\x72\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x50\x65\x72\x6d\x69\x73\x73\x69\x6f\x6e',
        '\x59\x54\x6e\x52\x44',
        '\x53\x54\x4f\x50\x20\x57\x41\x49\x54\x49\x4e\x47\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x3a\x20\x49\x53\x20\x43\x41\x4e\x43\x45\x4c\x45\x44\x21',
        '\x66\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x75\x70\x64\x61\x74\x65',
        '\x6e\x52\x65\x71\x75\x69\x72\x65\x43\x68\x6f\x69\x63\x65\x4f\x6e\x6c\x79\x46\x6f\x72\x4d\x61\x73\x74\x65\x72',
        '\x6e\x43\x6c\x65\x61\x72\x53\x68\x61\x72\x65\x64\x53\x79\x6e\x63\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x61\x69\x74',
        '\x6e\x53\x74\x61\x72\x74\x4f\x70\x74\x69\x6f\x6e\x73',
        '\x4a\x72\x72\x58\x6b',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x53\x79\x6e\x63\x65\x64\x4e\x65\x78\x74\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x6e\x65\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64',
        '\x51\x4c\x68\x65\x46',
        '\x6e\x49\x73\x45\x76\x65\x6e\x74\x49\x73\x53\x68\x61\x72\x65\x64',
        '\x5f\x65\x76\x65\x6e\x74\x49\x64',
        '\x6e\x4b\x61\x53\x50',
        '\x72\x65\x73\x65\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x31\x33\x36\x31\x38\x30\x68\x4e\x63\x57\x57\x72',
        '\x6e\x53\x65\x74\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c',
        '\x6e\x49\x73\x45\x76\x65\x6e\x74\x49\x73\x53\x68\x61\x72\x65\x64\x41\x6e\x64\x53\x74\x72\x69\x63\x74',
        '\x74\x6e\x59\x63\x70',
        '\x35\x31\x34\x32\x38\x31\x30\x75\x45\x47\x71\x4a\x65',
        '\x6d\x4c\x6c\x75\x45',
        '\x6f\x6e\x41\x6e\x73\x77\x65\x72',
        '\x34\x33\x32\x77\x5a\x45\x79\x51\x41',
        '\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x43\x61\x6e\x42\x65\x46\x6f\x72\x63\x65\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64',
        '\x31\x31\x59\x67\x5a\x76\x65\x59',
        '\x43\x41\x4e\x20\x50\x52\x4f\x43\x45\x53\x53\x20\x54\x4f\x20\x4e\x45\x58\x54\x20\x43\x4f\x4d\x4d\x41\x4e\x44',
        '\x6e\x53\x65\x74\x57\x61\x69\x74\x53\x74\x61\x72\x74\x4e\x65\x78\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x46\x72\x6f\x6d\x53\x65\x72\x76\x65\x72',
        '\x63\x6c\x65\x61\x72',
        '\x69\x73\x53\x69\x6e\x67\x6c\x65\x50\x6f\x6f\x6c',
        '\x6d\x66\x45\x41\x49',
        '\x37\x35\x34\x39\x39\x32\x49\x51\x57\x6b\x52\x68',
        '\x74\x65\x72\x6d\x69\x6e\x61\x74\x65',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x55\x54\x4a\x47\x59',
        '\x7a\x44\x4b\x4e\x52',
        '\x53\x74\x72\x69\x63\x74',
        '\x6e\x65\x74\x50\x6c\x61\x79\x65\x72\x73\x50\x6f\x6f\x6c',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x75\x62\x6b\x56\x79',
        '\x73\x68\x6f\x77\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x6e\x41\x6c\x6c\x6f\x77\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x50\x4c\x41\x59\x45\x52\x20\x41\x4e\x53\x57\x45\x52\x20',
        '\x6e\x4f\x6e\x53\x79\x6e\x63\x65\x64\x45\x76\x65\x6e\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x52\x65\x73\x70\x6f\x6e\x73\x65',
        '\x42\x55\x6d\x69\x7a',
        '\x4f\x63\x4c\x54\x4f',
        '\x73\x65\x74\x75\x70\x53\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x6e\x52\x65\x71\x75\x65\x73\x74\x4d\x61\x73\x74\x65\x72\x4f\x6e\x6c\x79\x43\x68\x6f\x69\x63\x65\x73\x4d\x6f\x64\x65\x46\x6f\x72\x4e\x65\x78\x74\x43\x68\x6f\x69\x63\x65',
        '\x5f\x69\x6e\x64\x65\x78',
        '\x73\x68\x61\x72\x65\x64\x4d\x6f\x64\x65',
        '\x36\x34\x34\x35\x31\x36\x6c\x4b\x42\x6b\x4e\x43',
        '\x4b\x56\x69\x47\x46',
        '\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72',
        '\x6e\x50\x72\x65\x70\x61\x72\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74',
        '\x38\x39\x35\x35\x34\x70\x6b\x47\x44\x4b\x5a',
        '\x69\x4e\x67\x79\x78',
        '\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61',
        '\x53\x54\x41\x52\x54\x20\x50\x4f\x4f\x4c',
        '\x69\x6e\x64\x65\x78',
        '\x58\x4a\x78\x53\x4e',
        '\x69\x73\x43\x61\x6e\x63\x65\x6c',
        '\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65',
        '\x5f\x69\x6e\x64\x65\x6e\x74',
        '\x31\x33\x30\x31\x31\x39\x51\x76\x64\x43\x64\x72',
        '\x39\x46\x42\x59\x64\x43\x6f',
        '\x72\x65\x67\x69\x73\x74\x65\x72',
        '\x72\x65\x73\x65\x74',
        '\x6e\x55\x70\x64\x61\x74\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x50\x6f\x6f\x6c'
    ];
    _0x35b9 = function () {
        return _0x3f7316;
    };
    return _0x35b9();
}
function _0x57bf(_0x3313a5, _0x3a5d2f) {
    var _0x35b96b = _0x35b9();
    return _0x57bf = function (_0x57bf14, _0x7af0a8) {
        _0x57bf14 = _0x57bf14 - 0x12d;
        var _0x43ab1f = _0x35b96b[_0x57bf14];
        return _0x43ab1f;
    }, _0x57bf(_0x3313a5, _0x3a5d2f);
}
(function (_0x4f40ae, _0x1aaa91) {
    var _0xa2b0ad = _0x57bf, _0x490348 = _0x4f40ae();
    while (!![]) {
        try {
            var _0x3ac675 = -parseInt(_0xa2b0ad(0x164)) / 0x1 * (-parseInt(_0xa2b0ad(0x181)) / 0x2) + parseInt(_0xa2b0ad(0x16a)) / 0x3 + -parseInt(_0xa2b0ad(0x17d)) / 0x4 + -parseInt(_0xa2b0ad(0x15b)) / 0x5 * (parseInt(_0xa2b0ad(0x13c)) / 0x6) + -parseInt(_0xa2b0ad(0x14a)) / 0x7 * (-parseInt(_0xa2b0ad(0x141)) / 0x8) + parseInt(_0xa2b0ad(0x136)) / 0x9 * (parseInt(_0xa2b0ad(0x15f)) / 0xa) + parseInt(_0xa2b0ad(0x135)) / 0xb * (-parseInt(_0xa2b0ad(0x162)) / 0xc);
            if (_0x3ac675 === _0x1aaa91)
                break;
            else
                _0x490348['push'](_0x490348['shift']());
        } catch (_0xe6dbbc) {
            _0x490348['push'](_0x490348['shift']());
        }
    }
}(_0x35b9, 0x414ed), (function () {
    var _0x5e27a6 = _0x57bf, _0x457fea;
    _0x457fea = Game_Interpreter[_0x5e27a6(0x171)], _0x457fea[_0x5e27a6(0x157)] = function () {
        var _0x1baeab = _0x5e27a6, _0x10c609;
        try {
            return '\x56\x79\x58\x78\x67' !== _0x1baeab(0x12d) ? this[_0x1baeab(0x148)]() && this[_0x1baeab(0x152)]['\x73\x68\x61\x72\x65\x64\x4d\x6f\x64\x65'] !== '\x4e\x6f' : (_0x106aff = _0x3a4ad2, _0x1443fa['\x77'](_0xd140a3), ![]);
        } catch (_0x2103be) {
            return _0x10c609 = _0x2103be, ANET['\x77'](_0x10c609), ![];
        }
    }, _0x457fea[_0x5e27a6(0x15d)] = function () {
        var _0x5119aa = _0x5e27a6, _0x3f78c4, _0x1caf34;
        try {
            if (_0x5119aa(0x156) !== _0x5119aa(0x146))
                return this[_0x5119aa(0x157)]() && ((_0x1caf34 = this[_0x5119aa(0x152)][_0x5119aa(0x17c)]) != null ? _0x1caf34[_0x5119aa(0x16c)](_0x5119aa(0x16f)) : void 0x0);
            else
                _0x5119aa(0x140)['\x70'](), _0x29dabe['\x5f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4f\x75\x74\x65\x72\x53\x74\x61\x72\x74\x46\x6c\x61\x67'] = null, _0x467917[_0x5119aa(0x179)](this, ![]), this[_0x5119aa(0x154)]();
        } catch (_0x4039ac) {
            if ('\x72\x56\x4a\x75\x48' === '\x72\x56\x4a\x75\x48')
                return _0x3f78c4 = _0x4039ac, ANET['\x77'](_0x3f78c4), ![];
            else {
                if (this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'] == null)
                    return;
                if (this[_0x5119aa(0x143)] == null)
                    return;
                if (this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61']['\x69\x6e\x64\x65\x78'] === _0xdea145 && this[_0x5119aa(0x12e)]['\x69\x6e\x64\x65\x6e\x74'] === _0x5de8eb)
                    return '\x50\x4c\x41\x59\x45\x52\x20\x41\x4e\x53\x57\x45\x52\x20'['\x70'](_0x1c7360), this[_0x5119aa(0x143)][_0x5119aa(0x161)](_0x1a9be7);
            }
        }
    }, _0x457fea[_0x5e27a6(0x163)] = function () {
        var _0xea5c2e = _0x5e27a6;
        return !this[_0xea5c2e(0x15d)]() && this[_0xea5c2e(0x12e)][_0xea5c2e(0x130)] === 0x0;
    }, _0x457fea[_0x5e27a6(0x180)] = function () {
        var _0x1820ec = _0x5e27a6;
        ANInterpreterManager[_0x1820ec(0x15a)](), _0x1820ec(0x149)['\x70'](this[_0x1820ec(0x158)]);
        if ($gameTemp[_0x1820ec(0x144)] == null)
            this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'] = null, ANInterpreterManager[_0x1820ec(0x179)](this, !![]), this[_0x1820ec(0x154)]();
        else {
            if (_0x1820ec(0x13a) === _0x1820ec(0x13a))
                _0x1820ec(0x140)['\x70'](), $gameTemp[_0x1820ec(0x144)] = null, ANInterpreterManager['\x73\x65\x74\x75\x70\x53\x68\x61\x72\x65\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72'](this, ![]), this[_0x1820ec(0x154)]();
            else
                return;
        }
    }, _0x457fea[_0x5e27a6(0x142)] = function () {
        var _0x4261f0 = _0x5e27a6;
        if (_0x4261f0(0x14c) !== _0x4261f0(0x14c))
            this['\x6e\x53\x65\x74\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c']();
        else {
            var _0x48bcc8;
            try {
                if ('\x4a\x6d\x74\x78\x78' === '\x57\x58\x4b\x52\x54')
                    this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'] = null, _0x3cf0a3[_0x4261f0(0x179)](this, !![]), this[_0x4261f0(0x154)]();
                else {
                    if (!this[_0x4261f0(0x163)]())
                        return;
                    if (Input[_0x4261f0(0x132)]())
                        return Input['\x63\x6c\x65\x61\x72'](), ANInterpreterManager[_0x4261f0(0x14e)](), this[_0x4261f0(0x16b)](), !![];
                }
            } catch (_0x44f5d0) {
                _0x48bcc8 = _0x44f5d0, ANET['\x77'](_0x48bcc8);
            }
            return ![];
        }
    }, _0x457fea[_0x5e27a6(0x154)] = function () {
        var _0x2136fb = _0x5e27a6;
        this[_0x2136fb(0x12e)] = {
            '\x69\x6e\x64\x65\x78': this[_0x2136fb(0x17b)],
            '\x69\x6e\x64\x65\x6e\x74': this[_0x2136fb(0x134)]
        };
        if (ANInterpreterManager[_0x2136fb(0x13d)]())
            this[_0x2136fb(0x15c)]();
        else {
            if (_0x2136fb(0x177) === '\x42\x55\x6d\x69\x7a')
                this[_0x2136fb(0x166)]();
            else
                return !this[_0x2136fb(0x15d)]() && this[_0x2136fb(0x12e)][_0x2136fb(0x130)] === 0x0;
        }
        ANInterpreterManager[_0x2136fb(0x173)]();
    }, _0x457fea[_0x5e27a6(0x176)] = function (_0x9b5dac, _0xee08c, _0x42747b) {
        var _0x3341c8 = _0x5e27a6, _0x52fe87;
        try {
            if (_0x3341c8(0x16d) !== _0x3341c8(0x16d))
                return;
            else {
                if (this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'] == null)
                    return;
                if (this[_0x3341c8(0x143)] == null)
                    return;
                if (this['\x6e\x53\x79\x6e\x63\x57\x61\x69\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x44\x61\x74\x61'][_0x3341c8(0x130)] === _0x9b5dac && this[_0x3341c8(0x12e)]['\x69\x6e\x64\x65\x6e\x74'] === _0xee08c) {
                    if (_0x3341c8(0x147) !== _0x3341c8(0x147))
                        this[_0x3341c8(0x143)][_0x3341c8(0x138)]();
                    else
                        return _0x3341c8(0x175)['\x70'](_0x42747b), this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'][_0x3341c8(0x161)](_0x42747b);
                }
            }
        } catch (_0x499949) {
            _0x3341c8(0x178) !== _0x3341c8(0x13e) ? (_0x52fe87 = _0x499949, ANET['\x77'](_0x52fe87)) : this['\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72'] >= 0x0 && (this['\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72']--, this[_0x3341c8(0x17f)] === 0x0 && this[_0x3341c8(0x166)]());
        }
    }, _0x457fea[_0x5e27a6(0x15c)] = function () {
        var _0x586a0b = _0x5e27a6;
        _0x586a0b(0x12f)['\x70'](), this[_0x586a0b(0x143)] == null ? this[_0x586a0b(0x143)] = new PlayersWaitPool() : this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'][_0x586a0b(0x138)](), this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'][_0x586a0b(0x137)](), this[_0x586a0b(0x133)] = _0x586a0b(0x170);
    }, _0x457fea[_0x5e27a6(0x139)] = function () {
        var _0x4b0af2 = _0x5e27a6, _0x5b3193;
        this[_0x4b0af2(0x143)][_0x4b0af2(0x14f)]();
        if (this['\x6e\x49\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x57\x61\x69\x74\x50\x6f\x6f\x6c\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64']())
            return _0x4b0af2(0x14d)['\x70'](), !![];
        return _0x5b3193 = !this[_0x4b0af2(0x143)]['\x69\x73\x52\x65\x61\x64\x79'](), !_0x5b3193 && ('\x53\x54\x4f\x50\x20\x57\x41\x49\x54\x49\x4e\x47\x20\x50\x4c\x41\x59\x45\x52\x53\x20\x3a\x20\x49\x53\x20\x52\x45\x41\x44\x59'['\x70'](), ANInterpreterManager[_0x4b0af2(0x13b)](), ANInterpreterManager['\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'](), this[_0x4b0af2(0x151)](), this[_0x4b0af2(0x133)] = ''), _0x5b3193;
    }, _0x457fea[_0x5e27a6(0x151)] = function () {
        var _0x1aa1a4 = _0x5e27a6;
        if ('\x7a\x44\x4b\x4e\x52' === _0x1aa1a4(0x16e))
            this[_0x1aa1a4(0x12e)] = null;
        else
            return _0x1aa1a4(0x175)['\x70'](_0xc8f17c), this[_0x1aa1a4(0x143)][_0x1aa1a4(0x161)](_0x400985);
    }, _0x457fea[_0x5e27a6(0x166)] = function () {
        var _0x27456e = _0x5e27a6;
        if (_0x27456e(0x13f) !== _0x27456e(0x13f))
            return _0x27456e(0x14d)['\x70'](), !![];
        else
            this[_0x27456e(0x145)] = ![], ANInterpreterManager['\x73\x65\x6e\x64\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x52\x65\x67\x69\x73\x74\x65\x72\x65\x64\x44\x6f\x6e\x65'](), '\x57\x41\x49\x54\x20\x53\x45\x52\x56\x45\x52\x20\x46\x4f\x52\x20\x4e\x45\x58\x54\x20\x43\x4f\x4d\x4d\x41\x4e\x44'['\x70'](), this[_0x27456e(0x17f)] = 0x3c, this['\x5f\x77\x61\x69\x74\x4d\x6f\x64\x65'] = _0x27456e(0x155);
    }, _0x457fea[_0x5e27a6(0x14b)] = function () {
        var _0x1a9015 = _0x5e27a6;
        if (_0x1a9015(0x159) !== '\x7a\x53\x4e\x57\x73') {
            var _0x58bae5;
            if ($gameTemp['\x5f\x73\x68\x6f\x75\x6c\x64\x46\x6f\x72\x63\x65\x45\x78\x69\x74\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] === !![]) {
                if (_0x1a9015(0x17e) === _0x1a9015(0x131))
                    this[_0x1a9015(0x12e)] = {
                        '\x69\x6e\x64\x65\x78': this[_0x1a9015(0x17b)],
                        '\x69\x6e\x64\x65\x6e\x74': this[_0x1a9015(0x134)]
                    }, _0x292e37['\x69\x73\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74\x4d\x61\x73\x74\x65\x72']() ? this[_0x1a9015(0x15c)]() : this[_0x1a9015(0x166)](), _0x1e3383[_0x1a9015(0x173)]();
                else
                    return this[_0x1a9015(0x16b)](), !![];
            }
            return _0x58bae5 = !this[_0x1a9015(0x145)], !_0x58bae5 ? (_0x1a9015(0x165)['\x70'](), this[_0x1a9015(0x133)] = '') : _0x1a9015(0x169) === _0x1a9015(0x153) ? this[_0x1a9015(0x166)]() : this[_0x1a9015(0x17f)] >= 0x0 && (this['\x5f\x6e\x52\x65\x70\x65\x61\x74\x41\x6e\x73\x77\x65\x72\x54\x6f\x53\x65\x72\x76\x65\x72\x54\x69\x6d\x65\x72']--, this[_0x1a9015(0x17f)] === 0x0 && this[_0x1a9015(0x166)]()), !![];
        } else
            return;
    }, _0x457fea[_0x5e27a6(0x174)] = function () {
        var _0x488dc3 = _0x5e27a6;
        if (this[_0x488dc3(0x133)] !== _0x488dc3(0x155)) {
            if (_0x488dc3(0x172) !== _0x488dc3(0x160))
                return;
            else
                return;
        }
        this['\x5f\x63\x61\x6e\x43\x6f\x6e\x74\x69\x6e\x75\x65\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74'] = !![], this[_0x488dc3(0x17f)] = -0x1, ANInterpreterManager['\x68\x69\x64\x65\x57\x61\x69\x74\x50\x6c\x61\x79\x65\x72\x73\x4f\x6e\x53\x68\x61\x72\x65\x64\x45\x76\x65\x6e\x74']();
    }, _0x457fea[_0x5e27a6(0x17a)] = function () {
        var _0x11140a = _0x5e27a6;
        if (this['\x6e\x50\x6c\x61\x79\x65\x72\x50\x6f\x6f\x6c'] != null && this[_0x11140a(0x143)][_0x11140a(0x168)]()) {
            if (_0x11140a(0x15e) !== _0x11140a(0x15e))
                return _0x1f3577[_0x11140a(0x167)](), _0x12ff9a[_0x11140a(0x14e)](), this[_0x11140a(0x16b)](), !![];
            else
                return;
        }
        '\x53\x68\x61\x72\x65\x64\x20\x45\x76\x65\x6e\x74\x20\x43\x68\x6f\x69\x63\x65\x73\x20\x69\x6e\x20\x4d\x61\x73\x74\x65\x72\x20\x6f\x6e\x6c\x79\x20\x6d\x6f\x64\x65'['\x70'](), $gameTemp[_0x11140a(0x150)] = !![];
    };
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__refresh, ALIAS__setup, ALIAS__setupStartingEvent, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    this._networkCharacters = new NETCharactersGroup();
  };
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(mapId) {
    ALIAS__setup.call(this, mapId);
    if (ANNetwork.isConnected()) {
      // * Клиент переходит на новую карту
      ANGameManager.onNewGameMapSetup();
      this.setupNetworkCharacters();
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function(sceneActive) {
    ALIAS__update.call(this, sceneActive);
    if (ANNetwork.isConnected()) {
      return this.updateNetwork();
    }
  };
  
  //@[ALIAS]
  ALIAS__refresh = _.refresh;
  _.refresh = function() {
    ALIAS__refresh.call(this);
    if (ANNetwork.isConnected()) {
      return this.refreshNetworkCharacters();
    }
  };
  //@[ALIAS]
  ALIAS__setupStartingEvent = _.setupStartingEvent;
  _.setupStartingEvent = function() {
    if (ANNetwork.isConnected()) {
      if ($gameTemp.isNetworkSharedEventReserved()) {
        return this.nSetupNetworkSharedEvent();
      }
    }
    return ALIAS__setupStartingEvent.call(this);
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  // * Безопасное обновление карты, так как может вызываться когда пришли данные игроков (на любой сцене в любой момент)
  _.nSafeRefresh = function() {
    var e;
    try {
      if (SceneManager.isBusyForNetworkData()) {
        return;
      }
      if (!KDCore.Utils.isSceneMap()) {
        return;
      }
      if (typeof $dataMap === "undefined" || $dataMap === null) {
        return;
      }
      this.refresh();
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _.netCharsIsSomeoneCollided = function(x, y) {
    return this._networkCharacters.isSomeoneCollided(x, y);
  };
  _.nGetNetCharXY = function(x, y) {
    if (this.netCharsIsSomeoneCollided(x, y)) {
      return this._networkCharacters.getInPos(x, y);
    } else {
      return null;
    }
  };
  _.netChars = function() {
    return this._networkCharacters.characters();
  };
  _.networkCharacterByActorId = function(actorId) {
    return this._networkCharacters.characterByActorId(actorId);
  };
  _.networkCharacterById = function(id) {
    return this._networkCharacters.characterById(id);
  };
  // * Инициализация персонажей отображаемых на карте
  _.setupNetworkCharacters = function() {
    return this._networkCharacters.setup();
  };
  _.updateNetwork = function() {
    return this._networkCharacters.update();
  };
  _.refreshNetworkCharacters = function() {
    return this._networkCharacters.refresh();
  };
  // * Запуск общего события (которое пришло от сервера)
  _.nSetupNetworkSharedEvent = function() {
    var e, event;
    try {
      event = this.event($gameTemp.retrieveNetworkSharedEvent());
      if (event == null) {
        return false;
      }
      $gameTemp._nSharedEventOuterStartFlag = true;
      event.start();
      return true;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return false;
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__clear, _;
  //@[DEFINES]
  _ = Game_Message.prototype;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    if (ANNetwork.isConnected()) {
      return this.nEndCallback();
    }
  };
})();

// ■ END Game_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Message.prototype;
  _.nSetEndCallback = function(_nEndCallbackMethod) {
    this._nEndCallbackMethod = _nEndCallbackMethod;
  };
  _.nEndCallback = function() {
    if (this._nEndCallbackMethod != null) {
      this._nEndCallbackMethod();
      this._nEndCallbackMethod = null;
    }
  };
})();

// ■ END Game_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__battleMembers, ALIAS__charactersForSavefile, ALIAS__facesForSavefile, ALIAS__leader, ALIAS__partyAbility, ALIAS__setupStartingMembers, _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  //@[ALIAS]
  ALIAS__battleMembers = _.battleMembers;
  _.battleMembers = function() {
    if (ANNetwork.isConnected()) {
      return ANBattleManager.battleMembers();
    } else {
      return ALIAS__battleMembers.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__setupStartingMembers = _.setupStartingMembers;
  _.setupStartingMembers = function() {
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isMultiActorsMode()) {
        ALIAS__setupStartingMembers.call(this);
        // * Делаем копию начальных персонажей
        this._nSharedPartyMembers = [...this._actors];
        this._nSharedPartyOwners = {};
      }
      // * Нет начальной группы
      this._actors = [];
    } else {
      ALIAS__setupStartingMembers.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__leader = _.leader;
  _.leader = function() {
    if (ANNetwork.isConnected()) {
      return this.networkLeader();
    } else {
      return ALIAS__leader.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__charactersForSavefile = _.charactersForSavefile;
  _.charactersForSavefile = function() {
    if (ANNetwork.isConnected()) {
      return this.members().map(function(actor) {
        return [actor.characterName(), actor.characterIndex()];
      });
    } else {
      return ALIAS__charactersForSavefile.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__facesForSavefile = _.facesForSavefile;
  _.facesForSavefile = function() {
    if (ANNetwork.isConnected()) {
      return this.members().map(function(actor) {
        return [actor.faceName(), actor.faceIndex()];
      });
    } else {
      return ALIAS__facesForSavefile.call(this);
    }
  };
  // * На всякий слуйчай добавил try \ catch, бывает выдаёт ошибку этот метод
  //@[ALIAS]
  ALIAS__partyAbility = _.partyAbility;
  _.partyAbility = function() {
    var e;
    if (ANNetwork.isConnected()) {
      try {
        return ALIAS__partyAbility.call(this, ...arguments);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    } else {
      return ALIAS__partyAbility.call(this, ...arguments);
    }
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  // * ОБЩИЙ персонаж - это персонаж которым также управляет игрок (но не его основной)
  // * Проверка, является ли actorId - СВОБОДНЫМ общим персонажем
  _.nIsValidSharedActor = function(actorId) {
    var playerForActor;
    playerForActor = ANGameManager.playersData.find(function(pl) {
      return pl.actorId === actorId;
    });
    if (playerForActor != null) {
      // * Данный ActorId является игроком!!!
      return false;
    } else {
      return true;
    }
  };
  _.nIsOwnedSharedActor = function(actorId) {
    return this.nGetOwnerOfSharedActor(actorId) != null;
  };
  _.nGetOwnerOfSharedActor = function(actorId) {
    return this._nSharedPartyOwners[actorId];
  };
  
  // * Я (данный клиент) управляю данным персонажем? (дополнительным)
  _.nIsIOwnedSharedActor = function(actorId) {
    return this.nIsOwnedSharedActor(actorId) && this.nGetOwnerOfSharedActor(actorId) === ANNetwork.myId();
  };
  //TODO: Надо чтобы NetworkCharacters на карте не создавались, а то ошибки и вылеты при JoinGame

  // * Оставляем shared акторов (которых контролирует игрок)
  _.nRefreshSharedMembers = function() {
    var actorId, i, len, ref;
    if (!ANET.PP.isMultiActorsMode()) {
      return;
    }
    ref = this._nSharedPartyMembers;
    for (i = 0, len = ref.length; i < len; i++) {
      actorId = ref[i];
      if (this.nIsValidSharedActor(actorId)) {
        this._actors.push(actorId);
        if (ANNetwork.isMasterClient()) {
          // * Если никто не занял, значит персонаж - хоста (по умолчанию)
          if (this._nSharedPartyOwners[actorId] == null) {
            this._nSharedPartyOwners[actorId] = ANNetwork.myId();
          }
        }
      } else {
        // * Если персонажем играют, то его удаляем
        delete this._nSharedPartyOwners[actorId];
      }
    }
  };
  //TODO: syncover clients @_nSharedPartyOwners
  _.nRemoveNetPlayerActor = function(actorId) {
    if (ANET.PP.isMultiActorsMode()) {
      if (!this.nIsValidSharedActor(actorId)) {
        ANGameManager.anotherPlayerLeaveGame(actorId);
      }
      if (ANNetwork.isMasterClient()) {
        console.log("TODO: refresh shared actor binding");
      }
    } else {
      // * not remove, Actor now is shared
      this.removeActor(actorId);
      //TODO: Этот метод не вызывается если уходит настоящий игрок!!! (в режиме мульти чар)
      ANGameManager.anotherPlayerLeaveGame(actorId);
    }
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Party.prototype;
  _.setupNetworkGame = function() {};
  // * В бою участвует только один персонаж?
  _.isOneBattler = function() {
    return this.battleMembers().length <= 1;
  };
  //TODO: как задать после выбора персонажа, чтобы каждый раз не вычислять
  _.networkLeader = function() {
    var actorId;
    actorId = ANGameManager.myPlayerData().actorId;
    return $gameActors.actor(actorId);
  };
  //TODO: Есть метод onRefreshGameParty (в ANGameManager) -> путаница может быть
  // * Этот метод вызывается когда группа была изменена (кто-то отключился)
  _.nRefreshNetworkActors = function() {
    var actor, e, i, id, len, playerForActor, ref;
    try {
      ref = this.members();
      for (i = 0, len = ref.length; i < len; i++) {
        actor = ref[i];
        id = actor.actorId();
        // * Ищем игрока для каждого Actor
        playerForActor = ANGameManager.playersData.find(function(pl) {
          return pl.actorId === id;
        });
        // * Если нету больше игрока с таким Actor, удаляем из партии
        if (playerForActor == null) {
          this.nRemoveNetPlayerActor(id);
        }
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  //TODO: Возможно это и на сцену битвы надо? (или там по другому работает)

  // * Данный метод очищает группу чтобы перераспределить Actors между игроками
  _.nClearBeforeRefresh = function() {
    return this._actors = [];
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__canMove, ALIAS__executeEncounter, ALIAS__getInputDirection, ALIAS__moveDiagonally, ALIAS__moveStraight, ALIAS__update, _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  //@[ALIAS]
  ALIAS__getInputDirection = _.getInputDirection;
  _.getInputDirection = function() {
    var dir;
    if (ANNetwork.isConnected() && $gameTemp._netAutoFollowActorId > 0) {
      dir = ALIAS__getInputDirection.call(this);
      if (dir !== 0) {
        $gameTemp._netAutoFollowActorId = null;
      }
      return dir;
    } else {
      return ALIAS__getInputDirection.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__canMove = _.canMove;
  _.canMove = function() {
    if (ANNetwork.isConnected()) {
      if (ANNetwork.isBusy()) {
        // * Игрок не может ходить если игра ждёт ответ от сервера
        return false;
      }
      if (ANET.UI.isPlayerMenuIsOpen()) {
        // * Игрок не может ходить, когда открыто меню другого игрока
        return false;
      }
    }
    return ALIAS__canMove.call(this, ...arguments);
  };
  //@[ALIAS]
  ALIAS__moveStraight = _.moveStraight;
  _.moveStraight = function(d) {
    if (ANNetwork.isConnected()) {
      // * Запоминаем предыдующие координаты (перед движением)
      this.___x = this.x;
      this.___y = this.y;
      // * Движение
      ALIAS__moveStraight.call(this, d);
      // * Если координаты сменились, значит персонаж
      // совершил движение, можно отправить на сервер
      if (this.___x !== this.x || this.___y !== this.y) {
        return ANPlayersManager.sendPlayerMove();
      }
    } else {
      return ALIAS__moveStraight.call(this, d);
    }
  };
  
  //@[ALIAS]
  ALIAS__moveDiagonally = _.moveDiagonally;
  _.moveDiagonally = function(horz, vert) {
    if (ANNetwork.isConnected()) {
      // * Запоминаем предыдующие координаты (перед движением)
      this.___x = this.x;
      this.___y = this.y;
      // * Движение
      ALIAS__moveDiagonally.call(this, horz, vert);
      // * Если координаты сменились, значит персонаж
      // совершил движение, можно отправить на сервер
      if (this.___x !== this.x || this.___y !== this.y) {
        ANPlayersManager.sendPlayerMove();
      }
    } else {
      ALIAS__moveDiagonally.call(this, horz, vert);
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function(sceneActive) {
    ALIAS__update.call(this, sceneActive);
    if (ANNetwork.isConnected()) {
      this.updateNetwork();
      if (sceneActive === true) {
        this.nUpdatePlayerInputForNetwork();
      }
    }
  };
  //@[ALIAS]
  ALIAS__executeEncounter = _.executeEncounter;
  _.executeEncounter = function() {
    var result;
    if (ANNetwork.isConnected() && ANET.PP.isMapEncountersGlobal()) {
      $gameTemp.nNextBattleIsEncounter = true;
      result = ALIAS__executeEncounter.call(this, ...arguments);
      // * Снимаем флаг, чтобы не мешал другим битвам
      $gameTemp.nNextBattleIsEncounter = false;
      return result;
    } else {
      return ALIAS__executeEncounter.call(this, ...arguments);
    }
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  _.nGetNameplate = function() {
    var actor;
    actor = $gameParty.leader();
    if ((actor != null) && ANET.PP.isShowNameplateOverMyCharacter() === true) {
      return actor.nGetNameplate();
    } else {
      return null;
    }
  };
  _.dataObserverHaveChanges = function() {
    return ANSyncDataManager.sendPlayerObserver();
  };
  _.updateNetwork = function() {
    var ref;
    if ($gameParty.isEmpty()) {
      return;
    }
    // * Проверяем и обновляем DataObserver своего персонажа
    // * Тут этот ? (првоерка Null) нужна!
    return (ref = $gameParty.leader()) != null ? ref.updateDataObserver() : void 0;
  };
  _.nUpdatePlayerInputForNetwork = function() {
    this.nUpdateAutoFollowMode();
    if (ANET.PP.isGameChatAllowed()) { //TODO: DYNAMIC?
      return this.nUpdateChatInput();
    }
  };
  
  //%[I] Показывать какую-то иконку над игроком (или целью) что в режиме преследования находится
  _.nUpdateAutoFollowMode = function() {
    var actorForFollow;
    if (!($gameTemp._netAutoFollowActorId > 0)) {
      return;
    }
    if (this.isMoving() || !this.canMove()) {
      return;
    }
    actorForFollow = $gameMap.networkCharacterByActorId($gameTemp._netAutoFollowActorId);
    if (actorForFollow != null) {
      Game_Follower.prototype.chaseCharacter.call(this, actorForFollow);
    } else {
      $gameTemp._netAutoFollowActorId = null;
    }
  };
  _.nUpdateChatInput = function() {
    var openChatButton, sayInChatButton;
    //TODO: Можно оптимизировать, в initMembers
    openChatButton = ANET.PP.getChatOpenCloseKey();
    sayInChatButton = ANET.PP.getChatSayKey();
    if (Input.isTriggered(openChatButton)) {
      if (ANET.UI.isChatOpen()) {
        // * Если кнопка открыть чат и кнопка сказать в чат одинаковые
        if (openChatButton === sayInChatButton) {
          ANET.UI.showChatInputSafe(); // * то не закрываем, а сцена ввода текста
          Input.clear(); // * иначе закрываем
        } else {
          ANET.UI.closeChat();
        }
      } else {
        ANET.UI.showChat();
      }
    } else if (Input.isTriggered(sayInChatButton)) {
      if (ANET.UI.isChatOpen()) {
        ANET.UI.showChatInputSafe();
      }
    }
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Switches.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onChange, ALIAS__setValue, _;
  //@[DEFINES]
  _ = Game_Switches.prototype;
  //@[ALIAS]
  ALIAS__setValue = _.setValue;
  _.setValue = function(switchId, value) {
    if (ANNetwork.isConnected()) {
      // * Вызываем страндартный метод
      ALIAS__setValue.call(this, switchId, value);
      // * Если были изменения
      if (this.__variableChangedOk === true) {
        if (this.isGlobalSwitch(switchId)) {
          ANSyncDataManager.sendGlobalSwitchChange(switchId, this.value(switchId));
        }
      }
      this.__variableChangedOk = false;
    } else {
      ALIAS__setValue.call(this, switchId, value);
    }
  };
  
  //@[ALIAS]
  ALIAS__onChange = _.onChange;
  _.onChange = function() {
    ALIAS__onChange.call(this);
    if (ANNetwork.isConnected()) {
      this.__variableChangedOk = true;
    }
  };
})();

// ■ END Game_Switches.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Switches.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Switches.prototype;
  _.isGlobalSwitch = function(switchId) {
    return ANET.PP.globalSwitchesIds().contains(switchId);
  };
  _.onSwitchFromServer = function(switchId, value) {
    this._data[switchId] = value;
    return this.onChange();
  };
})();

// ■ END Game_Switches.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
  // * Инициализация стилей таблиц имён для персонажей
  _.nInitNameplatesStylesForActors = function() {
    if (this.nActorsNameplatesStyles == null) {
      return this.nActorsNameplatesStyles = {};
    }
  };
  // * Задать стиль для персонажа
  //?VERSION
  _.nSetNameplateStyleForActor = function(actorId, style) {}; // * ONLY FOR PRO
  
  //?VERSION
  _.nGetNameplateStyleForActor = function(actorId) {
    return null;
  };
  // * Инициализация набора общих событий для команд пользователя
  _.nInitCustomCommandsCE = function() {
    if (this.nCustomCommandsCE == null) {
      return this.nCustomCommandsCE = {};
    }
  };
  // * Проверка, есть ли для кастомной команды общее событие (и запуск если есть)
  _.nCheckCustomCommandForCEStart = function(name) {
    var ceId, e;
    try {
      this.nInitCustomCommandsCE();
      ceId = this.nCustomCommandsCE[name];
      if ((ceId != null) && ceId > 0) {
        $gameTemp.reserveCommonEvent(ceId);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Зарегестрировать вызов общего события для кастомной команды
  _.nRegisterCustomCommandCE = function(name, ceId) {
    var e;
    try {
      this.nInitCustomCommandsCE();
      this.nCustomCommandsCE[name] = ceId;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCommonEventReserved, ALIAS__requestAnimation, ALIAS__retrieveCommonEvent, ALIAS__setDestination, _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  //@[ALIAS]
  ALIAS__setDestination = _.setDestination;
  _.setDestination = function() {
    ALIAS__setDestination.call(this, ...arguments);
    $gameTemp._netAutoFollowActorId = null;
  };
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    // * Виртуальные общие события от сервера
    this._virtualEventQueue = [];
  };
  
  //@[ALIAS]
  ALIAS__isCommonEventReserved = _.isCommonEventReserved;
  _.isCommonEventReserved = function() {
    return this.isVirtualCommonEventReserved() || ALIAS__isCommonEventReserved.call(this);
  };
  
  // * Виртуальные события в приоритете
  //@[ALIAS]
  ALIAS__retrieveCommonEvent = _.retrieveCommonEvent;
  _.retrieveCommonEvent = function() {
    if (this.isVirtualCommonEventReserved()) {
      return this._virtualEventQueue.shift();
    } else {
      return ALIAS__retrieveCommonEvent.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__requestAnimation = _.requestAnimation;
  _.requestAnimation = function() {
    if (ANNetwork.isConnected()) {
      // * В бою анимацию синхронизируется (только мастер)(отправляется другим игрокам)
      if ($gameParty.inBattle() && ANGameManager.isBattleMaster()) {
        ANBattleManager.requestAnimation(...arguments);
      }
    }
    return ALIAS__requestAnimation.call(this, ...arguments);
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__reservedCommonEvent, _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * В MV нету метода retrieveCommonEvent
  //@[ALIAS]
  ALIAS__reservedCommonEvent = _.reservedCommonEvent;
  _.reservedCommonEvent = function() {
    if (this.isVirtualCommonEventReserved()) {
      return this._virtualEventQueue.shift();
    } else {
      return ALIAS__reservedCommonEvent.call(this);
    }
  };
  // * В MV нету метода requestBattleRefresh
  _.requestBattleRefresh = function() {
    if ($gameParty.inBattle()) {
      return this._needsBattleRefresh = true;
    }
  };
  _.isBattleRefreshRequested = function() {
    return this._needsBattleRefresh === true;
  };
  _.clearBattleRefreshRequest = function() {
    return this._needsBattleRefresh = false;
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  (function() {    // * Virtual Common Events
    // -----------------------------------------------------------------------
    _.reserveNetworkSharedEvent = function(_reservedNetworkSharedEvent) {
      this._reservedNetworkSharedEvent = _reservedNetworkSharedEvent;
    };
    _.isNetworkSharedEventReserved = function() {
      return this._reservedNetworkSharedEvent >= 1;
    };
    // * Забираем (и сразу очищаем)
    _.retrieveNetworkSharedEvent = function() {
      var eventId;
      eventId = this._reservedNetworkSharedEvent;
      this._reservedNetworkSharedEvent = 0;
      return eventId;
    };
    _.reserveVirtualCommonEvent = function(list) {
      return this._virtualEventQueue.push(list);
    };
    _.isVirtualCommonEventReserved = function() {
      return this._virtualEventQueue.length > 0;
    };
  })();
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Troop.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Troop.prototype;
})();

// ■ END Game_Troop.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Unit.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Unit.prototype;
  _.nUpdateBattleDataSync = function() {
    var members;
    members = this.members();
    if (members.some(function(m) {
      return m.isNeedNetPushBattleData();
    })) {
      ANSyncDataManager.sendBattleUnitsObserver(members);
      members.forEach(function(m) {
        return m.onNetBattleDataPushed();
      });
    }
  };
})();

// ■ END Game_Unit.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Variables.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onChange, ALIAS__setValue, _;
  //@[DEFINES]
  _ = Game_Variables.prototype;
  //@[ALIAS]
  ALIAS__setValue = _.setValue;
  _.setValue = function(variableId, value) {
    if (ANNetwork.isConnected()) {
      // * Вызываем страндартный метод
      ALIAS__setValue.call(this, variableId, value);
      // * Если были изменения
      if (this.__variableChangedOk === true) {
        if (this.isGlobalVariable(variableId)) {
          ANSyncDataManager.sendGlobalVariableChange(variableId, this.value(variableId));
        }
      }
      this.__variableChangedOk = false;
    } else {
      ALIAS__setValue.call(this, variableId, value);
    }
  };
  //@[ALIAS]
  ALIAS__onChange = _.onChange;
  _.onChange = function() {
    ALIAS__onChange.call(this);
    if (ANNetwork.isConnected()) {
      return this.__variableChangedOk = true;
    }
  };
})();

// ■ END Game_Variables.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Variables.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Variables.prototype;
  _.isGlobalVariable = function(varId) {
    return ANET.PP.globalVariablesIds().contains(varId);
  };
  _.getAllGlobalVariablesData = function() {
    var i, j, variables;
    variables = [];
    for (i = j = 1; j <= 8; i = ++j) {
      variables.push([i, this.value[i]]);
    }
    return variables;
  };
  _.onVariableFromServer = function(varId, value) {
    this._data[varId] = value;
    return this.onChange();
  };
})();

// ■ END Game_Variables.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ImageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ImageManager;
  _.loadAA = function(filename) {
    return this.loadBitmap('img/Alpha/', filename);
  };
})();

// ■ END ImageManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1



// Generated by CoffeeScript 2.6.1
// * Глабольный набор вспомогательных функций для пользователя
var nAPI;

nAPI = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ IMPLEMENTATION.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = nAPI;
  // * Для вызова сцены сетевой игры
  // * (только если в Scene_Title нет пункта или используется кастомная сцена)
  //$[Внимание: могут быть проблемы в вызове из сцены карты (одиночная игра) и выходе из сцены]
  _.startNetworkGameScene = function() {
    SceneManager.push(Scene_NetworkGameMenu);
  };
  _.ID = function() {
    return ANET.VD.getGameVersion();
  };
  (function() {    // * NETWORK STATE
    // -----------------------------------------------------------------------
    _.isNetworkGame = function() {
      var e;
      try {
        return ANNetwork.isConnected();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    _.myPlayerIndex = function() {
      var e;
      try {
        if (ANNetwork.isConnected()) {
          return ANGameManager.myIndex();
        } else {
          return 0;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.myActorId = function() {
      var e;
      try {
        if (ANNetwork.isConnected()) {
          return ANGameManager.myActorId();
        } else {
          return $gameParty.leader().actorId();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.playersCount = function() {
      var e;
      try {
        return ANGameManager.playersData.length;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return 0;
    };
    _.isMasterClient = function() {
      var e;
      try {
        return _.isNetworkGame() && ANNetwork.isMasterClient();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    // * Возвращает набор данных исходя из what (см. ANGameManager.getPlayerInfo)
    //? what && byWhat: actor, actorId, netId, actorName, playerName, playerIndex, info
    _.getPlayerInfo = function(what, byWhat, value) {
      var e;
      try {
        return ANGameManager.getPlayerInfo(what, byWhat, value);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    // * Возвращает NETCharacter или Null
    _.getPlayerCharacter = function(byWhat, value) {
      var e, playerData;
      try {
        if (!KDCore.Utils.isSceneMap()) {
          return null;
        }
        playerData = this.getPlayerInfo("info", byWhat, value);
        // * Персонаж должен быть на текущей карте + сцена карты должна быть текущая
        if ((playerData != null) && NetPlayerDataWrapper.isCharOnMap(playerData)) {
          return $gameMap.networkCharacterById(playerData.id);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return null;
    };
    // * Кто на данный момент читает событие (локально)
    return _.getEventParticipant = function(what) {
      var e;
      try {
        if ($gameMap._interpreter.isRunning() && ANNetwork.isConnected()) {
          return nAPI.getPlayerInfo(what, "actorId", ANGameManager.myActorId());
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return null;
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * HUI
    // -----------------------------------------------------------------------
    _.showGreenAlert = function(text) {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.notifySucess(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.showRedAlert = function(text) {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.notifyError(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.showInfoMessage = function(text1, text2 = "") {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.showWaitingInfo(text1, text2, 1) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    return _.hideInfoMessage = function() {
      var e;
      try {
        return typeof HUIManager !== "undefined" && HUIManager !== null ? HUIManager.hideWaitingInfo() : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * USER SERVER COMMANDS
    // -----------------------------------------------------------------------
    //@[ALIAS SUPPORT]
    // * FOR ALIASING (for plugin developers and custom commands implementation)
    _.onCustomCommand = function(name, data) {
      var e;
      try {
        if (typeof $gameSystem !== "undefined" && $gameSystem !== null) {
          $gameSystem.nCheckCustomCommandForCEStart(name);
        }
        ANET.CFIX.onCustomCommand(name, data);
      } catch (error) {
        e = error;
        ANET.w(e);
      }
      console.log("Custom network command received: " + name);
    };
    // * USER CUSTOM CODE HERE
    _.sendCustomCommand = function(name, data) {
      var e;
      try {
        if (!_.isNetworkGame()) {
          return;
        }
        return ANNetwork.callback(NMS.Game("userCommand", {name, data}), function() {
          //TODO: Может не надо выполнять и на данном клиенте?
          // * Сразу выполняем и на данном клиенте
          // * Так как сервер эту команду выполнит в режиме ретрансляции
          return nAPI.onCustomCommand(name, data);
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Подписать на определённую (кастомную) команду выполенине общего события
    return _.registerCommonEventForCommand = function(name, commonEventId) {
      var e;
      try {
        return ANNetwork.callback(NMS.Game("customCommandLink", {name, commonEventId}), function() {
          if (typeof $gameSystem !== "undefined" && $gameSystem !== null) {
            $gameSystem.nRegisterCustomCommandCE(name, commonEventId);
          }
          return console.log("Custom network command register to Common Event is done");
        });
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * CHAT
    // -----------------------------------------------------------------------
    _.writeInChat = function(message, isGlobal = false) {
      var e;
      try {
        if (isGlobal === true && ANNetwork.isConnected()) {
          ANGameManager.sendRawChatMessage(0, 0, message);
        } else {
          ANET.UI.addMessageToChat(ANET.Utils.buildChatMessage(0, 0, message));
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.closeChatWindow = function() {
      var e;
      try {
        ANET.UI.closeChat();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.openChatWindow = function() {
      var e;
      try {
        ANET.UI.showChat();
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    _.moveChatWindow = function(x = 0, y = 0) {
      var e;
      try {
        $gamePlayer._nLastChatWindowPosition = {
          x: x,
          y: y
        };
        if (this.isChatWindowOpened()) {
          ANET.UI.chat()._moveToStartPosition();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        $gamePlayer._nLastChatWindowPosition = {
          x: 0,
          y: 0
        };
      }
    };
    return _.isChatWindowOpened = function() {
      var e;
      try {
        return ANET.UI.isChatOpen();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * PLAYER MENU
    // -----------------------------------------------------------------------
    return _.callPlayerMenuAction = function(actionName, relativeActorId) {
      var anotherPlayer, e;
      try {
        switch (actionName) {
          case "trade":
            anotherPlayer = $gameMap.networkCharacterByActorId(relativeActorId);
            if ((anotherPlayer != null) && ANTradeManager.isClientAvailableForTrade()) {
              return ANTradeManager.requestTradeWith(anotherPlayer.playerData());
            }
            break;
          case "status":
            // * Запрашиваем статус определённого персонажа
            $gameTemp._netRequestStatusForCertainActorId = relativeActorId;
            return SceneManager.push(Scene_Status);
          case "follow":
            // * Автоматически следуем за определённым игроком
            return $gameTemp._netAutoFollowActorId = relativeActorId;
          default:
            return ANET.w("Unknown Player Menu Action: " + actionName);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
  })();
  (function() {    
    // -----------------------------------------------------------------------

    // * NAMEPLATES
    // -----------------------------------------------------------------------
    return _.setNameplateStyle = function(actorId, styleId) {
      var e;
      try {
        if (!ANET.isPro()) {
          return;
        }
        if (!ANNetwork.isConnected()) {
          return;
        }
        return $gameSystem.nSetNameplateStyleForActor(actorId, styleId);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
})();

// ■ END IMPLEMENTATION.coffee
//---------------------------------------------------------------------------
// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Класс для персонажей на карте других игроков
var NETCharacter;

NETCharacter = class NETCharacter extends Game_Character {
  constructor(id) {
    super();
    this.id = id;
    //* Иконка сетевого состояния игрока (меню, карта, торговля, чат и т.д.)
    this.networkStateIcon = null;
    this.refresh();
  }

  // * Синхронизация движения
  playerData() {
    return ANGameManager.getPlayerDataById(this.id);
  }

  actor() {
    var plData;
    plData = this.playerData();
    if (plData != null) {
      return $gameActors.actor(this.playerData().actorId);
    } else {
      return null;
    }
  }

  actorId() {
    if (this.playerData() != null) {
      return this.playerData().actorId;
    } else {
      return 0;
    }
  }

  refresh() {
    var charIndex, charName;
    if (this.actor() == null) {
      return;
    }
    charName = this.actor().characterName();
    charIndex = this.actor().characterIndex();
    return this.setImage(charName, charIndex);
  }

  nGetNameplate() {
    var actor;
    if (this.actor() == null) {
      return null;
    }
    actor = this.actor();
    if (actor != null) {
      return actor.nGetNameplate();
    } else {
      return null;
    }
  }

  // * Сетевое состояние игрока
  // * =====================================================================
  requestNetworkStateIcon(networkStateIcon) {
    this.networkStateIcon = networkStateIcon;
  }

};

(function() {  
  // * =====================================================================

  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NETCharacter.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NETCharacter.prototype;
})();

// ■ END NETCharacter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Данный класс содержит NETCharacter всех игроков на карте (аналог Game_Followers)
//?[STORABLE]
//@[GLOBAL]
var NETCharactersGroup;

NETCharactersGroup = class NETCharactersGroup {
  constructor() {
    this._data = [];
  }

  setup() {
    "SETUP NETWORK CHARS".p();
    this._data = [];
    this._refreshCharacters();
  }

  // * Вызывается из Game_Map.refresh
  refresh() {
    var char, i, len, ref;
    this._refreshCharacters();
    ref = this._data;
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      char.refresh();
    }
  }

  characters() {
    return this._data;
  }

  characterById(id) {
    return this.characters().find(function(c) {
      return c.id === id;
    });
  }

  characterByActorId(actorId) {
    return this.characters().find(function(c) {
      return c.actorId() === actorId;
    });
  }

  update() {
    var c, i, len, ref, results;
    ref = this.characters();
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      c = ref[i];
      results.push(c.update());
    }
    return results;
  }

  isSomeoneCollided(x, y) {
    return this.characters().some(function(c) {
      return c.pos(x, y);
    });
  }

  getInPos(x, y) {
    return this.characters().find(function(c) {
      return c.pos(x, y);
    });
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ NETCharactersGroup.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = NETCharactersGroup.prototype;
  
  // * Данный метод удаляет (отключённых) и создаёт (подклюённых) персонажей
  _._refreshCharacters = function() {
    this._removeNotExistsCharacters();
    this._addNewCharacters();
    this._refreshNetworkCharactersSprites();
  };
  // * Удаляем (отключился или ушёл на другую карту)
  _._removeNotExistsCharacters = function() {
    var char, i, len, ref, x;
    x = ANGameManager.anotherPlayersOnMap();
    ref = this.characters();
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      if (char == null) {
        continue;
      }
      if (!x.find(function(c) {
        return c.id === char.id;
      })) {
        this._data.delete(char);
      }
    }
  };
  // * Добавляем новых персонажей
  _._addNewCharacters = function() {
    var char, i, len, pl, x;
    // * anotherPlayersOnMap - значит на текущей карте и characterReady is true - Это важно
    x = ANGameManager.anotherPlayersOnMap();
    for (i = 0, len = x.length; i < len; i++) {
      pl = x[i];
      char = this.characterById(pl.id);
      if (char == null) {
        this._data.push(new NETCharacter(pl.id));
      }
    }
  };
  // * Пересоздать спрайты персонажей
  _._refreshNetworkCharactersSprites = function() {
    var ref;
    if (!KDCore.Utils.isSceneMap()) {
      return;
    }
    if ((ref = SceneManager._scene._spriteset) != null) {
      ref.refreshNetworkCharacters();
    }
  };
})();

// ■ END NETCharactersGroup.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
var NETLobbyChat;

NETLobbyChat = class NETLobbyChat {
  constructor() {
    // * Используется для фильтрации сообщений
    this._gameId = nAPI.ID();
    this.loadHistory();
  }

  sendMessage() {
    var e, message, msgerInput, myName, text;
    try {
      msgerInput = document.getElementById("anet-chat-input");
      if (msgerInput == null) {
        return;
      }
      text = msgerInput.value;
      //console.log("try send", text)
      if (!String.any(text)) {
        return;
      }
      myName = ANGameManager.myPlayerData().name;
      message = this.buildMessage(myName, text);
      this.sendMessageToServer(message);
      return msgerInput.value = "";
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  buildMessage(who, text) {
    return {
      who,
      text,
      time: ANET.getNetChatTimeNow(),
      gameid: this._gameId
    };
  }

  appendMessage(message, side) {
    var e, msgHTML, msgerChat, text, time, who;
    try {
      msgerChat = document.getElementById("anet-chat-main");
      if (msgerChat == null) {
        return;
      }
      ({who, text, time} = message);
      msgHTML = ANET.getNetLobbyChatNewMessageCode(who, text, time, side);
      msgerChat.insertAdjacentHTML("beforeend", msgHTML);
      msgerChat.scrollTop += 500;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  static AddToHistory(message, side = 'left') {
    var e;
    try {
      if ($gameTemp.nLobbyChatHistory == null) {
        $gameTemp.nLobbyChatHistory = [];
      }
      $gameTemp.nLobbyChatHistory.push({message, side});
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  loadHistory() {
    var e, i, item, len, ref;
    if ($gameTemp.nLobbyChatHistory == null) {
      return;
    }
    try {
      ref = $gameTemp.nLobbyChatHistory;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        this.appendMessage(item.message, item.side);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  sendMessageToServer(message) {
    var e;
    try {
      //"send to server text from ".p(message.who)
      ANNetwork.callback(NMS.Lobby("chatMessage", message), () => {
        this.appendMessage(message, 'right');
        return NETLobbyChat.AddToHistory(message, 'right');
      });
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  onMessageFromServer(message) {
    var e;
    try {
      if (message == null) {
        return;
      }
      if (!String.any(message.who)) {
        return;
      }
      //"message from server from ".p(message.who)
      if (!ANET.PP.isLobbyChatIsGlobal()) {
        if (this._gameId !== message.gameid) {
          return;
        }
      }
      this.appendMessage(message, 'left');
      NETLobbyChat.AddToHistory(message, 'left');
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ NetMessages.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _CM, _M;
  //@[DEFINES]
  _M = NetMessage;
  _CM = function(name, flag, data, socket) {
    return _M.EmptyMessageWithFlag(flag, data, socket).setName(name);
  };
  // * Обозначения
  // f - имя комманды (флага)
  // d - данные
  // s - сокет (либо ничего)

  //?LOBBY COMMANDS
  _M.Lobby = function(f, d, s) {
    return _CM('lobby', f, d, s);
  };
  //?MAP COMMANDS
  _M.Map = function(f, d, s) {
    return _CM('map', f, d, s);
  };
  //?GAME COMMANDS
  _M.Game = function(f, d, s) {
    return _CM('game', f, d, s);
  };
  //?INTERPRETER COMMANDS
  _M.Event = function(f, d, s) {
    return _CM('event', f, d, s);
  };
  //?BATTLE COMMANDS
  _M.Battle = function(f, d, s) {
    return _CM('battle', f, d, s);
  };
  //?OTHER COMMANDS
  _M.Other = function(f, d, s) {
    return _CM('other', f, d, s);
  };
  //?COMMON COMMANDS
  _M.Common = function(innerFlag, d, s) {
    return _M._commonCMD('forClients', innerFlag, d, s);
  };
  //? COMMON COMMAND DATA
  _M._commonCMD = function(cmdName, innerFlag, d, s) {
    var commonData;
    commonData = {
      cmd: innerFlag,
      data: d
    };
    return _CM('common', cmdName, commonData, s);
  };
  //?ABSZ COMMANDS
  // * Через broadcast, т.е. самому себе не прийдёт
  _M.ABSZ = function(innerFlag, d, s) {
    return _M._commonCMD('absz', innerFlag, d, s);
  };
})();

// ■ END NetMessages.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Основной класс менеджер интерфейса (API)
// * Аналогичен классу AA.UI из ABSZ
ANET.UI = function() {};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ ANET.UI.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.UI;
  _.setUI = function(uiSet) {
    this.uiSet = uiSet;
  };
  _.isValid = function() {
    return (this.uiSet != null) && ANNetwork.isConnected();
  };
  // * Когда появляется окно с сообщением
  _.onGameMessageStart = function() {
    if (!this.isValid()) {
      return;
    }
    this.uiSet.onGameMessageStart();
    this.closePlayerMenu();
  };
  // * Когда заканчивается окно с сообщением
  _.onGameMessageEnd = function() {
    if (!this.isValid()) {
      return;
    }
    return this.uiSet.onGameMessageEnd();
  };
  // * Когда было нажатие мышки на какой-либо UI элемент
  _.isUITouched = function() {
    return false;
  };
  // * Вызывается когда сцена карты заканчивается
  _.terminate = function() {
    var ref;
    if ((ref = this.uiSet) != null) {
      ref.terminate();
    }
    this.terminateModalWindow();
  };
  (function() {    
    // * Основной интерфейс Spriteset_UI
    // -----------------------------------------------------------------------
    _.refresh = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.refresh() : void 0;
    };
    _.hide = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.hide() : void 0;
    };
    _.show = function() {
      var ref;
      return (ref = this.uiSet) != null ? ref.show() : void 0;
    };
    // * Если какой-либо UI элемент обрабатывает нажатие курсора, то true
    _.isAnyUIElementTouchProcess = function() {
      return false;
    };
    // * Эффект нажатия курсора
    return _.playClickEffect = function(noSound = false) {
      var effect, x, y;
      if (!this.isValid()) {
        return;
      }
      if (!noSound) {
        SoundManager.playCursor();
      }
      ({x, y} = TouchInput);
      effect = new ANET.Sprite_MapClickEffect(x, y);
      this.uiSet.addChild(effect);
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * Меню игрока
    // -----------------------------------------------------------------------
    _.playerMenu = function() {
      return this.uiSet.playerMenuWindow;
    };
    // * Есть ли меню игрока (создан ли), так как опциональный и нету в Basic
    _.isPlayerMenuValid = function() {
      return this.isValid() && (this.playerMenu() != null);
    };
    _.isPlayerMenuIsOpen = function() {
      return this.isPlayerMenuValid() && this.playerMenu().isOpen();
    };
    // * netChar - класс NETCharacter
    _.openNetPlayerMenuFor = function(netChar) {
      if (!this.isPlayerMenuValid()) {
        return;
      }
      if (netChar == null) {
        this.closePlayerMenu();
      }
      this.playerMenu().openForCharacter(netChar);
    };
    return _.closePlayerMenu = function() {
      var ref;
      if ((ref = this.playerMenu()) != null) {
        ref.close();
      }
    };
  })();
  (function() {    // * Чат
    // -----------------------------------------------------------------------
    _.chat = function() {
      return this.uiSet.chatWindow;
    };
    // * Есть ли чат (создан ли), так как опциональный и нету в Basic
    _.isChatValid = function() {
      return this.isValid() && (this.chat() != null);
    };
    // * Открыто ли окно чата
    _.isChatOpen = function() {
      return this.isChatValid() && this.chat().isActive();
    };
    // * Показать сцену ввода сообщения в чат
    _.showChatInput = function() {
      if (!this.isValid()) {
        return;
      }
      SceneManager.push(Scene_NetChatInput);
    };
    // * Показать сцену ввода сообщения в чат (с учётом событий и сообщений)
    _.showChatInputSafe = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (this.isCanChatInput()) {
        return this.showChatInput();
      }
    };
    _.showChat = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (!this.isChatOpen()) {
        this.chat().open();
      }
    };
    _.closeChat = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (this.isChatOpen()) {
        this.chat().close();
      }
    };
    
    // * Добавить сообщение в чат (можно вызывать на любой сцене)
    _.addMessageToChat = function(message) {
      if (!this.isChatValid()) {
        return;
      }
      if (message == null) {
        return;
      }
      // * Если на карте, то добавляем прямо в чат
      if (KDCore.Utils.isSceneMap()) {
        this.chat().addMessageToChat(message);
        this.addEmotionToChat(message);
        if (ANET.PP.getChatAutoOpen()) {
          this.showChat();
        }
      } else {
        // * Иначе в историю
        $gameTemp._nChatHistory.push(message);
      }
    };
    // * Показать эмоцию из чата (вызывается либо когда сам отправляешь, либо на сцене карты)
    _.addEmotionToChat = function(message) {
      if (!this.isChatValid()) {
        return;
      }
      if (message == null) {
        return;
      }
      this.chat().parseEmotions(message);
    };
    // * Может ли игрок начать вводить текст в чат (другая сцена будет открыта)
    _.isCanChatInput = function() {
      return !($gameMessage.isBusy() || $gameMap.isEventRunning());
    };
    
    // * Открыть (или не надо) чат при переходе на сцену карты
    return _.openChatAfterMapLoaded = function() {
      if (!this.isChatValid()) {
        return;
      }
      if (!$gamePlayer._nChatIsClosed) {
        return this.showChat();
      }
    };
  })();
  (function() {    // -----------------------------------------------------------------------

    // * Модальное диалоговое окно
    // -----------------------------------------------------------------------
    _.modalWindow = function() {
      return this.uiSet.netModalDialog;
    };
    _.isModalWindowIsOpen = function() {
      var ref;
      return this.isValid() && ((ref = this.modalWindow()) != null ? ref.isOpen() : void 0);
    };
    // * Если сцена закрывается, а окно октрыто -> автоматический ответ "НЕТ"
    _.terminateModalWindow = function() {
      var e;
      try {
        if (this.isModalWindowIsOpen()) {
          this.modalWindow().forceCancel();
        }
      } catch (error) {
        e = error;
        ANET.w(e);
      }
    };
    // * Показать модальное окно для начала торговли, где initiator игрок который отправил нам запрос
    return _.showModalWindowForTrade = function(initiatorId) {
      var e, name;
      if (!this.isValid()) {
        return;
      }
      if (!String.any(initiatorId)) {
        return;
      }
      try {
        name = nAPI.getPlayerInfo("actorName", "netId", initiatorId);
        return this.modalWindow().openForTradeRequest(name);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    };
  })();
})();

// ■ END ANET.UI.coffee
//---------------------------------------------------------------------------
// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Класс которые работает с параметрами и командами плагина
(function() {
  var ParamsManager;
  ParamsManager = (function() {
    class ParamsManager extends KDCore.ParamLoader {
      constructor() {
        super("ANETZ");
        this._prepareParameters();
      }

      //? GAME ID --------------------------------------------------------------
      // * Пользовательский GameID
      isUseCustomGameId() {
        return this.getParam("isCustomGameId", false) && String.any(this.getCustomGameId());
      }

      getCustomGameId() {
        return this.getParam("customGameId", "");
      }

      //? CONNECTION -----------------------------------------------------------
      // * Настройки соединения
      serverIp() {
        return this._ip;
      }

      serverPort() {
        return this._port;
      }

      isHTTPSConnection() {
        return this._isHttps === true;
      }

      //? MULTIPLAYER GROUP -----------------------------------------------------------

        //Join to Game Allowed?
      isJoinStartedRoomAllowed() {
        return this.getParam("joinStartedAllowed", false);
      }

      //Join to Loaded Game?
      isJoinStartedAndLoadedRoom() {
        return this.getParam("joinStartedAndLoadedAllowed", true);
      }

      //On Player Joined CE
      getJoinedRoomCommonEvent() {
        return this.getParam("onJoinCE", 0);
      }

      //Wait Map Transfer?
      isOnlySameMapMode() {
        return this.getParam("onlySameMap", true);
      }

      // New Game Allowed?
      // * Доступна ли обычная локальная Новая игра
      isSinglePlayerAllowed() {
        return this.getParam("singlePlayerAllowed", true);
      }

      // Is Check Ready?
      // * Проверять готовность игрока перед началом игры?
      isCheckPlayerReadyState() {
        return this.getParam("isReadyStatusCheck", true);
      }

      //Rooms Filter?
      isRoomFilterON() {
        return ANET.isPro() && this.getParam("roomFilter", false);
      }

      //Save and Load Allowed?
      // * Сохранение и загрузка сетевой игры
      isSaveLoadAllowed() {
        return this.getParam("saveLoadGame", true);
      }

      // Is show network icons?
      // * Показывать иконки статуса игрока
      isShowNetworkIcons() {
        return this.getParam("networkStatusIcons", true);
      }

      // Join Random Room Option
      // * Показывать опцию (Подключиться к случайной комнате)
      isJoinRandomRoomAllowed() {
        return this.getParam("isJoinRandomOptionExists", true);
      }

      //In-Game Chat?
      isGameChatAllowed() {
        if (ANET.isPro()) {
          return this.getParam("inGameChat", false);
        } else {
          return false;
        }
      }

      //Is Encounters is Global?
      isMapEncountersGlobal() {
        return this.getParam("isMapEncountersGlobal", false);
      }

      //? NAMEPLATES SUBGROUP ----------------------------------------------------

        //Is show Nameplates?
      // * Показывать имя персонажа (над персонажем)
      isShowNameplates() {
        return this.getParam("isUseNameplates", true);
      }

      //Actor name?
      // * Показывать имя персонажа (или игрока)
      isShowActorNameInNameplate() {
        return this.getParam("isShowActorNameInNameplate", true);
      }

      //My namaplate?
      // * Показывать имя над моим персонажем?
      isShowNameplateOverMyCharacter() {
        return this.getParam("isShowMyNameplate", false);
      }

      //Styles
      getNameplateStyles() {
        return this.getParam("nameplatesDB", []);
      }

      //? CHAT SUBGROUP -----------------------------------------------------------

        //Start Message
      getChatStartMessage() {
        return this.getParam("chatStartMessage", "");
      }

      getChatOpenCloseKey() {
        return this.getParam("chatOpenCloseKey", "t");
      }

      getChatSayKey() {
        return this.getParam("chatSayKey", "t");
      }

      getChatAutoOpen() {
        return this.getParam("chatAutoOpen", false);
      }

      // Is click to Say?
      isSayIfClickOnChatWindow() {
        return this.getParam("clickOnChatToSay", true);
      }

      // Messages Settings
      getChatMessagesSettings() {
        return this.getParam("chatMessagesSettings", {
          maxlength: 32,
          forbiddenEscapeCodes: "V",
          iconsSize: 18,
          allowEmotions: true
        });
      }

      // Input Text Scene
      getChatInputSceneVisualSettings() {
        return this.getParam("chatInputSceneVisualSettings", {
          mapChannelButtonPosition: {
            x: 4,
            y: 6
          },
          allChannelButtonPosition: {
            x: 104,
            y: 6
          },
          inputSceneOkButtonPosition: {
            x: 356,
            y: 284
          }
        });
      }

      //? PLAYER MENU -----------------------------------------------------------

        //In-Game Player Menu?
      // * Меню игрока - включено? (вообще в игре)
      isInGamePlayerMenuAllowed() {
        if (ANET.isPro()) {
          return this.getParam("playerMenuSettingsGroup", true);
        } else {
          return false;
        }
      }

      // * Стандартные команды для меню игрока
      getPlayerMenuDefaultCommands() {
        return this._menuCommands;
      }

      //Custom Commands
      getPlayerMenuUserCommands() {
        return this.getParam("userIPLMenuCommands", []);
      }

      //Is need trade confirm window?
      // * Спрашивать игрока о начале торговли? (запрос торговли от другого)
      isShowModalForTradeRequest() {
        return this.getParam("isTradeModalWindowActive", true);
      }

      getTradeModalWindowText() {
        return this.getParam("tradeModalWindow_text", "Accept \\C[1]Trade\\C[0] from \\C[2]%1\\C[0]?");
      }

      getModalWindowOpenSE() {
        return this.getParam("tradeModalWindow_openSE", "Bell3");
      }

      getModalWindowYesHotkey() {
        return this.getParam("tradeModalWindow_hkYes", "y");
      }

      getModalWindowNoHotKey() {
        return this.getParam("tradeModalWindow_hkNo", "n");
      }

      //? LOBBY CHAT -----------------------------------------------------------
      isShowLobbyChat() {
        return this.getParam("lobbyChat", true);
      }

      isLobbyChatIsGlobal() {
        return this.getParam("lobbyChatIsGlobal", false);
      }

      //? PLAYER SETTINGS GROUP -----------------------------------------------------------

        // * Набор персонажей Actors для сетевой игры
      //Actors
      actorsForNetwork() {
        return this.getParam("actorsForNetwork", [1, 2, 3, 4]);
      }

      //?VERSION
      //Players per Room
      maxPlayersInRoom() {
        return this.getParam("maxPlayersInRoom", 4);
      }

      // * Можно ли выбирать персонажа себе
      //Actor selection?
      isActorSelectionAllowed() {
        return this.getParam("isActorSelectionAllowed", true);
      }

      // * Можно ли начать сетевую игру одному
      //One player start?
      isSingleActorNetworkGameAllowed() {
        return this.getParam("isSinglePlayerStartAllowed", true);
      }

      // * Отображение имени игрока заместо имени персонажа
      // * 0 - Не показывать, 1 - Name, 2 - Nickname
      //?DINAMIC
      //Player Name for Actor
      playerActorNameType() {
        return 0;
      }

      //On Player Disconnect CE
      getPlayerLeaveGameCommonEventId() {
        return this.getParam("playerLeaveGameCommonEvent", 0);
      }

      //? OTHER -----------------------------------------------------------
      globalVariablesIds() {
        return this._globalVars;
      }

      globalSwitchesIds() {
        return this._globalSwitches;
      }

      //Input Max Length
      getTextInputMaxLength() {
        return this.getParam("textInputMaxLength", 12);
      }

      getLocaleValue(id, arg) {
        var value;
        value = this._localeDB[id] || id.toString();
        if ((arg != null) && String.any(arg.toString())) {
          value = value.replace("%1", arg);
        }
        return value;
      }

      //%[UI DATA]
      // * Метод из AABSZ
      uiData(tag, arg) {
        var method;
        // * Поиск соответсвующих настроек по тэгу элемента
        method = "_getDefaultVisualFor_" + tag;
        if (this[method] != null) {
          return this[method](arg);
        }
        return null;
      }

      //? NOT IN HEADER YET -------------------------------------

        // * Можно ли просматривать статус других игроков
      isOtherPlayersMenuStatusAllowed() {
        return true;
      }

      // * Видно ли других игроков в меню
      isOtherPlayersVisibleInMenu() {
        return true;
      }

      // * Ожидание получения действия от каждого игрока в битве
      isForceBattleSyncMode() {
        return true;
      }

      // * Время обновления данных игрока (на карте)
      playerDataRefreshRate() {
        return 60;
      }

      // * Время обновления данных в битве (влияет на производительность)
      battleDataRefreshRate() {
        return 60;
      }

      // * Настройки Trade сцены (визуальные)
      tradeSceneSettings() {} //TODO:

      
        //TODO: Параметр
      isSaveOnlyInMenu() {
        return false;
      }

      tradeSceneCompleteSE() {
        return "";
      }

      //$[EXPEREMENT, inDEV]
      //TODO: Параметр
      isMultiActorsMode() {
        return false;
      }

    };

    // * Создаём Shortcut для этого методы
    ANET.LV = function() {
      return ANET.PP.getLocaleValue(...arguments);
    };

    return ParamsManager;

  }).call(this);
  ANET.link(ParamsManager);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.ParamsManager.prototype;
  _._prepareParameters = function() {
    this._prepareConnectionSettings();
    this._preparePlayerActorName();
    this._prepareGlobalData();
    this._prepareDefaultPlayerMenuCommands();
    this._prepareLocaleValues();
  };
  //?VERSION
  //! У базовой версии свой метод!
  _._prepareConnectionSettings = function() {
    var p;
    p = this.getParam("connection", {
      serverIp: "195.161.41.20",
      serverPort: "3034",
      isHttpsConnection: false
    });
    this._ip = p.serverIp;
    this._port = p.serverPort;
    this._isHttps = p.isHttpsConnection;
    // * Это тут по сути не нужно (так как у базовой версии свой метод)
    if (this.isHTTPSConnection() && !ANET.isPro()) {
      window.alert("Only Alpha NET Z [PRO] supports HTTPS connection!");
      this._isHttps = false;
    }
  };
  _._preparePlayerActorName = function() {
    var p;
    p = this.getParam("playerActorNameType", "");
    switch (p) {
      case "Instead Name":
        this.playerActorNameType = function() {
          return 1;
        };
        break;
      case "Instead Nickname":
        this.playerActorNameType = function() {
          return 2;
        };
        break;
    }
  };
  // * Ничего, так как 0 по умолчанию
  _._prepareGlobalData = function() {
    var p;
    p = this.getParam("globalData", {
      globalSwitchesIds: [],
      globalVariablesIds: []
    });
    this._globalVars = p.globalVariablesIds;
    this._globalSwitches = p.globalSwitchesIds;
  };
  _._prepareDefaultPlayerMenuCommands = function() {
    var cmd, commandNames, i, len, name;
    this._menuCommands = [];
    commandNames = ["trade", "status", "follow"];
    for (i = 0, len = commandNames.length; i < len; i++) {
      name = commandNames[i];
      cmd = this.getParam("PlayerMenuItem_" + name, null);
      if (cmd == null) {
        continue;
      }
      cmd.action = name; // * флаг
      if (cmd.visible === true) {
        this._menuCommands.push(cmd);
      }
    }
  };
  _._prepareLocaleValues = function() {
    var p;
    // * Чтобы не дублировать, тут используем {} пустой
    p = this.getParam("localeDB", {});
    // * Заполняем значение с учётом Default значений
    // * Так сделано, так как при добавлении новых, их может ещё не быть у пользователя
    this._localeDB = {
      network: p.network || "Network",
      createRoom: p.createRoom || "Create Room",
      joinRoom: p.joinRoom || "Join Room",
      joinRandomRoom: p.joinRandomRoom || "Join Random Room",
      settings: p.settings || "Settings",
      start: p.start || "Start",
      leave: p.leave || "Leave",
      joinGame: p.joinGame || "Join Game",
      ready: p.ready || "Ready",
      character: p.character || "Character",
      close: p.close || "Close",
      welcome: p.welcome || "Welcome, %1",
      playersCount: p.playersCount || "Players on server: %1"
    };
  };
})();

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


function _0x2670() {
    var _0x1feec4 = [
        '\x5f\x67\x65\x74\x44\x65\x66\x61\x75\x6c\x74\x56\x69\x73\x75\x61\x6c\x46\x6f\x72\x5f\x6e\x65\x74\x43\x68\x61\x74\x54\x65\x78\x74\x4c\x69\x6e\x65',
        '\x36\x36\x32\x32\x38\x73\x58\x4c\x71\x62\x4f',
        '\x31\x34\x35\x71\x63\x73\x4c\x69\x47',
        '\x67\x65\x74\x50\x61\x72\x61\x6d',
        '\x5c\x7d\x5c\x7d\x5c\x43\x5b\x33\x5d\x5b\x25\x31\x5d\x5c\x7b\x5c\x7b\x20\x5c\x43\x5b\x36\x5d\x25\x33',
        '\x31\x36\x36\x36\x39\x31\x30\x4b\x58\x6f\x4e\x68\x52',
        '\x41\x4c\x4c',
        '\x69\x6e\x47\x61\x6d\x65\x43\x68\x61\x74\x54\x65\x78\x74\x4c\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73',
        '\x33\x35\x36\x35\x36\x37\x34\x78\x57\x46\x50\x71\x4b',
        '\x31\x36\x34\x30\x38\x39\x37\x30\x6f\x51\x79\x74\x4b\x64',
        '\x74\x6f\x43\x73\x73',
        '\x5c\x7d\x5c\x7d\x5c\x43\x5b\x33\x5d\x5b\x25\x31\x5d\x20\x5c\x7b\x5c\x7b\x5c\x43\x5b\x32\x5d\x25\x32\x20\x5c\x43\x5b\x30\x5d\x25\x33',
        '\x31\x34\x39\x39\x38\x38\x36\x52\x79\x4a\x53\x6c\x77',
        '\x4d\x41\x50',
        '\x31\x32\x34\x39\x31\x38\x30\x4e\x55\x56\x4d\x4b\x73',
        '\x5c\x7d\x5c\x7d\x5c\x43\x5b\x33\x5d\x5b\x25\x31\x5d\x5c\x43\x5b\x31\x5d\x5b\x4d\x45\x5d\x5c\x7b\x5c\x7b\x20\x5c\x43\x5b\x30\x5d\x25\x33',
        '\x39\x6f\x78\x72\x5a\x49\x6e',
        '\x38\x52\x71\x71\x61\x44\x73',
        '\x34\x35\x37\x38\x37\x34\x39\x49\x4b\x49\x44\x45\x46',
        '\x47\x72\x61\x70\x68\x69\x63\x73\x2e\x68\x65\x69\x67\x68\x74\x20\x2d\x20\x31\x39\x33',
        '\x23\x35\x39\x61\x33\x64\x39',
        '\x5f\x67\x65\x74\x44\x65\x66\x61\x75\x6c\x74\x56\x69\x73\x75\x61\x6c\x46\x6f\x72\x5f\x69\x6e\x47\x61\x6d\x65\x43\x68\x61\x74\x57\x69\x6e\x64\x6f\x77'
    ];
    _0x2670 = function () {
        return _0x1feec4;
    };
    return _0x2670();
}
function _0x3842(_0x4a9af4, _0x2af16f) {
    var _0x2670a4 = _0x2670();
    return _0x3842 = function (_0x38429b, _0x22659c) {
        _0x38429b = _0x38429b - 0x7a;
        var _0x3c9bc4 = _0x2670a4[_0x38429b];
        return _0x3c9bc4;
    }, _0x3842(_0x4a9af4, _0x2af16f);
}
(function (_0x2fdd12, _0x62adb0) {
    var _0x3deb70 = _0x3842, _0x71b38f = _0x2fdd12();
    while (!![]) {
        try {
            var _0x4722bb = parseInt(_0x3deb70(0x88)) / 0x1 + -parseInt(_0x3deb70(0x8f)) / 0x2 + -parseInt(_0x3deb70(0x7d)) / 0x3 * (parseInt(_0x3deb70(0x7b)) / 0x4) + -parseInt(_0x3deb70(0x85)) / 0x5 * (-parseInt(_0x3deb70(0x84)) / 0x6) + -parseInt(_0x3deb70(0x7f)) / 0x7 * (parseInt(_0x3deb70(0x7e)) / 0x8) + -parseInt(_0x3deb70(0x8b)) / 0x9 + parseInt(_0x3deb70(0x8c)) / 0xa;
            if (_0x4722bb === _0x62adb0)
                break;
            else
                _0x71b38f['push'](_0x71b38f['shift']());
        } catch (_0x532d5b) {
            _0x71b38f['push'](_0x71b38f['shift']());
        }
    }
}(_0x2670, 0xd97a4), (function () {
    var _0x40ace1 = _0x3842, _0x8201ba;
    _0x8201ba = ANET['\x50\x61\x72\x61\x6d\x73\x4d\x61\x6e\x61\x67\x65\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'], _0x8201ba[_0x40ace1(0x82)] = function () {
        var _0x480094 = _0x40ace1;
        return this[_0x480094(0x86)]('\x69\x6e\x47\x61\x6d\x65\x43\x68\x61\x74\x57\x69\x6e\x64\x6f\x77\x56\x69\x73\x75\x61\x6c\x53\x65\x74\x74\x69\x6e\x67\x73', {
            '\x73\x69\x7a\x65': {
                '\x77': 0x138,
                '\x68': 0xc0
            },
            '\x70\x6f\x73\x69\x74\x69\x6f\x6e': {
                '\x78': 0x1,
                '\x79': _0x480094(0x80)
            },
            '\x6e\x6f\x74\x41\x63\x74\x69\x76\x65\x4f\x70\x61\x63\x69\x74\x79': 0x8c,
            '\x6d\x61\x78\x4d\x65\x73\x73\x61\x67\x65\x73': 0x9,
            '\x66\x69\x72\x73\x74\x43\x68\x61\x74\x4d\x65\x73\x73\x61\x67\x65\x4d\x61\x72\x67\x69\x6e': {
                '\x78': 0x3,
                '\x79': 0x91
            }
        });
    }, _0x8201ba[_0x40ace1(0x83)] = function () {
        var _0x2b61ba = _0x40ace1;
        return this[_0x2b61ba(0x86)](_0x2b61ba(0x8a), {
            '\x73\x69\x7a\x65': {
                '\x77': 0x132,
                '\x68': 0x12
            },
            '\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x41': {
                '\x63\x6f\x6c\x6f\x72': _0x2b61ba(0x81)[_0x2b61ba(0x8d)](),
                '\x6f\x70\x61\x63\x69\x74\x79': 0x28
            },
            '\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x42': {
                '\x63\x6f\x6c\x6f\x72': '\x23\x35\x39\x61\x33\x64\x39'['\x74\x6f\x43\x73\x73'](),
                '\x6f\x70\x61\x63\x69\x74\x79': 0x46
            },
            '\x74\x65\x78\x74\x4c\x69\x6e\x65': {
                '\x76\x69\x73\x69\x62\x6c\x65': !![],
                '\x73\x69\x7a\x65': {
                    '\x77': 0x208,
                    '\x68': 0x14
                },
                '\x66\x6f\x6e\x74': {
                    '\x66\x61\x63\x65': null,
                    '\x73\x69\x7a\x65': 0xe,
                    '\x69\x74\x61\x6c\x69\x63': ![]
                },
                '\x6d\x61\x72\x67\x69\x6e\x73': {
                    '\x78': 0x4,
                    '\x79': -0x3
                }
            },
            '\x74\x65\x78\x74\x46\x6f\x72\x6d\x61\x74': _0x2b61ba(0x8e),
            '\x74\x65\x78\x74\x46\x6f\x72\x6d\x61\x74\x46\x6f\x72\x50\x6c\x61\x79\x65\x72': _0x2b61ba(0x7c),
            '\x74\x65\x78\x74\x46\x6f\x72\x6d\x61\x74\x46\x6f\x72\x53\x79\x73\x74\x65\x6d': _0x2b61ba(0x87),
            '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x65\x65\x64\x49\x6e\x50\x78': 0x12,
            '\x63\x68\x61\x6e\x6e\x65\x6c\x41\x6c\x6c': _0x2b61ba(0x89),
            '\x63\x68\x61\x6e\x6e\x65\x6c\x4d\x61\x70': _0x2b61ba(0x7a)
        });
    };
}()));

// Generated by CoffeeScript 2.5.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания флагов (или данных) от других игроков
var PlayersCheckPool;

PlayersCheckPool = class PlayersCheckPool {
  constructor(anotherPlayersGetter) {
    this.anotherPlayersGetter = anotherPlayersGetter;
    this.reset();
    return;
  }

  // * Главный метод -> отправка на сервер запроса
  requestToServer(requestMethod) {
    this.requestMethod = requestMethod;
    return this.requestMethod();
  }

  update() {
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      this.checkPool();
      if (!this.isReady()) {
        this.requestToServer(this.requestMethod);
        this.resetTimer();
      } else {
        if (this.callback != null) {
          this.callback();
        }
      }
    }
  }

  // * Проверка пула данных
  checkPool() {
    var anotherPlayersIds, i, id, len, poolSize;
    poolSize = 0;
    // * Подразумевается что в этом массиве только ID других игроков (кроме себя)
    anotherPlayersIds = this.anotherPlayersGetter().map(function(pl) {
      return pl.actorId;
    });
    for (i = 0, len = anotherPlayersIds.length; i < len; i++) {
      id = anotherPlayersIds[i];
      if (this.isDataExistsFor(id)) {
        poolSize += 1;
      }
    }
    if (poolSize === anotherPlayersIds.length) {
      // * Поэтому, когда пул полный, проверяем что данные от себя тоже есть
      this._isReady = this.isMyDataExists();
    } else {
      this._isReady = false;
    }
  }

  onReady(callback) {
    this.callback = callback;
  }

  isReady() {
    return this._isReady === true;
  }

  setMyData(data) {
    return this.onAnswer(ANGameManager.myActorId(), data);
  }

  isMyDataExists() {
    return this.isDataExistsFor(ANGameManager.myActorId());
  }

  isDataExistsFor(actorId) {
    return this._anotherPlayersData[actorId] != null;
  }

  // * Этот метод вызывается внешне, когда пришли данные от сервера
  onAnswer(actorId, data) {
    return this._anotherPlayersData[actorId] = data;
  }

  reset() {
    this.resetTimer();
    this._isReady = false;
    this._anotherPlayersData = {};
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

};


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания флагов (или данных) от других игроков
var PlayersDataPool;

PlayersDataPool = class PlayersDataPool {
  constructor(anotherPlayersGetter) {
    this.anotherPlayersGetter = anotherPlayersGetter;
    this.reset();
    return;
  }

  // * Режим ожидания не данных, а чтобы у всех был TRUE
  setFlagMode() {
    return this._isFlagMode = true;
  }

  // * Главный метод -> отправка на сервер запроса
  register(requestMethod) {
    this.requestMethod = requestMethod;
    return this.requestMethod();
  }

  update() {
    if (this.isReady()) { // * Чтобы цикла не было по вызову callback
      return;
    }
    this._timeout--;
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      this.checkPool();
      if (!this.isReady()) {
        this.resetTimer();
        if (this._timeout > 0) {
          this.register(this.requestMethod);
        } else {
          this._isTimedOut = true;
          if (this.failCallback != null) {
            this.failCallback();
          }
          // * Сброс (например если Timeout не предусмотрен, не задан метод failCallback)
          this.resetTimeout();
        }
      } else {
        if (this.callback != null) {
          this.callback();
        }
      }
    }
  }

  // * Проверка пула данных
  checkPool() {
    var anotherPlayersIds, i, id, len, poolSize;
    poolSize = 0;
    // * Подразумевается что в этом массиве только ID других игроков (кроме себя)
    anotherPlayersIds = this.anotherPlayersGetter().map(function(pl) {
      return pl.actorId;
    });
    for (i = 0, len = anotherPlayersIds.length; i < len; i++) {
      id = anotherPlayersIds[i];
      if (this.isDataExistsFor(id)) {
        poolSize += 1;
      }
    }
    if (poolSize === anotherPlayersIds.length) {
      // * Поэтому, когда пул полный, проверяем что данные от себя тоже есть
      this._isReady = this.isMyDataExists();
    } else {
      this._isReady = false;
    }
  }

  onReady(callback) {
    this.callback = callback;
  }

  onFail(failCallback) {
    this.failCallback = failCallback;
  }

  isReady() {
    return this._isReady === true;
  }

  isTimedOut() {
    return this._isTimedOut === true;
  }

  setMyData(data) {
    return this.onAnswer(ANGameManager.myActorId(), data);
  }

  isMyDataExists() {
    return this.isDataExistsFor(ANGameManager.myActorId());
  }

  isDataExistsFor(actorId) {
    return this.getDataFor(actorId) != null;
  }

  getDataFor(actorId) {
    return this._anotherPlayersData[actorId];
  }

  getData() {
    return this._anotherPlayersData;
  }

  // * Этот метод вызывается внешне, когда пришли данные от сервера
  onAnswer(actorId, data) {
    if (!this._isFlagMode) {
      this._anotherPlayersData[actorId] = data;
    } else {
      // * Если в режиме флагов, то только при TRUE присваиваем данные
      if (data === true) {
        this._anotherPlayersData[actorId] = data;
      } else {
        // * null, а не false, потому что проверка через ? идёт
        this._anotherPlayersData[actorId] = null;
        delete this._anotherPlayersData[actorId];
      }
    }
  }

  reset() {
    this.resetTimer();
    this.resetTimeout();
    this._isReady = false;
    this._isFlagMode = false;
    this._isTimedOut = false;
    this._anotherPlayersData = {};
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

  resetTimeout() {
    return this._timeout = 600;
  }

};


// Generated by CoffeeScript 2.6.1
//@[GLOBAL]
//?[STORABLE]

// * Класс для пула ожидания других игроков
var PlayersWaitPool;

PlayersWaitPool = class PlayersWaitPool {
  constructor() {
    // * Запоминается при создании, чтобы можно было сбросить
    // * Это нужно, чтобы если игрок новый переместился на карту, его
    // * не добавили в ожидание, если на этой карте уже запущено общее событие
    this._anotherPlayersIds = ANGameManager.anotherPlayersOnMap().map(function(pl) {
      return pl.actorId;
    });
    this.reset();
    return;
  }

  // * Зарегестрировать (отправить на сервер)
  register() {
    this.resetTimer();
    ANInterpreterManager.sendSharedEventRequireRegister();
  }

  // * Только один игрок (мастер события) запустил событие (один на карте или в игре)
  isSinglePool() {
    return this._anotherPlayersIds.length === 0;
  }

  // * Проверить, что игроки, которые в пуле, онлайн (не отключились)
  checkPool() {
    var i, id, len, player, playersOnMap, ref;
    playersOnMap = ANGameManager.anotherPlayersOnMap();
    ref = this._anotherPlayersIds;
    for (i = 0, len = ref.length; i < len; i++) {
      id = ref[i];
      // * Если игрока больше нет на карте, мы его удаляем из пула
      player = playersOnMap.find(function(pl) {
        return pl.actorId === id;
      });
      if (player == null) {
        this._anotherPlayersIds.delete(id);
        // * Игрок отключился, делаем ему true, чтобы можно было продолжить событие
        // * (в следующей команде он уже участвовать не будет, так как будет Reset)
        this._playersReady[id] = true;
      }
    }
  }

  // * Ответ от сервера
  onAnswer(actorId) {
    return this._playersReady[actorId] = true;
  }

  update() {
    if (this._repeatTimer >= 0) {
      this._repeatTimer--;
    } else {
      if (!this.isReady()) {
        this.checkPool();
        this.register();
      }
    }
  }

  isReady() {
    var pl, ref, value;
    ref = this._playersReady;
    for (pl in ref) {
      value = ref[pl];
      if (value === false) {
        // * Если хоть одно значение false, значит не готов
        return false;
      }
    }
    return true;
  }

  resetTimer() {
    return this._repeatTimer = 60;
  }

  // * Сбросить до нового ожидания
  reset() {
    var i, id, len, ref;
    // * Добавляем себя как готового всегда (тут не важент именно ID)
    // * В принципе можно и не добавлять, так как важнее другие игроки
    this._playersReady = {
      myActorId: true
    };
    ref = this._anotherPlayersIds;
    // * Добавляем всех игроков как изначально не готовых
    for (i = 0, len = ref.length; i < len; i++) {
      id = ref[i];
      this._playersReady[id] = false;
    }
    this.resetTimer();
  }

};


// Generated by CoffeeScript 2.6.1
// * Команды плагина
// * Нет класса или менеджера, так как только методы регистрации команд
(function() {
  var registerPluginCommandsMV, registerPluginCommandsMZ;
  // * Основной метод загрузки (регистрации команд плагина)
  ANET.loadPluginCommands = function() {
    if (KDCore.isMZ()) {
      registerPluginCommandsMZ('Alpha_NETZ');
      return registerPluginCommandsMZ('Alpha_NETZ_MZ');
    } else {
      return registerPluginCommandsMV();
    }
  };
  registerPluginCommandsMZ = function(pluginName) {
    PluginManager.registerCommand(pluginName, 'EventCommandSelector', function(args) {
      var e;
      try {
        return this.nSetCommandOptions(args);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    });
    PluginManager.registerCommand(pluginName, 'SharedBattle', function(args) {
      var e;
      try {
        return this.nSetSharedBattle(args.battleId);
      } catch (error) {
        e = error;
        return ANET.w(e);
      }
    });
  };
  registerPluginCommandsMV = function() {
    var e;
    try {
      // * Этот метод только для MV существует
      return ANET.registerMVPluginCommands();
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isActive, ALIAS__terminate, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Base.prototype;
  //@[ALIAS]
  ALIAS__isActive = _.isActive;
  _.isActive = function() {
    if (ANNetwork.isBusy()) {
      return false;
    } else {
      return ALIAS__isActive.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    if (ANNetwork.isBusy()) {
      return ANGameManager.updateWaiting();
    } else {
      return ALIAS__update.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__terminate = _.terminate;
  _.terminate = function() {
    // * Смена сцены
    if (ANNetwork.isConnected()) {
      ANGameManager.sendSceneChanging();
    }
    return ALIAS__terminate.call(this);
  };
})();

// ■ END Scene_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Base.prototype;
  //?EVENT
  // * Когда соединение прервано, вызывается это событие
  _.onLostConnection = function() {
    HUIManager.hideLoader();
    return SceneManager.goto(Scene_Title);
  };
  
  //?EVENT
  // * Когда закрывается комната, вызывается это событие
  _.netOn_lobby_roomClosed = function() {
    // * По умолчанию из любой сцены выходит в главное меню
    return SceneManager.goto(Scene_Title);
  };
  // * Когда пришло какое-либо сообщение от сервера
  //?EVENT
  _.onServerEvent = function(name) {
    var eventMethod;
    if (SceneManager.isBusyForNetworkData()) {
      return;
    }
    eventMethod = "netOn_" + name;
    if (this[eventMethod] != null) {
      console.log("Call scene callback for event " + name);
      this[eventMethod]();
    }
  };
})();

// ■ END Scene_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeInputWindow, ALIAS__commandFight, ALIAS__shouldAutosave, ALIAS__stop, ALIAS__updateBattleProcess, ALIAS__updateBattleProcessMV, ALIAS__updateTpbAutoBattle, _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  // * В сетевом режиме автосхранения отключены
  //@[ALIAS]
  ALIAS__shouldAutosave = _.shouldAutosave;
  _.shouldAutosave = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__shouldAutosave.call(this);
    }
  };
  //@[ALIAS, STORED]
  _.ALIAS__NET_start = _.start;
  _.start = function() {
    // * Если бой в сетевом режиме и ещё не зарегестрирован, то сцена боя не отрисовывается
    if (ANNetwork.isConnected() && BattleManager.nIsNetworkBattle() && !ANBattleManager.isBattleRegistred()) {
      return;
    }
    // * Метод Start вызывается автоматически у SceneManager, поэтому когда
    // * данные прийдут, сцена старт
    _.ALIAS__NET_start.call(this);
    if (ANNetwork.isConnected()) {
      this.nOnBattleStarted();
    }
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    if (ANNetwork.isConnected()) {
      this.nOnBattleEnd();
    }
  };
  //TODO: Есть проблема, ввод доступен, пока ждём сервер battleMethod
  //TODO: Может просто деактивировать все окна? Чтобы нельзя было выбирать действие

  // * Игрок не может видеть команды "ввода" персонажей других игроков
  //@[ALIAS]
  ALIAS__changeInputWindow = _.changeInputWindow;
  _.changeInputWindow = function() {
    ALIAS__changeInputWindow.call(this);
    if (ANNetwork.isConnected() && BattleManager.isInputting() && !$gameParty.isOneBattler()) {
      if (BattleManager.actor() != null) {
        if (BattleManager.actor() !== $gameParty.leader()) {
          this.endCommandSelection();
        }
      }
    }
  };
  
  //@[ALIAS]
  ALIAS__commandFight = _.commandFight;
  _.commandFight = function() {
    if (ANNetwork.isConnected()) {
      // * Игрок снова должен сделать выбор
      BattleManager._isShouldWaitMyNetworkAction = true;
    }
    ALIAS__commandFight.call(this);
  };
  // * Должен идти перед переопределением общим, поэтому в этом файле
  if (KDCore.isMV()) {
    //@[ALIAS]
    ALIAS__updateBattleProcessMV = _.updateBattleProcess;
    _.updateBattleProcess = function() {
      if (ANNetwork.isConnected()) {
        if (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) {
          this.changeInputWindow();
        }
        return BattleManager.update(); // * Надо обновлять не зависимо от условия вверху
      } else {
        return ALIAS__updateBattleProcessMV.call(this);
      }
    };
  }
  //@[ALIAS]
  ALIAS__updateBattleProcess = _.updateBattleProcess;
  _.updateBattleProcess = function() {
    // * На данный момент, если игрок один в битве, то он ничего не отравляет на сервер
    if (ANNetwork.isConnected()) {
      if ($gameParty.isOneBattler()) {
        // * Только обновлять данные HP и MP другим игрокам
        $gameParty.leader().updateDataObserver();
      } else {
        // * Логика сетевого боя (общая для мастера и клиентов)
        this.nUpdateBattleProcess();
        if (ANGameManager.isBattleMaster()) {
          ANBattleManager.update();
          // * Если ждём сервер, то не обновляем BattleManager
          if (ANBattleManager.isShouldWaitServer()) {
            return;
          }
        } else {
          // * BattleManager update (ALIAS__updateBattleProcess) выполняет только мастер битвы
          if (!BattleManager.nIsLocalForceUpdatePhase()) {
            return;
          }
        }
      }
    }
    ALIAS__updateBattleProcess.call(this);
  };
  
  // * На всякий случай отключу автобитву
  //@[ALIAS]
  ALIAS__updateTpbAutoBattle = _.updateTpbAutoBattle;
  _.updateTpbAutoBattle = function() {
    if (ANNetwork.isConnected()) {

    } else {
      return ALIAS__updateTpbAutoBattle.call(this);
    }
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  // * Когда пришли данные о битве от сервера (регистрация, новый участник)
  // * Этот метод выполняется на клиентах, которые УЖЕ в битве (а не на тех, кто присоединился)
  _.netOn_battle_serverBattleData = function() {
    var battler, battlerId, i, j, len, len1, ref, ref1;
    if ($gameTemp._previousNetBattleActors == null) {
      $gameTemp._previousNetBattleActors = [];
    }
    ref = $gameParty.battleMembers();
    // * Для всех новых, надо выполнять некоторые методы
    for (i = 0, len = ref.length; i < len; i++) {
      battler = ref[i];
      if (!$gameTemp._previousNetBattleActors.contains(battler.actorId())) {
        battler.onBattleStart();
        battler.makeActions();
      }
    }
    ref1 = $gameTemp._previousNetBattleActors;
    // * Всех старых, надо удалить из битвы
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      battlerId = ref1[j];
      if (!ANBattleManager.battleData.actors.contains(battlerId)) {
        $gameParty.removeActor(battlerId);
        BattleManager.nSafeRemoveActor();
      }
    }
    $gameTemp._previousNetBattleActors = [];
    $gamePlayer.refresh();
    $gameMap.requestRefresh();
    $gameTemp.requestBattleRefresh();
  };
  _.nOnBattleStarted = function() {
    // * Отправляем на сервер, что мы начали бой
    ANBattleManager.onBattleStarted();
  };
  _.nOnBattleEnd = function() {
    // * Отправляем на сервер, что мы покинули (закончили) бой
    ANBattleManager.onBattleEnd();
  };
  _.nUpdateBattleProcess = function() {
    var actor, enemy, i, j, len, len1, ref, ref1;
    // * За отправку данных отвечает только мастер боя
    if (ANGameManager.isBattleMaster()) {
      ref = $gameParty.battleMembers();
      for (i = 0, len = ref.length; i < len; i++) {
        actor = ref[i];
        actor.updateDataObserver();
      }
      ref1 = $gameTroop.members();
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        enemy = ref1[j];
        enemy.updateDataObserver();
      }
    }
  };
  _.nRefreshSharedBattle = function() {
    // * Обновить спрайты врагов
    return this._spriteset.nRefreshNetBattle();
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Boot.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__start, _;
  //@[DEFINES]
  _ = Scene_Boot.prototype;
  // * Загружаем и инициализируем сетевой код
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    ANET.System.initSystem();
  };
  // * Перезагружаем параметры плагина
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this, ...arguments);
    //? Это нужно чтобы eval от Graphics.width выполнился правильно
    ANET.System.loadParameters();
  };
})();

// ■ END Scene_Boot.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Equip.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, _;
  //@[DEFINES]
  _ = Scene_Equip.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме нельзя переключать персонажей
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
})();

// ■ END Scene_Equip.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Item.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Item.prototype;
})();

// ■ END Scene_Item.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_ItemBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__applyItem, _;
  //@[DEFINES]
  _ = Scene_ItemBase.prototype;
  //@[ALIAS]
  ALIAS__applyItem = _.applyItem;
  _.applyItem = function() {
    if (ANNetwork.isConnected()) {
      this.nPrepareApplyItemForNetwork();
    }
    ALIAS__applyItem.call(this);
    this.nClearApplyItemForNetwork();
  };
})();

// ■ END Scene_ItemBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_ItemBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_ItemBase.prototype;
  //TODO: MV ???
  //TODO: Параметр? А как в PVP быть? Можно же "яд" применить на другого перед боем
  //TODO: На одной карте или нет? Куча параметров в общем!
  // * Когда нужно выполнить действие из меню на другого игрока (например применить зелье)
  _.nPrepareApplyItemForNetwork = function() {
    $gameTemp.netApplyItemUser = this.user();
    $gameTemp.netApplyItemItem = this.item();
  };
  // * Очищаем флаги, чтобы другим действиям не мешать
  _.nClearApplyItemForNetwork = function() {
    $gameTemp.netApplyItemUser = null;
    $gameTemp.netApplyItemItem = null;
  };
})();

// ■ END Scene_ItemBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__onLoadFailure, ALIAS__terminate, _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected() && $gameTemp._nRequestLoadNetworkGame === true) {
      if (KDCore.isMZ()) {
        this.nLoadNetworkGameFromSavefile(); // * В MV в одном потоке, не переключает сцену сразу после инициализации
      } else {
        setTimeout((() => {
          return this.nLoadNetworkGameFromSavefile();
        }), 1);
      }
    }
  };
  //@[ALIAS]
  ALIAS__onLoadFailure = _.onLoadFailure;
  _.onLoadFailure = function() {
    // * Своя обработка ошибки загрузки в сетевом режиме
    if (ANNetwork.isConnected() && $gameTemp._nRequestLoadNetworkGame === true) {
      this.nOnLoadFailure();
    } else {
      ALIAS__onLoadFailure.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__terminate = _.terminate;
  _.terminate = function() {
    ALIAS__terminate.call(this);
    // * Сбросим флаг
    $gameTemp._nRequestLoadNetworkGame = false;
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onSavefileOk, _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * В MV версии нету проверки на Enabled, так что доп. проверка
  //@[ALIAS]
  ALIAS__onSavefileOk = _.onSavefileOk;
  _.onSavefileOk = function() {
    // * Если сетевое сохранение, то НЕЛЬЗЯ загружать в обычной сцене загрузки
    if (DataManager.nIsNetworkSaveFile(this.savefileId())) {
      this.onLoadFailure();
    } else {
      ALIAS__onSavefileOk.call(this);
    }
  };
  
  // * В MV нету этого метода, добавим и будем использовать для загрузки сетевых сохранений
  //?[NEW]
  _.executeLoad = function(savefileId) {
    if (DataManager.loadGame(savefileId)) {
      this.onLoadSuccess();
    } else {
      this.onLoadFailure();
    }
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Load.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Load.prototype;
  _.nLoadNetworkGameFromSavefile = function() {
    var savefileId;
    savefileId = DataManager.nGetNetworkSaveFileIdByUniqueId(ANNetwork.room.uniqueSaveID);
    if (savefileId < 0) {
      this.nOnLoadFailure();
    } else {
      this.executeLoad(savefileId);
    }
  };
  _.nOnLoadFailure = function() {
    HUIManager.notifyError("Can't load Save file!");
    // * Через timeout а то не успевает, если сразу ошибка
    setTimeout((function() {
      return SceneManager.goto(Scene_Title);
    }), 1);
  };
})();

// ■ END Scene_Load.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__createSpriteset, ALIAS__onMapLoaded, ALIAS__onMapTouch, ALIAS__shouldAutosave, ALIAS__stop, ALIAS__updateCallMenu, _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //@[ALIAS]
  ALIAS__onMapLoaded = _.onMapLoaded;
  _.onMapLoaded = function() {
    ALIAS__onMapLoaded.call(this);
    if (ANNetwork.isConnected()) {
      ANGameManager.onMapLoaded();
      $gameParty.nRefreshNetworkActors();
      // * Сбрасываем режим "следовать"
      $gameTemp._netAutoFollowActorId = null;
    }
    // * Открыть (или нет) чат
    ANET.UI.openChatAfterMapLoaded();
    // * На всякий случай (для чата и торговли)
    $gameTemp.kdButtonUnderMouse = null;
    $gameTemp.floatingWindowUnderMouse = null;
    setTimeout((function() {
      $gameTemp.kdButtonUnderMouse = null;
      return $gameTemp.floatingWindowUnderMouse = null;
    }), 10);
  };
  
  // * В сетевом режиме автосхранения отключены
  //@[ALIAS]
  ALIAS__shouldAutosave = _.shouldAutosave;
  _.shouldAutosave = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__shouldAutosave.call(this);
    }
  };
  //@[ALIAS]
  // * Создаём интерфейс
  ALIAS__createSpriteset = _.createSpriteset;
  _.createSpriteset = function() {
    ALIAS__createSpriteset.call(this);
    if (!ANNetwork.isConnected()) {
      return;
    }
    this._netUI = new ANET.Spriteset_UI();
    this.addChild(this._netUI);
    this.nCreateModalWindow();
  };
  // * Запрет движения при нажатии на UI элементы
  //@[ALIAS]
  ALIAS__onMapTouch = _.onMapTouch;
  _.onMapTouch = function() {
    if (ANNetwork.isConnected()) {
      if (ANET.UI.isUITouched()) {
        return;
      }
    }
    ALIAS__onMapTouch.call(this);
  };
  // * Закрываем интерфейс
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    ANET.System.clearSceneMapGEvents();
    ANET.UI.terminate();
  };
  //@[ALIAS]
  ALIAS__updateCallMenu = _.updateCallMenu;
  _.updateCallMenu = function() {
    if (TouchInput.isCancelled() && ANNetwork.isConnected()) {
      // * Если действие ANET, то НЕ вызываем меню
      if (this.nOnMapCancelTouchComplete()) {
        return;
      }
    }
    return ALIAS__updateCallMenu.call(this);
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //?EVENT
  // * Когда игрок выходит или входит в комнату (покидает игру)
  _.netOn_lobby_refreshRoomData = function() {
    //TODO: Если игрок отключился, надо общее событие!
    $gameParty.nRefreshNetworkActors();
    $gameMap.refreshNetworkCharacters();
  };
  // * Модальное окно вопроса
  _.nCreateModalWindow = function() {
    //TODO: from parameters
    // * Добавляем на сцену карты (чтобы окно было всегда выше всех)
    this._netUI.netModalDialog = new FWindow_InGameModalDialog(this, 280, 120);
  };
  // * Проверка нажатия правой кнопки мыши
  // * Используется для выполнения своих действий (например открытия меню игрока)
  // * Сейчас этот метод отрабатывает только меню игрока
  // * Устанавливаем на Spriteset_UI, чтобы был доступ проще
  _.nOnMapCancelTouchComplete = function() {
    var e, netCharUnderCursor, x, y;
    if (!ANET.PP.isInGamePlayerMenuAllowed()) {
      return false;
    }
    try {
      if (ANET.UI.isPlayerMenuIsOpen()) {
        ANET.UI.closePlayerMenu();
        return true;
      } else {
        ({x, y} = TouchInput.toMapPoint());
        netCharUnderCursor = $gameMap.nGetNetCharXY(x, y);
        if (netCharUnderCursor == null) {
          return false;
        }
        ANET.UI.playClickEffect();
        ANET.UI.openNetPlayerMenuFor(netCharUnderCursor);
        return true; // * не открывать меню в этом случае
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return false;
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Menu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Menu.prototype;
})();

// ■ END Scene_Menu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_MenuBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_MenuBase.prototype;
  //?EVENT
  // * Когда пришли какие-либо данные DataObserver
  _.netOn_game_observerData = function() {
    return this.refreshNetwork();
  };
  //?EVENT
  // * Когда игрок выходит или входит в комнату (покидает игру)
  _.netOn_lobby_refreshRoomData = function() {
    var e, ref;
    try {
      $gameParty.nRefreshNetworkActors();
      // * Если есть окно с персонажами, обновить его
      // * Можно было вынести в класс Scene_Menu, но не хочу плодить одинаковые методы
      // * Так как тут в Scene_MenuBase тоже нужен метод
      if ((ref = this._statusWindow) != null) {
        ref.refresh();
      }
    } catch (error) {
      //TODO: Сделать как и в ALphaNET общий Refresh всех окон сцены
      e = error;
      ANET.w(e);
    }
  };
  // * Обновить все окна при изменениях данных из сети
  _.refreshNetwork = function() {
    var child, e, i, len, ref;
    if (!ANNetwork.isConnected()) {
      return;
    }
    try {
      this.updateActor();
      if (this._windowLayer == null) {
        return;
      }
      ref = this._windowLayer.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        if ((child != null) && (child.refresh != null)) {
          child.refresh();
        }
      }
      return;
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Scene_MenuBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сцена ввода сообщения для чата
var Scene_NetChatInput;

Scene_NetChatInput = class Scene_NetChatInput extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    this.settingsA = ANET.PP.getChatMessagesSettings();
    this.settingsB = ANET.PP.getChatInputSceneVisualSettings();
    if ($gameTemp._nChatLastChannelId == null) {
      $gameTemp._nChatLastChannelId = 0;
    }
    this._showNameInput();
    this._createGroupButtons();
    this._createOkButton();
    // * Делаем фокус ввода
    setTimeout((function() {
      return HUIManager.focusInput();
    }), 100);
  }

  stop() {
    $gameTemp._nChatLastChannelId = this.buttonsGroup.getSelectedIndex();
    this._hideNameInput();
    return super.stop();
  }

  update() {
    super.update();
    if (Input.isCancel()) {
      this.popScene();
    } else if (Input.isTriggered("ok")) {
      this.onOkClick();
    }
  }

  onOkClick() {
    var msg;
    msg = HUIManager.getInputValue();
    msg = this._filterTextLength(msg);
    msg = this._filterEscapeCharacters(msg);
    if (KDCore.isMZ()) {
      msg = this._applyIconsSize(msg);
    }
    if (String.any(msg)) {
      this._sendMessageToServer(msg);
    }
    return this.popScene();
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetChatInput.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetChatInput.prototype;
  _._filterTextLength = function(msg) {
    var e, maxlength;
    try {
      maxlength = this.settingsA.maxlength;
      if (msg.length > maxlength) {
        msg = msg.substr(0, maxlength);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return msg;
  };
  _._filterEscapeCharacters = function(msg) {
    var char, e, forbidden, i, len;
    try {
      forbidden = this.settingsA.forbiddenEscapeCodes.split(",");
      for (i = 0, len = forbidden.length; i < len; i++) {
        char = forbidden[i];
        msg = this._removeEscapeCharacterFromText(char.trim(), msg);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
    return msg;
  };
  _._removeEscapeCharacterFromText = function(escapeChar, text) {
    text = text.replace("\\" + escapeChar, "");
    return text;
  };
  _._applyIconsSize = function(msg) {
    var e, size;
    try {
      size = this.settingsA.iconsSize;
      if (msg.contains("\\I[")) {
        msg = msg.replace(/\\I\[(\d+)\]/, "\\ISZ[$1," + size + ",0,0]");
        return this._applyIconsSize(msg);
      } else {
        return msg;
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      return msg;
    }
  };
  _._sendMessageToServer = function(msg) {
    var channelId, e;
    try {
      channelId = this.buttonsGroup.getSelectedIndex();
      console.log("Send message from chat: " + msg);
      if (ANNetwork.isConnected()) {
        ANGameManager.sendMyChatMessage(channelId, msg);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  _._showNameInput = function() {
    HUIManager.showInput("Enter your message...", ANET.PP.getChatMessagesSettings().maxlength);
    HUIManager.setInputValue("");
  };
  _._hideNameInput = function() {
    return HUIManager.removeInput();
  };
  _._createGroupButtons = function() {
    var all, map, x, y;
    ({x, y} = this.settingsB.allChannelButtonPosition);
    all = [x, y];
    ({x, y} = this.settingsB.mapChannelButtonPosition);
    map = [x, y];
    this.buttonsGroup = new KDCore.Sprite_ButtonsGroup([
      {
        image: "nzButton_ChatGroup_All",
        position: all
      },
      {
        image: "nzButton_ChatGroup_Map",
        position: map
      }
    ], $gameTemp._nChatLastChannelId, null);
    this.addChild(this.buttonsGroup);
  };
  _._createOkButton = function() {
    var x, y;
    ({x, y} = this.settingsB.inputSceneOkButtonPosition);
    if (KDCore.isMZ()) {
      this._okButton = new Sprite_Button("ok");
    } else {
      this._okButton = new KDCore.ButtonM("nzButton_ChatSendMV", false, "Alpha");
      this._okButton.addClickHandler(this.onOkClick.bind(this));
      this._okButton.anchor.x = 0.5;
    }
    this._okButton.x = x;
    this._okButton.y = y;
    this.addWindow(this._okButton);
  };
})();

// ■ END Scene_NetChatInput.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Используется базовая сцена Scene_Item (выбора предмета)
var Scene_NetItemsForTrade;

Scene_NetItemsForTrade = class Scene_NetItemsForTrade extends Scene_Item {
  constructor() {
    super();
  }

  //$[OVER]
  onItemOk() {
    this._nItem = this.item();
    this._nCount = 1;
    if ($gameParty.numItems(this._nItem) > 1) {
      this.nShowNumberInputWindow();
    } else {
      this._onItemOkFinal();
    }
  }

  _onItemOkFinal() {
    // * Remove Item handling
    if (this._nItem.id === 0) {
      this._makeChangeInTradeItems(null, 0);
      this.popScene();
    } else if (this._nCount >= 1) {
      this._makeChangeInTradeItems(this._nItem, this._nCount);
      this.popScene();
    } else {
      this._itemWindow.activate();
    }
  }

  _makeChangeInTradeItems(item, count) {
    return ANTradeManager.onTradeChange(item, count);
  }

  
    //?[NEW]
  nShowNumberInputWindow() {
    this._nNumberInputWindow = new Window_NTradeItemNumberInput();
    this.addWindow(this._nNumberInputWindow);
    this._nNumberInputWindow.setItem(this._nItem);
    this._nNumberInputWindow.setOkHandler(() => {
      this._nCount = this._nNumberInputWindow._number;
      return this._onItemOkFinal();
    });
    this._nNumberInputWindow.start();
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Scene_NetworkGameMenu;

Scene_NetworkGameMenu = class Scene_NetworkGameMenu extends Scene_MenuBase {
  constructor() {
    super();
    return;
  }

  create() {
    super.create();
    // * Например если вернулись "назад" на эту сцену, то не надо снова соединяться
    if (!ANNetwork.isConnected()) {
      this._initNetwork();
    } else {
      this._initSceneComponents();
      this.refreshWelcomeText();
    }
  }

  update() {
    var ref;
    super.update();
    this._updateBackButton();
    this._updateRandomJoin(); //2
    if ((ref = this._playerCountRefreshThread) != null) {
      ref.update();
    }
  }

  stop() {
    HUIManager.removeInput();
    HUIManager.hideLoader();
    HUIManager.removeLobbyChat();
    return super.stop();
  }

  refreshWelcomeText() {
    var e, ref;
    try {
      return (ref = this._welcomeLine) != null ? ref.drawTextFull(ANET.LV("welcome", ANGameManager.myPlayerData().name)) : void 0;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  refreshPlayersCountText(count = 0) {
    var e;
    try {
      if (this._playerCountText == null) {
        return;
      }
      this._playerCountText.clear();
      return this._playerCountText.drawTextFull(ANET.LV("playersCount", count));
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  }

  // * Данный метод используется чтобы  заблокировать нажатие кнопкоп под HTML чатом
  setInputAllowed(isAllowed) {
    if (isAllowed === false) {
      this._commandsWindow.deactivate();
    } else {
      this._commandsWindow.activate();
    }
  }

  //?EVENT
  netOn_lobby_changePlayerName() {
    var ref;
    this.refreshWelcomeText();
    if ((ref = this._playerCountRefreshThread) != null) {
      ref.call();
    }
  }

  //?EVENT
  // * Когда игрок выходит или входит в комнату
  // * Этот метод тут, чтобы перекрыть Scene_MenuBase реализацию
  // * Так как пока нет необходимости $gameParty менять
  netOn_lobby_refreshRoomData() {} // * NOTHING

};

(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  _._initNetwork = function() {
    HUIManager.showLoader();
    ANNetwork.initSystem();
    ANNetwork.setConnection(this._onConnectionStatus.bind(this));
  };
  //?EVENT
  // * 0 - error, 1 - connect
  _._onConnectionStatus = function(statusCode) {
    switch (statusCode) {
      case 0:
        this._onConnectionRefused();
        break;
      case 1:
        this._onConnectionGood();
    }
  };
  _._onConnectionRefused = function() {
    HUIManager.hideLoader();
    HUIManager.notifyError("Server not response in time");
    return this.popScene();
  };
  _._onConnectionGood = function() {
    //TODO: Server version check
    HUIManager.hideLoader();
    if (!ANGameManager.isInited()) {
      ANGameManager.init();
    }
    HUIManager.notifySucess("Connected to server");
    return this._initSceneComponents();
  };
  // * Отрисовка меню, если соединение  было установлено
  _._initSceneComponents = function() {
    this._createNetworkMenu(); //1
    this._createWelcomeText(); //1
    HUIManager.showInput("Room Name...");
    this._createServerPlayerCountText();
    this._createPlayerCountRefreshThread();
    if (ANET.PP.isShowLobbyChat()) {
      HUIManager.showLobbyChat();
    }
  };
  _._updateBackButton = function() {
    var ref;
    if (KDCore.isMV()) {
      return;
    }
    // * Тут может быть вылет, если нет проверки null (?)
    return (ref = this._cancelButton) != null ? ref.visible = !HUIManager.isLoaderActive() : void 0;
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  _._createWelcomeText = function() {
    //TODO: From UI Text Component with user settings
    this._welcomeLine = KDCore.Sprite.FromBitmap(400, 60);
    this._welcomeLine.bitmap.fontSize = 38;
    this._welcomeLine.x = Graphics.width / 2 - this._welcomeLine.bitmap.width / 2;
    this._welcomeLine.y = 80;
    return this.addChild(this._welcomeLine);
  };
  _._createNetworkMenu = function() {
    var rect, wh, ww, wx, wy;
    ww = 400;
    wh = this.calcWindowHeight(4, true);
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._commandsWindow = new Window_NetworkGameMenu(rect);
    this._commandsWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandsWindow.setHandler('createRoom', this.commandCreateRoomMenu.bind(this));
    this._commandsWindow.setHandler('joinRoom', this.commandJoinRoomMenu.bind(this));
    this._commandsWindow.setHandler('joinRandRoom', this.commandJoinRandRoomMenu.bind(this)); //2
    this._commandsWindow.setHandler('settings', this.commandSettings.bind(this));
    return this.addWindow(this._commandsWindow);
  };
  _._createServerPlayerCountText = function() {
    this._playerCountText = KDCore.Sprite.FromBitmap(280, 40);
    this._playerCountText.bitmap.fontSize = 18;
    this._playerCountText.x = Graphics.width / 2 - this._playerCountText.bitmap.width / 2;
    this._playerCountText.y = this._commandsWindow.y + this._commandsWindow.height + 20;
    return this.addChild(this._playerCountText);
  };
  _._createPlayerCountRefreshThread = function() {
    var refreshMethod;
    refreshMethod = function() {
      //return if SceneManager.isSceneChanging()
      return ANNetwork.callback(NMS.Lobby("playersCountOnServ"), (count) => {
        var e;
        try {
          if (SceneManager.isSceneChanging()) {
            return;
          }
          return this.refreshPlayersCountText(count);
        } catch (error) {
          e = error;
          return ANET.w(e);
        }
      });
    };
    this._playerCountRefreshThread = new KDCore.TimedUpdate(300, refreshMethod.bind(this));
    this._playerCountRefreshThread.call();
  };
  _.commandCreateRoomMenu = function() {
    // * Сохраняем название команты
    $gameTemp._nLastRoomName = HUIManager.getInputValue();
    $gameTemp._nIsForwardTransitionToRoomTypeMenu = true;
    SceneManager.push(Scene_NetworkRoomTypeSelect);
  };
  _.commandJoinRoomMenu = function() {
    return SceneManager.push(Scene_NetworkRoomsList);
  };
  _.commandSettings = function() {
    return SceneManager.push(Scene_NetworkSettings);
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkGameMenu.prototype;
  // * Методы обработки подключения к случайной комнате
  _.commandJoinRandRoomMenu = function() {
    this.roomsList = null; // * Обнуляем список комнат
    this.requestRoomsListFromServer();
    this._waitRoomsForRandomJoin = true;
  };
  _.requestRoomsListFromServer = function() {
    ANNetwork.get(NMS.Lobby("getRoomsList"), (result) => {
      return this.roomsList = result;
    }, () => {
      // * Timeout
      console.log("Server not returns rooms list in time");
      return this._onCantJointRandomRoom();
    });
  };
  _._onCantJointRandomRoom = function() {
    this._waitRoomsForRandomJoin = false;
    this._commandsWindow.activate();
    HUIManager.notifyError("No available open rooms to join");
  };
  // * Ждём список комнат и пытаемся подключиться к случайной
  _._updateRandomJoin = function() {
    var randomRoomName;
    if (!this._waitRoomsForRandomJoin) {
      return;
    }
    if (this.roomsList == null) {
      return;
    }
    this._waitRoomsForRandomJoin = false;
    this.applyFiltersToRoomList();
    if (this.roomsList.length === 0) {
      this._onCantJointRandomRoom();
    } else {
      randomRoomName = this.roomsList.sample().name;
      this.joinToRoomRequest(randomRoomName);
    }
  };
  _.applyFiltersToRoomList = function() {
    if (this.roomsList == null) {
      this.roomsList = [];
    }
    if (this.roomsList.length === 0) {
      return;
    }
    this.roomsList = this.roomsList.filter((r) => {
      return this.isProperRoomToJoin(r);
    });
  };
  _.isProperRoomToJoin = function(roomData) {
    return NetRoomDataWrapper.isRoomProperToJoin(roomData);
  };
  _.joinToRoomRequest = function(roomName) {
    ANNetwork.get(NMS.Lobby("joinToRoom", roomName), (result) => {
      return this._onJoinedToRoom(result);
    }, () => {
      console.log("Can't join to Room, server not response in time");
      return this._commandsWindow.activate();
    });
  };
  //?EVENT
  _._onJoinedToRoom = function(roomData) {
    if (roomData == null) {
      console.log("Can't join to Room, Room not exists anymore");
      this._commandsWindow.activate();
    } else {
      ANNetwork.setRoomJoin(roomData);
      SceneManager.push(Scene_NetworkRoom);
    }
  };
})();

// ■ END Scene_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkInGameTrade.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

//%[I] Сейчас сцена торговли использует доп. сцену выбора предметов (стандартную)
// * Это не очень правильно, стоит сделать всё на одной сцене!
var Scene_NetworkInGameTrade;

Scene_NetworkInGameTrade = class Scene_NetworkInGameTrade extends Scene_MenuBase {
  constructor() {
    super();
  }

  //?EVENT
  netOn_game_playersData() {}

  //?EVENT COMMON
  // * Изменились данные другого игрока, возможно он вышел из сцены торговли
  // * либо disconnect
  // * Тут можно делать доп. проверку
  netOn_common_forClients_trade_items() {
    this.onAnotherPlayerChangeItems();
  }

  //?EVENT COMMON
  netOn_common_forClients_trade_status() {
    this.onAnotherPlayerChangeStatus();
  }

  //?EVENT COMMON
  netOn_common_trade_complete() {
    setTimeout((() => {
      return this.onTradeCancel();
    }), 10);
  }

  create() {
    super.create();
    this._inReadyState = false;
    this._preloadResources();
    this._createBackgroundParts();
    this._createActorInfoA();
    this._createActorInfoB();
    this._createTradeWindowA();
    this._createTradeWindowB();
    this._createForegroundParts();
    this.checkAnotherPlayerSceneStateThread = new KDCore.TimedUpdate(30, this._checkAnotherPlayerSceneStateTick.bind(this));
  }

  //TODO: parameters
  getSettings() {
    return {
      tradeWindowSize: {
        w: 240,
        h: 300
      }
    };
  }

  //%[I] Показывать текущее количество золота игрока, чтобы было удобней
  onTradeCancel() {
    "CANCEL".p();
    return this.popScene();
  }

  //@[OUTER] Вызывается когда приходят данные с сервера в ANTradeManager
  onAnotherPlayerChangeItems() {
    // * Если я уже был готов, то сброс и снова активация окна
    if (this._inReadyState === true) {
      this._resetTradeReadyStatus();
    }
    // * Обновить список торговли (предметов) другого игрока
    this.tradeWindowB.sub().refresh();
  }

  //@[OUTER] Вызывается когда другой игро меняет свой статус (готов или нет)
  onAnotherPlayerChangeStatus() {
    // * Если я уже был готов и статус положительный, то торговля удалась
    if (this._inReadyState === true) {
      if ($gameTemp._netHisTradeReadyStatus === true) {
        ANTradeManager.onTradeShouldComplete();
        // * Так как Common - это broadcast, то у себя сам вызываю метод завершения торговли
        this.netOn_common_trade_complete();
      } else {
        this._resetTradeReadyStatus();
      }
    }
    this.tradeWindowB.sub().refresh();
  }

  update() {
    var ref;
    super.update();
    return (ref = this.checkAnotherPlayerSceneStateThread) != null ? ref.update() : void 0;
  }

  //! Этот метод вызывается и когда появляется сцена выбора предмета!
  stop() {
    var ref, ref1;
    super.stop();
    // * Косяк KDCore
    $gameTemp.kdButtonUnderMouse = null;
    // * Это надо обязательно, чтобы не остался в Game_Temp
    if ((ref = this.tradeWindowA) != null) {
      ref.close();
    }
    if ((ref1 = this.tradeWindowB) != null) {
      ref1.close();
    }
    // * На всякий случай
    HUIManager.hideWaitingInfo();
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Scene_NetworkInGameTrade.prototype;
  _._checkAnotherPlayerSceneStateTick = function() {
    var e;
    try {
      if (!ANTradeManager.isTradeParticipantIsValid()) {
        return this.onTradeCancel();
      }
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._preloadResources = function() {
    //TODO: from parameters
    ImageManager.loadAA("nzTradeButton_00");
    ImageManager.loadAA("nzTradeButton_01");
    ImageManager.loadAA("nzTradeStatus_NotReady");
    ImageManager.loadAA("nzTradeStatus_Ready");
  };
  _._createBackgroundParts = function() {
    var i, item, len, parts;
    parts = [
      {
        image: "nzTradeWindowPortraitBack",
        position: {
          x: 216,
          y: 72
        }
      },
      {
        image: "nzTradeWindowPortraitBack",
        position: {
          x: 456,
          y: 72
        }
      }
    ];
    for (i = 0, len = parts.length; i < len; i++) {
      item = parts[i];
      this._createAndAddImage(item);
    }
  };
  // * {image, position {x, y}}
  _._createAndAddImage = function(item) {
    var img, x, y;
    img = new KDCore.UI.Sprite_UIImage({
      visible: true,
      image: item.image
    });
    x = eval(item.position.x);
    y = eval(item.position.y);
    img.x = x;
    img.y = y;
    this.addChild(img);
  };
  _._createActorInfoA = function() {
    var actor, actorAFace;
    actor = $gameParty.networkLeader();
    actorAFace = new KDCore.UI.Sprite_UIFace({
      visible: true,
      faceName: actor.faceName(),
      faceIndex: actor.faceIndex(),
      mirror: true,
      size: 130
    });
    actorAFace.move(220, 76);
    return this.addChild(actorAFace);
  };
  _._createActorInfoB = function() {
    var actor, actorBFace;
    actor = nAPI.getPlayerInfo("actor", "info", ANTradeManager.getTradeParticipantData());
    actorBFace = new KDCore.UI.Sprite_UIFace({
      visible: true,
      faceName: actor.faceName(),
      faceIndex: actor.faceIndex(),
      mirror: false,
      size: 130
    });
    actorBFace.move(462, 76);
    return this.addChild(actorBFace);
  };
  _._createTradeWindowA = function() {
    var size, tradeListWindow;
    size = new Rectangle(0, 0, 240, 300);
    tradeListWindow = new Window_NTradeItemsList(size, 0);
    tradeListWindow.setHandler('ok', this._onTradeWindowA_ok.bind(this));
    tradeListWindow.setHandler('cancel', this.onTradeCancel.bind(this));
    tradeListWindow.refresh();
    tradeListWindow.select(1); // * first slot for item
    tradeListWindow.activate();
    this.tradeWindowA = KDCore.FloatingWindow.StaticWindow(this, tradeListWindow);
    this.tradeWindowA.x = (Graphics.width / 2 - 240) - 30;
    this.tradeWindowA.y = (Graphics.height / 2) - 100;
    this.tradeWindowA.open();
  };
  //%[Обработка нажатия на пункт]
  _._onTradeWindowA_ok = function() {
    var index;
    index = this.tradeWindowA.sub().index();
    // * Запоминаем индекс выбранного пункта
    $gameTemp.__netTradeItemIndex = index;
    if (this.tradeWindowA.sub().isCurrentIndexTradeCommand()) {
      this._onTradeConfirmClick();
    } else if (this.tradeWindowA.sub().isCurrentIndexGoldCommand()) {
      this._nNumberInputWindow = new Window_NTradeItemNumberInput();
      this.addWindow(this._nNumberInputWindow);
      // * For Gold
      this._nNumberInputWindow.setItem({
        id: ANTradeManager.TradeGoldItemId
      });
      this._nNumberInputWindow.setOkHandler(() => {
        var count;
        count = this._nNumberInputWindow._number;
        return this._onGoldNumberChanged(count);
      });
      this.tradeWindowA.close();
      this.tradeWindowB.close();
      this._nNumberInputWindow.start();
    } else {
      SceneManager.push(Scene_NetItemsForTrade);
    }
  };
  _._onTradeConfirmClick = function() {
    var e, name;
    try {
      //%[I] Скрывать кнопку "Назад" при ожидании
      //%[I] Анимированный текст ... (три точки) в надписи ожидания
      name = ANTradeManager.getTradeParticipantData().name; // * get other trade parctipian name
      HUIManager.showWaitingInfo('Waiting ' + name, '');
      this._inReadyState = true;
      ANTradeManager.onTradeReady(true);
    } catch (error) {
      e = error;
      ANET.w(e);
      this.onTradeCancel();
    }
  };
  _._onGoldNumberChanged = function(count) {
    ANTradeManager.onTradeChange({
      id: ANTradeManager.TradeGoldItemId
    }, count);
    this.tradeWindowA.open();
    this.tradeWindowB.open();
    this.tradeWindowA.sub().refresh();
    this.tradeWindowA.sub().activate();
  };
  _._createTradeWindowB = function() {
    var size, tradeListWindow;
    size = new Rectangle(0, 0, 240, 300);
    tradeListWindow = new Window_NTradeItemsList(size, 1);
    tradeListWindow.refresh();
    this.tradeWindowB = KDCore.FloatingWindow.StaticWindow(this, tradeListWindow);
    this.tradeWindowB.x = (Graphics.width / 2) + 30;
    this.tradeWindowB.y = this.tradeWindowA.y;
    this.tradeWindowB.open();
  };
  _._createForegroundParts = function() {
    var i, item, len, parts;
    parts = [
      {
        image: "nzTradeHeader",
        position: {
          x: "Graphics.width / 2 - 334",
          y: -26
        }
      }
    ];
    for (i = 0, len = parts.length; i < len; i++) {
      item = parts[i];
      this._createAndAddImage(item);
    }
  };
  _._resetTradeReadyStatus = function() {
    this._inReadyState = false;
    HUIManager.hideWaitingInfo();
    this.tradeWindowA.sub().activate();
    return ANTradeManager.onTradeReady(false);
  };
})();

// ■ END Scene_NetworkInGameTrade.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Scene_NetworkRoom;

Scene_NetworkRoom = class Scene_NetworkRoom extends Scene_MenuBase {
  constructor() {
    super();
    this._startingGameTransition = false;
  }

  create() {
    super.create();
    this.room = ANNetwork.room;
    this.createRoomTitle();
    this.createCommands();
    this.createPlayersList();
    if (ANET.PP.isActorSelectionAllowed() && !this.isLoadGame()) {
      this.createActorSelectWindow();
    }
    if (this.isLoadGame()) {
      this.prepareSaveFile();
    }
    this.refreshRoom();
  }

  start() {
    super.start();
    ANNetwork.requestRoomRefresh();
    // * Так как есть искуственная задержка загрузки сцены на MV
    if (KDCore.isMV()) {
      setTimeout((function() {
        try {
          return ANNetwork.requestRoomRefresh();
        } catch (error) {

        }
      }), 300);
    }
  }

  isBottomHelpMode() {
    return false;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  refreshRoom() {
    this.room = ANNetwork.room;
    this._refreshRoomTitle();
    this._refreshPlayerList();
    this._refreshActorsList();
    return this._windowCommands.refresh();
  }

  //?EVENT
  // * Когда игрок выходит или входит в комнату
  netOn_lobby_refreshRoomData() {
    // * Пришли данные о комнате (и игроках), надо обновить
    return this.refreshRoom();
  }

  //?EVENT
  // * Когда игрок выбирает персонажа
  netOn_game_playersData() {
    // * Пришли данные о комнате (и игроках), надо обновить
    return this.refreshRoom();
  }

  //?EVENT
  netOn_lobby_startGame() {
    this._startingGameTransition = true;
    if (this.isLoadGame()) {
      this.loadAndStartGame();
    } else {
      this.startNewGame();
    }
  }

  //?EVENT
  // * Когда закрывается комната, вызывается это событие
  netOn_lobby_roomClosed() {
    if (!this._shouldNotPopScene) {
      // * Из этой сцены мы возвращаемся в сетевое меню (если мы не мастер)
      // * Для мастера не надо, так как сцена и так закрывается сама и получается
      // * что возврат происходит на Scene_Title
      //TODO: Когда идёт запрос на подключение в запущенную игру надо его прервать!
      return this.popScene();
    }
  }

  update() {
    return super.update();
  }

  //TODO: Готов клиент или нет
  //if ANNetwork.isMasterClient() and Input.isTriggered('ok')
  //    ANNetwork.send(NMS.Lobby("startGame"))
  stop() {
    super.stop();
    // * Если TRUE - значит мы переходим на сцену с игрой и не надо закрывать коммнату
    if (this._startingGameTransition === true) {
      return;
    }
    if (ANNetwork.isMasterClient()) {
      this._shouldNotPopScene = true;
      return ANNetwork.closeRoom();
    } else {
      return ANNetwork.leaveRoom();
    }
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetworkRoom.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoom.prototype;
  _.startNewGame = function() {
    // * Сейчас нету _commandWindow, так что временно создадим его чтобы не было ошибки
    this._commandWindow = {
      close: function() {}
    };
    Scene_Title.prototype.commandNewGame.call(this);
  };
  _.loadAndStartGame = function() {
    // * Задаём флаг, что будем загружать сетевую игру
    $gameTemp._nRequestLoadNetworkGame = true;
    SceneManager.push(Scene_Load);
  };
  _.createRoomTitle = function() {
    this.createHelpWindow();
    return this._refreshRoomTitle();
  };
  _._refreshRoomTitle = function() {
    var ref, roomHostName;
    if (ANNetwork.isMasterClient()) {
      roomHostName = "\\C[1]" + ANGameManager.myPlayerData().name + " (you)";
    } else {
      if (this.room == null) {
        roomHostName = "Fetching...";
      } else {
        roomHostName = (ref = ANGameManager.getPlayerDataById(this.room.masterId)) != null ? ref.name : void 0;
      }
    }
    return this._helpWindow.setText("Room: %1, Host: %2".format(ANNetwork.room.name, roomHostName));
  };
  _._refreshPlayerList = function() {
    this._playersListWindow.refresh();
  };
  _.createCommands = function() {
    this._windowCommands = new Window_NetworkRoomCommands(new Rectangle(0, this._helpWindow.y + this._helpWindow.height, 600, 100));
    this._windowCommands.setHandler('cancel', this.popScene.bind(this));
    this._windowCommands.setHandler('leave', this.popScene.bind(this));
    this._windowCommands.setHandler('start', this._onStartRoomCommand.bind(this));
    this._windowCommands.setHandler('ready', this._onReadyInRoomCommand.bind(this));
    this._windowCommands.setHandler('character', this._onCharacterSelectCommand.bind(this));
    this._windowCommands.setHandler('joinInGame', this._onJoinAlreadyGameCommand.bind(this));
    this.addWindow(this._windowCommands);
    this._windowCommands.activate();
  };
  _._onStartRoomCommand = function() {
    if (this._isAllInRoomReady()) { // TODO: В Wrapper, так как окно тоже проверяет
      if (ANNetwork.isMasterClient()) {
        ANNetwork.send(NMS.Lobby("startGame"));
      }
    } else {
      this._windowCommands.activate();
    }
  };
  _._onReadyInRoomCommand = function() {
    var playerData;
    playerData = ANGameManager.myPlayerData();
    ANPlayersManager.sendPlayerInRoomReady(!playerData.isReadyInRoom);
    this._windowCommands.activate();
  };
  _._onCharacterSelectCommand = function() {
    this._windowActorsList.show();
    this._windowActorsList.open();
    this._windowActorsList.activate();
    return this._playersListWindow.close();
  };
  //TODO: Флаги готовности, сбрасывать при нажатии Character
  // * См. readyPlayersIds у данных комнаты
  _._isAllInRoomReady = function() {
    return true;
  };
  _.createActorSelectWindow = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 260;
    wx = 50;
    wy = 240;
    this._windowActorsList = new Window_NetworkActorsList(new Rectangle(wx, wy, ww, wh));
    this._windowActorsList.setHandler('cancel', this._onActorSelectCancel.bind(this));
    this._windowActorsList.setHandler('ok', this._onActorSelectOk.bind(this));
    this._windowActorsList.hide();
    return this.addWindow(this._windowActorsList);
  };
  _._onActorSelectCancel = function() {
    return this._cancelActorSelection();
  };
  _._cancelActorSelection = function() {
    this._windowActorsList.close();
    this._windowCommands.activate();
    return this._playersListWindow.open();
  };
  _._onActorSelectOk = function() {
    var selectedActorId;
    selectedActorId = this._windowActorsList.selectedActorId();
    if (selectedActorId <= 0) {
      SoundManager.playBuzzer();
      this._windowActorsList.activate();
    } else {
      ANPlayersManager.sendBindActorFromLobby(selectedActorId, this._onBindActorResult.bind(this));
    }
  };
  _._onBindActorResult = function(resultFlag) {
    if (resultFlag === true) {
      this._cancelActorSelection();
    } else {
      SoundManager.playBuzzer();
      this._windowActorsList.activate();
    }
    this.refreshRoom();
  };
  _._refreshActorsList = function() {
    var ref;
    return (ref = this._windowActorsList) != null ? ref.refresh() : void 0;
  };
  _.createPlayersList = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 260;
    wx = 50;
    wy = 240;
    this._playersListWindow = new Window_NetworkRoomPlayersList(new Rectangle(wx, wy, ww, wh));
    this.addWindow(this._playersListWindow);
    this._refreshPlayerList();
  };
  _.prepareSaveFile = function() {
    var info;
    info = DataManager.nGetNetworkSaveInfoWithId(this.room.uniqueSaveID);
    if (info == null) {
      HUIManager.notifyError("Save file data not found!");
      console.warn("Save file with ID " + this.room.uniqueSaveID + " not found!");
      this.popScene.bind(this);
    } else {
      //TODO: На сервере нет проверки на занятость персонажа??? НЕТУ в 112
      ANPlayersManager.sendBindActorFromLobby(info.nMyActorId, this.onBindLoadedActorResult.bind(this));
    }
  };
  _.onBindLoadedActorResult = function(resultFlag) {
    if (resultFlag === false) {
      SoundManager.playBuzzer();
      HUIManager.notifyError("Can't load Actor data or Actor already used by another player");
      this.popScene.bind(this);
    } else {
      this.refreshRoom();
    }
  };
  _._onJoinAlreadyGameCommand = function() {
    console.log("Send request worldData");
    ANGameManager.sendStartedRoomGameDataRequest(this._onJoinedAlreadyStartedGameComplete.bind(this), () => {
      HUIManager.notifyError("Unable to join game");
      return this._windowCommands.activate();
    });
  };
  _._onJoinedAlreadyStartedGameComplete = function(data) {
    var content, e;
    "!!! JOINED TO THE GAME !!!".p();
    if (KDCore.isMZ()) {
      StorageManager.loadObjectFormNet(data).then((content) => {
        //console.info(content)
        return this._onJoinedAlreadyStartedGameSuccess(content);
      }).catch(() => {
        HUIManager.notifyError("Unable to join game");
        return this._windowCommands.activate();
      });
    } else {
      try {
        content = JsonEx.parse(data);
        this._onJoinedAlreadyStartedGameSuccess(content);
      } catch (error) {
        e = error;
        ANET.w(e);
        this._windowCommands.activate();
      }
    }
  };
  _._onJoinedAlreadyStartedGameSuccess = function(content) {
    this._startingGameTransition = true;
    // * Регистрируем себя в комнате (получаем Player Index)
    ANGameManager.sendJoinedToStartedGame();
    DataManager.createGameObjects();
    DataManager.extractSaveContents(content);
    if (KDCore.isMZ()) {
      DataManager.correctDataErrors();
    }
    ANGameManager.applyJoinedDataCorrects();
    SceneManager.goto(Scene_Map);
  };
})();

// ■ END Scene_NetworkRoom.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сцена со списком комнат на сервере
var Scene_NetworkRoomsList;

Scene_NetworkRoomsList = class Scene_NetworkRoomsList extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    //TODO: Потом сделать чтобы сервер сам отправлял когда меняется список комнат
    // * Сейчас опасно, так как может быть уже 4 из 4, а информация не обновилась
    this._refreshRoomsListThread = new KDCore.TimedUpdate(60, this._requestRoomsListFromServer.bind(this));
    this._createRoomsList();
    this._requestRoomsListFromServer();
  }

  refreshRooms() {
    if (ANET.PP.isRoomFilterON()) {
      this.applyFilterToRooms();
    }
    return this._roomsListWindow.refreshRooms(this.roomsList);
  }

  //?VERSION
  applyFilterToRooms() {}

  update() {
    super.update();
    return this._refreshRoomsListThread.update();
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoomsList.prototype;
  _._requestRoomsListFromServer = function() {
    // * В первый раз показываем Loader
    if (this.roomsList == null) {
      HUIManager.showLoader();
    }
    ANNetwork.callback(NMS.Lobby("getRoomsList"), (result) => {
      // * Если сцена была закрыта, а комнаты пришли
      if (!(SceneManager._scene instanceof Scene_NetworkRoomsList)) {
        return;
      }
      this.roomsList = result;
      if (this.roomsList == null) {
        return;
      }
      this.refreshRooms();
      return HUIManager.hideLoader();
    });
    this.refreshRooms();
  };
  _._createRoomsList = function() {
    var wh, ww, wx, wy;
    ww = Graphics.width - 100;
    wh = Graphics.height - 140;
    wx = 50;
    wy = 70;
    this._roomsListWindow = new Window_NetworkRoomsList(new Rectangle(wx, wy, ww, wh));
    this._roomsListWindow.setHandler('cancel', this.popScene.bind(this));
    this._roomsListWindow.setHandler('ok', this._onJoinRoomCommand.bind(this));
    this._roomsListWindow.activate();
    return this.addWindow(this._roomsListWindow);
  };
  _._onJoinRoomCommand = function() {
    var roomData;
    roomData = this._roomsListWindow.getSelectedRoom();
    if (NetRoomDataWrapper.isRoomProperToJoin(roomData)) {
      ANNetwork.get(NMS.Lobby("joinToRoom", roomData.name), (result) => {
        return this._onJoinedToRoom(result);
      }, () => {
        console.log("Can't join to Room, server not response in time");
        return this._roomsListWindow.activate();
      });
    } else {
      SoundManager.playBuzzer();
      this._roomsListWindow.activate();
    }
  };
  
  //?EVENT
  _._onJoinedToRoom = function(roomData) {
    if (roomData == null) {
      console.log("Can't join to Room, Room not exists anymore");
      this._roomsListWindow.activate();
    } else {
      ANNetwork.setRoomJoin(roomData);
      SceneManager.push(Scene_NetworkRoom);
    }
  };
})();

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------

//TODO: События на обработку: список комнат обновлися, успешное подключение, плохое подключение


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_NetworkRoomTypeSelect.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Сцена выбора "Новая игра" или "Загрузить" после выбора "Создать комнату"

//TODO: Если опция по возможности сохранения отключена, надо сразу перепрыгивать эту сцену
var Scene_NetworkRoomTypeSelect;

Scene_NetworkRoomTypeSelect = class Scene_NetworkRoomTypeSelect extends Scene_MenuBase {
  constructor() {
    super();
  }

  //TODO: Заголовок какой-нибудь ???
  create() {
    super.create();
    // * Если параметр выключен (сохранять и загружать нельзя), то пропуск данной сцены
    if (!ANET.PP.isSaveLoadAllowed()) {
      // * Если мы входим в сцену, то пропуск сразу в комнату
      if ($gameTemp._nIsForwardTransitionToRoomTypeMenu === true) {
        $gameTemp._nIsForwardTransitionToRoomTypeMenu = null;
        this.commandNewGame();
      } else {
        this.popScene(); // * Выход, не нужны компоненты сцены
      }
      return;
    }
    this._initSceneComponents();
  }

};

(function() {  // ■ END Scene_NetworkRoomTypeSelect.coffee
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkRoomTypeSelect.prototype;
  _._initSceneComponents = function() {
    this._createRoomTypeSelectMenu();
    return this._createGamesToLoadList();
  };
  _._createRoomTypeSelectMenu = function() {
    var rect, wh, ww, wx, wy;
    ww = 400;
    if (KDCore.isMV()) {
      wh = this.calcWindowHeight(2, true);
    } else {
      // * Хоть команды 2, используется 4, чтобы сразу под курсором была команда
      wh = this.calcWindowHeight(4, true);
    }
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._commandsWindow = new Window_NetworkRoomTypeMenu(rect);
    this._commandsWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandsWindow.setHandler('newGame', this.commandNewGame.bind(this));
    this._commandsWindow.setHandler('continue', this.commandContinue.bind(this));
    return this.addWindow(this._commandsWindow);
  };
  _.commandNewGame = function() {
    this._createNewRoom(null); // * новая игра
  };
  _.commandContinue = function() {
    this._commandsWindow.hide();
    this._listWindow.show();
    this._listWindow.activate();
  };
  _._createNewRoom = function(uniqueSaveId) {
    var newRoomData, roomName;
    // * Используем название команаты с предыдущей сцены
    roomName = $gameTemp._nLastRoomName;
    if (!String.any(roomName)) {
      roomName = "Room_" + Math.randomInt(1000);
    }
    $gameTemp._nLastRoomName = null; // * очищаем
    
    // * Собираем данные об новой комнате
    newRoomData = {
      name: roomName,
      gameInfo: ANNetwork.getNetworkGameInfoData(),
      uniqueSaveID: uniqueSaveId
    };
    // * Отправляем данные об текущей игре (клиенте)
    ANNetwork.get(NMS.Lobby("createRoom", newRoomData), (result) => {
      return this._onRoomCreated(result);
    }, () => {
      console.log("Can't create Room, server not response in time");
      return this._commandsWindow.activate();
    });
  };
  //?EVENT
  _._onRoomCreated = function(roomData) {
    if (roomData != null) {
      ANNetwork.setRoomMaster(roomData);
      // * Мастер всегда готов
      ANPlayersManager.sendPlayerInRoomReady(true);
      SceneManager.push(Scene_NetworkRoom);
    } else {
      HUIManager.notifyError("Can't create room with name: " + this._lastRoomName);
      this._commandsWindow.activate();
    }
  };
  _._createGamesToLoadList = function() {
    var rect, wh, ww, wx, wy;
    ww = Graphics.boxWidth - 100;
    if (KDCore.isMZ()) {
      wh = this.mainAreaHeight();
    } else {
      wh = Graphics.height - 20;
    }
    wx = (Graphics.boxWidth - ww) / 2;
    wy = (Graphics.boxHeight - wh) / 2;
    rect = new Rectangle(wx, wy, ww, wh);
    this._listWindow = new Window_SavefileList(rect);
    this._listWindow.setHandler("ok", this.onLoadFileSelected.bind(this));
    this._listWindow.setHandler("cancel", this.onLoadFileSelectCancel.bind(this));
    this._listWindow.setMode("loadNet", false);
    if (KDCore.isMZ()) {
      this._listWindow.selectSavefile(0);
    } else {
      this._listWindow.select(0);
    }
    this._listWindow.refresh();
    this._listWindow.hide();
    this.addWindow(this._listWindow);
  };
  _.onLoadFileSelected = function() {
    var info, savefileId;
    if (KDCore.isMZ()) {
      savefileId = this._listWindow.savefileId();
    } else {
      savefileId = this._listWindow.index() + 1;
    }
    if (DataManager.nIsNetworkSaveFile(savefileId)) {
      info = DataManager.nGetInfoForSavefileId(savefileId);
      this._createNewRoom(info.nUniqueSaveID);
    } else {
      SoundManager.playBuzzer();
      this._listWindow.activate();
    }
  };
  _.onLoadFileSelectCancel = function() {
    this._listWindow.hide();
    this._commandsWindow.show();
    this._commandsWindow.activate();
  };
})();


// Generated by CoffeeScript 2.6.1
// * Сцена настроек для сетевой игры

//TODO: Пока что просто ввод имени игрока
var Scene_NetworkSettings;

Scene_NetworkSettings = class Scene_NetworkSettings extends Scene_MenuBase {
  constructor() {
    super();
  }

  create() {
    super.create();
    this._showNameInput();
    if (KDCore.isMV()) {
      // * Делаем фокус ввода
      setTimeout((function() {
        return HUIManager.focusInput();
      }), 100);
    }
  }

  stop() {
    this._savePlayerName();
    this._hideNameInput();
    return super.stop();
  }

  update() {
    super.update();
    if (Input.isCancel() || Input.isTriggered('ok')) {
      return this.popScene();
    }
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Scene_NetworkSettings.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Scene_NetworkSettings.prototype;
  _._showNameInput = function() {
    HUIManager.showInput("Enter your name for network...");
    HUIManager.setInputValue(ANGameManager.myPlayerData().name);
  };
  _._savePlayerName = function() {
    var newName;
    newName = HUIManager.getInputValue();
    if (String.any(newName)) {
      ANGameManager.myPlayerData().name = newName;
      // * Отправим на сервер
      ANPlayersManager.sendPlayerName();
      ConfigManager.netPlayerName = newName;
      ConfigManager.save();
    }
  };
  _._hideNameInput = function() {
    return HUIManager.removeInput();
  };
})();

// ■ END Scene_NetworkSettings.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Save.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onSavefileOk, ALIAS__stop, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Save.prototype;
  // * В MV нету метода executeSave, создадим его для совместимости
  if (KDCore.isMV()) {
    //?[NEW, from MZ]
    _.executeSave = function(savefileId) {
      $gameSystem.onBeforeSave();
      if (DataManager.saveGame(savefileId)) {
        this.onSaveSuccess();
      } else {
        this.onSaveFailure();
      }
    };
    // * Переопределим стандартный метод (только в МВ)
    // * Теперь в сетевом режиме он будет использовать новый метод executeSave
    //@[ALIAS]
    ALIAS__onSavefileOk = _.onSavefileOk;
    _.onSavefileOk = function() {
      if (ANNetwork.isConnected()) {
        Scene_File.prototype.onSavefileOk.call(this);
        this.executeSave(this.savefileId());
      } else {
        ALIAS__onSavefileOk.call(this);
      }
    };
  }
  //@[ALIAS, STORED]
  _.nALIAS__executeSave_43243 = _.executeSave;
  _.executeSave = function(savefileId) {
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isSaveOnlyInMenu()) {
        //TODO:
        //@nRequestClientsStatesForSave(savefileId)
        this.nExecuteNetworkSave(savefileId);
      } else {
        this.nExecuteNetworkSave(savefileId);
      }
    } else {
      _.nALIAS__executeSave_43243.call(this, savefileId);
    }
  };
  
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (!ANNetwork.isConnected()) {
      return;
    }
    if (this.nSaveDataPool == null) {
      return;
    }
    this.nUpdateSavePool();
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    this.nClearTempSaveData();
  };
})();

// ■ END Scene_Save.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Save.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Save.prototype;
  _.nUpdateSavePool = function() {
    var ref;
    return (ref = this.nSaveDataPool) != null ? ref.update() : void 0;
  };
  _.nCreateTempSaveData = function() {
    // * Делаем глобальную переменную чтобы DataManager мог перехватить данные
    $gameTemp.nSaveData = this.nSaveDataPool;
    // * Чтобы у всех был одинаковый, нужно при опредлении какой файл загружать
    $gameTemp.nUniqueSaveID = ANET.Utils.generateSaveUniqueId();
  };
  _.nClearTempSaveData = function() {
    $gameTemp.nSaveData = null;
    return $gameTemp.nUniqueSaveID = null;
  };
  // * Запросить проверку статуса других игроков
  // * чтобы они не были "заняты" (например битва или событие)
  // * сейчас используется проверка, что все должны быть в меню
  _.nRequestClientsStatesForSave = function(savefileId) {};
  //TODO: пропустим пока что

  // * Отправить всем команду что нужны данные для сохранения
  _.nExecuteNetworkSave = function(savefileId) {
    // * Создаём пул данных сохранений для каждого игрока
    this.nSaveDataPool = new PlayersDataPool(function() {
      return ANGameManager.anotherPlayers();
    });
    // * Задаём сразу свои данные
    this.nSaveDataPool.setMyData(DataManager.makeSaveContents());
    // * Задаём методы callbacks
    this.nSaveDataPool.onFail(() => {
      return this.nOnWaitSaveDataDone(-1); // * fail
    });
    this.nSaveDataPool.onReady(() => {
      return this.nOnWaitSaveDataDone(savefileId);
    });
    this.nCreateTempSaveData();
    // * Посылаем запрос на сервер ($gameTemp.nUniqueSaveID должен быть уже создан)
    this.nSaveDataPool.register(function() {
      return ANGameManager.sendSaveDataRequest(savefileId);
    });
    this.nOnWaitSaveDataStart();
  };
  _.nOnWaitSaveDataStart = function() {
    return HUIManager.showLoader(600);
  };
  _.nOnWaitSaveDataDone = function(savefileId) {
    HUIManager.hideLoader();
    "SAVE DATA RECEIVED".p(savefileId);
    if (savefileId >= 0) {
      // * Вызываем стандартный метод
      _.nALIAS__executeSave_43243.call(this, savefileId);
    } else {
      this.onSaveFailure();
    }
  };
})();

// ■ END Scene_Save.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Skill.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, _;
  //@[DEFINES]
  _ = Scene_Skill.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме нельзя переключать персонажей
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
})();

// ■ END Scene_Skill.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Status.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__needsPageButtons, ALIAS__start, ALIAS__stop, _;
  //@[DEFINES]
  _ = Scene_Status.prototype;
  //@[ALIAS]
  ALIAS__needsPageButtons = _.needsPageButtons;
  _.needsPageButtons = function() {
    // * В сетевом режиме зависит от параметра
    if (ANNetwork.isConnected()) {
      // * Если в режиме просмотра статуса определённого игрока - нет
      if ($gameTemp._netRequestStatusForCertainActorId != null) {
        return false;
      } else {
        return ANET.PP.isOtherPlayersMenuStatusAllowed();
      }
    } else {
      return ALIAS__needsPageButtons.call(this);
    }
  };
  
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    var actor;
    ALIAS__start.call(this);
    // * Показываем статус определённого игрока по сети (для Player Menu опции)
    if (ANNetwork.isConnected() && $gameTemp._netRequestStatusForCertainActorId > 0) {
      actor = $gameActors.actor($gameTemp._netRequestStatusForCertainActorId);
      if (actor != null) {
        this._actor = actor;
        this.refreshActor();
      }
    }
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this);
    $gameTemp._netRequestStatusForCertainActorId = null;
  };
})();

// ■ END Scene_Status.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Title.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, ALIAS__update, _;
  //@[DEFINES]
  _ = Scene_Title.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this);
    if (ANNetwork.isConnected()) {
      ANNetwork.stop();
    }
    $gameTemp.nLobbyChatHistory = null;
    if (ANET.isDEV()) {
      "Precc C for fast connect".p();
    }
  };
  //@[ALIAS]
  //setTimeout (=>
  //        @nFastConnectToDevRoom()
  //    ), Math.random() * 1000
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (ANET.isDEV()) {
      //TODO: Добавить потом параметр плагина, чтобы люди могли тестить быстро
      return this.nUpdateDebugStart();
    }
  };
  (function() {    // * Добавляем команду сетевой игры в главное меню
    var ALIAS__calcWindowHeight, ALIAS__commandWindowRect, ALIAS__createCommandWindow;
    
    //@[ALIAS]
    ALIAS__createCommandWindow = _.createCommandWindow;
    _.createCommandWindow = function() {
      ALIAS__createCommandWindow.call(this);
      return this._commandWindow.setHandler("network", this.commandNetwork.bind(this));
    };
    //@[ALIAS]
    ALIAS__commandWindowRect = _.commandWindowRect;
    _.commandWindowRect = function() {
      // * little trick to not overwrite method
      this.___isOneMoreCommand = !Imported.VisuMZ_0_CoreEngine;
      return ALIAS__commandWindowRect.call(this);
    };
    //@[ALIAS]
    ALIAS__calcWindowHeight = _.calcWindowHeight;
    _.calcWindowHeight = function(numLines, selectable) {
      if (this.___isOneMoreCommand === true) {
        numLines += 1;
        if (!ANET.PP.isSinglePlayerAllowed()) {
          // * Если одиночная игра не доступна, то нет одной позиции в меню (Новая ира)
          numLines -= 1;
        }
      }
      return ALIAS__calcWindowHeight.call(this, numLines, selectable);
    };
  })();
})();

// ■ END Scene_Title.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Title.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Title.prototype;
  (function() {    // DEV FAST GAME START
    // --------------------------------------------------------
    // * Метод только для отладки (быстрый старт на кнопку C)
    _.nUpdateDebugStart = function() {
      if (Input.isTriggered('c')) {
        this.nFastConnectToDevRoom();
      }
      if ($gameTemp._isDevNetGameWaitPlayers === true) {
        if (ANGameManager.playersData.length > 1) {
          return this.nFastGameStart();
        }
      }
    };
    //?EVENT
    _.netOn_lobby_startGame = function() {
      if ($gameTemp._isDevNetGameStart !== true) {
        return;
      }
      Scene_Title.prototype.commandNewGame.call(this);
    };
    _.nFastConnectToDevRoom = function() {
      if (ANET.PP.isActorSelectionAllowed()) {
        console.warn("Can't connect in Dev room in Actor Select mode");
        return;
      }
      ANNetwork.initSystem();
      return ANNetwork.setConnection(function(status) {
        if (status === 1) {
          HUIManager.notifySucess("Connected to server");
          ANGameManager.init();
          return ANNetwork.get(NMS.Lobby("createRoom", {
            name: "dev",
            gameInfo: ANNetwork.getNetworkGameInfoData()
          }), function(roomData) {
            if (roomData != null) {
              ANNetwork.setRoomMaster(roomData);
              return $gameTemp._isDevNetGameWaitPlayers = true;
            } else {
              return ANNetwork.get(NMS.Lobby("joinToRoom", "dev"), function(roomData) {
                $gameTemp._isDevNetGameStart = true;
                return ANNetwork.setRoomJoin(roomData);
              }, function() {
                return console.log("Can't join to Room, server not response in time");
              });
            }
          }, function() {
            return console.log("Can't create Room, server not response in time");
          });
        } else {
          return HUIManager.notifyError("Server not response in time");
        }
      });
    };
    _.nFastGameStart = function() {
      if (ANNetwork.isMasterClient()) {
        $gameTemp._isDevNetGameStart = true;
        return ANNetwork.send(NMS.Lobby("startGame"));
      }
    };
  })();
  //?EVENT
  // * Когда соединение прервано, вызывается это событие
  _.onLostConnection = function() {}; // * NOTHING
  _.commandNetwork = function() {
    this._commandWindow.close();
    return SceneManager.push(Scene_NetworkGameMenu);
  };
})();

// ■ END Scene_Title.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__changeScene, ALIAS__isGameActive, _;
  //@[DEFINES]
  _ = SceneManager;
  //? Всегда требует активного статуса чтобы всегда принимать данные от сервера
  //@[ALIAS]
  ALIAS__isGameActive = _.isGameActive;
  _.isGameActive = function() {
    if (ANNetwork.isConnected()) {
      return true;
    } else {
      return ALIAS__isGameActive.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__changeScene = _.changeScene;
  _.changeScene = function() {
    if (ANNetwork.isConnected() && this.isSceneChanging()) {
      if (typeof HUIManager !== "undefined" && HUIManager !== null) {
        HUIManager.onGameSceneChanged();
      }
    }
    ALIAS__changeScene.call(this);
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = SceneManager;
  //? ONLY FOR MV
  _.isSceneReadyForNetwork = function() {
    return true;
  };
  // * Сцена занята для событий из сети (scene events) (общий метод для MV и MZ)
  _.isBusyForNetworkData = function() {
    return SceneManager.isSceneChanging() || !SceneManager.isSceneReadyForNetwork();
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Элементы интерфейса ANET Z на карте

// * Интерфейс AABS на карте
(function() {
  var Spriteset_UI;
  Spriteset_UI = class Spriteset_UI extends Sprite {
    constructor() {
      super();
      this._init();
      return;
    }

    isActive() {
      return this.visible === true;
    }

    show() {
      return this.visible = true;
    }

    hide() {
      return this.visible = false;
    }

    terminate() {
      this.visible = false;
    }

    // * Обновить все контроллеры и элементы
    refresh() {}

    onGameMessageStart() {}

    onGameMessageEnd() {}

  };
  ANET.link(Spriteset_UI);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.Spriteset_UI.prototype;
  _._init = function() {
    // * Регестрирует себя в менеджере
    ANET.UI.setUI(this);
    // * Набор всех элементов
    this.elements = [];
    // * Набор всех контроллеров
    this.controllers = [];
    return this._create();
  };
  _._create = function() {
    this._createNormalUILayer();
    return this._createElements();
  };
  _._createNormalUILayer = function() {
    this.layer = new Sprite();
    return this.addChild(this.layer);
  };
  _._createElements = function() {
    if (ANET.PP.isInGamePlayerMenuAllowed()) {
      this._createInGamePlayerMenu();
    }
    if (ANET.PP.isGameChatAllowed()) {
      this._createInGameChat();
    }
  };
  // * Создаём меню игрока
  _._createInGamePlayerMenu = function() {
    var size;
    //TODO: from parameters
    size = new Rectangle(0, 0, 160, 160);
    this.playerMenuWindow = new FWindow_InGamePlayerMenu(this, size.width, size.height);
  };
  // * Создаём окно чата
  _._createInGameChat = function() {
    var params;
    params = ANET.PP.uiData("inGameChatWindow");
    this.chatWindow = new FWindow_InGameChat(this, params.size.w, params.size.h);
    this._addElementToUI(this.chatWindow);
  };
  // * Добавить элемент на обычный слой
  _._addElementToUI = function(sprite) {
    return this.layer.addChild(sprite);
  };
})();

// ■ END PRIVATE
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__retreat, _;
  //@[DEFINES]
  _ = Sprite_Actor.prototype;
  //TEMP
  //TODO: Временное врешение, работает только на мастере
  //@[ALIAS]
  ALIAS__retreat = _.retreat;
  _.retreat = function() {
    if (ANNetwork.isConnected()) {
      if ($gameParty.leader() === this._battler) {
        return this.startMove(300, 0, 30);
      } else {

      }
    } else {
      // * Другой персонаж не убегает
      return ALIAS__retreat.call(this);
    }
  };
})();

// ■ END Sprite_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__setCharacter, ALIAS__updateOther, _;
  //@[DEFINES]
  _ = Sprite_Character.prototype;
  //@[ALIAS]
  ALIAS__updateOther = _.updateOther;
  _.updateOther = function() {
    ALIAS__updateOther.call(this);
    this._updateNetworkCharacter();
    this._updateNetworkNameplate();
    this._updateNetworkOther();
  };
  
  //@[ALIAS]
  ALIAS__setCharacter = _.setCharacter;
  _.setCharacter = function(character) {
    ALIAS__setCharacter.call(this, character);
    this._isNetworkCharacter = ANNetwork.isConnected() && character instanceof NETCharacter;
    // * Смена методов
    if (this._isNetworkCharacter === true) {
      this._updateNetworkCharacter = this._updateNetworkCharacterMain;
    }
    // * У персонажа есть Nameplate
    if (ANET.PP.isShowNameplates() && ANNetwork.isConnected()) {
      KDCore.GEventsManager.subscribeFor("netzRefreshNameplate", this.nRefreshNameplate.bind(this));
      this.nRefreshNameplate();
    }
  };
})();

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Sprite_Character.prototype;
  //?DYNAMIC
  // * Данный метод подключается только для NetChar
  _._updateNetworkCharacter = function() {}; // * DUMMY
  _._updateNetworkCharacterMain = function() {
    return this._updateNetworkStateIcon();
  };
  _._updateNetworkStateIcon = function() {
    if (this.netStateIcon == null) {
      this._createNetworkStateIcon();
    } else {
      this.netStateIcon.x = this.x;
      this.netStateIcon.y = this.y - this.height;
    }
  };
  _._createNetworkStateIcon = function() {
    var e, ref;
    this.netStateIcon = new ANET.Sprite_PlayerNetworkStatus(this);
    this.netStateIcon.setupNETCharacter(this._character);
    try {
      // * Не лучший способ
      if ((ref = SceneManager._scene._spriteset) != null) {
        ref.addNetworkStatusIconForCharacter(this.netStateIcon);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
  // * Данный метод работает для всех персонажей (NetChar, событие, игрок...)
  // ? Работает всегда, даже когда NOT CONNECTED
  _._updateNetworkOther = function() {}; // * EMPTY NOW
  
  // * Создать (удалить) табличку с именем персонажа
  _.nRefreshNameplate = function() {
    if (this.netNameplateSpr != null) {
      this._nDestroyNameplateSpr();
    }
    if ((this._character != null) && (this._character.nGetNameplate() != null)) {
      this._updateNetworkNameplate = this._updateNetworkNameplateMain;
    } else {
      this._updateNetworkNameplate = function() {}; // * EMPTY
    }
  };
  //?DYNAMIC
  _._updateNetworkNameplate = function() {};
  // * Метод обновления таблички (создание) и присвоение координат
  _._updateNetworkNameplateMain = function() {
    if (this.netNameplateSpr == null) {
      this._nCreateNameplateSpr();
    } else {
      this.netNameplateSpr.visible = this.visible;
      this.netNameplateSpr.opacity = this.opacity;
      this.netNameplateSpr.x = this.x;
      this.netNameplateSpr.y = this.y - this.height;
    }
  };
  _._nCreateNameplateSpr = function() {
    var e, ref;
    if (this._character == null) {
      return;
    }
    try {
      this.netNameplateSpr = new ANET.Sprite_NetCharNameplate();
      this.netNameplateSpr.setup(this._character.nGetNameplate());
      if ((ref = this.parent) != null) {
        ref.addChild(this.netNameplateSpr);
      }
    } catch (error) {
      e = error;
      ANET.w(e);
      this._updateNetworkNameplate = function() {}; // * DUMMY, no more errors spawn
    }
  };
  _._nDestroyNameplateSpr = function() {
    var e;
    try {
      this.netNameplateSpr.removeFromParent();
      return this.netNameplateSpr = null;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Gauge.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__smoothness, _;
  if (KDCore.isMV()) {
    return;
  }
  //@[DEFINES]
  _ = Sprite_Gauge.prototype;
  //@[ALIAS]
  ALIAS__smoothness = _.smoothness;
  _.smoothness = function() {
    // * Делаем более плавное заполнение для сетевой битвы, чтобы не было видно "рывков"
    // * Рывки есть так как с сервера данные обновляются примерно раз в секунду в бою
    if (ANNetwork.isConnected()) {
      if (this._statusType === "time" && $gameParty.inBattle()) {
        return 60;
      }
    }
    return ALIAS__smoothness.call(this);
  };
})();

// ■ END Sprite_Gauge.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_MapClickEffect.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------

// * Эффект нажатия мышкой (на карте)
(function() {
  var Sprite_MapClickEffect;
  Sprite_MapClickEffect = class Sprite_MapClickEffect extends KDCore.Sprite {
    constructor(x, y) {
      super();
      this.bitmap = ImageManager.loadAA("nzClickEffect");
      this.anchor.set(0.5);
      this._create();
      this.move(x, y);
      return;
    }

    //TODO: From parameters
    getSettings() {
      return {
        initialSize: 0.08,
        endSize: 0.4,
        sizeChangeStep: 0.03,
        frameDelay: 1
      };
    }

    update() {
      var ref, ref1;
      super.update();
      if ((ref = this._changer) != null) {
        ref.update();
      }
      if ((ref1 = this._changer2) != null) {
        ref1.update();
      }
      this._refreshScale();
    }

    // * destroy
    onAnimationEnd() {
      var ref;
      this.visible = false;
      this._changer = null;
      this._changer2 = null;
      if ((ref = this.parent) != null) {
        ref.removeChild(this);
      }
    }

  };
  ANET.link(Sprite_MapClickEffect);
})();

(function() {
  var _;
  
  //@[DEFINES]
  _ = ANET.Sprite_MapClickEffect.prototype;
  _._create = function() {
    var p;
    p = this.getSettings();
    this._tScale = p.initialSize;
    this._refreshScale();
    this._changer = new KDCore.Changer(this);
    this._changer.change('_tScale').from(p.initialSize).to(p.endSize).step(p.sizeChangeStep).speed(p.frameDelay).start();
    this._changer2 = new KDCore.Changer(this);
    this._changer2.change('opacity').from(255).to(0).step(22).speed(1).delay(1).start().done(this.onAnimationEnd.bind(this));
  };
  _._refreshScale = function() {
    this.scale.x = this._tScale;
    this.scale.y = this.scale.x;
  };
})();

// ■ END Sprite_MapClickEffect.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_NetCharNameplate.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_NetCharNameplate, _;
  // * Табличка с именем над персонажем
  Sprite_NetCharNameplate = class Sprite_NetCharNameplate extends KDCore.Sprite {
    constructor() {
      super();
    }

    // * Задать подложку
    // Объект nameplate = { text, style }
    setup(nameplate) {
      var style, text;
      if (nameplate == null) {
        this.visible = false;
      } else {
        ({text, style} = nameplate);
      }
      return this.refreshAll(text, style);
    }

    // * Данный стиль определён в базовых параметрах плагина, но на всякий случай тут есть тоже
    getDefaultStyle() {
      return {
        id: "default",
        margins: {
          x: -27,
          y: -20
        },
        backImage: {
          image: "",
          visible: true
        },
        backImageMargins: {
          x: 0,
          y: 0
        },
        backRect: {
          visible: true,
          size: {
            w: 54,
            h: 18
          },
          fillColor: "#000000",
          fillOpacity: 120,
          borderColor: "#000000",
          borderThickness: 1,
          borderOpacity: 255
        },
        backRectMargins: {
          x: 0,
          y: 0
        },
        text: {
          visible: true,
          size: {
            w: 54,
            h: 18
          },
          alignment: "center",
          font: {
            face: null,
            size: 12,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          outline: {
            color: null,
            width: 2
          },
          textColor: "#FFFFFF"
        }
      };
    }

    // * Получить стиль по его ID из параметров плагина
    getStyleById(style) {
      var e, styleData, styles;
      try {
        styles = ANET.PP.getNameplateStyles();
        styleData = styles.getById(style);
        // * Если стиль найден и имеет настройки текста (главные)
        if ((styleData != null) && (styleData.text != null)) {
          return styleData;
        } else {
          return this.getDefaultStyle();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return this.getDefaultStyle();
      }
    }

    // * Обновить всё
    refreshAll(text, styleId) {
      if (String.any(styleId)) {
        this.applyStyle(this.getStyleById(styleId));
      } else {
        this.applyDefaultStyle();
      }
      this.drawText(text);
      if (KDCore.isMV()) {
        this.z = 100;
      }
    }

    // * Обновить текст
    drawText(text) {
      var e, ref;
      try {
        if (!String.any(text)) {
          text = "";
        }
        return (ref = this.textElement) != null ? ref.draw(text) : void 0;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    }

    // * Применить стиль (по сути пересоздать все элементы)
    applyStyle(style) {
      var e;
      try {
        return this._reCreateAllElements(style);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    }

    // * Применить стандартный стиль (если не указан конкретный)
    applyDefaultStyle() {
      return this.applyStyle(this.getStyleById("default"));
    }

  };
  ANET.link(Sprite_NetCharNameplate);
  //@[DEFINES]
  _ = ANET.Sprite_NetCharNameplate.prototype;
  _._reCreateAllElements = function(styleData) {
    this._destroyElements();
    if (styleData == null) {
      return;
    }
    this._elements = new Sprite();
    this._elements.move(styleData.margins);
    this.addChild(this._elements);
    this._createElements(styleData);
  };
  _._destroyElements = function() {
    var e;
    try {
      this.textElement = null;
      this.imageElement = null;
      this.rectElement = null;
      if (this._elements != null) {
        return this.removeChild(this._elements);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createElements = function(styleData) {
    var e;
    try {
      if ((styleData.backImage != null) && styleData.backImage.visible === true) {
        this._createBackImage(styleData);
      }
      if ((styleData.backRect != null) && styleData.backRect.visible === true) {
        this._createBackRect(styleData);
      }
      if ((styleData.text != null) && styleData.text.visible === true) {
        return this._createMainText(styleData);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createBackImage = function(styleData) {
    var e;
    try {
      this.imageElement = new KDCore.UI.Sprite_UIImage(styleData.backImage);
      this._elements.addChild(this.imageElement);
      return this.imageElement.move(styleData.backImageMargins);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createBackRect = function(styleData) {
    var e;
    try {
      this.rectElement = new KDCore.UI.Sprite_UIRect(styleData.backRect);
      this._elements.addChild(this.rectElement);
      return this.rectElement.move(styleData.backRectMargins);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._createMainText = function(styleData) {
    var e, params;
    try {
      params = styleData.text;
      this.textElement = new KDCore.UI.Sprite_UIText(params);
      return this._elements.addChild(this.textElement);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Sprite_NetCharNameplate.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Сообщение в чате
(function() {
  var Sprite_NetChatTextLine;
  Sprite_NetChatTextLine = class Sprite_NetChatTextLine extends KDCore.Sprite {
    constructor() {
      super();
      this.params = this.getSettings();
      this._needAnimation = false;
      this._create();
      return;
    }

    getSettings() {
      return ANET.PP.uiData("netChatTextLine");
    }

    // * Применить стиль задника А (по умолчанию)
    applyBackgroundStyleA() {
      return this._applyBackgroundStyle(this.params.backgroundA);
    }

    // * Применить стиль задника Б (чтобы легче было видно, каждый чётный)
    applyBackgroundStyleB() {
      return this._applyBackgroundStyle(this.params.backgroundB);
    }

    // * Написать сообщение
    drawChatMessage(channelId, actorId, text) {
      var actorName, channelIdText, playerName, textFormat;
      if (this._textSpr == null) {
        return;
      }
      // * Не хочет загружать из параметров!!!
      if (this.params.textFormatForPlayer == null) {
        this.params.textFormatForPlayer = "\\}\\}\\C[3][%1]\\C[1][ME]\\{\\{ \\C[0]%3";
      }
      if (this.params.textFormatForSystem == null) {
        this.params.textFormatForSystem = "\\}\\}\\C[3][%1]\\{\\{ \\C[6]%3";
      }
      // * Не правильно загржает!
      if (this.params.textFormat.contains("*3") && !this.params.textFormat.contains("%3")) {
        this.params.textFormat = "\\}\\}\\C[3][%1] \\{\\{\\C[2]%2 \\C[0]%3";
      }
      if (this.isMyActorMessage(actorId)) {
        textFormat = this.params.textFormatForPlayer;
      } else {
        if (actorId <= 0) {
          textFormat = this.params.textFormatForSystem;
        } else {
          textFormat = this.params.textFormat;
        }
      }
      channelIdText = this._convertChannelIdToText(channelId); //1
      actorName = this._getActorName(actorId); //2
      playerName = this._getPlayerName(actorId); //4
      this._textSpr.drawTextWithFormat(textFormat, channelIdText, actorName, text, playerName);
    }

    // * Сообщение от меня (текущего клиента), имеет отдельный формат
    isMyActorMessage(actorId) {
      if (ANNetwork.isConnected()) {
        return ANGameManager.myActorId() === actorId;
      } else {
        return false;
      }
    }

    // * Сдвинуть эту строчку выше
    moveUp() {
      this.y -= this.params.size.h;
    }

    // * Анимированное появление сообщения (справа "едет")
    animate() {
      this._textSpr.x = -this.params.textLine.size.w;
      this._needAnimation = true;
    }

    update() {
      super.update();
      this._updateAnimation();
    }

  };
  ANET.link(Sprite_NetChatTextLine);
})();

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PRIVATE
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = ANET.Sprite_NetChatTextLine.prototype;
  _._applyBackgroundStyle = function(params) {
    if (this._background == null) {
      return;
    }
    this._background.fillAll(params.color);
    this._background.opacity = params.opacity;
  };
  _._create = function() {
    this._createBackground();
    this._createTextLine();
  };
  _._createBackground = function() {
    this._background = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
    this.applyBackgroundStyleA();
    return this.add(this._background);
  };
  _._createTextLine = function() {
    this._textSpr = new KDCore.UI.Sprite_UITextExt(this.params.textLine);
    return this.add(this._textSpr);
  };
  _._updateAnimation = function() {
    if (this._needAnimation === false) {
      return;
    }
    if (this.params.animationSpeedInPx === 0) {
      this._textSpr.x = 0; // * Сразу, без анимации
    } else {
      this._textSpr.x += this.params.animationSpeedInPx;
    }
    if (this._textSpr.x > 0) { // * Граница
      this._textSpr.x = 0;
    }
    this._needAnimation = this._textSpr.x !== 0;
  };
  _._convertChannelIdToText = function(channelId) {
    if (channelId <= 0) {
      return this.params.channelAll;
    }
    return this.params.channelMap;
  };
  _._getActorName = function(actorId) {
    var ref;
    if (actorId <= 0) {
      return "";
    }
    return (ref = $dataActors[actorId]) != null ? ref.name : void 0;
  };
  _._getPlayerName = function(actorId) {
    var ref;
    if (actorId <= 0) {
      return "";
    }
    if (ANNetwork.isConnected()) {
      return (ref = ANGameManager.getPlayerDataByActorId(actorId)) != null ? ref.name : void 0;
    } else {
      return this._getActorName(actorId);
    }
  };
})();

// ■ END PRIVATE
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_PlayerNetworkStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var Sprite_PlayerNetworkStatus;
  Sprite_PlayerNetworkStatus = class Sprite_PlayerNetworkStatus extends Sprite_Balloon {
    constructor() {
      super();
      this.visible = false;
      return;
    }

    setupNETCharacter(_character) {
      this._character = _character;
      return this._checkStateThread = new KDCore.TimedUpdate(10, this._updateStateCheck.bind(this));
    }

    loadBitmap() {
      this.bitmap = ImageManager.loadAA("PlayerStateIcons");
      return this.setFrame(0, 0, 0, 0);
    }

    setup(iconId) {
      if (iconId == null) {
        if (this.visible === true) {
          this.reset();
        }
      } else {
        if (this._balloonId === iconId) {
          return;
        }
        this._balloonId = iconId;
        this.visible = true;
        this.restart();
      }
    }

    restart() {
      return this._duration = 5 * this.speed() + this.waitTime();
    }

    reset() {
      this._duration = 0;
      this._balloonId = -1;
      return this.visible = false;
    }

    // * Не используется, так как прикрепляется к персонажу
    updatePosition() {} // * EMPTY

    update() {
      super.update();
      this._checkStateThread.update();
      // * Начинается снова
      if (this._balloonId >= 0 && this._duration <= 0) {
        this._firstStep = true;
        return this.restart();
      }
    }

    frameIndex() {
      var frameIndex, index;
      index = (this._duration - this.waitTime()) / this.speed();
      frameIndex = 4 - Math.max(Math.floor(index), 0);
      if (this._firstStep == null) {
        return frameIndex;
      } else {
        if (frameIndex === 0) {
          return 1;
        } else {
          return frameIndex;
        }
      }
    }

    // * PRIVATE =====================================================
    _updateStateCheck() {
      if (this._character == null) {
        return;
      }
      this.setup(this._character.networkStateIcon);
    }

  };
  ANET.link(Sprite_PlayerNetworkStatus);
})();

// ■ END Sprite_PlayerNetworkStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Spriteset_Battle.prototype;
  // * Началась битва
  // * Проверим и спрячем "dead" врагов (если мы присоединились)
  _.nRefreshNetBattle = function() {
    var e, i, len, ref, ref1, s;
    try {
      // * Если мы мастер, то не надо, значит мы НЕ присоединились
      if (ANBattleManager.isBattleMaster()) {
        return;
      }
      ref = this._enemySprites;
      for (i = 0, len = ref.length; i < len; i++) {
        s = ref[i];
        if (s == null) {
          continue;
        }
        if (!((ref1 = s._enemy) != null ? ref1.isAlive() : void 0)) {
          s.hide();
        }
      }
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  };
})();

// ■ END Spriteset_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__createCharacters, _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  //@[ALIAS]
  ALIAS__createCharacters = _.createCharacters;
  _.createCharacters = function() {
    ALIAS__createCharacters.call(this);
    if (ANNetwork.isConnected()) {
      this._createNetworkCharacters();
      this._createNetworkCharactersInfo();
    }
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  _._createNetworkCharacters = function() {
    // * Отдельный массив для удобства
    this._networkCharacterSprites = [];
    this.refreshNetworkCharacters();
  };
  _.refreshNetworkCharacters = function() {
    var char, i, j, len, len1, ref, ref1, spr;
    ref = this._networkCharacterSprites;
    for (i = 0, len = ref.length; i < len; i++) {
      char = ref[i];
      this._removeNetCharInfo(char);
      this._characterSprites.delete(char);
      this._tilemap.removeChild(char);
    }
    this._networkCharacterSprites = [];
    ref1 = $gameMap.netChars();
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      char = ref1[j];
      spr = new Sprite_Character(char);
      this._characterSprites.push(spr);
      this._networkCharacterSprites.push(spr);
      this._tilemap.addChild(spr);
    }
    KDCore.GEventsManager.call("netzRefreshNameplate");
  };
  
  // * Специальный слой для иконок статусов и имён сетевых персонажей
  _._createNetworkCharactersInfo = function() {
    this._networkCharactersInfoSprites = [];
    this._networkCharactersInfoLayer = new Sprite();
    this._networkCharactersInfoLayer.z = 9;
    this._tilemap.addChild(this._networkCharactersInfoLayer);
  };
  // * Добавить иконку статуса для персонажа
  _.addNetworkStatusIconForCharacter = function(iconSpr) {
    this._destroyNetStatusIconDuplicate(iconSpr);
    this._networkCharactersInfoSprites.push(iconSpr);
    this._networkCharactersInfoLayer.addChild(iconSpr);
  };
  
  // * Надо найти и удалить, если икона уже существует для персонажа
  // * при refreshNetworkCharacters, их иконки не удаляются с ними
  // * так как находятся на другом слое
  _._destroyNetStatusIconDuplicate = function(iconSpr) {
    var i, len, ref, spr;
    if (iconSpr == null) {
      return;
    }
    ref = this._networkCharactersInfoSprites;
    //TODO: Возможно после создания таблиц имён надо разлелить метод
    // так как сейчас удаляется любой спрайт из массива с соответсвием персонажа
    for (i = 0, len = ref.length; i < len; i++) {
      spr = ref[i];
      if (spr == null) {
        continue;
      }
      if (spr._character === iconSpr._character) {
        this._networkCharactersInfoLayer.removeChild(spr);
        this._networkCharactersInfoSprites.delete(spr);
      }
    }
  };
  // * Удаляет все связанные с персонажем спрайты информации (статус, имя)
  _._removeNetCharInfo = function(char) {
    if (char == null) {
      return;
    }
    return this._destroyNetStatusIconDuplicate(char.netStateIcon);
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ StorageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = StorageManager;
  _.saveObjectForNet = function(object) {
    return this.objectToJson(object).then((json) => {
      return this.jsonToZip(json);
    }).then(function(zip) {
      return $gameTemp._startedRoomGameDataResponse = zip;
    });
  };
  _.loadObjectFormNet = function(object) {
    return this.zipToJson(object).then((json) => {
      return this.jsonToObject(json);
    });
  };
})();

// ■ END StorageManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__addText, ALIAS__clear, _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    if (this.isNeedSendLogToServer()) {
      return ANBattleManager.sendWindowLogMessage("clear", null);
    }
  };
  //@[ALIAS]
  ALIAS__addText = _.addText;
  _.addText = function(text) {
    ALIAS__addText.call(this, text);
    if (this.isNeedSendLogToServer()) {
      ANBattleManager.sendWindowLogMessage("add", text);
    }
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__showNormalAnimation, _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__showNormalAnimation = _.showNormalAnimation;
  _.showNormalAnimation = function(targets, animationId, mirror) {
    ALIAS__showNormalAnimation.call(this, targets, animationId, mirror);
    if (this.isNeedSendLogToServer() && KDCore.isMV()) {
      ANBattleManager.sendWindowLogAnimation(targets, animationId, mirror);
    }
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleLog.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_BattleLog.prototype;
  _.isNeedSendLogToServer = function() {
    return ANNetwork.isConnected() && ANGameManager.isBattleMaster() && !$gameParty.isOneBattler();
  };
})();

// ■ END Window_BattleLog.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_BattleStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__update, _;
  //@[DEFINES]
  _ = Window_BattleStatus.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if ($gameTemp.isBattleRefreshRequested()) {
      this.refresh();
      $gameTemp.clearBattleRefreshRequest();
    }
  };
})();

// ■ END Window_BattleStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChoiceList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCancelEnabled, ALIAS__isCursorMovable, ALIAS__isOkEnabled, ALIAS__processCancel, ALIAS__processOk, ALIAS__select, ALIAS__start, ALIAS__update, _;
  //TODO: ПРОВЕРИТЬ НА MV

  //@[DEFINES]
  _ = Window_ChoiceList.prototype;
  //@[ALIAS]
  ALIAS__isCursorMovable = _.isCursorMovable;
  _.isCursorMovable = function() {
    if (this.nIsNetworkSelection()) {
      return ANInterpreterManager.isSharedEventMaster();
    } else {
      return ALIAS__isCursorMovable.call(this);
    }
  };
  //@[ALIAS]
  ALIAS__isOkEnabled = _.isOkEnabled;
  _.isOkEnabled = function() {
    if (this.nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()) {
      return false;
    }
    return ALIAS__isOkEnabled.call(this);
  };
  //@[ALIAS]
  ALIAS__isCancelEnabled = _.isCancelEnabled;
  _.isCancelEnabled = function() {
    if (this.nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()) {
      return false;
    }
    return ALIAS__isCancelEnabled.call(this);
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.nIsNetworkSelection()) {
      this.nUpdateNetworkSelection();
    }
  };
  // * Можно это тоже, но не обязательно, и так выбор не может сделать второй игрок
  //@[ALIAS]
  //ALIAS__processHandling = _.processHandling
  //_.processHandling = ->
  //    return if @nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()
  //    return ALIAS__processHandling.call(@)

  //@[ALIAS]
  //ALIAS__processTouch = _.processTouch
  //_.processTouch = ->
  //    return if @nIsNetworkSelection() && !ANInterpreterManager.isSharedEventMaster()
  //    return ALIAS__processTouch.call(@)

  //@[ALIAS]
  ALIAS__select = _.select;
  _.select = function(index) {
    if (this.nIsNetworkSelection()) {
      // * Если мастер, то выбор проходит и отправляем всем выбор
      if (ANInterpreterManager.isSharedEventMaster()) {
        ALIAS__select.call(this, index);
        return this.nSendNetworkSelection(index);
      } else {
        // * Если не мастер, но выбор пришёл с сервера (т.е. есть флаг), то ставим выбор
        if (this.nIsSelectFromNetworkMaster === true) {
          this.nIsSelectFromNetworkMaster = false;
          return ALIAS__select.call(this, index);
        } else {

        }
      }
    } else {
      // * NOTHING
      // * Клиент сам не может менять выбор
      return ALIAS__select.call(this, index);
    }
  };
  
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this, ...arguments);
    if (ANNetwork.isConnected()) {
      this.nSetNetworkSelectMode(false);
    }
  };
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    if (ANNetwork.isConnected()) {
      this.nPrepareNetworkSelection();
    }
    ALIAS__start.call(this);
  };
  
  //@[ALIAS]
  ALIAS__processOk = _.processOk;
  _.processOk = function() {
    ALIAS__processOk.call(this);
    if (this.nIsNetworkSelection() && this.isCurrentItemEnabled()) {
      this.nSendNetworkSelectionAciton('ok');
    }
  };
  //@[ALIAS]
  ALIAS__processCancel = _.processCancel;
  _.processCancel = function() {
    ALIAS__processCancel.call(this);
    if (this.nIsNetworkSelection() && this.isCurrentItemEnabled()) {
      this.nSendNetworkSelectionAciton('cancel');
    }
  };
})();

// ■ END Window_ChoiceList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ChoiceList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_ChoiceList.prototype;
  (function() {    // * Выбор (только одного игрока) в общем событии
    // -----------------------------------------------------------------------
    // * Подготовка окна к выбору по сети
    _.nPrepareNetworkSelection = function() {
      // * Обнуляем действие из сети
      $gameTemp.nSelectionActionFromNetwork = null;
      this.nSetNetworkSelectMode($gameTemp.nRequireChoiceOnlyForMaster);
      // * Сбрасываем флаг (чтобы не повторился на следующем выборе)
      $gameTemp.nRequireChoiceOnlyForMaster = false;
      // * При открытии окна, первый выбор Default всегда проходит (не запрещён) на клиенте
      // * Поэтому ставим разрешающий флаг (якобы от сервера первый выбор)
      this.nIsSelectFromNetworkMaster = true;
      // * Очищаем последний отправленный индекс
      this.__nLastSentIndex = null;
    };
    _.nSetNetworkSelectMode = function(_networkSelectMode) {
      this._networkSelectMode = _networkSelectMode;
    };
    _.nIsNetworkSelection = function() {
      return this._networkSelectMode === true && ANNetwork.isConnected();
    };
    // * Отправить на сервер индекс выбора
    _.nSendNetworkSelection = function(index) {
      // * Чтобы не спамить
      if (this.__nLastSentIndex === index) {
        return;
      }
      this.__nLastSentIndex = index;
      ANInterpreterManager.sendChoiceSelection(index, null);
    };
    // * Отправить на сервер действие (ОК, отмена)
    _.nSendNetworkSelectionAciton = function(action) {
      ANInterpreterManager.sendChoiceSelection(this.index(), action);
    };
    // * Ожидание действие от сервера (не мастер)
    return _.nUpdateNetworkSelection = function() {
      var action, index;
      if ($gameTemp.nSelectionActionFromNetwork == null) {
        return;
      }
      if (ANInterpreterManager.isSharedEventMaster()) {
        return;
      }
      ({action, index} = $gameTemp.nSelectionActionFromNetwork);
      this.nIsSelectFromNetworkMaster = true;
      if (index != null) {
        // * Всегда ставим выбор аналогичный масетеру (пришёл от сервера который), затем уже действия
        this.select(index);
      }
      switch (action) {
        case 'ok':
          this.processOk();
          break;
        case 'cancel':
          this.processCancel(); // select
          break;
      }
      // * Ничего, выбор всегда идёт
      // * Флаг обработан, очищаем
      $gameTemp.nSelectionActionFromNetwork = null;
    };
  })();
})();

// ■ END Window_ChoiceList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawItem, ALIAS__isEnabled, ALIAS__makeItemList, _;
  //@[DEFINES]
  _ = Window_ItemList.prototype;
  //@[ALIAS]
  ALIAS__isEnabled = _.isEnabled;
  _.isEnabled = function() {
    if (ANTradeManager.isInTrade()) {
      return true; // * В режиме NetTrade можно продавать все вещи
    } else {
      return ALIAS__isEnabled.call(this, ...arguments);
    }
  };
  
  //@[ALIAS]
  ALIAS__makeItemList = _.makeItemList;
  _.makeItemList = function() {
    ALIAS__makeItemList.call(this);
    if (ANTradeManager.isInTrade()) {
      this.nMakeItemListForTrading();
    }
  };
  //@[ALIAS]
  ALIAS__drawItem = _.drawItem;
  _.drawItem = function(index) {
    if (ANTradeManager.isInTrade() && index === 0) {
      this.nDrawEmptyTradeItem(index);
      return;
    }
    return ALIAS__drawItem.call(this, index);
  };
})();

// ■ END Window_ItemList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_ItemList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_ItemList.prototype;
  // * Фильтруем список предметов для торговли
  // * 1. Добавляем "пустой" предмет (чтобы убрать позицию)
  // * 2. Удаляем из списка уже выбранные ранее предметы
  _.nMakeItemListForTrading = function() {
    var i, item, len, ref;
    //%[I] Добавлять кнопку Remove только если в слоте что-то есть
    // смотри $gameTemp.__netTradeItemIndex
    this._data.unshift(this.nEmptyTradeItem());
    ref = $gameTemp._netMyTradeItems;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      if (item == null) {
        continue;
      }
      if (this._data.contains(item[0])) {
        this._data.delete(item[0]);
      }
    }
  };
  // * Тут использую много полей, чтобы не было вылетов с другими плагинами
  // * Например Visu Equip Core использует некоторые поля
  _.nEmptyTradeItem = function() {
    return {
      id: 0,
      animationId: 0,
      note: "",
      meta: {},
      categories: [],
      iconIndex: 0,
      itypeId: 1,
      name: "",
      price: 0,
      occassion: 0,
      description: "\\Chex[#f5c842]Remove Item from current Trade slot"
    };
  };
  _.nDrawEmptyTradeItem = function(index) {
    var e, item, rect;
    try {
      item = this.itemAt(index);
      if (item == null) {
        return;
      }
      rect = this.itemLineRect(index);
      this.changeTextColor("#f5c842");
      this.drawText("[Remove]", rect.x, rect.y, rect.width, 'center');
      //@drawItemName(item, rect.x, rect.y, rect.width)
      return this.resetTextColor();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Window_ItemList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__isFormationEnabled, ALIAS__isSaveEnabled, _;
  //@[DEFINES]
  _ = Window_MenuCommand.prototype;
  // * Команда Formation запрещена в сетевой игре всегда
  //@[ALIAS]
  ALIAS__isFormationEnabled = _.isFormationEnabled;
  _.isFormationEnabled = function() {
    if (ANNetwork.isConnected()) {
      return false;
    } else {
      return ALIAS__isFormationEnabled.call(this, ...arguments);
    }
  };
  
  //@[ALIAS]
  ALIAS__isSaveEnabled = _.isSaveEnabled;
  _.isSaveEnabled = function() {
    if (ANNetwork.isConnected()) {
      // * Если параметр включён
      return ANET.PP.isSaveLoadAllowed();
    } else {
      return ALIAS__isSaveEnabled.call(this, ...arguments);
    }
  };
})();

// ■ END Window_MenuCommand.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__initialize, ALIAS__isCurrentItemEnabled, _;
  //@[DEFINES]
  _ = Window_MenuStatus.prototype;
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function(rect) {
    ALIAS__initialize.call(this, rect);
    if (ANNetwork.isConnected()) {
      if (ANET.PP.isOtherPlayersVisibleInMenu() === false) {
        this.setOnlyMyPlayerInMenuMode();
      }
    }
  };
  //@[ALIAS]
  ALIAS__isCurrentItemEnabled = _.isCurrentItemEnabled;
  _.isCurrentItemEnabled = function() {
    if (ANNetwork.isConnected()) {
      return this.isCurrentItemEnabledInNetworkGame();
    } else {
      return ALIAS__isCurrentItemEnabled.call(this, ...arguments);
    }
  };
})();

// ■ END Window_MenuStatus.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_MenuStatus.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_MenuStatus.prototype;
  (function() {    // * Команды Skill, Statis, Equip
    // -----------------------------------------------------------------------
    _.isCurrentItemEnabledInNetworkGame = function() {
      if (this.isSymbolOnlyForMyNetActor()) {
        return this.isCurrentActorIsMyNetActor();
      } else {
        return true;
      }
    };
    // * Набор команд, которые доступны только для текущего игрока (персонажа)
    _.isSymbolOnlyForMyNetActor = function() {
      var e, isOnlyForMyActor, symbol;
      try {
        // * Плохой вариант получения команды, но работает
        symbol = SceneManager._scene._commandWindow.currentSymbol();
        // * Навыки и экипировка - только для моего персонажа
        isOnlyForMyActor = symbol === 'skill' || symbol === 'equip';
        if (ANET.PP.isOtherPlayersMenuStatusAllowed() === false) {
          isOnlyForMyActor = isOnlyForMyActor || (symbol === 'status');
        }
        return isOnlyForMyActor;
      } catch (error) {
        e = error;
        AA.w(e);
        return false;
      }
    };
    
    // * Выбранный (Index) персонаж принадлежит мне? (мой персонаж)
    return _.isCurrentActorIsMyNetActor = function() {
      var actor, e;
      try {
        actor = $gameParty.members()[this.index()];
        if (ANET.PP.isMultiActorsMode()) {
          if (actor.isMyNetworkActor()) {
            return true;
          } else if ($gameParty.nIsIOwnedSharedActor(actor.actorId())) {
            return true;
          }
        } else {
          return actor.isMyNetworkActor();
        }
      } catch (error) {
        e = error;
        AA.w(e);
        return false;
      }
    };
  })();
  (function() {    // * Cписок игроков
    // -----------------------------------------------------------------------
    
    // * Будет видно только моего персонажа
    return _.setOnlyMyPlayerInMenuMode = function() {
      this.maxItems = function() {
        return 1;
      };
      this.actor = function(index) {
        return $gameParty.leader();
      };
      return this.selectLast = function() {
        return this.smoothSelect(0);
      };
    };
  })();
})();

// ■ END Window_MenuStatus.coffee
//---------------------------------------------------------------------------

// -----------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__startMessage, ALIAS__terminateMessage, _;
  //@[DEFINES]
  _ = Window_Message.prototype;
  //@[ALIAS]
  ALIAS__startMessage = _.startMessage;
  _.startMessage = function() {
    ALIAS__startMessage.call(this);
    return ANET.UI.onGameMessageStart();
  };
  
  //TODO: Тут мерцание происходит. Как быть? Timeout?
  //@[ALIAS]
  ALIAS__terminateMessage = _.terminateMessage;
  _.terminateMessage = function() {
    ALIAS__terminateMessage.call(this);
    return ANET.UI.onGameMessageEnd();
  };
})();

// ■ END Window_Message.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NetworkActorsList;

Window_NetworkActorsList = class Window_NetworkActorsList extends Window_Selectable {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
    this.select(0);
  }

  maxItems() {
    return this.actorsForNetwork().length;
  }

  maxCols() {
    return 2;
  }

  actorsForNetwork() {
    return ANET.PP.actorsForNetwork();
  }

  isCurrentItemEnabled() {
    var e;
    try {
      return this.isEnable(this.index());
    } catch (error) {
      e = error;
      ANET.w(e);
      return false;
    }
  }

  selectedActorId() {
    if (!this.isCurrentItemEnabled()) {
      return 0;
    }
    return this.getActorData(this.index()).id;
  }

  isEnable(index) {
    var actorId;
    actorId = this.getActorData(index).id;
    return !ANGameManager.playersData.some(function(pl) {
      return pl.actorId === actorId;
    });
  }

  drawItem(index) {
    var actorData, faceBitmap, rect;
    actorData = this.getActorData(index);
    if (actorData == null) {
      return;
    }
    rect = this.itemRect(index);
    faceBitmap = ImageManager.loadFace(actorData.faceName);
    faceBitmap.addLoadListener(() => {
      return this._drawActor(rect, actorData, index);
    });
  }

  itemHeight() {
    return 110;
  }

  getActorData(index) {
    return $dataActors[this.actorsForNetwork()[index]];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkActorsList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkActorsList.prototype;
  _._drawActor = function(rect, a, index) {
    this.changePaintOpacity(this.isEnable(index));
    this._drawActorInfo(rect, a);
    this._drawActorClass(rect, a);
    if (!this.isEnable(index)) {
      this._drawNetworkStatus(rect);
    }
    this.changePaintOpacity(1);
  };
  _._drawActorInfo = function(rect, a) {
    this.drawFaceWithCustomSize(a.faceName, a.faceIndex, rect.x + 4, rect.y + 2, this.itemHeight() - 8);
    return this.drawText(a.name, rect.x + 120, rect.y + 4, 168);
  };
  _._drawActorClass = function(rect, a) {
    var aClass, className, e;
    try {
      aClass = $dataClasses[a.classId];
      if (aClass != null) {
        className = aClass.name;
      } else {
        className = "";
      }
      if (KDCore.isMV()) {
        this.changeTextColor(this.crisisColor());
      } else {
        this.changeTextColor(ColorManager.crisisColor());
      }
      this.contents.fontSize -= 8;
      this.drawText(className, rect.x + 132, rect.y + 44, 168);
      this.contents.fontSize += 8;
      this.resetTextColor();
    } catch (error) {
      e = error;
      AA.warning(e);
    }
  };
  _._drawNetworkStatus = function(rect) {
    if (KDCore.isMV()) {
      this.changeTextColor(this.deathColor());
    } else {
      this.changeTextColor(ColorManager.deathColor());
    }
    this.contents.fontSize -= 8;
    this.drawText('Picked', rect.x + 270, rect.y + 4);
    this.contents.fontSize += 8;
    this.resetTextColor();
  };
})();

// ■ END Window_NetworkActorsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NetworkGameMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NetworkGameMenu;

Window_NetworkGameMenu = class Window_NetworkGameMenu extends Window_Command {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  makeCommandList() {
    this.addCommand(ANET.LV("createRoom"), "createRoom");
    this.addCommand(ANET.LV("joinRoom"), "joinRoom");
    if (ANET.PP.isJoinRandomRoomAllowed()) {
      this.addCommand(ANET.LV("joinRandomRoom"), "joinRandRoom");
    }
    this.addCommand(ANET.LV("Settings"), "settings");
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NetworkGameMenu.prototype;
})();

// ■ END Window_NetworkGameMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NetworkRoomCommands;

Window_NetworkRoomCommands = class Window_NetworkRoomCommands extends Window_HorzCommand {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  maxCols() {
    return 3;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  isStartedRoom() {
    return ANET.Utils.isStartedRoom();
  }

  isCanSelectActors() {
    return ANET.PP.isActorSelectionAllowed() && !this.isLoadGame();
  }

  makeCommandList() {
    var leaveCommandName;
    if (ANNetwork.isMasterClient()) {
      this.addCommand(ANET.LV("start"), 'start', this._isStartEnabled());
    } else {
      // * Если комната в режиме "В игре"
      if (this.isStartedRoom()) {
        this.addCommand(ANET.LV("joinGame"), 'joinInGame', this._isJoinInAlreadyGameEnabled());
      } else {
        if (ANET.PP.isCheckPlayerReadyState()) {
          this.addCommand(ANET.LV("ready"), 'ready', this._isReadyEnabled());
        }
      }
    }
    if (this.isCanSelectActors()) {
      this.addCommand(ANET.LV("character"), 'character', this._isCharSelectEnabled());
    }
    leaveCommandName = ANNetwork.isMasterClient() ? ANET.LV("close") : ANET.LV("leave");
    this.addCommand(leaveCommandName, 'leave');
  }

};

(function() {  
  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomCommands.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomCommands.prototype;
  _._myActorId = function() {
    return ANGameManager.myPlayerData().actorId;
  };
  _._isAllPlayersSelectActors = function() {
    return ANGameManager.playersData.every(function(pl) {
      return pl.actorId !== 0;
    });
  };
  _._isStartEnabled = function() {
    if (!ANET.PP.isSingleActorNetworkGameAllowed()) {
      if (ANGameManager.playersData.length === 1) {
        return false;
      }
    }
    // * Надо выбрать персонажа, потом можно начинать игру
    if (this.isCanSelectActors() || this.isLoadGame()) {
      //TODO: Разрешить загружаться меньшему количеству игроков??? Опция или НЕТ?
      // * Сейчас может загрузить игру два игрока, если играло 3 или более например
      return this._isAllPlayersSelectActors() && this._isAllPlayersReady();
    } else {
      return this._isAllPlayersReady();
    }
  };
  _._isReadyEnabled = function() {
    if (this.isCanSelectActors()) {
      return !this._isCharSelectEnabled();
    } else {
      return true;
    }
  };
  _._isCharSelectEnabled = function() {
    return this._myActorId() <= 0;
  };
  _._isJoinInAlreadyGameEnabled = function() {
    if (!ANET.PP.isJoinStartedRoomAllowed()) {
      return false;
    }
    if (this.isCanSelectActors()) {
      return this._isAllPlayersSelectActors();
    } else {
      return true; // * Тут сразу можно, без Ready, т.е. игра уже запущена, никого ждать не надо
    }
  };
  
  // * Проверка, что все игроки готовы (только визуальная)
  _._isAllPlayersReady = function() {
    if (ANET.PP.isCheckPlayerReadyState()) {
      // * У себя (хоста) автоматически ставится флаг готов при создании комнаты
      return ANGameManager.playersData.every(function(pl) {
        return pl.isReadyInRoom === true;
      });
    } else {
      return true; // * Всегда да, если параметр отключён
    }
  };
})();

// ■ END Window_NetworkRoomCommands.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
// * Список игроков в комнате
//TODO: Пока нельзя выделять игрока и что-то с ним делать
//TODO: Возможно добавить возможность кикнуть игрока
var Window_NetworkRoomPlayersList;

Window_NetworkRoomPlayersList = class Window_NetworkRoomPlayersList extends Window_Selectable {
  constructor(rect) {
    super(rect);
  }

  //@setBackgroundType ANET.VD.getWindowBackgroundType()
  maxItems() {
    return ANGameManager.playersData.length;
  }

  drawItem(index) {
    var playerData, rect;
    playerData = this.playerData(index);
    if (playerData == null) {
      return;
    }
    rect = this.itemLineRect(index);
    this.changePaintOpacity(this.isEnabled(index));
    this._drawPlayerInfo(rect, playerData);
    this.changePaintOpacity(1);
  }

  isEnabled(index) {
    return true;
  }

  isLoadGame() {
    return ANET.Utils.isLoadGameRoom();
  }

  isStartedRoom() {
    return ANET.Utils.isStartedRoom();
  }

  playerData(index) {
    return ANGameManager.playersData[index];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomPlayersList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomPlayersList.prototype;
  _._drawPlayerInfo = function(rect, playerData) {
    var text;
    text = playerData.name;
    if (playerData.id === ANNetwork.room.masterId) {
      text = "\\C[1]" + text;
    } else if (playerData.id === ANNetwork.myId()) {
      text = "\\C[3]" + text;
    }
    if (ANET.PP.isActorSelectionAllowed() || this.isLoadGame()) {
      text += this._getActorName(playerData);
    }
    if (this.isStartedRoom() && NetPlayerDataWrapper.isHaveCharacterInGame(playerData)) {
      text += " \\C[4]\\}[In Game]";
    }
    if (ANET.PP.isCheckPlayerReadyState()) {
      if (playerData.isReadyInRoom === true) {
        text += " \\C[5]\\}[Ready]";
      }
    }
    this.drawTextEx(text, rect.x, rect.y, rect.width, 'left');
  };
  _._getActorName = function(playerData) {
    var actorName;
    actorName = "...";
    if (playerData.actorId > 0) {
      actorName = $dataActors[playerData.actorId].name;
    }
    return "\\C[0] [%1]".format(actorName);
  };
})();

// ■ END Window_NetworkRoomPlayersList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//TODO: Отключить комнаты других игр (параметр или от сервера зависит)
var Window_NetworkRoomsList;

Window_NetworkRoomsList = class Window_NetworkRoomsList extends Window_Selectable {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
    this._createNoRoomsMessage();
    this.refreshRooms([]);
    return;
  }

  maxItems() {
    if (this.isHaveAnyRoom()) {
      return this.roomsList.length;
    } else {
      return 0;
    }
  }

  drawItem(index) {
    var rect, roomData;
    roomData = this.roomData(index);
    if (roomData == null) {
      return;
    }
    rect = this.itemLineRect(index);
    this.changePaintOpacity(this.isEnabled(index));
    this._drawRoomInfo(rect, roomData);
    this.changePaintOpacity(1);
  }

  isEnabled(index) {
    return NetRoomDataWrapper.isRoomProperToJoin(this.roomData(index));
  }

  isCurrentRoomEnabled() {
    return this.isEnabled(this.index());
  }

  getSelectedRoom() {
    return this.roomData(this.index());
  }

  refreshRooms(roomsList) {
    this.roomsList = roomsList;
    //TODO: @_noRoomsTextSpr мелькает
    this._noRoomsTextSpr.visible = !this.isHaveAnyRoom();
    if (this._noRoomsTextSpr.visible === true) {
      this.select(-1);
    }
    this.refresh();
  }

  isHaveAnyRoom() {
    if (this.roomsList != null) {
      return this.roomsList.length > 0;
    } else {
      return false;
    }
  }

  roomData(index) {
    return this.roomsList[index];
  }

};

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ Window_NetworkRoomsList.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomsList.prototype;
  _._createNoRoomsMessage = function() {
    var params;
    params = KDCore.UI.Sprite_UIText.prototype.defaultParams();
    params.size.w = this.width;
    params.size.h = this.height;
    params.font.size = 32;
    params.outline.width = 3;
    this._noRoomsTextSpr = new KDCore.UI.Sprite_UIText(params);
    this._noRoomsTextSpr.visible = false;
    this._noRoomsTextSpr.drawText("There are no rooms on server");
    return this.addChild(this._noRoomsTextSpr);
  };
  _._drawRoomInfo = function(rect, roomData) {
    var loadGame, roomText, rpgVersion, state;
    rpgVersion = roomData.rpgVersion === 0 ? 'MZ' : 'MV';
    state = roomData.inGame === true ? 'In Game' : 'In Lobby';
    loadGame = NetRoomDataWrapper.isLoadGameRoom(roomData) ? '[from Savefile]' : '';
    // * [VER](GAME NAME) RoomName 0\X (inGame|inLobby)
    roomText = "\\}\\C[1][%1]\\C[3](%2)\\{\\C[0]   %3   \\C[4]%4/%5 \\}\\C[5](%6) \\C[6]%7".format(rpgVersion, roomData.gameTitle, roomData.name, roomData.playersIds.length, roomData.maxPlayers, state, loadGame);
    this.drawTextEx(roomText, rect.x, rect.y, rect.width, 'left');
  };
})();

// ■ END Window_NetworkRoomsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NetworkRoomTypeMenu.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NetworkRoomTypeMenu;

Window_NetworkRoomTypeMenu = class Window_NetworkRoomTypeMenu extends Window_Command {
  constructor(rect) {
    super(rect);
    this.setBackgroundType(ANET.VD.getWindowBackgroundType());
  }

  makeCommandList() {
    this.addCommand("New Game", "newGame");
    this.addCommand("Load Game", "continue", this.isHaveSavedGames());
  }

  isHaveSavedGames() {
    return true; //TODO: првоерка наличия сетевых сохранений
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NetworkRoomTypeMenu.prototype;
})();

// ■ END Window_NetworkRoomTypeMenu.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NPlayerCommandsList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NPlayerCommandsList;

Window_NPlayerCommandsList = class Window_NPlayerCommandsList extends Window_Selectable {
  constructor(rect) {
    super(...arguments);
    this.setBackgroundType(this);
  }

  //%[Главный метод по обновлению списка команд]
  setCommandsFor(char) {
    this.char = char;
    return this.refresh();
  }

  maxCols() {
    return 1;
  }

  maxItems() {
    if (this._items != null) {
      return this._items.length;
    } else {
      return 0;
    }
  }

  itemAt(index) {
    return this._items[index];
  }

  isCurrentItemEnabled() {
    return this.isEnabled(this.index());
  }

  selectedItem() {
    return this.itemAt(this.index());
  }

  isEnabled(index) {
    var item;
    item = this.itemAt(index);
    // * Проверка дистанции (общая)
    if (item.minDist > 0) {
      if (this._distance > item.minDist) {
        return false;
      }
    }
    // * Проверка переключателя (общая)
    if (item.switchId > 0) {
      if ($gameSwitches.value(item.switchId) === false) {
        return false;
      }
    }
    switch (item.action) {
      case "trade":
        if (this.char != null) {
          return ANTradeManager.isPlayerAvailableForTrade(this.char.playerData());
        } else {
          return false;
        }
        break;
      case "status":
        return true;
      case "follow":
        return true;
      default:
        return true; // * user - можно, если проверки выше пройдены
    }
  }

  drawItem(index) {
    var e, item, rect;
    item = this.itemAt(index);
    if (item == null) {
      return;
    }
    rect = this.itemLineRect(index);
    try {
      this.changePaintOpacity(this.isEnabled(index));
      this.drawTextExInCenter(item.text, rect.x, rect.y, rect.width, rect.height);
      this.changePaintOpacity(1);
    } catch (error) {
      e = error;
      ANET.w(e);
    }
  }

  refresh() {
    this._prepareCommandsForCurrentChar();
    Window_Selectable.prototype.refresh.call(this);
  }

  resetFontSettings() {
    super.resetFontSettings();
    this.contents.fontSize = 16;
  }

  //TODO: Настройки из параметров
  lineHeight() {
    if (KDCore.isMZ()) {
      return 16;
    } else {
      return 22;
    }
  }

  itemPadding() {
    return 6;
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NPlayerCommandsList.prototype;
  _._prepareCommandsForCurrentChar = function() {
    var c, defCommands, i, j, len, len1, userCommands;
    this._distance = this._getDistanceFromPlayerToBindedCharacter();
    this._items = [];
    defCommands = ANET.PP.getPlayerMenuDefaultCommands();
    for (i = 0, len = defCommands.length; i < len; i++) {
      c = defCommands[i];
      this._items.push(c);
    }
    userCommands = ANET.PP.getPlayerMenuUserCommands();
    for (j = 0, len1 = userCommands.length; j < len1; j++) {
      c = userCommands[j];
      this._items.push(c);
    }
  };
  _._getDistanceFromPlayerToBindedCharacter = function() {
    var dist, x, y;
    if (this.char == null) {
      return 0;
    }
    ({x, y} = $gamePlayer);
    dist = $gameMap.distance(x, y, this.char.x, this.char.y);
    if (dist <= 0) {
      dist = 1;
    }
    if (dist === 2) { // * Возможно диагональ
      if ($gamePlayer.kdInDiagonalPointRelativeTo(this.char)) {
        return 1;
      }
    } else {
      return dist;
    }
  };
})();

// ■ END Window_NPlayerCommandsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
var Window_NTradeItemNumberInput;

Window_NTradeItemNumberInput = class Window_NTradeItemNumberInput extends Window_NumberInput {
  constructor() {
    super();
  }

  // * Предмет для которого будет считать количество
  setItem(_item) {
    this._item = _item;
  }

  isGoldItem() {
    return this._item.id === ANTradeManager.TradeGoldItemId;
  }

  // * Внешний метод обработки конечного результата
  setOkHandler(_okHandler) {
    this._okHandler = _okHandler;
  }

  changeDigit(up) {
    var maxNumber;
    super.changeDigit(up);
    maxNumber = this.isGoldItem() ? $gameParty.gold() : $gameParty.numItems(this._item);
    if (this._number > maxNumber) {
      this._number = maxNumber;
      SoundManager.playBuzzer();
    } else {
      if (this._number < 0) {
        this._number = 0;
        SoundManager.playBuzzer();
      }
    }
    this.refresh();
  }

  //$[OVER]
  start() {
    var itemMax;
    itemMax = this.isGoldItem() ? $gameParty.maxGold() : $gameParty.maxItems();
    this._maxDigits = itemMax.toString().length;
    if (this.isGoldItem() && $gameParty.gold() <= 0) {
      this._number = 0; // * Если нет золота, то 0
    } else {
      // * Иначе (предмет) или есть золото, то 1
      this._number = 1;
    }
    this.updatePlacement();
    this.placeButtons();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.select(this._maxDigits - 1);
  }

  //$[OVER]
  updatePlacement() {
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
  }

  //$[OVER]
  processOk() {
    this.playOkSound();
    this.updateInputData();
    this.deactivate();
    this.close();
    if (this._okHandler != null) {
      this._okHandler();
    }
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NTradeItemsList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
var Window_NTradeItemsList;

Window_NTradeItemsList = class Window_NTradeItemsList extends Window_Selectable {
  constructor(rect, side) {
    super(...arguments);
    this.side = side;
    this.setBackgroundType(2);
    return;
  }

  //TODO: from parameters
  getSettings() {
    return {
      maxTradeItems: 4,
      selectItemText: "\\I[16]\\FS[20]\\CHEX[#2ab8d1] <Select item>",
      emptyItemText: "\\I[16]\\FS[18]\\CHEX[#646869] -nothing-",
      goldItemText: "\\I[163]\\CHEX[#ffea08] Gold: %0",
      goldEmptyText: "\\I[16]\\FS[20]\\CHEX[#f7ed81] <Add gold>"
    };
  }

  // * Является ли окно окном данного игрока (можно управлять)
  isOwnerWindow() {
    return this.side === 0;
  }

  maxCols() {
    return 1;
  }

  // * +2 - для кнопки Trade и золота
  maxItems() {
    return this.getSettings().maxTradeItems + 2;
  }

  // * Последний индекс
  tradeCommandIndex() {
    return this.maxItems() - 1;
  }

  // * Первый индекс
  goldCommandIndex() {
    return 0;
  }

  tradeItems() {
    return this._items;
  }

  isCurrentIndexTradeCommand() {
    return this.tradeCommandIndex() === this.index();
  }

  isCurrentIndexGoldCommand() {
    return this.goldCommandIndex() === this.index();
  }

  isEnabled(index) {
    if (this.isOwnerWindow()) {
      return true; // * Всегда можно
    } else {
      if (index === this.tradeCommandIndex()) {
        return $gameTemp._netHisTradeReadyStatus === true;
      } else {
        return true; // * Для прозрачности 255
      }
    }
  }

  refresh() {
    this._refreshTradeItems();
    Window_Selectable.prototype.refresh.call(this);
  }

  drawItem(index) {
    var e, item;
    try {
      this.changePaintOpacity(this.isEnabled(index));
      if (index === this.tradeCommandIndex()) {
        return this._drawTradeCommand();
      } else if (index === this.goldCommandIndex()) {
        return this._drawGoldCommand();
      } else {
        item = this.tradeItems()[index];
        if (item == null) {
          return this._drawEmptyItem(index);
        } else {
          return this._drawTradeItem(index);
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  drawItemBackground(index) {} // * NOTHING

  itemRect(index) {
    var rect;
    rect = Window_Selectable.prototype.itemRect.call(this, index);
    if (index === this.tradeCommandIndex()) {
      rect.x += 40;
      rect.y += 8;
      rect.height = 44;
      rect.width = 114;
    }
    return rect;
  }

  refreshCursor() {
    if (this.index() === this.tradeCommandIndex()) {
      this.setCursorRect(0, 0, 0, 0);
      this.redrawItem(this.index());
      return this._shouldRedrawButton = true;
    } else {
      if (this._shouldRedrawButton === true) {
        this.redrawItem(this.tradeCommandIndex());
        this._shouldRedrawButton = false;
      }
      return Window_Selectable.prototype.refreshCursor.call(this);
    }
  }

};

(function() {
  var _;
  //@[DEFINES]
  _ = Window_NTradeItemsList.prototype;
  _._refreshTradeItems = function() {
    var e;
    try {
      if (this.isOwnerWindow()) {
        this._items = $gameTemp._netMyTradeItems;
      } else {
        this._items = $gameTemp._netHisNetTradeItems;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this._items = [];
    }
  };
  _._drawTradeCommand = function() {
    var b, e, index, rect;
    index = this.tradeCommandIndex();
    rect = this.itemRect(index);
    try {
      if (this.isOwnerWindow()) {
        if (this.index() === index) {
          b = ImageManager.loadAA("nzTradeButton_01");
        } else {
          b = ImageManager.loadAA("nzTradeButton_00");
        }
      } else {
        if (this.isEnabled(index)) { // * Player B is ready
          b = ImageManager.loadAA("nzTradeStatus_Ready");
        } else {
          b = ImageManager.loadAA("nzTradeStatus_NotReady");
        }
      }
      b.addLoadListener(() => {
        return this.contents.drawOnMe(b, rect.x, rect.y, 114, 44);
      });
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawGoldCommand = function() {
    var e, index, item;
    index = this.goldCommandIndex();
    try {
      item = this.tradeItems()[index];
      if (item != null) {
        this._drawGoldCount(index, item[1]);
      } else {
        if (this.isOwnerWindow()) {
          this._drawGoldCount(index, 0);
        } else {
          this._drawEmptyItem(index);
        }
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawGoldCount = function(index, count) {
    var rect, text;
    rect = this.itemLineRect(index);
    if (count <= 0) {
      text = this.getSettings().goldEmptyText;
    } else {
      text = this.getSettings().goldItemText.replace("%0", count);
    }
    this.drawTextEx(text, rect.x, rect.y, rect.width);
  };
  _._drawEmptyItem = function(index) {
    var e, rect, text;
    rect = this.itemLineRect(index);
    try {
      if (this.isOwnerWindow()) {
        text = this.getSettings().selectItemText;
      } else {
        text = this.getSettings().emptyItemText;
      }
      this.drawTextEx(text, rect.x, rect.y, rect.width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _._drawTradeItem = function(index) {
    var count, item, itemObj, numberWidth, rect;
    item = this.tradeItems()[index];
    if (item == null) {
      return;
    }
    itemObj = item[0];
    if (itemObj == null) {
      return;
    }
    count = item[1] || 1;
    numberWidth = Window_ItemList.prototype.numberWidth.call(this);
    rect = this.itemLineRect(index);
    this.drawItemName(itemObj, rect.x, rect.y, rect.width - numberWidth);
    this.drawItemNumber(count, rect.x, rect.y, rect.width);
  };
  _.drawItemNumber = function(count, x, y, width) {
    this.drawText(":", x, y, width - this.textWidth("00"), "right");
    this.drawText(count, x, y, width, "right");
  };
})();

// ■ END Window_NTradeItemsList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_SavefileList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawTitle, ALIAS__isEnabled, _;
  //@[DEFINES]
  _ = Window_SavefileList.prototype;
  //@[ALIAS]
  ALIAS__isEnabled = _.isEnabled;
  _.isEnabled = function(savefileId) {
    // * Нельзя загружать сетевые сохранения из обычного меню загрузки
    if (this._mode === 'load' && DataManager.nIsNetworkSaveFile(savefileId)) {
      return false;
    } else if (this._mode === 'loadNet') {
      return DataManager.nIsNetworkSaveFile(savefileId);
    } else {
      return ALIAS__isEnabled.call(this, savefileId);
    }
  };
  
  //TODO: Добавить кастомизацию или опцию на отключение
  //@[ALIAS]
  ALIAS__drawTitle = _.drawTitle;
  _.drawTitle = function(savefileId, x, y) {
    if (DataManager.nIsNetworkSaveFile(savefileId)) {
      return this.drawText(TextManager.file + " " + savefileId + " [Network game]", x, y, 240);
    } else {
      return ALIAS__drawTitle.call(this, savefileId, x, y);
    }
  };
})();

// ■ END Window_SavefileList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_SavefileList.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawGameTitle, _;
  //@[DEFINES]
  _ = Window_SavefileList.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__drawGameTitle = _.drawGameTitle;
  _.drawGameTitle = function(info, x, y, width) {
    var text;
    if ((info.nUniqueSaveID != null) && (info.nMyActorId != null)) {
      text = "";
      if (info.title != null) {
        text = info.title;
      }
      text += " [Network game]";
      return this.drawText(text, x, y, width + 100);
    } else {
      return ALIAS__drawGameTitle.call(this, info, x, y, width);
    }
  };
})();

// ■ END Window_SavefileList.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Selectable.prototype;
})();

// ■ END Window_Selectable.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Selectable.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Selectable.prototype;
})();

// ■ END Window_Selectable.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TitleCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__makeCommandList, _;
  //@[DEFINES]
  _ = Window_TitleCommand.prototype;
  //@[ALIAS]
  ALIAS__makeCommandList = _.makeCommandList;
  _.makeCommandList = function() {
    ALIAS__makeCommandList.call(this);
    this.addCommand(ANET.LV("network"), "network");
    this._nRearangeNetworkCommand();
    if (!ANET.PP.isSinglePlayerAllowed()) {
      this._nRemoveNewGameCommand();
    }
  };
})();

// ■ END Window_TitleCommand.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_TitleCommand.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_TitleCommand.prototype;
  // * Чтобы не была последнией, меняю местами с командой options
  _._nRearangeNetworkCommand = function() {
    var e, netCmd, netCommandIndex, optionsCmd, optionsCommandIndex;
    try {
      optionsCommandIndex = this._list.indexOf(this._list.find(function(item) {
        return item.symbol === "options";
      }));
      if (optionsCommandIndex < 0) {
        return;
      }
      netCommandIndex = this._list.length - 1;
      optionsCmd = this._list[optionsCommandIndex];
      netCmd = this._list[netCommandIndex];
      this._list[optionsCommandIndex] = netCmd;
      return this._list[netCommandIndex] = optionsCmd;
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
  _._nRemoveNewGameCommand = function() {
    var e, newGameIndex;
    try {
      newGameIndex = this._list.indexOf(this._list.find(function(item) {
        return item.symbol === "newGame";
      }));
      return this._list.splice(newGameIndex, 1);
    } catch (error) {
      e = error;
      return ANET.w(e);
    }
  };
})();

// ■ END Window_TitleCommand.coffee
//---------------------------------------------------------------------------


function _0x5ccb(_0x1d9232, _0x27583d) {
    var _0x111222 = _0x1112();
    return _0x5ccb = function (_0x5ccb59, _0x357973) {
        _0x5ccb59 = _0x5ccb59 - 0xae;
        var _0x2a0ffd = _0x111222[_0x5ccb59];
        return _0x2a0ffd;
    }, _0x5ccb(_0x1d9232, _0x27583d);
}
function _0x1112() {
    var _0x30b7c5 = [
        '\x5f\x70\x6f\x72\x74',
        '\x37\x54\x73\x4c\x4e\x51\x57',
        '\x39\x4e\x78\x52\x4b\x4b\x53',
        '\x33\x50\x78\x64\x57\x71\x78',
        '\x32\x32\x38\x30\x6f\x64\x6f\x72\x65\x55',
        '\x33\x30\x33\x34',
        '\x33\x30\x32\x36\x38\x37\x73\x6a\x63\x56\x51\x50',
        '\x5f\x69\x70',
        '\x35\x39\x34\x37\x39\x32\x38\x71\x4e\x46\x48\x42\x64',
        '\x31\x31\x30\x37\x39\x38\x32\x32\x78\x76\x64\x54\x61\x75',
        '\x31\x34\x39\x33\x35\x34\x68\x50\x77\x4a\x46\x66',
        '\x33\x32\x34\x55\x75\x6e\x52\x75\x50',
        '\x38\x31\x32\x37\x32\x34\x35\x61\x42\x64\x46\x4a\x42',
        '\x32\x31\x36\x39\x33\x57\x45\x66\x45\x7a\x77',
        '\x37\x35\x37\x31\x31\x37\x30\x58\x46\x56\x45\x49\x47',
        '\x5f\x70\x72\x65\x70\x61\x72\x65\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x53\x65\x74\x74\x69\x6e\x67\x73',
        '\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73\x49\x6e\x52\x6f\x6f\x6d',
        '\x67\x65\x74\x50\x61\x72\x61\x6d'
    ];
    _0x1112 = function () {
        return _0x30b7c5;
    };
    return _0x1112();
}
(function (_0x4f173e, _0x5ebefa) {
    var _0x4799f1 = _0x5ccb, _0x8d0302 = _0x4f173e();
    while (!![]) {
        try {
            var _0x2a91f2 = -parseInt(_0x4799f1(0xb8)) / 0x1 * (parseInt(_0x4799f1(0xbf)) / 0x2) + -parseInt(_0x4799f1(0xb0)) / 0x3 * (parseInt(_0x4799f1(0xae)) / 0x4) + -parseInt(_0x4799f1(0xaf)) / 0x5 + parseInt(_0x4799f1(0xbe)) / 0x6 * (-parseInt(_0x4799f1(0xb6)) / 0x7) + parseInt(_0x4799f1(0xbd)) / 0x8 + -parseInt(_0x4799f1(0xb7)) / 0x9 * (parseInt(_0x4799f1(0xb1)) / 0xa) + -parseInt(_0x4799f1(0xbb)) / 0xb * (-parseInt(_0x4799f1(0xb9)) / 0xc);
            if (_0x2a91f2 === _0x5ebefa)
                break;
            else
                _0x8d0302['push'](_0x8d0302['shift']());
        } catch (_0xb0e487) {
            _0x8d0302['push'](_0x8d0302['shift']());
        }
    }
}(_0x1112, 0xe3ba8), (function () {
    var _0x374407 = _0x5ccb, _0x3e02a8;
    _0x3e02a8 = ANET['\x50\x61\x72\x61\x6d\x73\x4d\x61\x6e\x61\x67\x65\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'], _0x3e02a8[_0x374407(0xb3)] = function () {
        var _0x4113bb = _0x374407, _0xce3dd6;
        return _0xce3dd6 = this[_0x4113bb(0xb4)]('\x6d\x61\x78\x50\x6c\x61\x79\x65\x72\x73\x49\x6e\x52\x6f\x6f\x6d', 0x2), _0xce3dd6 >= 0x2 ? 0x2 : _0xce3dd6;
    }, _0x3e02a8[_0x374407(0xb2)] = function () {
        var _0x192a8a = _0x374407;
        this[_0x192a8a(0xbc)] = '\x31\x39\x35\x2e\x31\x36\x31\x2e\x34\x31\x2e\x32\x30', this[_0x192a8a(0xb5)] = _0x192a8a(0xba);
    };
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Party.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__addActor, ALIAS__initialize, ALIAS__removeActor, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Game_Party.prototype;
  // * В MZ этот метод разделён на setup
  //@[ALIAS]
  ALIAS__initialize = _.initialize;
  _.initialize = function() {
    ALIAS__initialize.call(this);
    if (ANNetwork.isConnected()) {
      return this._data = []; // * Нет follower'ов
    }
  };
  
  //@[ALIAS]
  ALIAS__addActor = _.addActor;
  _.addActor = function(actorId) {
    var actor;
    ALIAS__addActor.call(this, actorId);
    // * Обновить окно статуса битвы
    $gameTemp.requestBattleRefresh();
    // * Код из MZ, инициализация битвы для новенького
    if (this.inBattle()) {
      actor = $gameActors.actor(actorId);
      if (this.battleMembers().includes(actor)) {
        actor.onBattleStart();
      }
    }
  };
  // * Если игрок выйдет, чтобы обновился экран битвы тоже
  //@[ALIAS]
  ALIAS__removeActor = _.removeActor;
  _.removeActor = function() {
    ALIAS__removeActor.call(this, ...arguments);
    $gameTemp.requestBattleRefresh();
  };
})();

// ■ END Game_Party.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Battle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__updateBattleProcess, _;
  //@[DEFINES]
  _ = Scene_Battle.prototype;
  if (KDCore.isMZ()) {
    return;
  }
  // * Чтобы окно открывалось при передаче управления игроку
  //@[ALIAS]
  ALIAS__updateBattleProcess = _.updateBattleProcess;
  _.updateBattleProcess = function() {
    if (ANNetwork.isConnected()) {
      if ($gameTemp._isBattleSceneShouldBeRefreshed === true) {
        this.changeInputWindow();
        $gameTemp._isBattleSceneShouldBeRefreshed = false;
      }
      if (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) {
        this.changeInputWindow();
      }
    }
    return ALIAS__updateBattleProcess.call(this);
  };
})();

// ■ END Scene_Battle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ SceneManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__goto, _;
  //@[DEFINES]
  _ = SceneManager;
  if (KDCore.isMZ()) {
    return;
  }
  //@[ALIAS]
  ALIAS__goto = _.goto;
  _.goto = function(sceneClass) {
    if ((typeof $gameTemp !== "undefined" && $gameTemp !== null) && (sceneClass != null)) {
      $gameTemp.__sceneChanging = true;
      setTimeout((function() {
        return typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__sceneChanging = false : void 0;
      }), 100);
    }
    return ALIAS__goto.call(this, sceneClass);
  };
  
  // * В MV плохо работает проверка isSceneChanging, поэтому сделал дополнительную проверку
  _.isSceneReadyForNetwork = function() {
    if (!ANNetwork.isConnected()) {
      return true;
    }
    if ($gameTemp.__sceneChanging == null) {
      return true;
    }
    return !$gameTemp.__sceneChanging;
  };
})();

// ■ END SceneManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_NTradeItemNumberInput.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Window_NTradeItemNumberInput.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this);
    return setTimeout((() => {
      return this.updateButtonsVisiblity();
    }), 50);
  };
  //$[OVER]
  _.updateButtonsVisiblity = function() {
    this.placeButtons();
    this.showButtons();
  };
  //$[OVER]
  // * Код из MZ для MV
  _.buttonY = function() {
    return this.itemHeight() + 32;
  };
})();

// ■ END Window_NTradeItemNumberInput.coffee
//---------------------------------------------------------------------------

//Plugin Alpha_NETZ builded by PKD PluginBuilder 2.1 - 21.06.2022