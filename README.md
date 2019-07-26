# stephen-shelton-resume

My resume, written in HTML (using ReactJS).

## Why?

Writing my resume in HTML seemed like a more structured and maintainable approach than keeping up with various documents in a traditional word processor. Initially this was just an experiment, but so far it seems effective.

Some of the pros and cons of this approach:

```diff
+ HTML and CSS allow for precise control over document layout
+ Git history allows maintaining multiple versions of my resume over time
+ Resume can easily be placed online without the need for downloading a PDF
+ Print-to-PDF is effective (on Brave/Chrome, at least), especially with some special CSS hints about printing
+ Possibility for interactive vieweing (esp. filtering)

- Opens the door to browser compatibility issues (mitigated by printing to PDF)
- Currently not mobile-friendly
- May be missing out on special resume-specific features of traditional word processors
```

## Usage

If you're interested in building this from scratch, here is how to get started.

```bash
git clone <repo>
cd <repo>
npm i
npm start
# open http://localhost:3000
```
## Producing a PDF version

I expect that most web browsers that provide a print-to-PDF feature will do an acceptable job. I've tested using the Brave browser `Version 0.62.51 Chromium: 73.0.3683.103 (Official Build) (64-bit)` and am happy with the results.
