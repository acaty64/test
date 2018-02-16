<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class FirstTest extends DuskTestCase
{
    public function testAssertVue()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/test')
                    ->waitFor('#registration')
                    ->assertVisible('@app-registration')
                    ->assertVue('users[0].name', 'Max', '@app-registration')
                    ->clickLink('Max')
                    ->assertVue('registrations[0].name', 'Max', '@app-registrations')
                    ->assertVue('total', '1', '@app-registrations');
        });
    }
}
