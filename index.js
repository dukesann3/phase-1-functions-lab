// Code your solution in this file!
function distanceFromHqInBlocks(destination){

    const originLocation = 42;

    const travelDistance = Math.abs(destination-originLocation);

    return travelDistance;

}

function distanceFromHqInFeet(destination){

    const blockInFeet = 264;
    //each block in Manhattan is 264ft apparently
    const travelDistanceInBlocks = distanceFromHqInBlocks(destination);

    const travelDistanceInFeet = travelDistanceInBlocks * blockInFeet;

    return travelDistanceInFeet;

}

function distanceTravelledInFeet(startBlock,currentBlock){

    const blockDistanceTraveled = Math.abs(startBlock-currentBlock);
    const blockInFeet = 264;

    const feetTraveled = blockDistanceTraveled*blockInFeet;

    return feetTraveled;

}

function calculatesFarePrice(startBlock, currentBlock){

    const feetTraveled = distanceTravelledInFeet(startBlock,currentBlock);

    if(feetTraveled <= 400){
        return 0;
    }
    else if(feetTraveled > 400 && feetTraveled <= 2000){
        const price = (feetTraveled-400)*0.02;
        return price;
    }
    else if(feetTraveled > 2000 && feetTraveled <= 2500){
        const price = 25;
        return price;
    }
    else{
        return 'cannot travel that far';
    }


}