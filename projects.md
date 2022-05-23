# Side Projects

## [Homepage](https://ctmurphey.github.io) | [About Me](https://ctmurphey.github.io/about) | [Research](https://ctmurphey.github.io/research) | [Contact](http://ctmurphey.github.io/contact)

## Hertzsprung-Russell Fitting with GAIA Data [Github Repo](https://github.com/ctmurphey/H-R-Analysis)
My final project in my graduate-level Stellar Astrophysics class I took in Fall 2021. I took a small section of data from the most recent GAIA release and used Markov Chain-Monte Carlo (MCMC) to fit a power law to the main sequence line of the H-R diagram of the data. After the data is adjusted for dimming due to distance, a fairly reasonble-looking H-R diagram can be constructed from all of the stars with enough data. A simple MCMC for one power law is then fit to all of the data. This gives an obviously bad fit, as there are many stars off the main sequence in the data, like red giants and white dwarfs. A second distribution, one with high variance, is then added into the mix. This is used to sort out the non-MS stars that altered the fit earlier, giving a much more accurate fit to the main sequence temperature-luminosity relation.

![img](photos/HR-fit.png)

## Machine Learning Baseball Hall of Fame Inductions [Github Repo](https://github.com/tannermurphey/ML-BaseballHoF)
My final project for a graduate-level Data Science class I took in Spring 2022. The data used was [Sean Lahman's Baseball Database](https://www.seanlahman.com/baseball-archive/statistics), which contains player-season level data for all MLB players dating back to 1871. After doing tons of preprocessing of the data, aggregating their season-by-season numbers into career-level tallies, 5 different machine learning models are trained and tested to learn which players get inducted into the Hall of Fame. Next, not only the models are compared against each other, but more "basic" stats (AGV, SLG, ERA, etc.) are compared against more "advanced" stats (OPS+, wOBA, SLG, etc.). A full written report can be found alongside the the code in the Github repository linked above.

![img](photos/FIP-screenshot.png)