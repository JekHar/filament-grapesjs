<?php

namespace JekHar\FilamentGrapesjs\Fields\Concerns;

use Closure;

trait InteractsWithTools
{
    public function getTools(): array
    {
        return $this->evaluate($this->tools);
    }
}