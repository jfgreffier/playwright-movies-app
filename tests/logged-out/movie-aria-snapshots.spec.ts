import { test, expect } from '@playwright/test';

test('movie page snapshot', async ({ page }) => {
  await page.goto('movie?id=1079091&page=1');
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - main:
      - heading "It Ends With Us" [level=1]
      - heading "We break the pattern or the pattern breaks us." [level=2]
      - text: ★ ★ ★ ★ ★ ★
      - paragraph: "7.173"
      - text: English / 131 min. / 2024
      - heading "The Genres" [level=3]
      - list "genres":
        - listitem:
          - link "Drama":
            - img
            - text: Drama
        - listitem:
          - link "Romance":
            - img
            - text: Romance
      - heading "The Synopsis" [level=3]
      - paragraph: When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.
      - heading "The Cast" [level=3]
      - button "Previous" [disabled]: «
      - link "Blake Lively":
        - img "Blake Lively"
      - link "Justin Baldoni":
        - img "Justin Baldoni"
      - link "Jenny Slate":
        - img "Jenny Slate"
      - link "Brandon Sklenar":
        - img "Brandon Sklenar"
      - link "Hasan Minhaj":
        - img "Hasan Minhaj"
      - link "Kevin McKidd":
        - img "Kevin McKidd"
      - link "Amy Morton":
        - img "Amy Morton"
      - link "Alex Neustaedter":
        - img "Alex Neustaedter"
      - link "Isabela Ferrer":
        - img "Isabela Ferrer"
      - link "Robert Clohessy":
        - img "Robert Clohessy"
      - link "Robin S. Walker":
        - img "Robin S. Walker"
      - link "Emily Baldoni":
        - img "Emily Baldoni"
      - link "Adam Mondschein":
        - img "Adam Mondschein"
      - link "Caroline Siegrist":
        - img "Caroline Siegrist"
      - link "Robyn Lively":
        - img "Robyn Lively"
      - link "Megan Robinson":
        - img "Megan Robinson"
      - link "Steve Monroe":
        - img "Steve Monroe"
      - link "Daphne Zelle":
        - img "Daphne Zelle"
      - link "Will Fitz":
        - img "Will Fitz"
      - button "Next": »
      - link "Website":
        - button "Website":
          - text: Website
          - img
      - link "IMDB":
        - button "IMDB":
          - text: IMDB
          - img
      - button "Trailer":
        - text: Trailer
        - img
      - button "Back":
        - img
        - text: Back
      - heading "Recommended Movies" [level=2]
      - list "movies":
        - listitem "movie":
          - 'link "poster of Saving Bikini Bottom: The Sandy Cheeks Movie Saving Bikini Bottom: The Sandy Cheeks Movie rating"':
            - 'img "poster of Saving Bikini Bottom: The Sandy Cheeks Movie"'
            - 'heading "Saving Bikini Bottom: The Sandy Cheeks Movie" [level=2]'
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Beautiful Wedding Beautiful Wedding rating":
            - img "poster of Beautiful Wedding"
            - heading "Beautiful Wedding" [level=2]
            - text: ★ ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Incoming Incoming rating":
            - img "poster of Incoming"
            - heading "Incoming" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - 'link "poster of Alien: Romulus Alien: Romulus rating"':
            - 'img "poster of Alien: Romulus"'
            - 'heading "Alien: Romulus" [level=2]'
            - text: ★ ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Paradox Effect Paradox Effect rating":
            - img "poster of Paradox Effect"
            - heading "Paradox Effect" [level=2]
            - text: ★ ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Breaking and Re-entering Breaking and Re-entering rating":
            - img "poster of Breaking and Re-entering"
            - heading "Breaking and Re-entering" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Longlegs Longlegs rating":
            - img "poster of Longlegs"
            - heading "Longlegs" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Civil War Civil War rating":
            - img "poster of Civil War"
            - heading "Civil War" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Jackpot! Jackpot! rating":
            - img "poster of Jackpot!"
            - heading "Jackpot!" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Monolith Monolith rating":
            - img "poster of Monolith"
            - heading "Monolith" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - 'link "poster of Mission: Cross Mission: Cross rating"':
            - 'img "poster of Mission: Cross"'
            - 'heading "Mission: Cross" [level=2]'
            - text: ★ ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Trap Trap rating":
            - img "poster of Trap"
            - heading "Trap" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Thelma Thelma rating":
            - img "poster of Thelma"
            - heading "Thelma" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Crescent City Crescent City rating":
            - img "poster of Crescent City"
            - heading "Crescent City" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Inside Out 2 Inside Out 2 rating":
            - img "poster of Inside Out 2"
            - heading "Inside Out 2" [level=2]
            - text: ★ ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of House of Ga'a House of Ga'a rating":
            - img "poster of House of Ga'a"
            - heading "House of Ga'a" [level=2]
            - text: ★ ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Harold and the Purple Crayon Harold and the Purple Crayon rating":
            - img "poster of Harold and the Purple Crayon"
            - heading "Harold and the Purple Crayon" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Despicable Me 4 Despicable Me 4 rating":
            - img "poster of Despicable Me 4"
            - heading "Despicable Me 4" [level=2]
            - text: ★ ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of The Mouse Trap The Mouse Trap rating":
            - img "poster of The Mouse Trap"
            - heading "The Mouse Trap" [level=2]
            - text: ★ ★ ★ ★ ★
        - listitem "movie":
          - link "poster of Something in the Water Something in the Water rating":
            - img "poster of Something in the Water"
            - heading "Something in the Water" [level=2]
            - text: ★ ★ ★ ★ ★
      - link "Page 2":
        - button "Page 2":
          - text: Page 2
          - img
  `);
});
