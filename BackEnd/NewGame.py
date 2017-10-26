#go through python files in directory and change R1Ans1 to answer
import os
import fileinput

rootdir='C:/Users/Leon/Desktop/Programs/Family_Feud/BackEnd/'
#change to family feud file text
game= open('C:/Users/Leon/Desktop/Programs/Family_Feud/Games/3rd/42.txt','r')
gameNumberRead = game.readline()

for subdir, dirs, files in os.walk(rootdir):
			for file in files:
				try:
					if file== 'FF.html':
						print(file)
						os.chdir(rootdir)

						with fileinput.FileInput(file, inplace=True, backup='.bak') as fileReplace:
						    for line in fileReplace:
						        print(line.replace('GAMENUMBER', gameNumberRead), end='')

				except IndexError:
					pass





#for the first round
def filltable(roundNum,questions):
	for x in range(questions):

		#read the line 1. answer, points format
		textToReplace = game.readline()
		textToReplace= textToReplace.rstrip('\n')+'";'
		textlist=textToReplace.split('-')
		textToSearch1='R'+str(roundNum)+'Ans'+str(x+1)
		textToSearch2='R'+str(roundNum)+'pts'+str(x+1)
		for subdir, dirs, files in os.walk(rootdir):
			for file in files:
				try:
					if file== 'FF.js':
						print(file)
						os.chdir(rootdir)

						with fileinput.FileInput(file, inplace=True, backup='.bak') as fileReplace:
						    for line in fileReplace:
						        print(line.replace(textToSearch1+'";', textlist[0]+'";'), end='')

						with fileinput.FileInput(file, inplace=True, backup='.bak') as fileReplace:
						    for line in fileReplace:
						        print(line.replace(textToSearch2+'";', textlist[1]), end='')

				except IndexError:
					pass


filltable(1,8)
filltable(2,6)
filltable(3,4)