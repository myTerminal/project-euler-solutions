# project-euler-solutions

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

My solutions to ProjectEuler problems in different programming languages
(in continuation to [project-euler-solutions-legacy](https://github.com/myTerminal/project-euler-solutions-legacy))

## Programming languages

1. [JavaScript](solutions/javascript)
2. [Common Lisp](solutions/common-lisp)
3. [Rust](solutions/rust)

## Running a solution

In order to run a solution to a particular problem in a particular language, use the `run` command as:

    run <language> <problem-number>

where `language` should be one of the names mentioned above, in small-case and `problem-number` should be a number.

For example, in order to run the solution to problem number 1 in Rust, you can run:

    run rust 1

## Measuring solution running time

To measure the time taken for running a solution, run it with `perf`. For example, to measure the time for problem number 1 in Rust, you can use:

    perf run rust 1

The number of milliseconds spent will be displayed.

**Note:** The number of milliseconds also include the time spent for other tasks like validating the environment, checking if the solution exists, and even the compilation time for the languages that need compilation, etc. and may not represent the exact time taken for the solution.

## More

1. My first project on GitHub: [project-euler-solutions-legacy](https://github.com/myTerminal/project-euler-solutions-legacy)
