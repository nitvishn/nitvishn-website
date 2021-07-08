const RESEARCH = [
    {
        name: 'A Monte-Carlo analysis of competitive balance and reliability across tournament structures',
        position: 'Research Paper',
        shortdescription: `
        Pursued targeted research with  mentor Dr Tim Chartier of Davidson College. After five weeks of learning ranking methods, I used Monte-Carlo simulation, Elo+Colley methods, invented metrics, and produced a theoretical research paper that has a significant impact on Dr Chartier's other independently conducted work. Published at SIAM and presented @ MSAM
        `,
        description: `
        This summer, I had the privilege of working with Prof. Tim Chartier as part of the Pioneer Research Program in the mathematics of ranking. After a 10-week program learning ranking methods, I produced a highly theoretical research paper on a Monte-Carlo analysis of competitive balance and reliability across tournament structures.
        The paper has impacted Prof Chartier's independently conducted work and opens up several additional questions regarding ranking and tournament structures. 
        `,
        abstract: `This paper investigates the effect of increasing competitive balance on the reliability of tournament rankings. Reliability of rankings, a previously qualitative
        property, is quantified in this paper by the closeness between ground truth
        rankings and the rankings of teams at the end of a tournament. Three metrics are used to measure this closeness: Spearman’s rank correlation coefficient,
        Kendall’s tau, and a relatively unused algorithm in the field of ranking: Levenshtein distance. Three tournament structures are simulated: round-robin,
        random pairings, and the Swiss system. The tournaments are simulated across
        multiple trials and over a varying number of games. It is found that the rate
        of growth of reliability of a tournament structure falls as the number of games
        increases. It is also found that there is a positive relationship between competitive imbalance and reliability. The marginal benefit of increasing competitive
        imbalance falls as it is increased. Unexpectedly, in comparison to random pairings and Swiss pairings, the round-robin tournament structure is seen to achieve
        the highest reliability score across all metrics and number of games played. The
        difference in reliability between the tournament structures increases as competitive imbalance is increased. The further work suggested includes investigation
        of tournament outcome uncertainty in conjunction with reliability and competitive balance, a closer study into Levenshtein distance as a useful algorithm to
        quantify closeness between two rankings, and an inquiry into the specific factors
        that bottleneck reliability while the number of games played in a tournament
        increases.`,
        link: "https://www.siam.org/Portals/0/Documents/S136704PDF.pdf?ver=2021-03-01-130112-520",
        volumelink: "https://siam.org/publications/siuro/volume-14",
        start: "July 2020",
        end: "September 2020"
    },
    {
        name: 'On detecting face cycles in incrementally constructed planar graphs',
        position: 'Research Project',
        description: `
        While programming "Pentalink", a turn-based strategy game, I had to solve a computational geometry problem using an algorithm found in "Polygon Detection from a Set of Lines" by A. Ferreira et al. from the Technical University of Lisbon as a reference. Intrigued, I independently began to research the problem further.
        After realizing that I can approach this using a wireframe solution from solid modelling, I conducted research comparing the computational complexity of the two approaches under Dr Sashikumar, whom I met during my internship, now a research scientist at Google. It newly considers the incremental addition of edges, as is the case in Pentalink. Conducting deeper research into one of my own projects was equally challenging as it was enriching.

        `,
        abstract: `In planar graphs, detecting faces enclosed between its edges is extremely useful
        for geometrical analysis and rendering in computer graphics. An established
        method to compute a list of faces embedded within the planar graph is by
        constructing polygons through the minimum cycle basis of the graph, an algorithm which is known to run in cubic time. However, when planar graphs are
        incrementally constructed, it is shown that maintaining a wireframe model of
        the graph using half-edges is less computationally expensive. Incremental construction of a planar graph is considered in this paper as the addition of edges,
        one-by-one, to a planar structure. It is also shown empirically and mathematically that building and maintaining a wireframe model of planar graphs not
        constructed incrementally is computationally cheaper than the already established method of employing the minimum cycle basis algorithm. Further work
        suggested includes similar research for representing and detecting faces within
        three dimensional structures, and optimising the process of edge addition to the
        wireframe model.`,
        // link: "https://www.siam.org/Portals/0/Documents/S136704PDF.pdf?ver=2021-03-01-130112-520",
        // volumelink: "https://siam.org/publications/siuro/volume-14",
        start: "October 2019",
        end: "March 2019"
    },
]

let jsonFile = require('jsonfile');
jsonFile.writeFile('research.json', JSON.stringify(RESEARCH));