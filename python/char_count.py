def char_count(test_string):
    
    final_list = []


    alphabet = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0,
    }
    
    
    for i in range(0, len(test_string)):
      if test_string[i] == " ":
        continue
      alphabet[test_string[i]] += 1
    # Checking the dictionary for keys
  
    alphabet_occurences = list(alphabet.keys())
    
    # for prop in alphabet:
    #   if alphabet[prop] == max(more_than_one):
    #     final_mode.append(prop)
    for b in range(0, len(alphabet_occurences)):
      if alphabet[alphabet_occurences[b]] > 0:
        final_list.append([alphabet_occurences[b], alphabet[alphabet_occurences[b]]])
    
    # print(more_than_one)
    print(final_list)
    
    
    return sorted(final_list, key=lambda x : (x[1], x[0]))


char_count("idsaddfa")