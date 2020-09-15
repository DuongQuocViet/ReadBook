let component = {};

component.homePage = `

<div id="navigation">
<ul>
<li><a href="#">Home</a></li>

<li><a href="#showcase/Story_List/"> Story List</a></li>
<li ><a href="#showcase/my_bookcase/">My Bookcase</a></li> 
<li><a href="#about/">About</a></li>
<li><a href="#contact/">Contact</a></li>
</ul>
<div class="search-container">
    <form action="search">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
</div>
</div>
<div id="content-wrapper">

<div id="content">
    <p><a href="#" class="drop-shadow"><img src="images/the_mephisto_club.jpg" width="100" height="150" alt="The Mephisto Club by Tess Gerritsen" class="captionated" /></a></p>
    <p><a href="#" class="drop-shadow"><img src="images/dark_celebration.jpg" width="100" height="150" alt="Dark Celebration by Christine Freehan" class="captionated" /></a></p>
    <p><a href="#" class="drop-shadow"><img src="images/ricochet.jpg" width="100" height="150" alt="Ricochet by Sandra Brown" class="captionated" /></a></p>
    <p><a href="#" class="drop-shadow"><img src="images/echo_park.jpg" width="100" height="150" alt="Echo Park by Michael Connelly" class="captionated" /></a></p>
    <hr />
    <p><a href="#" class="drop-shadow"><img src="images/the_world_is_flat.jpg" width="100" height="150" alt="The World is Flat by Thomas L. Friedman" class="captionated" /></a></p>
    <p><a href="#" class="drop-shadow"><img src="images/act_of_treason.jpg" width="100" height="150" alt="Act of Treason by Vince Flynn" class="captionated" /></a></p>
    <p><a href="#" class="drop-shadow"><img src="images/rich_dad_poor_dad.jpg" width="100" height="150" alt="Rich Dad, Poor Dad" class="captionated" /></a></p>
    <p><a href="#" class="drop-shadow"><img src="images/freakonomics.jpg" width="100" height="150" alt="Freakonomics" class="captionated" /></a></p>
</div>

</div>
<div id="footer">
<div id="meta">
<div class="recent">
    <h3>Recently Reviewed</h3>
    <ul>
    <li><a href="#">300 by Frank Miller</a></li>
    <li><a href="#">A Big Fat Supernatural Wedding by Sherrilyn Kenyon</a></li>
    <li><a href="#">Strange Candy by Laurell K. Hamilton</a></li>
    <li><a href="#">The Time Traveler's Wife by Audrey Niffenegger</a></li>
    <li><a href="#">Wicked by Gregory Maguire</a></li>
    <li><a href="#">The Ice Dragon by George R. R. Martin</a></li>
    <li><a href="#">Path of destruction by Drew Karpshyn</a></li>
    <li><a href="#">Grave Surprise by Charlaine Harris</a></li>
    <li><a href="#">Fahrenheit 451 by Ray Bradbury</a></li>
    <li><a href="#">The Absolute Sandman by Neil Gaiman</a></li>
    </ul>
</div>
<div class="upcoming">
    <h3>To Be Read Still</h3>
    <ul>
    <li><a href="#">The Mephisto Club by Tess Gerritsen</a></li>
    <li><a href="#">The Husband by Dean Koontz</a></li>
    <li><a href="#">The DaVinci Code by Dan Brown</a></li>
    <li><a href="#">Angels Fall by Nora Roberts</a></li>
    <li><a href="#">Twelve Sharp by Janet Evanovich</a></li>
    <li><a href="#">Imperium by Robert Harris</a></li>
    <li><a href="#">Under Orders by Dick Francis</a></li>
    <li><a href="#">The Memory Keeper's Daughter by Kim Ewards</a></li>
    <li><a href="#">Act of Treason by Vince Flynn</a></li>
    <li><a href="#">The Collectors by David Baldacci</a></li>
    </ul>
</div>
<div class="authors">
    <h3>Favorite Authors</h3>
    <ul>
    <li><a href="#">Suzanne Brockmann</a></li>
    <li><a href="#">Dan Brown</a></li>
    <li><a href="#">J. K. Rowling</a></li>
    <li><a href="#">Tess Gerritsen</a></li>
    <li><a href="#">Kay Hooper</a></li>
    <li><a href="#">Tom Clancy</a></li>
    <li><a href="#">John Grisham</a></li>
    <li><a href="#">Vince Flynn</a></li>
    <li><a href="#">Michael Connelly</a></li>
    <li><a href="#">Dean Koontz</a></li>
    </ul>
</div>
<hr />
</div>
<div id="copyright"> Design copyright &copy; VietDuong</div>
</div>`;
component.readBook = '';
component.unReadBook = '';
component.addNew = '';
