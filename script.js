// === ANIMASI MASUK SAAT RELOAD === //
const fadeUp = (target, delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      duration: 0.6,
      delay,
    }
  );
};

const fadeSide = (target, from = "left", delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0, x: from === "left" ? -100 : 100 },
    {
      opacity: 1,
      x: 0,
      ease: "power2.out",
      duration: 1,
      delay,
    }
  );
};

// Timeline reload (on load)
fadeUp(".aboutSection");
fadeUp(".nameSection", 0.2);
fadeSide(".socialEmailLink", "left", 0.4);
fadeSide(".socialLink", "right", 0.4);


// === SCROLL TRIGGER SECTION === //
const scrollFadeUp = (trigger, targets, opts = {}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: opts.start || "0% 84%",
      end: opts.end || "10% 70%",
      scrub: opts.scrub || false,
      // markers: true, // aktifin buat debugging
    },
  });

  tl.fromTo(
    targets,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      duration: opts.duration || 1,
      stagger: opts.stagger || 0.2,
    }
  );
};

// Skill section
scrollFadeUp(".skillSection", ["#front", "#back", "#lang"]);

// Experience section
scrollFadeUp(".experience", [".companySection", ".experienceSection"], {
  start: "10% 80%",
  duration: 1.5,
});

// Projects section
scrollFadeUp(".projects", ".projects", {
  start: "10% 80%",
  duration: 2,
});

// Contact section
scrollFadeUp(".contact", ".contact", {
  start: "0% 80%",
  duration: 1,
});

scrollFadeUp(".experience", ".bento-item", {
  start: "top 85%",
  duration: 1.2,
  stagger: 0.15,
});


