    document.write("<h2>Paul's home tour</h2>")
    document.write("<p id="output"><button type='button' onclick='front_of_house()'>Click here to start!</button><p>
    document.write("<p id="easterEgg"></p>

    var fire_lit = false;
    var fire_ever_lit = false;

       
    function write_output(output_text) {
        document.getElementById("output").innerHTML = output_text
    }
    
    function append_output(append_output_text) {
        document.getElementById("output").innerHTML += append_output_text
    }
    
    function write_easteregg(easteregg_text) {
        document.getElementById("easterEgg").innerHTML = easteregg_text
    }
    
    function clear_easteregg() {
        document.getElementById("easterEgg").innerHTML = "<p></p>"
    }

    function front_of_house() {
        write_output("<p>You are standing at the front of a red brick and stucco house. It has nice landscaping & shrubs, and a classic old lantern hanging from the front. The house number is hanging from a metal post with a horses head on it, but you decide to let it slide.</p>")
        append_output("<p>On closer inspection, you notice that it has an inexplicable image of an oil lamp in the concrete over the door. Perhaps a genie lives here?</p> <p>What do you do?</p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Enter the front door</button></p>")
        append_output("<button type='button' onclick='backyard()'>Walk around back</button>")
    }

    function backyard() {
        write_output("<p>You are now behind the red brick house. It has a detached garage with a covered walkway to the house. The driveway is rounded by a stone retaining wall that holds up the elevated backyard. There are doors leading to the kitchen, the porch, and down to the basement.</p> <p>Upon closer inspection you notice an excellent grill that clearly has been used by a true grill master.</p>")
        append_output("<p><button type='button' onclick='kitchen()'>Enter the kitchen</button></p>")
        append_output("<p><button type='button' onclick='porch()'>Enter the porch</button></p>")
        append_output("<p><button type='button' onclick='finished_basement()'>Enter the basement</button></p>")
        append_output("<p><button type='button' onclick='front_of_house()'>Go around to the front of the house</button></p>")
    }
    
    function first_floor_hallway() {
        clear_easteregg()
        write_output("<p>You are in a grand entrance hallway. The walls are painted a happy yellow and the floor and railing for the stairs are a beautiful hardwood.</p><p> From here you can see you the front of the house, an office, a kitchen, dining room, a bathroom, stairs down to the basement, stairs up to the second floor, and a living room.</p>")
        append_output("<p><button type='button' onclick='front_of_house()'>Go outside to the front of the house</button></p>")
        append_output("<p><button type='button' onclick='first_floor_office()'>Go to the office</button></p>")
        append_output("<p><button type='button' onclick='kitchen()'>Go to the kitchen</button></p>")
        append_output("<p><button type='button' onclick='dining_room()'>Go to the dining room</button></p>")
        append_output("<p><button type='button' onclick='first_floor_bathroom()'>Go to the bathroom</button></p>")
        append_output("<p><button type='button' onclick='finished_basement()'>Go down to the basement</button></p>")
        append_output("<p><button type='button' onclick='second_floor_hallway()'>Take the stairs to the second floor</button></p>")
        append_output("<p><button type='button' onclick='living_room()'>Go to the living room</button></p>")
    }
    
    function first_floor_office() {
        var is_mail_checked_office = "no"
        write_output("<p>You are in an office. The walls are painted red, and one wall has some nice built-in shelves. On closer inspection, you notice the movies and books on the built in shelves are arranged by color. This room also has the mail slot.</p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Go to the hallway</button></p>")
        append_output("<p><button type='button' onclick='check_mail()'>Check the mail</button></p>")
    }
    
    function check_mail() {
        write_easteregg("<p>Bills, bills, credit card offer, bills... nothing interesting today.</p>")
    }

    function first_floor_bathroom() {
        write_output("<p>This is the tiniest bathroom you've ever seen. You have no idea where they found a sink this small.</p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Return to the hallway</button></p>")
    }
    
    function living_room() {
        write_output("<p>You are standing in a large living room with a fireplace, two couches, and matching shelves and entertainment center. The walls are painted red except for a darker red accent just over the fireplace. The concrete on the fireplace has some fairly intricate designs that look like coats of arms. The front windows have a nice view of the neighborhood, and in back is the three-season porch.</p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Go to the hallway</button></p>")
        append_output("<p><button type='button' onclick='porch()'>Go to the porch</button></p>")
        if (fire_lit == false) {
            append_output("<p><button type='button' onclick='light_fire()'>Light a fire</button></p>")
        }
        else if (fire_lit) {
            append_output("<p><button type='button' onclick='extinguish_fire()'>Extinguish the fire</button></p>")
        }
    }
    
    function light_fire() {
        write_easteregg("<p>Mmm, warm and cozy.</p>")
        fire_lit = true
        fire_ever_lit = true
        living_room()
    }
    
    function extinguish_fire() {
        write_easteregg("<p>After several trips to the kitchen for big bowls of water, it's finally out.</p>")
        fire_lit = false
        living_room()
    }
    
    function kitchen() {
        write_output("<p>You are in a cute little kitchen. It has nice dark wood cabinetry and a granite countertop. The backsplash leave something to be desired, and the walls are unfortunately pink, but the walls likely have blue in their future. There are doors leading to the backyard, the dining room, and the hallway.</p><p>On closer inspection you notice that there is a little metal figurine of an oil lamp above the windows by the sink. A genie does live here!</p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Go to the hallway</button></p>")
        append_output("<p><button type='button' onclick='dining_room()'>Go to the dining room</button></p>")
        append_output("<p><button type='button' onclick='backyard()'>Go to the backyard</button></p>")
    }
    
    function dining_room() {
        write_output("<p>You are in a grand dining room. The walls are painted two shades of green. It has crown molding, built in shelves, and what appears to be an antique chandelier. There are doors to the kitchen, the hallway, and the porch.</p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Go to the hallway</button></p>")
        append_output("<p><button type='button' onclick='kitchen()'>Go to the kitchen</button></p>")
        append_output("<p><button type='button' onclick='porch()'>Go to the porch</button></p>")
    }
    
    function porch() {
        write_output("<p>You are in a three season porch, walled in by glass and the brick exterior of the house. From here you have a nice view of the backyard and the wooded lot next to the house. There are doors to the backyard, the kitchen, and the living room.</p>")
        append_output("<p><button type='button' onclick='dining_room()'>Go to the dining room</button></p>")
        append_output("<p><button type='button' onclick='living_room()'>Go to the living room</button></p>")
        append_output("<p><button type='button' onclick='backyard()'>Go to the backyard</button></p>")
    }
    
    function second_floor_hallway() {
        clear_easteregg()
        write_output("<p>You were on the second floor at the top of the stairs. The walls are painted yellow like the hallway downstairs. There are some neat black and white pictures of distant places, and a nice view of the back yard and wooded lot next door. There are doors to the bathroom, master bedroom, yellow room, and second floor office. There are stairs up to the third floor and down to the first floor.</p>")
        append_output("<p><button type='button' onclick='second_floor_bathroom()'>Go to the bathroom</button></p>")
        append_output("<p><button type='button' onclick='master_bedroom()'>Go to the master bedroom</button></p>")
        append_output("<p><button type='button' onclick='yellow_room()'>Go to the yellow room</button></p>")
        append_output("<p><button type='button' onclick='second_floor_office()'>Go to the the office</button></p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Go down to the first floor</button></p>")
        append_output("<p><button type='button' onclick='third_floor_stairs()'>Go up to the third floor</button></p>")
    }
    
    function second_floor_bathroom() {
        write_output("<p>You are in a moderately sized bathroom with a full tub and shower. It has a single sink, and shelves behind the mirror and over the radiator. Considering this is Cleveland Heights where the bathrooms are generally old and generally suck, it's a pretty functional bathroom and could work well with some improvements.</p><p>However, one question gnaws at your mind: what kind of horrible person would put pink and white tiles on the floor? Perhaps they were a simpleton and thought pink was cute? Perhaps they thought the floor should show every bit of dirt? Or perhaps they were a sinister person and purposely chose a god-awful color scheme to punish future owners?</p>")
        append_output("<p><button type='button' onclick='second_floor_hallway()'>Go to the hallway</button></p>")
        append_output("<p><button type='button' onclick='master_bedroom()'>Go to the master bedroom</button></p>")
        append_output("<p><button type='button' onclick='look_in_cabinets()'>Look in the cabinets</button></p>")
    }
    
    function look_in_cabinets() {
        write_easteregg("<p>Yeesh, how many band-aids do these people need?</p>")
    }
    
    function master_bedroom() {
        clear_easteregg()
        write_output("<p>You are in the master bedroom. Immediately, the beautiful creamy brown on the walls and the excellent paint job jumps out as a masterpiece of modern times.</p>")
        append_output("<p><button type='button' onclick='second_floor_bathroom()'>Go to the bathroom</button></p>")
        append_output("<p><button type='button' onclick='second_floor_hallway()'>Go to the hallway</button></p>")
    }
    
    function yellow_room() {
        write_output("<p>You are in the yellow bedroom. It's impossible to tell the yellow walls from the beige walls elsewhere, but some people swear the walls are yellow.</p>")
        append_output("<p><button type='button' onclick='second_floor_hallway()'>Return to the hallway</button></p>")
    }
    
    function second_floor_office() {
        write_output("<p>You are in a small, slightly messy office. On the walls are some silly awards and a Duke flag. There is a gigantic monitor on the desk. There is a soothing hum from the computer's fan.</p>")
        append_output("<p><button type='button' onclick='programming()'>Sit down and hammer out some JavaScript!</button></p>")
        append_output("<p><button type='button' onclick='second_floor_hallway()'>Return to the hallway</button></p>")
    }
    
    function programming() {
        write_easteregg("<p>YES! PROGRAMMING!!1!</p>")
    }
    
    function third_floor_stairs() {
        write_output("<p>You are halfway up the third floor stairs. The staircase turns 180 degrees here and a small window looks out over the neighbors' house.</p>")
        append_output("<p><button type='button' onclick='third_floor_bedroom()'>Go up to the third floor</button></p>")
        append_output("<p><button type='button' onclick='second_floor_hallway()'>Go down to the second floor</button></p>")
    }
    
    function third_floor_bedroom() {
        clear_easteregg()
        write_output("<p>You are in the 3rd floor guest suite. It's a little small and the slanted ceiling shows that it is a converted attic, but it is clean, well-decorated, and very comfortable and private for guests. The windows look out over the back yard. There are doors to the stairs and to the 3rd floor bathroom.</p>")
        append_output("<p><button type='button' onclick='third_floor_bathroom()'>Go to the bathroom</button></p>")
        append_output("<p><button type='button' onclick='third_floor_stairs()'>Go down the stairs</button></p>")
    }
    
    function third_floor_bathroom() {
        write_output("<p>You are standing in the third floor bathroom. It has a standing shower, a single sink, and a small window looking out over the back yard. It's cozy, but so nice that guests have their own bathroom! Our parents will have to come often.</p>")
        append_output("<p><button type='button' onclick='check_for_ants()'>Check for evidence of carpenter ants in the shower</button></p>")
        append_output("<p><button type='button' onclick='third_floor_bedroom()'>Return to the bedroom</button></p>")
    }
    
    function check_for_ants() {
        write_easteregg("<p>There are no wood chips in the shower... for now.</p>")
    }
    
    function finished_basement() {
        write_output("<p>You are standing in the finished side of the basement. It has a nice leather couch, Lay-Z-Boy recliner, coffee table, beer fridge, and book shelves doubling as a bar. And an inflatable bear head over the bear head, which is awesome. There are electronic drums in the corner - sweet! And a big Duke flag in the corner. There's a door leading out to the back yard and a door to the unfinished side of the basement.</p>")
        append_output("<p><button type='button' onclick='first_floor_hallway()'>Go upstairs to the first floor</button></p>")
        append_output("<p><button type='button' onclick='backyard()'>Go out to the back yard</button></p>")
        append_output("<p><button type='button' onclick='unfinished_basement()'>Go to the unfinished side of the basement.</button></p>")
    }
    
    function unfinished_basement() {
        write_output("<p>You are standing in the unfinished side of the basement. The room is dominated by the hulking boiler, which was clearly made early in the 20th century. There's also a water softener in here.</p>")
        if (fire_lit) {
            append_output("<p>You smell smoke and notice that it's beginning to fill the basement. Better put that fire out!</p>")
        }
        else if (fire_ever_lit) {
            append_output("<p>A heavy cloud of smoke hangs in the room. Maybe lighting that fire wasn't such a great idea.</p>")
        }
        append_output("<p><button type='button' onclick='finished_basement()'>Go to the finished side of the basement.</button></p>")
    }
