use std::env;
use std::io::{self, BufRead};
use std::fs;
use std::path::Path;

fn main(){

    let args: Vec<String> = env::args().collect();
    let file_path = &args[1];

    println!("ROCK PAPER SCISSORS! Input read from {}", file_path);

    let contents = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");

    if let Ok(lines) = read_lines(file_path) {
        for line in lines {
            if let Ok(hands) = line {
                println!("Opp: {} | You: {}", hands[0], hands[2]);
            }
        }
    }

    let mut inputs: Vec<char> = contents.chars().collect();
    
    if let Some(hand_opponent) = inputs.pop() {
        println!("Opponent hand: {}", hand_opponent);
    }

    if let Some(hand_myself) = inputs.pop() {
        println!("My hand: {}", hand_myself);
    }

    //println!("Inputs: \n{}", inputs.pop());
}

fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<fs::File>>> where P: AsRef<Path>, {
    let file = fs::File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}


