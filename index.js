

let firstAnswer = window.prompt('Murphy wants to go outside. Do you let him out or say no?')
if(firstAnswer =='let him out'){
    let secondAnswer = window.prompt('Murphy sprints outside and heads striaght towards the tree. He slams his 103lb body into the trunk of the tree, violently shaking the leaves and sending terror down the feathered and furry backs hidden amongst the thick branches. Many of these critters safely and swiftly fly away and escape the danger that awaits them below. Execpt for one. Do you get the hose or persuade Murphy to stop?')
    if(secondAnswer =='get the hose'){
        let thirdAnswer = window.prompt('Murphy grunts and yips as the waves of water crash into the branches of the tree. Spray after spray the desperate squirrel begins to lose morale and loosens his grip. His fate, like so many other squirrels, has ended by a sharp clap and a swift, neck-breaking shake of Murphys thick neck and jaw. You are now an accessory to murder.')
    } 
        else if (secondAnswer =='persuade Murphy to stop'){
        let thirdAnswer = window.prompt('Murphy grunts and pants furiously, but you remain steadfast in your convictions and lure him inside with a treat. You have saved a life today, some might even call you a hero.')
    }
} else if (firstAnswer =='say no'){
    let secondAnswer = window.prompt('Murphy stares at you with rage and confusion. He insists he must be let out. He demands that he be let out. Barking, Barking, pouting, and pouting, He keeps his amber colored eyes fixated on two things : you and the door. Hours pass and he eventually gives up. You have won the battle, will you win the war?')

}