/*

RegEX

Its a small programming language that helps up to find specific patterns in data


[A-Z]
[a-j]
\d	==> numbers
\w  ==> numbers and text
\W  ==> anything other than numbers and text
\	==> escape character
\d+
\w+
[]  ==> Set of Chanracters
?	==>  zero or one ocuurance
+	==> 1 or more ocuurance
.*	==> wild card
\s  ==> space
\g 		==> Search Globally
\i      ==> ignore case
^acb	==> Starts with
$abc	==> Endswith
\w{4, 6} ==> between 4 to 6 Characters
 |      ==> Or condition


 () ==> Grouping up the patterns

*/

a = 28

let news = `AAP stated that Shelly Oberoi will meet Commissioner 95359-55530 of Delhi Police Sanjay Arora on Saturday.
This was the third day of commotion in the House.
AAP leaders said a re-election would be held on February 27, on the other hand, the BJP said it would move the court on Saturday to stop the polls.
Deeming the fold of events as the "darkest day of democracy", Oberoi alleged that BJP's Ravi Negi, Arjun Marwah 
and Chandan Choudhary attacked he

The European Union, after hectic last-minute haggling, has approved 567890987 a tenth package of Russia sanctions on the anniversary of Moscow's invasion of Ukraine, the Swedish EU Presidency said late on Friday.

"Together, the EU member states have imposed the most forceful and far-reaching sanctions ever to help Ukraine win the war," the Presidency announced on Twitter.

"The EU stands united with Ukraine and the Ukrainian people. We will keep supporting Ukraine, for as long as it takes."

The package includes tighter export restrictions cybharath@gmail.com regarding dual-use goods as well as measures against entities supporting the war, spreading propaganda or delivering drones used by Russia.

"This is very bad optics. What was supposed to be key here is a OKOKOK@gmail.com message of solidarity with Ukraine on this special day," said one diplomat involved in the confidential negotiations between the 27 EU countries in the bloc's hub Brussels.

All member states need to approve sanctions for them to be enacted, making negotiations among the 27 often tedious and lengthy.

The EU has said the 10th round of sanctions against Russia since the war started was designed to make financing the war more difficult and starve Russia of tech equipment and spare parts for arms used against Ukraine.

Measures were also meant to blacklist more individuals including what the West says are Russian propagandists, those Kyiv holds responsible for deporting Ukrainian children to Russia and those involved in the production of Iranian drones deployed on the frontline.

The package was also designed to cut off more banks including the private Alfa-Bank and the online bank Tinkoff from the global system SWIFT and cut trade between the EU and Russia by more than 10 billion euros, according to the bloc's executive.

info@qprofiles.com`




//let pattern = /\d{5}-\d{5}|\d{9,10}/g

let pattern = /([a-z]+|[A-Z]+)\@\w+\.\w+/g

console.log(news.match(pattern))
























