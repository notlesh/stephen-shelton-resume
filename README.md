# stephen-shelton-resume

My resume, written in Javascript/HTML/CSS (using ReactJS).

## Download

Download the latest PDF version of my resume [here](https://github.com/notlesh/stephen-shelton-resume/releases/download/0.1/StephenSheltonResume.pdf).

## Why HTML?

Writing my resume in HTML seemed like a more structured and maintainable approach than keeping up with various documents in a traditional word processor. Initially this was just an experiment, but so far it seems effective.

Some of the pros and cons of this approach:

```diff
+ HTML and CSS allow for precise control over document layout
+ Git history allows maintaining multiple versions of my resume over time
+ Resume content is data-driven [1], allowing a separation of its content vs. its appearance.
+ A live version of the resume could easily be placed online without the need for downloading any files (PDF)
+ Print-to-PDF is effective (on Brave/Chrome, at least), especially with some special CSS hints [2] about printing
+ Possibility for interactive vieweing (esp. filtering)

- Opens the door to browser compatibility issues (mitigated by printing to PDF)
- Currently not mobile-friendly
- May be missing out on special resume-specific features of traditional word processors
```

1) [Resume content stored concisely in data.js](https://github.com/notlesh/stephen-shelton-resume/blob/master/src/data.js)
2) [`@media print` specific CSS in App.css](https://github.com/notlesh/stephen-shelton-resume/blob/5d84d16081fb07a49faf323a6b00d9b039b45a10/src/App.css#L64)

## Usage / how to use this as a starting point for your own resume

If you're interested in building this from scratch, here is how to get started.

```bash
git clone <repo>
cd <repo>
npm i
npm start
# open http://localhost:3000
```

As noted above, resume content is driven entirely by JSON data found in [data.js](https://github.com/notlesh/stephen-shelton-resume/blob/master/src/data.js), so start by modifying this file to represent your own experience.

## Producing a PDF version

I expect that most web browsers that provide a print-to-PDF feature will do an acceptable job. I've tested using the Brave browser `Version 0.62.51 Chromium: 73.0.3683.103 (Official Build) (64-bit)` and am happy with the results.
