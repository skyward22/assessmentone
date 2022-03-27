/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "Github is a provider of internet hosting for software development and version control using Git."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = "The git init command creates a new Git repository."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = "git clone is primarily used to point to an existing repo and make a copy of that repo at in a new directory, at another location."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = "The git status command displays the state of the working directory and the staging area."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition = "The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit."

// const gitAddCode = "git add -a" does the same thing as "git add . (Stage all (new, modified, deleted) files) I'll just use git add . to keep simple though.

const gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinition = "The git commit command captures a snapshot of the project's currently staged changes."

// const gitCommitCode = "initial commit"
const gitCommitCode = 'git commit -m "message"'
console.log(gitCommitCode)

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

// const gitPushDefinition = "The git push command is used to upload local repository content to a remote repository." I believe this works but wanted a better answer.

const gitPushDefinition = "Updates corresponding remote repo with any new commits make since last push."

// console.log([gitPushDefinition])