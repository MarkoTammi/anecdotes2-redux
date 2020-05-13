## HY / Fullstack MOOC / Anecdote 2 - redux

### Toiminnallisuus  

Anekdoottien aanestyssovellus Reduxilla toteutettu

Front - react, redux  
Backend - tehtävästä 6.13 alkaen json-server  
 

### Luonti  

Luotu kloonaamalla  
git clone https://github.com/fullstack-hy2020/redux-anecdotes

Poistettu kloonin repo, asennettu sovelluksen riippuvuudet  
ja luotu oma repo  
rm -rf .git  
npm install  
git init   

### GIT

Tehtävät tallennettu omiin git -haaroihin  
paikallisen haaran push remote haaraan esim  
git push -u origin part6-03  

### Käynnistys  
Frontendin käynnistys  
npm start  

Tehtävästä 6.13 alkaen  json-server  
npm run server  


### Testaus  
Toistaiseksi ei testaus toiminnallisuutta   

### Edistyminen

6.3: anekdootit, step1 - git branch part6-03  
Anekdoottien äänestäminen. Äänien määrä redux-storessa.    

Asennettu react-redux kirjasto  
npm install --save react-redux  

6.4: anekdootit, step2  
Uusien anekdoottien lisäys.  

6.6: anekdootit, step4  
Action-olioiden luominen eriytetty action creator -funktioihin  

6.7: anekdootit, step5   
Luotu komponentti AnecdoteForm - uusi anecdote    

6.8: anekdootit, step6  
Luotu komponentti AnecdoteList - renderöi kaikki anecdotit  

6.5*: anekdootit, step3   - git branch part6-08  
Anekdotes sort by votes  

6.9 anekdootit, step7  
Asennettu Chromeen "React dev tools".  
Asennettu redux-devtools-extension  
npm install --save-dev redux-devtools-extension  

Siirretty Redux-storen käsittely omaan store.js tiedostoon.  

6.10 anekdootit, step8 - git branch part6-10  
Otettu käyttöön combineRedicers ja luotu notificationReducer  
Notification komponentti renderöi state.notification alkutilan  

6.11 paremmat anekdootit, step9  
Paremmat notifications - sisältö/tapahtuma.  
Tyhjentää notification 5 sek jälkeen.  

6.12* paremmat anekdootit, step10  - git branch part6-12  
Anekdoottien filteröinti   

6.13 anekdootit ja backend, step1  - git branch part6-13  
Json-serverin asennus  
npm install json-server --save  

package.json lisäys  
"server": "json-server -p3001 --watch db.json"  

json-server käynnistys  
npm run server  

Luotu /services/anecdotes.js json hakuja varten  

Asennettu axios  
npm install axios --save  

Sovellus hakee anecdootit käynnistyksessä db.json tiedostosta.  

