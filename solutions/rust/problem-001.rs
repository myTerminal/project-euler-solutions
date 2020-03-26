fn main() {
    let sum = (0..1000)
        .filter(|i| (i % 3 == 0) || (i % 5 == 0))
        .sum::<isize>();

    println!("{}", sum);
}
