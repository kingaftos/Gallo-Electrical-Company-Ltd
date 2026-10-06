========================================================
 GALLO ELECTRICAL COMPANY LTD - WEBSITE FILES
 A plain-language guide for non-technical editing
========================================================

WHAT'S IN THIS FOLDER
----------------------
index.html          -> The page content (text, layout, structure)
css/styles.css       -> All the colours, fonts and spacing
js/script.js         -> The menu, buttons and form behaviour
images/              -> Your logo and photos
  gallo-logo-icon.png    -> The round badge used in the header/footer
  hero-background.jpg    -> The big photo behind the homepage headline
  photo-placeholder.svg  -> Shown automatically if a project photo is missing
  projects/              -> Put your project photos in here

To view the site: double-click "index.html" and it will open in
your web browser. You can do this any time to check your changes
before uploading the site online.


THE TWO ROUND BUTTONS THAT FOLLOW YOU DOWN THE PAGE
------------------------------------------------------
On phones and tablets you'll see two round buttons stay on screen as
you scroll: a dark blue phone icon (bottom-left) and a green WhatsApp
icon (bottom-right). Tapping the phone icon calls 0803 727 2895
directly; tapping WhatsApp opens a chat. On laptops and desktops the
phone number already sits in the top-right corner of the page, so the
floating phone button hides itself automatically there - you don't
need to do anything for this, it happens on its own depending on
screen size.


HOW TO ADD A NEW PROJECT PHOTO
--------------------------------
1. Save your photo inside the "images/projects" folder.
   Keep the file name simple, e.g. project-07.jpg

2. Open "index.html" in a text editor (Notepad, TextEdit, or
   VS Code all work).

3. Find the section that starts with:
       <!-- PROJECT CARD 1 -->
   Copy one whole block, from "<div class="project-card">"
   down to its closing "</div>".

4. Paste your copy just before "</div>" that closes the
   "projects-grid" section (near the words PROJECT CARD 6).

5. In your pasted copy, change three things:
   - src="images/projects/project-07.jpg"   (your file name)
   - alt="..."                              (a short description, for accessibility)
   - The heading, description text and date

6. Save the file and reopen index.html in your browser to check it.

If a photo file is ever missing or misspelled, the site will
automatically show a simple grey placeholder graphic instead of
a broken image icon - so nothing will look broken to visitors.


HOW TO CHANGE THE HOMEPAGE (HERO) PHOTO
-----------------------------------------
1. Choose a clear, well-lit photo of your work (ideally at
   least 1600 pixels wide).
2. Rename it to: hero-background.jpg
3. Replace the existing file in the "images" folder with it.
No other changes are needed - the dark overlay and text will
automatically appear correctly on top of any photo.


HOW TO CHANGE TEXT ANYWHERE ON THE SITE
------------------------------------------
Open index.html in a text editor and use Find (Ctrl+F / Cmd+F)
to search for the words you want to change. Text sits between
tags like this:  <h2>Change this heading</h2>
Only change the words between the > and < symbols - leave the
tags themselves (the words in angle brackets) exactly as they are.


HOW TO CHANGE COLOURS
------------------------
Open css/styles.css and look at the very top of the file, inside
the section marked "1. SETTINGS". You'll see lines like:
    --color-navy: #0f2a5f;
    --color-orange: #e85d22;
These two colours are used everywhere on the site. Changing
them here updates the whole website automatically.


PUTTING THE WEBSITE ONLINE
------------------------------
These three files and the images folder need to be uploaded
together, keeping the same folder structure, to a web hosting
service (for example: Netlify, GitHub Pages, or a hosting
package from a Nigerian provider like Web4Africa or Whogohost).
If you're not sure how to do this step, ask whoever manages
your domain name (gallooelect@yahoo.com's provider, or wherever
you plan to register a ".com.ng" or ".com" address).


NEED HELP?
-----------
If anything looks broken after an edit, the most common cause
is a missing closing tag (a ">" or "</div>") or an image file
name that doesn't match exactly (including capital letters).
Undo your last change and try again slowly, one small change
at a time.
