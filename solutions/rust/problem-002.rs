fn main() {
    let mut prev1 = 0;
    let mut prev2 = 1;
    let mut current = 0;
    let mut sum = 0;

    while current < 4000000 {
        current = prev1 + prev2;

        if current % 2 == 0 {
            sum += current;
        }

        prev1 = prev2;
        prev2 = current;
    }

    println!("{}", sum);
}
