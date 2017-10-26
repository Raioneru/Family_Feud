#go through python files in directory and change R1Ans1 to answer
import os
import fileinput

rootdir='C:/Users/Leon/Desktop/Programs/Family Feud/Games/3rd/hide/'
#add hyphen to answers
def filltable():

	for subdir, dirs, files in os.walk(rootdir):
		for file in files:
			try:
				print(file)
				os.chdir(rootdir)

				with fileinput.FileInput(file, inplace=True) as fileReplace:
					for line in fileReplace:
						textlist=line.split(' ')
						textlist[-1] = '-'+textlist[-1]
						str1 = ' '.join(textlist)
						print(line.replace(line, str1), end='')

			except IndexError:
				pass

filltable()
