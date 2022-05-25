<h1>Pokedex. LIVE!</h1>

<h4>There were a lot of commits cause I've changed the structure of the folder to host this app on Heroku, forgot to add new .gitignore and as a result pushed .env and node_modules to github. So all that commits is a result of me trying to fix things) And looks like the operation was successfull.</h4>

<h2>OK, all jokes aside. Now it's really live! So... If you are out there... if anyone is out there... I can provide food, I can provide shelter, I can provide sec.. Ok, just click on the link in the About section and test this app)</h2>

<h3>Changelog:</h3>

<h5>v 0.09</h5>
<ul>
<li>Wasn't that Heroku ready, so some fixes have been made. Now it really works)</li>
</ul>

<h3>Changelog:</h3>

<h5>v 0.08</h5>
<ul>
<li>Heroku ready!</li>
</ul>

<h5>v 0.07</h5>
<ul>
<li>Message board added.</li>
<li>Navigation buttons added.</li>
<li>Refresh tokens added. Not sure it's the way it should look like, but after reading and watching vids I've just decided to create it myself. I'm not sure about security levels of it, but at least it works).</li>
<li>Little bit of visaul impovements.</li>
</ul>

<h5>v 0.06</h5>
<ul>
<li>Add pokemons to favorites, remove from favorites if you don't love em anymore.</li>
<li>List of all registered pokemon masters added. Look what they got in their pockets.</li>
<li>Redux-persist middleware added. Not to lose redux state data on refresh or manual navigation from adress bar.</li>
<li>Minor visual changes.</li>
</ul>

<h5>v 0.05</h5>
<ul>
<li>I've chosen not to proceed with sessions and passport authorization, as I planned in the beginning, and decided to use the technology the big guys use, sooo..... JWT authorization is on the board🎉</li>
<li>Create new user, log in, get your authorization token, go to your personal page,  be able to make authorized request (actually, in this version there's only only one request like this - delete user)</li>
<li>P.S: It's still a test version, so functionality first. All the ugly stuff will be fixed after I implement few more ideas I have.</li>
</ul>

<h5>v 0.04 </h5>
<ul>
<li>MUI dialogue reg/login form added.</li>
<li>Node.js + Express backend server added. Mongo database added. Now you can create user and kinda simulate login process by comparing user's input data and actual data in the db.
All the actual profits of it are on the way. This version basically is a matter of checkpoint.
</li>
<li>Minor visual changes, footer has been added.</li>
</ul>

<h5>v 0.03 </h5>
<ul>
<li>Finally... InfinityScroll + MUI grid system are in the building 😅. </li>
</ul>

<h5>v 0.02 </h5>
<ul>
<li>Pokemon cards now colored depending on pokemon's main type.</li>
<li>TextField is now single component, to be rendered only when it's necessary (with the help of useLocation hook).</li>
<li>Full list of pokemons get rendered again after you get back to the main page from pokemon card after pokemon search.</li>
<li>A little bit of visual changes.</li>
</ul>

<h5>v 0.01 </h5>
<ul>
<li>NavBar now is single component.</li>
<li>Cause NavBar contains input field and now is single component,Redux toolkit was implemented, to still easily filter pokemons at Pokedex component.</li>
<li>From now and on I'll try to comment the code as much as I can.</li>
</ul>
