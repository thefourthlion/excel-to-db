import os

# Define the command to open your notes app (replace 'notepad' with your app)
notes_app_command = 'notepad'

# Define the content of your note
note_content = "Hello, world!"

# Open the notes app
os.system(notes_app_command)

# You might need to add a delay here to ensure the app opens completely
# (e.g., using time.sleep(2))

# Simulate typing the note content
os.system(f'echo {note_content} | clip')  # Copy text to clipboard
os.system('start /wait notepad.exe')       # Open a new instance of the app
os.system('pyautogui.hotkey("ctrl", "v")') # Paste content from clipboard

# You can add additional code to save the note if needed

# Close the notes app (if needed)
# os.system('taskkill /im notepad.exe')

# You may need to adjust the command and method depending on your specific notes app.
