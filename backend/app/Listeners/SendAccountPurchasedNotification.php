<?php

namespace App\Listeners;

use App\Events\AccountPurchased;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendAccountPurchasedNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(AccountPurchased $event)
    {
        // Send an email to the buyer
        Mail::to($event->user->email)->send(new AccountPurchasedMail($event->gameAccount));
    }
}
