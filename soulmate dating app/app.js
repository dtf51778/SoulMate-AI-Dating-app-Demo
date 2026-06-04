const app = document.querySelector("#app");

const themes = {
  resonance: {
    label: "Wanting to be deeply understood",
    keywords: [
      "misunderstood",
      "not understood",
      "invisible",
      "unseen",
      "nobody gets me",
      "lonely",
      "alone",
    ],
    opening: [
      "I hear a longing to be met without having to translate every part of yourself first.",
      "That kind of loneliness can be subtle. It is possible to be surrounded by people and still feel like the real you has not been reached.",
      "We can move slowly here. Nothing needs to be polished or explained perfectly.",
    ],
    beats: [
      {
        reflection:
          "There is a difference between being noticed and being understood. You seem to be touching the ache that comes when people see the surface but miss the inner weather.",
        invitation:
          "Let the next part be about the moments when you stop trying to be understood.",
        chips: [
          "I get tired of explaining myself.",
          "I hide the deepest parts of me.",
          "I want someone to notice without me begging.",
          "That feels closer than I expected.",
        ],
      },
      {
        reflection:
          "The protective part of you makes sense. If your depth has been overlooked before, it may have learned to wait at the doorway instead of walking fully into the room.",
        invitation:
          "Stay with the version of you that wants to be invited in gently.",
        chips: [
          "I want to feel safe enough to open.",
          "I do not want to perform closeness.",
          "I want love to feel quieter.",
          "There is a part of me that still hopes.",
        ],
      },
      {
        reflection:
          "What feels tender here is not neediness. It is the human wish to be received with enough attention that you can stop monitoring yourself.",
        invitation:
          "Let this become less about being chosen by anyone, and more about recognizing the kind of presence your heart can relax around.",
        chips: [
          "I want presence more than attention.",
          "I want someone emotionally awake.",
          "I want depth without pressure.",
          "I am starting to understand myself.",
        ],
      },
    ],
    summary:
      "You may be carrying a quiet wish to be understood without having to shrink, perform, or over-explain. The healing thread is not about becoming easier to read. It is about finding a love that is willing to read slowly.",
    need:
      "You may need someone emotionally present, patient, and genuinely curious. Someone who treats your inner world as a place to enter with care, not a puzzle to solve quickly.",
  },
  unavailable: {
    label: "Turning intensity into self-understanding",
    keywords: [
      "unavailable",
      "distant",
      "cold",
      "avoidant",
      "chase",
      "chasing",
      "hard to get",
      "inconsistent",
    ],
    opening: [
      "I hear the pull of someone who is difficult to reach. That pull can feel powerful because uncertainty has a way of making the heart work harder.",
      "There may be a part of you that confuses emotional distance with depth, not because you are foolish, but because longing can make absence feel meaningful.",
      "We can look at this without judging the part of you that wanted them.",
    ],
    beats: [
      {
        reflection:
          "When someone is inconsistent, the mind often starts searching for a hidden reason. That search can feel like connection, even when it is quietly exhausting you.",
        invitation:
          "Let the next part name what the chase has been costing you.",
        chips: [
          "I keep trying to understand them.",
          "I feel anxious but pretend I am fine.",
          "I wait for small signs of care.",
          "I know this pattern is tiring me.",
        ],
      },
      {
        reflection:
          "The part of you that keeps trying may not want drama. It may want relief. It may want one clear moment where love stops feeling like something you have to earn.",
        invitation:
          "Notice the difference between chemistry that activates you and presence that steadies you.",
        chips: [
          "I want steadiness, not guessing.",
          "I want to be chosen clearly.",
          "I confuse longing with connection.",
          "This feels painfully true.",
        ],
      },
      {
        reflection:
          "You do not have to shame the version of you that was drawn in. That version was trying to find closeness with the tools it had.",
        invitation:
          "Let this become a turning point toward love that does not require you to abandon yourself.",
        chips: [
          "I want depth without confusion.",
          "I want calm to feel attractive.",
          "I am ready to stop chasing.",
          "I want my heart to rest.",
        ],
      },
    ],
    summary:
      "You may have been drawn to emotional complexity, but your heart seems to be asking for something simpler and braver: depth without confusion, mystery without inconsistency, closeness without chasing.",
    need:
      "You may need someone steady without being dull, honest without being harsh, and emotionally available without making you prove why you deserve access to them.",
  },
  safety: {
    label: "Learning what safety feels like",
    keywords: [
      "abandoned",
      "leave",
      "left",
      "rejected",
      "not chosen",
      "replaced",
      "forgotten",
    ],
    opening: [
      "I hear how much it matters to feel chosen clearly. That does not make you too sensitive. It means uncertainty has touched something real.",
      "A fear of being left can make the heart scan for small changes before the mind even has words for them.",
      "We can be gentle with that part. It has been trying to protect you.",
    ],
    beats: [
      {
        reflection:
          "The protective part of you may move quickly because waiting has not always felt safe. It tries to prepare you for pain before pain arrives.",
        invitation:
          "Let the next part give language to what steady love would have changed.",
        chips: [
          "I want consistency more than promises.",
          "I want someone who follows through.",
          "I want to stop bracing for loss.",
          "I want to trust without overthinking.",
        ],
      },
      {
        reflection:
          "There is a tenderness in wanting reassurance without having to ask for it every time. Love can become exhausting when clarity always has to be requested.",
        invitation:
          "Let this become permission to need steadiness openly.",
        chips: [
          "I want clear affection.",
          "I want emotional honesty.",
          "I want someone who stays present.",
          "I am tired of acting calm.",
        ],
      },
      {
        reflection:
          "Your heart may not be asking for someone to remove all uncertainty from life. It may be asking for someone who does not add unnecessary uncertainty to love.",
        invitation:
          "Let the healing part imagine love as a place where your guard can slowly come down.",
        chips: [
          "I want love that feels safe.",
          "I want to be chosen without competing.",
          "I want my nervous system to rest.",
          "I can feel that landing.",
        ],
      },
    ],
    summary:
      "You may have learned to watch for signs of being left behind, but underneath that vigilance is a very human wish: to be chosen without having to compete for certainty.",
    need:
      "You may need someone consistent in affection, clear in communication, and careful with your trust. Someone whose love feels less like a test and more like a steady place to land.",
  },
  empathy: {
    label: "Letting care come back to you",
    keywords: [
      "give too much",
      "people pleasing",
      "care too much",
      "always understand others",
      "tired",
      "drained",
      "exhausted",
    ],
    opening: [
      "I hear someone who has become very good at making room for other people.",
      "That kind of care can look beautiful from the outside, while quietly leaving you under-held on the inside.",
      "This space can be about letting your needs take up room too.",
    ],
    beats: [
      {
        reflection:
          "You may have learned to read the room so well that you sometimes disappear inside it. The care is real, but the cost is real too.",
        invitation:
          "Let the next part be honest about what giving so much has been taking from you.",
        chips: [
          "I feel responsible for everyone's emotions.",
          "I give care I do not receive back.",
          "I am tired of being the strong one.",
          "I do not know how to need openly.",
        ],
      },
      {
        reflection:
          "There may be a part of you that expects love to require usefulness. But being loved is not the same as being needed for what you can provide.",
        invitation:
          "Let this moment separate your worth from how much you can carry.",
        chips: [
          "I want care I do not have to earn.",
          "I want someone to notice I am tired.",
          "I want mutual effort.",
          "I want to be held too.",
        ],
      },
      {
        reflection:
          "Your softness is not the problem. The pain comes when your softness has no shelter.",
        invitation:
          "Let the healing part imagine a love that protects your sensitivity instead of using it as fuel.",
        chips: [
          "I want reciprocal love.",
          "I want to stop over-functioning.",
          "I want my needs to matter.",
          "I feel relieved reading that.",
        ],
      },
    ],
    summary:
      "You may be deeply empathetic but under-received. You understand others with care, but your heart may be asking for someone who notices you with the same gentleness.",
    need:
      "You may need someone generous, emotionally aware, and reciprocal. Someone who does not only benefit from your softness, but protects it.",
  },
  exploring: {
    label: "Becoming honest with yourself",
    keywords: [],
    opening: [
      "I hear someone trying to understand what they truly want beneath the noise.",
      "That is a meaningful beginning. You do not have to know the exact answer for this to be real.",
      "We can let the conversation reveal the shape of the feeling before trying to name it.",
    ],
    beats: [
      {
        reflection:
          "Sometimes the heart speaks first through restlessness. Not because something is wrong with you, but because something in you wants a more honest life.",
        invitation:
          "Let the next part be less polished and more true.",
        chips: [
          "I want to understand my patterns.",
          "I want love to feel more peaceful.",
          "I am not sure what I want yet.",
          "I want to stop pretending I am fine.",
        ],
      },
      {
        reflection:
          "There is wisdom in not forcing clarity too quickly. Some feelings need warmth before they become language.",
        invitation:
          "Let this become a softer way to listen to yourself.",
        chips: [
          "I want to feel safe being honest.",
          "I want to know what I actually need.",
          "I want a relationship that helps me grow.",
          "I feel something opening.",
        ],
      },
      {
        reflection:
          "You may not be looking for a perfect person. You may be looking for the version of yourself that becomes possible around the right person.",
        invitation:
          "Let the final part name the kind of love your future self would thank you for choosing.",
        chips: [
          "I want steady, honest love.",
          "I want depth without losing myself.",
          "I want to become softer, not smaller.",
          "I want love that feels like home.",
        ],
      },
    ],
    summary:
      "You seem to be exploring what your heart actually wants beneath old expectations. You may not need a dramatic love story. You may need a connection that helps you become more honest with yourself.",
    need:
      "You may need someone steady, curious, and emotionally generous. Someone who creates enough safety for clarity to emerge without forcing it.",
  },
};

let state = {
  stage: "welcome",
  messages: [],
  themeId: null,
  beatIndex: 0,
  answers: [],
  typing: false,
  whyOpen: false,
};

function render() {
  if (state.stage === "welcome") {
    app.innerHTML = welcomeTemplate();
    bindWelcome();
    return;
  }

  if (state.stage === "conversation") {
    app.innerHTML = frameTemplate(conversationTemplate());
    bindConversation();
    requestAnimationFrame(scrollConversation);
    return;
  }

  if (state.stage === "reflection") {
    app.innerHTML = frameTemplate(reflectionTemplate(), "Integration", 82);
    bindReflection();
    return;
  }

  app.innerHTML = frameTemplate(matchTemplate(), "Soulmate reveal", 100);
  bindMatch();
}

function welcomeTemplate() {
  return `
    <section class="screen fade">
      <aside class="visual-pane">
        <div class="brand-mark">S</div>
        <div class="visual-caption">
          <p>A quiet conversation for self-discovery, self-healing, and the kind of love that feels safe to receive.</p>
        </div>
      </aside>
      <section class="content-pane">
        <div class="welcome-copy">
          <p class="kicker">An emotionally intelligent discovery session</p>
          <h1>Soulmate Discovery</h1>
          <p class="subtitle">
            This is not a questionnaire. It is a calm space to be listened to, reflected back, and gently brought closer to yourself.
          </p>
        </div>
        <button class="primary-button" data-action="begin">Begin the session</button>
      </section>
    </section>
  `;
}

function frameTemplate(content, label = "Trust-building session", progress = progressValue()) {
  return `
    <section class="prototype-frame fade">
      <header class="topbar">
        <div class="wordmark">Soulmate Discovery</div>
        <div class="stage-label">${label}</div>
        <div class="progress" aria-label="Progress">
          <div class="progress-fill" style="--progress: ${progress}%"></div>
        </div>
      </header>
      ${content}
    </section>
  `;
}

function conversationTemplate() {
  const theme = getTheme();
  const beat = theme.beats[state.beatIndex];
  const canRespond = !state.typing;

  return `
    <section class="conversation-layout">
      <div class="conversation" data-conversation>
        <div class="message-stack">
          ${state.messages
            .map(
              (message) => `
                <div class="message ${message.role}">
                  ${message.text}
                </div>
              `,
            )
            .join("")}
          ${
            state.typing
              ? `<div class="message ai"><span class="typing"><span></span><span></span><span></span></span></div>`
              : ""
          }
        </div>
        ${canRespond && beat ? composerTemplate(composerPlaceholder(), "submit-response") : ""}
      </div>
      <aside class="insight-panel">
        <h3>What this space is doing</h3>
        <ul class="signal-list">
          <li>Building trust before interpretation.</li>
          <li>Reflecting feelings before recommending a match.</li>
          <li>Turning patterns into language you can hold gently.</li>
          <li>${state.themeId ? theme.label : "Listening for the emotional thread."}</li>
        </ul>
      </aside>
    </section>
  `;
}

function composerTemplate(placeholder, action) {
  return `
    <form class="composer" data-action="${action}">
      <textarea name="response" rows="3" placeholder="${placeholder}"></textarea>
      <button class="primary-button" type="submit">Share</button>
    </form>
  `;
}

function composerPlaceholder() {
  if (!state.themeId) {
    return "Start anywhere. A person, a pattern, a feeling, or a sentence you keep replaying...";
  }

  if (state.beatIndex === 1) {
    return "Say more in your own words. What part of that feels most alive right now?";
  }

  if (state.beatIndex === 2) {
    return "Keep going. You can write the messy, honest version here.";
  }

  return "One last layer. What do you notice in yourself as you read this?";
}

function reflectionTemplate() {
  const theme = getTheme();
  return `
    <section class="result-stage">
      <div class="result-grid">
        <div class="result-copy">
          <p class="kicker">Self-discovery reflection</p>
          <h2>What I am hearing</h2>
          <p>${theme.summary}</p>
          <div class="quote">What may feel healing now</div>
          <p>${theme.need}</p>
          <button class="primary-button" data-action="closing">Receive the reflection</button>
        </div>
        <div class="match-card">
          <div class="match-body">
            <h3>${theme.label}</h3>
            <p class="tagline">
              The point is not to label you. The point is to help the part of you that already knows feel less alone.
            </p>
            <ul class="traits">
              <li>Trust</li>
              <li>Self-clarity</li>
              <li>Healing</li>
              <li>Hope</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

function matchTemplate() {
  if (state.stage === "closing") {
    return `
      <section class="result-stage">
        <div class="result-copy fade">
          <p class="kicker">Before the reveal</p>
          <div class="quote">
            We do not believe a soulmate is someone who completes you. We believe a soulmate is someone whose presence helps you recognize the parts of yourself you were afraid to bring into love.
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="result-stage">
      <div class="result-grid">
        <div class="result-copy">
          <p class="kicker">Your possible soulmate archetype</p>
          <h2>Jackson Wang</h2>
          <p>
            This person represents the emotional qualities that may meet you where you are becoming more honest, more open, and more at home in yourself.
          </p>
          <button class="ghost-button" data-action="why">Why this match</button>
          ${
            state.whyOpen
              ? `<div class="why-box">
                  This match is not based on surface preferences. It reflects the emotional pattern that emerged during your session. You may not need someone who keeps you guessing. You may need someone whose depth feels safe, whose attention feels steady, and whose love lets your guard come down slowly.
                </div>`
              : ""
          }
        </div>
        <article class="match-card">
          <img src="assets/wang-jiaer.avif" alt="Jackson Wang" />
          <div class="match-body">
            <h3>Jackson Wang</h3>
            <p class="tagline">
              A calm presence for someone who values depth, sincerity, and mutual understanding.
            </p>
            <ul class="traits">
              <li>Emotionally present</li>
              <li>Deep but steady</li>
              <li>Curious about your inner world</li>
              <li>Consistent in affection</li>
              <li>Gentle without being passive</li>
              <li>Honest without being harsh</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  `;
}

function bindWelcome() {
  document.querySelector("[data-action='begin']").addEventListener("click", () => {
    state.stage = "conversation";
    state.messages = [
      {
        role: "ai",
        text: "I am here with you. There is no right way to begin, and nothing you share has to sound wise or complete.",
      },
      {
        role: "ai",
        text: "You can start with a person, a pattern, a feeling, or a sentence you have not known where to put.",
      },
    ];
    render();
  });
}

function bindConversation() {
  const form = document.querySelector("[data-action='submit-response']");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = form.response.value.trim();
      if (value) handleUserResponse(value);
    });
  }

}

function bindReflection() {
  document.querySelector("[data-action='closing']").addEventListener("click", () => {
    state.stage = "closing";
    render();
    setTimeout(() => {
      state.stage = "match";
      render();
    }, 2400);
  });
}

function bindMatch() {
  const why = document.querySelector("[data-action='why']");
  if (why) {
    why.addEventListener("click", () => {
      state.whyOpen = !state.whyOpen;
      render();
    });
  }
}

function handleUserResponse(text) {
  state.messages.push({ role: "user", text });

  if (!state.themeId) {
    state.themeId = classifyInput(text);
  }

  const theme = getTheme();
  const beat = theme.beats[state.beatIndex];
  state.answers.push(text);
  state.typing = true;
  render();

  setTimeout(() => {
    state.typing = false;

    if (state.answers.length === 1) {
      theme.opening.forEach((message) => {
        state.messages.push({ role: "ai", text: message });
      });
    }

    state.messages.push({ role: "ai", text: adaptReflection(beat.reflection, text) });
    state.messages.push({ role: "ai", text: beat.invitation });
    state.beatIndex += 1;

    if (state.beatIndex >= theme.beats.length) {
      render();
      setTimeout(() => {
        state.stage = "reflection";
        render();
      }, 1200);
      return;
    }

    render();
  }, 1050);
}

function adaptReflection(reflection, text) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length < 18) return reflection;

  const clipped = clean.length > 82 ? `${clean.slice(0, 82).trim()}...` : clean;
  return `${reflection} I am also holding this exact thread from you: "${escapeHtml(clipped)}"`;
}

function classifyInput(text) {
  const normalized = text.toLowerCase();
  for (const [id, theme] of Object.entries(themes)) {
    if (theme.keywords.some((keyword) => normalized.includes(keyword))) {
      return id;
    }
  }
  return "exploring";
}

function getTheme() {
  return themes[state.themeId || "exploring"];
}

function progressValue() {
  if (state.stage === "reflection") return 82;
  if (state.stage === "closing" || state.stage === "match") return 100;
  if (!state.themeId) return 14;
  const theme = getTheme();
  return Math.min(78, Math.round((state.beatIndex / theme.beats.length) * 64) + 20);
}

function scrollConversation() {
  const conversation = document.querySelector("[data-conversation]");
  if (conversation) conversation.scrollTop = conversation.scrollHeight;
}

function escapeAttr(value) {
  return value.replace(/"/g, "&quot;");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

render();
