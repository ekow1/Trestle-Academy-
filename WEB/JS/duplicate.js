// Q4 .Given an integer array “nums”, return true if any value appears at least twice in the array, and return false if every element is distinct. 


function conatinsDuplicate (nums){
    let numArrray = new Set(nums)
    
    return  numArrray.size !== nums.length

}


 

conatinsDuplicate([2, 2, 4,6,8,8,9,10])
conatinsDuplicate([1, 2, 4,6,7,8,9])





const findDuplicate = (nums) =>{
   
    const numSet= new Set();
    const duplicate = nums.filter(nums =>{
        if (numSet.has(nums)) {
            return true
        } else {
             numSet.add(nums);
             return false
        }

        
    })

    return duplicate
}

findDuplicate([20,30,45,45,45,50])
findDuplicate([20,30,45,50])
findDuplicate([20,30,45,45,50, 60 , 75,75,83,90,90])