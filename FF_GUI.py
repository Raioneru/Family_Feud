from tkinter import *
import os
import fileinput
#Directory where the round text files resides
RoundFileDirectory='C:/Users/Leon/Desktop/Programs/Family_Feud/Games/1st'
FFFileDirectory='C:/Users/Leon/Desktop/Programs/Family_Feud/BackEnd/'

#Will Keep track of files in directory
Rounds=[]*90
track = 0
root = Tk()
#Title of window
root.title("Tk dropdown example")
 
# Add a grid
mainframe = Frame(root)
mainframe.grid(column=0,row=0, sticky=(N,W,E,S) )
mainframe.columnconfigure(0, weight = 1)
mainframe.rowconfigure(0, weight = 1)
mainframe.pack(pady = 100, padx = 100)
 
# Create a Tkinter variable
tkvar = StringVar(root)
 
# Dictionary with options
os.chdir(RoundFileDirectory)
for subdir, dirs, files in os.walk(RoundFileDirectory):
	for file in files:
		try:
			#For each file in directory save into rounds array
			#Rounds array will be used for picklist		
			track = int(file.rstrip('.txt'))
			Rounds.insert(track,track)
		except IndexError:
			pass
	#Sort the rounds array
	Rounds.sort()
# set the default option
tkvar.set('1') 

#Create picklist 
popupMenu = OptionMenu(mainframe, tkvar, *Rounds)
Label(mainframe, text="Choose a round").grid(row = 1, column = 1)
popupMenu.grid(row = 2, column =1)


def filltable(roundNum,questions):

	for x in range(questions):
		#read answer. Format is Number. Answer -Points 
		#Example: 1. GO TO BED -33
		textToReplace = game.readline()
		print("Text to replace", textToReplace)
		#Remove the new line and add a semicolon. This is for the HTML files benefit
		textToReplace= textToReplace.rstrip('\n')+'";'
		#Split the line into Number. Answer and Points.
		textlist=textToReplace.split('-')

		#This sorts through each placeholder in FF.js file
		#Format is R1Ans1 for answer and R1pts1 for points
		textToSearch1='R'+str(roundNum)+'Ans'+str(x+1)
		textToSearch2='R'+str(roundNum)+'pts'+str(x+1)
		for subdir, dirs, files in os.walk(FFFileDirectory):
			for file in files:
				try:
					if file== 'FF.js':
						#Change directory
						os.chdir(FFFileDirectory)
						#Replace the answer placeholders with the actual answers
						with fileinput.FileInput(file, inplace=True, backup='.bak') as fileReplace:
						    for line in fileReplace:
						        print(line.replace(textToSearch1+'";', textlist[0]+'";'), end='')
						#Replace the point placeholders with the actual point values
						with fileinput.FileInput(file, inplace=True, backup='.bak') as fileReplace:
						    for line in fileReplace:
						        print(line.replace(textToSearch2+'";', textlist[1]), end='')
				except IndexError:
					pass
		print("Question", x+1, "done")
 
# on change dropdown value
def change_dropdown(*args):
	global game
	print( tkvar.get() )
	#Read from template
	game= open('C:/Users/Leon/Desktop/Programs/Family_Feud/Games/3rd/'+tkvar.get()+'.txt','r')
	#Get the Round number at the top of the text file
	gameNumberRead = game.readline()
	

	file_variable = open('C:/Users/Leon/Desktop/Programs/Family_Feud/BackEnd/FF Template.js', 'r')
	file_contents= file_variable.read()
	file_variable.close()
	#Write read content from template on to used game file
	file_variable_Old = open('C:/Users/Leon/Desktop/Programs/Family_Feud/BackEnd/FF.js','w')
	file_variable_Old.write(file_contents)
	file_variable_Old.close()
	#FIll game file with answers
	filltable(1,8) #Round 1 has 8 answers
	filltable(2,6) #Round 2 has 6 answers
	filltable(3,4) #Round 3 has 4 answers


# link function to change dropdown
tkvar.trace('w', change_dropdown)
 
root.mainloop()

