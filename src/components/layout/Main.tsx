import { For, Show } from "solid-js"
import { useDictionary, useFontFamily } from "@/context"
import { Form, Line } from "@/components"

export const Main = () => {
  const [ fontState ] = useFontFamily()
  const [ dictionaryState ] = useDictionary()

  const handleAudio = (url: string) => {
    const audio = new Audio(url)
    audio.play()
  }

  return (
    <main class="flex flex-col gap-6 md:gap-10 lg:gap-[3.25rem] pb-20">
      <div id="input">
        <Form />
      </div>
      <Show when={dictionaryState.notFound}>
        <section id="not-found" class="mt-32 text-center flex flex-col gap-11">
          <span class="text-[64px]">&#128533;</span>
          <div class="flex flex-col gap-6">
            <h2 class={`font-${fontState.fontFamily} text-lg font-bold text-neutral-600 dark:text-neutral-100`}>{dictionaryState.notFound?.title}</h2>
            <p class={`font-${fontState.fontFamily} text-md text-neutral-400`}>{dictionaryState.notFound?.message}</p>
          </div>
        </section>
      </Show>
      <Show when={dictionaryState.result}>
        <For each={dictionaryState.result}>
          {(result) => (
            <>
              <section id="phonetics" class="flex items-center justify-between">
                <div>
                  <h1 class={`font-${fontState.fontFamily} mb-2 text-1xl md:text-2xl lg:text-3xl font-bold text-neutral-600 dark:text-neutral-200`}>{result.word}</h1>
                  <Show when={result.phonetic}>
                    <span class={`font-${fontState.fontFamily} text-primary text-md md:text-xl`}>{result.phonetic}</span>
                  </Show>
                </div>
                <Show when={result.phonetics}>
                  <div class="w-12 h-12 md:w-[75px] md:h-[75px] hover:cursor-pointer hover:scale-105 transition-transform group" onClick={() => handleAudio(result.phonetics[0].audio)}>
                    <svg class="fill-primary/25 hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75"><g fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5"/><path class="fill-primary group-hover:fill-neutral-100" d="M29 27v21l21-10.5z"/></g></svg>
                  </div>
                </Show>
              </section>
              <section id="meanings">
                <div class="flex flex-col gap-10">
                  <For each={result.meanings}>
                    {(meaning) => (
                      <div class="flex flex-col gap-10">
                        <div class="flex items-center gap-6">
                          <h2 class={`font-${fontState.fontFamily} text-md md:text-xl text-neutral-600 dark:text-neutral-200 font-bold`}>{meaning.partOfSpeech}</h2>
                          <Line/>
                        </div>
                        <h3 class={`font-${fontState.fontFamily} text-sm md:text-lg text-neutral-400`}>Meaning</h3>
                        <ul>
                          <For each={meaning.definitions}>
                            {({definition, example}) => (
                              <li class="ml-[22px] flex gap-5">
                                <div class="text-primary">•</div>
                                <div>
                                  <p class={`font-${fontState.fontFamily} mb-4 text-xs md:text-md text-neutral-600 dark:text-neutral-100`}>{definition}</p>
                                  <Show when={example}>
                                    <span class={`font-${fontState.fontFamily} text-sm md:text-md text-neutral-400`}>"{example}"</span>
                                  </Show>
                                </div>
                              </li>
                              )}
                          </For>
                        </ul>
                        <Show when={meaning.synonyms && meaning.synonyms.length >= 1}>
                          <div class="flex gap-3 flex-wrap">
                            <h3 class={`font-${fontState.fontFamily} text-sm md:text-lg text-neutral-400`}>Synonyms</h3>
                            <For each={meaning.synonyms}>
                              {(synonym) => (
                                <p class={`font-${fontState.fontFamily} text-sm md:text-lg text-primary font-bold`}>{synonym}</p>
                              )}
                            </For>
                          </div>
                        </Show>
                        <Show when={meaning.antonyms && meaning.antonyms.length >= 1}>
                          <div class="flex gap-3 flex-wrap">
                            <h3 class={`font-${fontState.fontFamily} text-sm md:text-lg text-neutral-400`}>Antonyms</h3>
                            <For each={meaning.antonyms}>
                              {(antonym) => (
                                <p class={`font-${fontState.fontFamily} text-sm md:text-lg text-primary font-bold`}>{antonym}</p>
                              )}
                            </For>
                          </div>
                        </Show>
                      </div>
                    )}
                  </For>
                </div>
              </section>
              <Line/>
              <section id="source">
                <div class="flex gap-5 text-xs underline text-neutral-400">
                  <h3 class={`font-${fontState.fontFamily}`}>Source</h3>
                  <div class="flex flex-col gap-1">
                    <For each={result.sourceUrls}>
                      {(url) => (
                        <div class="flex gap-2">
                          <a class={`font-${fontState.fontFamily} text-neutral-600 dark:text-neutral-100`} href={url}>{url}</a>
                          <svg class="stroke-neutral-400" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              </section>
            </>
          )}
        </For>
      </Show>
    </main>
  )
}