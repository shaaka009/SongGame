
var xl = 500;
var xr = 1;
var xrr = 284;
var pastranks = [1, 500];
var score = 0;
var highscore = 0;
var scrolling = false;
var slideCount = 0;

var songLinks = [
  "https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator",
  "https://open.spotify.com/embed/track/5uES1C2NgkdrNHiCwf9jRr?utm_source=generator",
  "https://open.spotify.com/embed/track/1A6P8IxzNyBRsQualaNXNY?utm_source=generator",
  "https://open.spotify.com/embed/track/3HWzoMvoF3TQfYg4UPszDq?utm_source=generator",
  "https://open.spotify.com/embed/track/6MrILERJLA3Jcq0E9poZsp?utm_source=generator",
  "https://open.spotify.com/embed/track/2DnJjbjNTV9Nd5NOa1KGba?utm_source=generator",
  "https://open.spotify.com/embed/track/7o9uu2GDtVDr9nsR7ZRN73?utm_source=generator",
  "https://open.spotify.com/embed/track/0KzAbK6nItSqNh8q70tb0K?utm_source=generator",
  "https://open.spotify.com/embed/track/4vLYewWIvqHfKtJDk8c8tq?utm_source=generator",
  "https://open.spotify.com/embed/track/0G21yYKMZoHa30cYVi1iA8?utm_source=generator",
  "https://open.spotify.com/embed/track/0F7FA14euOIX8KcbEturGH?utm_source=generator",
  "https://open.spotify.com/embed/track/1KdwPeY1WRWQGHCmRJTveb?utm_source=generator",
  "https://open.spotify.com/embed/track/50iiDJGpAPdr2VTrz999XA?utm_source=generator",
  "https://open.spotify.com/embed/track/48EjSdYh8wz2gBxxqzrsLe?utm_source=generator",
  "https://open.spotify.com/embed/track/6ScJMrlpiLfZUGtWp4QIVt?utm_source=generator",
  "https://open.spotify.com/embed/track/16EMONl2vH3rt9f4ehTG8g?utm_source=generator",
  "https://open.spotify.com/embed/track/3mwvKOyMmG77zZRunnxp9E?utm_source=generator",
  "https://open.spotify.com/embed/track/6b6IMqP565TbtFFZg9iFf3?utm_source=generator",
  "https://open.spotify.com/embed/track/0SiywuOBRcynK0uKGWdCnn?utm_source=generator",
  "https://open.spotify.com/embed/track/1TrGdXSgiBm8W68D2K1COG?utm_source=generator",
  "https://open.spotify.com/embed/track/3yNVfRQlUPViUh8O2V9SQn?utm_source=generator",
  "https://open.spotify.com/embed/track/5u6y4u5EgDv0peILf60H5t?utm_source=generator",
  "https://open.spotify.com/embed/track/6o2g1BJvtYQssH84kBYs7y?utm_source=generator",
  "https://open.spotify.com/embed/track/1GVnAD8Iz45rux6EC657Yv?utm_source=generator",
  "https://open.spotify.com/embed/track/4mLo5ouQ9giUdWSAOtn5TK?utm_source=generator",
  "https://open.spotify.com/embed/track/4nTYxxF8iWBq54LO3dBUie?utm_source=generator",
  "https://open.spotify.com/embed/track/0MHXrqn909p0LRTPsNsGEi?utm_source=generator",
  "https://open.spotify.com/embed/track/6xatfNMI8NkY5XxRHAeiS4?utm_source=generator",
  "https://open.spotify.com/embed/track/1CM1wOqD2AIjt2MWd31LV2?utm_source=generator",
  "https://open.spotify.com/embed/track/7BY005dacJkbO6EPiOh2wb?utm_source=generator",
  "https://open.spotify.com/embed/track/7MF7QAodbGzNYav5ZfIhAY?utm_source=generator",
  "https://open.spotify.com/embed/track/7rqaqQurHzR5xHAhdm1gmM?utm_source=generator",
  "https://open.spotify.com/embed/track/1LzNfuep1bnAUR9skqdHCK?utm_source=generator",
  "https://open.spotify.com/embed/track/4P5KoWXOxwuobLmHXLMobV?utm_source=generator",
  "https://open.spotify.com/embed/track/3nFJbZCHP4d9vduKjJLdBL?utm_source=generator",
  "https://open.spotify.com/embed/track/69kOkLUCkxIZYexIgSG8rq?utm_source=generator",
  "https://open.spotify.com/embed/track/0tVzXGFyNPusa1VkHmYDLd?utm_source=generator",
  "https://open.spotify.com/embed/track/2Mr1bGI2E10K7Mt1UJZ6Mw?utm_source=generator",
  "https://open.spotify.com/embed/track/3lh3iiiJeiBXHSZw6u0kh6?utm_source=generator",
  "https://open.spotify.com/embed/track/6eLL7QTdMWdhhG4i3jHDR9?utm_source=generator",
  "https://open.spotify.com/embed/track/1ViW8CWCiUff8iwlSpeI1r?utm_source=generator",
  "https://open.spotify.com/embed/track/1oaaSrDJimABpOdCEbw2DJ?utm_source=generator",
  "https://open.spotify.com/embed/track/5PntSbMHC1ud6Vvl8x56qd?utm_source=generator",
  "https://open.spotify.com/embed/track/37ZJ0p5Jm13JPevGcx4SkF?utm_source=generator",
  "https://open.spotify.com/embed/track/2dBwB667LHQkLhdYlwLUZK?utm_source=generator",
  "https://open.spotify.com/embed/track/4vpeKl0vMGdAXpZiQB2Dtd?utm_source=generator",
  "https://open.spotify.com/embed/track/7ixiCZEHWHc8FxaQXQh2P4?utm_source=generator",
  "https://open.spotify.com/embed/track/2WRzpLD8qDRrxMXc63E5WJ?utm_source=generator",
  "https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX?utm_source=generator",
  "https://open.spotify.com/embed/track/0M9ydKzuF3oZTfYYPfaGX1?utm_source=generator",
  "https://open.spotify.com/embed/track/3x8oBw97sf8BdnzF8gg6kR?utm_source=generator",
  "https://open.spotify.com/embed/track/5QTxFnGygVM4jFQiBovmRo?utm_source=generator",
  "https://open.spotify.com/embed/track/1MCem6JigI6jgQPMgriKbU?utm_source=generator",
  "https://open.spotify.com/embed/track/5ou2BiQ9FxIYkxsYvYHpAT?utm_source=generator",
  "https://open.spotify.com/embed/track/4Z80C8NlDd1AO4axf1O3n0?utm_source=generator",
  "https://open.spotify.com/embed/track/5N4vVbNotNwWGG8KcCdstR?utm_source=generator",
  "https://open.spotify.com/embed/track/4RY96Asd9IefaL3X4LOLZ8?utm_source=generator",
  "https://open.spotify.com/embed/track/2TfSHkHiFO4gRztVIkggkE?utm_source=generator",
  "https://open.spotify.com/embed/track/6EPRKhUOdiFSQwGBRBbvsZ?utm_source=generator",
  "https://open.spotify.com/embed/track/02eD9ymfJOJOhM97HYp5R9?utm_source=generator",
  "https://open.spotify.com/embed/track/3XVBdLihbNbxUwZosxcGuJ?utm_source=generator",
  "https://open.spotify.com/embed/track/1BwrMGGhPA6GarWIYaFrW8?utm_source=generator",
  "https://open.spotify.com/embed/track/5v4GgrXPMghOnBBLmveLac?utm_source=generator",
  "https://open.spotify.com/embed/track/4kbkYebCqM0JGHVWrbRU0u?utm_source=generator",
  "https://open.spotify.com/embed/track/3TGRqZ0a2l1LRblBkJoaDx?utm_source=generator",
  "https://open.spotify.com/embed/track/0K6yUnIKNsFtfIpTgGtcHm?utm_source=generator",
  "https://open.spotify.com/embed/track/61MZN0yyMWSEwrLPUUGfgJ?utm_source=generator",
  "https://open.spotify.com/embed/track/2Di0qFNb7ATroCGB3q0Ka7?utm_source=generator",
  "https://open.spotify.com/embed/track/3oAWTk92mZBxKBOKf8mR5v?utm_source=generator",
  "https://open.spotify.com/embed/track/7tyckyaQOzlsTjnujLinRt?utm_source=generator",
  "https://open.spotify.com/embed/track/2Mb3zpobD0CvJGWv6NpsPy?utm_source=generator",
  "https://open.spotify.com/embed/track/1mSClObliRtgPVT399COQH?utm_source=generator",
  "https://open.spotify.com/embed/track/5Ohxk2dO5COHF1krpoPigN?utm_source=generator",
  "https://open.spotify.com/embed/track/0FWhGmPVxLI6jOVF0wjALa?utm_source=generator",
  "https://open.spotify.com/embed/track/3hlksXnvbKogFdPbpO9vel?utm_source=generator",
  "https://open.spotify.com/embed/track/58PSYdY0GFg0LFb2PxYk4T?utm_source=generator",
  "https://open.spotify.com/embed/track/6MdqqkQ8sSC0WB4i8PyRuQ?utm_source=generator",
  "https://open.spotify.com/embed/track/6PNvv1dmDbOWrAYwEcuKBX?utm_source=generator",
  "https://open.spotify.com/embed/track/5PbFD3AIyunz5HxocduA9e?utm_source=generator",
  "https://open.spotify.com/embed/track/1YrnDTqvcnUKxAIeXyaEmU?utm_source=generator",
  "https://open.spotify.com/embed/track/63rva3TBizr6x1Yp5uwKfD?utm_source=generator",
  "https://open.spotify.com/embed/track/6xkryXuiZU360Lngd4sx13?utm_source=generator",
  "https://open.spotify.com/embed/track/4fQMGlCawbTkH9yPPZ49kP?utm_source=generator",
  "https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS?utm_source=generator",
  "https://open.spotify.com/embed/track/1L94M3KIu7QluZe63g64rv?utm_source=generator",
  "https://open.spotify.com/embed/track/1EjQRTG53jsinzk2xlVVJP?utm_source=generator",
  "https://open.spotify.com/embed/track/2Rn7bVL1FVYboc4c55RUdg?utm_source=generator",
  "https://open.spotify.com/embed/track/2aH5Pqq1F0sqZN1NFmWNvL?utm_source=generator",
  "https://open.spotify.com/embed/track/3XWgwgbWDI56mf1Wl3cLzb?utm_source=generator",
  "https://open.spotify.com/embed/track/4xmeLj3uVcoAwgDtwM4MbG?utm_source=generator",
  "https://open.spotify.com/embed/track/701oRFDRzsz3WdhCFOtUJj?utm_source=generator",
  "https://open.spotify.com/embed/track/5UWwZ5lm5PKu6eKsHAGxOk?utm_source=generator",
  "https://open.spotify.com/embed/track/476V2d6iA2tWXgQboKmTtA?utm_source=generator",
  "https://open.spotify.com/embed/track/5EWPGh7jbTNO2wakv8LjUI?utm_source=generator",
  "https://open.spotify.com/embed/track/3hx5R8nOKu5zvhlfDNSIQC?utm_source=generator",
  "https://open.spotify.com/embed/track/1kCewNSs909Xj1naXr36X8?utm_source=generator",
  "https://open.spotify.com/embed/track/6KTv0Z8BmVqM7DPxbGzpVC?utm_source=generator",
  "https://open.spotify.com/embed/track/2NVpYQqdraEcQwqT7GhUkh?utm_source=generator",
  "https://open.spotify.com/embed/track/0bRXwKfigvpKZUurwqAlEh?utm_source=generator",
  "https://open.spotify.com/embed/track/07GvNcU1WdyZJq3XxP0kZa?utm_source=generator",
  "https://open.spotify.com/embed/track/7cehkXeGO0t8HosgO42tHl?utm_source=generator",
  "https://open.spotify.com/embed/track/0RnCUYXa7jhgTXtiMXF2PQ?utm_source=generator",
  "https://open.spotify.com/embed/track/39lSeqnyjZJejRuaREfyLL?utm_source=generator",
  "https://open.spotify.com/embed/track/6jg8Y7gArYgZeXUBPMre0V?utm_source=generator",
  "https://open.spotify.com/embed/track/1v98rfd0an913AzHvMNG8a?utm_source=generator",
  "https://open.spotify.com/embed/track/3uy0jtkM8QYVTsBazkli1x?utm_source=generator",
  "https://open.spotify.com/embed/track/64SIlhd3BaHCCMSfajXG7l?utm_source=generator",
  "https://open.spotify.com/embed/track/1sYRkVKdT2ize1HSDCwbEF?utm_source=generator",
  "https://open.spotify.com/embed/track/7LVHVU3tWfcxj5aiPFEW4Q?utm_source=generator",
  "https://open.spotify.com/embed/track/05ZACkzW8YbRq3eFgIfSNB?utm_source=generator",
  "https://open.spotify.com/embed/track/5BIMPccDwShpXq784RJlJp?utm_source=generator",
  "https://open.spotify.com/embed/track/1QaJWSCk3UMKLotnPCIHh1?utm_source=generator",
  "https://open.spotify.com/embed/track/0LWkaEyQRkF0XAms8Bg1fC?utm_source=generator",
  "https://open.spotify.com/embed/track/4AwKXevZmsTNa3KZVj3rzl?utm_source=generator",
  "https://open.spotify.com/embed/track/6l0x5Z8kmjrorvcvM9ZIVH?utm_source=generator",
  "https://open.spotify.com/embed/track/3SnGymj6ijE2iuUfWxLo1q?utm_source=generator",
  "https://open.spotify.com/embed/track/58q2HKrzhC3ozto2nDdN4z?utm_source=generator",
  "https://open.spotify.com/embed/track/0WtDGnWL2KrMCk0mI1Gpwz?utm_source=generator",
  "https://open.spotify.com/embed/track/0IVkP59yJ9GFF6B7IrvrxA?utm_source=generator",
  "https://open.spotify.com/embed/track/395kSI564E2Rl1Nh5kGOxQ?utm_source=generator",
  "https://open.spotify.com/embed/track/3XApt3UvXtv8y9S6DrAxCL?utm_source=generator",
  "https://open.spotify.com/embed/track/4oPNN7syJYSjzDhRerF966?utm_source=generator",
  "https://open.spotify.com/embed/track/003vvx7Niy0yvhvHt4a68B?utm_source=generator",
  "https://open.spotify.com/embed/track/1tuwC1Ob5vnYZhvg3zyzJg?utm_source=generator",
  "https://open.spotify.com/embed/track/6h3YJ05BovN1Pgk145J3r9?utm_source=generator",
  "https://open.spotify.com/embed/track/2806jBTs12WAfzFImSxJzL?utm_source=generator",
  "https://open.spotify.com/embed/track/3PrqRBsMdy8eZkbDqDb32p?utm_source=generator",
  "https://open.spotify.com/embed/track/0wwPcA6wtMf6HUMpIRdeP7?utm_source=generator",
  "https://open.spotify.com/embed/track/69uJi5QsBtqlYkGURTBli8?utm_source=generator",
  "https://open.spotify.com/embed/track/5Wj1rJnCLpMHdLaxsFtJLs?utm_source=generator",
  "https://open.spotify.com/embed/track/2OARIMw1hpehr86Iwmv04c?utm_source=generator",
  "https://open.spotify.com/embed/track/4alHo6RGd0D3OUbTPExTHN?utm_source=generator",
  "https://open.spotify.com/embed/track/2EoOZnxNgtmZaD8uUmz2nD?utm_source=generator",
  "https://open.spotify.com/embed/track/7DfFc7a6Rwfi3YQMRbDMau?utm_source=generator",
  "https://open.spotify.com/embed/track/0fonScmHUzC0MglSLn9saA?utm_source=generator",
  "https://open.spotify.com/embed/track/6ui6l3ZNvlrGQZArwo8195?utm_source=generator",
  "https://open.spotify.com/embed/track/7x2xjJV3YAPeLQJ7u3Kjet?utm_source=generator",
  "https://open.spotify.com/embed/track/5O4erNlJ74PIF6kGol1ZrC?utm_source=generator",
  "https://open.spotify.com/embed/track/5UDqWOgDdixYMAgAyNbpgh?utm_source=generator",
  "https://open.spotify.com/embed/track/13XMn3vVhwm12NOCpkB380?utm_source=generator",
  "https://open.spotify.com/embed/track/6X4JeTWCuKEzKOEHXDtyBo?utm_source=generator",
  "https://open.spotify.com/embed/track/0Q0IVlqMV64kNLlwjPj0Hl?utm_source=generator",
  "https://open.spotify.com/embed/track/0lIoY4ZQsdn5QzhraM9o9u?utm_source=generator",
  "https://open.spotify.com/embed/track/1p80LdxRV74UKvL8gnD7ky?utm_source=generator",
  "https://open.spotify.com/embed/track/2ccUQnjjNWT0rsNnsBpsCA?utm_source=generator",
  "https://open.spotify.com/embed/track/2rBBhFXtuMoGuwYTSDpAdF?utm_source=generator",
  "https://open.spotify.com/embed/track/7oOOI85fVQvVnK5ynNMdW7?utm_source=generator",
  "https://open.spotify.com/embed/track/1TfqLAPs4K3s2rJMoCokcS?utm_source=generator",
  "https://open.spotify.com/embed/track/2qOm7ukLyHUXWyR4ZWLwxA?utm_source=generator",
  "https://open.spotify.com/embed/track/3LcGqv91NIBQaUmnNbsKu8?utm_source=generator",
  "https://open.spotify.com/embed/track/2qWKpYIleSvBT6aUMXoia5?utm_source=generator",
  "https://open.spotify.com/embed/track/6im4Ks6SWUqwTGp7Cft1e7?utm_source=generator",
  "https://open.spotify.com/embed/track/5ZgNecJcN9SSopnmCTlpXs?utm_source=generator",
  "https://open.spotify.com/embed/track/6xNwKNYZcvgV3XTIwsgNio?utm_source=generator",
  "https://open.spotify.com/embed/track/5QDLhrAOJJdNAmCTJ8xMyW?utm_source=generator",
  "https://open.spotify.com/embed/track/12q3V8ShACq2PSWINMc2rC?utm_source=generator",
  "https://open.spotify.com/embed/track/4svkPL62HbvyFgf0nHFXAF?utm_source=generator",
  "https://open.spotify.com/embed/track/2yBVeksU2EtrPJbTu4ZslK?utm_source=generator",
  "https://open.spotify.com/embed/track/2lDArps4owX3Q6rOIA4Osp?utm_source=generator",
  "https://open.spotify.com/embed/track/3G7tRC24Uh09Hmp1KZ7LQ2?utm_source=generator",
  "https://open.spotify.com/embed/track/45xBWOa6oEAk1WlVyr5QAB?utm_source=generator",
  "https://open.spotify.com/embed/track/2H7PHVdQ3mXqEHXcvclTB0?utm_source=generator",
  "https://open.spotify.com/embed/track/1Y373MqadDRtclJNdnUXVc?utm_source=generator",
  "https://open.spotify.com/embed/track/2goLsvvODILDzeeiT4dAoR?utm_source=generator",
  "https://open.spotify.com/embed/track/5dFoWIiJ2814hRwMYDcFiU?utm_source=generator",
  "https://open.spotify.com/embed/track/3YXIVMQLRRq2K7kxC7UYx6?utm_source=generator",
  "https://open.spotify.com/embed/track/4aQ8mFkZU6dmHaZOOKdscc?utm_source=generator",
  "https://open.spotify.com/embed/track/7MiLmLbwNoyf47xQ4TCVYp?utm_source=generator",
  "https://open.spotify.com/embed/track/49FYlytm3dAAraYgpoJZux?utm_source=generator",
  "https://open.spotify.com/embed/track/6jX5mso4x00c1EiNMrTU9U?utm_source=generator",
  "https://open.spotify.com/embed/track/63BcfK6YAzJYeISaTPr6IO?utm_source=generator",
  "https://open.spotify.com/embed/track/2DEZmgHKAvm41k4J3R2E9Y?utm_source=generator",
  "https://open.spotify.com/embed/track/3d9DChrdc6BOeFsbrZ3Is0?utm_source=generator",
  "https://open.spotify.com/embed/track/3XG801WWhqC753dekEBkMt?utm_source=generator",
  "https://open.spotify.com/embed/track/4yY8JqTOQyi7K4O1QcQtBG?utm_source=generator",
  "https://open.spotify.com/embed/track/21YxK0klhpfLW8budkJaMF?utm_source=generator",
  "https://open.spotify.com/embed/track/3utq2FgD1pkmIoaWfjXWAU?utm_source=generator",
  "https://open.spotify.com/embed/track/7dblNGnRXEBrVJunazs2U5?utm_source=generator",
  "https://open.spotify.com/embed/track/3u7eQmFOUDATeKMPUjDpGs?utm_source=generator",
  "https://open.spotify.com/embed/track/7gozgbG5EBTukCFWToTRA5?utm_source=generator",
  "https://open.spotify.com/embed/track/3djNBlI7xOggg7pnsOLaNm?utm_source=generator",
  "https://open.spotify.com/embed/track/4RvWPyQ5RL0ao9LPZeSouE?utm_source=generator",
  "https://open.spotify.com/embed/track/5Oc0vLGWdEWeCqIU8zyELt?utm_source=generator",
  "https://open.spotify.com/embed/track/2rslQV48gNv3r9pPrQFPW1?utm_source=generator",
  "https://open.spotify.com/embed/track/6wzLLGFlWQ5jqTL13MU069?utm_source=generator",
  "https://open.spotify.com/embed/track/7tyNY0pCKMD2JGIkQsUkHU?utm_source=generator",
  "https://open.spotify.com/embed/track/672N8DGGTOLCOgWe0koX5g?utm_source=generator",
  "https://open.spotify.com/embed/track/4Dq749x2QP6OXTURJ9GGY8?utm_source=generator",
  "https://open.spotify.com/embed/track/1jwKdqb7OindD204ocIryP?utm_source=generator",
  "https://open.spotify.com/embed/track/40riOy7x9W7GXjyGp4pjAv?utm_source=generator",
  "https://open.spotify.com/embed/track/5uvosCdMlFdTXhoazkTI5R?utm_source=generator",
  "https://open.spotify.com/embed/track/1k1Bqnv2R0uJXQN4u6LKYt?utm_source=generator",
  "https://open.spotify.com/embed/track/2vTMeiPiusCP04FNUQqDr5?utm_source=generator",
  "https://open.spotify.com/embed/track/2N5zMZX7YeL1tico8oQxa9?utm_source=generator",
  "https://open.spotify.com/embed/track/2oZmMp5M6L0Rh7G84Um2tF?utm_source=generator",
  "https://open.spotify.com/embed/track/5C0LFQARavkPpn7JgA4sLk?utm_source=generator",
  "https://open.spotify.com/embed/track/3UjH6apk0ogZeIqhHbjrRU?utm_source=generator",
  "https://open.spotify.com/embed/track/1KGi9sZVMeszgZOWivFpxs?utm_source=generator",
  "https://open.spotify.com/embed/track/6mFkJmJqdDVQ1REhVfGgd1?utm_source=generator",
  "https://open.spotify.com/embed/track/6UBjSnyP1O5W5ndJoO9vUk?utm_source=generator",
  "https://open.spotify.com/embed/track/0rme3FLbw5o1KLXpJzivjS?utm_source=generator",
  "https://open.spotify.com/embed/track/3sLhMSePzxSrmxluIqeoAZ?utm_source=generator",
  "https://open.spotify.com/embed/track/3R2q3FCnNIw2XhuEbYtYk6?utm_source=generator",
  "https://open.spotify.com/embed/track/2Gy7qnDwt8Z3MNxqat4CsK?utm_source=generator",
  "https://open.spotify.com/embed/track/0XyjtybwqSdqMAFfBEkmZf?utm_source=generator",
  "https://open.spotify.com/embed/track/0cJPLFrlV7TTCyPLupHzcH?utm_source=generator",
  "https://open.spotify.com/embed/track/3cw3Z7mS55gd3NUjh4k0bL?utm_source=generator",
  "https://open.spotify.com/embed/track/5Z8EDau8uNcP1E8JvmfkZe?utm_source=generator",
  "https://open.spotify.com/embed/track/3Ti0GdlrotgwsAVBBugv0I?utm_source=generator",
  "https://open.spotify.com/embed/track/18AXbzPzBS8Y3AkgSxzJPb?utm_source=generator",
  "https://open.spotify.com/embed/track/5rb9QrpfcKFHM1EUbSIurX?utm_source=generator",
  "https://open.spotify.com/embed/track/1Vp8U39YNsDfd6yVuaUq12?utm_source=generator",
  "https://open.spotify.com/embed/track/1sby5Tqlj9BjJKBl27e7Ie?utm_source=generator",
  "https://open.spotify.com/embed/track/2SiXAy7TuUkycRVbbWDEpo?utm_source=generator",
  "https://open.spotify.com/embed/track/4NtUY5IGzHCaqfZemmAu56?utm_source=generator",
  "https://open.spotify.com/embed/track/2L93TdW2GMue1H2zlkt30F?utm_source=generator",
  "https://open.spotify.com/embed/track/47mA6f44zxLtdATOoY7GjN?utm_source=generator",
  "https://open.spotify.com/embed/track/1qQSRy9DjrGh3jtsSCU6B1?utm_source=generator",
  "https://open.spotify.com/embed/track/7H6ev70Weq6DdpZyyTmUXk?utm_source=generator",
  "https://open.spotify.com/embed/track/3XrvEifl0hIzgBGUa5jBLS?utm_source=generator",
  "https://open.spotify.com/embed/track/1sjmKmR4u9xDeJHjDCn2bZ?utm_source=generator",
  "https://open.spotify.com/embed/track/63OQupATfueTdZMWTxW03A?utm_source=generator",
  "https://open.spotify.com/embed/track/7cfILJJHW9ZSkbM2ywLhiN?utm_source=generator",
  "https://open.spotify.com/embed/track/2KLQS8bGeVRxm3e0OrDOTB?utm_source=generator",
  "https://open.spotify.com/embed/track/5YUJMvTg4AWHKjqQidTsGK?utm_source=generator",
  "https://open.spotify.com/embed/track/79zQv3SsEOmyPAgUP4YDjz?utm_source=generator",
  "https://open.spotify.com/embed/track/6SMHgPgNkhe9lneNTbgtel?utm_source=generator",
  "https://open.spotify.com/embed/track/3gsCAGsWr6pUm1Vy7CPPob?utm_source=generator",
  "https://open.spotify.com/embed/track/43DeSV93pJPT4lCZaWZ6b1?utm_source=generator",
  "https://open.spotify.com/embed/track/78ZqE2tjAxbqEGGlvGnQfT?utm_source=generator",
  "https://open.spotify.com/embed/track/2oDqmfa2g8W893LlwJG1qu?utm_source=generator",
  "https://open.spotify.com/embed/track/1jFhnVoJkcB4lf9tT0rSZS?utm_source=generator",
  "https://open.spotify.com/embed/track/5TUa3AsgSh3kJIuXn42wig?utm_source=generator",
  "https://open.spotify.com/embed/track/124NFj84ppZ5pAxTuVQYCQ?utm_source=generator",
  "https://open.spotify.com/embed/track/38gBmRO7BNAgPz35WFgZkl?utm_source=generator",
  "https://open.spotify.com/embed/track/7nL0nuLhX6ItOoEq9RpkOO?utm_source=generator",
  "https://open.spotify.com/embed/track/39l1UORIhuHvUWfxG53tRZ?utm_source=generator",
  "https://open.spotify.com/embed/track/1l2Xmg54EUr3TDzNIaCr1z?utm_source=generator",
  "https://open.spotify.com/embed/track/3g3xDtGtU0asKw6iYCYiG5?utm_source=generator",
  "https://open.spotify.com/embed/track/7zrPswSV1yxrill5OyCuaU?utm_source=generator",
  "https://open.spotify.com/embed/track/5MVW8uIuNuL7CQ0RyyogHI?utm_source=generator",
  "https://open.spotify.com/embed/track/1Q1b8eVkUPGlpSArl8JAVw?utm_source=generator",
  "https://open.spotify.com/embed/track/7ni78Vjslqo2VxiDOahYlV?utm_source=generator",
  "https://open.spotify.com/embed/track/3VgrSJEKBRT3xmwzpaxxEF?utm_source=generator",
  "https://open.spotify.com/embed/track/54bm2e3tk8cliUz3VSdCPZ?utm_source=generator",
  "https://open.spotify.com/embed/track/30m1G9YyiwQzFG7QvAZzHE?utm_source=generator",
  "https://open.spotify.com/embed/track/52FlwUMMDnTK8TGkCag9Jd?utm_source=generator",
  "https://open.spotify.com/embed/track/2uRVPeQbsEpRQD0DKr1WTo?utm_source=generator",
  "https://open.spotify.com/embed/track/1v1PV2wERHiMPesMWX0qmO?utm_source=generator",
  "https://open.spotify.com/embed/track/7cv28LXcjAC3GsXbUvXKbX?utm_source=generator",
  "https://open.spotify.com/embed/track/20US4JIykUvnFpxMXp0lWv?utm_source=generator",
  "https://open.spotify.com/embed/track/7pu8AhGUxHZSCWTkQ2eb5M?utm_source=generator",
  "https://open.spotify.com/embed/track/6KIKRz9eSTXdNsGUnomdtW?utm_source=generator",
  "https://open.spotify.com/embed/track/1ygVwxm34930HJ99sgddI6?utm_source=generator",
  "https://open.spotify.com/embed/track/4lJ6YVXQ0jUk5ILu0PSrA4?utm_source=generator",
  "https://open.spotify.com/embed/track/0Puj4YlTm6xNzDDADXHMI9?utm_source=generator",
  "https://open.spotify.com/embed/track/1VfgWgELCIpe9pB3cLuDnJ?utm_source=generator",
  "https://open.spotify.com/embed/track/5GjPQ0eI7AgmOnADn1EO6Q?utm_source=generator",
  "https://open.spotify.com/embed/track/7xe3EQCvXnx6Q0zs41Y65n?utm_source=generator",
  "https://open.spotify.com/embed/track/0YEC3pNS0uIKvZb5u4lgsu?utm_source=generator",
  "https://open.spotify.com/embed/track/47BBI51FKFwOMlIiX6m8ya?utm_source=generator",
  "https://open.spotify.com/embed/track/731zWsKI2KvdBPO5MWdjSy?utm_source=generator",
  "https://open.spotify.com/embed/track/1sSuFkO3m3Cr6YN24NYol5?utm_source=generator",
  "https://open.spotify.com/embed/track/3IK25HIyoNVGUfHgfaXgEU?utm_source=generator",
  "https://open.spotify.com/embed/track/3M8FzayQWtkvOhqMn2V4T2?utm_source=generator",
  "https://open.spotify.com/embed/track/6hHc7Pks7wtBIW8Z6A0iFq?utm_source=generator",
  "https://open.spotify.com/embed/track/4a01ClusxuZiloOK5UgLUn?utm_source=generator",
  "https://open.spotify.com/embed/track/2He3NOyqtLNE3RQPpeDdSb?utm_source=generator",
  "https://open.spotify.com/embed/track/2tUBqZG2AbRi7Q0BIrVrEj?utm_source=generator",
  "https://open.spotify.com/embed/track/6awTbDHgM907tGecNQYPaV?utm_source=generator",
  "https://open.spotify.com/embed/track/2S8TXMoinwzM1Opht2bK5g?utm_source=generator",
  "https://open.spotify.com/embed/track/3ZjrfGcb3A2PMGA1vRNgSk?utm_source=generator",
  "https://open.spotify.com/embed/track/5R9a4t5t5O0IsznsrKPVro?utm_source=generator",
  "https://open.spotify.com/embed/track/4BP3uh0hFLFRb5cjsgLqDh?utm_source=generator",
  "https://open.spotify.com/embed/track/0WQiDwKJclirSYG9v5tayI?utm_source=generator",
  "https://open.spotify.com/embed/track/2xSfwtV4mUr2h63Q1zJH58?utm_source=generator",
  "https://open.spotify.com/embed/track/3k9i7UzeSUYWIfUZFeFDUd?utm_source=generator",
  "https://open.spotify.com/embed/track/3UmaczJpikHgJFyBTAJVoz?utm_source=generator",
  "https://open.spotify.com/embed/track/2PuUFT13yCzUOZun94WOXv?utm_source=generator",
  "https://open.spotify.com/embed/track/19jo0UT2vqD4pNVfIqTy4R?utm_source=generator",
  "https://open.spotify.com/embed/track/6wVViUl2xSRoDK2T7dMZbR?utm_source=generator",
  "https://open.spotify.com/embed/track/5tVA6TkbaAH9QMITTQRrNv?utm_source=generator",
  "https://open.spotify.com/embed/track/4NRQwaks9r58tTDvr4iEyv?utm_source=generator",
  "https://open.spotify.com/embed/track/2id8E4WvczfKHB4LHI7Np3?utm_source=generator",
  "https://open.spotify.com/embed/track/4gphxUgq0JSFv2BCLhNDiE?utm_source=generator",
  "https://open.spotify.com/embed/track/33ZXjLCpiINn8eQIDYEPTD?utm_source=generator",
  "https://open.spotify.com/embed/track/61AK5ICbKk20h1dFS3mXuu?utm_source=generator",
  "https://open.spotify.com/embed/track/63T7DJ1AFDD6Bn8VzG6JE8?utm_source=generator",
  "https://open.spotify.com/embed/track/1QEEqeFIZktqIpPI4jSVSF?utm_source=generator",
  "https://open.spotify.com/embed/track/6ADSaE87h8Y3lccZlBJdXH?utm_source=generator",
  "https://open.spotify.com/embed/track/2nqpN3cSmL0tTlJ724fE2a?utm_source=generator",
  "https://open.spotify.com/embed/track/4gvea7UlDkAvsJBPZAd4oB?utm_source=generator",
  "https://open.spotify.com/embed/track/49t1GWE6ZiEoBgN92oMDdM?utm_source=generator",
  "https://open.spotify.com/embed/track/59WN2psjkt1tyaxjspN8fp?utm_source=generator",
  "https://open.spotify.com/embed/track/6V9VCm1zOY2lGR80RehJ9i?utm_source=generator",
  "https://open.spotify.com/embed/track/3MjUtNVVq3C8Fn0MP3zhXa?utm_source=generator",
  "https://open.spotify.com/embed/track/7uPmQttafLiJyju14JREY4?utm_source=generator",
  "https://open.spotify.com/embed/track/2eF8pWbiivYsYRpbntYsnc?utm_source=generator",
  "https://open.spotify.com/embed/track/2bUXfclD8DwJwwUENtSCWu?utm_source=generator",
  "https://open.spotify.com/embed/track/5rDkA2TFOImbiVenmnE9r4?utm_source=generator",
  "https://open.spotify.com/embed/track/0LrwgdLsFaWh9VXIjBRe8t?utm_source=generator",
  "https://open.spotify.com/embed/track/5MxNLUsfh7uzROypsoO5qe?utm_source=generator",
  "https://open.spotify.com/embed/track/3VZmChrnVW8JK6ano4gSED?utm_source=generator",
  "https://open.spotify.com/embed/track/0CcL4kSHKIEwF3IW0BGgb6?utm_source=generator",
  "https://open.spotify.com/embed/track/7tMCIOFe99cWEYr21wfsDp?utm_source=generator",
  "https://open.spotify.com/embed/track/42fKW5Jhj97tj0TwE1pK8u?utm_source=generator",
  "https://open.spotify.com/embed/track/3m2Zd230K68bC4Qe961d9p?utm_source=generator",
  "https://open.spotify.com/embed/track/52dm9op3rbfAkc1LGXgipW?utm_source=generator",
  "https://open.spotify.com/embed/track/63BokRfXSQhEU6Qi2dSJpZ?utm_source=generator",
  "https://open.spotify.com/embed/track/4FdDorlbJTVHcH3djLbIfn?utm_source=generator",
  "https://open.spotify.com/embed/track/5n8Aro6j1bEGIy7Tpo7FV7?utm_source=generator",
  "https://open.spotify.com/embed/track/72Z17vmmeQKAg8bptWvpVG?utm_source=generator",
  "https://open.spotify.com/embed/track/1Eolhana7nKHYpcYpdVcT5?utm_source=generator",
  "https://open.spotify.com/embed/track/6k9DUKMJpWvu6eFG3O64Lg?utm_source=generator",
  "https://open.spotify.com/embed/track/5YLnfy7R2kueN0BRPkjiEG?utm_source=generator",
  "https://open.spotify.com/embed/track/52xaypL0Kjzk0ngwv3oBPR?utm_source=generator",
  "https://open.spotify.com/embed/track/3nvuPQTw2zuFAVuLsC9IYQ?utm_source=generator",
  "https://open.spotify.com/embed/track/0n2pjCIMKwHSXoYfEbYMfX?utm_source=generator",
  "https://open.spotify.com/embed/track/5y788ya4NvwhBznoDIcXwK?utm_source=generator",
  "https://open.spotify.com/embed/track/2BGNomqCxEDcXyxf8bg27k?utm_source=generator",
  "https://open.spotify.com/embed/track/5p3JunprHCxClJjOmcLV8G?utm_source=generator",
  "https://open.spotify.com/embed/track/5HNCy40Ni5BZJFw1TKzRsC?utm_source=generator",
  "https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m?utm_source=generator",
  "https://open.spotify.com/embed/track/7N3PAbqfTjSEU1edb2tY8j?utm_source=generator",
  "https://open.spotify.com/embed/track/29SyMC0plk6qw8NMF7lfRL?utm_source=generator",
  "https://open.spotify.com/embed/track/3YdKJzcoMZMacISlpY4QoP?utm_source=generator",
  "https://open.spotify.com/embed/track/46dGFTD918NMz1IP1rPJXO?utm_source=generator",
  "https://open.spotify.com/embed/track/7Me0vOSlJfaPY7Pc4GeItd?utm_source=generator",
  "https://open.spotify.com/embed/track/175Ef68hYgpfcm6zeKCH0L?utm_source=generator",
  "https://open.spotify.com/embed/track/29U7stRjqHU6rMiS8BfaI9?utm_source=generator",
  "https://open.spotify.com/embed/track/0GVvRmCoiLkhxJvlZy9bLk?utm_source=generator",
  "https://open.spotify.com/embed/track/7MRyJPksH3G2cXHN8UKYzP?utm_source=generator",
  "https://open.spotify.com/embed/track/7odHgoLFi3GQ90E9PeraI3?utm_source=generator",
  "https://open.spotify.com/embed/track/5Z01UMMf7V1o0MzF86s6WJ?utm_source=generator",
  "https://open.spotify.com/embed/track/0WNGPpmWqzPnk0psUhJ3SX?utm_source=generator",
  "https://open.spotify.com/embed/track/4tj7IsJrn4MvesuhoY0JBy?utm_source=generator",
  "https://open.spotify.com/embed/track/3RkQ3UwOyPqpIiIvGVewuU?utm_source=generator",
  "https://open.spotify.com/embed/track/5ihS6UUlyQAfmp48eSkxuQ?utm_source=generator",
  "https://open.spotify.com/embed/track/4KROoGIaPaR1pBHPnR3bwC?utm_source=generator",
  "https://open.spotify.com/embed/track/2m0M7YqCy4lXfedh18qd8N?utm_source=generator",
  "https://open.spotify.com/embed/track/6G0NzOx2jEPFsSmhr9N8Ys?utm_source=generator",
  "https://open.spotify.com/embed/track/3qiyyUfYe7CRYLucrPmulD?utm_source=generator",
  "https://open.spotify.com/embed/track/0WSlOSMLJWoWUpWci9nnRb?utm_source=generator",
  "https://open.spotify.com/embed/track/0WIbzDVEpmOyBnqqdtqIL9?utm_source=generator",
  "https://open.spotify.com/embed/track/0iA3xXSkSCiJywKyo1UKjQ?utm_source=generator",
  "https://open.spotify.com/embed/track/3SUusuA9jH1v6PVwtYMbdv?utm_source=generator",
  "https://open.spotify.com/embed/track/7j02rdE5RVtNcNMuLGY5SS?utm_source=generator",
  "https://open.spotify.com/embed/track/2dCmGcEOQrMQhMMS8Vj7Ca?utm_source=generator",
  "https://open.spotify.com/embed/track/6pxWv6GV35VGmcPf5dh6CH?utm_source=generator",
  "https://open.spotify.com/embed/track/0bwy3sGHeYwng2Ioicq6wf?utm_source=generator",
  "https://open.spotify.com/embed/track/6L89mwZXSOwYl76YXfX13s?utm_source=generator",
  "https://open.spotify.com/embed/track/3gdewACMIVMEWVbyb8O9sY?utm_source=generator",
  "https://open.spotify.com/embed/track/2nVHqZbOGkKWzlcy1aMbE7?utm_source=generator",
  "https://open.spotify.com/embed/track/3B9VueMM1VPiOkW56KSRrB?utm_source=generator",
  "https://open.spotify.com/embed/track/1XUKItaRs2494LclJwHhl8?utm_source=generator",
  "https://open.spotify.com/embed/track/0I3q5fE6wg7LIfHGngUTnV?utm_source=generator",
  "https://open.spotify.com/embed/track/55LRDFmsuazr533WrtHHW9?utm_source=generator",
  "https://open.spotify.com/embed/track/5jzma6gCzYtKB1DbEwFZKH?utm_source=generator",
  "https://open.spotify.com/embed/track/6qMgx8ys4MNNxypaIvbG0i?utm_source=generator",
  "https://open.spotify.com/embed/track/6rovOdp3HgK1DeAMYDzoA7?utm_source=generator",
  "https://open.spotify.com/embed/track/5CAtxZrXETP2MhDKJHOICk?utm_source=generator",
  "https://open.spotify.com/embed/track/27QvYgBk0CHOVHthWnkuWt?utm_source=generator",
  "https://open.spotify.com/embed/track/4v2rkl1mC3zVAz0nXMx9r4?utm_source=generator",
  "https://open.spotify.com/embed/track/3e9HZxeyfWwjeyPAMmWSSQ?utm_source=generator",
  "https://open.spotify.com/embed/track/36AlMHDBFwSsD3FQOy1R81?utm_source=generator",
  "https://open.spotify.com/embed/track/0qsS2A3hwicJCLtcaR6JRQ?utm_source=generator",
  "https://open.spotify.com/embed/track/4kOfxxnW1ukZdsNbCKY9br?utm_source=generator",
  "https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue?utm_source=generator",
  "https://open.spotify.com/embed/track/20s3FayrStM8GY0m4dRFsw?utm_source=generator",
  "https://open.spotify.com/embed/track/3SdTKo2uVsxFblQjpScoHy?utm_source=generator",
  "https://open.spotify.com/embed/track/3UoUMTLrAmjlHSmuC8aEKq?utm_source=generator",
  "https://open.spotify.com/embed/track/2aSC2xhRxOLiiZZVjhbylH?utm_source=generator",
  "https://open.spotify.com/embed/track/0hCB0YR03f6AmQaHbwWDe8?utm_source=generator",
  "https://open.spotify.com/embed/track/6qspW4YKycviDFjHBOaqUY?utm_source=generator",
  "https://open.spotify.com/embed/track/1SKApv6ZfJ9bkUxeRObJEF?utm_source=generator",
  "https://open.spotify.com/embed/track/5moTxUGPZXgGmosl4rIELm?utm_source=generator",
  "https://open.spotify.com/embed/track/50RwvvEKX5Q7AZt8FTAwIF?utm_source=generator",
  "https://open.spotify.com/embed/track/6aBUnkXuCEQQHAlTokv9or?utm_source=generator",
  "https://open.spotify.com/embed/track/1MlXd4giftxXZgeMItb3PQ?utm_source=generator",
  "https://open.spotify.com/embed/track/5V1AHQugSTASVez5ffJtFo?utm_source=generator",
  "https://open.spotify.com/embed/track/3Ap7YIpMkjNiyZnRJiWsVy?utm_source=generator",
  "https://open.spotify.com/embed/track/27m1soUndRthrAA1ediOXn?utm_source=generator",
  "https://open.spotify.com/embed/track/70LcF31zb1H0PyJoS1Sx1r?utm_source=generator",
  "https://open.spotify.com/embed/track/3NfxSdJnVdon1axzloJgba?utm_source=generator",
  "https://open.spotify.com/embed/track/0gFB5H3pHN13ERt2FyMuWi?utm_source=generator",
  "https://open.spotify.com/embed/track/4Hhv2vrOTy89HFRcjU3QOx?utm_source=generator",
  "https://open.spotify.com/embed/track/6I9VzXrHxO9rA9A5euc8Ak?utm_source=generator",
  "https://open.spotify.com/embed/track/0dMd4rilfd6gPbXaLpNYhu?utm_source=generator",
  "https://open.spotify.com/embed/track/31AOj9sFz2gM0O3hMARRBx?utm_source=generator",
  "https://open.spotify.com/embed/track/56lhDZNQ5J47aog6mGKeGk?utm_source=generator",
  "https://open.spotify.com/embed/track/0pNeVovbiZHkulpGeOx1Gj?utm_source=generator",
  "https://open.spotify.com/embed/track/7lL2lMWNtzOcf5HnEudNgn?utm_source=generator",
  "https://open.spotify.com/embed/track/76GlO5H5RT6g7y0gev86Nk?utm_source=generator",
  "https://open.spotify.com/embed/track/119c93MHjrDLJTApCVGpvx?utm_source=generator",
  "https://open.spotify.com/embed/track/4sFbojhVXQv7dBC9PVCcRn?utm_source=generator",
  "https://open.spotify.com/embed/track/3ZE3wv8V3w2T2f7nOCjV0N?utm_source=generator",
  "https://open.spotify.com/embed/track/5LxvwujISqiB8vpRYv887S?utm_source=generator",
  "https://open.spotify.com/embed/track/0Dw9z44gXhplDh5HCWZIxP?utm_source=generator",
  "https://open.spotify.com/embed/track/6cYSSiMroBAZj6dFxSlwVY?utm_source=generator",
  "https://open.spotify.com/embed/track/0hDQV9X1Da5JrwhK8gu86p?utm_source=generator",
  "https://open.spotify.com/embed/track/18GiV1BaXzPVYpp9rmOg0E?utm_source=generator",
  "https://open.spotify.com/embed/track/3mRM4NM8iO7UBqrSigCQFH?utm_source=generator",
  "https://open.spotify.com/embed/track/5QqdvVeYLL1xvZ1ndUjxnO?utm_source=generator",
  "https://open.spotify.com/embed/track/272Z4tzaSMMcgrZ0R494S2?utm_source=generator",
  "https://open.spotify.com/embed/track/7sLpSWxQazJzDVG6YGzlVs?utm_source=generator",
  "https://open.spotify.com/embed/track/1qPbGZqppFwLwcBC1JQ6Vr?utm_source=generator",
  "https://open.spotify.com/embed/track/4eHbdreAnSOrDDsFfc4Fpm?utm_source=generator",
  "https://open.spotify.com/embed/track/3xrn9i8zhNZsTtcoWgQEAd?utm_source=generator",
  "https://open.spotify.com/embed/track/1fMMRoalpb7E8m5FsAta2y?utm_source=generator",
  "https://open.spotify.com/embed/track/4ns1XFP3W5JPyzvnAjMdHD?utm_source=generator",
  "https://open.spotify.com/embed/track/5K09WxKdlkroDyEVyOSySy?utm_source=generator",
  "https://open.spotify.com/embed/track/0eY0YgyLAZ4gtM57wwYN7H?utm_source=generator",
  "https://open.spotify.com/embed/track/7snQQk1zcKl8gZ92AnueZW?utm_source=generator",
  "https://open.spotify.com/embed/track/2Ud3deeqLAG988pfW0Kwcl?utm_source=generator",
  "https://open.spotify.com/embed/track/4hq0S6wznq7SHDyMOFXL9i?utm_source=generator",
  "https://open.spotify.com/embed/track/62LJFaYihsdVrrkgUOJC05?utm_source=generator",
  "https://open.spotify.com/embed/track/63xdwScd1Ai1GigAwQxE8y?utm_source=generator",
  "https://open.spotify.com/embed/track/4n1ZGm3TxYmoYe1YR8cMus?utm_source=generator",
  "https://open.spotify.com/embed/track/1c8gk2PeTE04A1pIDH9YMk?utm_source=generator",
  "https://open.spotify.com/embed/track/3fElupNRLRJ0tbUDahPrAb?utm_source=generator",
  "https://open.spotify.com/embed/track/5yQ9iMZXGcr5rlO4hoLsP4?utm_source=generator",
  "https://open.spotify.com/embed/track/30FURVTCpbKyykjSEQzGkH?utm_source=generator",
  "https://open.spotify.com/embed/track/6Pkj4nv5K53i64cLVgkVyY?utm_source=generator",
  "https://open.spotify.com/embed/track/5E5HYgxGMp3BPakHGfKfIB?utm_source=generator",
  "https://open.spotify.com/embed/track/7hxZF4jETnE5Q75rKQnMjE?utm_source=generator",
  "https://open.spotify.com/embed/track/2fXKyAyPrEa24c6PJyqznF?utm_source=generator",
  "https://open.spotify.com/embed/track/7yzbimr8WVyAtBX3Eg6UL9?utm_source=generator",
  "https://open.spotify.com/embed/track/6g0Orsxv6glTJCt4cHsRsQ?utm_source=generator",
  "https://open.spotify.com/embed/track/1e0hllQ23AG0QGFgezgLOq?utm_source=generator",
  "https://open.spotify.com/embed/track/2M9ro2krNb7nr7HSprkEgo?utm_source=generator",
  "https://open.spotify.com/embed/track/6KDG8vvFerlCU63IXdw1zb?utm_source=generator",
  "https://open.spotify.com/embed/track/5enxwA8aAbwZbf5qCHORXi?utm_source=generator",
  "https://open.spotify.com/embed/track/6LdxORCLRfmxxAsEc9K7MH?utm_source=generator",
  "https://open.spotify.com/embed/track/6Vcwr9tb3ZLO63F8DL8cqu?utm_source=generator",
  "https://open.spotify.com/embed/track/6l8EbYRtQMgKOyc1gcDHF9?utm_source=generator",
  "https://open.spotify.com/embed/track/2grjqo0Frpf2okIBiifQKs?utm_source=generator",
  "https://open.spotify.com/embed/track/22ea9e9wspXjaR7qfqfsdS?utm_source=generator",
  "https://open.spotify.com/embed/track/2SpEHTbUuebeLkgs9QB7Ue?utm_source=generator",
  "https://open.spotify.com/embed/track/3PKtemUKxiDBvBo7tpQ8bG?utm_source=generator",
  "https://open.spotify.com/embed/track/5CQ30WqJwcep0pYcV4AMNc?utm_source=generator",
  "https://open.spotify.com/embed/track/29d0nY7TzCoi22XBqDQkiP?utm_source=generator",
  "https://open.spotify.com/embed/track/5isA9icHWl2651hvfr1EOV?utm_source=generator",
  "https://open.spotify.com/embed/track/0sDqo9UPzPUtu9wEkI3zRB?utm_source=generator",
  "https://open.spotify.com/embed/track/2GVEs1sn5Q1jB1976vQoAX?utm_source=generator",
  "https://open.spotify.com/embed/track/3jagJCUbdqhDSPuxP8cAqF?utm_source=generator",
  "https://open.spotify.com/embed/track/1z3ugFmUKoCzGsI6jdY4Ci?utm_source=generator",
  "https://open.spotify.com/embed/track/6QyQmdvQ1ywNccYa0pwLNQ?utm_source=generator",
  "https://open.spotify.com/embed/track/5t9KYe0Fhd5cW6UYT4qP8f?utm_source=generator",
  "https://open.spotify.com/embed/track/4rS63BySQrdWuTswkkZ5iS?utm_source=generator",
  "https://open.spotify.com/embed/track/3xsOtNxtBW0oTI1OWKAzTm?utm_source=generator",
  "https://open.spotify.com/embed/track/228BxWXUYQPJrJYHDLOHkj?utm_source=generator",
  "https://open.spotify.com/embed/track/0uEp9E98JB5awlA084uaIg?utm_source=generator",
  "https://open.spotify.com/embed/track/1W5XugQJGhnSATMI5n002M?utm_source=generator",
  "https://open.spotify.com/embed/track/2TVxnKdb3tqe1nhQWwwZCO?utm_source=generator",
  "https://open.spotify.com/embed/track/1ixbwbeBi5ufN4noUKmW5a?utm_source=generator",
  "https://open.spotify.com/embed/track/3iVcZ5G6tvkXZkZKlMpIUs?utm_source=generator",
  "https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5?utm_source=generator",
  "https://open.spotify.com/embed/track/6RrXd9Hph4hYR4bf3dbM6H?utm_source=generator",
  "https://open.spotify.com/embed/track/21dOjdraFZffs2lnQObaiZ?utm_source=generator",
  "https://open.spotify.com/embed/track/1r8oPEXqnhUVgkUkJNqEuF?utm_source=generator",
  "https://open.spotify.com/embed/track/2aoo2jlRnM3A0NyLQqMN2f?utm_source=generator",
  "https://open.spotify.com/embed/track/3WibbMr6canxRJXhNtAvLU?utm_source=generator",
  "https://open.spotify.com/embed/track/3zBhihYUHBmGd2bcQIobrF?utm_source=generator",
  "https://open.spotify.com/embed/track/51H2y6YrNNXcy3dfc3qSbA?utm_source=generator",
  "https://open.spotify.com/embed/track/7i6r9KotUPQg3ozKKgEPIN?utm_source=generator",
  "https://open.spotify.com/embed/track/0Fau19QCs19VC7OWohMdzu?utm_source=generator",
  "https://open.spotify.com/embed/track/5NbC9nnjcsebugrREWcYVy?utm_source=generator",
  "https://open.spotify.com/embed/track/3BUQFs6aFWh7EFNmI8bfL7?utm_source=generator",
  "https://open.spotify.com/embed/track/2b7FqlHc3JrzlYtGEkzq22?utm_source=generator",
  "https://open.spotify.com/embed/track/7fSGbZLhWlAiCC3HDPAULu?utm_source=generator",
  "https://open.spotify.com/embed/track/2dLLR6qlu5UJ5gk0dKz0h3?utm_source=generator",
  "https://open.spotify.com/embed/track/0kSkSJGSbPIxW6jRmOmS5d?utm_source=generator",
  "https://open.spotify.com/embed/track/1Tr4K5MU5XYE44umXGDndd?utm_source=generator",
  "https://open.spotify.com/embed/track/6hTcuIQa0sxrrByu9wTD7s?utm_source=generator",
  "https://open.spotify.com/embed/track/2tjPtYQMmZyvjPTGthh8fS?utm_source=generator",
  "https://open.spotify.com/embed/track/3DK6m7It6Pw857FcQftMds?utm_source=generator",
  "https://open.spotify.com/embed/track/3ZFBeIyP41HhnALjxWy1pR?utm_source=generator",
  "https://open.spotify.com/embed/track/7Jh1bpe76CNTCgdgAdBw4Z?utm_source=generator",
  "https://open.spotify.com/embed/track/2G2YzndIA6jeWFPBXhUjh5?utm_source=generator",
  "https://open.spotify.com/embed/track/1CTex49P0iWwzUGsMNjgaV?utm_source=generator",
  "https://open.spotify.com/embed/track/3Rc2ajBMInxeNGVkMPC92Y?utm_source=generator",
  "https://open.spotify.com/embed/track/7pKfPomDEeI4TPT6EOYjn9?utm_source=generator",
  "https://open.spotify.com/embed/track/54X78diSLoUDI3joC2bjMz?utm_source=generator",
  "https://open.spotify.com/embed/track/4u7EnebtmKWzUH433cf5Qv?utm_source=generator",
  "https://open.spotify.com/embed/track/5IVuqXILoxVWvWEPm82Jxr?utm_source=generator",
  "https://open.spotify.com/embed/track/3JueJBdcGQaEAaWqPamsQt?utm_source=generator",
  "https://open.spotify.com/embed/track/4qSk2aeaE2dh5ZOP0JdaV3?utm_source=generator",
  "https://open.spotify.com/embed/track/1dv3ePjze9tPq2pk8eWJdR?utm_source=generator",
  "https://open.spotify.com/embed/track/1h2xVEoJORqrg71HocgqXd?utm_source=generator",
  "https://open.spotify.com/embed/track/6iGU74CwXuT4XVepjc9Emf?utm_source=generator",
  "https://open.spotify.com/embed/track/2PpruBYCo4H7WOBJ7Q2EwM?utm_source=generator",
  "https://open.spotify.com/embed/track/0ofHAoxe9vBkTCp2UQIavz?utm_source=generator",
  "https://open.spotify.com/embed/track/6zsk6uF3MxfIeHPlubKBvR?utm_source=generator",
  "https://open.spotify.com/embed/track/5EuraV2jbqB15ihd3d2Hex?utm_source=generator",
  "https://open.spotify.com/embed/track/7av4raprzW2bWdjyAaH3hz?utm_source=generator",
  "https://open.spotify.com/embed/track/1f3yAtsJtY87CTmM8RLnxf?utm_source=generator",
  "https://open.spotify.com/embed/track/3AhXZa8sUQht0UEdBJgpGc?utm_source=generator",
  "https://open.spotify.com/embed/track/0RFKuagqUgR4X8C1QneCCq?utm_source=generator",
  "https://open.spotify.com/embed/track/1yo16b3u0lptm6Cs7lx4AD?utm_source=generator",
  "https://open.spotify.com/embed/track/7s25THrKz86DM225dOYwnr?utm_source=generator"
]

var allsongs = [
  "500", "Stronger", "Kanye West", "2007", "https://i.scdn.co/image/ab67616d0000b27326f7f19c7f0381e56156c94a"
  , "499", "Baby Love", "The Supremes", "1964", "https://m.media-amazon.com/images/I/614-RdaM4YL._UF1000,1000_QL80_.jpg"
  , "498", "Pancho and Lefty", "Townes Van Zandt", "1972", "https://i.discogs.com/59nUVbERVTY6BEDgHwIZEr-U_GSp65AGFSvVT0fmNX0/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3ODA3/MTAtMTM5MzI4NzM5/My05MDI5LmpwZWc.jpeg"
  , "497", "Truth Hurts", "Lizzo", "2017", "https://upload.wikimedia.org/wikipedia/en/a/a9/LizzoTruthHurts.jpg"
  , "496", "Without You", "Nilsson", "1971", "https://i1.sndcdn.com/artworks-GZbl4znUrczbTJKo-oZ4rjQ-t500x500.jpg"
  , "495", "You’re So Vain", "Carly Simon", "1972", "https://live-production.wcms.abc-cdn.net.au/b90192d79c71736b1c57832376e0112b?impolicy=wcms_crop_resize&cropH=660&cropW=660&xPos=0&yPos=1&width=862&height=862"
  , "494", "Time After Time", "Cyndi Lauper", "1983", "https://i.discogs.com/5q-Y4v87oU2_9vT7DLdfeaYHPJcu4-dhyMjgXr7LKzc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxOTM1/NS0xNTExMjA2OTgw/LTI0NzEuanBlZw.jpeg"
  , "493", "Where Is My Mind", "The Pixies", "1988", "https://m.media-amazon.com/images/I/81XKO7RSXbL._UF1000,1000_QL80_.jpg"
  , "492", "So What", "Miles Davis", "1959", "https://i.scdn.co/image/ab67616d0000b27341bcbc87bd9ee969d1400b0e"
  , "491", "Welcome to the Jungle", "Guns ‘n’ Roses", "1987", "https://m.media-amazon.com/images/I/91+MqrbzYvL._SX522_.jpg"
  , "490", "Old Town Road", "Lil Nas X", "2019", "https://media.gq.com/photos/5cdeef0e1f8a4e271cddab8d/16:9/w_1280,c_limit/Old-Town-Road-Video-GQ-2019-051719.jpg"
  , "489", "Cannonball", "The Breeders", "1993", "https://upload.wikimedia.org/wikipedia/en/b/b1/Cannonball_%28Breeders%29.jpg"
  , "488", "House of Balloons", "The Weeknd", "2011", "https://m.media-amazon.com/images/I/713zdlBqPtL._UF1000,1000_QL80_.jpg"
  , "487", "Cranes in the Sky", "Solange", "2016", "https://e.snmc.io/i/600/s/fedda3a5fcd6fdd21bae1eca3051bf8c/7423244/solange-cranes-in-the-sky-Cover-Art.jpg"
  , "486", "A Milli", "Lil Wayne", "2009", "https://i1.sndcdn.com/artworks-000160289419-8aqgzh-t500x500.jpg"
  , "485", "212", "Azealia Banks", "2011", "https://i1.sndcdn.com/artworks-T6IQ7FBVkFYQzQ3J-dD7shw-t500x500.jpg"
  , "484", "Buddy Holly", "Weezer", "1994", "https://i.scdn.co/image/ab67616d0000b273345536847e60f622ee0eae96"
  , "483", "I Can’t Help Myself", "Four Tops", "1965", "https://m.media-amazon.com/images/I/511d7FU2SyL._UF1000,1000_QL80_.jpg"
  , "482", "Bad Romance", "Lady Gaga", "2009", "https://cdn.shopify.com/s/files/1/2128/8197/products/2d51814801f511364802294216f1574d_1024x1024.jpg?v=1621561991"
  , "481", "Cross Road Blues", "Robert Johnson", "1937", "https://m.media-amazon.com/images/I/51fc4LbLaOL._UF1000,1000_QL80_.jpg"
  , "480", "Just a Friend", "Biz Markie", "1989", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2Fbiz-markie-just-a-friend.jpg"
  , "479", "Oye Como Va", "Santana", "1970", "https://i.discogs.com/T1MrX_W4ItmlOAppV7nkvL86W4L8kx3_5zzbv9u0WCA/rs:fit/g:sm/q:90/h:495/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODE0/NzAtMTIwNjEwODM0/NS5qcGVn.jpeg"
  , "478", "Back That Azz Up", "Juvenile", "1998", "https://i.scdn.co/image/ab67616d0000b273370a7296e61c5cac42d52c5a"
  , "477", "Our Lips Are Sealed", "The Go-Gos", "1981", "https://images.genius.com/3d22ee4a97ce6bd61f41aaed4810bc56.500x500x1.jpg"
  , "476", "Sunday Morning Coming Down", "Kris Kristofferson", "1970", "https://i.discogs.com/5KuZVUPHvsAFY3cXZw5NSPE_WM4ke3opcDDRb_0ET4E/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NzEx/MjctMTI0MjI5Mjg0/MS5qcGVn.jpeg"
  , "475", "Rhythm Nation", "Janet Jackson", "1989", "https://upload.wikimedia.org/wikipedia/en/1/1c/Janet_Jackson_Rhythm_Nation.png"
  , "474", "Move On Up", "Curtis Mayfield", "1970", "https://images.genius.com/9c1c1a804e291bb9536b9ce9f3701b48.700x700x1.jpg"
  , "473", "Stand By Your Man", "Tammy Wynette", "1968", "https://upload.wikimedia.org/wikipedia/en/1/11/Standbyyourman.jpg"
  , "472", "Solsbury Hill", "Peter Gabriel", "1977", "https://m.media-amazon.com/images/M/MV5BMzI2ZTljNTctNWY0NS00OTI0LWIyOTktMzQ4YzNjOTlhM2NlXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg"
  , "471", "The House of the Rising Sun", "The Animals", "1964", "https://static.stereogum.com/uploads/2018/06/The-Animals-The-House-Of-The-Rising-Sun-1530124841.jpg"
  , "470", "Midnight Train to Georgia", "Gladys Knight and the Pips", "1973", "https://i.scdn.co/image/ab67616d0000b273b259f0c28799e7ffff48c707"
  , "469", "Goodbye Earl", "Dixie Chicks", "2000", "https://i.discogs.com/LVuQsvnWnjvLuP4lgKH09X1sdWKRtSOiGQgry3HdazE/rs:fit/g:sm/q:90/h:517/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1ODY2/ODc0LTE2NzQ1Mjcx/MDUtOTA4NC5qcGVn.jpeg"
  , "468", "Fade Into You", "Mazzy Star", "1993", "https://images.genius.com/8a85fbf4da29ff657270d38d93be7891.1000x990x1.jpg"
  , "467", "Come As You Are", "Nirvana", "1991", "https://upload.wikimedia.org/wikipedia/en/0/06/ComeAsYouAre.jpg"
  , "466", "Never Too Much", "Luther Vandross", "1981", "https://upload.wikimedia.org/wikipedia/en/4/42/Ntm-lv.jpg"
  , "465", "Get Lucky", "Daft Punk", "2013", "https://i1.sndcdn.com/artworks-PbYum0yeCDPc3XyV-lIVNSw-t500x500.jpg"
  , "464", "Help Me", "Joni Mitchell", "1974", "https://upload.wikimedia.org/wikipedia/en/0/06/Joni_Mitchell_Help_Me_cover.jpeg"
  , "463", "Boom Boom", "John Lee Hooker", "1962", "https://m.media-amazon.com/images/I/51tBnd3jBzL._UF1000,1000_QL80_.jpg"
  , "462", "Into the Mystic", "Van Morrison", "1970", "https://i.ytimg.com/vi/pbZf8GY1-Ag/maxresdefault.jpg"
  , "461", "Crying", "Roy Orbison", "1962", "https://m.media-amazon.com/images/I/61c0u1INiDL._UF1000,1000_QL80_.jpg"
  , "460", "Ku Klux Klan", "Steel Pulse", "1978", "https://framemark.vam.ac.uk/collections/2011FA7510/full/735,/0/default.jpg"
  , "459", "No Ordinary Love", "Sade", "1992", "https://i1.sndcdn.com/artworks-pkUjgtyMONnf3yoj-uZwNvQ-t500x500.jpg"
  , "458", "Loser", "Beck", "1993", "https://i.scdn.co/image/ab67616d0000b273b07e5a0787e609bc1f1270f8"
  , "457", "Livin’ on a Prayer", "Bon Jovi", "1986", "https://m.media-amazon.com/images/M/MV5BMjE0ZTVlZTktZjY3My00NDhiLThjZjMtMDlmOGVlNjY0ZjAzXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg"
  , "456", "Summertime Sadness", "Lana Del Rey", "2012", "https://i1.sndcdn.com/artworks-000338788569-fxot50-t500x500.jpg"
  , "455", "White Rabbit", "Jefferson Airplane", "1967", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/White_rabbit.JPG/200px-White_rabbit.JPG"
  , "454", "Bam Bam", "Sister Nancy", "1982", "https://i.scdn.co/image/ab67616d0000b27333c6f21ab00263515f0b0d6d"
  , "453", "The Rain", "Missy Elliot", "1997", "https://images.vice.com/noisey/content-images/article/what-i-learned-about-style-from-missy-elliots-the-rain-supa-dupa-fly/4cab5493f859d9af9c2dd48ddaf1514a.jpg"
  , "452", "Africa", "Toto", "1982", "https://upload.wikimedia.org/wikipedia/en/1/1f/Toto_-_Africa.jpg"
  , "451", "Bad and Boujee", "Migos", "2016", "https://i1.sndcdn.com/artworks-vupBMZS2tvtlsFv4-W7qJaA-t500x500.jpg"
  , "450", "Powderfinger", "Neil Young", "1979", "https://cdn.albumoftheyear.org/album/241333-powderfinger.jpg"
  , "449", "Don’t Fear the Reaper", "Blue Oyster Cult", "1976", "https://i.scdn.co/image/ab67616d0000b2733ac318439ae56ce048d7bf5d"
  , "448", "Tyrone", "Erykah Badu", "1997", "https://i.scdn.co/image/ab67616d0000b273e0ea9746f6d9b5132f2f4e2a"
  , "447", "Help!", "The Beatles", "1965", "https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa"
  , "446", "Rosalita", "Bruce Springsteen", "1973", "https://i.scdn.co/image/ab67616d0000b273d73022dc9141968920b6da3d"
  , "445", "Cosmic Dancer", "T. Rex", "1971", "https://i.scdn.co/image/ab67616d0000b27361a23657edb5d80fa18a630d"
  , "444", "In Da Club", "50 Cent", "2003", "https://i.scdn.co/image/ab67616d0000b273f7f74100d5cc850e01172cbf"
  , "443", "Sugar, We’re Going Down", "Fall Out Boy", "2005", "https://i.scdn.co/image/ab67616d0000b27371565eda831124be86c603d5"
  , "442", "Ace of Spades", "Motorhead", "1980", "https://i.scdn.co/image/ab67616d0000b27340ee1ce9b25037cbe366663e"
  , "441", "The House That Built Me", "Miranda Lambert", "2010", "https://i.scdn.co/image/ab67616d0000b273c771f702f64d760b1be4f2be"
  , "440", "If I Ain’t Got You", "Alicia Keys", "2003", "https://i.scdn.co/image/ab67616d0000b2731a7142b96b2e6c636314559c"
  , "439", "La Vida Es un Carnaval", "Celia Cruz", "1998", "https://i.scdn.co/image/ab67616d0000b2733f265b6afc76d0f74d35df8e"
  , "438", "Savage (Remix)", "Megan Thee Stallion feat. Beyonce", "2020", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ef/fb/93/effb9391-725f-97fe-7030-adc542cfba17/810043683203.jpg/400x400bb.jpg"
  , "437", "Passionate Kisses", "Lucinda Williams", "1988", "https://i.scdn.co/image/ab67616d0000b2731392b88fe5fd1f39ecdd17be"
  , "436", "Call Me Maybe", "Carly Rae Jepsen", "2012", "https://i.scdn.co/image/ab67616d0000b27352d36c5a4e5fd5c7b5ceaa22"
  , "435", "Limelight", "Rush", "1981", "https://i.scdn.co/image/ab67616d0000b27372833c1ae3343cbfb4617073"
  , "434", "Sheena Is a Punk Rocker", "Ramones", "1977", "https://i.scdn.co/image/ab67616d0000b2737ed5367900f7596d7c14345a"
  , "433", "West End Girls", "Pet Shop Boys", "1984", "https://i.scdn.co/image/ab67616d0000b273aa1ab047d779a6b64f207b15"
  , "432", "Summertime Blues", "Eddie Cochran", "1958", "https://i.scdn.co/image/ab67616d0000b273dfa1542c5660c150b8be54f7"
  , "431", "Adore", "Prince", "1987", "https://i.scdn.co/image/ab67616d0000b2733b67e4695d120ebfe9ca359a"
  , "430", "They Reminiscence Over You", "Peter Rock and CL Smooth", "1992", "https://i.discogs.com/5cLH837Hr65N3pwhRk3_6ufgPlFWlw6xndsBQZLx6Dk/rs:fit/g:sm/q:90/h:589/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTg4/MzUtMTIxOTU2MjMz/MC5qcGVn.jpeg"
  , "429", "Under Pressure", "Queen and David Bowie", "1981", "https://i.scdn.co/image/ab67616d0000b27370f9e1cf71793ee37d5e6730"
  , "428", "Sign of the Times", "Harry Styles", "2017", "https://i.scdn.co/image/ab67616d0000b273cf4c6008624aaa58c5ea049a"
  , "427", "Rapper’s Delight", "Sugarhill Gang", "1979", "https://i.scdn.co/image/ab67616d0000b273d628b48dde3db5f07b3bf974"
  , "426", "Super Bass", "Nicki Minaj", "2010", "https://i.scdn.co/image/ab67616d0000b27350b82bf12a01ed8b07738086"
  , "425", "Mannish Boy", "Muddy Waters", "1955", "https://i.scdn.co/image/ab67616d0000b2734fdc0ce43c7bb859625e12b6"
  , "424", "No Diggity", "Blackstreet", "1996", "https://i.scdn.co/image/ab67616d0000b27303ca37157b9ceefbe8fe225b"
  , "423", "Criminal", "Fiona Apple", "1996", "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a"
  , "422", "Flava in Your Ear", "Craig Mack", "1994", "https://i.scdn.co/image/ab67616d0000b273b569934425d9157696a612d4"
  , "421", "How Soon Is Now", "The Smiths", "1984", "https://i.scdn.co/image/ab67616d0000b273786b44c75ebf915866523f5b"
  , "420", "California Dreamin’", "Mamas and the Papas", "1965", "https://i.scdn.co/image/ab67616d0000b273e2597ecbaa6fec8d3c58e34c"
  , "419", "Fantasy", "Mariah Carey", "1995", "https://i.scdn.co/image/ab67616d0000b273749e9bfa78277f30ad2c9a9c"
  , "418", "Green Onions", "Booker T", "1962", "https://i.scdn.co/image/ab67616d00001e0246007ceff2f1c33c9b9ec19c"
  , "417", "Uptown Funk", "Mark Ronson", "2015", "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2"
  , "416", "Alive", "Pearl Jam", "1991", "https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864"
  , "415", "Enjoy the Silence", "Depeche Mode", "1990", "https://i.scdn.co/image/ab67616d0000b273198b72cd638a4ddea81b0b03"
  , "414", "Dreaming", "Blondie", "1979", "https://i.scdn.co/image/ab67616d0000b27344b45662755a96df78978fbd"
  , "413", "Gloria", "Them", "1965", "https://i.scdn.co/image/ab67616d0000b2730a7bf72e95ecd02fdba99010"
  , "412", "Buffalo Stance", "Neneh Cherry", "1988", "https://i.scdn.co/image/ab67616d0000b273790834ab13554b7287183c2a"
  , "411", "Heavy Metal Drummer", "Wilco", "2002", "https://i.scdn.co/image/ab67616d0000b273f53fbb4abe27c792221e5c27"
  , "410", "Whipping Post", "Allman Brother’s Band", "1969", "https://i.scdn.co/image/ab67616d0000b27381f19e21f6b2d06dd695719b"
  , "409", "Everlong", "Foo Fighters", "1997", "https://i.scdn.co/image/ab67616d0000b2730389027010b78a5e7dce426b"
  , "408", "Father and Son", "Cat Stevens", "1970", "https://i.scdn.co/image/ab67616d0000b273d12357f649db780ff1171b06"
  , "407", "Free Bird", "Skynyrd", "1973", "https://i.scdn.co/image/ab67616d0000b273128450651c9f0442780d8eb8"
  , "406", "Sucker MC’s", "Run-DMC", "1984", "https://i.scdn.co/image/ab67616d0000b2730c653d22500b21d83c6e2b82"
  , "405", "Amor Prohibido", "Selena", "1994", "https://i.scdn.co/image/ab67616d0000b273c26a4f2195b3ecf63d2a30ae"
  , "404", "Rock and Roll All Nite", "Kiss", "1974", "https://i.scdn.co/image/ab67616d0000b27365a7b0a6969f0efcde4b5aca"
  , "403", "Ain’t Nobody", "Rufus and Chaka Khan", "1983", "https://i.scdn.co/image/ab67616d0000b273571d461c042642265cd9b55a"
  , "402", "Lovely Day", "Bill Withers", "1977", "https://i.scdn.co/image/ab67616d0000b2735ade9b4d547203c9061fc340"
  , "401", "Go Your Own Way", "Fleetwood Mac", "1977", "https://i.scdn.co/image/ab67616d0000b2735e66bc0df2bd18e746dbb823"
  , "400", "Station to Station", "David Bowie", "1976", "https://i.scdn.co/image/ab67616d0000b2738f3cdfeac0678371b16f601d"
  , "399", "You Make Me Feel (Mighty Real)", "Sylvester", "1978", "https://i.scdn.co/image/ab67616d0000b27385ec5c6768d2f1f8cb15c2c2"
  , "398", "Hungry Like the Wolf", "Duran Duran", "1982", "https://i.scdn.co/image/ab67616d00001e029977eb01e4e40c8357435ef9"
  , "397", "Bring the Noise", "Public Enemy", "1987", "https://i.scdn.co/image/ab67616d0000b273629edfa71810af835f33f431"
  , "396", "Alison", "Elvis Costello", "1977", "https://i.scdn.co/image/ab67616d0000b273008a93d976cfd5a76ba06b9b"
  , "395", "Planet Rock", "Afrika Bambaataa", "1982", "https://i.scdn.co/image/ab67616d00001e020c0a9bf7fb798d352b690215"
  , "394", "Grace", "Jeff Buckley", "1994", "https://i.scdn.co/image/ab67616d0000b2736a760642a56847027428cb61"
  , "393", "Say It Loud", "James Brown", "1968", "https://i.scdn.co/image/ab67616d0000b2732ffd0cdd6eb8d21398d9b6bc"
  , "392", "Fix You", "Coldplay", "2005", "https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651"
  , "391", "Springsteen", "Eric Church", "2011", "https://i.scdn.co/image/ab67616d0000b273c1bc36faa8afff2b5273490b"
  , "390", "Enter Sandman", "Metallica", "1991", "https://i.scdn.co/image/ab67616d0000b273af07dc851962508661bbcfce"
  , "389", "Brass in Pocket", "Pretenders", "1879", "https://i.scdn.co/image/ab67616d0000b27344f7d37c8ee5f8db4379536d"
  , "388", "Party Up (Up in Here)", "DMX", "1999", "https://i.scdn.co/image/ab67616d0000b273cc4509b6a2cb127667b4f8ff"
  , "387", "Personality Crisis", "The New York Dolls", "1973", "https://i.scdn.co/image/ab67616d0000b273802255bd535533c0e2ba5ad2"
  , "386", "Lola", "The Kinks", "1970", "https://i.scdn.co/image/ab67616d0000b27322874c7fad7dee046bd69594"
  , "385", "I’m Coming Out", "Diana Ross", "1980", "https://i.scdn.co/image/ab67616d0000b2735334fdec11d3cee1ba545a56"
  , "384", "I Like It", "Cardi B", "2018", "https://i.scdn.co/image/ab67616d0000b273a0caffda54afd0a65995bbab"
  , "383", "Redbone", "Childish Gambino", "2016", "https://i.scdn.co/image/ab67616d0000b273f78c98bbf2b3c9e2a764203e"
  , "382", "Paper Bag", "Fiona Apple", "1999", "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79"
  , "381", "Typical Girls", "The Slits", "1979", "https://i.scdn.co/image/ab67616d00001e02be5221c8d3d3cbbf67d0c666"
  , "380", "Radiation Vibe", "Fountains of Wayne", "1996", "https://i.scdn.co/image/ab67616d0000b273617ef30bf6fcca94cb473079"
  , "379", "Untitled (How Does It Feel)", "D’Angelo", "2000", "https://i.scdn.co/image/ab67616d0000b2732b3dc336a7a69293c25d9ade"
  , "378", "Mr. Brightside", "The Killers", "2003", "https://i.scdn.co/image/ab67616d0000b273ccdddd46119a4ff53eaf1f5d"
  , "377", "Pictures of You", "The Cure", "1989", "https://i.scdn.co/image/ab67616d0000b273c7ca2db25ad377e022bc3975"
  , "376", "Mama Tried", "Merle Haggard", "1968", "https://i.scdn.co/image/ab67616d0000b273915793347f4c2890b967552c"
  , "375", "Up On the Roof", "Drifters", "1964", "https://i.scdn.co/image/ab67616d0000b273de849f943403165388bff535"
  , "374", "Be Thankful for What You Got", "William DeVaughn", "1974", "https://i.scdn.co/image/ab67616d0000b2738d9fd04051e6057103fd3092"
  , "373", "Hotline Bling", "Drake", "2015", "https://i.scdn.co/image/ab67616d0000b27382469169af5a8750168581ae"
  , "372", "I Can’t Make You Love Me", "Bonnie Raitt", "1991", "https://i.scdn.co/image/ab67616d0000b273a1113af3a19a41dc8eec534e"
  , "371", "Bennie and the Jets", "Elton John", "1973", "https://i.scdn.co/image/ab67616d0000b273f72f1e38e9bd48f18a17ed9b"
  , "370", "Peggy Sue", "Buddy Holly", "1958", "https://i.scdn.co/image/ab67616d0000b27358816b5b546bdc2c0e7f6416"
  , "369", "Just What I Needed", "The Cars", "1978", "https://i.scdn.co/image/ab67616d0000b27361e11cce99aab86cb1ce253b"
  , "368", "Black Hole Sun", "Soundgarden", "1994", "https://i.scdn.co/image/ab67616d0000b273a54d51e8578d020ef3dd7113"
  , "367", "Thinkin’ About You", "Frank Ocean", "2012", "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5"
  , "366", "Da Doo Ron Ron", "The Crystals", "1962", "https://i.scdn.co/image/ab67616d0000b2731d4191fca3c9411d15941797"
  , "365", "God Save the Queen", "The Sex Pistols", "1977", "https://i.scdn.co/image/ab67616d0000b273107150cde7cc9ae20ad46be4"
  , "364", "Box of Rain", "Grateful Dead", "1970", "https://i.scdn.co/image/ab67616d0000b273fd3f66a9ce4371f7ffa0346f"
  , "363", "Could You Be Loved", "Bob Marley", "1980", "https://i.scdn.co/image/ab67616d00001e02387799441ba867649dfbb702"
  , "362", "Merry Go Round", "Kacey Musgraves", "2013", "https://i.scdn.co/image/ab67616d0000b2735c9da0bd1223efd84750312a"
  , "361", "The Harder They Come", "Jimmy Cliff", "1972", "https://i.scdn.co/image/ab67616d0000b27364309e837788c4b0106fbc40"
  , "360", "Little Red Corvette", "Prince", "1982", "https://i.scdn.co/image/ab67616d0000b2734117e531f63855d072059d6e"
  , "359", "Killing Me Softly with His Song", "The Fugees", "1996", "https://i.scdn.co/image/ab67616d0000b2735b7865be7f7fcc05faec6137"
  , "358", "Because the Night", "Patti Smith", "1978", "https://i.scdn.co/image/ab67616d0000b273a28eabe111f67a386e75a31a"
  , "357", "Blank Space", "Taylor Swift", "2014", "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148"
  , "356", "Surrender", "Cheap Trick", "1978", "https://i.scdn.co/image/ab67616d0000b27361e605b2786f724b37f0176d"
  , "355", "Don’t Leave Me This Way", "Thelma Houston", "1976", "https://i.scdn.co/image/ab67616d0000b273d9766d0e8a80e2f65ff7e844"
  , "354", "Rock With You", "Michael Jackson", "1979", "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac"
  , "353", "Sweet Dreams (Are Made of This)", "The Eurythmics", "1983", "https://i.scdn.co/image/ab67616d0000b273b3994c94dfb241923664bb4d"
  , "352", "It Was a Good Day", "Ice Cube", "1992", "https://i.scdn.co/image/ab67616d0000b273994c319841a923465d62e271"
  , "351", "Ponta De Lanca Africano (Umbabarauma)", "Jorge Ben", "1976", "https://i.scdn.co/image/ab67616d0000b2731e9be23ea602929ec4e999a5"
  , "350", "Angel in Montgomery", "John Prine", "1971", "https://images.genius.com/5627632aa795aeed2c531fbe5e5547ee.1000x1000x1.jpg"
  , "349", "Time of the Season", "Zombies", "1968", "https://i.scdn.co/image/ab67616d0000b273aa767414fe395e6543b8da62"
  , "348", "Virginia Plain", "Roxy Music", "1972", "https://i.scdn.co/image/ab67616d0000b273e9b2422823fe249021f13da5"
  , "347", "Heartbreak Hotel", "Elvis", "1956", "https://i.scdn.co/image/ab67616d0000b273402975ba8019ac42b4816548"
  , "346", "Dynamite", "BTS", "2020", "https://i.scdn.co/image/ab67616d00001e022f86d9710377e63bfbc82ba8"
  , "345", "It’s Too Late", "Carole King", "1971", "https://i.scdn.co/image/ab67616d0000b273a22d35c3fbc0f00c1cba691a"
  , "344", "Iron Man", "Black Sabbath", "1971", "https://i.scdn.co/image/ab67616d0000b27343f594be3179178ce058786f"
  , "343", "What a Fool Believes", "The Doobie Brothers", "1979", "https://i.scdn.co/image/ab67616d0000b273ba6340ac3b1653b6ea0e5da5"
  , "342", "Promised Land", "Chuck Berry", "1964", "https://i.scdn.co/image/ab67616d0000b273034b7f06dac4330446ff11c0"
  , "341", "I’m a Believer", "Monkees", "1966", "https://i.scdn.co/image/ab67616d0000b2730b74e9fcbe76d8245535a207"
  , "340", "(White Man) in Hammersmith Palais", "The Clash", "1978", "https://i.scdn.co/image/ab67616d0000b273c05d1a9f2644d461c397d671"
  , "339", "1999", "Prince", "1982", "https://i.scdn.co/image/ab67616d0000b2734117e531f63855d072059d6e"
  , "338", "Paranoid", "Black Sabbath", "1970", "https://i.scdn.co/image/ab67616d0000b273d5fccf9ce08b6a1e7d12a222"
  , "337", "Believe", "Cher", "1998", "https://i.scdn.co/image/ab67616d0000b27361c83e0a3e42be611729c840"
  , "336", "She’s Gone", "Hall and Oates", "1973", "https://i.scdn.co/image/ab67616d0000b2734959f78cc9a050555687c4c2"
  , "335", "Move Your Body (The House Music Anthem)", "Marshall Jefferson", "1986", "https://i.scdn.co/image/ab67616d0000b27349528d4c292e2a81c5b52690"
  , "334", "Ripple", "Grateful Dead", "1970", "https://i.scdn.co/image/ab67616d00001e029f86d303432d5ee64e63f382"
  , "333", "Papa Was a Rollin’ Stone", "The Temptations", "1972", "https://i.scdn.co/image/ab67616d0000b27302d6d8a5f4609ae81fb7ad40"
  , "332", "Umbrella", "Rihanna", "2007", "https://i.scdn.co/image/ab67616d0000b273f9f27162ab1ed45b8d7a7e98"
  , "331", "Please Mr. Postman", "The Marvelettes", "1961", "https://i.scdn.co/image/ab67616d0000b273b09726365de485ac0fe0202f"
  , "330", "Big Poppa", "The Notorious B.I.G.", "1994", "https://i.scdn.co/image/ab67616d0000b273db09958534ac66f9a90d3cf7"
  , "329", "Safaera", "Bad Bunny", "2020", "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0"
  , "328", "Under the Bridge", "Red Hot Chili Peppers", "1991", "https://i.scdn.co/image/ab67616d0000b2735590b4ee88187cb06a5b102d"
  , "327", "Real Love", "Mary J. Blige", "1992", "https://i.scdn.co/image/ab67616d0000b27321110eef2bacdfe409af6903"
  , "326", "Portions for Foxes", "Rilo Kiley", "2004", "https://i.scdn.co/image/ab67616d0000b2737da94a1beda4172d30b74735"
  , "325", "Lust for Life", "Iggy Pop", "1977", "https://i.scdn.co/image/ab67616d0000b2734aa5f679427e35409a06f225"
  , "324", "Scenes from an Italian Restaurant", "Billy Joel", "1977", "https://i.scdn.co/image/ab67616d0000b2736ce61113662ecf693b605ee5"
  , "323", "All I Have to Do Is Dream", "Everly Brothers", "1958", "https://i.scdn.co/image/ab67616d0000b2734934c9839ae3bb7494821f75"
  , "322", "After the Gold Rush", "Neil Young", "1970", "https://i.scdn.co/image/ab67616d0000b2731e52dc7f7425f0c5bc3a4047"
  , "321", "I Still Haven’t Found", "U2", "1987", "https://i.scdn.co/image/ab67616d0000b2730378fba8fe57b59a6244bb62"
  , "320", "California Love", "2Pac", "1995", "https://i.scdn.co/image/ab67616d0000b27387364031183f81349441a45d"
  , "319", "Everybody Wants to Rule the World", "Tears for Fears", "1985", "https://i.scdn.co/image/ab67616d0000b27322463d6939fec9e17b2a6235"
  , "318", "Hound Dog", "Big Mama Thornton", "1953", "https://i.scdn.co/image/ab67616d0000b2730efaa7f20104c1b330544390"
  , "317", "Visions of Johanna", "Bob Dylan", "1966", "https://i.scdn.co/image/ab67616d0000b273c51563a479fa5a4917311197"
  , "316", "Leader of the Pack", "Shangri-Las", "1964", "https://i.scdn.co/image/ab67616d0000b2732f6927af17cf40cde3d45b7f"
  , "315", "Part 1 – Acknowledgement", "John Coltrane", "1965", "https://i.scdn.co/image/ab67616d0000b273cce2f6a2cc0e0ad237d556c9"
  , "314", "I Wanna Be Your Dog", "The Stooges", "1969", "https://i.scdn.co/image/ab67616d0000b273a7d2baa04a56c87de579db69"
  , "313", "The Tears of a Clown", "Smokey Robinson and the Miracles", "1967", "https://i.scdn.co/image/ab67616d0000b273855c2e10b46e09da14e8b3c8"
  , "312", "Walk on By", "Isaac Hayes", "1969", "https://i.scdn.co/image/ab67616d0000b2736c3db7e63a6f392a678635ba"
  , "311", "Hotel California", "Eagles", "1977", "https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778"
  , "310", "Light My Fire", "The Doors", "1967", "https://i.scdn.co/image/ab67616d0000b2735b96a8c5d61be8878452f8f1"
  , "309", "Ain’t No Sunshine", "Bill Withers", "1971", "https://i.scdn.co/image/ab67616d0000b273e1e350d06ffebd2e19e047ce"
  , "308", "Divorce Song", "Liz Phair", "1993", "https://i.scdn.co/image/ab67616d0000b273cf8d88d45dfceb2d65be8f92"
  , "307", "Crazy", "Gnarls Barkley", "2006", "https://i.scdn.co/image/ab67616d0000b27361a13426a99fd3500e2fff54"
  , "306", "Chain of Fools", "Aretha Franklin", "1967", "https://i.scdn.co/image/ab67616d0000b273f24dc0540957843ee479e090"
  , "305", "Every Breath You Take", "The Police", "1983", "https://i.scdn.co/image/ab67616d0000b273c8e97cafeb2acb85b21a777e"
  , "304", "Trans-Europe Express", "Kraftwerk", "1977", "https://i.scdn.co/image/ab67616d0000b2737cf7be893131178035b2a3cb"
  , "303", "No Scrubs", "TLC", "1999", "https://i.scdn.co/image/ab67616d0000b27361ffafd5e31a37336531cf95"
  , "302", "Wish You Were Here", "Pink Floyd", "1975", "https://i.scdn.co/image/ab67616d0000b2731a84d71391df7469c5ab8539"
  , "301", "Night Moves", "Bob Seger", "1978", "https://i.scdn.co/image/ab67616d0000b273676a8230a422123e8012557e"
  , "300", "Rock Lobster", "B-52s", "1978", "https://i.scdn.co/image/ab67616d0000b2739e2d3bc7ecb09e5124cd3f97"
  , "299", "I Put a Spell on You", "Jay Hawkins", "1956", "https://i.scdn.co/image/ab67616d0000b273c8a1366f0f2073775e931aa3"
  , "298", "Jungleland", "Bruce Springsteen", "1975", "https://i.scdn.co/image/ab67616d00001e02503143a281a3f30268dcd9f9"
  , "297", "Wouldn’t It Be Nice", "Beach Boys", "1966", "https://i.scdn.co/image/ab67616d0000b27330165560a27ea0d2c87ee783"
  , "296", "Rebel Girl", "Bikini Kill", "1996", "https://i.scdn.co/image/ab67616d0000b2735d51cc215a4e6cdf1f96e4da"
  , "295", "Won’t Get Fooled Again", "The Who", "1971", "https://i.scdn.co/image/ab67616d0000b273fe24dcd263c08c6dd84b6e8c"
  , "294", "Sweet Jane", "Velvet Underground", "1970", "https://i.scdn.co/image/ab67616d0000b273a6d589272dca67a07a00c8a8"
  , "293", "School’s Out", "Alice Cooper", "1973", "https://i.scdn.co/image/ab67616d0000b2738bd7862946837e32f4a992db"
  , "292", "Can I Kick it", "A Tribe Called Quest", "1990", "https://i.scdn.co/image/ab67616d0000b2734ba1fe238a517021ebcc2ace"
  , "291", "In the Air Tonight", "Phil Collins", "1981", "https://i.scdn.co/image/ab67616d0000b273a39dbea6427fc0918e873956"
  , "290", "Yeah", "Usher", " 2004", "https://i.scdn.co/image/ab67616d0000b27332dd19e4ec1ec8e56a84c57e"
  , "289", "Atlantic City", "Bruce Springsteen", "1982", "https://i.scdn.co/image/ab67616d0000b2738935cadb8e3e20d9fab4582e"
  , "288", "That’s the Joint", "The Funky Four Plus One", "1980", "https://i.scdn.co/image/ab67616d00001e021516e90b2da0304fe9b37383"
  , "287", "You Shook Me All Night Long", "AC/DC", "1980", "https://i.scdn.co/image/ab67616d0000b2730b51f8d91f3a21e8426361ae"
  , "286", "Dancing Queen", "ABBA", "1976", "https://i.scdn.co/image/ab67616d0000b27370f7a1b35d5165c85b95a0e0"
  , "285", "Say My Name", "Destiny’s Child", "1999", "https://i.scdn.co/image/ab67616d0000b273a9a9c46edfae707aa9e884c0"
  , "284", "Suzanne", "Leonard Cohen", "1967", "https://i.scdn.co/image/ab67616d0000b2730633b57b08b40f3e776e7151"
  , "283", "Georgia On My Mind", "Ray Charles", "1960", "https://i.scdn.co/image/ab67616d0000b273df3d459abce953d24caf1f91"
  , "282", "Never Tear Us Apart", "INXS", "1988", "https://i.scdn.co/image/ab67616d0000b2734053ce7818f114a4e8dde08f"
  , "281", "Grindin", "Clipse", " 2002", "https://i.scdn.co/image/ab67616d0000b27395bf7f7dac7b61a95d47f07e"
  , "280", "Penny Lane", "The Beatles", "1967", "https://i.scdn.co/image/ab67616d0000b273a01519f3165de1efbcfdd8eb"
  , "279", "Karma Police", "Radiohead", "1997", "https://i.scdn.co/image/ab67616d0000b2733a975c49f951a661b30b6677"
  , "278", "Pressure Drop", "Toots and the Maytals", "1970", "https://i.scdn.co/image/ab67616d0000b273db393a8185b8a6a63a2e13c7"
  , "277", "Bo Diddley", "Bo Diddley", "1955", "https://i.scdn.co/image/ab67616d0000b273703167a3f16c5476e5b94fe7"
  , "276", "Ever Fallen in Love", "Buzzcocks", "1977", "https://i.scdn.co/image/ab67616d0000b273409373691d3c2025c7d5f846"
  , "275", "Sail Away", "Randy Newman", "1972", "https://i.scdn.co/image/ab67616d0000b273f761183d5e7c7721c0daf87a"
  , "274", "Love and Happiness", "Al Green", "1972", "https://i.scdn.co/image/ab67616d0000b273baa93bdfa04d874f12463ae1"
  , "273", "Killing Me Softly With His Song", "Roberta Flack", "1973", "https://i.scdn.co/image/ab67616d0000b2737ff730d1580c27bc461d0ccf"
  , "272", "The Boys are Back in Town", "Thin Lizzy", "1976", "https://i.scdn.co/image/ab67616d0000b273bb6e24a141d5af7d45fcbfdb"
  , "271", "A Whiter Shade of Pale", "Procol Harum", "1967", "https://i.scdn.co/image/ab67616d0000b27309579350a1e881fcb8744665"
  , "270", "Closer", "Nine Inch Nails", "1994", "https://i.scdn.co/image/ab67616d0000b273b9fd763264680ce425a4d545"
  , "269", "Unchained Melody", "The Righteous Brothers", "1965", "https://i.scdn.co/image/ab67616d0000b2731682e25596b8ecccb47644d1"
  , "268", "Shout (Parts 1 and 2)", "The Isley Brothers", "1959", "https://i.scdn.co/image/ab67616d0000b273509a7a314735c4272429f73d"
  , "267", "Take Care", "Drake", "2011", "https://i.scdn.co/image/ab67616d0000b2737893285c1d43056deff72d0c"
  , "266", "King Tubby Meets the Rockers Uptown", "Augustus Pablo", "1974", "https://i.scdn.co/image/ab67616d0000b27319c9adf4ba9f133ef949d400"
  , "265", "Left of the Dial", "The Replacements", "1985", "https://i.scdn.co/image/ab67616d0000b2732a751da896677300abf486cd"
  , "264", "Let’s Get It On", "Marvin Gaye", "1973", "https://i.scdn.co/image/ab67616d0000b273320f0f0bb4eae1a2596db77c"
  , "263", "Coat of Many Colors", "Dolly Parton", "1971", "https://i.scdn.co/image/ab67616d0000b2735eedc4901818fe24d8645672"
  , "262", "American Tune", "Paul Simon", "1973", "https://i.scdn.co/image/ab67616d0000b2737075e4870a7c2e55f28045ce"
  , "261", "Pusherman", "Curtis Mayfield", "1972", "https://i.scdn.co/image/ab67616d0000b27307b7db689327e99ad5602d57"
  , "260", "Get Up Stand Up", "The Wailers", "1973", "https://i.scdn.co/image/ab67616d0000b273c02d7fe5cab5fd549259bfa6"
  , "259", "Heart of Gold", "Neil Young", "1972", "https://i.scdn.co/image/ab67616d0000b273502eba77354073708a8aeacb"
  , "258", "The Revolution Will Not Be Televised", "Gil-Scott Heron", "1971", "https://i.scdn.co/image/ab67616d0000b2733d13ebf7abf43e02466c5bd1"
  , "257", "Heat Wave", "Martha and the Vandellas", "1963", "https://i.scdn.co/image/ab67616d0000b273d42d2f33bd2cafdc4f3d01be"
  , "256", "Master of Puppets", "Metallica", "1986", "https://i.scdn.co/image/ab67616d0000b2736976009675621c80cafa1ff5"
  , "255", "Coal Miner’s Daughter", "Loretta Lynn", "1970", "https://i.scdn.co/image/ab67616d0000b273105efc7e27696434d265db1b"
  , "254", "Stop! In the Name of Love", "The Supremes", "1965", "https://i.scdn.co/image/ab67616d0000b2732582d406ebd502ab5be590fb"
  , "253", "Blue Eyes Crying in the Rain", "Willie Nelson", "1975", "https://i.scdn.co/image/ab67616d0000b2730e5489389aa853f454a4b1e8"
  , "252", "Flash Light", "Parliament", "1977", "https://i.scdn.co/image/ab67616d0000b273dadce998f88dba71c98adf88"
  , "251", "I Will Survive", "Gloria Gaynor", "1978", "https://i.scdn.co/image/ab67616d0000b2738fe438c0dce2d985ba65197c"
  , "250", "Purple Haze", "Jimi Hendrix", "1967", "https://i.scdn.co/image/ab67616d0000b273c9adfbd773852e286faed040", "249", "Bad Reputation", "Joan Jett", "1980", "https://i.scdn.co/image/ab67616d0000b27362fd371e5b36f3e1ca3fab92"
  , "248", "Straight Outta Compton", "N.W.A.", "1988", "https://i.scdn.co/image/ab67616d0000b273c79a70e8167cc1a4fab83781"
  , "247", "River", "Joni Mitchell", "1971", "https://i.scdn.co/image/ab67616d0000b273e9f77be85457110ebf304da7"
  , "246", "Ooh La La", "Faces", "1973", "https://i.scdn.co/image/ab67616d0000b273416f18056ac5d7281d8a5878"
  , "245", "Sabotage", "Beastie Boys", "1994", "https://i.scdn.co/image/ab67616d0000b273436a305db8bd85b820da3e5a"
  , "244", "Summer Babe (Winter Version)", "Pavement", "1992", "https://i.scdn.co/image/ab67616d0000b273fd31dbca3d0757fcb196d5af"
  , "243", "Eleanor Rigby", "The Beatles", "1966", "https://i.scdn.co/image/ab67616d0000b27328b8b9b46428896e6491e97a"
  , "242", "Great Balls of Fire", "Jerry Lee Lewis", "1957", "https://i.scdn.co/image/ab67616d0000b2732f5ef5aa5d498bb577d62529"
  , "241", "The Humpty Dance", "The Digital Underground", "1990", "https://i.scdn.co/image/ab67616d00001e02583f0ebff7dce26f8998513d"
  , "240", "I Want It That Way", "Backstreet Boys", "1999", "https://i.scdn.co/image/ab67616d00001e02dafd4b9261a1ab9acd53a53d"
  , "239", "September Gurls", "Big Star", "1974", "https://i.scdn.co/image/ab67616d0000b273471e287a6c0dd5e063059c55"
  , "238", "Are You That Somebody", "Aaliyah", "1998", "https://i.scdn.co/image/ab67616d0000b2732f5d91257d66a6038ede4087"
  , "237", "Your Cheatin’ Heart", "Hank Williams", "1953", "https://i.scdn.co/image/ab67616d0000b2731a9e31a2daf30933d24acb64"
  , "236", "Lean on Me", "Bill Withers", "1972", "https://i.scdn.co/image/ab67616d0000b273f8560af696925c50080dcc35"
  , "235", "Blue Monday", "New Order", "1983", "https://i.scdn.co/image/ab67616d0000b27394671a690ddd528f2cd8cafd"
  , "234", "You Keep Me Hangin’ On", "Supremes", "1966", "https://i.scdn.co/image/ab67616d0000b2735422769f395bd15413e208ad"
  , "233", "Groove Is in the Heart", "Deee-Lite", "1990", "https://i.scdn.co/image/ab67616d0000b273cbcb5083c56df2a557625bca"
  , "232", "My Generation", "The Who", "1965", "https://i.scdn.co/image/ab67616d0000b27334658b1827b64a1d4d5a5ca9"
  , "231", "I Wanna Dance with Somebody", "Whitney Houston", "1987", "https://i.scdn.co/image/ab67616d0000b273316cb816200bb0d21df71f2c"
  , "230", "Mr. Tambourine Man", "The Byrds", "1965", "https://i.scdn.co/image/ab67616d0000b273576fccf9a91d9f7c808b8abd"
  , "229", "This Land is Your Land", "Woody Guthrie", "1951", "https://i.scdn.co/image/ab67616d0000b27376c23464149dd9f6204896fc"
  , "228", "Single Ladies", "Beyonce", "2008", "https://i.scdn.co/image/ab67616d0000b27313f0cc2d042ef327f10067cb"
  , "227", "Fortunate Son", "CCR", "1969", "https://i.scdn.co/image/ab67706c0000da84c82262470a1b092e5a849cc6"
  , "226", "There Is a Light That Never Goes Out", "The Smiths", "1986", "https://i.scdn.co/image/ab67616d00001e0218390ec9e1c5b97e6f07a42e"
  , "225", "Both Sides Now", "Joni Mitchell", "1969", "https://i.scdn.co/image/ab67616d0000b273f4df89e6b6af4ce95e220b2c"
  , "224", "Layla", "Derek and the Dominoes", "1970", "https://i.scdn.co/image/ab67616d00001e02fbcaf7402f38faac27610efc"
  , "223", "Stan", "Eminem", "2000", "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
  , "222", "Suite: Judy Blue Eyes", "Crosby, Stills & Nash", "1969", "https://i.scdn.co/image/ab67616d0000b273a32339b8818323380682a889"
  , "221", "River Deep – Mountain High", "Ike and Tina Turner", "1966", "https://i.scdn.co/image/ab67616d0000b27384b17e572f7e0ab861e9b608"
  , "220", "Bizarre Love Triangle", "New Order", "1986", "https://i.scdn.co/image/ab67616d0000b273e3d90be6dde6acbc45f8ac2b"
  , "219", "Free Fallin’", "Tom Petty", "1989", "https://i.scdn.co/image/ab67616d0000b27336572e6726714544f5bed456"
  , "218", "In the Midnight Hour", "Wilson Pickett", "1965", "https://i.scdn.co/image/ab67616d0000b273cb87f62b98324304cfbb7de9"
  , "217", "Edge of Seventeen", "Stevie Nicks", "1981", "https://i.scdn.co/image/ab67616d0000b2732614c295a38ee782d093aa09"
  , "216", "Jailhouse Rock", "Elvis", "1957", "https://i.scdn.co/image/ab67616d0000b27332230606c80ac8d006d4f440"
  , "215", "Shook Ones (Pt. II)", "Mobb Deep", "1995", "https://i.scdn.co/image/ab67616d0000b273a2203fa0656cede30f879b97"
  , "214", "Deacon Blues", "Steely Dan", "1977", "https://i.scdn.co/image/ab67616d0000b2733b4cadd2c04316e5968dae33"
  , "213", "Paint It Black", "The Rolling Stones", "1966", "https://i.scdn.co/image/ab67616d0000b273e33b92dd515979177fbc2905"
  , "212", "More Than a Feeling", "Boston", "1976", "https://i.scdn.co/image/ab67616d0000b27390ef9760e57fafd8f966d17a"
  , "211", "With or Without You", "U2", "1987", "https://i.scdn.co/image/ab67616d0000b2730378fba8fe57b59a6244bb62"
  , "210", "One Nation Under a Groove", "Funkadelic", "1978", "https://i.scdn.co/image/ab67616d0000b273b3603759ca95b7c3c35e8eca"
  , "209", "Boys of Summer", "Don Henley", "1984", "https://i.scdn.co/image/ab67616d0000b273e59d7ff5a9d7634c02135b19"
  , "208", "Doll Parts", "Hole", "1994", "https://i.scdn.co/image/ab67616d0000b273be245e5b673371e6f95b19e2"
  , "207", "Killing in the Name", "Rage Against the Machine", "1992", "https://i.scdn.co/image/ab67616d0000b2737676c7bf4e667590e496c2a3"
  , "206", "Wichita Lineman", "Glen Campbell", "1968", "https://i.scdn.co/image/ab67616d0000b273b367fb90309a051f8aaacc9a"
  , "205", "…Baby One More Time", "Britney Spears", "1998", "https://i.scdn.co/image/ab67616d0000b2738e49866860c25afffe2f1a02"
  , "204", "Young Americans", "David Bowie", "1975", "https://i.scdn.co/image/ab67616d0000b273f293ada208f20d0401a3930e"
  , "203", "Signed, Sealed, Delivered, I’m Yours", "Stevie Wonder", "1970", "https://i.scdn.co/image/ab67616d0000b273c5e9e847ca9c0982b4c91d4b"
  , "202", "Your Song", "Elton John", "1970", "https://i.scdn.co/image/ab67616d0000b273285a5c29d3b2d05895781820"
  , "201", "Ring of Fire", "Johnny Cash", "1963", "https://i.scdn.co/image/ab67616d0000b27318a4eefa79d659cdab1bc93d"
  , "200", "Changes", "David Bowie", "1971", "https://i.scdn.co/image/ab67616d0000b2734650d205576bb7a6c3ef5967"
  , "199", "Dream On", "Aerosmith", "1973", "https://i.scdn.co/image/ab67616d0000b273b11078ee23dcd99e085ac33e"
  , "198", "Sexual Healing", "Marvin Gaye", "1982", "https://i.scdn.co/image/ab67616d0000b27346e859872ed30a898160aeb2"
  , "197", "I Can’t Stand the Rain", "Ann Peebles", "197​​3", "https://i.scdn.co/image/ab67616d0000b273851d0d8d19e0ec2209f9bfee"
  , "196", "Sex Machine", "James Brown", "1970", "https://i.scdn.co/image/ab67616d0000b27373ff0735e70a50644d5b0e41"
  , "195", "Crazy", "Patsy Cline", "1961", "https://i.scdn.co/image/ab67616d0000b2736fda96b0954b958ee44c8efc"
  , "194", "Rid of Me", "PJ Harvey", "1993", "https://i.scdn.co/image/ab67616d0000b2733fad203d6299250042454124"
  , "193", "Wild Horses", "Rolling Stones", "1971", "https://i.scdn.co/image/ab67616d00001e021ef081dee4fbaf4f4de9d41b"
  , "192", "Mind Playing Tricks on Me", "Geto Boys", "1991", "https://i.scdn.co/image/ab67616d0000b273e91f3ec3f8d0fcbe8453639d"
  , "191", "Ode to Billie Joe", "Bobby Gentry", "1967", "https://i.scdn.co/image/ab67616d0000b273c052a03d8f5e9e2bff95b99d"
  , "190", "Fuck the Police", "N.W.A.", "1988", "https://i.scdn.co/image/ab67616d0000b273c79a70e8167cc1a4fab83781"
  , "189", "Space Oddity", "David Bowie", "1969", "https://i.scdn.co/image/ab67616d0000b2738893e4036c404e53ca28e153"
  , "188", "Little Wing", "Jimi Hendrix", "1967", "https://i.scdn.co/image/ab67616d0000b2737bfdcc5707e04f9418d2b69d"
  , "187", "Subterranean Homesick Blues", "Bob Dylan", "1965", "https://i.scdn.co/image/ab67616d0000b273f86dfb435345270049a75af9"
  , "186", "I’ll Take You There", "Staple Singers", "1972", "https://i.scdn.co/image/ab67706c0000da84840a2a6b7129fb1f6dfa32cf"
  , "185", "Beat It", "Michael Jackson", "1982", "https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97"
  , "184", "Nothing Compares to U", "Sinead O’Connor", "1990", "https://i.scdn.co/image/ab67616d0000b2734eeefa0555b6f8cc88df9ffe"
  , "183", "You Are the Sunshine of My Life", "Stevie Wonder", "1972", "https://i.scdn.co/image/ab67616d00001e02cab4dfee401a04dacfa11784"
  , "182", "The Sounds of Silence", "Simon and Garfunkel", "1964", "https://i.scdn.co/image/ab67616d0000b27344a8aa7ac5c2e2defbfd702b"
  , "181", "Eight Miles High", "The Byrds", "1966", "https://i.scdn.co/image/ab67616d0000b2733f07e7daf8ef639ec8263b19"
  , "180", "Walk on the Wild Side", "Lou Reed", "1972", "https://i.scdn.co/image/ab67616d00001e02bbe3dc03e39e2914a41f3039"
  , "179", "Comfortably Numb", "Pink Floyd", "1979", "https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf"
  , "178", "Bad Guy", "Billie Eilish", "2019", "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce"
  , "177", "Jump", "Van Halen", "1983", "https://i.scdn.co/image/ab67616d0000b2733dc04fbef2564a6f228ba7b8"
  , "176", "You Really Got Me", "The Kinks", "1964", "https://i.scdn.co/image/ab67616d0000b2731f647206e2dcec5dd7f60f0c"
  , "175", "I Only Have Eyes for You", "Flamingos", "1959", "https://i.scdn.co/image/ab67616d00001e02554d20be426f669d71596d4f"
  , "174", "Radio Free Europe", "R.E.M.", "1983", "https://i.scdn.co/image/ab67616d0000b273fe05afa9ef05c2ba87e0e860"
  , "173", "Marquee Moon", "Television", "1977", "https://i.scdn.co/image/ab67616d0000b27318b36d985b0ae01163ca9cf6"
  , "172", "Mississippi Goddam", "Nina Simone", "1964", "https://i.scdn.co/image/ab67616d0000b273c1f283569c2574976a27f60b​​"
  , "171", "What a Wonderful World", "Louis Armstrong", "1967", "https://i.scdn.co/image/ab67616d0000b273845a5660b804e5f3e821fbed"
  , "170", "In the Still of the Nite", "Five Satins", "1956", "https://i.scdn.co/image/ab67616d0000b2738db5db0c73ae6546ce768534"
  , "169", "American Girl", "Tom Petty", "1976", "https://i.scdn.co/image/ab67616d0000b2737e42a53ea7f2ad4f36ab23a5"
  , "168", "‘Son of a Preacher Man", "Dusty Springfield", "1968", "https://i.scdn.co/image/ab67616d0000b273f1bb363f80233c2c3cb65c79"
  , "167", "Lose Yourself", "Eminem", "2002", "https://i.scdn.co/image/ab67616d0000b273968da85f248a7e7747767801"
  , "166", "All the Young Dudes", "Mott the Hoople", "1972", "https://i.scdn.co/image/ab67616d0000b2735f6f404085bdccaa0f7946e5"
  , "165", "I’m So Lonesome I Could Cry", "Hank Williams", "1949", "https://i.scdn.co/image/ab67616d0000b2736320ce983d16a1720f2359b2"
  , "164", "Mr. Tambourine Man", "Bob Dylan", "1965", "https://i.scdn.co/image/ab67616d0000b2733b812eed53f0d7e134fe446e"
  , "163", "Landslide", "Fleetwood Mac", "1975", "https://i.scdn.co/image/ab67616d0000b2734fb043195e8d07e72edc7226"
  , "162", "Pink Moon", "Nick Drake", "1972", "https://i.scdn.co/image/ab67616d0000b273e369195caf5d169bf5e9eafc"
  , "161", "Into the Groove", "Madonna", "1985", "https://i.scdn.co/image/ab67616d0000b2731fc9fd5d701ee05cb39b7b19"
  , "160", "Nightswimming", "R.E.M.", "1992", "https://i.scdn.co/image/ab67616d0000b273324b2db0ac7770afa76a647a"
  , "159", "Baba O’Riley", "The Who", "1971", "https://i.scdn.co/image/ab67616d0000b2733d9a3f6e207a8ff033a25636"
  , "158", "Cissy Strut", "Meters", "1969", "https://i.scdn.co/image/ab67616d0000b273f679e710b37b7491472d86f5"
  , "157", "Teenage Riot", "Sonic Youth", "1988", "https://i.scdn.co/image/ab67616d00001e02b690940b6544fb39bf3653d2"
  , "156", "Louie Louie", "The Kingsmen", "1963", "https://i.scdn.co/image/ab67616d0000b273901898df0fdfb1f492b674d1"
  , "155", "Last Nite", "The Strokes", "2001", "https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4"
  , "154", "Spoonful Howlin’", "Wolf", "1960", "https://i.scdn.co/image/ab67616d0000b27302a1dd1ceb2a99f137e3a17e"
  , "153", "Super Freak", "James Brown", "1981", "https://i.scdn.co/image/ab67616d00001e02c1c69c9e76fa824c084470ee"
  , "152", "Proud Mary", "CCR", "1969", "https://pbs.twimg.com/media/DxJnTdlU0AAUa4F.jpg"
  , "151", "Will You Love Me Tomorrow", "Shirelles", "1960", "https://i.scdn.co/image/ab67616d0000b2736e71a19ca3b9c525c94a7b7a"
  , "150", "Basket Case", "Green Day", "1994", "https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d"
  , "149", "Rocket Man", "Elton John", "1972", "https://i.scdn.co/image/ab67616d0000b2733009007708ab5134936a58b3"
  , "148", "Kashmir", "Led Zeppelin", "1975", "https://i.scdn.co/image/ab67616d0000b27322f1b6c28ce5735646b2e569"
  , "147", "Blueberry Hill", "Fats Domino", "1956", "https://i.scdn.co/image/ab67616d0000b27374e3823e9643fabc830851dd"
  , "146", "Fire and Rain", "James Taylor", "1970", "https://i.scdn.co/image/ab67616d0000b273b3adf9b1706b05af854bbad4"
  , "145", "Ms. Jackson", "Outkast", "2000", "https://i.scdn.co/image/ab67616d0000b2732350e31bc346a6c20e9de166"
  , "144", "Jumpin’ Jack Flash", "Rolling Stones", "1968", "https://i.scdn.co/image/ab67616d0000b273a21d071d80f1d2c1059f64fb"
  , "143", "London Calling", "The Clash", "1980", "https://i.scdn.co/image/ab67616d0000b273cd9d8bc9ef04014b6e90e182"
  , "142", "He Stopped Loving Her Today", "George Jones", "1980", "https://i.scdn.co/image/ab67616d0000b27370baa048c4fdcc6c8152f399"
  , "141", "Maggie May", "Rod Stewart", "1971", "https://i.scdn.co/image/ab67616d0000b273f20825485137abccd82b9665"
  , "140", "No Woman No Cry", "Bob Marley", "1975", "https://i.scdn.co/image/ab67616d0000b273b5a0ee94e2741374ce5c71a2"
  , "139", "Vogue", "Madonna", "1990", "https://i.scdn.co/image/ab67616d0000b2731fc9fd5d701ee05cb39b7b19"
  , "138", "Heart of Glass", "Blondie", "1979", "https://i.scdn.co/image/ab67616d0000b2735857aaeef64c617735e8dc70"
  , "137", "Thank U, Next", "Ariana Grande", "2019", "https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8"
  , "136", "Try a Little Tenderness", "Otis Redding", "1966", "https://i.scdn.co/image/ab67616d0000b273ffffe932598090498459b77c"
  , "135", "She Loves You", "The Beatles", "1964", "https://i.scdn.co/image/ab67616d0000b273d9fad221661123b9ca31015d"
  , "134", "What’s Love Got to Do With It", "Tina Turner", "1984", "https://i.scdn.co/image/ab67616d0000b273e9c361da971c6e81b51ef06b"
  , "133", "Don’t Stop Believin’", "Journey", "1981", "https://i.scdn.co/image/ab67616d0000b273c5653f9038e42efad2f8a266"
  , "132", "Paid in Full", "Eric B. and Rakim", "1987", "https://i.scdn.co/image/ab67616d0000b273d9a71c225d94b8cb6638bb91"
  , "131", "Stand by Me", "Ben E. King", "1961", "https://i.scdn.co/image/ab67616d0000b273557c73b5b1085c827171ec48"
  , "130", "Dancing in the Street", "Martha and the Vandellas", "1964", "https://i.scdn.co/image/ab67616d0000b273fc466e0c9ac165ac85ddbedf"
  , "129", "Hold On We’re Going Home", "Drake", "2013", "https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
  , "128", "Whole Lotta Love", "Led Zeppelin", "1969", "https://i.scdn.co/image/ab67616d0000b273fc4f17340773c6c3579fea0d"
  , "127", "Waterfalls", "TLC", "1995", "https://i.scdn.co/image/ab67616d0000b273a6125b1964a555892c49ea53"
  , "126", "Freedom! ‘90", "George Michael", "1990", "https://i.scdn.co/image/ab67616d0000b27364c19b24ce947ffa363f8f96"
  , "125", "Anarchy in the U.K.", "The Sex Pistols", "1977", "https://i.scdn.co/image/ab67616d0000b273b691fa29c123b5fc4bc5d469", "124", "That’ll Be the Day", "Buddy Holly", "1957", "https://i.scdn.co/image/ab67616d0000b273085751ccca901e9bbc25a816"
  , "123", "This Must Be the Place (Naïve Melody)", "Talking Heads", "1983", "https://i.scdn.co/image/ab67616d0000b273e35e2e2a4bfa8a30a78fc532"
  , "122", "People Get Ready", "Impressions", "1965", "https://i.scdn.co/image/ab67616d0000b2731ae893c8b27d4180044f6293"
  , "121", "Let It Be", "The Beatles", "1970", "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1"
  , "120", "Oh Bondage! Up Yours!", "X-Ray Spex", "1977", "https://i.scdn.co/image/ab67616d0000b2739020af2f4d04d70a3f8d627f"
  , "119", "I Heard It Through the Grapevine", "Marvin Gaye", "1968", "https://i.scdn.co/image/ab67616d0000b27360f5e8d519591d51e533e822"
  , "118", "Creep", "Radiohead", "1992", "https://i.scdn.co/image/ab67616d0000b273df55e326ed144ab4f5cecf95"
  , "117", "I Say a Little Prayer", "Aretha Franklin", "1968", "https://i.scdn.co/image/ab67616d0000b27346c31f64babcbfca6e061b6b"
  , "116", "It Takes Two", "Rob Base and DJ E-Z Rock", "1988", "https://i.scdn.co/image/ab67616d0000b2738326ebde417fbd72f39b2525"
  , "115", "At Last", "Etta James", "1960", "https://i.scdn.co/image/ab67616d0000b273b2229a8fdf377abaf3652624"
  , "114", "Toxic", "Britney Spears", "2003", "https://i.scdn.co/image/ab67616d0000b27363f2ab77b3fb759d5a7ce6f9"
  , "113", "Higher Ground", "Stevie Wonder", "1973", "https://i.scdn.co/image/ab67616d0000b273ea8ab1a548312b79ac955266"
  , "112", "Losing My Religion", "REM", "1991", "https://i.scdn.co/image/ab67616d0000b2734cd3ea41cc91a8647386a63a"
  , "111", "Thunder Road", "Bruce Springsteen", "1975", "https://i.scdn.co/image/ab67616d0000b27383d14c23eda568810851c3f2"
  , "110", "Something", "The Beatles", "1969", "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25"
  , "109", "Everyday People", "Sly and the Family Stone", "1968", "https://i.scdn.co/image/ab67616d0000b2738e324576ae244b9f00c0445c"
  , "108", "Just Like Heaven", "The Cure", "1987", "https://i.scdn.co/image/ab67616d0000b2737f22337546d61faca55e0f4f"
  , "107", "C.R.E.A.M.", "Wu-Tang Clan", "1994", "https://i.scdn.co/image/ab67616d0000b2735901aaa980d3e714bf01171c"
  , "106", "Sympathy for the Devil", "The Rolling Stones", "1968", "https://i.scdn.co/image/ab67616d0000b27317048a2c66cf07b350eb42ef"
  , "105", "Life on Mars?", "David Bowie", "1971", "https://i.scdn.co/image/ab67616d0000b273e464904cc3fed2b40fc55120"
  , "104", "I Want You Back", "Jackson 5", "1969", "https://i.scdn.co/image/ab67616d0000b27316aaf05fe82237576a7d0e38"
  , "103", "You Oughta Know", "Alanis Morissette", "1995", "https://i.scdn.co/image/ab67616d0000b273fa48096c3c9f2fc701935779"
  , "102", "Maybelline", "Chuck Berry", "1955", "https://i.scdn.co/image/ab67616d00001e025a26f817e83936bbbd547d1c"
  , "101", "Maps", "Yeah Yeah Yeahs", "2003", "https://i.scdn.co/image/ab67616d0000b2731b1cb4ef0f096f9d66fc3dc6"
  , "100", "Blowin’ in the Wind", "Bob Dylan", "1963", "https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573"
  , "99", "‘Stayin’ Alive", "Bee Gees", "1977", "https://i.scdn.co/image/ab67616d0000b27355fb38fda5321a8923911ff9"
  , "98", "In My Life", "The Beatles", "1965", "https://i.scdn.co/image/ab67616d0000b273ed801e58a9ababdea6ac7ce4"
  , "97", "Gloria", "Patti Smith", "1975", "https://i.scdn.co/image/ab67616d0000b273b0c9e372ad6871a2460fc739"
  , "96", "99 Problems", "Jay-Z", "2003", "https://i.scdn.co/image/ab67616d0000b2734a82b4bf046a75bdbcc96caa"
  , "95", "Wonderwall", "Oasis", "1995", "https://i.scdn.co/image/ab67616d0000b2732f2eeee9b405f4d00428d84c"
  , "94", "I Will Always Love You", "Whitney Houston", "1992", "https://i.scdn.co/image/ab67616d0000b27301c2b5d210438996e7657ec0"
  , "93", "Since U Been Gone", "Kelly Clarkson", "2004", "https://i.scdn.co/image/ab67616d0000b27303dadde4d9d305c1c3e0d91c"
  , "92", "Good Golly Miss Molly", "Little Richard", "1958", "https://i.scdn.co/image/ab67616d0000b2738d1b7ebdebe8d2125183e2d3"
  , "91", "Int’l Players Anthem (I Choose You)", "UKG", "2007", "https://i.scdn.co/image/ab67616d0000b2730ecd0dec7edf87dab40d19b7"
  , "90", "You Make Me Feel Like a Natural Woman", "Aretha Franklin", "1967", "https://i.scdn.co/image/ab67616d0000b273e6a69c02a6792482cfda36fe"
  , "89", "Hey Jude", "The Beatles", "1968", "https://i.scdn.co/image/ab67616d0000b2734c36963e5077d9f127341fc2"
  , "88", "Sweet Child O’ Mine", "Guns ‘N’ Roses", "1987", "https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60"
  , "87", "All My Friends", "LCD Soundsystem", "2007", "https://i.scdn.co/image/ab67616d0000b273e6272ad26e7a55bc342a6dd0"
  , "86", "Tumbling Dice", "The Rolling Stones", "1972", "https://i.scdn.co/image/ab67616d0000b273ba42bfcfeed19018b1f8cab8"
  , "85", "Kiss", "Prince", "1986", "https://i.scdn.co/image/ab67616d0000b27323cc0f0a925845a3de4aca38"
  , "84", "Let’s Stay Together", "Al Green", "1971", "https://i.scdn.co/image/ab67616d0000b273a1fc113a6858d0824d9aaf38"
  , "83", "Desolation Row", "Bob Dylan", "1965", "https://i.scdn.co/image/ab67616d0000b2738e1a23e42f68260b7b274e09"
  , "82", "Rolling in the Deep", "Adele", "2011", "https://i.scdn.co/image/ab67616d0000b273400d915184024fd9b634da16"
  , "81", "I’m Waiting for the Man", "Velvet Underground", "1967", "https://i.scdn.co/image/ab67616d00001e02ab9a418b9fc13b4b49168c53"
  , "80", "What’d I Say", "Ray Charles", "1957", "https://i.scdn.co/image/ab67616d0000b2731990f67950270de15b709d99"
  , "79", "Back to Black", "Amy Winehouse", "2006", "https://i.scdn.co/image/ab67616d0000b2738f52f321140e4a76ea720c52"
  , "78", "Reach Out (I’ll Be There)", "The Four Tops", "1967", "https://i.scdn.co/image/ab67616d0000b27347d4f42187d70ddbaac864a2"
  , "77", "Roadrunner", "Modern Lovers", "1976", "https://i.scdn.co/image/ab67616d0000b273d44704ad46259fa0fe07d8e6"
  , "76", "I Walk the Line", "Johnny Cash", "1956", "https://i.scdn.co/image/ab67616d0000b273fd6d9f8b6b21c11de909a6e1"
  , "75", "Common People", "Pulp", "1996", "https://i.scdn.co/image/ab67616d0000b2737b6dee4e9662dff8354e39ed"
  , "74", "Hallelujah", "Leonard Cohen", "1984", "https://i.scdn.co/image/ab67616d0000b2738c56267153920f9c0df36c5b"
  , "73", "Formation", "Beyonce", "2016", "https://i.scdn.co/image/ab67616d0000b273f08be1901150d9ee465eabad"
  , "72", "Yesterday", "The Beatles", "1965", "https://i.scdn.co/image/ab67616d0000b27384c5560e04ace58dff7d75e1"
  , "71", "Fast Car", "Tracy Chapman", "1988", "https://i.scdn.co/image/ab67616d0000b2737602becfedf6e25752cb54ff"
  , "70", "Suspicious Minds", "Elvis", "1969", "https://i.scdn.co/image/ab67616d0000b273fdc0aa7765f3197ac9179ec7"
  , "69", "All Too Well", "Taylor Swift", "2013", "https://i.scdn.co/image/ab67616d0000b2738e16c6e20dbed531a9006d58"
  , "68", "Good Times", "Chic", "1979", "https://i.scdn.co/image/ab67616d0000b273d52e1afd97221bf55e937454"
  , "67", "Tangled Up in Blue", "Bob Dylan", "1975", "https://i.scdn.co/image/ab67616d0000b27372ca15b8637acbc7d15ff5ba"
  , "66", "Bridge Over Troubled Water", "Simon and Garfunkel", "1970", "https://i.scdn.co/image/ab67616d0000b273ba7fe7dd76cd4307e57dd75f"
  , "65", "September", "Earth, Wind & Fire", "1978", "https://i.scdn.co/image/ab67616d0000b2736e5689a9d09ac1fc2cba2ab0"
  , "64", "Blitzkrieg Bop", "The Ramones", "1976", "https://i.scdn.co/image/ab67616d0000b273db687db0afb257abdee10816"
  , "63", "Jolene", "Dolly Parton", "1974", "https://i.scdn.co/image/ab67616d0000b27314021e9ab9da5813bc6791cb"
  , "62", "One", "U2", "1992", "https://i.scdn.co/image/ab67616d0000b27337cd18af5725b9cad0a5ab53"
  , "61", "Stairway to Heaven", "Led Zeppelin", "1971", "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69"
  , "60", "Running Up That Hill", "Kate Bush", "1985", "https://i.scdn.co/image/ab67616d0000b27396ab64f52273635308b6bf27"
  , "59", "The Message", "Grandmaster Flash", "1982", "https://i.scdn.co/image/ab67616d0000b273798575ed938d0968a00ce887"
  , "58", "The Weight", "The Band", "1968", "https://i.scdn.co/image/ab67616d0000b27320bbceac6950d3fe13fa13c3"
  , "57", "Family Affair", "Sly and the Family Stone", "1971", "https://i.scdn.co/image/ab67616d0000b273dd426dfa1ce147d2e799380d"
  , "56", "Work It", "Missy Elliott", "2000", "https://i.scdn.co/image/ab67616d0000b27395d8583bba8f3cd794fa5bae"
  , "55", "Like a Prayer", "Madonna", "1989", "https://i.scdn.co/image/ab67616d0000b27329b3fdd3b0e5b0daae3a37b0"
  , "54", "The Tracks of My Tears", "The Miracles", "1965", "https://i.scdn.co/image/ab67616d0000b27396ebd8447b29307e31f95090"
  , "53", "Good Vibrations", "The Beach Boys", "1966", "https://i.scdn.co/image/ab67616d0000b2735478ee4e266859d6428905e1"
  , "52", "I Feel Love", "Donna Summer", "1977", "https://i.scdn.co/image/ab67616d0000b273dfda0715a34f49501dfc97a0"
  , "51", "Walk on By", "Dionne Warwick", "1964", "https://i.scdn.co/image/ab67616d0000b27391f2d96a42e77de7834a8523"
  , "50", "Gasolina", "Daddy Yankee", "2010", "https://i.scdn.co/image/ab67616d0000b2734f15e5871e85d1da64024c3d"
  , "49", "Doo Wop (That Thing)", "Lauryn Hill", "1998", "https://i.scdn.co/image/ab67616d0000b273e08b1250db5f75643f1508c9"
  , "48", "Idioteque", "Radiohead", "2000", "https://i.scdn.co/image/ab67616d0000b2736c7112082b63beefffe40151"
  , "47", "Tiny Dancer", "Elton John", "1972", "https://i.scdn.co/image/ab67616d0000b273d03ab2da904d8251a87bbc31"
  , "46", "Paper Planes", "M.I.A.", "2008", "https://i.scdn.co/image/ab67616d0000b273a46877c3e262a53224c17324"
  , "45", "Alright", "Kendrick Lamar", "2015", "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1"
  , "44", "Billie Jean", "Michael Jackson", "1982", "https://i.scdn.co/image/ab67616d0000b2739eb690cb054df293fe7711b8"
  , "43", "My Girl", "Temptations", "1965", "https://i.scdn.co/image/ab67616d0000b273d880a1e44d114357e2bfa5b7"
  , "42", "Redemption Song", "Bob Marley", "1980", "https://i.scdn.co/image/ab67616d0000b2731c40418d1c37d727e8e91b04"
  , "41", "Love Will Tear Us Apart", "Joy Division", "1980", "https://i.scdn.co/image/ab67616d0000b2731e0fdc2906851e29d09320c3"
  , "40", "All Along the Watchtower", "Jimi Hendrix", "1968", "https://i.scdn.co/image/ab67616d0000b273522088789d49e216d9818292"
  , "39", "B.O.B.", "Outkast", "2000", "https://i.scdn.co/image/ab67616d0000b27364cb45cada0ca2e8bce25872"
  , "38", "(Sittin’ on) The Dock of the Bay", "Otis Redding", "1967", "https://i.scdn.co/image/ab67616d0000b27323d1582953fa34624d3169cb"
  , "37", "When Doves Cry", "Prince", "1984", "https://i.scdn.co/image/ab67616d0000b27391db997519d710f5a58f248b"
  , "36", "Seven Nation Army", "White Stripes", "2003", "https://i.scdn.co/image/ab67616d0000b2736b95b9b21fd8e09061381e24"
  , "35", "Tutti Frutti", "Little Richard", "1955", "https://i.scdn.co/image/ab67616d0000b27337aeb66d300d1525ced34e14"
  , "34", "Papa’s Got a Brand New Bag", "James Brown", "1966", "https://i.scdn.co/image/ab67616d0000b27341a11ecfaf25c723e655e09b"
  , "33", "Johnny B. Goode", "Chuck Berry", "1958", "https://i.scdn.co/image/ab67616d0000b273229ddcbf8aebb3248f51ac99"
  , "32", "Juicy", "Notorious B.I.G.", "1994", "https://i.scdn.co/image/ab67616d0000b273f7a29d6fe5d39ec9313a19cb"
  , "31", "Satisfaction", "Rolling Stones", "1965", "https://i.scdn.co/image/ab67616d0000b273dbd5085f852c55bbca65e6f3"
  , "30", "Royals", "Lorde", "2011", "https://i.scdn.co/image/ab67616d0000b27300c4d0e0f78e7979d5a1d379"
  , "29", "Nuthin’ but a ‘G’ Thang", "Dr. Dre", "1992", "https://i.scdn.co/image/ab67616d0000b273dc20ba099bc933674f58ebae"
  , "28", "Once in a Lifetime", "Talking Heads", "1980", "https://i.scdn.co/image/ab67616d0000b273f9e2d82b9969defab2105859"
  , "27", "Born to Run", "Bruce Springsteen", "1975", "https://i.scdn.co/image/ab67616d0000b273503143a281a3f30268dcd9f9"
  , "26", "A Case of You", "Joni Mitchell", "1971", "https://i.scdn.co/image/ab67616d0000b273e9f77be85457110ebf304da7"
  , "25", "Runaway", "Kanye West", "2010", "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f"
  , "24", "A Day in the Life", "The Beatles", "1967", "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a"
  , "23", "Heroes", "David Bowie", "1977", "https://i.scdn.co/image/ab67616d0000b273204f41d52743c6a9efd62985"
  , "22", "Be My Baby", "Ronettes", "1963", "https://i.scdn.co/image/ab67616d0000b2734694c5b97d3a88efb5fc71b5"
  , "21", "Strange Fruit", "Billie Holiday", "1939", "https://i.scdn.co/image/ab67616d0000b273f8743d2c7812763f7f66e83b"
  , "20", "Dancing on My Own", "Robyn", "2010", "https://i.scdn.co/image/ab67616d0000b273ed3b40fc33cbc1f7341f6fcc"
  , "19", "Imagine", "John Lennon", "1971", "https://i.scdn.co/image/ab67616d0000b27399581550ef9746ca582bb3cc"
  , "18", "Purple Rain", "Prince", "1984", "https://i.scdn.co/image/ab67616d0000b273d52bfb90ee8dfeda8378b99b"
  , "17", "Bohemian Rhapsody", "Queen", "1975", "https://brianmay.com/wp-content/uploads/2022/12/Bo_Rhap_NATO-7-010_690x690.jpg"
  , "16", "Crazy in Love", "Beyonce", "2003", "https://i.scdn.co/image/ab67616d0000b273c5d6a5b019090ff70a444e1b"
  , "15", "I Want to Hold Your Hand", "The Beatles", "1963", "https://i.scdn.co/image/ab67616d0000b2735ef4660298ae29ee18799fc2"
  , "14", "Waterloo Sunset", "The Kinks", "1967", "https://i.scdn.co/image/ab67616d00001e022302feb7da6b546f7ed197ec"
  , "13", "Gimme Shelter", "Stones", "1969", "https://i.scdn.co/image/ab67616d0000b2732af30c881bb23cfb82a8cf99"
  , "12", "Superstition", "Stevie Wonder", "1972", "https://i.scdn.co/image/ab67616d0000b273a14b08b9a6616e121df5e8b0"
  , "11", "God Only Knows", "Beach Boys", "1966", "https://m.media-amazon.com/images/MV5BNzhhNWJiOWYtNTA3ZC00MzdhLThmZDYtYjkzZmVhZjYyYzVlXkEyXkFqcGdeQXVyNTMyODM3MTg@._V1_FMjpg_UX1000_.jpg"
  , "10", "‘Hey Ya!", "Outkast", "2003", "https://i.scdn.co/image/ab67616d0000b2736a6387ab37f64034cdc7b367"
  , "9", "Dreams", "Fleetwood Mac", "1977", "https://upload.wikimedia.org/wikipedia/en/b/b9/Fleetwood_Mac_-_Dreams.png"
  , "8", "Get Ur Freak On", "Missy Elliott", "2001", "https://i.scdn.co/image/ab67616d0000b2732e3969990abe1229c0879a7b"
  , "7", "Strawberry Fields Forever", "The Beatles", "1967", "https://i1.sndcdn.com/artworks-000346644600-1q8zh6-t500x500.jpg"
  , "6", "What’s Goin’ On?", "Marvin Gaye", "1971", "https://i.scdn.co/image/ab67616d0000b273a50b1d091804aa030724874c"
  , "5", "Smells Like Teen Spirit", "Nirvana", "1991", "https://i.scdn.co/image/ab67616d00001e02e175a19e530c898d167d39bf"
  , "4", "Like a Rolling Stone", "Bob Dylan", "1965", "https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2"
  , "3", "A Change is Gonna Come", "Sam Cooke", "1964", "https://i.scdn.co/image/ab67616d0000b2737329db55d8ec4e851b694aa1"
  , "2", "Fight the Power", "Public Enemy", "1989", "https://i.scdn.co/image/ab67616d0000b273a50264ff1ba8653b1ecf5628"
  , "1", "Respect", "Aretha Franklin", "1967", "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534452282/respect-9781534452282_hr.jpg"
];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function animateValue(start, end, duration) {
  scrolling = true;
  butt = document.getElementById("buttons");
  butt.style.display = "none";
  obj = document.getElementById("scroll");
  obj.style.display = "block";
  let startTimestamp = null;
  const step = async (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (obj.innerText == xr) {
      await sleep(1000);
      butt.style.display = "flex";
      obj.style.display = "none";
      scrolling = false;
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

async function calculate(guess) {
  animateValue(500, xr, 1100)
  await sleep(2200);
  if (xl >= xr && guess == "higher") {
    //console.log("correct!");
    score += 1;
    slide();
    await sleep(1000);
    newCompareV2();
  }
  else if (xl <= xr && guess == "lower") {
    //console.log("correct!");
    score += 1;
    if (score >= 500) {
      win();
    }
    else {
      slide();
      await sleep(1000);
      newCompareV2();
    }
  } else {
    //console.log("wrong");
    lose();
  }

}
function getTitle(rank) {
  titleIndex = ((500 - rank) * 5) + 1;
  return allsongs[titleIndex];
}
function getArtist(rank) {
  artistIndex = ((500 - rank) * 5) + 2;
  return allsongs[artistIndex];
}
function getRank(title) {
  rankIndex = allsongs.indexOf(title) - 1;
  return allsongs[rankIndex];
}
function getYear(rank) {
  yearIndex = allsongs.indexOf(rank) + 4;
  return allsongs[yearIndex];
}
function getAlbum(rank) {
  albumIndex = ((500 - rank) * 5) + 4;
  return allsongs[albumIndex];
}
function getSnippet(rank) {

  return songLinks[500 - rank];

}

function newCompareV2() {

  //console.log("start of V2");

  console.log(xl + " " + xr + " " + xrr);

  xl = xr;
  xr = xrr;
  pastranks.push(xr);
  while (pastranks.includes(xrr)) {
    xrr = Math.floor(Math.random() * (500));
  }
  console.log(xl + " " + xr + " " + xrr);

  var scoretext = document.getElementById("score");
  var hs = document.getElementById("highscore");
  var leftTitle = document.getElementById("LTitle");
  var rightTitle = document.getElementById("RTitle");
  var exTitle = document.getElementById("ExTitle");
  var leftArtist = document.getElementById("Lartist");
  var rightArtist = document.getElementById("Rartist");
  var exArtist = document.getElementById("Exartist");
  var leftRank = document.getElementById("LRank");
  var leftPic = document.getElementById("picLeft");
  var rightPic = document.getElementById("picRight");
  var exPic = document.getElementById("picEx")
  var snippetL = document.getElementById("Lsnippet");
  var snippetR = document.getElementById("Rsnippet");
  var snippetEx = document.getElementById("Exsnippet");
  scoretext.innerText = "Score: " + score;
  hs.innerText = "High Score: " + highscore;

  leftTitle.innerText = getTitle(xl);
  leftArtist.innerText = "by " + getArtist(xl);
  leftRank.innerText = xl;
  leftPic.src = getAlbum(xl);

  rightTitle.innerText = getTitle(xr);
  rightArtist.innerText = "by " + getArtist(xr);
  rightPic.src = getAlbum(xr);

  exTitle.innerText = getTitle(xrr);
  exArtist.innerText = "by " + getArtist(xrr);
  exPic.src = getAlbum(xrr);

  snippetL.src = getSnippet(xl);
  snippetR.src = getSnippet(xr);
  snippetEx.src = getSnippet(xrr);

  slide();




  //console.log("end of V2");


}

/*function newCompare() {
  xl = xr;
  slide();
  xr = xrr;
  while (pastranks.includes(xr)) {
    xrr = Math.floor(Math.random() * (500));
  }
  pastranks.push(xr);
  var scoretext = document.getElementById("score");
  var hs = document.getElementById("highscore");
  var leftTitle = document.getElementById("LTitle");
  var rightTitle = document.getElementById("RTitle");
  var leftArtist = document.getElementById("Lartist");
  var rightArtist = document.getElementById("Rartist");
  var leftRank = document.getElementById("LRank");
  var leftPic = document.getElementById("picLeft");
  var rightPic = document.getElementById("picRight");
  scoretext.innerText = "Score: " + score;
  hs.innerText = "High Score: " + highscore;
  //var rightSide = document.getElementById("wrap_right");
  //var LeftPos = rightSide.offsetLeft;
  //var RightPos = LeftPos + boxElement.offsetWidth;
  //console.log("doing it");
  leftRank.innerText = xl;
  leftTitle.innerText = rightTitle.innerText;
  rightTitle.innerText = getTitle(xr);
  //console.log(getTitle(xr));

  leftArtist.innerText = rightArtist.innerText;
  rightArtist.innerText = "by " + getArtist(xr);
  leftPic.src = rightPic.src;
  rightPic.src = getAlbum(xr);

  if (xl.toString().length == 1) {
    leftRank.style.left = "22%";
    leftRank.style.top = "140px";
    leftRank.style.fontSize = "90px";
    leftRank.innerText = xl;
  } else if (xl.toString().length == 2) {
    leftRank.style.left = "20%";
    leftRank.style.top = "170px";
    leftRank.style.fontSize = "75px";
    leftRank.innerText = xl;
  }
  else { leftRank.innerText = xl; }
}*/
function firstCompare() {

  //console.log("start of first Compare");

  score = 0;
  document.getElementById("highscore").innerText = "High Score: " + highscore;
  document.getElementById("score").innerText = "Score: " + 0;

  document.getElementById("game_over_container").style.display = "none";


  var leftTitle = document.getElementById("LTitle");
  var rightTitle = document.getElementById("RTitle");
  var extendTitle = document.getElementById("ExTitle");

  var leftArtist = document.getElementById("Lartist");
  var rightArtist = document.getElementById("Rartist");
  var extendArtist = document.getElementById("Exartist");

  var leftRank = document.getElementById("LRank");

  var leftPic = document.getElementById("picLeft");
  var rightPic = document.getElementById("picRight");
  var extendPic = document.getElementById("picEx");

  var snippetL = document.getElementById("Lsnippet");
  var snippetR = document.getElementById("Rsnippet");
  var snippetEx = document.getElementById("Exsnippet");

  xr = Math.floor(Math.random() * (500));
  xl = Math.floor(Math.random() * (500));
  xrr = Math.floor(Math.random() * (500));
  pastranks.push(xr);
  pastranks.push(xl);

  console.log(xl + " " + xr + " " + xrr);

  leftPic.src = getAlbum(xl);
  rightPic.src = getAlbum(xr);
  extendPic.src = getAlbum(xrr);

  leftRank.innerText = xl
  leftTitle.innerText = getTitle(xl);
  leftArtist.innerText = "by " + getArtist(xl);
  rightTitle.innerText = getTitle(xr);
  rightArtist.innerText = "by " + getArtist(xr);

  extendTitle.innerText = getTitle(xrr);
  extendArtist.innerText = "by " + getArtist(xrr);

  leftRank.innerText = xl;

  snippetL.src = getSnippet(xl);
  snippetR.src = getSnippet(xr);
  snippetEx.src = getSnippet(xrr);

  fadeIn(document.getElementById("Lsnippet"), 1100);
  fadeIn(document.getElementById("Rsnippet"), 1100);



  if (xr == xl) {
    score = 500;
    //console.log("Holy shit, thats a 1 in 250000 chance, go buy a lottery ticket");
  }

  //console.log("end of first compare");


}
function lose() {

  //console.log("start of lose");

  var finalscore = document.getElementById("finalscore");
  var gameover = document.getElementById("game_over_container");
  finalscore.innerText = score;
  gameover.style.display = "block";
  if (highscore < score) {
    highscore = score;
  }
  highscore.innerText = highscore
  score = 0;

  //console.log("end of lose");


}
function win() {
  //console.log("Wow, you win");
}

function slide() {

  //console.log("start of slide");

  slideCount++;

  if (slideCount % 2 == 1) {

    fadeOut(document.getElementById("Rsnippet"), 300);
    fadeOut(document.getElementById("Lsnippet"), 300);
    fadeOut(document.getElementById("Exsnippet"), 1);

  } else {

    setTimeout(function () { fadeIn(document.getElementById("Rsnippet"), 300) }, 1000);
    setTimeout(function () { fadeIn(document.getElementById("Lsnippet"), 300) }, 1000);

    //fadeIn(document.getElementById("Rsnippet"), 300);
    //fadeIn(document.getElementById("Lsnippet"), 300);

  }

  document.getElementById("wrap_right").classList.toggle('slide');
  document.getElementById("wrap_left").classList.toggle('slide');
  document.getElementById("extend").classList.toggle('slide');

  //console.log("end of slide");

}

function fadeOut(el, duration) {

  /*
   * @param el - The element to be faded out.
   * @param duration - Animation duration in milliseconds.
   */


  var step = 10 / duration,
    opacity = 1;
  function next() {
    if (opacity <= 0) { return; }
    el.style.opacity = (opacity -= step);
    setTimeout(next, 10);
  }
  next();
}

function fadeIn(el, duration) {

  /*
   * @param el - The element to be faded out.
   * @param duration - Animation duration in milliseconds.
   */

  console.log("fade in " + el.id);

  var step = 10 / duration,
    opacity = 0;
  function next() {
    if (opacity >= 1) { return; }
    el.style.opacity = (opacity += step);
    setTimeout(next, 10);
  }
  next();
}

