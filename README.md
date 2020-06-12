**Behavior:** The program returns a range of numbers from 0 to user inputted number.
* input: 4
* output: 0, 1, 2, 3, 4

**Behavior:** Numbers being returned that contain a 1: the integer is replaced with "Beep!".
* input: 5
* output: 0, "Beep!", 2, 3, 4, 5

**Behavior:** Numbers being returned that contain a 2: the integer is replaced with "Boop!".
* input: 5
* output: 0, "Beep!", "Boop!", 3, 4, 5

**Behavior:** Numbers being returned that contain a 3: the integer is replaced with "Won't you be my neighbor?"
* input: 5
* output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5

**Behavior:** The behavior applied to the number 2, overrides the behavior applied to the number 1.
* input: 12
* output: ...9, "Beep!", "Beep!", "Boop"

**Behavior:** The behavior applied to the number 3, overrides the behavior applied to the number 2 & 1.
* input: 13
* output: ...9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?".