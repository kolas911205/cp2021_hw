var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n demo 學號與帳號: mdecourse \n 網站倉儲:  https://github.com/kolas911205/cp2021_hw \n 網站連結:  https://kolas911205.github.io/cp2021_hw/ \n 其他與個人或作業相關資料說明或介紹: \n mdecourse 所屬的實驗室:  https://mde.tw \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n \n HW1-1 : 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n from browser import html\nfrom browser import document as doc\nimport browser.timer\n\ncanvas = html.CANVAS(width = 300, height = 300)\ncanvas.id = "game-board3"\nbrython_div = doc["brython_div3"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\n\npx = 0\npy = 150\nwidth = 20\nheight = 20\nspeed = 2\ndef game():\n    global px, py, width, height, speed\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    if px < (canvas.width/2):\n        px += speed\n    else:\n        py += speed\n    \n        if py < 0 or (py + height) > canvas.height:\n            speed = -speed\n            \n    ctx.fillRect(px, py, width, height)\n    \nbrowser.timer.set_interval(game, 10) \n HW1-2 : 加入與 \xa0 Cango 頁面 \xa0 Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n from browser import html\nfrom browser import document as doc\nfrom browser import timer\nimport browser.timer\n\ncanvas = html.CANVAS(width = 400, height = 100)\ncanvas.id = "game-board3"\nbrython_div = doc["brython_div3"]\nbrython_div <= canvas\nbrython_div <= html.BUTTON("開始", id="start")\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeedH = 2\nspeedV = 2\n\ndef squre():\n    global px, py, width, height, speedH, speedV\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    px += speedH\n    if px > 200:\n        speedH=0\n        py += speedV\n    if py < 0 or (py + height) > canvas.height:\n        speedV = -speedV\n    ctx.fillRect(px, py, width, height)\n    \nsqure()\n    \ngame = None\n    \ndef gametion(ev):\n    global game\n    if game is None :\n        game = timer.set_interval(squre, 10)\n        doc[\'start\'].text = \'暫停\'\n    elif game == \'hold\':\n        game = timer.set_interval(squre, 10)\n        doc[\'start\'].text = \'暫停\'\n    else:\n        timer.clear_interval(game)\n        game = \'hold\'\n        doc[\'start\'].text = \'繼續\'\ndoc["start"].bind("click", gametion) \n 英打 \n Every gist is a Git repository,which means that it can be forked and cloned. \nIf you are signed in to GitHub when you create a gist, the gist will be associated with your account and you will see it in your lisr of gists when you navigate to your gist home page.\nGists can be public or secret. Public gists show up in Discover, where people can browse new gists as they\'re created.\nThey\'re also searchable, so you can use them if you\'d like other people to find and see ypur work.\nSecret gists don\'t show up in Discover and are not searchable. Secret gists aren\'t private. \nIf you send the URL of a secret gists t oa friend, they\'ll be able to see it. \nHowever, if someone you don\'t know discovers the URL, they\'ll also be able to see your gist. \nIf you need t o keep your code away from prying eyes, you may want to create a private resository instead.\nAfter creating a gist, yo cannot covert it from public to secret.\nYou\'ll receive a notification when:\nYou are the author of a gisr.\nSomeone mentions you in a gisr.\nYou subscribe to a gist, by clicking Subscribe at the top of any gist.\nYou can discover public gists otrhers have created by going to the gist home page and clicking All Gists. \nThis  will take you to a page of all gists sorted and displayed by time of creation or update.\nYou can also search gists by language with Gist Search.\nGist search uses the same search syntax as code search.\nSince gists are Git reopsitories, you can view their full commit histoy, complete with diffs.\nYou can also fork or clone gists. For more information, see "Forking and cloning gists".\nYou can download a ZIP file of a gists by clicking the Download ZIP button at the top of the gist. \nYou can embed a gist in any text field that supports Javasript, such as the clipboard icon next to the Embed URL of a gist.\nTo embed a specific gist file, append the Embed URL with ?file=FILENAME.\nGist supports mapping GeoJSON file.\nThese maps are displayed in embedded gists, so you can easily share and embed maps.\nFor more information, see"Working with non-codefiles".\n英打 41:22 中打 \n Gist 是Github 的一個子服務，且任何人都可以使用這個服務，不論你是否擁有Github帳號。 以開發者的角度來說，最基本的功能就是可以分享片段的原始碼。 有別於Github的Repository,Gist 可以只分享專案中的某一個小檔案的原始碼，且擁有私人的選項，讓別人不會搜尋到你的Gist。 在Github的Respository設定Private是要付費的。但在Gist是不需要的。 除次之外Gist還有許多用處，包括可以直接執行我們就來一一介紹吧! 中打 7:43 \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'run1', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag red snake \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'run1.html'}, {'title': 'HW2', 'text': '\n \n \n HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 具體項目成果回報區 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行) \n \n \n \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'run2', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run2.html'}, {'title': 'HW3', 'text': 'HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 具體項目成果回報區 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n \n 參考資料: \n 可用於學習 Python 超過 1000 頁的  free 電子書 , 也可以與 教科書導讀 一起配合研讀, 學習如何利用 Python 解題. \n 文獻探討:  https://towardsdatascience.com/training-a-snake-game-ai-a-literature-review-1cdddcd1862f \n 閱讀  ai_snake_in_python.pdf  (長知識:-) 後, 將  snake_pathfinding_ai_curses.py  改為 Brython 相容程式碼 \n https://github.com/mdecourse/snake_pathfinding_ai  (convert to Brython no.1) \n https://github.com/mdecourse/SnakeSolver  (convert to Brython no.2) \n https://github.com/mdecourse/Snaky  (convert to Brython no.3) \n 以 Python 實作演算法 \n ai_snake_in_python.pdf \xa0( https://hawstein.com/2013/04/15/snake-ai/ ,  https://github.com/mdecourse/snake-ai , 改為 Python3 後  snake_pathfinding_ai_curses.py  ( on Gist ), 有關  Python curses.pdf , 官方  curses 模組說明 ) \n https://github.com/mdecourse/slitherin \n https://github.com/mdecourse/python-game-snake \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://craighaber.github.io/AI-for-Snake-Game/website_files/index.html \n https://www.python-course.eu/snake_in_python.php \n https://techitsmart.ca/2020/05/18/teaching-ai-to-play-snake-using-python/ \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Algorithms', 'text': '演算法 -  https://web.ntnu.edu.tw/~algo/Algorithm.html \n Data Structure in Python.pdf \n Data Structure and Algorithm in Cpp.pdf \n Algorithm.pdf \n https://introcs.cs.princeton.edu/python/40algorithms/ \n VisualGo  (Visualization of Algorithm) \n Principles of Algorithmic Problem Solving.pdf \n Foundation of Computer Science:  http://infolab.stanford.edu/~ullman/focs.html \n Open Data Structures.pdf \n Free Programming books:  https://ebookfoundation.github.io/free-programming-books/ \n Python 的資料結構與演算法  ( 線上課程 ) \n https://www.louisbourque.ca/AI-Snake-Game/ \n https://hawstein.com/2013/04/15/snake-ai/ \n https://en.wikipedia.org/wiki/Depth-first_search \n https://favtutor.com/blogs/depth-first-search-python \n https://github.com/mdecourse/snake_pathfinding_ai \n https://super9.space/archives/1562 \n https://reposhub.com/python/game-development/memoiry-Snaky.html \n https://github.com/mdecourse/python-game-snake \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://craighaber.github.io/AI-for-Snake-Game/website_files/index.html \n https://www.python-course.eu/snake_in_python.php \n https://techitsmart.ca/2020/05/18/teaching-ai-to-play-snake-using-python/ \n https://www.geeksforgeeks.org/snake-ladder-problem-2/   \n 資料結構: \n https://www.aupress.ca/books/120226-open-data-structures/ \n', 'tags': '', 'url': 'Algorithms.html'}, {'title': 'Practice1', 'text': '這一頁將利用常用的 Python 程式語法解題 ( Practice1.txt ): \n 初學者程式: \n 整數累加:  例如從 1 累加到 10, 最簡單且直覺的解法, 就是直接將 1 加到 10, 然後印出結果. \n 但是若題目需要累加到較大數值 (例如: 100), 程式編寫過程將會浪費許多時間, 若能善用變數設定, 變數加法, for 重複迴圈, range() 函式 ( 運作說明 ) 以及整數轉為字串的用法, 將程式改寫成:  1 add to 100 , 就可以省下許多時間. \n 初學者程式: \n 第二個範例為 字串內容查驗 : 利用輸入表單, 要求使用者輸入至少8個字元字串, 必須包含大小寫英文字母, 數字以及特殊符號,  查驗輸入字串  程式碼導入後, 可按下 Run 後執行. \n 進階程式:  LeetCode in Python  ( 來源 ) \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n', 'tags': '', 'url': 'Practice1.html'}, {'title': 'Practice2', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  第 1 區內建程式 #################################### 第 1 區內建程式開始 \n \n  第 1 區內建程式 #################################### 第 1 區內建程式結束 \n  第 1 區程式 ########################################### 第 1 區程式開始 \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束   第 1 區程式 ########################################### 第 1 區程式結束  \n \n  第 2 區程式 ########################################### 第 2 區程式開始 \n 查驗輸入字串程式: \n 查驗輸入字串 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n \n  第 3 區程式 ########################################### 第 3 區程式開始 \n Leetcode 13:  https://leetcode.com/problems/roman-to-integer/  ( Solution ) \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n', 'tags': '', 'url': 'Practice2.html'}, {'title': 'Practice3', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束  \n 查驗輸入字串程式: \n 查驗輸入字串 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n', 'tags': '', 'url': 'Practice3.html'}, {'title': 'Path Finding', 'text': 'https://github.com/mdecourse/snake_pathfinding_ai \n snake_ai_bfs.py \n 何謂 BFS ( Breadth-First Search ) algorithm? \n Breadth-first search (BFS, 廣度優先搜尋) is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored. \n 以 Python 實現 BFS \n graph = {\n  \'A\' : [\'B\',\'C\'],\n  \'B\' : [\'D\', \'E\'],\n  \'C\' : [\'F\'],\n  \'D\' : [],\n  \'E\' : [\'F\'],\n  \'F\' : []\n}\n\nvisited = [] # List to keep track of visited nodes.\nqueue = []     #Initialize a queue\n\ndef bfs(visited, graph, node):\n  visited.append(node)\n  queue.append(node)\n\n  while queue:\n    s = queue.pop(0) \n    print (s, end = " ") \n\n    for neighbour in graph[s]:\n      if neighbour not in visited:\n        visited.append(neighbour)\n        queue.append(neighbour)\n\n# Driver Code\nbfs(visited, graph, \'A\') \n Lines 3-10: The illustrated graph is represented using an adjacency list. An easy way to do this in Python is to use a dictionary data structure, where each vertex has a stored list of its adjacent nodes. Line 12: visited is a list that is used to keep track of visited nodes. Line 13: queue is a list that is used to keep track of nodes currently in the queue. \n Line 29: The arguments of the bfs function are the visited list, the graph in the form of a dictionary, and the starting node A. \n Lines 15-26: bfs follows the algorithm described above: \n It checks and appends the starting node to the visited list and the queue. \n Then, while the queue contains elements, it keeps taking out nodes from the queue, appends the neighbors of that node to the queue if they are unvisited, and marks them as visited. \n This continues until the queue is empty. \n', 'tags': '', 'url': 'Path Finding.html'}, {'title': 'ML in Brython', 'text': 'https://www.analyticsvidhya.com/blog/2021/07/python-on-frontend-ml-models-web-interface-with-brython/ \n https://github.com/mdecourse/Brython-ML \xa0 \n', 'tags': '', 'url': 'ML in Brython.html'}, {'title': 'Math', 'text': 'https://open.umn.edu/opentextbooks/textbooks/precalculus-an-investigation-of-functions \n', 'tags': '', 'url': 'Math.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 具體項目成果回報區 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks \n 下一個階段將要導入  https://github.com/pyodide/pyodide', 'tags': '', 'url': 'Final Project.html'}]};