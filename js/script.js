function submitAnswers(){
	var total = 1;
	var score = 0;

	//Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	
	//Validate
	if(q1 == null || q1 == ''){
		alert('You missed question 1');
		return false;
	}

	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ""){
			alert('You missed question '+ i);
			return false;
		}
	}

	// Set Correct Answers
	var answer = ["b"];


	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answer[i - 1]){
			score++;
		}
	}

	// Check Answers
	//This if statement is set in the loop above
	// if(q1 == answer[0]){
	// 	score++;
	// }

	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of ' +total);

	return false;
}

