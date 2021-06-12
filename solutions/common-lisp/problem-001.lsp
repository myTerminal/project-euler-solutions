(print (reduce '+
               (remove-if-not (lambda (n)
                                (or (eq 0
                                        (mod n 3))
                                    (eq 0
                                        (mod n 5))))
                              (loop for n from 0 below 1000 by 1
                                    collect n))))
