<h1>Still Demo of the Pokedex.</h1>

<h3>Changelog:</h3>

<h5>v 0.05</h5>
<ul>
<li>I've chosen not to proceed with sessions and passport authorization, as I planned in the beginning, and decided to use the technology the big guys use, sooo..... JWT authorization is on the board🎉</li>
<li>Create new user, log in, get your authorization token, go to your personal page,  be able to make authorized request (actually, in this version there's only only one request like this - delete user)</li>
<li>P.S: It's still a test version, so functionality first. All the ugly stuff will be fixed after I implement few ideas I have. Click around)</li>
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
