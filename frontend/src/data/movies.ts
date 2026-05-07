export type Movie = {
  id: string
  title: string
  year: number
  genre: string
  rating: number
  reviewer: string
  poster: string
  accent: string
  summary: string
  reviewTitle: string
  essay: string[]
}


// To add your essays, replace each string in the essay arrays below.
// Each string becomes one paragraph on that movie's review page.
export const movies: Movie[] = [
  {
    id: 'rocky-iv',
    title: 'Rocky IV',
    year: 1985,
    genre: 'Action',
    rating: 4,
    reviewer: 'fosa',
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2MHUit4H6OK5adcOjnCN6suCKOl.jpg',
    accent: '#d96b3d',
    summary:
      'A loud, patriotic boxing spectacle built around rivalry, training, and the pressure to prove something bigger than yourself.',
    reviewTitle: 'Why Rocky IV Earned This Rating',
    essay: [
      "The film Rocky IV presents technology as this powerful force that is meant to represent superiority in strength, performance, and discipline, while contrasting it with the more human and emotional side of Rocky and Apollo. Ivan Drago is constantly shown as this machine-like figure who is created through science and training systems rather than natural struggle. Everything about him feels controlled, from the way he trains to the way he speaks, and the film emphasizes this idea that he is not really fighting as a person but as something built for performance. At the same time, Rocky and Apollo are shown in a very different way. They are emotional, expressive, and constantly aware of what they are feeling inside the ring and outside of it.",
      "One of the clearest examples of this difference is how Apollo approaches his fight with Ivan. Even when he is clearly losing, he still refuses to stop because fighting is something he believes is part of who he is. It is not just about winning for him, but about identity and pride. We see the same type of emotion from Rocky when he talks to his son before leaving for his fight. He admits that he is scared before fights, which makes him feel more human and real compared to Ivan. These moments show that Rocky and Apollo are driven by emotion and experience rather than control or perfection.",
      "Ivan, on the other hand, is almost completely emotionless throughout the film. He rarely shows expression and always feels distant and cold. This makes him seem less like a person and more like a product of technology. I think this is intentional because it represents the idea of what happens when performance becomes more important than humanity. During Rocky's fight with Ivan, Rocky eventually lands a punch that makes Ivan bleed, and someone from Rocky's corner says, “HE'S NOT A MACHINE, HE'S A MAN.” To me, this moment shows the main idea of the film, which is that no matter how advanced something looks, it is still human underneath.",
      "I also think this connects to how technology is viewed in society today, especially with AI and automation becoming more present. There is this idea that systems and machines can eventually replace human effort, but the film pushes back against that by showing that emotion and struggle matter just as much as strength or efficiency. Rocky's training in Russia also reinforces this because he is shown working through natural and physical environments rather than relying on machines.",
    ],
  },
  {
    id: 'hoosiers',
    title: 'Hoosiers',
    year: 1986,
    genre: 'Drama',
    rating: 4.5,
    reviewer: 'fosa',
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/dHpjZQXEdoi1xNLubM1rPmTHJYz.jpg',
    accent: '#5aa0b8',
    summary:
      'A quiet, disciplined underdog story about a small-town team finding rhythm, trust, and identity through basketball.',
    reviewTitle: 'Why Hoosiers Earned This Rating',
    essay: [
      "The film Hoosiers presents this image of small town America where hard work, discipline, and unity are the main things that lead people toward success. Throughout the film we constantly see Coach Dale push the players to become more disciplined both on and off the court, and despite the fact that many people in the town disagree with his methods at first, eventually his approach starts to pay off. To me, the film wasn't just about basketball itself, instead basketball almost felt like the tool being used to symbolize what America should look like. The town rallies around the team, everybody knows each other, and success comes from effort and commitment rather than corruption or outside influence. This creates a very idealized version of the 1950s that I think resonated heavily with audiences during the 1980s because of everything changing economically and culturally during that time period.",
      "One thing I noticed throughout the film was how strongly it emphasizes merit and individual responsibility. Jimmy Chitwood is clearly the best player on the team, but even he is expected to buy into the system and work together with everybody else. Coach Dale repeatedly stresses discipline and teamwork over selfishness. I think this was important because during the 1980s many Americans were dealing with economic uncertainty, factory shutdowns, and the weakening of unions that once gave many middle class families stability. In Hoosiers, none of those issues are really visible. Instead, the film creates this world where if people simply work hard enough and trust one another everything will eventually fall into place. I believe this was comforting for audiences because it allowed them to escape from the realities they were facing at the time",
      "The town itself also plays a major role in the film because it represents this close and unified community that many people probably felt was disappearing in real life. Throughout the movie we see the entire town emotionally invested in the basketball team almost as if the team's success defines the success of the town itself. Even when there are disagreements between Coach Dale and the townspeople, eventually they all come together behind the common goal of winning. In the 1980s many urban areas were struggling economically and socially, so seeing a small rural town united around something positive probably gave viewers a sense of nostalgia and comfort. The film creates this image of America where communities are strong, everybody has their role, and people feel connected to one another.",
      "However, despite all of this positivity, I think the film also smooths over many important social issues. The town in Hoosiers is almost entirely white and there is essentially no visible racial conflict throughout the movie. There is also very little attention brought toward poverty, labor struggles, or economic inequality even though many of those issues existed both in the 1950s and the 1980s. To me, this feels intentional because the film wants audiences to focus on this simplified and orderly version of the past rather than the more complicated realities. It almost creates this fantasy version of America where social conflict barely exists and everybody is able to come together through sports and shared values.",
      "Overall, I think Hoosiers resonated with audiences in the 1980s because it presented a version of America that felt simple, unified, and morally clear during a time when many people felt uncertain about the future. The film allows viewers to temporarily escape economic struggles and social tensions by presenting this nostalgic image of small town life where hard work and discipline are always rewarded. While the film is inspiring and emotionally powerful, I also think it leaves out many of the deeper conflicts that existed both in the 1950s and during the decade it was released."
    ],
  },
  {
    id: 'offside',
    title: 'Offsides',
    year: 2006,
    genre: 'Drama',
    rating: 4,
    reviewer: 'fosa',
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9BDtD58nuNFyByMAoTLdFNHX5qZ.jpg',
    accent: '#ce3d38',
    summary:
      'A sharp, human story about soccer, restriction, and the strange humor that appears when people keep pushing toward freedom.',
    reviewTitle: 'Why Offsides Earned This Rating',
    essay: [
      "The film Offside highlights gender inequality in a very direct and realistic way by showing how women in Iran were legally banned from attending men’s soccer matches, including major championship games. Because of this restriction, several young Iranian women decide to sneak into the stadium in order to watch the match. To me, this already sets up the main conflict of the film in a powerful way because it shows how something as simple as watching a soccer game becomes an act of resistance. Even though their actions are technically against the law in that setting, it feels more like a response to unfair rules rather than actual wrongdoing. There is something inspiring about the way they show up anyway, fully aware of the consequences but still choosing to be present.",
      "The film also shows the reasoning that is used to justify this restriction, which is that women need to be protected from the “inappropriate” environment of stadiums where men use foul language and act aggressively. However, the film makes it very clear that this argument is just a surface level excuse. Instead of actually protecting women, it is more about controlling their access to public spaces and reinforcing a system where men hold more freedom and authority. The contradiction is obvious throughout the film because the same behaviors that are supposedly dangerous are not actually enforced in a fair or consistent way, which shows that the rule is less about safety and more about inequality.",
      "Another important part of the film is how it portrays the soldiers who are tasked with enforcing these rules. The soldiers are not shown as fully powerful or in control, but instead as individuals who are also caught inside the system they are enforcing. They are required to prevent women from entering the stadium, even though many of them do not seem fully convinced by the rule themselves. This creates an interesting dynamic because it shows that the system of inequality is not just women versus men, but also how ordinary people are forced into roles that support a structure they may not fully agree with. In that sense, everyone involved is affected by the system, even if they are enforcing it.",
      "Overall, Offside uses something as simple as a soccer match to reveal a much larger issue about gender inequality and social control. What stands out the most is how ordinary and everyday the situation feels, even though the restriction itself is extreme. The film does not rely on dramatic events to make its point, but instead shows how injustice can exist quietly within normal life. In the end, it becomes clear that the girls’ attempt to enter the stadium is not just about watching a game, but about challenging the idea that they should be excluded from public life in the first place."
    ],
  },
]
