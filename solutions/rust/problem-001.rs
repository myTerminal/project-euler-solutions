fn main() {
    let mut sum = 0;

    for i in 0..1001 {
        if (i % 3 == 0) || (i % 5 == 0) {
            sum += i;
        }
    }

    println!("{}", sum);
}