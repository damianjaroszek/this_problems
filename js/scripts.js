function Shape(sideLengths){
    if (!(this instanceof Shape)){ // jeżeli this nie jest wartością instancji obiektu Shape (jak zapominimy o new przed instancją obiektu)
        return new Shape(sideLengths); // to jako zwykła funkcja nadpisz zmienną, która przechowuje jego instancję w parametrze przekaż długości boków
    }                                  // wtedy błędne var shape2 = Shape([20,20,20,20]); zamieni się w var shape2 = new Shape([20,20,20,20]);
                                       // bez tego function Shape nie będzie klasą tylko zwykłą funkcją, po której wykonaniu nic się nie wyświetli,
                                       // bo nie mamy w niej returna a wtedy this będzie kierowało na window.sideLengths a nie na Shape.sideLengths więc
                                       // przekazana tablica trafi do zmiennej globalnej a nie do klasy Shape 
    this.sideLengths=sideLengths;
}

var shape = new Shape([20,20,20,20]);

var shape2 = Shape([20,20,20,20]);

